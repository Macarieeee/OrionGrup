import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import AdminLogin from "./AdminLogin";
import ProductsAdmin from "./ProductsAdmin";
import CategoriesAdmin from "./CategoriesAdmin";

export default function Admin() {
  const [sessionReady, setSessionReady] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [tab, setTab] = useState<"products" | "categories">("products");

  useEffect(() => {
    let alive = true;

    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!alive) return;
      setIsAuthed(!!data.session);
      setSessionReady(true);
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthed(!!session);
    });

    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  if (!sessionReady) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] grid place-items-center">
        <div className="text-white/70 text-sm">Loading…</div>
      </main>
    );
  }

  if (!isAuthed) return <AdminLogin />;

  return (
    <main className="min-h-screen pt-[var(--nav-h)] px-6 py-10 text-white bg-[#0a0b0d]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
            <p className="mt-1 text-white/60">CRUD produse, categorii, imagini (Supabase).</p>
          </div>

          <button
            onClick={() => supabase.auth.signOut()}
            className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
          >
            Sign out
          </button>
        </div>

        <div className="mt-8 flex gap-2">
          <button
            onClick={() => setTab("products")}
            className={`rounded-xl px-4 py-2 text-sm transition duration-300 ease-in-out ${
              tab === "products" ? "bg-white text-black" : "bg-white/10 hover:bg-white/15"
            }`}
          >
            Produse
          </button>
          <button
            onClick={() => setTab("categories")}
            className={`rounded-xl px-4 py-2 text-sm transition duration-300 ease-in-out ${
              tab === "categories" ? "bg-white text-black" : "bg-white/10 hover:bg-white/15"
            }`}
          >
            Categorii
          </button>
        </div>

        <div className="mt-8">
          {tab === "products" ? <ProductsAdmin /> : <CategoriesAdmin />}
        </div>
      </div>
    </main>
  );
}