import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePreloadImages } from "../hooks/usePreloadImages";

import {
  SHOP_CATEGORIES,
  SHOP_PRODUCTS,
  ALL_SOLUTIONS,
  type Solution,
} from "../data/shopCatalog";

/**
 * Notă:
 * - păstrez layout-ul 1:1 cu Shop.tsx-ul tău vechi
 * - doar sursa datelor e mutată în /data
 * - cardurile sunt clickable (navigate -> /shop/:productId)
 */

type CategoryTile = {
  id: string;
  label: Solution;
  imageUrl: string;
};

type ProductCardVM = {
  id: string; // folosit în URL
  brand: string;
  name: string;
  subtitle?: string;
  imageUrl: string;
  solutions: Solution[];
};

export default function Shop() {
  const navigate = useNavigate();

  // --- top tiles (grid ca în poza 1) - acum din data
  const tiles: CategoryTile[] = useMemo(() => {
    // SHOP_CATEGORIES are exact fields: id, label, imageUrl
    return SHOP_CATEGORIES.map((t) => ({
      id: t.id,
      label: t.label,
      imageUrl: t.imageUrl,
    }));
  }, []);

  // --- products (mock ca în poza 2) - acum din data
  const products: ProductCardVM[] = useMemo(() => {
    return SHOP_PRODUCTS.map((p) => ({
      id: p.id,
      brand: p.brand,
      name: p.name,
      subtitle: p.subtitle,
      imageUrl: p.images?.[0] ?? "",
      solutions: p.solutions,
    }));
  }, []);

  // ✅ preload all images (tiles + products) BEFORE rendering page
  const allImageUrls = useMemo(() => {
    const tileUrls = tiles.map((t) => t.imageUrl);
    const productUrls = products.map((p) => p.imageUrl).filter(Boolean);
    return [...tileUrls, ...productUrls];
  }, [tiles, products]);

  const { ready } = usePreloadImages(allImageUrls, { timeoutMs: 9000 });

  // selected filter (Solutions)
  const [selectedSolutions, setSelectedSolutions] = useState<Solution[]>([]);
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    if (selectedSolutions.length === 0) return products;
    return products.filter((p) =>
      selectedSolutions.some((s) => p.solutions.includes(s))
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

  // ✅ block render until images are loaded (or timeout)
  if (!ready) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] grid place-items-center">
        <div className="flex flex-col items-center gap-3 text-white/80">
          <div className="h-10 w-10 rounded-full border border-white/20 border-t-white/80 animate-spin" />
          <div className="text-sm tracking-wide">Loading shop…</div>
        </div>
      </main>
    );
  }

  return (
    <main className="text-white pt-[var(--nav-h)]">
      {/* CATEGORY GRID (3x3) */}
      <section className="w-full h-[60vh] px-4 lg:px-[20vw]">
        <div className="h-full">
          <div className="grid h-full grid-cols-3 grid-rows-3 gap-6">
            {tiles.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setSelectedSolutions([t.label]);
                  document
                    .getElementById("product-selector")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="
                  group
                  relative
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  hover:border-white/30
                  transition
                  duration-300
                "
              >
                <img
                  src={t.imageUrl}
                  alt={t.label}
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    scale-100
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                  loading="lazy"
                />

                {/* IMPORTANT: overlay-ul e decorativ => nu blochează click */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-black/45
                    group-hover:bg-black/30
                    transition
                    duration-300
                  "
                />

                <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
                  <span
                    className="
                      text-center
                      text-sm
                      md:text-base
                      font-semibold
                      tracking-wide
                      text-white
                      drop-shadow
                    "
                  >
                    {t.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
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
              {ALL_SOLUTIONS.map((s) => {
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
                      onOpen={() => navigate(`/shop/${p.id}`)}
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredProducts.map((p) => (
                    <ProductRow
                      key={p.id}
                      p={p}
                      onOpen={() => navigate(`/shop/${p.id}`)}
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

function ProductCard({
  p,
  onOpen,
}: {
  p: ProductCardVM;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group text-left"
    >
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10">
        {p.imageUrl ? (
          <img
            src={p.imageUrl}
            alt={`${p.brand} ${p.name}`}
            className="h-full w-full object-cover opacity-95 group-hover:opacity-100 transition duration-300"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-white/40">
            No image
          </div>
        )}

        <button
          className="absolute top-4 right-4 h-10 w-10 rounded-full border border-white/15 bg-black/30 backdrop-blur
                     grid place-items-center text-white/80 hover:text-white hover:border-white/30 transition"
          title="Save"
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // IMPORTANT: să nu navigheze când apeși inimioara
          }}
        >
          <HeartIcon />
        </button>
      </div>

      <div className="mt-4 text-white/85">{p.brand}</div>
      <div className="mt-1 text-sm text-white/60">{p.name}</div>
      {p.subtitle ? (
        <div className="mt-1 text-xs text-white/45">{p.subtitle}</div>
      ) : null}
    </button>
  );
}

function ProductRow({
  p,
  onOpen,
}: {
  p: ProductCardVM;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="w-full text-left flex items-center gap-6 rounded-2xl border border-white/10 p-4"
    >
      <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-white/10">
        {p.imageUrl ? (
          <img
            src={p.imageUrl}
            alt={p.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-white/40">
            No image
          </div>
        )}
      </div>

      <div className="flex-1">
        <div className="text-white/85">{p.brand}</div>
        <div className="text-sm text-white/60">{p.name}</div>
        {p.subtitle ? (
          <div className="text-xs text-white/45">{p.subtitle}</div>
        ) : null}
      </div>

      <button
        className="h-10 w-10 rounded-full border border-white/15 bg-black/30 backdrop-blur
                   grid place-items-center text-white/80 hover:text-white hover:border-white/30 transition"
        title="Save"
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // IMPORTANT: să nu navigheze când apeși inimioara
        }}
      >
        <HeartIcon />
      </button>
    </button>
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

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-4.35-9.5-8.5C.5 9 2.4 6 5.8 6c1.9 0 3.2 1 4.2 2.2C11 7 12.3 6 14.2 6 17.6 6 19.5 9 21.5 12.5 19 16.65 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.6"
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
