import React from "react";

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

export { GlowSweep, Beam, GlowSpot };

const HeroVideo = `${import.meta.env.BASE_URL}HeroVideo-final.mp4`;

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[#0a0b0d] text-white">
      {/* ===== DESKTOP ===== */}
      <div className="hidden md:flex h-full">
        <div className="absolute right-0 top-0 w-[78vw] h-full overflow-hidden z-0">
          <video
            className="absolute right-0 top-0 w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 flex h-full ml-[4vw] px-6 items-center">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl font-extrabold tracking-tight w-[22vw]">
              Iluminat Arhitectural.
              <br />
              Din 1996.
            </h1>

            <p className="text-white/70 w-[22vw] text-md">
              Prin experiență, profesionalism și o înțelegere profundă a modului
              în care lumina influențează percepția unui spațiu, Orion Grup
              creează interioare și proiecte arhitecturale în care estetica și
              funcționalitatea coexistă natural.
            </p>

            <div className="flex w-[22vw] flex-col items-start gap-3 2xl:flex-row">
              <button className="rounded-xl bg-primary text-ink px-4 py-2.5 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-[11px] whitespace-nowrap">
                Începe-ți proiectul
              </button>

              <button className="rounded-xl bg-secondary text-ink px-4 py-2.5 font-semibold shadow inline-flex items-center justify-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-[11px] whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0"
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
      <div className="flex flex-col md:hidden h-full">
        <div className="flex flex-col justify-center items-center h-[50vh] px-6 text-center gap-4 pt-12">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Iluminat Arhitectural.
            <br />
            Din 1996.
          </h1>

          <p className="text-white/70 text-sm max-w-md">
            Prin experiență, profesionalism și o înțelegere profundă a modului în
            care lumina influențează percepția unui spațiu, Orion Grup creează
            interioare și proiecte arhitecturale premium.
          </p>

          <div className="flex gap-3 mt-2">
            <button className="rounded-xl bg-primary text-ink px-4 py-2 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-sm">
              Începe-ți proiectul
            </button>

            <button className="rounded-xl bg-secondary text-ink px-4 py-2 font-semibold shadow inline-flex items-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-sm">
              Camera 3D
            </button>
          </div>
        </div>

        <div className="w-full h-[50vh] px-6 pb-6">
          <div className="w-full h-full rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={HeroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}