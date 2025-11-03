/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

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

          <a href="/" className="relative z-10 font-extrabold text-xl text-white">
            ORION.
          </a>

          {/* DESKTOP NAV */}
          <nav className="relative z-10 ml-2 hidden md:flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white transition" href="/">Home</a>
            <a className="hover:text-white transition" href="/shop">Shop</a>

            {/* Portfolio + DROPDOWN (hover/focus) */}
            <div className="relative group">
              <a
                href="/portfolio"
                className="hover:text-white transition inline-flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portfolio
                <svg className="h-4 w-4 opacity-70" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.062l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
                </svg>
              </a>

              {/* dropdown: visible pe hover și focus-within */}
              <div
                className="
                  pointer-events-auto absolute left-0 mt-2 w-48
                  rounded-2xl border border-white/15 bg-black/70 backdrop-blur
                  p-1 shadow-[0_10px_35px_rgba(0,0,0,.35)]
                  invisible opacity-0 translate-y-1
                  group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                  focus-within:visible focus-within:opacity-100 focus-within:translate-y-0
                  transition-all duration-200
                "
              >
                <a
                  href="https://macarieeee.github.io/lumen-shift-showcase/"
                  className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/10"
                >
                  Model 1
                </a>
                <a
                  href="https://macarieeee.github.io/transfo-light/"
                  className="block rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/10"
                >
                  Model 2
                </a>
              </div>
            </div>

            <a className="hover:text-white transition" href="/about">About Us</a>
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
                <a onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-white/10" href="/shop">Shop</a>

                {/* Submeniul Portfolio in mobil */}
                <div className="rounded-lg">
                  <div className="px-3 py-2 text-white/70">Portfolio</div>
                  <a
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-5 py-2 hover:bg-white/10"
                    href="https://macarieeee.github.io/lumen-shift-showcase/"
                  >
                    Model 1
                  </a>
                  <a
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-5 py-2 hover:bg-white/10"
                    href="https://macarieeee.github.io/transfo-light/"
                  >
                    Model 2
                  </a>
                </div>

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
