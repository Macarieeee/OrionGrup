import { useMemo, useState } from "react";

type Solution =
  | "Ceiling Recessed"
  | "Surface"
  | "Suspension"
  | "Wall"
  | "Table & Floor"
  | "Tracklights"
  | "Custom Systems"
  | "Lamps"
  | "Outdoor";

type CategoryTile = {
  id: string;
  label: Solution;
  imageUrl: string;
};

type Product = {
  id: string;
  brand: string;
  name: string;
  subtitle?: string;
  imageUrl: string;
  solutions: Solution[];
};

const ALL_SOLUTIONS: Solution[] = [
  "Ceiling Recessed",
  "Surface",
  "Suspension",
  "Wall",
  "Table & Floor",
  "Tracklights",
  "Custom Systems",
  "Lamps",
  "Outdoor",
];

export default function Shop() {
  // --- top tiles (grid ca în poza 1)
  const tiles: CategoryTile[] = useMemo(
    () => [
      {
        id: "t1",
        label: "Ceiling Recessed",
        imageUrl:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "t2",
        label: "Surface",
        imageUrl:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "t3",
        label: "Suspension",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "t4",
        label: "Wall",
        imageUrl:
          "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "t5",
        label: "Table & Floor",
        imageUrl:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "t6",
        label: "Tracklights",
        imageUrl:
          "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "t7",
        label: "Custom Systems",
        imageUrl:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "t8",
        label: "Lamps",
        imageUrl:
          "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "t9",
        label: "Outdoor",
        imageUrl:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    []
  );

  // --- products (mock ca în poza 2)
  const products: Product[] = useMemo(
    () => [
      {
        id: "p1",
        brand: "Arkoslight",
        name: "MAGNETIC 24V MICRO SHAPER",
        subtitle: "LED adjustable semi-inset spotlight",
        imageUrl:
          "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
        solutions: ["Ceiling Recessed", "Tracklights"],
      },
      {
        id: "p2",
        brand: "Arkoslight",
        name: "NANO RECESSED",
        subtitle: "Round LED recessed aluminium spotlight",
        imageUrl:
          "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=80",
        solutions: ["Ceiling Recessed"],
      },
      {
        id: "p3",
        brand: "Arkoslight",
        name: "NANO TRIMLESS",
        subtitle: "LED round recessed aluminium spotlight",
        imageUrl:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        solutions: ["Ceiling Recessed"],
      },
      {
        id: "p4",
        brand: "Arkoslight",
        name: "SLOT SYSTEM",
        subtitle: "Modular linear system",
        imageUrl:
          "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
        solutions: ["Custom Systems", "Tracklights"],
      },
      {
        id: "p5",
        brand: "Arkoslight",
        name: "WALL WASH",
        subtitle: "Architectural wall light",
        imageUrl:
          "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80",
        solutions: ["Wall"],
      },
      {
        id: "p6",
        brand: "Arkoslight",
        name: "PENDANT LINE",
        subtitle: "Suspended linear light",
        imageUrl:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        solutions: ["Suspension"],
      },
      {
        id: "p7",
        brand: "Arkoslight",
        name: "SURFACE DOT",
        subtitle: "Compact surface spotlight",
        imageUrl:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        solutions: ["Surface"],
      },
      {
        id: "p8",
        brand: "Arkoslight",
        name: "OUTDOOR BEAM",
        subtitle: "IP-rated outdoor spot",
        imageUrl:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        solutions: ["Outdoor"],
      },
      {
        id: "p9",
        brand: "Arkoslight",
        name: "FLOOR LIGHT",
        subtitle: "Table & floor ambient lamp",
        imageUrl:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
        solutions: ["Table & Floor", "Lamps"],
      },
    ],
    []
  );

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

  return (
    <main className="text-white pt-[var(--nav-h)]">
      {/* TOP HALF: Category tiles (poza 1) */}
      {/* <section className="px-6 lg:px-10 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {tiles.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                // click pe tile = filtrează după acea soluție
                setSelectedSolutions([t.label]);
                // scroll către produse
                document
                  .getElementById("product-selector")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group text-left"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={t.imageUrl}
                  alt={t.label}
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition duration-300"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
              </div>

              <div className="mt-4 text-sm md:text-base text-white/85 group-hover:text-white transition">
                {t.label}
              </div>
            </button>
          ))}
        </div>
        <div className="h-[10vh] md:h-[14vh]" />
      </section> */}
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
          {/* imagine */}
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

          {/* overlay pentru lizibilitate */}
          <div
            className="
              absolute inset-0
              bg-black/45
              group-hover:bg-black/30
              transition
              duration-300
            "
          />

          {/* label centrat */}
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
                    <span className={checked ? "text-white underline" : ""}>{s}</span>
                  </label>
                );
              })}
            </div>

            {/* Extra sections like in screenshot (collapsed UI placeholders) */}
            <div className="mt-10 space-y-6 text-white/85">
              <Collapsible title="Collections" defaultOpen={false} />
              <Collapsible title="Categories" defaultOpen={true}>
                <div className="mt-3 space-y-2 text-sm text-white/70">
                  <div className="hover:text-white transition cursor-pointer">All Categories</div>
                  <div className="hover:text-white transition cursor-pointer">Lighting</div>
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
            {/* top bar */}
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
                >
                  <GridIcon />
                </button>
              </div>
            </div>

            <div className="mt-8">
              {layout === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-14">
                  {filteredProducts.map((p) => (
                    <ProductCard key={p.id} p={p} />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredProducts.map((p) => (
                    <ProductRow key={p.id} p={p} />
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

function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10">
        <img
          src={p.imageUrl}
          alt={`${p.brand} ${p.name}`}
          className="h-full w-full object-cover opacity-95 group-hover:opacity-100 transition duration-300"
          loading="lazy"
        />
        <button
          className="absolute top-4 right-4 h-10 w-10 rounded-full border border-white/15 bg-black/30 backdrop-blur
                     grid place-items-center text-white/80 hover:text-white hover:border-white/30 transition"
          title="Save"
          type="button"
        >
          <HeartIcon />
        </button>
      </div>

      <div className="mt-4 text-white/85">{p.brand}</div>
      <div className="mt-1 text-sm text-white/60">{p.name}</div>
      {p.subtitle ? <div className="mt-1 text-xs text-white/45">{p.subtitle}</div> : null}
    </div>
  );
}

function ProductRow({ p }: { p: Product }) {
  return (
    <div className="flex items-center gap-6 rounded-2xl border border-white/10 p-4">
      <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-white/10">
        <img src={p.imageUrl} alt={p.name} className="h-full w-full object-cover" />
      </div>

      <div className="flex-1">
        <div className="text-white/85">{p.brand}</div>
        <div className="text-sm text-white/60">{p.name}</div>
        {p.subtitle ? <div className="text-xs text-white/45">{p.subtitle}</div> : null}
      </div>

      <button
        className="h-10 w-10 rounded-full border border-white/15 bg-black/30 backdrop-blur
                   grid place-items-center text-white/80 hover:text-white hover:border-white/30 transition"
        title="Save"
        type="button"
      >
        <HeartIcon />
      </button>
    </div>
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
