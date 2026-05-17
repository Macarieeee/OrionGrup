import { ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";

type WorkInProgressPreviewProps = {
  isLoggedIn: boolean;
};

const workImages = [
  "/work-in-progress/santier-1.jpg",
  "/work-in-progress/santier-2.jpg",
  "/work-in-progress/santier-3.jpg",
];

export default function WorkInProgressPreview({
  isLoggedIn,
}: WorkInProgressPreviewProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0b0d] py-24 text-white">
      <div className="mx-auto grid w-[92%] max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            <Lock className="h-4 w-4" />
            Acces privat
          </span>

          <h2 className="mt-8 max-w-xl text-4xl font-semibold tracking-tight text-white lg:text-6xl">
            Work in Progress
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Urmărește imagini reale din proiectele Orion Grup aflate în lucru:
            montaj, instalații, corpuri de iluminat, teste și detalii direct din
            șantier.
          </p>

          <div className="mt-9">
            {isLoggedIn ? (
              <Link
                to="/work-in-progress"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/85"
              >
                Vezi lucrările
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white/45"
              >
                <Lock className="h-4 w-4" />
                Disponibil după autentificare
              </button>
            )}
          </div>

          {!isLoggedIn && (
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
              Pozele și pagina completă sunt disponibile doar pentru
              utilizatorii autentificați.
            </p>
          )}
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#101113] sm:col-span-1 sm:h-[460px]">
            <LockedImage
              src={workImages[0]}
              alt="Lucrare Orion Grup în desfășurare"
              isLoggedIn={isLoggedIn}
              className="h-[300px] sm:h-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101113]">
              <LockedImage
                src={workImages[1]}
                alt="Șantier Orion Grup"
                isLoggedIn={isLoggedIn}
                className="h-[220px]"
              />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101113]">
              <LockedImage
                src={workImages[2]}
                alt="Instalație de iluminat în lucru"
                isLoggedIn={isLoggedIn}
                className="h-[220px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type LockedImageProps = {
  src: string;
  alt: string;
  isLoggedIn: boolean;
  className?: string;
};

function LockedImage({
  src,
  alt,
  isLoggedIn,
  className = "",
}: LockedImageProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition duration-700 ${
          isLoggedIn
            ? "group-hover:scale-[1.025]"
            : "scale-105 blur-md brightness-[0.38]"
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
    </div>
  );
}