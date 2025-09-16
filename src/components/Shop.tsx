/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------
   Util: hook simplu pentru "in viewport"
--------------------------------------------------- */
function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit & { once?: boolean } = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
    once: true,
  }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          if ((options as any).once !== false) io.unobserve(e.target);
        } else if ((options as any).once === false) {
          setInView(false);
        }
      });
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [options.root, options.threshold, options.rootMargin, (options as any).once]);

  return { ref, inView } as const;
}

/* helper pt. stilul animației (cu delay) */
function animStyle(
  on: boolean,
  key: "fade-up" | "slide-in-right" | "pop",
  durMs: number,
  delayMs = 0
): React.CSSProperties {
  return on
    ? {
        animation: `${key} ${durMs}ms cubic-bezier(0.16,1,0.3,1) both`,
        animationDelay: `${delayMs}ms`,
      }
    : { opacity: 0, willChange: "transform, opacity" };
}

/* ---------------------------------------------------
   Tip produs + demo data
--------------------------------------------------- */
type Product = {
  id: string;
  name: string;
  description: string;
  image?: string;
};

/* imagine albă 800x600 (SVG data URI) */
const WHITE_IMG =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="white"/></svg>';

const products: Product[] = [
  { id: "1",  name: "Nova Pendant",     description: "Suspensie elegantă pentru dining." },
  { id: "2",  name: "Halo Wall Sconce", description: "Aplica de perete cu lumină difuză." },
  { id: "3",  name: "Arc Floor Lamp",   description: "Lampadar arcuit, lounge modern." },
  { id: "4",  name: "Orbit Ceiling",    description: "Plafonieră subțire, lumină uniformă." },
  { id: "5",  name: "Ray Track Light",  description: "Spoturi pe șină pentru accent." },
  { id: "6",  name: "Glow Desk Lamp",   description: "Lampă de birou cu braț flexibil." },
  { id: "7",  name: "Lumen Strip",      description: "Bandă LED arhitecturală." },
  { id: "8",  name: "Sphere Table",     description: "Lampă ambientală cu sticlă opal." },
  { id: "9",  name: "Beam Spot",        description: "Spot încastrat, fascicul precis." },
  { id: "10", name: "Prism Chandelier", description: "Candelabru minimalist." },
];

/* ---------------------------------------------------
   Shop (cu animatii on-viewport)
--------------------------------------------------- */
export default function Shop() {
  // trigger pentru header
  const { ref: headerRef, inView: headerIn } = useInView<HTMLDivElement>();
  // trigger pentru carusel (toate cardurile se animă după el, cu stagger)
  const { ref: railRef, inView: railIn } = useInView<HTMLDivElement>({
    threshold: 0.2,
  });
  // trigger pentru CTA
  const { ref: ctaRef, inView: ctaIn } = useInView<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section className="w-full bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <header ref={headerRef} className="mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={animStyle(headerIn, "fade-up", 2800, 40)}
          >
            Our Shop
          </h2>
          <p
            className="mt-3 max-w-2xl text-subtle"
            style={animStyle(headerIn, "fade-up", 2800, 120)}
          >
            Hand-picked lighting that blends elegant design with everyday functionality.
          </p>
        </header>

        {/* Carusel */}
        <div ref={railRef} style={animStyle(railIn, "slide-in-right", 2800, 160)}>
          <ProductCarousel items={products} railIn={railIn} />
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mt-10 flex justify-center">
          <a
            href="/shop"
            className="rounded-xl bg-secondary text-ink px-5 py-3 font-semibold border border-white/10 transition hover:bg-secondary/90"
            style={animStyle(ctaIn, "pop", 2800, 240)}
          >
            Vezi întreaga listă
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   Carousel cu săgeți ÎN AFARA cardurilor + stagger
--------------------------------------------------- */
function ProductCarousel({
  items,
  railIn,
}: {
  items: Product[];
  railIn: boolean;
}) {
  const scroller = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = () => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 1;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max);
  };

  useEffect(() => {
    updateEnds();
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => requestAnimationFrame(updateEnds);
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateEnds, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateEnds);
    };
  }, []);

  const scrollByPage = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-visible ">
      {/* fade edges sub săgeți */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-0" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-0" />

      {/* Săgeți în afară + fade-up când intră caruselul */}
      <button
  aria-label="Scroll left"
  onClick={() => scrollByPage(-1)}
  disabled={atStart}
  className={[
    "grid absolute top-1/2 left-0 -translate-y-1/2",
    // pe mobil: doar jumătate afară; pe desktop: complet afară
    "-translate-x-1/2 md:-translate-x-full",
    "h-10 w-10 place-items-center rounded-full z-20",
    "border border-white/15 bg-white/10 text-white/80 backdrop-blur transition",
    atStart ? "opacity-40 pointer-events-none" : "hover:bg-white/15",
  ].join(" ")}
  style={animStyle(railIn, "fade-up", 2800, 220)}
>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</button>

{/* Dreapta */}
<button
  aria-label="Scroll right"
  onClick={() => scrollByPage(1)}
  disabled={atEnd}
  className={[
    "grid absolute top-1/2 right-0 -translate-y-1/2",
    "translate-x-1/2 md:translate-x-full", // mobil: jumătate afară, desktop: complet
    "h-10 w-10 place-items-center rounded-full z-20",
    "border border-white/15 bg-white/10 text-white/80 backdrop-blur transition",
    atEnd ? "opacity-40 pointer-events-none" : "hover:bg-white/15",
  ].join(" ")}
  style={animStyle(railIn, "fade-up", 2800, 260)}
>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</button>

      {/* PISTA */}
      <ul
        ref={scroller}
        role="list"
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-px-6 gap-6 px-1"
      >
        {items.map((p, i) => (
          <li
            key={p.id}
            className="snap-start shrink-0 basis-[80%] sm:basis-[60%] md:basis-[calc(33.333%-16px)] lg:basis-[calc(25%-18px)]"
          >
            <Card product={p} index={i} railIn={railIn} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------------------------------------
   Card glass + stagger (pornește când railIn = true)
--------------------------------------------------- */
function Card({
  product,
  index,
  railIn,
}: {
  product: Product;
  index: number;
  railIn: boolean;
}) {
  const src = product.image || WHITE_IMG;
  const delay = 180 + index * 60; // 60ms între carduri

  return (
    <article
      className="group rounded-2xl border border-white/12 bg-white/6 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,.35)] overflow-hidden"
      style={animStyle(railIn, "fade-up", 2800, delay)}
    >
      <figure className="relative aspect-[4/3] bg-white">
        <img src={src} alt={product.name} loading="lazy" className="h-full w-full object-cover" />
      </figure>
      <div className="p-4">
        <h3 className="font-semibold text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted line-clamp-2">{product.description}</p>
      </div>
    </article>
  );
}
