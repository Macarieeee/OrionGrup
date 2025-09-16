/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const { ref: sectionRef } = useInView<HTMLDivElement>(0.2);

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
      const setW = set1El.getBoundingClientRect().width;
      const frameW = frameEl.getBoundingClientRect().width;
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

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-background ${className}`}
      aria-label="Brands"
    >
      {/* cadru vizibil – acum full width pe mobil */}
      <div
        ref={frameRef}
        className="relative mx-auto w-full md:w-[70vw] max-w-full overflow-hidden px-0 py-10"
      >
        <div className="relative">
          {/* pista rulantă – 2 seturi consecutive */}
          <div className="group" role="list" aria-label="Brands marquee">
            <div
              className="brands-track inline-flex items-center gap-6 will-change-transform"
              style={{
                ["--brands-start" as any]: `${startPx}px`,
                ["--brands-ms" as any]: `${speedMs}ms`,
                animation: "brands_marquee_x var(--brands-ms) linear infinite",
              }}
            >
              {/* SET 1 */}
              <div ref={set1Ref} className="inline-flex items-center gap-6">
                {set1.map((b) => (
                  <div role="listitem" key={b.id} className="shrink-0">
                    {b.src ? (
                      <div
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/60 border border-white/15 backdrop-blur-sm flex items-center justify-center overflow-hidden"
                        title={b.alt ?? "Brand"}
                        aria-label={b.alt ?? "Brand"}
                      >
                        <img src={b.src} alt={b.alt ?? "Logo"} className="w-4/5 h-4/5 object-contain" />
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

              {/* SET 2 */}
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

      {/* keyframes doar pentru pista */}
      <style>{`
        @keyframes brands_marquee_x {
          0%   { transform: translateX(var(--brands-start)); }
          100% { transform: translateX(calc(var(--brands-start) - 50%)); }
        }
        /* pauză la hover */
        section:hover .brands-track { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default Brands;
