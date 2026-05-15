import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function SignIn() {
  const navigate = useNavigate();
const location = useLocation();
const from = (location.state as any)?.from?.pathname || "/";
  const [mode, setMode] = useState<"register" | "login">("register");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [cui, setCui] = useState("");
  const [newsletter, setNewsletter] = useState(true);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      if (mode === "register") {
        if (!name.trim()) {
          setError("Te rugăm să completezi numele persoanei sau numele firmei.");
          setLoading(false);
          return;
        }

        const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      name: name.trim(),
      cui: cui.trim() || null,
      newsletter,
    },
  },
});

console.log("SIGN UP DATA:", data);
console.log("SIGN UP ERROR:", error);

if (error) throw error;

if (!data.user) {
  throw new Error("Contul nu a fost creat. Verifică setările Supabase Auth.");
}

setMessage("Contul a fost creat cu succes. Te poți autentifica acum.");

        setEmail("");
        setPassword("");
        setName("");
        setCui("");
        setNewsletter(true);
      }

      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        navigate(from, { replace: true });
      }
    } catch (err: any) {
      setError(err.message || "A apărut o eroare. Încearcă din nou.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-#0a0b0d text-white pt-[var(--nav-h)]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid min-h-[calc(100vh-var(--nav-h)-160px)] grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
              Cont Orion Grup
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-semibold tracking-tight">
              Acces rapid la soluțiile Orion Grup
            </h1>

            <p className="mt-6 text-white/65 text-lg leading-relaxed">
              Creează un cont pentru a primi actualizări, cataloage, noutăți și
              recomandări potrivite pentru proiectele tale de iluminat și
              instalații electrice.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-2xl font-semibold">1996</p>
                <p className="mt-2 text-sm text-white/55">anul fondării</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-2xl font-semibold">Premium</p>
                <p className="mt-2 text-sm text-white/55">soluții dedicate</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-2xl font-semibold">B2B / B2C</p>
                <p className="mt-2 text-sm text-white/55">clienți variați</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-xl lg:ml-auto">
            <div className="rounded-[2rem] border border-white/10 bg-[#111214] p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="grid grid-cols-2 gap-2 rounded-full bg-white/[0.04] p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMode("register");
                    setError("");
                    setMessage("");
                  }}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                    mode === "register"
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Creează cont
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setError("");
                    setMessage("");
                  }}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                    mode === "login"
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Intră în cont
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {mode === "register" && (
                  <>
                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        Nume persoană fizică / Nume firmă
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Andrei Popescu / Orion Grup SRL"
                        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        CUI{" "}
                        <span className="text-white/35">
                          — opțional
                        </span>
                      </label>
                      <input
                        type="text"
                        value={cui}
                        onChange={(e) => setCui(e.target.value)}
                        placeholder="Ex: RO12345678"
                        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@exemplu.ro"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Parolă
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 caractere"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
                    required
                    minLength={6}
                  />
                </div>

                {mode === "register" && (
                  <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <input
                      type="checkbox"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-white"
                    />

                    <span>
                      <span className="block text-sm font-medium text-white">
                        Abonare la newsletter
                      </span>
                      <span className="mt-1 block text-sm text-white/50">
                        Vreau să primesc noutăți, cataloage și recomandări
                        despre soluțiile Orion Grup.
                      </span>
                    </span>
                  </label>
                )}

                {error && (
                  <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                )}

                {message && (
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Se procesează..."
                    : mode === "register"
                    ? "Creează cont"
                    : "Intră în cont"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-white/45">
                Înapoi la{" "}
                <Link to="/" className="text-white hover:underline">
                  pagina principală
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}