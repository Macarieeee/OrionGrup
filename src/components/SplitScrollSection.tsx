import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { GlowSweep, Beam } from "./Hero";
import Portfolio1 from "../assets/Portfolio1.webp";
import Portfolio2 from "../assets/Portfolio2.webp";
import Portfolio3 from "../assets/Portfolio3.webp";
type CardData = {
  id: string;
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
};

const cards: CardData[] = [
  {
    id: "1",
    title: "Titlu Placeholder 1",
    text: "Acesta este un paragraf descriptiv pentru primul placeholder.",
    image: Portfolio1, // pune imaginile tale în /public/images/
  },
  {
    id: "2",
    title: "Titlu Placeholder 2",
    text: "Acesta este un paragraf descriptiv pentru al doilea placeholder.",
    image: Portfolio2,
    reverse: true,
  },
  {
    id: "3",
    title: "Titlu Placeholder 3",
    text: "Acesta este un paragraf descriptiv pentru al treilea placeholder.",
    image: Portfolio3,
  },
];


function AnimatedCard({
  title,
  text,
  image,
  reverse,
}: {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const controlsPlaceholder = useAnimation();
  const controlsText = useAnimation();
  const isInView = useInView(triggerRef, { amount: 0.5 });

  React.useEffect(() => {
    if (isInView) {
      controlsPlaceholder.start({
        x: reverse ? "50%" : "-50%",
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      controlsText.start({
        x: reverse ? "-70%" : "70%",
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    } else {
      controlsPlaceholder.start({ x: "0%", transition: { duration: 0.8 } });
      controlsText.start({ x: "0%", transition: { duration: 0.8 } });
    }
  }, [isInView, controlsPlaceholder, controlsText, reverse]);

  return (
    <div className="relative w-full mb-16">
      <div ref={triggerRef} className="absolute top-1/2 h-px w-full" />

      {/* DESKTOP layout */}
      <div className="hidden md:flex items-center justify-center h-[50vh] relative">
        <motion.div
          animate={controlsText}
          initial={{ x: "0%" }}
          className={`absolute z-10 ${reverse ? "text-right" : "text-left"} text-white`}
        >
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto">{text}</p>
        </motion.div>

        <motion.div
  animate={controlsPlaceholder}
  initial={{ x: "0%" }}
  className="relative z-20 w-[37vw] h-[40vh] rounded-2xl overflow-hidden 
             bg-white/10 border border-white/20 backdrop-blur-md shadow-xl"
>
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover"
    loading="lazy"
  />
</motion.div>
      </div>

{/* MOBILE layout */}
<div className="flex flex-col md:hidden items-center justify-center w-full gap-4 px-4">
  {/* Imaginea */}
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2 }}
    className="w-full h-56 rounded-2xl overflow-hidden 
               bg-white/20 border border-white/30 backdrop-blur-md shadow-lg"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </motion.div>

  {/* Textul */}
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    viewport={{ once: false, amount: 0.2 }}
    className="text-center text-white"
  >
    <h1 className="text-2xl font-bold mb-2">{title}</h1>
    <p className="text-base text-gray-300">{text}</p>
  </motion.div>
</div>
    </div>
  );
}

export default function MiddleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative w-screen overflow-hidden py-16">
      {/* ===== BACKGROUND layers ===== */}
      <div className="absolute inset-0 z-[-30] bg-[#0a0b0d]" />
      <div
        className="absolute inset-0 z-[-20] pointer-events-none
          bg-[radial-gradient(120%_85%_at_0%_0%,#0e1116_0%,transparent_60%),
              radial-gradient(120%_85%_at_100%_0%,#0e1116_0%,transparent_60%),
              radial-gradient(170%_120%_at_50%_120%,#07090c_0%,#0a0b0d_60%)]"
      />

      {/* ===== Fascicule stânga/dreapta pentru titlu ===== */}
      {isInView && (
        <>
          <GlowSweep
            className="absolute left-0 top-[5%] h-[60%] w-1/2 z-[-15]"
            intensity={0.18}
            drop={34}
            duration={1400}
            delay={0}
          />
          <GlowSweep
            className="absolute right-0 top-[5%] h-[60%] w-1/2 z-[-15]"
            intensity={0.18}
            drop={34}
            duration={1400}
            delay={200}
          />

          <Beam
            className="absolute left-[15%] -top-[5%] h-[80%] w-[8%] -rotate-[145deg] z-[-10]"
            intensity={0.45}
            soft={28}
            band={9}
            drop={32}
            duration={1400}
            delay={100}
          />
          <Beam
            className="absolute right-[15%] -top-[5%] h-[80%] w-[8%] rotate-[145deg] z-[-10]"
            intensity={0.45}
            soft={28}
            band={9}
            drop={32}
            duration={1400}
            delay={300}
          />
        </>
      )}

      {/* ===== Titlu + descriere ===== */}
      <div className="relative text-center max-w-2xl mx-auto mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
          Portofoliul Nostru
        </h1>
        <p className="text-lg text-gray-300">
          O scurtă previzualizare a efectului serviciilor și produselor noastre de înaltă calitate
        </p>
      </div>

      {/* ===== Cardurile animate ===== */}
     {cards.map((card) => (
  <AnimatedCard
    key={card.id}
    title={card.title}
    text={card.text}
    image={card.image}
    reverse={card.reverse}
  />
))}

    </section>
  );
}
