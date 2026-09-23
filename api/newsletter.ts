import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { createHmac } from 'node:crypto';

export const config = { maxDuration: 60 };
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const escapeHtml = (text: string) => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
type Recipient = { id: string; email: string; token: string };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Vary', 'Origin');
  const origins = (process.env.NEWSLETTER_ALLOWED_ORIGINS || 'https://oriongrup.ro,https://www.oriongrup.ro').split(',').map(s => s.trim());
  if (process.env.VERCEL_URL) origins.push(`https://${process.env.VERCEL_URL}`);
  if (process.env.NEWSLETTER_PUBLIC_API_URL) {
    try { origins.push(new URL(process.env.NEWSLETTER_PUBLIC_API_URL).origin); } catch { /* validated on campaign creation */ }
  }
  const origin = req.headers.origin;
  if (origin && !origins.includes(origin)) return res.status(403).json({ message: 'Origine nepermisă.' });
  if (origin) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (!['GET', 'POST'].includes(req.method || '')) return res.status(405).json({ message: 'Metodă nepermisă.' });

  try {
    const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error('Newsletter database is not configured');
    const db = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
    // GET only displays confirmation: email scanners must not unsubscribe users.
    if (req.query.action === 'unsubscribe') {
      const token = typeof req.query.token === 'string' ? req.query.token : '';
      if (!uuid.test(token)) return res.status(400).send('Link de dezabonare invalid.');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Content-Security-Policy', "default-src 'none'; form-action 'self'; frame-ancestors 'none'");
      res.setHeader('Referrer-Policy', 'no-referrer');
      if (req.method === 'GET') return res.status(200).send('<!doctype html><html lang="ro"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Dezabonare Orion Grup</title><h1>Dezabonare newsletter</h1><form method="post"><button type="submit">Confirmă dezabonarea</button></form></html>');
      const { error } = await db.from('newsletter_subscribers').update({ unsubscribed_at: new Date().toISOString() }).eq('unsubscribe_token', token);
      if (error) throw error;
      return res.status(200).send('<!doctype html><html lang="ro"><meta charset="utf-8"><title>Orion Grup</title><h1>Ai fost dezabonat.</h1><p>Nu vei mai primi newsletterele viitoare.</p></html>');
    }
    if (req.method !== 'POST') return res.status(405).json({ message: 'Folosește POST.' });
    let body: Record<string, unknown>;
    try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}; }
    catch { return res.status(400).json({ message: 'Date invalide.' }); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return res.status(400).json({ message: 'Date invalide.' });
    if (body.action === 'subscribe') {
      const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
      if (body.consent !== true || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ message: 'Introdu o adresă de email validă și acceptă abonarea.' });
      // Vercel overwrites this header; do not trust a client-supplied IP field.
      const forwarded = req.headers['x-vercel-forwarded-for'];
      const ip = (typeof forwarded === 'string' ? forwarded.split(',')[0] : req.socket?.remoteAddress) || 'unknown';
      const bucket = createHmac('sha256', key).update(ip).digest('hex');
      const { data: allowed, error: limitError } = await db.rpc('newsletter_subscription_allowed', { bucket_key: bucket });
      if (limitError) throw limitError;
      if (!allowed) return res.status(429).json({ message: 'Prea multe încercări. Revino peste o oră.' });
      // Never reactivate an unsubscribed address via an unauthenticated request.
      const { error } = await db.from('newsletter_subscribers').upsert({ email }, { onConflict: 'email', ignoreDuplicates: true });
      if (error) throw error;
      return res.status(200).json({ message: 'Cererea a fost înregistrată. Dacă adresa nu a fost dezabonată anterior, vei primi newsletterele noastre.' });
    }

    const token = req.headers.authorization?.match(/^Bearer (.+)$/)?.[1];
    if (!token) return res.status(401).json({ message: 'Autentificare necesară.' });
    const { data: auth, error: authError } = await db.auth.getUser(token);
    if (authError || !auth.user) return res.status(401).json({ message: 'Sesiune expirată. Autentifică-te din nou.' });
    const admins = (process.env.NEWSLETTER_ADMIN_IDS || '').split(',').map(s => s.trim());
    if (!admins.includes(auth.user.id)) return res.status(403).json({ message: 'Nu ai drepturi de administrator newsletter.' });

    if (body.action === 'dashboard') {
      const page = typeof body.page === 'number' && Number.isInteger(body.page) ? Math.max(0, body.page) : 0;
      const results = await Promise.all([
        db.from('newsletter_subscribers').select('id,email,created_at', { count: 'exact' }).is('unsubscribed_at', null).order('created_at', { ascending: false }).order('id').range(page * 50, page * 50 + 49),
        db.from('newsletter_campaigns').select('id,subject,created_at,recipient_count,newsletter_batches(id,accepted_count,completed_at)').order('created_at', { ascending: false }).limit(20),
      ]);
      for (const result of results) if (result.error) throw result.error;
      return res.status(200).json({ subscribers: results[0].data, total: results[0].count, campaigns: results[1].data });
    }
    if (!process.env.RESEND_API_KEY) throw new Error('Resend is not configured');
    if (body.action === 'create') {
      const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
      const message = typeof body.message === 'string' ? body.message.trim() : '';
      if (typeof body.id !== 'string' || !uuid.test(body.id) || !subject || subject.length > 200 || /[\r\n]/.test(subject) || !message || message.length > 20000) return res.status(400).json({ message: 'Subiectul sau mesajul este invalid.' });
      const endpoint = process.env.NEWSLETTER_PUBLIC_API_URL;
      if (!endpoint || new URL(endpoint).protocol !== 'https:') throw new Error('Configure NEWSLETTER_PUBLIC_API_URL with the public HTTPS endpoint');
      const { error } = await db.rpc('create_newsletter_campaign', {
        campaign_id: body.id, campaign_subject: subject, campaign_message: message,
        campaign_sender: process.env.RESEND_FROM_EMAIL || 'Orion Grup <noreply@oriongrup.eu>',
        campaign_endpoint: endpoint, administrator: auth.user.id,
      });
      if (error) throw error;
      return res.status(200).json({ id: body.id });
    }
    if (body.action === 'send' && typeof body.id === 'string' && uuid.test(body.id)) {
      const { data: campaign, error } = await db.from('newsletter_campaigns').select('*').eq('id', body.id).single();
      if (error) throw error;
      // Resend retains idempotency keys for 24h. Stop earlier to avoid duplicate retries.
      if (Date.now() - Date.parse(campaign.created_at) >= 23 * 3600000) return res.status(409).json({ message: 'Fereastra de reluare a expirat. Verifică trimiterile în Resend înainte de o nouă campanie.' });
      const { data: batches, error: batchError } = await db.from('newsletter_batches').select('*').eq('campaign_id', body.id).is('completed_at', null).order('id').limit(1);
      if (batchError) throw batchError;
      const batch = batches?.[0];
      if (!batch) return res.status(200).json({ done: true });
      if (batch.payload === null) {
        const recipients = batch.recipients as Recipient[];
        const { data: active, error: activeError } = await db.from('newsletter_subscribers').select('id').in('id', recipients.map(r => r.id)).is('unsubscribed_at', null);
        if (activeError) throw activeError;
        const activeIds = new Set(active?.map(r => r.id));
        const payload = recipients.filter(r => activeIds.has(r.id)).map(r => {
          const unsubscribe = `${campaign.endpoint}?action=unsubscribe&token=${r.token}`;
          return {
            from: campaign.sender, to: [r.email], subject: campaign.subject,
            text: `${campaign.message}\n\nDezabonare: ${unsubscribe}`,
            html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto"><h2>Orion Grup</h2><div style="white-space:pre-wrap">${escapeHtml(campaign.message)}</div><hr><p><a href="${escapeHtml(unsubscribe)}">Dezabonare de la newsletter</a></p></div>`,
            headers: { 'List-Unsubscribe': `<${unsubscribe}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
          };
        });
        const { error: saveError } = await db.from('newsletter_batches').update({ payload }).eq('id', batch.id).is('payload', null);
        if (saveError) throw saveError;
      }
      // Read the winning immutable payload when two admins process the same batch.
      const { data: saved, error: savedError } = await db.from('newsletter_batches').select('payload').eq('id', batch.id).single();
      if (savedError) throw savedError;
      if (saved.payload.length) {
        const { error: sendError } = await new Resend(process.env.RESEND_API_KEY).batch.send(saved.payload, { idempotencyKey: `newsletter/${body.id}/${batch.id}` });
        if (sendError) {
          console.error('Newsletter Resend error', sendError.name);
          return res.status(502).json({ message: 'Resend nu a confirmat lotul. Verifică limita contului și expeditorul, apoi reia campania.' });
        }
      }
      const { error: completeError } = await db.from('newsletter_batches').update({ completed_at: new Date().toISOString(), accepted_count: saved.payload.length }).eq('id', batch.id);
      if (completeError) throw completeError;
      return res.status(200).json({ done: false, accepted: saved.payload.length });
    }
    return res.status(400).json({ message: 'Acțiune invalidă.' });
  } catch (error) {
    console.error('Newsletter request failed', error instanceof Error ? error.message : 'Database error');
    return res.status(500).json({ message: 'Newsletterul nu este disponibil momentan. Verifică configurarea serverului și migrarea SQL.' });
  }
}
