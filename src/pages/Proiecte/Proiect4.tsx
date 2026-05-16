import { Landmark } from "lucide-react";
// import imaginile tale:
import Img1 from "../../assets/theNorthFace1.jpeg";
import Img2 from "../../assets/TheNorthFace2.jpeg";
import Img4 from "../../assets/TheNorthFace3.jpeg";
import Img3 from "../../assets/TheNorthFace4.jpeg";
import Img5 from "../../assets/TheNorthFace5.jpeg";
import Img6 from "../../assets/TheNorthFace6.jpeg";
import Img7 from "../../assets/TheNorthFace7.jpeg";
import Img8 from "../../assets/TheNorthFace8.jpeg";
import BeforeAfter from "../../components/BeforeAfter";
import BeforeImg from "../../assets/P1.webp";
import AfterImg from "../../assets/P4.webp";


const NAVBAR_H = 96; // ajustează: 80 / 88 / 96 în funcție de navbar-ul tău

export default function TheNorthFace() {
  const images = [
    { id: "i1", src: Img1},
    { id: "i2", src: Img2},
    { id: "i3", src: Img3},
    { id: "i4", src: Img4},
    { id: "i5", src: Img5},
    { id: "i6", src: Img6},
    { id: "i7", src: Img7},
    { id: "i8", src: Img8},
  ];

  return (
    <>
    <main
      className="w-full"
      style={{ height: `calc(100vh - ${0}px)` }}
    >
      {/* Wrapper 100vh fără scroll */}
      <section
        className="mx-auto w-full max-w-6xl px-6"
        style={{ height: `calc(100vh - ${0}px)` }}
      >
        <div
          className="flex flex-col"
          style={{ height: `calc(100vh - ${0}px)`, paddingTop: NAVBAR_H }}
        >
          {/* HEADER (centru) */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Landmark className="h-5 w-5 text-primary-500" strokeWidth={2} />
              Retail Lighting
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white">
              The North Face - AFI Cotroceni
            </h1>

            <p className="mt-4 max-w-2xl text-white/70">
              Un proiect de iluminat retail creat pentru a susține identitatea puternică a brandului The North Face, printr-o atmosferă modernă, tehnică și bine controlată. Lumina pune în valoare produsele, traseele de expunere și materialele folosite în amenajare, contribuind la o experiență vizuală clară, premium și orientată spre explorare.
            </p>
          </div>

          {/* SPAȚIUL RĂMAS: imagini hover-expand (fără scroll) */}
          <div className="mt-10 flex-1">
            <div className="h-full overflow-hidden rounded-2xl border border-white/10">
              <div className="flex h-full">
                {images.slice(0, 4).map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    className={[
                      "group relative h-full outline-none",
                      "flex-[1_1_0%] hover:flex-[4_1_0%]",
                      "transition-all duration-700 ease-in-out",
                      "min-w-0", // important pentru flex
                    ].join(" ")}
                  >
                    {/* background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${img.src})` }}
                    />

                    {/* overlay */}
                    {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" /> */}


                    {/* divider */}
                    <div className="absolute top-0 right-0 h-full w-px bg-white/10" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* (opțional) mic spațiu jos ca să respire, fără scroll */}
          <div className="h-6" />
        </div>
      </section>
    </main>
    <section
        className="mx-auto w-full max-w-6xl px-6 mt-6"
      >
        <div
          className="flex flex-col"
        >
          {/* HEADER (centru) */}
          <div className="flex flex-col items-center text-center">

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white">
              Transformarea Spațiului cu Iluminat
            </h1>

<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl text-left">
  {/* TEXT – stânga */}
  <p className="text-white/70 text-base leading-relaxed">
    Pentru The North Face - AFI Cotroceni, intervenția de iluminat a fost gândită ca o completare discretă a spațiului, nu ca un element dominant. Lumina direcționată evidențiază produsele expuse, conturează traseul vizitatorului și păstrează caracterul elegant al încăperilor, oferind în același timp claritate, profunzime și o experiență vizuală coerentă.
  </p>

  {/* BEFORE / AFTER – dreapta */}
  <BeforeAfter
    before={BeforeImg}
    after={AfterImg}
  />
</div>

          </div>
        </div>
          </section>
<section
        className="mx-auto w-full max-w-6xl px-6"
        style={{ height: `calc(100vh - ${0}px)` }}
      >
        <div
          className="flex flex-col"
          style={{ height: `calc(100vh - ${0}px)`, paddingTop: NAVBAR_H }}
        >
          {/* HEADER (centru) */}
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white">
              De pe santier la realitate
            </h1>

            <p className="mt-4 max-w-2xl text-white/70">
              Amenajarea a pornit de la un concept retail bine definit, în care fiecare zonă trebuia să fie clară, ușor de parcurs și coerentă vizual. Prin poziționarea atentă a corpurilor de iluminat, produsele au fost puse în valoare fără a încărca spațiul, iar elementele de brand, rafturile, zonele de prezentare și vitrina au primit o lumină adaptată rolului lor în experiența de cumpărare.
            </p>
          </div>

{/* SPAȚIUL RĂMAS: GRID 2 RÂNDURI FIXE */}
<div className="mt-10 flex-1">
  <div className="h-full overflow-hidden rounded-2xl border border-white/10">
    <div
      className="
        grid h-full gap-4 p-4
        grid-rows-2
        grid-flow-col
        auto-cols-fr
      "
    >
      {images.slice(4, 8).map((img) => (
        <div
          key={img.id}
          className="
            relative group overflow-hidden rounded-xl
            cursor-pointer
          "
        >
          {/* imagine */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${img.src})` }}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-500" />
        </div>
      ))}
    </div>
  </div>
</div>


          {/* (opțional) mic spațiu jos ca să respire, fără scroll */}
          <div className="h-6" />
        </div>
      </section>
    </>
  );
}
