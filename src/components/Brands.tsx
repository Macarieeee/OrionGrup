/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from "react";

type Brand = {
  id: string;
  src: string;
  alt?: string;
};

type Props = {
  className?: string;

  // Desktop (marquee CSS) – px/sec (mai mare = mai rapid)
  pxPerSecDesktop?: number;

  // Mobile (transform GPU) – px/sec (mai mare = mai rapid)
  pxPerSecMobile?: number;

  // Pauză după swipe/drag înainte să reia autoplay
  mobileResumeDelayMs?: number;
};

export default function Brands({
  className = "",
  pxPerSecDesktop = 60, // lent premium
  pxPerSecMobile = 60,  // foarte smooth + lent pe mobil
  mobileResumeDelayMs = 700,
}: Props) {
  const [items, setItems] = useState<Brand[]>([]);

  const base = import.meta.env.BASE_URL;
  const jsonUrl = `${base}logos/logos.json`;

  // detect mobil (live)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // load logos din public/logos/logos.json
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

  // dublăm lista (ne trebuie atât pentru desktop loop, cât și pentru mobil loop)
  const items2 = useMemo(
    () => items.map((b) => ({ ...b, id: `${b.id}-dup` })),
    [items]
  );

  const LogoBadge = ({ src, alt }: { src: string; alt?: string }) => (
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/15 bg-white shadow-[0_8px_25px_rgba(0,0,0,.35)]">
      <img
        src={src}
        alt={alt ?? "Logo"}
        className="w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />
    </div>
  );

  /* ---------------------------
     DESKTOP: CSS marquee (smooth)
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

      // pornește centrat
      setStartPx(-(setW / 2 - frameW / 2));

      // durată bazată pe distanță (px) / viteză (px/sec)
      const loopDistancePx = setW;
      const ms = (loopDistancePx / pxPerSecDesktop) * 1000;
      setDurationMs(Math.max(ms, 20000)); // minim 20s pt premium
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
     MOBILE: transform (GPU) autoplay + drag (smooth)
  --------------------------- */
  const mobileFrameRef = useRef<HTMLDivElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  const xRef = useRef(0); // poziția curentă (px)
  const lastTsRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const resumeAtRef = useRef(0);

  // reset poziție când schimbă items / intră pe mobil
  useEffect(() => {
    if (!isMobile) return;
    xRef.current = 0;
    const track = mobileTrackRef.current;
    if (track) track.style.transform = `translate3d(0px,0,0)`;
  }, [isMobile, items.length]);

  useEffect(() => {
    if (!isMobile) return;
    const track = mobileTrackRef.current;
    if (!track) return;

    const tick = (ts: number) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000; // sec
      lastTsRef.current = ts;

      const now = Date.now();

      // autoplay doar când nu tragi și după delay
      if (!draggingRef.current && now >= resumeAtRef.current) {
        xRef.current -= pxPerSecMobile * dt; // se mișcă spre stânga
      }

      // loop infinit: avem track dublat, deci "half" = o listă
      const half = track.scrollWidth / 2;
      if (half > 0) {
        if (xRef.current <= -half) xRef.current += half;
        if (xRef.current > 0) xRef.current -= half;
      }

      track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = 0;
    };
  }, [isMobile, items.length, pxPerSecMobile]);

  const onMobilePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    resumeAtRef.current = Date.now() + mobileResumeDelayMs;

    dragStartXRef.current = e.clientX;
    dragStartPosRef.current = xRef.current;

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onMobilePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const track = mobileTrackRef.current;
    if (!track) return;

    const dx = e.clientX - dragStartXRef.current;
    xRef.current = dragStartPosRef.current + dx;

    const half = track.scrollWidth / 2;
    if (half > 0) {
      if (xRef.current <= -half) xRef.current += half;
      if (xRef.current > 0) xRef.current -= half;
    }

    track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
  };

  const onMobilePointerUp = () => {
    draggingRef.current = false;
    resumeAtRef.current = Date.now() + mobileResumeDelayMs;
  };

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
                {/* SET 1 */}
                <div ref={set1Ref} className="inline-flex items-center gap-14">
                  {items.map((b) => (
                    <div key={b.id} className="shrink-0">
                      <LogoBadge src={b.src} alt={b.alt} />
                    </div>
                  ))}
                </div>

                {/* SET 2 */}
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

      {/* MOBILE: drag + autoplay smooth */}
      {isMobile && (
        <div className="w-full py-10">
          <div
            ref={mobileFrameRef}
            className="relative overflow-hidden px-6"
            onPointerDown={onMobilePointerDown}
            onPointerMove={onMobilePointerMove}
            onPointerUp={onMobilePointerUp}
            onPointerCancel={onMobilePointerUp}
            style={{
              touchAction: "pan-y",
            }}
          >
            <div
              ref={mobileTrackRef}
              className="flex items-center gap-8 w-max will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
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