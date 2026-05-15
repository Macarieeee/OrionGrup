import { useMemo, useState } from "react";
import { Download, Eye, X, FileText, Lock } from "lucide-react";

type CatalogCategory =
  | "ILUMINAT ARHITECTURAL"
  | "ILUMINAT DECORATIV"
  | "ILUMINAT EXTERIOR"
  | "MATERIALE ELECTRICE"
  | "OGLINZI & DECORATIUNI"
  | "PROFILE + BANDA LED";

type Catalog = {
  id: string;
  name: string;
  brand: string;
  category: CatalogCategory;
  cover: string;
  pdf: string;
};

const categories: CatalogCategory[] = [
  "ILUMINAT ARHITECTURAL",
  "ILUMINAT DECORATIV",
  "ILUMINAT EXTERIOR",
  "MATERIALE ELECTRICE",
  "OGLINZI & DECORATIUNI",
  "PROFILE + BANDA LED",
];

const catalogs: Catalog[] = [
  {
    id: "maestro-3",
    name: "Maestro 3.0",
    brand: "Linea Light Group",
    category: "ILUMINAT ARHITECTURAL",
    cover: "/catalogs/maestro-cover-0001.png",
    pdf: "/catalogs/maestro-3-rev02-eng.pdf",
  },
  {
    id: "arelux-2023",
    name: "Arelux Technical Lighting Catalog 2023",
    brand: "Arelux",
    category: "ILUMINAT ARHITECTURAL",
    cover: "/catalogs/arelux-cover-001.png",
    pdf: "/catalogs/arelux-catalogue-2023.pdf",
  },
  {
    id: "livin-light",
    name: "Livin’ Light",
    brand: "Linea Light Group",
    category: "PROFILE + BANDA LED",
    cover: "/catalogs/livin-light-cover-001.png",
    pdf: "/catalogs/livin-light.pdf",
  },
];

export default function Cataloage() {
  const [activeCategory, setActiveCategory] = useState<CatalogCategory | "TOATE">(
    "TOATE"
  );

  const [activeCatalog, setActiveCatalog] = useState<Catalog | null>(null);

  const filteredCatalogs = useMemo(() => {
    if (activeCategory === "TOATE") return catalogs;
    return catalogs.filter((catalog) => catalog.category === activeCategory);
  }, [activeCategory]);

  function handleDownload(catalog: Catalog) {
    const link = document.createElement("a");
    link.href = catalog.pdf;
    link.download = `${catalog.name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <main className="min-h-screen bg-#0a0b0d text-white pt-[var(--nav-h)]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* HERO */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            <Lock className="h-4 w-4" />
            Acces pentru utilizatori autentificați
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-semibold tracking-tight">
            Cataloage Orion Grup
          </h1>

          <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-2xl">
            Accesează cataloagele disponibile pentru soluții de iluminat,
            materiale electrice, profile LED și produse decorative. Poți
            previzualiza fiecare catalog direct pe site sau îl poți descărca.
          </p>
        </div>

        {/* FILTERS */}
        <div className="mt-12 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory("TOATE")}
            className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
              activeCategory === "TOATE"
                ? "border-white bg-white text-black"
                : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:border-white/25"
            }`}
          >
            TOATE
          </button>

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:border-white/25"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* CATALOG GRID */}
<div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
  {filteredCatalogs.map((catalog) => (
    <article
      key={catalog.id}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101113] shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
    >
      {/* COVER */}
      <div className="relative h-[220px] bg-white overflow-hidden">
        <img
          src={catalog.cover}
          alt={catalog.name}
          className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-[1.025]"
        />

        <div className="absolute left-3 top-3 max-w-[calc(100%-24px)] rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md truncate">
          {catalog.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <p className="text-xs text-white/45 truncate">{catalog.brand}</p>

        <h2 className="mt-2 min-h-[44px] text-base font-semibold leading-tight line-clamp-2">
          {catalog.name}
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveCatalog(catalog)}
            title="Vezi catalogul"
            className="group/btn relative flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-white hover:text-black"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Vezi</span>

            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-black opacity-0 shadow-lg transition group-hover/btn:opacity-100">
              Vezi catalogul
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleDownload(catalog)}
            title="Descarcă catalogul"
            className="group/btn relative flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2.5 text-xs font-bold text-black transition hover:bg-white/85"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Descarcă</span>

            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-black opacity-0 shadow-lg transition group-hover/btn:opacity-100">
              Descarcă catalogul
            </span>
          </button>
        </div>
      </div>
    </article>
  ))}
</div>

        {filteredCatalogs.length === 0 && (
          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center">
            <FileText className="mx-auto h-10 w-10 text-white/40" />
            <h2 className="mt-4 text-2xl font-semibold">
              Nu există cataloage în această categorie.
            </h2>
            <p className="mt-2 text-white/50">
              Vom adăuga în curând cataloage noi pentru această secțiune.
            </p>
          </div>
        )}
      </section>

      {/* PDF MODAL */}
      {activeCatalog && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm">
          <div className="flex h-full w-full flex-col">
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-4 py-4 sm:px-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Previzualizare catalog
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                  {activeCatalog.name}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleDownload(activeCatalog)}
                  className="hidden sm:flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-white/85"
                >
                  <Download className="h-4 w-4" />
                  Descarcă
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCatalog(null)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white hover:text-black"
                  aria-label="Închide catalogul"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PDF VIEWER */}
            <div className="h-full w-full bg-[#151515] p-3 sm:p-6">
              <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white">
                <iframe
                  src={`${activeCatalog.pdf}#toolbar=1&navpanes=0&scrollbar=1`}
                  title={activeCatalog.name}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}