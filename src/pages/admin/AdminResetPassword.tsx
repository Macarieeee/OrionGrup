import { useEffect, useState } from "react";
import { recoveryClient, recoveryReady, supabase } from "../../lib/supabaseClient";

export default function AdminResetPassword() {
  const [ready, setReady] = useState(false);
  const [valid, setValid] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [busy, setBusy] = useState(false);
  const [changed, setChanged] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    recoveryReady.then((ok) => {
      if (!active) return;
      setValid(ok);
      setReady(true);
      if (!ok) setError("Link invalid sau expirat. Solicită un email nou de resetare.");
    }).catch(() => {
      if (!active) return;
      setReady(true);
      setError("Nu am putut verifica linkul. Solicită un email nou de resetare.");
    });
    return () => { active = false; };
  }, []);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!valid || !recoveryClient || busy) return;
    setError("");
    if (!changed && (password.length < 8 || password !== confirmation)) {
      setError(password.length < 8 ? "Parola trebuie să aibă minimum 8 caractere." : "Parolele nu coincid.");
      return;
    }
    setBusy(true);
    try {
      if (!changed) {
        const { error } = await recoveryClient.auth.updateUser({ password });
        if (error) throw error;
        setChanged(true);
        setPassword("");
        setConfirmation("");
      }
      const { error: recoveryError } = await recoveryClient.auth.signOut({ scope: "global" });
      if (recoveryError) throw new Error("Parola a fost schimbată, dar închiderea sesiunii a eșuat. Apasă din nou pentru a finaliza.");
      const { error: normalError } = await supabase.auth.signOut({ scope: "local" });
      if (normalError) throw new Error("Nu am putut închide sesiunea existentă. Încearcă din nou.");
      setValid(false);
      setDone(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Operația a eșuat. Încearcă din nou.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white grid place-items-center px-6">
      <div className="w-full max-w-[460px] rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h1 className="text-2xl font-semibold">Resetare parolă</h1>
        {!ready ? <p className="mt-6">Se verifică linkul…</p> : done ? (
          <div className="mt-6 space-y-4">
            <p role="status">Parola a fost schimbată. Autentifică-te cu adresa de email și noua parolă.</p>
            <a className="block underline" href="/sign-in?mode=login">Mergi la autentificare</a>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-6 space-y-4">
            <p className="text-sm text-white/60">Alege o parolă nouă. După salvare va trebui să te autentifici.</p>
            {!changed && <>
              <label className="block">Parolă nouă
                <input className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3" type="password" autoComplete="new-password" minLength={8} required disabled={!valid || busy} value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <label className="block">Confirmă parola
                <input className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3" type="password" autoComplete="new-password" minLength={8} required disabled={!valid || busy} value={confirmation} onChange={(e) => setConfirmation(e.target.value)} />
              </label>
            </>}
            {error && <p role="alert" className="text-red-400 text-sm">{error}</p>}
            <button disabled={!valid || busy} className="w-full rounded-xl bg-white text-black px-4 py-3 font-semibold disabled:opacity-50">
              {busy ? "Se salvează…" : changed ? "Finalizează resetarea" : "Schimbă parola"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
