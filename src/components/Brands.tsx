/* eslint-disable @typescript-eslint/no-explicit-any */
 
// src/components/Brands.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";

export type Brand = {
  id: string | number;
  src?: string;
  alt?: string;
  bg?: string;
  label?: string;
};

type Props = {
  items?: Brand[];
  speedMs?: number;       // viteza unei bucle complete
  className?: string;
};

const DEFAULT_BRANDS: Brand[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  bg: "#e5e7eb",
  label: "LOGO",
}));

/* in-view simplu */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(!!e?.isIntersecting), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView } as const;
}

const Brands: React.FC<Props> = ({
  items = DEFAULT_BRANDS,
  speedMs = 20000,
  className = "",
}) => {
  const set1Ref = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>(0.2);

  // dublăm lista pentru rulare continuă
  const set1 = items;
  const set2 = useMemo(() => items.map((b) => ({ ...b, id: `${b.id}-dup` })), [items]);

  // offset-ul inițial ca să pornească exact pe centru
  const [startPx, setStartPx] = useState(0);

  useEffect(() => {
    const compute = () => {
      const set1El = set1Ref.current;
      const frameEl = frameRef.current;
      if (!set1El || !frameEl) return;
      const setW = set1El.getBoundingClientRect().width;     // lățimea primului set
      const frameW = frameEl.getBoundingClientRect().width;  // 80vw
      // vrem ca centrul primului set să fie la centrul frame-ului
      const start = -(setW / 2 - frameW / 2);
      setStartPx(start);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (set1Ref.current) ro.observe(set1Ref.current);
    if (frameRef.current) ro.observe(frameRef.current);
    window.addEventListener("resize", compute, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [items.length]);

  // stag­ger din centru pentru PRIMUL set
  const center = Math.floor((set1.length - 1) / 2);
  const baseDelay = 100;  // ms
  const step = 80;        // ms per „inel”

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-background ${className}`}
      aria-label="Brands"
    >
      {/* cadru vizibil 80vw, centrat */}
      <div
  ref={frameRef}
  className="relative mx-auto w-[70vw] max-w-[70vw] overflow-hidden px-0 py-10"
>
        <div className="relative">
          {/* fade edges */}
          {/* <div className="pointer-events-none absolute left-0 top-[-10px] h-[100px] w-24 bg-gradient-to-r from-[#0f1115] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-[-10px] h-[100px] w-24 bg-gradient-to-l from-[#0f1115] to-transparent z-10" /> */}

          {/* pista rulantă – 2 seturi consecutive */}
          <div className="group" role="list" aria-label="Brands marquee">
            <div
              className="brands-track inline-flex items-center gap-6 will-change-transform"
              style={{
                // folosim variabile CSS ca să mixăm px (start) cu % (jumătate de pistă)
                ["--brands-start" as any]: `${startPx}px`,
                ["--brands-ms" as any]: `${speedMs}ms`,
                animation: "brands_marquee_x var(--brands-ms) linear infinite",
              }}
            >
              {/* SET 1 (animăm logo-urile) */}
              <div ref={set1Ref} className="inline-flex items-center gap-6">
                {set1.map((b, idx) => {
                  const ring = Math.abs(idx - center);
                  const delay = baseDelay + ring * step;

                  const anim =
                    inView
                      ? {
                          animation:
                            `brands_pop_x 700ms cubic-bezier(0.16,1,0.3,1) both ${delay}ms, ` +
                            `brands_breathe_x 5200ms ease-in-out ${delay + 700}ms infinite`,
                        }
                      : { opacity: 0 as number };

                  return (
                    <div role="listitem" key={b.id} className="shrink-0">
                      {b.src ? (
                        <div
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/60 border border-white/15 backdrop-blur-sm flex items-center justify-center overflow-hidden hover:scale-[1.06] transition-transform"
                          style={anim}
                          title={b.alt ?? "Brand"}
                          aria-label={b.alt ?? "Brand"}
                        >
                          <img src={b.src} alt={b.alt ?? "Logo"} className="w-4/5 h-4/5 object-contain" />
                        </div>
                      ) : (
                        <div
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/15 flex items-center justify-center text-xs md:text-sm font-semibold text-black/60 hover:scale-[1.06] transition-transform"
                          style={{ background: b.bg, ...anim }}
                          aria-label="Placeholder logo"
                          title="Brand"
                        >
                          {b.label ?? "LOGO"}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* SET 2 (copie – fără animația individuală) */}
              <div className="inline-flex items-center gap-6">
                {set2.map((b) => (
                  <div role="listitem" key={b.id} className="shrink-0">
                    {b.src ? (
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/60 border border-white/15 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                        <img src={b.src} alt={b.alt ?? "Logo"} className="w-4/5 h-4/5 object-contain" loading="lazy" />
                      </div>
                    ) : (
                      <div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/15 flex items-center justify-center text-xs md:text-sm font-semibold text-black/60"
                        style={{ background: b.bg }}
                        aria-label="Placeholder logo"
                        title="Brand"
                      >
                        {b.label ?? "LOGO"}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* keyframes locale (fără conflicte) */}
      <style>{`
        /* Pista pornește din var(--brands-start) și parcurge exact 50% (o lățime de set) */
        @keyframes brands_marquee_x {
          0%   { transform: translateX(var(--brands-start)); }
          100% { transform: translateX(calc(var(--brands-start) - 50%)); }
        }
        @keyframes brands_pop_x {
          0%   { opacity: 0; transform: translateY(8px) scale(.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes brands_breathe_x {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.04); }
        }
        /* pauză la hover */
        section:hover .brands-track { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default Brands;
