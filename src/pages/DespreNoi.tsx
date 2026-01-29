import Img1 from "../assets/P3.webp";
import Img2 from "../assets/P2.webp";
import Img3 from "../assets/P1.webp";
import Img4 from "../assets/P4.webp";
import Img5 from "../assets/P7.webp";
import { Lightbulb } from "lucide-react";

export default function DespreNoi() {
  return (
    <main className="w-full">
            <section
  className="relative w-screen overflow-hidden text-white"
  style={{ height: "100vh" }}
>
  {/* ===== DESKTOP (text + video diagonal) ===== */}
  <div className="hidden md:flex h-full">

    <div className="absolute right-0 top-0 w-[70vw] h-full overflow-hidden z-[-30]">
      
        <img src={Img5} alt="" className="absolute right-0 top-0 w-full h-full object-cover z-[-30]" style={{
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
        }}/>

    </div>

    {/* TEXT & BUTTONS */}
    <div className="relative z-10 flex h-full ml-[4vw] px-6 items-center">
      <div
        className="animate-[slide-in-left_2s_cubic-bezier(0.16,1,0.3,1)_both] space-y-6 max-w-lg"
        style={{ animationDelay: "150ms" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Lightbulb className="h-5 w-5 text-primary-500" strokeWidth={2} /> Despre Noi
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight w-[28vw]">
          Custom <br /> is our custom
        </h1>

        <p className="text-white/70 w-[28vw] text-md">
          Transform your space with our premium lighting solutions that combine elegant design with superior functionality for every environment.
        </p>

      </div>
    </div>
  </div>

  {/* ===== MOBILE (text 50vh + video card 50vh) ===== */}
  <div className="flex flex-col md:hidden h-full">
    {/* TEXT (50vh) */}
    <div className="flex flex-col justify-center items-center h-[50vh] px-6 text-center gap-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
        <Lightbulb className="h-5 w-5 text-primary-500" strokeWidth={2} /> Professional Lightning
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight">
        Exceptional <br /> Lighting Solutions
      </h1>

      <p className="text-white/70 text-sm max-w-md">
        Transform your space with our premium lighting solutions that combine elegant design with superior functionality for every environment.
      </p>

      <div className="flex gap-3 mt-2">
        <button className="rounded-xl bg-primary text-ink px-4 py-2 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-sm">
          Start your project
        </button>
        <button className="rounded-xl bg-secondary text-ink px-4 py-2 font-semibold shadow inline-flex items-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-sm">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch demo
        </button>
      </div>
    </div>

    {/* VIDEO (50vh) */}
    <div className="w-full h-[50vh] px-6 pb-6">
      <div className="w-full h-full rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl overflow-hidden">
               <img src={Img5} alt="" className="absolute right-0 top-0 w-full h-full object-cover z-[-30]"/>
      </div>
    </div>
  </div>
</section>
      <section className="mx-auto max-w-7xl px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT – TEXT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-5xl lg:text-6xl font-semibold tracking-tight">
              Selecție
            </h1>

            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
              Discuții preliminare foarte detaliate despre proiectul de arhitectură
              sau amenajare interioară, cu beneficiarul și arhitectul sau designerul
              de interior, acolo unde e cazul. Această etapă poate dura zile sau chiar
              săptămâni întregi, deoarece sunt sute de detalii de discutat: câtă lumină
              este necesară pentru fiecare zonă în parte? Ce tip de soluții de iluminat
              se potrivesc cel mai bine? Unde punem transformatorul? Și multe altele.
            </p>
          </div>

          {/* RIGHT – IMAGINI ZIG-ZAG */}
          <div className="flex justify-end">
  <div
    className="
      grid gap-6
      grid-cols-2
      grid-rows-2
      w-[520px] h-[520px]
    "
  >
    {/* POZA MARE (ocupă 2 rânduri) */}
    <div className="col-start-2 row-span-2 rounded-3xl overflow-hidden">
      <img src={Img1} alt="" className="w-full h-full object-cover" />
    </div>

    {/* POZA MICĂ SUS STÂNGA */}
    <div className="col-start-1 row-start-1 rounded-2xl overflow-hidden">
      <img src={Img3} alt="" className="w-full h-full object-cover" />
    </div>

    {/* POZA MEDIE JOS STÂNGA */}
    <div className="col-start-1 row-start-2 rounded-2xl overflow-hidden">
      <img src={Img2} alt="" className="w-full h-full object-cover" />
    </div>
  </div>
</div>
        </div>
      </section>
      {/* SECTION 2 */}
<section className="mx-auto max-w-7xl px-8 py-32">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    {/* LEFT – IMAGINE MARE */}
    <div className="flex justify-start">
      <div className="w-full max-w-[520px] h-[520px] rounded-3xl overflow-hidden">
        <img
          src={Img4}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* RIGHT – TEXT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-white text-5xl lg:text-6xl font-semibold tracking-tight">
        Concept
      </h2>

      <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
        În această etapă definim conceptul de iluminat și atmosfera dorită, ținând
        cont de funcționalitate, arhitectură și identitatea spațiului. Alegem
        corpurile de iluminat, temperaturile de culoare și scenariile de lumină
        potrivite fiecărei zone, astfel încât rezultatul final să fie coerent,
        eficient și estetic.
      </p>
    </div>

  </div>
</section>

{/* SECTION 3 */}
<section className="mx-auto max-w-7xl px-8 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    {/* LEFT – TEXT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-white text-5xl lg:text-6xl font-semibold tracking-tight">
        Implementare
      </h2>

      <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
        După stabilirea conceptului, urmează etapa de implementare, în care soluțiile
        de iluminat sunt puse în practică cu atenție la detalii și respectarea
        specificațiilor tehnice. Coordonăm echipele implicate și ne asigurăm că fiecare
        element este montat corect, astfel încât rezultatul final să respecte
        întocmai viziunea inițială.
      </p>
    </div>

    {/* RIGHT – IMAGINE MARE */}
    <div className="flex justify-end">
      <div className="w-full max-w-[520px] h-[520px] rounded-3xl overflow-hidden">
        <img
          src={Img5}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  </div>
</section>


    </main>
  );
}
