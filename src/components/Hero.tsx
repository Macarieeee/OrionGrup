/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import HeroVideo from "/HeroVideo.mp4";

export { GlowSweep, Beam, GlowSpot };

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setVideoReady(true);
    }, 3500);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!videoReady) return;

    const hideTimeout = window.setTimeout(() => {
      setShowLoader(false);

      desktopVideoRef.current?.play().catch(() => { });
      mobileVideoRef.current?.play().catch(() => { });
    }, 500);

    return () => window.clearTimeout(hideTimeout);
  }, [videoReady]);

  const handleVideoReady = () => {
    setVideoReady(true);
  };

  return (
    <section
      className="relative w-screen overflow-hidden text-white bg-[#050505]"
      style={{ height: "100vh" }}
    >
      {showLoader && <LightLoader isLeaving={videoReady} />}

      {/* ===== DESKTOP ===== */}
      <div
        className={`hidden md:flex h-full transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"
          }`}
      >
        {/* VIDEO BACKDROP */}
        <div className="absolute right-0 top-0 w-[70vw] h-full overflow-hidden z-0">
          <video
            className="absolute right-0 top-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-poster.png"
            onCanPlayThrough={handleVideoReady}
            onLoadedData={handleVideoReady}
            style={{
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
        </div>

        {/* TEXT & BUTTONS */}
        <div className="relative z-10 flex h-full ml-[4vw] px-6 items-center">
          <div
            className="animate-[slide-in-left_2s_cubic-bezier(0.16,1,0.3,1)_both] space-y-6 max-w-lg"
            style={{ animationDelay: "150ms" }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight w-[28vw]">
              Iluminat Arhitectural.
              <br />
              Din 1996.
            </h1>

            <p className="text-white/70 w-[28vw] text-md">
              Prin experiență, profesionalism și o înțelegere profundă a modului
              în care lumina influențează percepția unui spațiu, Orion Grup
              creează interioare și proiecte arhitecturale în care estetica și
              funcționalitatea coexistă natural. Într-o piață în care diferența o
              fac detaliile, compania își definește poziționarea prin soluții
              premium, execuție atentă și un portofoliu care exprimă eleganță,
              claritate vizuală și impact durabil.
            </p>

            <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-4">
              <button className="rounded-xl bg-primary text-ink px-6 py-3 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-xs">
                Începe-ți proiectul
              </button>

              <button className="rounded-xl bg-secondary text-ink px-6 py-3 font-semibold shadow inline-flex items-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-xs">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Camera 3D
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div
        className={`flex flex-col md:hidden h-full transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="flex flex-col justify-center items-center h-[50vh] px-6 text-center gap-4 pt-12">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Iluminat Arhitectural.
            <br />
            Din 1996.
          </h1>

          <p className="text-white/70 text-sm max-w-md">
            Prin experiență, profesionalism și o înțelegere profundă a modului în
            care lumina influențează percepția unui spațiu, Orion Grup creează
            interioare și proiecte arhitecturale în care estetica și
            funcționalitatea coexistă natural. Într-o piață în care diferența o
            fac detaliile, compania își definește poziționarea prin soluții
            premium, execuție atentă și un portofoliu care exprimă eleganță,
            claritate vizuală și impact durabil.
          </p>

          <div className="flex gap-3 mt-2">
            <button className="rounded-xl bg-primary text-ink px-4 py-2 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-sm">
              Începe-ți proiectul
            </button>

            <button className="rounded-xl bg-secondary text-ink px-4 py-2 font-semibold shadow inline-flex items-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-sm">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Camera 3D
            </button>
          </div>
        </div>

        <div className="w-full h-[50vh] px-6 pb-6">
          <div className="w-full h-full rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl overflow-hidden">
            <video
              ref={mobileVideoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/hero-poster.png"
              onCanPlayThrough={handleVideoReady}
              onLoadedData={handleVideoReady}
            >
              <source src={HeroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function LightLoader({ isLeaving }: { isLeaving: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505] transition-all duration-700 ${isLeaving ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="absolute top-0 left-1/2 h-full w-[18vw] -translate-x-1/2 rotate-[12deg] bg-gradient-to-b from-white/40 via-white/10 to-transparent blur-2xl animate-[loader-beam_1.8s_ease-in-out_infinite]" />

      <div className="absolute top-0 left-[30%] h-full w-[12vw] rotate-[-10deg] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent blur-2xl animate-[loader-beam_2.2s_ease-in-out_infinite]" />

      <div className="absolute top-0 right-[28%] h-full w-[12vw] rotate-[8deg] bg-gradient-to-b from-secondary/35 via-secondary/10 to-transparent blur-2xl animate-[loader-beam_2.4s_ease-in-out_infinite]" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-3 rounded-full border border-white/20" />
          <div className="absolute h-12 w-12 rounded-full bg-white/90 shadow-[0_0_45px_rgba(255,255,255,0.9)] animate-[bulb-pulse_1.4s_ease-in-out_infinite]" />
          <div className="absolute h-20 w-20 rounded-full bg-white/10 blur-xl animate-[bulb-pulse_1.4s_ease-in-out_infinite]" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            Orion Grup
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Aprindem scena
          </h2>
          <p className="mt-3 text-sm text-white/50">
            Se încarcă experiența vizuală...
          </p>
        </div>

        <div className="h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)] animate-[loader-line_1.2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>
        {`
          @keyframes loader-beam {
            0%, 100% {
              opacity: 0.25;
              transform: translateY(-8%) scaleX(0.85);
            }
            50% {
              opacity: 0.85;
              transform: translateY(4%) scaleX(1.15);
            }
          }

          @keyframes bulb-pulse {
            0%, 100% {
              opacity: 0.65;
              transform: scale(0.92);
            }
            50% {
              opacity: 1;
              transform: scale(1.08);
            }
          }

          @keyframes loader-line {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(240%);
            }
          }
        `}
      </style>
    </div>
  );
}

/** Spălare largă, rece, care “aprinde” fundalul odată cu fasciculele */
function GlowSweep({
  className = "",
  intensity = 0.12,
  drop = 34,
  duration = 1400,
  delay = 0,
}: {
  className?: string;
  intensity?: number;
  drop?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <div
      className={`mix-blend-screen ${className}`}
      style={{
        opacity: 0,
        transform: `translate3d(0, -${drop}%, 0)`,
        animation: `beam-drop ${duration}ms ease-out both`,
        animationDelay: `${delay}ms`,
        ["--beam-opacity" as any]: intensity,
        background: `linear-gradient(to bottom,
          rgba(255,255,255,0.10) 0%,
          rgba(255,255,255,0.06) 30%,
          rgba(255,255,255,0.00) 70%)`,
        filter: "blur(28px)",
      }}
    />
  );
}

/** Halo local rece sub fiecare fascicul */
function GlowSpot({
  className = "",
  intensity = 0.18,
  blur = 28,
  drop = 32,
  duration = 1300,
  delay = 0,
}: {
  className?: string;
  intensity?: number;
  blur?: number;
  drop?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <div
      className={`mix-blend-screen ${className}`}
      style={{
        opacity: 0,
        transform: `translate3d(0, -${drop}%, 0)`,
        animation: `beam-drop ${duration}ms ease-out both`,
        animationDelay: `${delay}ms`,
        ["--beam-opacity" as any]: intensity,
        filter: `blur(${blur}px)`,
        background:
          "radial-gradient(ellipse 70% 140% at 50% 18%, rgba(235, 240, 255, 0.45) 0%, rgba(235, 240, 255, 0.00) 65%)",
      }}
    />
  );
}

/** Fascicul rece animat */
function Beam({
  className = "",
  intensity = 0.5,
  soft = 28,
  band = 12,
  drop = 30,
  duration = 1200,
  delay = 0,
}: {
  className?: string;
  intensity?: number;
  soft?: number;
  band?: number;
  drop?: number;
  duration?: number;
  delay?: number;
}) {
  const left = 50 - band / 2;
  const right = 50 + band / 2;

  return (
    <div
      className={`beam absolute mix-blend-screen ${className}`}
      style={{
        opacity: 0,
        transform: `translate3d(0, -${drop}%, 0)`,
        animation: `beam-drop ${duration}ms ease-out both`,
        animationDelay: `${delay}ms`,
        ["--startY" as any]: `-${drop}%`,
        ["--beam-opacity" as any]: intensity,
        filter: `blur(${soft}px)`,
        background: `linear-gradient(to bottom,
          rgba(235, 240, 255, 0.00) 0%,
          rgba(245, 248, 255, 0.95) 10%,
          rgba(200, 215, 255, 0.22) 72%,
          rgba(235, 240, 255, 0.00) 100%)`,
        maskImage: `linear-gradient(to right, transparent 0%, white ${left}%, white ${right}%, transparent 100%)`,
        WebkitMaskImage: `linear-gradient(to right, transparent 0%, white ${left}%, white ${right}%, transparent 100%)`,
      }}
    />
  );
}