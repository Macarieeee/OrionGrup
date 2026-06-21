import { useEffect, useMemo, useState } from "react";
import { Download, Eye, Lock, X } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

type CatalogCategory = {
  id: string;
  slug: string | null;
  name: string;
  display_order: number | null;
};

type Catalog = {
  id: string;
  name: string;
  brand: string | null;
  description: string | null;
  category_id: string | null;
  heyzine_url: string;
  download_url: string | null;
  cover_image: string | null;
  display_order: number | null;
};

const ALL_CATEGORIES = "all";

export default function Cataloage() {
  const [catalogs, setCatalogs] = useState<Catalog[]>([]);
  const [categories, setCategories] = useState<CatalogCategory[]>([]);
  const [activeCatalog, setActiveCatalog] = useState<Catalog | null>(null);
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      setLoading(true);
      setErr(null);

      const [{ data: catalogsData, error: catalogsErr }, { data: categoriesData, error: categoriesErr }] =
        await Promise.all([
          supabase
            .from("catalogs")
            .select(
              "id,name,brand,description,category_id,heyzine_url,download_url,cover_image,display_order"
            )
            .eq("is_active", true)
            .order("display_order", { ascending: true, nullsFirst: false })
            .order("created_at", { ascending: true }),
          supabase
            .from("catalog_categories")
            .select("id,slug,name,display_order")
            .order("display_order", { ascending: true, nullsFirst: false })
            .order("name", { ascending: true }),
        ]);

      if (!alive) return;

      setLoading(false);

      if (catalogsErr) {
        setErr(catalogsErr.message);
        return;
      }

      if (categoriesErr) {
        setErr(categoriesErr.message);
        return;
      }

      setCatalogs((catalogsData ?? []) as Catalog[]);
      setCategories((categoriesData ?? []) as CatalogCategory[]);
    })();

    return () => {
      alive = false;
    };
  }, []);

  const categoryById = useMemo(() => {
    return new Map(categories.map((category) => [category.id, category]));
  }, [categories]);

  const visibleCatalogs = useMemo(() => {
    if (activeCategory === ALL_CATEGORIES) return catalogs;
    return catalogs.filter((catalog) => catalog.category_id === activeCategory);
  }, [activeCategory, catalogs]);

  function handleDownload(catalog: Catalog) {
    const url = catalog.download_url || catalog.heyzine_url;
    const isDirectFile = /\.(pdf|zip|docx?|xlsx?|pptx?)($|\?)/i.test(url);

    if (isDirectFile) {
      const link = document.createElement("a");
      link.href = url;
      link.download = `${catalog.name}.pdf`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#0a0b0d] pt-[var(--nav-h)] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            <Lock className="h-4 w-4" />
            Acces pentru utilizatori autentificati
          </span>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight lg:text-7xl">
            Cataloage Orion Grup
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Acceseaza cataloagele digitale Orion Grup direct pe site. Le poti previzualiza in
            format flipbook sau le poti deschide pentru descarcare.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(ALL_CATEGORIES)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === ALL_CATEGORIES
                ? "bg-white text-black"
                : "border border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            Toate
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category.id
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {err ? (
          <div className="mt-10 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-200">
            {err}
          </div>
        ) : null}

        {loading ? (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-[540px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.04]"
              />
            ))}
          </div>
        ) : null}

        {!loading && !err ? (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleCatalogs.map((catalog) => {
              const categoryName = catalog.category_id
                ? categoryById.get(catalog.category_id)?.name ?? "Catalog"
                : "Catalog";

              return (
                <article
                  key={catalog.id}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101113] shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveCatalog(catalog)}
                    className="relative block aspect-[3/4.15] w-full overflow-hidden bg-white text-left"
                    aria-label={`Vezi ${catalog.name}`}
                  >
                    {catalog.cover_image ? (
                      <img
                        src={catalog.cover_image}
                        alt={catalog.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#1b1c1f] px-6 text-center text-sm font-semibold text-white/45">
                        Adauga o coperta din admin
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-70 transition group-hover:opacity-90" />

                    <div className="absolute left-4 top-4 max-w-[calc(100%-32px)] truncate rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      {categoryName}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center rounded-2xl bg-black/75 px-4 py-3 text-sm font-semibold text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                      Click pentru previzualizare
                    </div>
                  </button>

                  <div className="p-5">
                    <p className="truncate text-xs text-white/45">{catalog.brand || "Orion Grup"}</p>

                    <h2 className="mt-2 text-lg font-semibold leading-tight">{catalog.name}</h2>

                    {catalog.description ? (
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/55">
                        {catalog.description}
                      </p>
                    ) : null}

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveCatalog(catalog)}
                        title="Vezi catalogul"
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Vezi</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDownload(catalog)}
                        title="Descarca catalogul"
                        className="flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-sm font-bold text-black transition hover:bg-white/85"
                      >
                        <Download className="h-4 w-4" />
                        <span>Descarca</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : null}

        {!loading && !err && !visibleCatalogs.length ? (
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center text-white/60">
            Nu exista cataloage in aceasta categorie.
          </div>
        ) : null}
      </section>

      {activeCatalog ? (
        <div className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm">
          <div className="flex h-full w-full flex-col">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-4 py-4 sm:px-6">
              <div className="min-w-0 pr-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Previzualizare catalog
                </p>
                <h2 className="mt-1 truncate text-lg font-semibold text-white sm:text-xl">
                  {activeCatalog.name}
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleDownload(activeCatalog)}
                  className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-white/85 sm:flex"
                >
                  <Download className="h-4 w-4" />
                  Descarca
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCatalog(null)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white hover:text-black"
                  aria-label="Inchide catalogul"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="h-full w-full bg-[#151515] p-2 sm:p-4">
              <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white">
                <iframe
                  src={activeCatalog.heyzine_url}
                  title={activeCatalog.name}
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
