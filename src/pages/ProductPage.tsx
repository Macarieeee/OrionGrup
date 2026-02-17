import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SHOP_PRODUCTS } from "../data/shopCatalog";
import { useEffect } from "react";

export default function ProductPage() {
    useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setDimPreview(null);
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, []);
    const { productId } = useParams();
    const navigate = useNavigate();

    const product = useMemo(
        () => SHOP_PRODUCTS.find((p) => p.id === productId),
        [productId]
    );

    const [activeImg, setActiveImg] = useState(0);
    const [dimPreview, setDimPreview] = useState<string | null>(null);
    const [openSection, setOpenSection] = useState<
        "specs" | "dimensions" | "catalog" | "bimcad" | null
    >("specs");

    const related = useMemo(() => {
        if (!product) return [];
        return SHOP_PRODUCTS.filter(
            (p) =>
                p.id !== product.id &&
                p.solutions.some((s) => product.solutions.includes(s))
        ).slice(0, 6);
    }, [product]);

    if (!product) {
        return (
            <main className="min-h-screen pt-[var(--nav-h)] bg-black text-white grid place-items-center px-6">
                <div className="text-center">
                    <div className="text-xl font-semibold">Produsul nu a fost găsit</div>
                    <button
                        onClick={() => navigate("/shop")}
                        className="mt-5 inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-white/85 hover:text-white hover:border-white/30 transition duration-300 ease-in-out"
                    >
                        Înapoi la Shop
                    </button>
                </div>
            </main>
        );
    }

    const images = product.images ?? [];
    const heroImg = images[Math.min(activeImg, images.length - 1)];

    const toggle = (k: typeof openSection) => {
        setOpenSection((prev) => (prev === k ? null : k));
    };

    return (
        <main className="min-h-screen pt-[var(--nav-h)] bg-[#0a0b0d] text-white">
            <section className="px-6 lg:px-10 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
                    {/* LEFT: IMAGE + THUMBNAILS */}
                    <div>
                        <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02]">
                            <div className="aspect-[4/3] md:aspect-[16/10]">
                                <img
                                    src={heroImg}
                                    alt={`${product.brand} ${product.name}`}
                                    className="h-full w-full object-contain p-6"
                                />
                            </div>

                            {images.length > 1 ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveImg((i) => (i - 1 + images.length) % images.length)
                                        }
                                        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/15 bg-black/30 backdrop-blur grid place-items-center text-white/85 hover:text-white hover:border-white/30 transition duration-300 ease-in-out"
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
                                        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/15 bg-black/30 backdrop-blur grid place-items-center text-white/85 hover:text-white hover:border-white/30 transition duration-300 ease-in-out"
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
                        <div className="text-white/70 text-sm">{product.brand}</div>
                        <h1 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                            {product.name}
                        </h1>
                        <div className="mt-2 text-white/55 text-sm">Cod: {product.code}</div>
                        {product.subtitle ? (
                            <div className="mt-3 text-white/70">{product.subtitle}</div>
                        ) : null}

                        <p className="mt-6 text-white/70 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="mt-7 flex flex-wrap gap-2">
                            {product.solutions.map((s) => (
                                <span
                                    key={s}
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="rounded-2xl bg-white text-black px-5 py-3 font-semibold hover:opacity-90 transition duration-300 ease-in-out"
                                onClick={() => {
                                    // aici poți deschide un modal / lead form / quote page
                                    // ex: navigate("/contact?subject=" + encodeURIComponent(product.name))
                                    navigate("/contact");
                                }}
                            >
                                Cere ofertă
                            </button>

                            <button
                                type="button"
                                className="rounded-2xl border border-white/15 px-5 py-3 text-white/85 hover:text-white hover:border-white/30 transition duration-300 ease-in-out"
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
                                open={openSection === "specs"}
                                onToggle={() => toggle("specs")}
                            >
                                <div className="space-y-2 text-sm text-white/70">
                                    {product.specs.map((sp) => (
                                        <div key={sp.label} className="flex items-start justify-between gap-6">
                                            <div className="text-white/55">{sp.label}</div>
                                            <div className="text-right text-white/80">{sp.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </Accordion>

                            <Accordion
                                title="Dimensiuni"
                                open={openSection === "dimensions"}
                                onToggle={() => toggle("dimensions")}
                            >
                                {product.dimensions?.images?.length ? (
  <div className="flex flex-wrap justify-center gap-6">
    {product.dimensions.images.map((src, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setDimPreview(src)}
        className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/25 transition duration-300 ease-in-out"
        aria-label="Deschide preview dimensiuni"
      >
        <img
          src={src}
          alt="Dimensiuni"
          className="w-[110px] h-[110px] object-contain rounded-md"
        />
      </button>
    ))}
  </div>
) : (
  <div className="text-sm text-white/70">
    {product.dimensions?.text ?? "Nu există imagini pentru dimensiuni momentan."}
  </div>
)}

                            </Accordion>

                            <Accordion
                                title="Cataloage"
                                open={openSection === "catalog"}
                                onToggle={() => toggle("catalog")}
                            >
                                <DocList
                                    docs={(product.documents ?? []).filter((d) => d.type === "catalog" || d.type === "datasheet")}
                                />
                            </Accordion>

                            <Accordion
                                title="BIM & CAD"
                                open={openSection === "bimcad"}
                                onToggle={() => toggle("bimcad")}
                            >
                                <DocList
                                    docs={(product.documents ?? []).filter((d) => d.type === "bim" || d.type === "cad")}
                                />
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
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                                className="text-left rounded-3xl border border-white/10 hover:border-white/25 transition duration-300 ease-in-out overflow-hidden bg-white/[0.02]"
                            >
                                <div className="aspect-[16/10]">
                                    <img
                                        src={p.images?.[0]}
                                        alt={p.name}
                                        className="h-full w-full object-contain p-6"
                                    />
                                </div>
                                <div className="px-5 pb-5">
                                    <div className="text-white/75 text-sm">{p.brand}</div>
                                    <div className="mt-1 text-white font-semibold">{p.name}</div>
                                    <div className="mt-1 text-white/55 text-sm">{p.code}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {dimPreview ? (
  <div
    className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
    onClick={() => setDimPreview(null)}
    role="dialog"
    aria-modal="true"
  >
    <div
      className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-black/60 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setDimPreview(null)}
        className="absolute top-4 right-4 h-10 w-10 rounded-full border border-white/15 bg-black/40 backdrop-blur grid place-items-center text-white/85 hover:text-white hover:border-white/30 transition duration-300 ease-in-out"
        aria-label="Închide preview"
      >
        ✕
      </button>

      <div className="p-6">
        <img
          src={dimPreview}
          alt="Preview dimensiuni"
          className="w-full max-h-[70vh] object-contain rounded-2xl"
        />
      </div>
    </div>
  </div>
) : null}

        </main>
    );
}

/* ---------------- components ---------------- */

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
                <div className="text-white/70 text-xl leading-none">{open ? "−" : "+"}</div>
            </button>
            <div className="mt-4 h-px w-full bg-white/10" />
            {open ? <div className="mt-4">{children}</div> : null}
        </div>
    );
}

function DocList({ docs }: { docs: { label: string; url: string }[] }) {
    if (!docs.length) {
        return <div className="text-sm text-white/70">Nu există documente momentan.</div>;
    }
    return (
        <div className="space-y-2">
            {docs.map((d) => (
                <a
                    key={d.label}
                    href={d.url}
                    className="inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/80 hover:text-white hover:border-white/25 transition duration-300 ease-in-out"
                    target={d.url === "#" ? undefined : "_blank"}
                    rel={d.url === "#" ? undefined : "noreferrer"}
                >
                    <span>{d.label}</span>
                    <span className="text-white/50">↗</span>
                </a>
            ))}
        </div>
    );
}
