import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import AdminLogin from "./AdminLogin";
import ProductsAdmin from "./ProductsAdmin";
import CategoriesAdmin from "./CategoriesAdmin";
import PortfolioProjectsAdmin from "./PortfolioProjectsAdmin";
import PortfolioCategoriesAdmin from "./PortfolioCategoriesAdmin";
import CatalogsAdmin from "./CatalogsAdmin";
import CatalogCategoriesAdmin from "./CatalogCategoriesAdmin";

type AdminTab =
  | "products"
  | "categories"
  | "portfolio-projects"
  | "portfolio-categories"
  | "catalogs"
  | "catalog-categories";

export default function Admin() {
  const [sessionReady, setSessionReady] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [tab, setTab] = useState<AdminTab>("products");

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
            <p className="mt-1 text-white/60">
              CRUD produse, categorii, portofoliu și imagini.
            </p>
          </div>

          <button
            onClick={() => supabase.auth.signOut()}
            className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
          >
            Sign out
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
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
            Categorii produse
          </button>

          <button
            onClick={() => setTab("portfolio-projects")}
            className={`rounded-xl px-4 py-2 text-sm transition duration-300 ease-in-out ${
              tab === "portfolio-projects" ? "bg-white text-black" : "bg-white/10 hover:bg-white/15"
            }`}
          >
            Proiecte portofoliu
          </button>

          <button
            onClick={() => setTab("portfolio-categories")}
            className={`rounded-xl px-4 py-2 text-sm transition duration-300 ease-in-out ${
              tab === "portfolio-categories" ? "bg-white text-black" : "bg-white/10 hover:bg-white/15"
            }`}
          >
            Categorii portofoliu
          </button>

          <button
            onClick={() => setTab("catalogs")}
            className={`rounded-xl px-4 py-2 text-sm transition duration-300 ease-in-out ${
              tab === "catalogs" ? "bg-white text-black" : "bg-white/10 hover:bg-white/15"
            }`}
          >
            Cataloage
          </button>

          <button
            onClick={() => setTab("catalog-categories")}
            className={`rounded-xl px-4 py-2 text-sm transition duration-300 ease-in-out ${
              tab === "catalog-categories" ? "bg-white text-black" : "bg-white/10 hover:bg-white/15"
            }`}
          >
            Categorii cataloage
          </button>
        </div>

        <div className="mt-8">
          {tab === "products" ? <ProductsAdmin /> : null}
          {tab === "categories" ? <CategoriesAdmin /> : null}
          {tab === "portfolio-projects" ? <PortfolioProjectsAdmin /> : null}
          {tab === "portfolio-categories" ? <PortfolioCategoriesAdmin /> : null}
          {tab === "catalogs" ? <CatalogsAdmin /> : null}
          {tab === "catalog-categories" ? <CatalogCategoriesAdmin /> : null}
        </div>
      </div>
    </main>
  );
}
