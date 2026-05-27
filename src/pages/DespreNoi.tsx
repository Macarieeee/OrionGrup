import { useEffect, useState } from "react";
import Img1 from "../assets/About2.jpeg";
import Img2 from "../assets/About3.jpeg";
import Img3 from "../assets/About4.jpeg";
import Img5 from "../assets/About.jpeg";
import Img6 from "../assets/About6.jpeg";
import Img7 from "../assets/about7.jpeg";
import { Lightbulb, X } from "lucide-react";
import { motion } from "framer-motion";

const fromLeft = {
  hidden: {
    opacity: 0,
    x: -90,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fromRight = {
  hidden: {
    opacity: 0,
    x: 90,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const revealTransition = {
  duration: 2.3,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function DespreNoi() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="w-full">
      <section
        className="relative w-screen overflow-hidden text-white"
        style={{ height: "100vh" }}
      >
        {/* ===== DESKTOP ===== */}
        <div className="hidden md:flex h-full">
          <button
            type="button"
            onClick={() => setSelectedImage(Img5)}
            className="absolute right-0 top-0 w-[70vw] h-full overflow-hidden z-[-30] cursor-pointer"
            aria-label="Deschide imaginea"
          >
            <img
              src={Img5}
              alt=""
              className="absolute right-0 top-0 w-full h-full object-cover z-[-30] transition duration-700 hover:scale-[1.02]"
              style={{
                clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
              draggable={false}
            />
          </button>

          {/* TEXT & BUTTONS */}
          <div className="relative z-10 flex h-full ml-[4vw] px-6 items-center">
            <div
              className="animate-[slide-in-left_2s_cubic-bezier(0.16,1,0.3,1)_both] space-y-6 max-w-lg"
              style={{ animationDelay: "150ms" }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight w-[28vw]">
                Custom <br /> is our custom
              </h1>

              <p className="text-white/70 w-[28vw] text-md">
                Nu lăsăm atmosfera la voia întâmplării. De la primele schițe pe
                planșetă până la ultimul detaliu de montaj, orchestrăm fiecare
                accent, umbră și lumen. O fuziune între inginerie pură și
                rafinament estetic, calculată la milimetru pentru identitatea
                spațiului tău.
              </p>
            </div>
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="flex flex-col md:hidden h-full">
          {/* TEXT */}
          <div className="flex flex-col justify-center items-center h-[50vh] px-6 text-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Lightbulb
                className="h-5 w-5 text-primary-500"
                strokeWidth={2}
              />
              Professional Lightning
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight">
              Exceptional <br /> Lighting Solutions
            </h1>

            <p className="text-white/70 text-sm max-w-md">
              Transform your space with our premium lighting solutions that
              combine elegant design with superior functionality for every
              environment.
            </p>

            <div className="flex gap-3 mt-2">
              <button className="rounded-xl bg-primary text-ink px-4 py-2 font-semibold shadow-lg hover:bg-primary/90 active:translate-y-px transition text-sm">
                Start your project
              </button>

              <button className="rounded-xl bg-secondary text-ink px-4 py-2 font-semibold shadow inline-flex items-center gap-2 hover:bg-secondary/90 active:translate-y-px transition text-sm">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch demo
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full h-[50vh] px-6 pb-6">
            <button
              type="button"
              onClick={() => setSelectedImage(Img5)}
              className="relative w-full h-full rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl overflow-hidden cursor-pointer"
              aria-label="Deschide imaginea"
            >
              <img
                src={Img5}
                alt=""
                className="absolute right-0 top-0 w-full h-full object-cover transition duration-700 hover:scale-[1.03]"
                draggable={false}
              />
            </button>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="mx-auto max-w-7xl px-8 pt-32 pb-10 overflow-hidden">
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={revealTransition}
          className="max-w-5xl"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            Povestea Orion Grup
          </span>

          <h2 className="mt-8 text-white text-5xl lg:text-6xl font-semibold tracking-tight">
            De ce a apărut Orion Grup?
          </h2>
        </motion.div>

        <motion.div
          variants={fromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...revealTransition, delay: 0.15 }}
          className="mt-10 max-w-5xl space-y-6 text-white/70 text-lg leading-relaxed"
        >
          <p>
            Compania noastră a fost fondată în anul 1996 cu misiunea de a oferi
            clienților noștri soluții de iluminat și instalații electrice de
            înaltă calitate, iar de atunci ne-am angajat să atingem acest
            obiectiv. De-a lungul anilor, ne-am construit o reputație de
            excelență în industria noastră și ne mândrim cu munca pe care o
            facem.
          </p>

          <p>
            Lucrăm cu o gamă largă de clienți, de la proprietari de locuințe la
            corporații mari și suntem capabili să oferim soluții de iluminat
            personalizate pentru orice proiect. Echipa noastră de experți are
            cunoștințe extinse în domeniul iluminatului, iar noi cercetăm și ne
            menținem în permanență la curent cu cele mai recente tendințe și
            tehnologii.
          </p>

          <p>
            În esența noastră, credem în furnizarea de servicii excepționale
            pentru clienți. Înțelegem că fiecare proiect este unic și ne acordăm
            timpul necesar pentru a asculta nevoile și preferințele clienților
            noștri. Lucrăm îndeaproape cu clienții noștri pe parcursul
            întregului proces, de la concept până la instalare, pentru a ne
            asigura că viziunea lor este realizată.
          </p>

          <p>
            De asemenea, ne angajăm să promovăm durabilitatea, eficiența
            energetică și în mod special etica în prețurile competitive pe care
            le oferim. Considerăm că este important să reducem impactul asupra
            mediului și să ne ajutăm clienții să economisească din costurile
            energetice. Oferim o gamă largă de opțiuni de iluminat eficiente din
            punct de vedere energetic și explorăm mereu noi modalități de a
            reduce amprenta de carbon.
          </p>

          <p>
            Vă mulțumim că ne luați în considerare pentru nevoile dvs. de
            iluminat și instalații electrice. Așteptăm cu nerăbdare să lucrăm cu
            dvs. și să vă oferim produse și servicii de cea mai înaltă calitate.
          </p>
        </motion.div>
      </section>

      {/* SECTION 1 */}
      <section className="mx-auto max-w-7xl px-8 pt-32 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT – TEXT */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={revealTransition}
            className="flex flex-col justify-center"
          >
            <h1 className="text-white text-5xl lg:text-6xl font-semibold tracking-tight">
              Concept
            </h1>

            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
              Etapa preliminară presupune o serie de consultări aprofundate
              privind proiectul de arhitectură sau de amenajare interioară,
              desfășurate alături de beneficiar și, acolo unde este necesar,
              împreună cu arhitectul sau designerul de interior. Este un proces
              complex, care se poate întinde pe parcursul mai multor zile sau
              chiar săptămâni, tocmai datorită atenției acordate fiecărui
              detaliu: de la stabilirea atmosferei luminoase ideale pentru
              fiecare spațiu, până la selecția soluțiilor de iluminat,
              integrarea elementelor tehnice și armonizarea perfectă a
              funcționalității cu estetica proiectului.
            </p>
          </motion.div>

          {/* RIGHT – IMAGINI ZIG-ZAG */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...revealTransition, delay: 0.15 }}
            className="flex justify-end"
          >
            <div
              className="
                grid gap-6
                grid-cols-2
                grid-rows-2
                w-[520px] h-[520px]
              "
            >
              <button
                type="button"
                onClick={() => setSelectedImage(Img1)}
                className="col-start-2 row-span-2 rounded-3xl overflow-hidden cursor-pointer group"
                aria-label="Deschide imaginea"
              >
                <img
                  src={Img1}
                  alt=""
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:brightness-110"
                  draggable={false}
                />
              </button>

              <button
                type="button"
                onClick={() => setSelectedImage(Img3)}
                className="col-start-1 row-start-1 rounded-2xl overflow-hidden cursor-pointer group"
                aria-label="Deschide imaginea"
              >
                <img
                  src={Img3}
                  alt=""
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:brightness-110"
                  draggable={false}
                />
              </button>

              <button
                type="button"
                onClick={() => setSelectedImage(Img2)}
                className="col-start-1 row-start-2 rounded-2xl overflow-hidden cursor-pointer group"
                aria-label="Deschide imaginea"
              >
                <img
                  src={Img2}
                  alt=""
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:brightness-110"
                  draggable={false}
                />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="mx-auto max-w-7xl px-8 py-32 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT – IMAGINE MARE */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={revealTransition}
            className="order-2 lg:order-1 flex justify-start"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(Img6)}
              className="w-full max-w-[520px] h-[520px] rounded-3xl overflow-hidden cursor-pointer group"
              aria-label="Deschide imaginea"
            >
              <img
                src={Img6}
                alt=""
                className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:brightness-110"
                draggable={false}
              />
            </button>
          </motion.div>

          {/* RIGHT – TEXT */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...revealTransition, delay: 0.15 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <h2 className="text-white text-5xl lg:text-6xl font-semibold tracking-tight">
              Selecție
            </h2>

            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
              După înțelegerea în profunzime a temei și a cerințelor
              proiectului, realizăm o selecție riguroasă a soluțiilor de
              iluminat, propunând exclusiv acele opțiuni care răspund cu
              adevărat conceptului, exigențelor estetice și bugetului
              disponibil. Nu mizăm pe liste ample de produse lăsate ulterior
              spre filtrare, ci pe recomandări curate, argumentate și atent
              calibrate, menite să aducă valoare reală proiectului. În această
              etapă, prioritatea noastră nu este volumul, ci contribuția
              autentică la reușita întregii lucrări, prin soluții premium,
              relevante și impecabil integrate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="mx-auto max-w-7xl px-8 py-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT – TEXT */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={revealTransition}
            className="flex flex-col justify-center"
          >
            <h2 className="text-white text-5xl lg:text-6xl font-semibold tracking-tight">
              Implementare
            </h2>

            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
              Relația cu noi continuă dincolo de momentul achiziției, printr-un
              proces de asistență post-vânzare atent susținut și prin implicare
              activă în etapa de implementare și montaj. Ne asigurăm că fiecare
              soluție este pusă în operă corect, în acord cu standardele tehnice
              și estetice ale proiectului, deoarece execuția influențează
              decisiv rezultatul final. Având în vedere gradul ridicat de
              complexitate al soluțiilor de ultimă generație din portofoliul
              nostru, expertiza și prezența noastră în această etapă devin
              esențiale pentru o integrare impecabilă și pentru obținerea
              efectului dorit.
            </p>
          </motion.div>

          {/* RIGHT – IMAGINE MARE */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...revealTransition, delay: 0.15 }}
            className="flex justify-end"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(Img7)}
              className="w-full max-w-[520px] h-[520px] rounded-3xl overflow-hidden cursor-pointer group"
              aria-label="Deschide imaginea"
            >
              <img
                src={Img7}
                alt=""
                className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:brightness-110"
                draggable={false}
              />
            </button>
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Închide imaginea"
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={selectedImage}
            alt="Imagine mărită"
            className="max-h-[90vh] max-w-[92vw] rounded-[1.5rem] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}
    </main>
  );
}