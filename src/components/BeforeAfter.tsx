import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  initial?: number; // 0..100
  className?: string;
};

export default function BeforeAfter({
  before,
  after,
  initial = 50,
  className = "",
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
  const [pct, setPct] = useState(clamp(initial, 0, 100));

  const setFromClientX = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = clientX - r.left;
    const next = (x / r.width) * 100;
    setPct(clamp(next, 0, 100));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  // Escape / safety: stop dragging if pointer leaves window
  useEffect(() => {
    const up = () => (draggingRef.current = false);
    window.addEventListener("pointerup", up);
    window.addEventListener("blur", up);
    return () => {
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", up);
    };
  }, []);

  const leftStyle = useMemo(() => ({ width: `${pct}%` }), [pct]);

  return (
    <div
      ref={wrapRef}
      className={[
        "relative w-full h-64 md:h-80 overflow-hidden rounded-2xl border border-white/10 select-none",
        className,
      ].join(" ")}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{ touchAction: "none" }} // important pt drag pe mobile
      aria-label="Before after slider"
      role="group"
    >
      {/* AFTER (fundal) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* BEFORE (mascat cu width %) */}
      <div className="absolute inset-0 overflow-hidden" style={leftStyle}>
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 h-full w-px bg-white/80 z-20"
        style={{ left: `${pct}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-30 -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${pct}%` }}
      >
        <div className="h-11 w-11 rounded-full bg-white/95 shadow-xl flex items-center justify-center">
          <span className="text-black text-lg leading-none">⇄</span>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 z-40 rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-semibold text-black">
        Old Lighting
      </span>

      <span className="absolute top-4 right-4 z-40 rounded-full bg-indigo-500/90 px-3 py-1 text-xs font-semibold text-white">
        New Lighting
      </span>
    </div>
  );
}
