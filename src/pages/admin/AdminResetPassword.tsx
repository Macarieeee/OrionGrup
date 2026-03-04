import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

function parseTokensFromUrl() {
  // caută access_token și refresh_token oriunde în URL (hash sau query)
  const full = window.location.href;

  const mAccess = full.match(/access_token=([^&]+)/);
  const mRefresh = full.match(/refresh_token=([^&]+)/);

  if (!mAccess || !mRefresh) return null;

  return {
    access_token: decodeURIComponent(mAccess[1]),
    refresh_token: decodeURIComponent(mRefresh[1]),
  };
}
export default function AdminResetPassword() {
  const nav = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    // 1) încercăm să setăm sesiunea din tokenii din hash
    (async () => {
      setErr(null);
      const tokens = parseTokensFromUrl();

      // dacă nu sunt tokeni, poate deja ai sesiune din recovery flow
      if (!tokens) {
        const { data } = await supabase.auth.getSession();
        setReady(true);
        if (!data.session) {
          setErr("Link invalid/expirat. Cere din nou reset password.");
        }
        return;
      }

      const { error } = await supabase.auth.setSession(tokens);
      setReady(true);
      if (error) setErr(error.message);
    })();
  }, []);

  const update = async () => {
    setErr(null);
    setMsg(null);

    if (password.length < 8) {
      setErr("Parola trebuie să aibă minim 8 caractere.");
      return;
    }
    if (password !== password2) {
      setErr("Parolele nu coincid.");
      return;
    }

    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);

    if (error) {
      setErr(error.message);
      return;
    }

    setMsg("Parola a fost schimbată. Te poți loga acum.");
    // opțional: te duce la /admin după 1s
    setTimeout(() => nav("/admin"), 800);
  };

  return (
    <main className="min-h-screen pt-[var(--nav-h)] bg-[#0a0b0d] text-white grid place-items-center px-6">
      <div className="w-full max-w-[460px] rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h1 className="text-2xl font-semibold">Resetare parolă</h1>
        <p className="mt-1 text-white/60 text-sm">
          Setează o parolă nouă pentru contul tău de admin.
        </p>

        {!ready ? (
          <div className="mt-6 text-white/70 text-sm">Se verifică link-ul…</div>
        ) : (
          <>
            <div className="mt-6 space-y-3">
              <input
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
                placeholder="Parolă nouă"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
                placeholder="Confirmă parola"
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />

              {err ? <div className="text-red-400 text-sm">{err}</div> : null}
              {msg ? <div className="text-green-400 text-sm">{msg}</div> : null}

              <button
                disabled={busy}
                onClick={update}
                className="w-full rounded-xl bg-white text-black px-4 py-3 font-semibold hover:opacity-90 transition duration-300 ease-in-out disabled:opacity-60"
              >
                {busy ? "Se salvează…" : "Schimbă parola"}
              </button>
            </div>

            <button
              onClick={() => nav("/admin")}
              className="mt-4 w-full rounded-xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
            >
              Înapoi la Admin
            </button>
          </>
        )}
      </div>
    </main>
  );
}