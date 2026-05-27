/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const FAVORITES_STORAGE_KEY = "orion_favorite_products";

type FavoriteProduct = {
  id: string;
  brand?: string | null;
  name: string;
  code?: string | null;
  subtitle?: string | null;
  imageUrl?: string | null;
  images?: string[];
  solutions?: string[];
  price?: number | null;
  currency?: string | null;
};

function readFavoriteProductsFromStorage(): FavoriteProduct[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item: Partial<FavoriteProduct>) => item?.id && item?.name
    );
  } catch {
    return [];
  }
}

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState<FavoriteProduct[]>(
    readFavoriteProductsFromStorage
  );
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const barRef = useRef<HTMLDivElement>(null);
  const favoritesRef = useRef<HTMLDivElement>(null);

  // Măsurăm înălțimea barei și o scriem în :root ca --nav-h
  useEffect(() => {
    const setH = () => {
      const h = barRef.current?.offsetHeight ?? 72;
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };

    setH();
    window.addEventListener("resize", setH, { passive: true });

    return () => window.removeEventListener("resize", setH);
  }, []);

  // Sincronizăm favoritele din Navbar cu Shop/ProductPage.
  // Shop/ProductPage salvează în localStorage și trimit evenimentul "orion:favorites-changed".
  useEffect(() => {
    const syncFavorites = () => {
      const nextFavorites = readFavoriteProductsFromStorage();
      setFavoriteProducts(nextFavorites);

      if (nextFavorites.length === 0) {
        setFavoritesOpen(false);
      }
    };

    syncFavorites();

    window.addEventListener("orion:favorites-changed", syncFavorites);
    window.addEventListener("storage", syncFavorites);

    return () => {
      window.removeEventListener("orion:favorites-changed", syncFavorites);
      window.removeEventListener("storage", syncFavorites);
    };
  }, []);

  // Închidem dropdown-ul de favorite la click în afară.
  useEffect(() => {
    if (!favoritesOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (
        favoritesRef.current &&
        !favoritesRef.current.contains(event.target as Node)
      ) {
        setFavoritesOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFavoritesOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [favoritesOpen]);

  // Verificăm user-ul logat
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserEmail(user?.email ?? null);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserEmail(null);
    setUserMenuOpen(false);
    setFavoritesOpen(false);
    setOpen(false);
  };

  const scrollToContactForm = () => {
    const selectors = [
      "#contact-form",
      "#contactForm",
      "#contact",
      "#footer-contact",
      "[data-contact-form]",
      "footer form",
      "footer",
    ];

    const target = selectors
      .map((selector) => document.querySelector(selector))
      .find(Boolean) as HTMLElement | undefined;

    if (!target) return false;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  };

  const handleRequestOffer = () => {
    setFavoritesOpen(false);
    setUserMenuOpen(false);
    setOpen(false);

    const didScroll = scrollToContactForm();

    // Fallback: dacă formularul/footerul nu există pe pagina curentă,
    // mergem pe pagina de contact și încercăm din nou scroll-ul.
    if (!didScroll) {
      navigate("/contact");
      window.setTimeout(() => {
        scrollToContactForm();
      }, 250);
    }
  };

  const userName = userEmail ? userEmail.split("@")[0] : "";
  const favoritesCount = favoriteProducts.length;
  const hasFavorites = favoritesCount > 0;

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
            "bg-[#1c1d1f] border-white/10 shadow-[0_10px_40px_rgba(0,0,0,.45)]",
          ].join(" ")}
          style={{ willChange: "transform", ["--nav-dur" as any]: "2.8s" }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(to_bottom,rgba(255,255,255,.14),rgba(255,255,255,0))] opacity-40" />

          <Link to="/" className="relative z-10 font-extrabold text-xl text-white">
            ORION.
          </Link>

          {/* DESKTOP NAV */}
          <nav className="relative z-10 ml-2 hidden md:flex items-center gap-6 text-sm text-white/70">
            <Link className="hover:text-white transition" to="/">
              Home
            </Link>
            <Link className="hover:text-white transition" to="/shop">
              Shop
            </Link>
            <Link className="hover:text-white transition" to="/portofoliu">
              Portofoliu
            </Link>
            <Link className="hover:text-white transition" to="/despre">
              Despre Noi
            </Link>
            <Link className="hover:text-white transition" to="/cataloage">
              Cataloage
            </Link>
            <Link className="hover:text-white transition" to="/work-in-progress">
              Work in Progress
            </Link>
          </nav>

          {/* ACTIONS + MOBILE TOGGLER */}
          <div className="relative z-10 ml-auto flex items-center gap-3">
            {hasFavorites ? (
              <div ref={favoritesRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setFavoritesOpen((v) => !v);
                    setUserMenuOpen(false);
                    setOpen(false);
                  }}
                  className="relative grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/15 hover:border-white/30 transition duration-300"
                  aria-label="Produse favorite"
                  title="Produse favorite"
                >
                  <HeartIcon filled />

                  <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-[11px] font-bold leading-none text-black">
                    {favoritesCount}
                  </span>
                </button>

                {favoritesOpen ? (
                  <div className="absolute right-0 top-[calc(100%+12px)] w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-white/15 bg-[#111214] shadow-[0_22px_70px_rgba(0,0,0,.65)]">
                    <div className="border-b border-white/10 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                        Produse favorite
                      </p>
                      <p className="mt-1 text-sm text-white/80">
                        {favoritesCount}{" "}
                        {favoritesCount === 1 ? "produs selectat" : "produse selectate"}
                      </p>
                    </div>

                    <div className="max-h-[320px] overflow-y-auto p-2">
                      {favoriteProducts.map((product) => {
                        const imageSrc =
                          product.imageUrl || product.images?.[0] || "";

                        return (
                          <Link
                            key={product.id}
                            to={`/shop/${product.id}`}
                            onClick={() => setFavoritesOpen(false)}
                            className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/10"
                          >
                            <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-white">
                              {imageSrc ? (
                                <img
                                  src={imageSrc}
                                  alt={product.name}
                                  className="h-full w-full object-contain p-1"
                                  loading="lazy"
                                />
                              ) : (
                                <span className="text-xs font-semibold text-black/50">
                                  ORION
                                </span>
                              )}
                            </div>

                            <div className="min-w-0">
                              {product.brand ? (
                                <div className="truncate text-xs text-white/45">
                                  {product.brand}
                                </div>
                              ) : null}
                              <div className="line-clamp-2 text-sm font-semibold leading-snug text-white/85">
                                {product.name}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="border-t border-white/10 p-3">
                      <button
                        type="button"
                        onClick={handleRequestOffer}
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                      >
                        Cere Ofertă
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}

            {userEmail ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setUserMenuOpen((v) => !v);
                    setFavoritesOpen(false);
                  }}
                  className="rounded-full bg-white/90 text-black px-4 py-2 text-sm font-semibold hover:bg-white transition border border-white/80 max-w-[190px] inline-flex items-center gap-2"
                  title={userEmail}
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-black text-white text-[10px] uppercase">
                    {userEmail.charAt(0)}
                  </span>
                  <span className="truncate max-w-[110px]">{userName}</span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-[calc(100%+10px)] w-56 rounded-2xl border border-white/15 bg-[#111214] p-2 shadow-[0_18px_50px_rgba(0,0,0,.55)]">
                    <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                        Cont logat
                      </p>
                      <p className="mt-1 text-sm text-white/85 truncate">
                        {userEmail}
                      </p>
                    </div>

                    <Link
                      to="/cataloage"
                      onClick={() => setUserMenuOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                    >
                      Cataloage
                    </Link>

                    <Link
                      to="/work-in-progress"
                      onClick={() => setUserMenuOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                    >
                      Work in Progress
                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="mt-1 w-full text-left rounded-xl px-3 py-2 text-sm text-red-300 hover:bg-red-500/10 hover:text-red-200 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/sign-in"
                className="rounded-full bg-white/90 text-black px-4 py-2 text-sm font-semibold hover:bg-white transition border border-white/80"
              >
                Sign In
              </Link>
            )}

            <button
              onClick={() => {
                setOpen((v) => !v);
                setFavoritesOpen(false);
                setUserMenuOpen(false);
              }}
              aria-expanded={open}
              aria-controls="nav-popover"
              className="md:hidden grid h-9 w-9 place-items-center rounded-full bg-white/10 border border-white/15 text-white/80 hover:bg-white/15 transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* MOBILE POPOVER */}
          {open && (
            <div
              id="nav-popover"
              className="absolute left-3 right-3 top-[calc(100%+10px)] rounded-2xl border border-white/15 bg-black/80 backdrop-blur p-3 md:hidden"
            >
              <div className="flex flex-col text-white/85 text-sm">
                <Link
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-white/10"
                  to="/"
                >
                  Home
                </Link>

                <Link
                  to="/shop"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-white/10"
                >
                  Shop
                </Link>

                <Link
                  to="/portofoliu"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-white/10"
                >
                  Portofoliu
                </Link>

                <Link
                  to="/despre"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-white/10"
                >
                  Despre Noi
                </Link>

                <Link
                  to="/cataloage"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-white/10"
                >
                  Cataloage
                </Link>

                <Link
                  to="/work-in-progress"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-white/10"
                >
                  Work in Progress
                </Link>

                {userEmail ? (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-2 rounded-lg px-3 py-2 text-left text-red-300 hover:bg-red-500/10"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/sign-in"
                    onClick={() => setOpen(false)}
                    className="mt-2 rounded-lg px-3 py-2 bg-white text-black font-semibold text-center"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
