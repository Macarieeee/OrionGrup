import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import type { ShopProduct } from "../data/shopCatalog";

export default function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ShopProduct | null>(null);
  const [related, setRelated] = useState<ShopProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [activeImg, setActiveImg] = useState(0);
  const [dimPreview, setDimPreview] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<
    Array<"specs" | "dimensions" | "catalog" | "bimcad">
  >(["specs"]);

  // ESC close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDimPreview(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = (k: "specs" | "dimensions" | "catalog" | "bimcad") => {
    setOpenSections((prev) =>
      prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]
    );
  };

  useEffect(() => {
    let alive = true;

    (async () => {
      setLoading(true);
      setErr(null);
      setProduct(null);
      setRelated([]);
      setActiveImg(0);

      if (!productId) {
        if (!alive) return;
        setErr("Lipsește ID-ul produsului din URL.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("shop_products")
        .select(
          "id,brand,name,code,subtitle,description,images,solutions,specs,dimensions_images,dimensions_text,documents"
        )
        .eq("id", productId)
        .maybeSingle();

      if (!alive) return;

      if (error) {
        setErr(error.message);
        setLoading(false);
        return;
      }

      if (!data) {
        setErr("Produsul nu a fost găsit.");
        setLoading(false);
        return;
      }

      const mapped: ShopProduct = {
        id: data.id,
        brand: data.brand,
        name: data.name,
        code: data.code,
        subtitle: data.subtitle ?? null,
        description: data.description ?? "",
        images: data.images ?? [],
        solutions: data.solutions ?? [],
        specs: Array.isArray(data.specs) ? data.specs : [],
        dimensions: {
          images: data.dimensions_images ?? [],
          text: data.dimensions_text ?? undefined,
        },
        documents: Array.isArray(data.documents) ? data.documents : [],
      };

      setProduct(mapped);

      // related (overlap on solutions)
      if (mapped.solutions?.length) {
        const { data: relData, error: relErr } = await supabase
          .from("shop_products")
          .select(
            "id,brand,name,code,subtitle,description,images,solutions,specs,dimensions_images,dimensions_text,documents"
          )
          .neq("id", mapped.id)
          .overlaps("solutions", mapped.solutions)
          .limit(6);

        if (!alive) return;

        if (!relErr) {
          const relMapped: ShopProduct[] = (relData ?? []).map((r: any) => ({
            id: r.id,
            brand: r.brand,
            name: r.name,
            code: r.code,
            subtitle: r.subtitle ?? null,
            description: r.description ?? "",
            images: r.images ?? [],
            solutions: r.solutions ?? [],
            specs: Array.isArray(r.specs) ? r.specs : [],
            dimensions: {
              images: r.dimensions_images ?? [],
              text: r.dimensions_text ?? undefined,
            },
            documents: Array.isArray(r.documents) ? r.documents : [],
          }));

          setRelated(relMapped);
        }
      }

      setLoading(false);
    })();

    return () => {
      alive = false;
    };
  }, [productId]);

  const images = product?.images ?? [];
  const heroImg = images[Math.min(activeImg, Math.max(images.length - 1, 0))];

  const docsCatalog = useMemo(
    () =>
      (product?.documents ?? []).filter(
        (d: any) => d.type === "catalog" || d.type === "datasheet"
      ),
    [product]
  );

  const docsDownloads = useMemo(
    () =>
      (product?.documents ?? []).filter(
        (d: any) => d.type === "bim" || d.type === "cad"
      ),
    [product]
  );

  if (loading) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] bg-[#ffffff] text-black grid place-items-center px-6">
        <div className="text-sm text-black/70">Produsul se încarcă…</div>
      </main>
    );
  }

  if (err || !product) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] bg-[#ffffff] text-black grid place-items-center px-6">
        <div className="text-center">
          <div className="text-xl font-semibold">
            {err ?? "Produsul nu a fost găsit"}
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="mt-5 inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-black/85 hover:text-black hover:border-white/30 transition duration-300 ease-in-out"
          >
            Înapoi la Shop
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-[var(--nav-h)] bg-[#ffffff] text-black">
      <section className="px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
          {/* LEFT: IMAGE + THUMBNAILS */}
          <div>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] md:aspect-[16/10]">
                {heroImg ? (
                  <img
                    src={heroImg}
                    alt={`${product.brand} ${product.name}`}
                    className="h-full w-full object-contain p-6"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center text-black/50">
                    No image
                  </div>
                )}
              </div>

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImg((i) => (i - 1 + images.length) % images.length)
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/15 bg-black/30 backdrop-blur grid place-items-center text-black/85 hover:text-black hover:border-white/30 transition duration-300 ease-in-out"
                    aria-label="Previous image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 6l-6 6 6 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImg((i) => (i + 1) % images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/15 bg-black/30 backdrop-blur grid place-items-center text-black/85 hover:text-black hover:border-white/30 transition duration-300 ease-in-out"
                    aria-label="Next image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </>
              ) : null}
            </div>

            {images.length > 1 ? (
              <div className="mt-6 flex justify-center">
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {images.map((src, idx) => {
                    const active = idx === activeImg;

                    return (
                      <button
                        key={src + idx}
                        type="button"
                        onClick={() => setActiveImg(idx)}
                        className={[
                          "h-20 w-20 shrink-0 rounded-2xl border overflow-hidden bg-white/[0.02] transition duration-300 ease-in-out",
                          active
                            ? "border-white/40"
                            : "border-white/10 hover:border-white/25",
                        ].join(" ")}
                      >
                        <img
                          src={src}
                          alt=""
                          className="h-full w-full object-contain p-2"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          {/* RIGHT: PRODUCT INFO + CTA */}
          <aside className="lg:sticky lg:top-[calc(var(--nav-h)+18px)] h-fit">
            <div className="text-black/70 text-sm">{product.brand}</div>
            <h1 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
              {product.name}
            </h1>
            <div className="mt-2 text-black/55 text-sm">Cod: {product.code}</div>

            {product.subtitle ? (
              <div className="mt-3 text-black/70">{product.subtitle}</div>
            ) : null}

            <p className="mt-6 text-black/70 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {(product.solutions ?? []).map((s) => (
                <span key={s} className="rounded-full bg-black px-3 py-1 text-xs text-white">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                className="rounded-2xl bg-black text-white px-5 py-3 font-semibold hover:opacity-90 transition duration-300 ease-in-out"
                onClick={() => navigate("/contact")}
              >
                Cere ofertă
              </button>

              <button
                type="button"
                className="rounded-2xl bg-black/85 border border-white/15 px-5 py-3 text-white/85 hover:text-white hover:border-white/30 transition duration-300 ease-in-out"
                onClick={() => navigate("/contact")}
              >
                Contactează-ne
              </button>
            </div>

            <div className="mt-8 h-px bg-white/10" />

            {/* ACCORDIONS like screenshot */}
            <div className="mt-6 space-y-5">
              <Accordion
                title="Specificații tehnice"
                open={openSections.includes("specs")}
                onToggle={() => toggle("specs")}
              >
                {(product.specs?.length ?? 0) > 0 ? (
                  <div className="space-y-2 text-sm text-black/70">
                    {product.specs.map((sp: any) => (
                      <div key={sp.label} className="flex items-start justify-between gap-6">
                        <div className="text-black/55">{sp.label}</div>
                        <div className="text-right text-black/80">{sp.value}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-black/70">Nu există specificații momentan.</div>
                )}
              </Accordion>

              <Accordion
                title="Dimensiuni"
                open={openSections.includes("dimensions")}
                onToggle={() => toggle("dimensions")}
              >
                {product.dimensions?.images?.length ? (
                  <div className="flex justify-center">
                    {product.dimensions.images.map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setDimPreview(src)}
                        className="transition duration-300 ease-in-out hover:scale-105"
                        aria-label="Deschide preview dimensiuni"
                      >
                        <img
                          src={src}
                          alt="Dimensiuni"
                          className="w-[260px] md:w-[360px] object-contain"
                        />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-black/70">
                    {product.dimensions?.text ??
                      "Nu există imagini pentru dimensiuni momentan."}
                  </div>
                )}
              </Accordion>

              <Accordion
                title="Cataloage"
                open={openSections.includes("catalog")}
                onToggle={() => toggle("catalog")}
              >
                <DocList docs={docsCatalog.map((d: any) => ({ label: d.label, url: d.url }))} />
              </Accordion>

              <Accordion
                title="Downloads"
                open={openSections.includes("bimcad")}
                onToggle={() => toggle("bimcad")}
              >
                <DocList docs={docsDownloads.map((d: any) => ({ label: d.label, url: d.url }))} />
              </Accordion>
            </div>
          </aside>
        </div>

        {/* RELATED */}
        <div className="mt-14">
          <div className="text-lg font-semibold">Produse similare</div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {related.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setActiveImg(0);
                  navigate(`/shop/${p.id}`);
                }}
                className="text-left"
              >
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]">
                  <div className="aspect-[4/3]">
                    <img
                      src={p.images?.[0] ?? ""}
                      alt={p.name}
                      className="h-full w-full object-contain p-6"
                    />
                  </div>
                </div>
                <div className="mt-4 text-black/85">{p.brand}</div>
                <div className="mt-1 text-sm text-black/55">{p.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DIMENSION PREVIEW */}
      {dimPreview ? (
        <div
          className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-6"
          onClick={() => setDimPreview(null)}
        >
          <div
            className="max-h-[90vh] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={dimPreview}
              alt="Preview dimensiuni"
              className="max-h-[90vh] max-w-[92vw] object-contain"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}

function Accordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="font-semibold">{title}</div>
        <div className="text-black/70 text-xl leading-none">{open ? "−" : "+"}</div>
      </button>
      <div className="mt-4 h-px w-full bg-white/10" />
      {open ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}

function DocList({ docs }: { docs: { label: string; url: string }[] }) {
  if (!docs.length) {
    return <div className="text-sm text-black/70">Nu există documente momentan.</div>;
  }
  return (
    <div className="space-y-2">
      {docs.map((d) => (
        <a
          key={d.label}
          href={d.url}
          className="inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-black/80 hover:text-black hover:border-white/25 transition duration-300 ease-in-out"
          target={d.url === "#" ? undefined : "_blank"}
          rel={d.url === "#" ? undefined : "noreferrer"}
        >
          <span>{d.label}</span>
          <span className="text-black/50">↗</span>
        </a>
      ))}
    </div>
  );
}