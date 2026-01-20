import { useMemo, useState } from "react";
import P1 from "../assets/P1.webp";
import P2 from "../assets/P2.webp";
import P3 from "../assets/P3.webp";
import P4 from "../assets/P4.webp";
import P5 from "../assets/P5.webp";
import P6 from "../assets/P6.webp";
import P7 from "../assets/P7.webp";
import P8 from "../assets/Portfolio2.webp";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  numberLabel: string; // "01", "02", ...
};

const VISIBLE_COUNT = 4;

export default function App() {
  const projects: Project[] = useMemo(
    () => [
      {
        id: "p1",
        title: "Proiectele Orion Grup",
        description:
          "Lucrăm cu o gamă largă de clienți, de la proprietari de locuințe la corporații mari și suntem capabili să oferim soluții de iluminat personalizate pentru orice proiect. Echipa noastră de experți are cunoștințe extinse în domeniul iluminatului, iar noi cercetăm și ne menținem în permanență la curent cu cele mai recente tendințe și tehnologii.",
        imageUrl: P1,
        numberLabel: "01",
      },
      {
        id: "p2",
        title: "Clădiri & Fațade",
        description:
          "Punem în valoare arhitectura prin scenarii de lumină gândite pe volum, textură și materiale. Accent pe eficiență, uniformitate și control inteligent.",
        imageUrl:
          P2,
        numberLabel: "02",
      },
      {
        id: "p3",
        title: "Interioare Premium",
        description:
          "Iluminat decorativ și funcțional pentru spații premium: temperatură de culoare corectă, CRI ridicat și integrare discretă în design.",
        imageUrl:
          P3,
        numberLabel: "03",
      },
      {
        id: "p4",
        title: "Industrial & Logistică",
        description:
          "Soluții robuste pentru hale și depozite: optimizare consum, uniformitate pe zone de lucru, mentenanță simplificată și standarde de siguranță.",
        imageUrl:
          P4,
        numberLabel: "04",
      },
      {
        id: "p5",
        title: "Retail & Showroom",
        description:
          "Lumină care vinde: accent pe produse, contrast controlat și scene adaptate în funcție de sezon, colecții sau zone de interes.",
        imageUrl:
          P5,
        numberLabel: "05",
      },
      {
        id: "p6",
        title: "Spații Exterioare",
        description:
          "Iluminat exterior pentru grădini, alei și zone pietonale: confort vizual, durabilitate și protecție la intemperii (IP corespunzător).",
        imageUrl:
          P6,
        numberLabel: "06",
      },
      {
        id: "p7",
        title: "Hotel & HoReCa",
        description:
          "Atmosferă și experiență: scenarii calde, zone de accent, dimming, control pe ore și integrare cu ambientul.",
        imageUrl:
          P7,
        numberLabel: "07",
      },
      {
        id: "p8",
        title: "Office & Corporate",
        description:
          "Productivitate și confort: lumină neutră, anti-glare, zonare inteligentă și control în funcție de prezență / lumină naturală.",
        imageUrl:
          P8,
        numberLabel: "08",
      },
    ],
    []
  );

  const [startIndex, setStartIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const maxStart = Math.max(0, projects.length - VISIBLE_COUNT);
const visibleProjects = useMemo(() => {
  return Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    return projects[(startIndex + i) % projects.length];
  });
}, [projects, startIndex]);
  const selected = projects.find((p) => p.id === selectedId) ?? projects[0];

  const [animKey, setAnimKey] = useState(0);
const [dir, setDir] = useState<"next" | "prev">("next");
const goNext = () => {
  setDir("next");
  setStartIndex((prev) => {
    const nextStart = (prev + VISIBLE_COUNT) % projects.length;
    setSelectedId(projects[nextStart].id); // selectează prima din “pagina” nouă
    return nextStart;
  });
  setAnimKey((k) => k + 1);
};

  return (
    <div className="min-h-screen text-white pt-[var(--nav-h)] md:pt-0">
      {/* Desktop / Large layout */}
      <div className="hidden md:flex h-screen">
        {/* LEFT TEXT PANEL */}
        <aside className="w-[32%] lg:w-[28%] px-10 lg:px-14 py-14 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-medium tracking-wide">
            {selected.title}
          </h1>

          <div className="mt-8 max-w-md leading-7 text-white/80 text-[15px] lg:text-[16px]">
            {selected.description}
          </div>

          <div className="mt-10 h-px w-24 bg-white/15" />
          <div className="mt-4 text-white/50 text-sm">
            {startIndex + 1}–{Math.min(startIndex + VISIBLE_COUNT, projects.length)} din{" "}
            {projects.length}
          </div>
        </aside>

        {/* RIGHT PANEL (SLICES) */}
        <section className="relative flex-1 overflow-hidden">
  {/* DOAR POZELE se animează */}
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
          onClick={() => setSelectedId(p.id)}
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

  {/* SĂGEATA NU se animează */}
  <button
    type="button"
    onClick={goNext}
    className="absolute right-6 top-1/2 -translate-y-1/2 grid place-items-center
               h-14 w-14 rounded-full bg-white/10 hover:bg-white/15
               border border-white/15 backdrop-blur
               transition duration-300 ease-in-out"
    aria-label="Următoarele proiecte"
    title="Următoarele"
  >
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      className="opacity-90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
</section>

      </div>

      {/* Mobile fallback: stack */}
      <div className="md:hidden px-5 py-8">
        <h1 className="text-2xl font-medium">{selected.title}</h1>
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
