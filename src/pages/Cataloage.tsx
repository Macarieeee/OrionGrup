import { useState } from "react";
import { Download, Eye, X, Lock } from "lucide-react";

type Catalog = {
  id: string;
  name: string;
  brand: string;
  category: string;
  heyzineUrl: string;
  downloadUrl: string;
};

const catalogs: Catalog[] = [
  {
    id: "orion-heyzine-catalog",
    name: "Catalog Orion Grup",
    brand: "Orion Grup",
    category: "CATALOG DIGITAL",
    heyzineUrl: "https://heyzine.com/flip-book/40b2490807.html",
    // Dacă ai un PDF direct, pune aici URL-ul PDF-ului și butonul îl va descărca.
    // Momentan folosește linkul Heyzine, pentru că acesta este linkul disponibil.
    downloadUrl: "https://heyzine.com/flip-book/40b2490807.html",
  },
];

export default function Cataloage() {
  const [activeCatalog, setActiveCatalog] = useState<Catalog | null>(null);

  function handleDownload(catalog: Catalog) {
    const isDirectFile = /\.(pdf|zip|docx?|xlsx?|pptx?)($|\?)/i.test(
      catalog.downloadUrl
    );

    if (isDirectFile) {
      const link = document.createElement("a");
      link.href = catalog.downloadUrl;
      link.download = `${catalog.name}.pdf`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    window.open(catalog.downloadUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white pt-[var(--nav-h)]">
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
            Accesează catalogul digital Orion Grup direct pe site. Îl poți
            previzualiza în format flipbook sau îl poți deschide pentru
            descărcare.
          </p>
        </div>

        {/* CATALOG GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {catalogs.map((catalog) => (
            <article
              key={catalog.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101113] shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
            >
              {/* HEYZINE FIRST PAGE PREVIEW */}
              <button
  type="button"
  onClick={() => setActiveCatalog(catalog)}
  className="relative block h-[400px] w-full overflow-hidden bg-white text-left"
  aria-label={`Vezi ${catalog.name}`}
>
  <iframe
    src={catalog.heyzineUrl}
    title={`${catalog.name} preview`}
    className="pointer-events-none absolute left-1/2 top-[-315px] h-[260%] w-[210%] -translate-x-1/2 scale-[0.52] border-0"
    loading="lazy"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

  <div className="absolute left-4 top-4 max-w-[calc(100%-32px)] rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-md truncate">
    {catalog.category}
  </div>

  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center rounded-2xl bg-black/75 px-4 py-3 text-sm font-semibold text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
    Click pentru previzualizare
  </div>
</button>

              {/* CONTENT */}
              <div className="p-5">
                <p className="text-xs text-white/45 truncate">{catalog.brand}</p>

                <h2 className="mt-2 text-lg font-semibold leading-tight">
                  {catalog.name}
                </h2>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveCatalog(catalog)}
                    title="Vezi catalogul"
                    className="group/btn relative flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Vezi</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownload(catalog)}
                    title="Descarcă catalogul"
                    className="group/btn relative flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-sm font-bold text-black transition hover:bg-white/85"
                  >
                    <Download className="h-4 w-4" />
                    <span>Descarcă</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HEYZINE MODAL */}
      {activeCatalog && (
        <div className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm">
          <div className="flex h-full w-full flex-col">
            {/* MODAL HEADER */}
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

            {/* FULL SCREEN HEYZINE VIEWER */}
            <div className="h-full w-full bg-[#151515] p-2 sm:p-4">
              <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white">
                <iframe
                  src={activeCatalog.heyzineUrl}
                  title={activeCatalog.name}
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
