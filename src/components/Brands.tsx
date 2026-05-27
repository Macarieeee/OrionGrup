/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from "react";

type Brand = {
  id: string;
  src: string;
  alt?: string;
};

type Props = {
  className?: string;

  // Viteză autoplay – px/sec
  pxPerSecDesktop?: number;
  pxPerSecMobile?: number;

  // Pauză după drag/swipe înainte să reia autoplay
  resumeDelayMs?: number;
};

export default function Brands({
  className = "",
  pxPerSecDesktop = 60,
  pxPerSecMobile = 60,
  resumeDelayMs = 700,
}: Props) {
  const [items, setItems] = useState<Brand[]>([]);

  const base = import.meta.env.BASE_URL;
  const jsonUrl = `${base}logos/logos.json`;

  const [isMobile, setIsMobile] = useState(false);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const xRef = useRef(0);
  const lastTsRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const resumeAtRef = useRef(0);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);

    onResize();
    window.addEventListener("resize", onResize, { passive: true });

    return () => window.removeEventListener("resize", onResize);
  }, []);

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

  useEffect(() => {
    xRef.current = 0;

    const track = trackRef.current;
    if (track) {
      track.style.transform = "translate3d(0px, 0, 0)";
    }
  }, [items.length, isMobile]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;

    const tick = (ts: number) => {
      if (!lastTsRef.current) lastTsRef.current = ts;

      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const now = Date.now();
      const speed = isMobile ? pxPerSecMobile : pxPerSecDesktop;

      if (!draggingRef.current && now >= resumeAtRef.current) {
        xRef.current -= speed * dt;
      }

      const half = track.scrollWidth / 2;

      if (half > 0) {
        if (xRef.current <= -half) {
          xRef.current += half;
        }

        if (xRef.current > 0) {
          xRef.current -= half;
        }
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
  }, [items.length, isMobile, pxPerSecDesktop, pxPerSecMobile]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    resumeAtRef.current = Date.now() + resumeDelayMs;

    dragStartXRef.current = e.clientX;
    dragStartPosRef.current = xRef.current;

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const track = trackRef.current;
    if (!track) return;

    const dx = e.clientX - dragStartXRef.current;
    xRef.current = dragStartPosRef.current + dx;

    const half = track.scrollWidth / 2;

    if (half > 0) {
      if (xRef.current <= -half) {
        xRef.current += half;
      }

      if (xRef.current > 0) {
        xRef.current -= half;
      }
    }

    track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    resumeAtRef.current = Date.now() + resumeDelayMs;

    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  return (
    <section
      className={`relative bg-background ${className}`}
      aria-label="Brands"
    >
      <div className={`${isMobile ? "w-full py-10" : "mx-auto w-full md:w-[75vw] py-14"}`}>
        {items.length > 0 && (
          <div
            className={`relative overflow-hidden select-none ${
              isMobile ? "px-6" : ""
            } cursor-grab active:cursor-grabbing`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerLeave={() => {
              if (draggingRef.current) {
                draggingRef.current = false;
                resumeAtRef.current = Date.now() + resumeDelayMs;
              }
            }}
            style={{
              touchAction: "pan-y",
            }}
          >
            <div
              ref={trackRef}
              className={`flex items-center w-max will-change-transform ${
                isMobile ? "gap-8" : "gap-14"
              }`}
              style={{
                transform: "translate3d(0px, 0, 0)",
              }}
            >
              {[...items, ...items2].map((b) => (
                <div key={b.id} className="shrink-0">
                  <LogoBadge src={b.src} alt={b.alt} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}