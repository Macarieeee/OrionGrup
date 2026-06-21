import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useLanguage } from "../language/LanguageContext";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  numberLabel: string;
  slug: string;
  categoryId: string | null;
};

type Category = {
  id: string;
  name: string;
};

type PortfolioProjectDb = {
  id: string;
  slug: string;
  title: string;
  title_en: string | null;
  portfolio_description: string | null;
  portfolio_description_en: string | null;
  cover_image: string | null;
  category_id: string | null;
  display_order: number | null;
  created_at?: string | null;
};

const ALL_ID = "toate";
const VISIBLE_COUNT = 4;

function numberLabel(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function Portofoliu() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [categories, setCategories] = useState<Category[]>([
    { id: ALL_ID, name: "Toate categoriile" },
  ]);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(ALL_ID);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string>("");
  const [animKey, setAnimKey] = useState(0);
  const [dir] = useState<"next" | "prev">("next");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    async function loadData() {
      setLoading(true);
      setLoadError(null);

      const [{ data: cats, error: catsErr }, { data: projects, error: projectsErr }] =
        await Promise.all([
          supabase
            .from("portfolio_categories")
            .select("id,name")
            .order("display_order", { ascending: true, nullsFirst: false })
            .order("name", { ascending: true }),
          supabase
            .from("portfolio_projects")
            .select("id,slug,title,title_en,portfolio_description,portfolio_description_en,cover_image,category_id,display_order,created_at")
            .eq("is_active", true)
            .order("display_order", { ascending: true, nullsFirst: false })
            .order("created_at", { ascending: true }),
        ]);
      if (!alive) return;

      if (catsErr) {
        setLoadError(catsErr.message);
        setLoading(false);
        return;
      }

      if (projectsErr) {
        setLoadError(projectsErr.message);
        setLoading(false);
        return;
      }

      const nextCategories: Category[] = [
        { id: ALL_ID, name: "Toate categoriile" },
        ...((cats ?? []) as Category[]),
      ];

      const nextProjects: Project[] = ((projects ?? []) as PortfolioProjectDb[]).map((p, index) => ({
        id: p.id,
        title: language === "en" && p.title_en ? p.title_en : p.title,
        description:
          language === "en" && p.portfolio_description_en
            ? p.portfolio_description_en
            : p.portfolio_description ?? "",
        imageUrl: p.cover_image ?? "",
        numberLabel: numberLabel(index),
        slug: p.slug,
        categoryId: p.category_id,
      }));

      setCategories(nextCategories);
      setAllProjects(nextProjects);
      setSelectedId(nextProjects[0]?.id ?? "");
      setLoading(false);
    }

    loadData();

    return () => {
      alive = false;
    };
  }, [language]);

  const filteredProjects = useMemo(() => {
    if (selectedCategoryId === ALL_ID) return allProjects;
    return allProjects.filter((p) => p.categoryId === selectedCategoryId);
  }, [allProjects, selectedCategoryId]);

  const projectsToShow = filteredProjects.length > 0 ? filteredProjects : allProjects;

  useEffect(() => {
    setStartIndex(0);
    setSelectedId(projectsToShow[0]?.id ?? "");
  }, [selectedCategoryId, projectsToShow.length]);

  const visibleProjects = useMemo(() => {
    if (!projectsToShow.length) return [];

    return Array.from(
      { length: Math.min(VISIBLE_COUNT, projectsToShow.length) },
      (_, i) => projectsToShow[(startIndex + i) % projectsToShow.length]
    );
  }, [projectsToShow, startIndex]);

  const selected =
    projectsToShow.find((p) => p.id === selectedId) ?? projectsToShow[0] ?? null;

  const goNext = () => {
    if (!projectsToShow.length) return;

    setStartIndex((prev) => {
      const nextStart = (prev + VISIBLE_COUNT) % projectsToShow.length;
      setSelectedId(projectsToShow[nextStart].id);
      return nextStart;
    });
    setAnimKey((k) => k + 1);
  };

  if (loading) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] grid place-items-center text-white">
        <div className="text-sm text-white/70">Se încarcă portofoliul...</div>
      </main>
    );
  }

  if (loadError) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] grid place-items-center text-white px-6">
        <div className="text-center text-red-400">Nu am putut încărca portofoliul: {loadError}</div>
      </main>
    );
  }

  if (!allProjects.length || !selected) {
    return (
      <main className="min-h-screen pt-[var(--nav-h)] grid place-items-center text-white px-6">
        <div className="text-center text-white/70">Nu există proiecte în portofoliu momentan.</div>
      </main>
    );
  }

  return (
    <div className="min-h-screen text-white pt-[var(--nav-h)] md:pt-0">
      {/* DESKTOP */}
      <div className="hidden md:flex h-screen">
        <div
          className="absolute left-0 top-0 h-full bg-[#0a0b0d] z-10"
          style={{ width: "38vw", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" }}
        />

        <aside
          className="absolute left-0 top-0 h-full z-20 flex flex-col justify-center px-0 py-14"
          style={{ width: "38vw", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" }}
        >
          <div
            className="animate-[slide-in-left_1.2s_cubic-bezier(0.16,1,0.3,1)_both] w-full"
            style={{ animationDelay: "150ms" }}
          >
            <p className="text-white/40 text-xs font-medium tracking-[0.25em] uppercase mb-6 px-10 lg:px-14">
              Portofoliu
            </p>

            <div className="w-full space-y-1">
              {categories.map((cat) => {
                const isSelected = cat.id === selectedCategoryId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategoryId(cat.id);
                      setAnimKey((k) => k + 1);
                    }}
                    className={[
                      "block w-full text-left px-10 lg:px-14 py-2.5",
                      "text-[15px] lg:text-[18px] font-semibold tracking-wide",
                      "transition duration-300 ease-in-out",
                      isSelected
                        ? "bg-white text-black"
                        : "bg-transparent text-white/85 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <section className="absolute inset-0 overflow-hidden left-[25vw] z-0">
          <div
            key={`imgs-${animKey}`}
            className={[
              "h-full flex will-change-transform",
              dir === "next"
                ? "animate-[imgsInRight_.45s_ease-in-out_both]"
                : "animate-[imgsInLeft_.45s_ease-in-out_both]",
            ].join(" ")}
          >
            {visibleProjects.map((p) => {
              const isActive = p.id === selectedId;

              return (
                <button
                  key={p.id}
                  type="button"
                  onMouseEnter={() => setSelectedId(p.id)}
                  onFocus={() => setSelectedId(p.id)}
                  onClick={() => {
                    setSelectedId(p.id);
                    navigate(`/portofoliu/${p.slug}`);
                  }}
                  className={[
                    "group relative h-full outline-none",
                    "transition-all duration-500 ease-in-out",
                    "flex-[1_1_0%] hover:flex-[3_1_0%]",
                    isActive ? "flex-[3_1_0%]" : "",
                  ].join(" ")}
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url(${p.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 select-none">
                    <span className="text-white/85 text-[56px] lg:text-[72px] font-light tracking-widest">
                      {p.numberLabel}
                    </span>
                  </div>
                  <div className="absolute top-0 right-0 h-full w-px bg-white/10" />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 grid place-items-center z-30 h-14 w-14 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur transition duration-300 ease-in-out"
            aria-label="Următoarele proiecte"
            title="Următoarele"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="opacity-90">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </section>
      </div>

      {/* MOBILE */}
      <div className="md:hidden px-5 py-8">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none -mx-5 px-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategoryId(cat.id);
                setAnimKey((k) => k + 1);
              }}
              className={[
                "whitespace-nowrap shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold border transition",
                cat.id === selectedCategoryId
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-white/70 border-white/15 hover:bg-white/10",
              ].join(" ")}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <h1 className="text-2xl font-medium mt-4">{selected.title}</h1>
        <p className="mt-4 text-white/80 leading-7">{selected.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {visibleProjects.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => navigate(`/portofoliu/${p.slug}`)}
              className="relative h-44 rounded-xl overflow-hidden border border-white/10"
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${p.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute bottom-3 left-3 text-white/90 text-lg font-light">
                {p.numberLabel}
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="mt-6 w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition duration-300 ease-in-out"
        >
          Următoarele
        </button>
      </div>
    </div>
  );
}
