import { useEffect, useState } from "react";
import { ArrowRight, Lock, X } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const base = import.meta.env.BASE_URL;

const workImages = [
  `${base}work-in-progress/santier-1.jpeg`,
  `${base}work-in-progress/santier-2.jpeg`,
  `${base}work-in-progress/santier-3.png`,
];
export default function WorkInProgressPreview() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setIsLoggedIn(!!user);
      setCheckingAuth(false);
    };

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session?.user);
      setCheckingAuth(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
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
              montaj, instalații, corpuri de iluminat, teste și detalii direct
              din șantier.
            </p>

            <div className="mt-9">
              {checkingAuth ? (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-wait items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white/45"
                >
                  Se verifică accesul...
                </button>
              ) : isLoggedIn ? (
                <Link
                  to="/work-in-progress"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/85"
                >
                  Vezi lucrările
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  to="/sign-in"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white/55 transition hover:bg-white/10 hover:text-white"
                >
                  <Lock className="h-4 w-4" />
                  Autentifică-te pentru acces
                </Link>
              )}
            </div>

            {!checkingAuth && !isLoggedIn && (
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
                Pentru a vedea pagina completă și toate lucrările în
                desfășurare, autentifică-te în contul Orion Grup.
              </p>
            )}
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101113] sm:h-[560px] sm:rounded-[2rem]">
              <PreviewImage
                src={workImages[0]}
                alt="Lucrare Orion Grup în desfășurare"
                className="aspect-[4/3] sm:h-full sm:aspect-auto"
                onClick={() => setSelectedImage(workImages[0])}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101113] sm:rounded-[2rem]">
                <PreviewImage
                  src={workImages[1]}
                  alt="Șantier Orion Grup"
                  className="aspect-[4/3] sm:h-[270px] sm:aspect-auto"
                  onClick={() => setSelectedImage(workImages[1])}
                />
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101113] sm:rounded-[2rem]">
                <PreviewImage
                  src={workImages[2]}
                  alt="Instalație de iluminat în lucru"
                  className="aspect-[4/3] sm:h-[270px] sm:aspect-auto"
                  onClick={() => setSelectedImage(workImages[2])}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Închide imaginea"
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={selectedImage}
            alt="Imagine mărită Work in Progress"
            className="max-h-[90vh] max-w-[92vw] rounded-[1.5rem] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

type PreviewImageProps = {
  src: string;
  alt: string;
  className?: string;
  onClick: () => void;
};

function PreviewImage({
  src,
  alt,
  className = "",
  onClick,
}: PreviewImageProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative block w-full overflow-hidden ${className}`}
      aria-label="Deschide imaginea"
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:brightness-110"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />

      <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-semibold text-white/80 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
        Click pentru mărire
      </div>
    </button>
  );
}
