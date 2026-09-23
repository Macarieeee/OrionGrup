// Run with: npx tsx --test scripts/newsletter-sql.test.ts
// Test dependency: npm install --no-save --package-lock=false @electric-sql/pglite@0.4.6
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { PGlite } from '@electric-sql/pglite';

test('newsletter migration, permissions, snapshots and subscription limits', async () => {
  const db = new PGlite();
  try {
    await db.exec(`
      create role anon; create role authenticated; create role service_role;
      create schema auth;
      create table auth.users(id uuid primary key);
      insert into auth.users values ('00000000-0000-4000-8000-000000000001');
    `);
    await db.exec(await readFile(new URL('../database-migrations/2026-09-23-newsletter.sql', import.meta.url), 'utf8'));
    await db.exec(`insert into newsletter_subscribers(email)
      select 'person' || n || '@example.com' from generate_series(1, 1205) n;
      update newsletter_subscribers set unsubscribed_at = now() where email = 'person1@example.com';`);
    const create = `select create_newsletter_campaign(
      '00000000-0000-4000-8000-000000000002', 'Subiect', 'Mesaj',
      'news@example.com', 'https://example.com/api/newsletter',
      '00000000-0000-4000-8000-000000000001');`;
    await db.exec(create);
    await db.exec(create);
    const { rows } = await db.query<{ recipient_count: number; batches: number; largest: number }>(`
      select c.recipient_count, count(b.id)::int batches, max(jsonb_array_length(b.recipients)) largest
      from newsletter_campaigns c join newsletter_batches b on b.campaign_id = c.id
      group by c.id;
    `);
    assert.deepEqual(rows, [{ recipient_count: 1204, batches: 25, largest: 50 }]);
    await db.exec("insert into newsletter_subscribers(email) values ('late@example.com');");
    assert.equal((await db.query<{ recipient_count: number }>('select recipient_count from newsletter_campaigns')).rows[0].recipient_count, 1204);
    await assert.rejects(db.exec("insert into newsletter_subscribers(email) values ('person2@example.com');"), /unique/);
    for (let i = 1; i <= 11; i++) {
      const result = await db.query<{ allowed: boolean }>("select newsletter_subscription_allowed('hashed-ip') allowed");
      assert.equal(result.rows[0].allowed, i <= 10);
    }
    await db.exec('set role anon');
    await assert.rejects(db.query('select email from newsletter_subscribers'), /permission denied/);
    await assert.rejects(db.exec(create), /permission denied/);
    await db.exec('reset role; set role authenticated');
    await assert.rejects(db.query('select email from newsletter_subscribers'), /permission denied/);
    await assert.rejects(db.exec(create), /permission denied/);
    await db.exec('reset role; set role service_role');
    // PGlite's mock service_role does not bypass RLS; verify grants independently.
    const permissions = await db.query<{ allowed: boolean }>("select has_table_privilege('service_role', 'newsletter_subscribers', 'SELECT,INSERT,UPDATE') allowed");
    assert.equal(permissions.rows[0].allowed, true);
  } finally { await db.close(); }
});
