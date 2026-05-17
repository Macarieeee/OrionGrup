import { useState } from "react";
import { ArrowLeft, Eye, Lock, X } from "lucide-react";
import { Link } from "react-router-dom";

type WorkInProgressProps = {
  isLoggedIn?: boolean;
};



type WorkItem = {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
};

const workItems: WorkItem[] = [
  {
    id: "santier-1",
    title: "Montaj sistem iluminat",
    location: "Proiect rezidențial",
    description:
      "Etapă de montaj și poziționare pentru corpurile de iluminat integrate în proiect.",
    image: "/work-in-progress/santier-1.jpg",
  },
  {
    id: "santier-2",
    title: "Instalație în desfășurare",
    location: "Spațiu comercial",
    description:
      "Lucrări de pregătire, cablare și verificare pentru sistemele de iluminat.",
    image: "/work-in-progress/santier-2.jpg",
  },
  {
    id: "santier-3",
    title: "Testare corpuri de iluminat",
    location: "Interior modern",
    description:
      "Verificări tehnice și ajustări înainte de finalizarea proiectului.",
    image: "/work-in-progress/santier-3.jpg",
  },
  {
    id: "santier-4",
    title: "Detalii tehnice șantier",
    location: "Lucrare în execuție",
    description:
      "Imagini din procesul de instalare și integrare a soluțiilor Orion Grup.",
    image: "/work-in-progress/santier-4.jpg",
  },
  {
    id: "santier-5",
    title: "Etapă de finisare",
    location: "Proiect premium",
    description:
      "Ultimele intervenții înainte de recepție și predarea lucrării către client.",
    image: "/work-in-progress/santier-5.jpg",
  },
  {
    id: "santier-6",
    title: "Soluții de iluminat instalate",
    location: "Proiect în lucru",
    description:
      "Corpuri de iluminat montate, testate și pregătite pentru etapa finală.",
    image: "/work-in-progress/santier-6.jpg",
  },
];

export default function WorkInProgress({
  isLoggedIn = false,
}: WorkInProgressProps) {
  const [activeImage, setActiveImage] = useState<WorkItem | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white pt-[var(--nav-h)]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Înapoi la prima pagină
        </Link>

        {/* HERO */}
        <div className="mt-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            <Lock className="h-4 w-4" />
            Acces pentru utilizatori autentificați
          </span>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight lg:text-7xl">
            Work in Progress
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            O galerie dedicată proiectelor Orion Grup aflate în lucru. Aici poți
            vedea imagini reale din șantier, etape de montaj, verificări,
            instalații și detalii tehnice din proiectele în desfășurare.
          </p>
        </div>

        {!isLoggedIn && (
          <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#101113] p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Conținut blocat
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
                  Această pagină este disponibilă doar pentru utilizatorii
                  autentificați. Autentifică-te pentru a vedea imaginile
                  complete din proiectele aflate în lucru.
                </p>
              </div>

              <Link
                to="/login"
                className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/85"
              >
                Autentifică-te
              </Link>
            </div>
          </div>
        )}

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#101113] shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="relative h-[280px] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] ${
                    isLoggedIn ? "" : "blur-md brightness-[0.38]"
                  }`}
                />

                {!isLoggedIn && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-md">
                      <Lock className="h-3.5 w-3.5" />
                      Blocat
                    </div>
                  </div>
                )}

                {isLoggedIn && (
                  <button
                    type="button"
                    onClick={() => setActiveImage(item)}
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-white hover:text-black"
                    aria-label="Vezi imaginea"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-white/35">
                  {item.location}
                </p>

                <h2 className="mt-2 text-xl font-semibold leading-tight text-white">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* IMAGE MODAL */}
      {activeImage && isLoggedIn && (
        <div className="fixed inset-0 z-[9999] bg-black/85 p-4 backdrop-blur-sm">
          <div className="mx-auto flex h-full max-w-6xl flex-col">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-4 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Work in Progress
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  {activeImage.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white hover:text-black"
                aria-label="Închide imaginea"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center bg-[#111214] p-4">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-full max-w-full rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}