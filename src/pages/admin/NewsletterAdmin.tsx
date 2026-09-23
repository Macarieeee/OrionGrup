import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { newsletterRequest } from '../../lib/newsletter';

type Campaign = {
  id: string; subject: string; created_at: string; recipient_count: number;
  newsletter_batches: { id: number; accepted_count: number; completed_at: string | null }[];
};
type Dashboard = {
  subscribers: { id: string; email: string; created_at: string }[];
  total: number; campaigns: Campaign[];
};

export default function NewsletterAdmin() {
  const [data, setData] = useState<Dashboard | null>(null);
  const [page, setPage] = useState(0);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const pendingId = useRef<string | null>(null);
  const working = useRef(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    let alive = true;
    newsletterRequest<Dashboard>({ action: 'dashboard', page }, true)
      .then(result => { if (alive) { setData(result); setError(''); } })
      .catch(err => { if (alive) setError(err.message); });
    return () => { alive = false; };
  }, [page]);

  async function refresh() {
    const result = await newsletterRequest<Dashboard>({ action: 'dashboard', page }, true);
    if (mounted.current) {
      setData(result);
      if (pendingId.current && result.campaigns.some(c => c.id === pendingId.current)) {
        pendingId.current = null;
        setSubject(''); setMessage(''); setConfirmed(false);
      }
    }
  }

  async function send(id: string) {
    setStatus('Trimitere în curs. Păstrează această secțiune deschisă.');
    while (mounted.current) {
      const result = await newsletterRequest<{ done: boolean }>({ action: 'send', id }, true);
      await refresh();
      if (result.done) {
        setStatus('Campania a fost procesată. Mesajele acceptate de Resend sunt în curs de livrare.');
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  async function run(id?: string) {
    if (working.current) return;
    working.current = true;
    setBusy(true); setError('');
    try {
      if (!id) {
        pendingId.current ||= crypto.randomUUID();
        const result = await newsletterRequest<{ id: string }>({ action: 'create', id: pendingId.current, subject, message }, true);
        id = result.id;
        pendingId.current = null;
        setSubject(''); setMessage(''); setConfirmed(false);
      }
      await send(id);
    } catch (err) {
      setStatus('Trimiterea s-a oprit. Progresul confirmat este salvat; poți relua campania din istoric.');
      setError(err instanceof Error ? err.message : 'Trimiterea a eșuat.');
      await refresh().catch(() => {});
    } finally {
      working.current = false;
      if (mounted.current) setBusy(false);
    }
  }

  function submit(event: FormEvent) { event.preventDefault(); if (confirmed) void run(); }
  const field = 'mt-2 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white';

  return <section className="space-y-8">
    <div>
      <h2 className="text-2xl font-semibold">Newsletter</h2>
      <p className="mt-2 text-white/60">{data ? `${data.total} abonați activi` : 'Se încarcă abonații…'}. Trimite noutățile Orion Grup prin email.</p>
    </div>
    {error && <p role="alert" className="rounded-xl bg-red-500/10 p-4 text-red-300">{error}</p>}
    {status && <p role="status" className="rounded-xl bg-white/5 p-4 text-white/80">{status}</p>}
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={submit} className="space-y-4 rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold">Mesaj nou</h3>
        <label className="block">Subiect<input className={field} value={subject} required maxLength={200} disabled={busy} onChange={e => { setSubject(e.target.value); setConfirmed(false); }} /></label>
        <label className="block">Mesaj<textarea className={field} rows={10} value={message} required maxLength={20000} disabled={busy} onChange={e => { setMessage(e.target.value); setConfirmed(false); }} /></label>
        <p className="text-xs text-white/50">Text simplu, maximum 20.000 de caractere. Linkul de dezabonare este adăugat automat.</p>
        <label className="flex items-start gap-3 text-sm text-white/70"><input type="checkbox" required checked={confirmed} disabled={busy} onChange={e => setConfirmed(e.target.checked)} className="mt-1" />Confirm trimiterea către toți abonații activi din momentul pornirii campaniei.</label>
        <button disabled={busy || !data?.total || !confirmed || !subject.trim() || !message.trim()} className="rounded-xl bg-white px-5 py-3 font-semibold text-black disabled:opacity-40">{busy ? 'Se trimite…' : 'Trimite newsletterul'}</button>
      </form>
      <div className="rounded-2xl border border-white/10 p-6">
        <h3 className="mb-4 text-lg font-semibold">Previzualizare</h3>
        <div className="rounded-xl bg-white p-6 text-gray-900 break-words">
          <p className="border-b pb-3 text-sm">Subiect: {subject || 'Subiectul mesajului'}</p>
          <h4 className="my-5 text-xl font-bold">Orion Grup</h4>
          <p className="whitespace-pre-wrap">{message || 'Mesajul tău va apărea aici.'}</p>
          <p className="mt-8 border-t pt-4 text-xs text-gray-500 underline">Dezabonare de la newsletter</p>
        </div>
      </div>
    </div>
    <div className="rounded-2xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold">Campanii recente</h3>
      <p className="mt-1 text-sm text-white/50">Dacă închizi pagina, trimiterea se oprește după lotul curent. Reluarea este disponibilă timp de 23 de ore. „Acceptate” reprezintă mesaje preluate de Resend, nu livrări confirmate.</p>
      <div className="mt-4 space-y-4">{data?.campaigns.map(c => {
        const complete = c.newsletter_batches.every(b => b.completed_at);
        const accepted = c.newsletter_batches.reduce((sum, b) => sum + b.accepted_count, 0);
        const expired = Date.now() - Date.parse(c.created_at) >= 23 * 3600000;
        return <div key={c.id} className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div><p className="font-medium">{c.subject}</p><p className="text-sm text-white/50">{new Date(c.created_at).toLocaleString('ro-RO')} · {accepted}/{c.recipient_count} acceptate · {complete ? 'Procesată' : expired ? 'Fereastră de reluare expirată' : 'În așteptare'}</p></div>
          {!complete && !expired && <button disabled={busy} onClick={() => void run(c.id)} className="rounded-xl bg-white/10 px-4 py-2 disabled:opacity-40">Reia trimiterea</button>}
        </div>;
      })}{data?.campaigns.length === 0 && <p className="text-white/50">Nu există campanii încă.</p>}</div>
    </div>
    <div className="rounded-2xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold">Abonați activi</h3>
      <div className="mt-4 overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr><th className="pb-3">Email</th><th className="pb-3">Data abonării</th></tr></thead><tbody>{data?.subscribers.map(s => <tr key={s.id} className="border-t border-white/10"><td className="py-3">{s.email}</td><td>{new Date(s.created_at).toLocaleDateString('ro-RO')}</td></tr>)}</tbody></table></div>
      {data?.total === 0 && <p className="text-white/50">Nu există abonați activi.</p>}
      <div className="mt-4 flex gap-4"><button disabled={busy || page === 0} onClick={() => setPage(p => p - 1)} className="disabled:opacity-30">Anterior</button><span>Pagina {page + 1}</span><button disabled={busy || !data || (page + 1) * 50 >= data.total} onClick={() => setPage(p => p + 1)} className="disabled:opacity-30">Următor</button></div>
    </div>
  </section>;
}
