/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // măsurăm înălțimea barei și o scriem în :root ca --nav-h
  useEffect(() => {
    const setH = () => {
      const h = barRef.current?.offsetHeight ?? 72; // fallback
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };
    setH();
    window.addEventListener("resize", setH, { passive: true });
    return () => window.removeEventListener("resize", setH);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div ref={barRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div
          className={[
            "nav-anim motion-reduce:animate-none",
            "animate-[nav-drop_.6s_cubic-bezier(0.16,1,0.3,1)_both]",
            "relative flex items-center gap-6 rounded-2xl border backdrop-blur",
            "px-4 sm:px-6 py-2.5",
            "transition-all duration-1200",
            scrolled
              ? "bg-white/10 border-white/20 shadow-[0_8px_30px_rgba(0,0,0,.35)]"
              : "bg-white/5  border-white/15 shadow-[0_10px_40px_rgba(0,0,0,.25)]",
          ].join(" ")}
          style={{ willChange: "transform", ["--nav-dur" as any]: "2.8s" }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(to_bottom,rgba(255,255,255,.14),rgba(255,255,255,0))] opacity-40" />

          <a href="/OrionGrup/" className="relative z-10 font-extrabold text-xl text-white">
            ORION.
          </a>

          {/* DESKTOP NAV */}
          <nav className="relative z-10 ml-2 hidden md:flex items-center gap-6 text-sm text-white/70">
  <Link className="hover:text-white transition" to="/OrionGrup/">Home</Link>
  <Link className="hover:text-white transition" to="/shop">Shop</Link>
  <Link className="hover:text-white transition" to="/portofoliu">Portofoliu</Link>
  <Link className="hover:text-white transition" to="/about">About Us</Link>
</nav>

          {/* ACTIONS + MOBILE TOGGLER */}
          <div className="relative z-10 ml-auto flex items-center gap-3">
            <a
              href="/signin"
              className="rounded-full bg-white/90 text-black px-4 py-2 text-sm font-semibold hover:bg-white transition border border-white/80"
            >
              Sign In
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="nav-popover"
              className="md:hidden grid h-9 w-9 place-items-center rounded-full bg-white/10 border border-white/15 text-white/80 hover:bg-white/15 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* MOBILE POPOVER */}
          {open && (
            <div
              id="nav-popover"
              className="absolute left-3 right-3 top-[calc(100%+10px)] rounded-2xl border border-white/15 bg-black/70 backdrop-blur p-3 md:hidden"
            >
              <div className="flex flex-col text-white/85 text-sm">
                <a onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/10" href="/">Home</a>
                <Link
  to="/shop"
  onClick={() => setOpen(false)}
  className="rounded-lg px-3 py-2 hover:bg-white/10"
>
  Shop
</Link>

                {/* Submeniul Portfolio in mobil */}
<Link
  to="/shop"
  onClick={() => setOpen(false)}
  className="rounded-lg px-3 py-2 hover:bg-white/10"
>
  Portofoliu
</Link>

                <a onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/10" href="/about">
                  About Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
