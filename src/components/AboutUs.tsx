import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlowSweep, Beam } from "./Hero"; // importă componentele din Hero

export default function AboutUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-screen overflow-hidden text-white py-24"
    >
      {/* ===== Fascicule care apar doar când secțiunea e vizibilă ===== */}
      {isInView && (
        <>
          <GlowSweep
            key="sweep-left"
            className="absolute left-0 top-[-10%] h-[80%] w-1/2 z-[-15]"
            intensity={0.15}
            drop={34}
            duration={1400}
            delay={0}
          />
          <GlowSweep
            key="sweep-right"
            className="absolute right-0 top-[-10%] h-[80%] w-1/2 z-[-15]"
            intensity={0.15}
            drop={34}
            duration={1400}
            delay={200}
          />
          <Beam
            key="beam-left"
            className="absolute left-[0%] -top-[5%] h-[90%] w-[7%] -rotate-[30deg] z-[-10]"
            intensity={0.45}
            soft={28}
            band={9}
            drop={32}
            duration={1400}
            delay={200}
          />
          <Beam
            key="beam-right"
            className="absolute right-[0%] -top-[5%] h-[90%] w-[7%] rotate-[30deg] z-[-10]"
            intensity={0.45}
            soft={28}
            band={9}
            drop={32}
            duration={1400}
            delay={200}
          />
        </>
      )}

      {/* ===== Titlu + descriere ===== */}
      <div className="relative text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
          Despre Noi
        </h2>
        <p className="text-lg text-gray-300">
          Pasiunea noastră pentru lumină și design modern ne motivează să
          aducem în casele și spațiile clienților soluții inovatoare, elegante
          și eficiente.
        </p>
      </div>

      {/* ===== Conținut principal ===== */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        {/* Text stânga */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-semibold">
            O poveste construită pe lumină
          </h3>
          <p className="text-gray-300 leading-relaxed">
            De la începuturile noastre, ne-am dedicat creării de soluții de
            iluminat care îmbină funcționalitatea cu estetica. Fiecare proiect
            reflectă atenția la detalii și dorința de a transforma spațiile în
            experiențe vizuale memorabile.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Astăzi, portofoliul nostru include colaborări cu designeri,
            arhitecți și companii care apreciază calitatea și inovația.
          </p>
        </motion.div>

        {/* Placeholder imagine / video */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full h-72 md:h-96 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl text-white"
        >
          Imagine / Video echipă
        </motion.div>
      </div>
    </section>
  );
}
