/* eslint-disable @typescript-eslint/no-explicit-any */
import { Lightbulb } from "lucide-react";
export { GlowSweep, Beam, GlowSpot };
import HeroVideo from "../assets/HeroVideo.mp4";

export default function Hero() {
  return (
    <section
  className="relative w-screen overflow-hidden text-white"
  style={{ height: "100vh" }}
>
  {/* ===== DESKTOP (text + video diagonal) ===== */}
  <div className="hidden md:flex h-full">
    {/* VIDEO BACKDROP */}
    <div className="absolute right-0 top-0 w-[70vw] h-full overflow-hidden z-[-30]">
      <video
        className="absolute right-0 top-0 w-full h-full object-cover z-[-30]"
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

    {/* TEXT & BUTTONS */}
    <div className="relative z-10 flex h-full ml-[4vw] px-6 items-center">
      <div
        className="animate-[slide-in-left_2s_cubic-bezier(0.16,1,0.3,1)_both] space-y-6 max-w-lg"
        style={{ animationDelay: "150ms" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Lightbulb className="h-5 w-5 text-primary-500" strokeWidth={2} /> Professional Lightning
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight w-[28vw]">
          Exceptional <br /> Lighting Solutions
        </h1>

        <p className="text-white/70 w-[28vw] text-md">
          Transform your space with our premium lighting solutions that combine elegant design with superior functionality for every environment.
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-4">
          <button className="rounded-xl bg-primary text-ink px-6 py-3 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-xs">
            Start your project
          </button>
          <button className="rounded-xl bg-secondary text-ink px-6 py-3 font-semibold shadow inline-flex items-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-xs">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch demo
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* ===== MOBILE (text 50vh + video card 50vh) ===== */}
  <div className="flex flex-col md:hidden h-full">
    {/* TEXT (50vh) */}
    <div className="flex flex-col justify-center items-center h-[50vh] px-6 text-center gap-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
        <Lightbulb className="h-5 w-5 text-primary-500" strokeWidth={2} /> Professional Lightning
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight">
        Exceptional <br /> Lighting Solutions
      </h1>

      <p className="text-white/70 text-sm max-w-md">
        Transform your space with our premium lighting solutions that combine elegant design with superior functionality for every environment.
      </p>

      <div className="flex gap-3 mt-2">
        <button className="rounded-xl bg-primary text-ink px-4 py-2 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-sm">
          Start your project
        </button>
        <button className="rounded-xl bg-secondary text-ink px-4 py-2 font-semibold shadow inline-flex items-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-sm">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch demo
        </button>
      </div>
    </div>

    {/* VIDEO (50vh) */}
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
