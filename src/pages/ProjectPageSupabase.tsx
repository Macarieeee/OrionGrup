import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Landmark } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { useLanguage } from "../language/LanguageContext";

const NAVBAR_H = 96;

type PortfolioProjectDb = {
  id: string;
  slug: string;
  title: string;
  title_en: string | null;
  badge_label: string | null;
  badge_label_en: string | null;
  main_description: string | null;
  main_description_en: string | null;
  main_images: string[] | null;
  site_title: string | null;
  site_title_en: string | null;
  site_description: string | null;
  site_description_en: string | null;
  site_images: string[] | null;
};

type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  badgeLabel: string;
  mainDescription: string;
  mainImages: string[];
  siteTitle: string;
  siteDescription: string;
  siteImages: string[];
};

function safeStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    : [];
}

function pickLocalized(language: "ro" | "en", roValue: string | null, enValue: string | null, fallback = "") {
  return language === "en" && enValue?.trim() ? enValue : roValue ?? fallback;
}

function mapProject(row: PortfolioProjectDb, language: "ro" | "en"): PortfolioProject {
  return {
    id: row.id,
    slug: row.slug,
    title: pickLocalized(language, row.title, row.title_en),
    badgeLabel: pickLocalized(language, row.badge_label, row.badge_label_en, "Proiect Orion Grup"),
    mainDescription: pickLocalized(language, row.main_description, row.main_description_en),
    mainImages: safeStringArray(row.main_images),
    siteTitle: pickLocalized(language, row.site_title, row.site_title_en, "De pe șantier la realitate"),
    siteDescription: pickLocalized(language, row.site_description, row.site_description_en),
    siteImages: safeStringArray(row.site_images),
  };
}

export default function ProjectPageSupabase() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    async function loadProject() {
      setLoading(true);
      setError(null);
      setProject(null);

      if (!slug) {
        setError("Lipsește slug-ul proiectului din URL.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("portfolio_projects")
        .select(
          "id,slug,title,title_en,badge_label,badge_label_en,main_description,main_description_en,main_images,site_title,site_title_en,site_description,site_description_en,site_images"
        )
        .eq("slug", slug)
        .eq("is_active", true)
        .maybeSingle();

      if (!alive) return;

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      if (!data) {
        setError("Proiectul nu a fost găsit.");
        setLoading(false);
        return;
      }

      setProject(mapProject(data as PortfolioProjectDb, language));
      setLoading(false);
    }

    loadProject();

    return () => {
      alive = false;
    };
  }, [slug, language]);

  const mainImages = useMemo(() => project?.mainImages.slice(0, 4) ?? [], [project]);
  const siteImages = useMemo(() => project?.siteImages ?? [], [project]);

  if (loading) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] grid place-items-center text-white">
        <div className="text-sm text-white/70">Se încarcă proiectul...</div>
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] grid place-items-center text-white px-6">
        <div className="text-center">
          <div className="text-xl font-semibold">{error ?? "Proiectul nu a fost găsit."}</div>
          <button
            type="button"
            onClick={() => navigate("/portofoliu")}
            className="mt-5 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Înapoi la portofoliu
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* SECTIUNEA PRINCIPALA */}
      <main className="w-full lg:h-screen">
        <section className="mx-auto w-full max-w-6xl px-6 lg:h-screen">
          <div className="flex min-h-screen flex-col lg:h-screen" style={{ paddingTop: NAVBAR_H }}>
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                <Landmark className="h-5 w-5 text-primary-500" strokeWidth={2} />
                {project.badgeLabel}
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                {project.title}
              </h1>

              {project.mainDescription ? (
                <p className="mt-4 max-w-2xl text-white/70">
                  {project.mainDescription}
                </p>
              ) : null}
            </div>

            <div className="mt-10 flex-1 lg:min-h-0">
              {mainImages.length ? (
                <>
                  {/* Pe telefon și tabletă folosim același tip de slider ca în ultima secțiune */}
                  <div className="lg:hidden">
                    <ProjectImageSlider images={mainImages} compact />
                  </div>

                  {/* Pe desktop păstrăm efectul original cu imagini expandabile la hover */}
                  <div className="hidden h-full overflow-hidden rounded-2xl border border-white/10 lg:block">
                    <div className="flex h-full">
                      {mainImages.map((src, index) => (
                        <button
                          key={`${src}-${index}`}
                          type="button"
                          className={[
                            "group relative h-full outline-none",
                            "flex-[1_1_0%] hover:flex-[4_1_0%]",
                            "transition-[flex] duration-700 ease-in-out",
                            "min-w-0",
                          ].join(" ")}
                        >
                          <div
                            className="absolute inset-0 bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${src})`,
                              backgroundSize: "auto 100%",
                            }}
                          />
                          <div className="absolute top-0 right-0 h-full w-px bg-white/10" />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="grid min-h-[420px] place-items-center rounded-2xl border border-white/10 text-white/50 lg:h-full">
                  Nu există imagini principale pentru acest proiect.
                </div>
              )}
            </div>

            <div className="h-6" />
          </div>
        </section>
      </main>

      {/* DE PE SANTIER LA REALITATE */}
      <section className="mx-auto w-full max-w-6xl px-6" style={{ minHeight: "100vh" }}>
        <div className="flex min-h-screen flex-col" style={{ paddingTop: NAVBAR_H }}>
          <div className="flex flex-col items-center text-center">
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white">
              {project.siteTitle}
            </h2>

            {project.siteDescription ? (
              <p className="mt-4 max-w-2xl text-white/70">
                {project.siteDescription}
              </p>
            ) : null}
          </div>

          <div className="mt-10 flex-1">
            {siteImages.length ? (
              <ProjectImageSlider images={siteImages} />
            ) : (
              <div className="grid min-h-[560px] place-items-center rounded-2xl border border-white/10 text-white/50">
                Nu există imagini pentru secțiunea de șantier.
              </div>
            )}
          </div>

          <div className="h-6" />
        </div>
      </section>
    </>
  );
}

function ProjectImageSlider({ images, compact = false }: { images: string[]; compact?: boolean }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateState = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth - 1;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= maxScroll);

    const children = Array.from(el.children) as HTMLElement[];
    if (!children.length) return;

    const center = el.scrollLeft + el.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(center - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    updateState();

    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => requestAnimationFrame(updateState);
    const onResize = () => requestAnimationFrame(updateState);

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [images.length]);

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const safeIndex = Math.max(0, Math.min(index, images.length - 1));
    const child = el.children[safeIndex] as HTMLElement | undefined;

    if (!child) return;

    el.scrollTo({
      left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2,
      behavior: "smooth",
    });

    setActiveIndex(safeIndex);
  };

  const goPrev = () => scrollToIndex(activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex + 1);

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
    if (!el || !dragState.current.isDown) return;

    e.preventDefault();

    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.2;

    if (Math.abs(walk) > 6) {
      dragState.current.moved = true;
    }

    el.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const stopDrag = () => {
    const el = scrollerRef.current;
    if (!el) return;

    dragState.current.isDown = false;
    el.classList.remove("cursor-grabbing");
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className={[
          "no-scrollbar flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth rounded-2xl border border-white/10 p-4 select-none",
          compact ? "min-h-[430px] md:min-h-[520px]" : "min-h-[560px]",
        ].join(" ")}
      >
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={[
              "relative w-[82vw] max-w-[980px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:w-[72vw] lg:w-[760px] xl:w-[860px]",
              compact ? "h-[390px] md:h-[480px]" : "h-[520px]",
            ].join(" ")}
          >
            <img
              src={src}
              alt={`Imagine proiect ${index + 1}`}
              draggable={false}
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={goPrev}
            disabled={atStart}
            className={[
              "absolute left-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition duration-300",
              atStart ? "pointer-events-none opacity-30" : "hover:bg-white hover:text-black",
            ].join(" ")}
            aria-label="Imaginea anterioară"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={atEnd}
            className={[
              "absolute right-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition duration-300",
              atEnd ? "pointer-events-none opacity-30" : "hover:bg-white hover:text-black",
            ].join(" ")}
            aria-label="Imaginea următoare"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={[
                  "h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/30 hover:bg-white/60",
                ].join(" ")}
                aria-label={`Mergi la imaginea ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
