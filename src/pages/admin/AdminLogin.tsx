import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const signIn = async () => {
    setBusy(true);
    setErr(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) setErr(error.message);
  };

  return (
    <main className="min-h-screen pt-[var(--nav-h)] bg-[#0a0b0d] text-white grid place-items-center px-6">
      <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <p className="mt-1 text-white/60 text-sm">Doar pentru administrare.</p>

        <div className="mt-6 space-y-3">
          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {err ? <div className="text-red-400 text-sm">{err}</div> : null}

          <button
            disabled={busy}
            onClick={signIn}
            className="w-full rounded-xl bg-white text-black px-4 py-3 font-semibold hover:opacity-90 transition duration-300 ease-in-out disabled:opacity-60"
          >
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </div>
      </div>
    </main>
  );
}