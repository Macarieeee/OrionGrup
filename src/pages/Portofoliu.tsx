import { useEffect, useMemo, useState } from "react";
import P1 from "../assets/P1.webp";
import P2 from "../assets/IasiOutdoor.jpeg";
import P3 from "../assets/MuzeuIzvorulRece11.jpeg";
import P4 from "../assets/TheNorthFace5.jpeg";
import P5 from "../assets/ApartamentRezidential5.jpeg";
import P6 from "../assets/BirouUnirii4.jpeg";
import P7 from "../assets/CityGate1.jpeg";
import P8 from "../assets/Portfolio2.webp";
import { useNavigate } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  numberLabel: string;
  slug: string;
  categoryId: string;
};

type Category = {
  id: string;
  name: string;
};

const ALL_ID = "toate";
const VISIBLE_COUNT = 4;

const categories: Category[] = [
  { id: ALL_ID, name: "Toate categoriile" },
  { id: "casa-vacanta-lac", name: "Iluminat Arhitectural" },
  { id: "casa-vacanta-iasi", name: "Iluminat Decorativ" },
  { id: "casa-vacanta", name: "Iluminat Exterior" },
  { id: "snagov-lac", name: "Materiale Electrice" },
  { id: "snagov", name: "Oglinzi & Decoratiuni" },
  { id: "casa-vacanta-2", name: "Profile + Banda LED" },
];

const allProjects: Project[] = [
  { id: "p1", title: "Proiectele Orion Grup", description: "Lucrăm cu o gamă largă de clienți, de la proprietari de locuințe la corporații mari și suntem capabili să oferim soluții de iluminat personalizate pentru orice proiect.", imageUrl: P1, numberLabel: "01", slug: "/proiect1", categoryId: "casa-vacanta-lac" },
  { id: "p2", title: "Clădiri & Fațade", description: "Punem în valoare arhitectura prin scenarii de lumină gândite pe volum, textură și materiale. Accent pe eficiență, uniformitate și control inteligent.", imageUrl: P2, numberLabel: "02", slug: "/proiect2", categoryId: "casa-vacanta-iasi" },
  { id: "p3", title: "Interioare Premium", description: "Iluminat decorativ și funcțional pentru spații premium: temperatură de culoare corectă, CRI ridicat și integrare discretă în design.", imageUrl: P3, numberLabel: "03", slug: "/proiect3", categoryId: "casa-vacanta" },
  { id: "p4", title: "Industrial & Logistică", description: "Soluții robuste pentru hale și depozite: optimizare consum, uniformitate pe zone de lucru, mentenanță simplificată și standarde de siguranță.", imageUrl: P4, numberLabel: "04", slug: "/proiect4", categoryId: "snagov-lac" },
  { id: "p5", title: "Retail & Showroom", description: "Lumină care vinde: accent pe produse, contrast controlat și scene adaptate în funcție de sezon, colecții sau zone de interes.", imageUrl: P5, numberLabel: "05", slug: "/proiect5", categoryId: "snagov" },
  { id: "p6", title: "Spații Exterioare", description: "Iluminat exterior pentru grădini, alei și zone pietonale: confort vizual, durabilitate și protecție la intemperii (IP corespunzător).", imageUrl: P6, numberLabel: "06", slug: "/proiect6", categoryId: "casa-vacanta-2" },
  { id: "p7", title: "Hotel & HoReCa", description: "Atmosferă și experiență: scenarii calde, zone de accent, dimming, control pe ore și integrare cu ambientul.", imageUrl: P7, numberLabel: "07", slug: "/proiect7", categoryId: "sinaia" },
  { id: "p8", title: "Office & Corporate", description: "Productivitate și confort: lumină neutră, anti-glare, zonare inteligentă și control în funcție de prezență / lumină naturală.", imageUrl: P8, numberLabel: "08", slug: "/proiect8", categoryId: "casa-vacanta-lac" },
];

export default function Portofoliu() {
  const navigate = useNavigate();

  const [selectedCategoryId, setSelectedCategoryId] = useState(ALL_ID);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(allProjects[0].id);
  const [animKey, setAnimKey] = useState(0);
  const [dir] = useState<"next" | "prev">("next");

  const filteredProjects = useMemo(() => {
    if (selectedCategoryId === ALL_ID) return allProjects;
    return allProjects.filter((p) => p.categoryId === selectedCategoryId);
  }, [selectedCategoryId]);

  const projectsToShow = filteredProjects.length > 0 ? filteredProjects : allProjects;

  useEffect(() => {
    setStartIndex(0);
    setSelectedId(projectsToShow[0]?.id ?? allProjects[0].id);
  }, [selectedCategoryId]);

  const visibleProjects = useMemo(() => {
    return Array.from(
      { length: Math.min(VISIBLE_COUNT, projectsToShow.length) },
      (_, i) => projectsToShow[(startIndex + i) % projectsToShow.length],
    );
  }, [projectsToShow, startIndex]);

  const selected =
    projectsToShow.find((p) => p.id === selectedId) ?? projectsToShow[0] ?? allProjects[0];

  const goNext = () => {
    setStartIndex((prev) => {
      const nextStart = (prev + VISIBLE_COUNT) % projectsToShow.length;
      setSelectedId(projectsToShow[nextStart].id);
      return nextStart;
    });
    setAnimKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen text-white pt-[var(--nav-h)] md:pt-0">

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:flex h-screen">

        {/* LEFT — black diagonal backdrop */}
        <div
          className="absolute left-0 top-0 h-full bg-[#0a0b0d] z-10"
          style={{
            width: "38vw",
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
          }}
        />

        {/* LEFT — categories on top of backdrop, same clip so white bar is cut diagonally */}
        <aside
          className="absolute left-0 top-0 h-full z-20 flex flex-col justify-center px-0 py-14"
          style={{
            width: "38vw",
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
          }}
        >
          <div
            className="animate-[slide-in-left_1.2s_cubic-bezier(0.16,1,0.3,1)_both] w-full"
            style={{ animationDelay: "150ms" }}
          >
            {/* Section label */}
            <p className="text-white/40 text-xs font-medium tracking-[0.25em] uppercase mb-6 px-10 lg:px-14">
              Portofoliu
            </p>

            {/* Category list — same button style as original category panel */}
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

        {/* RIGHT — full width behind diagonal, original slice panel untouched */}
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
                    if (p.slug) navigate(p.slug);
                  }}
                  className={[
                    "group relative h-full outline-none",
                    "transition-all duration-500 ease-in-out",
                    "flex-[1_1_0%] hover:flex-[3_1_0%]",
                    isActive ? "flex-[3_1_0%]" : "",
                  ].join(" ")}
                >
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url(${p.imageUrl})` }}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />

                  {/* Bottom number */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 select-none">
                    <span className="text-white/85 text-[56px] lg:text-[72px] font-light tracking-widest">
                      {p.numberLabel}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="absolute top-0 right-0 h-full w-px bg-white/10" />
                </button>
              );
            })}
          </div>

          {/* Next arrow */}
          <button
            type="button"
            onClick={goNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 grid place-items-center z-30
               h-14 w-14 rounded-full bg-white/10 hover:bg-white/15
               border border-white/15 backdrop-blur
               transition duration-300 ease-in-out"
            aria-label="Următoarele proiecte"
            title="Următoarele"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="opacity-90">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </section>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden px-5 py-8">
        {/* Category chips */}
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
              onClick={() => setSelectedId(p.id)}
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
          className="mt-6 w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15
                     transition duration-300 ease-in-out"
        >
          Următoarele
        </button>
      </div>
    </div>
  );
}
