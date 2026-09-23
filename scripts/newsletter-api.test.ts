import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import handler from '../api/newsletter';

process.env.SUPABASE_URL = 'https://db.example.com';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key';
process.env.NEWSLETTER_ADMIN_IDS = 'administrator';
process.env.RESEND_API_KEY = 're_test';
process.env.NEWSLETTER_PUBLIC_API_URL = 'https://api.example.com/api/newsletter';
const nativeFetch = globalThis.fetch;

async function request(body: unknown, headers: Record<string, string> = {}, query = {}, method = 'POST') {
  let status = 200;
  let result: unknown;
  const res = {
    setHeader() {}, status(code: number) { status = code; return this; },
    json(value: unknown) { result = value; return this; },
    send(value: unknown) { result = value; return this; }, end() {},
  };
  await handler({ method, headers, body, query, socket: { remoteAddress: '127.0.0.1' } } as VercelRequest, res as unknown as VercelResponse);
  return { status, result };
}

test('newsletter endpoint security and retry behavior', async t => {
  t.after(() => { globalThis.fetch = nativeFetch; });
  await t.test('rejects invalid emails, consent, origins and missing authentication without network calls', async () => {
    globalThis.fetch = async () => { throw new Error('Unexpected network call'); };
    assert.equal((await request({ action: 'subscribe', email: 'bad', consent: true })).status, 400);
    assert.equal((await request({ action: 'subscribe', email: 'test@example.com' })).status, 400);
    assert.equal((await request({ action: 'dashboard' })).status, 401);
    assert.equal((await request({}, { origin: 'https://evil.example' })).status, 403);
  });
  await t.test('ordinary authenticated users cannot administer newsletters', async () => {
    globalThis.fetch = async () => Response.json({ id: 'customer' });
    assert.equal((await request({ action: 'dashboard' }, { authorization: 'Bearer customer-token' })).status, 403);
  });
  await t.test('normalizes email and preserves duplicate/unsubscribed addresses', async () => {
    let inserts = 0;
    globalThis.fetch = async (input, init) => {
      const url = String(input);
      if (url.includes('/rpc/')) return Response.json(true);
      assert.ok(url.includes('newsletter_subscribers'));
      assert.equal(JSON.parse(String(init?.body)).email, 'test@example.com');
      assert.ok(new Headers(init?.headers).get('Prefer')?.includes('resolution=ignore-duplicates'));
      inserts++;
      return new Response(null, { status: 201 });
    };
    assert.equal((await request({ action: 'subscribe', email: ' TEST@Example.com ', consent: true })).status, 200);
    assert.equal(inserts, 1);
  });
  await t.test('rate limit prevents insertion', async () => {
    globalThis.fetch = async input => { assert.ok(String(input).includes('/rpc/')); return Response.json(false); };
    assert.equal((await request({ action: 'subscribe', email: 'test@example.com', consent: true })).status, 429);
  });
  await t.test('email scanner GET does not unsubscribe; form/one-click POST does', async () => {
    const query = { action: 'unsubscribe', token: '00000000-0000-4000-8000-000000000001' };
    let updates = 0;
    globalThis.fetch = async (_input, init) => {
      assert.equal(init?.method, 'PATCH'); updates++;
      return new Response(null, { status: 204 });
    };
    assert.equal((await request({}, {}, query, 'GET')).status, 200);
    assert.equal(updates, 0);
    assert.equal((await request('List-Unsubscribe=One-Click', {}, query)).status, 200);
    assert.equal(updates, 1);
  });
  await t.test('retries the immutable batch with the same Resend key after a failed progress write', async () => {
    const id = '00000000-0000-4000-8000-000000000002';
    const payload = [{ from: 'Orion <news@example.com>', to: ['test@example.com'], subject: 'News', text: 'Hello' }];
    const sent: { key: string | null; body: unknown }[] = [];
    let writes = 0;
    globalThis.fetch = async (input, init) => {
      const url = String(input);
      if (url.includes('/auth/')) return Response.json({ id: 'administrator' });
      if (url.includes('newsletter_campaigns')) return Response.json({ id, created_at: new Date().toISOString() });
      if (url.includes('api.resend.com')) {
        sent.push({ key: new Headers(init?.headers).get('Idempotency-Key'), body: JSON.parse(String(init?.body)) });
        return Response.json({ data: [{ id: 'email-id' }] });
      }
      if (init?.method === 'PATCH') {
        writes++;
        return writes === 1 ? Response.json({ message: 'Simulated database failure' }, { status: 500 }) : new Response(null, { status: 204 });
      }
      if (new URL(url).searchParams.get('select') === 'payload') return Response.json({ payload });
      return Response.json([{ id: 1, payload }]);
    };
    const headers = { authorization: 'Bearer admin-token' };
    assert.equal((await request({ action: 'send', id }, headers)).status, 500);
    assert.equal((await request({ action: 'send', id }, headers)).status, 200);
    assert.equal(sent.length, 2);
    assert.deepEqual(sent[0], sent[1]);
    assert.equal(sent[0].key, `newsletter/${id}/1`);
  });
  await t.test('prepares private, escaped messages only for still-active subscribers', async () => {
    let payload: { to: string[]; html: string; headers: Record<string, string> }[] = [];
    globalThis.fetch = async (input, init) => {
      const url = String(input);
      if (url.includes('/auth/')) return Response.json({ id: 'administrator' });
      if (url.includes('newsletter_campaigns')) return Response.json({
        created_at: new Date().toISOString(), sender: 'news@example.com', subject: 'News',
        message: '<script>alert(1)</script>', endpoint: 'https://api.example.com/api/newsletter',
      });
      if (url.includes('newsletter_subscribers')) return Response.json([{ id: 'active' }]);
      if (url.includes('api.resend.com')) {
        assert.equal(payload.length, 1);
        assert.deepEqual(payload[0].to, ['active@example.com']);
        assert.ok(!payload[0].html.includes('<script>'));
        assert.ok(payload[0].html.includes('&lt;script&gt;'));
        assert.ok(payload[0].headers['List-Unsubscribe'].includes('token=active-token'));
        return Response.json({ data: [{ id: 'email-id' }] });
      }
      if (init?.method === 'PATCH') {
        const body = JSON.parse(String(init.body));
        if (body.payload) payload = body.payload;
        return new Response(null, { status: 204 });
      }
      if (new URL(url).searchParams.get('select') === 'payload') return Response.json({ payload });
      return Response.json([{ id: 2, payload: null, recipients: [
        { id: 'active', email: 'active@example.com', token: 'active-token' },
        { id: 'unsubscribed', email: 'unsubscribed@example.com', token: 'other-token' },
      ] }]);
    };
    assert.equal((await request({ action: 'send', id: '00000000-0000-4000-8000-000000000002' }, { authorization: 'Bearer admin' })).status, 200);
  });
  await t.test('expired campaigns cannot send again', async () => {
    globalThis.fetch = async input => String(input).includes('/auth/')
      ? Response.json({ id: 'administrator' })
      : Response.json({ created_at: '2020-01-01T00:00:00Z' });
    assert.equal((await request({ action: 'send', id: '00000000-0000-4000-8000-000000000002' }, { authorization: 'Bearer admin' })).status, 409);
  });
});
