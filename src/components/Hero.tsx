/* eslint-disable @typescript-eslint/no-explicit-any */
import { Lightbulb } from "lucide-react";
export { GlowSweep, Beam, GlowSpot };
export default function Hero() {
  return (
    <section
  className="relative w-screen overflow-hidden text-white"
  style={{
    minHeight: "100svh",
    height: "100vh",
    paddingTop: "calc(var(--nav-h, 72px) + env(safe-area-inset-top))", // suport iOS notch
  }}
>
      {/* ===== BACKDROP foarte închis ===== */}
      <div className="absolute inset-0 z-[-30] bg-[#0a0b0d]" />
      <div
        className="absolute inset-0 z-[-20] pointer-events-none
          bg-[radial-gradient(120%_85%_at_0%_0%,#0e1116_0%,transparent_60%),
              radial-gradient(120%_85%_at_100%_0%,#0e1116_0%,transparent_60%),
              radial-gradient(170%_120%_at_50%_120%,#07090c_0%,#0a0b0d_60%)]"
      />

      {/* ===== Glow rece (alb-gri) sincron cu fasciculele ===== */}
      <GlowSweep
        className="absolute left-0 top-[-16%] h-[90%] w-full z-[-15]"
        intensity={0.12}
        drop={34}
        duration={1400}
        delay={0}
      />
      <GlowSpot
        className="absolute left-[36%] top-[-18%] h-[88%] w-[16%] -rotate-[16deg] z-[-15]"
        intensity={0.16} blur={30}
        drop={32} duration={1300} delay={120}
      />
      <GlowSpot
        className="absolute left-[48%] top-[-20%] h-[92%] w-[18%] -rotate-[11deg] z-[-15]"
        intensity={0.20} blur={26}
        drop={34} duration={1400} delay={0}
      />
      <GlowSpot
        className="absolute left-[58%] top-[-18%] h-[90%] w-[16%] -rotate-[7deg] z-[-15]"
        intensity={0.15} blur={30}
        drop={33} duration={1350} delay={200}
      />

      {/* ===== 3 FASCICULE reci (animate) ===== */}
      <div className="absolute inset-0 z-[-10] pointer-events-none">
        <Beam
          className="left-[36%] top-[-20%] h-[80%] w-[7%] -rotate-[16deg]"
          intensity={0.30} soft={28} band={9}
          drop={32} duration={1300} delay={120}
        />
        <Beam
          className="left-[48%] top-[-10%] h-[86%] w-[8%] -rotate-[11deg]"
          intensity={0.58} soft={24} band={11}
          drop={34} duration={1400} delay={0}
        />
        <Beam
          className="left-[58%] top-[-12%] h-[84%] w-[7%] -rotate-[7deg]"
          intensity={0.34} soft={26} band={9}
          drop={33} duration={1350} delay={200}
        />
      </div>

      {/* ===== CONȚINUT HERO (fără navbar) cu animații stagger ===== */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6">
  <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-2">
    {/* LEFT: text + form — intră DIN STÂNGA */}
    <div
      className="hero-anim animate-[slide-in-left_2.8s_cubic-bezier(0.16,1,0.3,1)_both] md:pr-4"
      style={{ animationDelay: "120ms" }}
    >
      {/* scoate eventualele animate-[fade-up...] de pe elementele interne */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
        <Lightbulb className="h-5 w-5 text-primary-500" strokeWidth={2} aria-hidden /> Professional Lightning
      </div>

      <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
        Exceptional <br /> Lighting Solutions
      </h1>

      <p className="mt-5 max-w-xl text-white/70">
        Transform your space with our premium lighting solutions that combine elegant design with superior functionality for every environment.
      </p>

     {/* CTA buttons */}
<div className="mt-8 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
  {/* Primar – alb (primary) */}
  <button
    type="button"
    className="rounded-xl bg-primary text-ink px-6 py-3 font-semibold shadow-lg
               hover:bg-primary/90 active:translate-y-px transition
               focus:outline-none focus:ring-2 focus:ring-ring"
  >
    Start your project
  </button>

  {/* Secundar – gri (secondary) + icon play */}
  <button
    type="button"
    className="rounded-xl bg-secondary text-ink px-6 py-3 font-semibold shadow
               hover:bg-secondary/90 active:translate-y-px transition
               focus:outline-none focus:ring-2 focus:ring-ring
               inline-flex items-center gap-2"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
    Watch demo
  </button>
</div>
    </div>

    {/* RIGHT: mockup — intră DIN DREAPTA */}
    <div
      className="hero-anim relative animate-[slide-in-right_2.8s_cubic-bezier(0.16,1,0.3,1)_both] md:pl-4"
      style={{ animationDelay: "160ms" }}
    >
      <div className="aspect-[16/10] w-full rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(255,255,255,0.20),transparent_60%)]" />
        </div>
        <div className="grid h-full w-full place-items-center text-white/50">
          <span>Place product image / mockup here</span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-3 text-sm text-white/60">
        <div className="h-2 w-2 rounded-full bg-white/70" />
        <span>This a preview from a client</span>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}

/* ================== Helpers (în același fișier) ================== */

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

/** Fascicul rece animat (invizibil până începe) */
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
