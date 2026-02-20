/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from "react";

type Brand = { id: string; src: string; alt?: string };

type Props = {
  className?: string;

  // Desktop marquee speed (px/sec)
  pxPerSecDesktop?: number;

  // Mobile autoplay speed (px/sec)
  pxPerSecMobile?: number;

  // Pause autoplay after user interaction (ms)
  mobileResumeDelayMs?: number;
};

export default function Brands({
  className = "",
  pxPerSecDesktop = 60,
  pxPerSecMobile =2000,
  mobileResumeDelayMs = 900,
}: Props) {
  const [items, setItems] = useState<Brand[]>([]);
  const base = import.meta.env.BASE_URL;
  const jsonUrl = `${base}logos/logos.json`;

  // detect mobile (updates on resize)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // load logos from public/logos/logos.json
  useEffect(() => {
    fetch(jsonUrl, { cache: "no-store" })
      .then((r) => r.json())
      .then((list) => {
        const mapped: Brand[] = (list || []).map((x: any, i: number) => ({
          id: String(x.id ?? i),
          src: `${base}logos/${x.file}`,
          alt: x.alt ?? "Logo",
        }));
        setItems(mapped);
      })
      .catch(() => setItems([]));
  }, [jsonUrl, base]);

  // duplicate for desktop marquee and for mobile infinite scroll
  const items2 = useMemo(
    () => items.map((b) => ({ ...b, id: `${b.id}-dup` })),
    [items]
  );

  const LogoBadge = ({ src, alt }: { src: string; alt?: string }) => (
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/15 bg-white shadow-[0_8px_25px_rgba(0,0,0,.35)]">
      <img src={src} alt={alt ?? "Logo"} className="w-full h-full object-cover" loading="lazy" />
    </div>
  );

  /* ---------------------------
     DESKTOP: CSS marquee
  --------------------------- */
  const set1Ref = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [startPx, setStartPx] = useState(0);
  const [durationMs, setDurationMs] = useState(30000);

  useEffect(() => {
    if (isMobile) return;

    const compute = () => {
      const set1El = set1Ref.current;
      const frameEl = frameRef.current;
      if (!set1El || !frameEl) return;

      const setW = set1El.getBoundingClientRect().width;
      const frameW = frameEl.getBoundingClientRect().width;

      setStartPx(-(setW / 2 - frameW / 2));

      const loopDistancePx = setW;
      const ms = (loopDistancePx / pxPerSecDesktop) * 1000;
      setDurationMs(Math.max(ms, 20000));
    };

    compute();
    const ro = new ResizeObserver(compute);
    if (set1Ref.current) ro.observe(set1Ref.current);
    if (frameRef.current) ro.observe(frameRef.current);
    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [items.length, pxPerSecDesktop, isMobile]);

  /* ---------------------------
     MOBILE: native scroll + autoplay (scrollLeft)
  --------------------------- */
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const pauseUntilRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number>(0);

  // helper: pause autoplay for a while after user interaction
  const pauseMobileAutoplay = () => {
    pauseUntilRef.current = Date.now() + mobileResumeDelayMs;
  };

  useEffect(() => {
    if (!isMobile) return;
    const el = scrollerRef.current;
    if (!el) return;

    // start from middle so user can scroll both ways (because list is duplicated)
    const jumpToMiddle = () => {
      // contentWidth / 2 is approximately one set length
      const max = el.scrollWidth;
      if (max > 0) el.scrollLeft = max / 4; // safe-ish starting point
    };

    // after items render
    const t = window.setTimeout(jumpToMiddle, 0);

    // autoplay loop
    const tick = (ts: number) => {
      const now = Date.now();

      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000; // seconds
      lastTsRef.current = ts;

      // pause while user interacts / right after
      if (now < pauseUntilRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      // increment scrollLeft by pxPerSecMobile * dt
      el.scrollLeft += pxPerSecMobile * dt;

      // infinite wrap: if we pass half, jump back by half
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      if (el.scrollLeft < 0) el.scrollLeft += half;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.clearTimeout(t);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = 0;
    };
  }, [isMobile, items.length, pxPerSecMobile, mobileResumeDelayMs]);

  return (
    <section className={`relative bg-background ${className}`} aria-label="Brands">
      {/* DESKTOP */}
      {!isMobile && (
        <div ref={frameRef} className="relative mx-auto w-full md:w-[75vw] overflow-hidden py-14">
          {items.length > 0 && (
            <div className="group" role="list" aria-label="Brands marquee">
              <div
                className="brands-track inline-flex items-center gap-14 will-change-transform"
                style={{
                  ["--brands-start" as any]: `${startPx}px`,
                  ["--brands-ms" as any]: `${durationMs}ms`,
                  animation: "brands_marquee_x var(--brands-ms) linear infinite",
                }}
              >
                <div ref={set1Ref} className="inline-flex items-center gap-14">
                  {items.map((b) => (
                    <div key={b.id} className="shrink-0">
                      <LogoBadge src={b.src} alt={b.alt} />
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-14">
                  {items2.map((b) => (
                    <div key={b.id} className="shrink-0">
                      <LogoBadge src={b.src} alt={b.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <style>{`
            @keyframes brands_marquee_x {
              0%   { transform: translateX(var(--brands-start)); }
              100% { transform: translateX(calc(var(--brands-start) - 50%)); }
            }
            section:hover .brands-track { animation-play-state: paused; }
          `}</style>
        </div>
      )}

      {/* MOBILE: swipe + autoplay */}
      {isMobile && (
        <div className="w-full py-10">
          <div
            ref={scrollerRef}
            className="no-scrollbar overflow-x-auto px-6"
            style={{
              WebkitOverflowScrolling: "touch",
              overscrollBehaviorX: "contain",
            }}
            onTouchStart={pauseMobileAutoplay}
            onTouchMove={pauseMobileAutoplay}
            onTouchEnd={pauseMobileAutoplay}
            onPointerDown={pauseMobileAutoplay}
            onScroll={pauseMobileAutoplay}
          >
            <div className="flex items-center gap-8 w-max pr-6">
              {[...items, ...items2].map((b) => (
                <div key={b.id} className="shrink-0">
                  <LogoBadge src={b.src} alt={b.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}