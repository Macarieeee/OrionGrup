import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePreloadImages } from "../hooks/usePreloadImages";
import { supabase } from "../lib/supabaseClient";
import type { Solution } from "../data/shopCatalog";

type CategoryTile = {
  id: string;
  label: Solution;
  imageUrl: string;
};

type ProductCardVM = {
  id: string; // folosit în URL
  brand: string;
  name: string;
  subtitle?: string | null;
  imageUrl: string;
  solutions: Solution[];
  display_order?: number | null;
  created_at?: string | null;
};

const FAVORITES_STORAGE_KEY = "orion_favorite_products";
function GridIconLarge() {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-black/80 transition duration-300 group-hover:scale-110"
    >
      <path
        d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function readFavoriteProductsFromStorage(): ProductCardVM[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item: Partial<ProductCardVM>) => item?.id && item?.name);
  } catch {
    return [];
  }
}

export default function Shop() {
  const openProduct = (id: string) => {
    sessionStorage.setItem("shop_scroll_y", String(window.scrollY));
    navigate(`/shop/${id}`);
  };
  const navigate = useNavigate();

  const [tiles, setTiles] = useState<CategoryTile[]>([]);
  const [products, setProducts] = useState<ProductCardVM[]>([]);
  const [allSolutions, setAllSolutions] = useState<Solution[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [favoriteProducts, setFavoriteProducts] = useState<ProductCardVM[]>(
    readFavoriteProductsFromStorage
  );

  // ✅ Fetch from Supabase (categories + products)
  useEffect(() => {
    let alive = true;

    (async () => {
      setLoadingData(true);
      setLoadError(null);

      const [{ data: catData, error: catErr }, { data: prodData, error: prodErr }] =
        await Promise.all([
          supabase
            .from("shop_categories")
            .select("id,label,image_url")
            .order("label", { ascending: true }),
          supabase
            .from("shop_products")
            .select("id,brand,name,subtitle,images,solutions,display_order,created_at")
            .order("display_order", { ascending: true, nullsFirst: false })
            .order("created_at", { ascending: true }),
        ]);

      if (!alive) return;

      if (catErr) {
        setLoadError(catErr.message);
        setLoadingData(false);
        return;
      }

      if (prodErr) {
        setLoadError(prodErr.message);
        setLoadingData(false);
        return;
      }

      const nextTiles: CategoryTile[] = (catData ?? []).map((c: any) => ({
        id: c.id,
        label: c.label,
        imageUrl: c.image_url,
      }));

      const nextProducts: ProductCardVM[] = (prodData ?? []).map((p: any) => ({
        id: p.id,
        brand: p.brand,
        name: p.name,
        subtitle: p.subtitle ?? null,
        imageUrl: p.images?.[0] ?? "",
        solutions: p.solutions ?? [],
        display_order: p.display_order ?? null,
        created_at: p.created_at ?? null,
      }));

      const nextAllSolutions = Array.from(
        new Set([
          ...nextTiles.map((t) => t.label),
          ...nextProducts.flatMap((p) => p.solutions ?? []),
        ])
      ).sort((a, b) => a.localeCompare(b));

      setTiles(nextTiles);
      setProducts(nextProducts);
      setAllSolutions(nextAllSolutions);
      setLoadingData(false);
    })();

    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteProducts)
    );

    window.dispatchEvent(new Event("orion:favorites-changed"));
  }, [favoriteProducts]);

  const isFavorite = (productId: string) =>
    favoriteProducts.some((product) => product.id === productId);

  const toggleFavorite = (product: ProductCardVM) => {
    setFavoriteProducts((prev) => {
      const alreadySaved = prev.some((item) => item.id === product.id);

      if (alreadySaved) {
        return prev.filter((item) => item.id !== product.id);
      }

      return [
        ...prev,
        {
          id: product.id,
          brand: product.brand,
          name: product.name,
          subtitle: product.subtitle ?? null,
          imageUrl: product.imageUrl,
          solutions: product.solutions ?? [],
          display_order: product.display_order ?? null,
          created_at: product.created_at ?? null,
        },
      ];
    });
  };

  // ✅ preload all images (tiles + products) BEFORE rendering page
  const allImageUrls = useMemo(() => {
    const tileUrls = tiles.map((t) => t.imageUrl).filter(Boolean);
    const productUrls = products.map((p) => p.imageUrl).filter(Boolean);
    return [...tileUrls, ...productUrls];
  }, [tiles, products]);

  const { ready } = usePreloadImages(allImageUrls, { timeoutMs: 9000 });
  useEffect(() => {
    // restaurăm doar când chiar avem conținut randat
    if (loadingData) return;
    if (!ready) return;

    const raw = sessionStorage.getItem("shop_scroll_y");
    if (!raw) return;

    const y = Number(raw);
    if (!Number.isFinite(y)) return;

    // ștergem ca să nu “forțeze” scroll de fiecare dată
    sessionStorage.removeItem("shop_scroll_y");

    // rAF ca să fie sigur după paint
    requestAnimationFrame(() => window.scrollTo(0, y));
  }, [loadingData, ready]);
  // selected filter (Solutions)
  const [selectedSolutions, setSelectedSolutions] = useState<Solution[]>([]);
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    if (selectedSolutions.length === 0) return products;
    return products.filter((p) =>
      selectedSolutions.some((s) => (p.solutions ?? []).includes(s))
    );
  }, [products, selectedSolutions]);

  const toggleSolution = (s: Solution) => {
    setSelectedSolutions((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const clearAll = () => setSelectedSolutions([]);

  const watchingLabel =
    selectedSolutions.length === 0 ? "All products" : selectedSolutions.join(", ");

  // ✅ block render until data is loaded AND images are loaded (or timeout)
  if (loadingData || !ready) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] grid place-items-center">
        <div className="flex flex-col items-center gap-3 text-white/80">
          <div className="h-10 w-10 rounded-full border border-white/20 border-t-white/80 animate-spin" />
          <div className="text-sm tracking-wide">Loading shop…</div>
          {loadError ? <div className="mt-2 text-sm text-red-400">{loadError}</div> : null}
        </div>
      </main>
    );
  }

  return (
    <main className="text-white pt-[var(--nav-h)]">
      {/* CATEGORY CAROUSEL */}
      <section className="w-full px-4 lg:px-10 pt-10 pb-6">
        <CategoryCarousel
          tiles={tiles}
          activeLabels={selectedSolutions}
          onSelect={(label) => {
            setSelectedSolutions([label]);
            document
              .getElementById("product-selector")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          onClearAll={() => {
            clearAll();
            document
              .getElementById("product-selector")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
      </section>

      {/* PRODUCT SELECTOR (poza 2) */}
      <section id="product-selector" className="px-6 lg:px-10 pb-16 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
          {/* LEFT FILTERS */}
          <aside className="lg:sticky lg:top-[calc(var(--nav-h)+24px)] h-fit">
            <div className="text-[11px] tracking-widest text-white/60 uppercase">
              You are watching
            </div>

            <div className="mt-3 flex items-center gap-2 text-white/85">
              {selectedSolutions.length > 0 ? (
                <>
                  <button
                    onClick={clearAll}
                    className="text-white/60 hover:text-white transition text-sm"
                    title="Clear all"
                    type="button"
                  >
                    ✕
                  </button>
                  <div className="text-sm">{watchingLabel}</div>
                </>
              ) : (
                <div className="text-sm">{watchingLabel}</div>
              )}
            </div>

            <button
              type="button"
              onClick={clearAll}
              className="mt-4 text-sm text-white/60 hover:text-white transition"
            >
              Clear all
            </button>

            <div className="mt-8 h-px w-full bg-white/10" />

            <div className="mt-8 text-lg font-semibold">Solutions</div>

            <div className="mt-4 space-y-3">
              {allSolutions.map((s) => {
                const checked = selectedSolutions.includes(s);
                return (
                  <label
                    key={s}
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSolution(s)}
                      className="h-4 w-4 accent-white"
                    />
                    <span className={checked ? "text-white underline" : ""}>
                      {s}
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="mt-10 space-y-6 text-white/85">
              <Collapsible title="Collections" defaultOpen={false} />
              <Collapsible title="Categories" defaultOpen={true}>
                <div className="mt-3 space-y-2 text-sm text-white/70">
                  <div className="hover:text-white transition cursor-pointer">
                    All Categories
                  </div>
                  <div className="hover:text-white transition cursor-pointer">
                    Lighting
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="hover:text-white transition cursor-pointer">
                      Interior lighting
                    </div>
                    <div className="hover:text-white transition cursor-pointer">
                      Outdoor lighting
                    </div>
                  </div>
                </div>
              </Collapsible>
              <Collapsible title="Materials" defaultOpen={false} />
              <Collapsible title="Styles" defaultOpen={false} />
              <Collapsible title="Designer" defaultOpen={false} />
            </div>
          </aside>

          {/* RIGHT PRODUCTS */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-white/85 font-semibold">
                {filteredProducts.length} Products
              </div>

              <div className="flex items-center gap-3 text-white/70">
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-sm">Order by:</span>
                  <button className="text-sm text-white/85 hover:text-white transition inline-flex items-center gap-1">
                    Relevance
                    <ChevronDown />
                  </button>
                </div>

                <button
                  onClick={() => setLayout("list")}
                  className={[
                    "h-9 w-9 grid place-items-center rounded-lg border border-white/10 hover:border-white/25 transition",
                    layout === "list" ? "text-white" : "text-white/60",
                  ].join(" ")}
                  title="List view"
                  type="button"
                >
                  <ListIcon />
                </button>
                <button
                  onClick={() => setLayout("grid")}
                  className={[
                    "h-9 w-9 grid place-items-center rounded-lg border border-white/10 hover:border-white/25 transition",
                    layout === "grid" ? "text-white" : "text-white/60",
                  ].join(" ")}
                  title="Grid view"
                  type="button"
                >
                  <GridIcon />
                </button>
              </div>
            </div>

            <div className="mt-8">
              {layout === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-14">
                  {filteredProducts.map((p) => (
                    <ProductCard
                      key={p.id}
                      p={p}
                      onOpen={() => openProduct(p.id)}
                      isFavorite={isFavorite(p.id)}
                      onToggleFavorite={() => toggleFavorite(p)}
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredProducts.map((p) => (
                    <ProductRow
                      key={p.id}
                      p={p}
                      onOpen={() => openProduct(p.id)}
                      isFavorite={isFavorite(p.id)}
                      onToggleFavorite={() => toggleFavorite(p)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------- Small UI components -------------------- */


function CategoryCarousel({
  tiles,
  activeLabels,
  onSelect,
  onClearAll,
}: {
  tiles: CategoryTile[];
  activeLabels: Solution[];
  onSelect: (label: Solution) => void;
  onClearAll: () => void;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth - 1;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= maxScroll);
  };

  useEffect(() => {
    updateEnds();

    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => requestAnimationFrame(updateEnds);

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateEnds);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateEnds);
    };
  }, [tiles.length]);

  const scrollByPage = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction * Math.max(280, el.clientWidth * 0.75),
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;

    dragState.current = {
      isDown: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      moved: false,
    };

    el.classList.add("cursor-grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    const state = dragState.current;

    if (!el || !state.isDown) return;

    e.preventDefault();

    const x = e.pageX - el.offsetLeft;
    const walk = x - state.startX;

    if (Math.abs(walk) > 5) {
      state.moved = true;
    }

    el.scrollLeft = state.scrollLeft - walk;
  };

  const stopDrag = () => {
    const el = scrollerRef.current;
    dragState.current.isDown = false;
    el?.classList.remove("cursor-grabbing");
  };

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        disabled={atStart}
        aria-label="Mută categoriile spre stânga"
        className={[
          "absolute left-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border backdrop-blur transition duration-300",
          "bg-black/60 text-white border-white/15",
          atStart ? "pointer-events-none opacity-30" : "hover:bg-black/80 hover:border-white/30",
        ].join(" ")}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => scrollByPage(1)}
        disabled={atEnd}
        aria-label="Mută categoriile spre dreapta"
        className={[
          "absolute right-0 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border backdrop-blur transition duration-300",
          "bg-black/60 text-white border-white/15",
          atEnd ? "pointer-events-none opacity-30" : "hover:bg-black/80 hover:border-white/30",
        ].join(" ")}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black/20 to-transparent" />

      <div
        ref={scrollerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-14 py-4 select-none"
      >
        {/* ALL PRODUCTS */}
        <button
          type="button"
          onClick={(e) => {
            if (dragState.current.moved) {
              e.preventDefault();
              dragState.current.moved = false;
              return;
            }

            onClearAll();
          }}
          className="group flex w-[130px] shrink-0 snap-start flex-col text-center"
        >
          <div
            className={[
              "relative flex h-[180px] w-full items-center justify-center overflow-hidden rounded-3xl bg-white transition duration-300",
              activeLabels.length === 0
                ? "ring-2 ring-white shadow-[0_18px_50px_rgba(255,255,255,0.16)]"
                : "ring-1 ring-white/10 hover:ring-white/30",
            ].join(" ")}
          >
            <GridIconLarge />
          </div>

          <div
  className={[
    "mt-4 flex min-h-[44px] items-start justify-center text-sm font-bold uppercase tracking-[0.08em] leading-tight transition duration-300",
    activeLabels.length === 0
      ? "text-white"
      : "text-white/85 group-hover:text-white",
  ].join(" ")}
>
  All products
</div>
        </button>

        {tiles.map((tile) => {
          const active = activeLabels.includes(tile.label);

          return (
            <button
              key={tile.id}
              type="button"
              onClick={(e) => {
                if (dragState.current.moved) {
                  e.preventDefault();
                  dragState.current.moved = false;
                  return;
                }

                onSelect(tile.label);
              }}
              className="group flex w-[130px] shrink-0 snap-start flex-col text-center"
            >
              <div
                className={[
                  "relative flex h-[180px] w-full items-center justify-center overflow-hidden rounded-3xl bg-white transition duration-300",
                  active
                    ? "ring-2 ring-white shadow-[0_18px_50px_rgba(255,255,255,0.16)]"
                    : "ring-1 ring-white/10 hover:ring-white/30",
                ].join(" ")}
              >
                <img
                  src={tile.imageUrl}
                  alt={tile.label}
                  draggable={false}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div
                className={[
                  "mt-4 flex min-h-[44px] items-start justify-center text-sm font-bold uppercase tracking-[0.08em] leading-tight transition duration-300",
                  active ? "text-white" : "text-white/85 group-hover:text-white",
                ].join(" ")}
              >
                {tile.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProductCard({
  p,
  onOpen,
  isFavorite,
  onToggleFavorite,
}: {
  p: ProductCardVM;
  onOpen: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) {
  return (
    <article className="group text-left">
      <div
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
        className="relative aspect-square cursor-pointer overflow-hidden rounded-3xl border border-white/10"
      >
        {p.imageUrl ? (
          <img
            src={p.imageUrl}
            alt={`${p.brand} ${p.name}`}
            className="h-full w-full object-contain opacity-95 group-hover:opacity-100 transition duration-300 bg-white"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-white/40">
            No image
          </div>
        )}

        <button
          className={[
            "absolute top-4 right-4 h-11 w-11 rounded-full border backdrop-blur",
            "grid place-items-center transition duration-300",
            isFavorite
              ? "border-white bg-white text-black hover:bg-white/90"
              : "border-white/15 bg-black/35 text-white/80 hover:text-white hover:border-white/30 hover:bg-black/50",
          ].join(" ")}
          title={isFavorite ? "Elimină de la favorite" : "Adaugă la favorite"}
          aria-label={isFavorite ? "Elimină de la favorite" : "Adaugă la favorite"}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>

      <button type="button" onClick={onOpen} className="mt-4 block w-full text-left">
        <div className="text-white/85">{p.brand}</div>
        <div className="mt-1 text-sm text-white/60">{p.name}</div>
        {p.subtitle ? (
          <div className="mt-1 text-xs text-white/45">{p.subtitle}</div>
        ) : null}
      </button>
    </article>
  );
}

function ProductRow({
  p,
  onOpen,
  isFavorite,
  onToggleFavorite,
}: {
  p: ProductCardVM;
  onOpen: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) {
  return (
    <article className="w-full flex items-center gap-6 rounded-2xl border border-white/10 p-4">
      <button
        type="button"
        onClick={onOpen}
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10"
      >
        {p.imageUrl ? (
          <img src={p.imageUrl} alt={p.name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full grid place-items-center text-white/40">
            No image
          </div>
        )}
      </button>

      <button type="button" onClick={onOpen} className="min-w-0 flex-1 text-left">
        <div className="text-white/85">{p.brand}</div>
        <div className="text-sm text-white/60">{p.name}</div>
        {p.subtitle ? (
          <div className="text-xs text-white/45">{p.subtitle}</div>
        ) : null}
      </button>

      <button
        className={[
          "h-11 w-11 shrink-0 rounded-full border backdrop-blur",
          "grid place-items-center transition duration-300",
          isFavorite
            ? "border-white bg-white text-black hover:bg-white/90"
            : "border-white/15 bg-black/30 text-white/80 hover:text-white hover:border-white/30 hover:bg-black/50",
        ].join(" ")}
        title={isFavorite ? "Elimină de la favorite" : "Adaugă la favorite"}
        aria-label={isFavorite ? "Elimină de la favorite" : "Adaugă la favorite"}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
      >
        <HeartIcon filled={isFavorite} />
      </button>
    </article>
  );
}

function Collapsible({
  title,
  defaultOpen,
  children,
}: {
  title: string;
  defaultOpen: boolean;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="font-semibold">{title}</div>
        <div className="text-white/70">{open ? "−" : "+"}</div>
      </button>

      <div className="mt-4 h-px w-full bg-white/10" />

      {open ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}

/* -------------------- Icons -------------------- */

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.062l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
    </svg>
  );
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

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}