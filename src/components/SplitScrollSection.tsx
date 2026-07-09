import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { GlowSweep, Beam } from "./Hero";
import { supabase } from "../lib/supabaseClient";
import { useLanguage } from "../language/LanguageContext";

type CardData = {
  id: string;
  title: string;
  text: string;
  image: string;
  href: string;
  reverse?: boolean;
};

type PortfolioProjectDb = {
  id: string;
  slug: string;
  title: string;
  title_en: string | null;
  portfolio_description: string | null;
  portfolio_description_en: string | null;
  cover_image: string | null;
  display_order: number | null;
  created_at?: string | null;
};

const HOMEPAGE_PROJECT_LIMIT = 5;

function pickLocalized(
  language: "ro" | "en",
  roValue: string | null,
  enValue: string | null,
  fallback = ""
) {
  return language === "en" && enValue?.trim() ? enValue : roValue ?? fallback;
}

function AnimatedCard({
  title,
  text,
  image,
  href,
  reverse,
}: {
  title: string;
  text: string;
  image: string;
  href: string;
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
      <Link
        to={href}
        aria-label={`Vezi proiectul ${title}`}
        className="block outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0b0d]"
      >
        <div className="hidden md:flex items-center justify-center h-[50vh] relative cursor-pointer">
          <motion.div
            animate={controlsText}
            initial={{ x: "0%" }}
            className={`absolute z-10 ${reverse ? "text-right" : "text-left"} text-white`}
          >
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-300 max-w-md">{text}</p>
          </motion.div>

          <motion.div
            animate={controlsPlaceholder}
            initial={{ x: "0%" }}
            className="relative z-20 w-[37vw] h-[40vh] rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-md shadow-xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="flex flex-col md:hidden items-center justify-center w-full gap-4 px-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full h-56 rounded-2xl overflow-hidden bg-white/20 border border-white/30 backdrop-blur-md shadow-lg"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-base text-gray-300">{text}</p>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}

export default function MiddleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { language } = useLanguage();
  const [cards, setCards] = React.useState<CardData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [loadError, setLoadError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let alive = true;

    async function loadProjects() {
      setLoading(true);
      setLoadError(null);

      const { data, error } = await supabase
        .from("portfolio_projects")
        .select(
          "id,slug,title,title_en,portfolio_description,portfolio_description_en,cover_image,display_order,created_at"
        )
        .eq("is_active", true)
        .order("display_order", { ascending: true, nullsFirst: false })
        .order("created_at", { ascending: true })
        .limit(HOMEPAGE_PROJECT_LIMIT);

      if (!alive) return;

      if (error) {
        setLoadError(error.message);
        setCards([]);
        setLoading(false);
        return;
      }

      const nextCards = ((data ?? []) as PortfolioProjectDb[])
        .filter((project) => project.slug && project.cover_image)
        .map((project, index) => ({
          id: project.id,
          title: pickLocalized(language, project.title, project.title_en),
          text: pickLocalized(
            language,
            project.portfolio_description,
            project.portfolio_description_en
          ),
          image: project.cover_image ?? "",
          href: `/portofoliu/${project.slug}`,
          reverse: index % 2 === 1,
        }));

      setCards(nextCards);
      setLoading(false);
    }

    loadProjects();

    return () => {
      alive = false;
    };
  }, [language]);

  return (
    <section ref={ref} className="relative w-screen overflow-hidden py-16">
      <div className="absolute inset-0 z-[-30] bg-[#0a0b0d]" />
      <div
        className="absolute inset-0 z-[-20] pointer-events-none bg-[radial-gradient(120%_85%_at_0%_0%,#0e1116_0%,transparent_60%),radial-gradient(120%_85%_at_100%_0%,#0e1116_0%,transparent_60%),radial-gradient(170%_120%_at_50%_120%,#07090c_0%,#0a0b0d_60%)]"
      />

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

      <div className="relative text-center max-w-2xl mx-auto mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
          Portofoliul Nostru
        </h1>
        <p className="text-md text-gray-300">
          O scurta previzualizare a efectului serviciilor si produselor noastre de inalta calitate
        </p>
      </div>

      {loading ? (
        <div className="py-8 text-center text-sm text-white/60">
          Se incarca proiectele...
        </div>
      ) : loadError ? (
        <div className="py-8 text-center text-sm text-red-300">
          Nu am putut incarca proiectele: {loadError}
        </div>
      ) : cards.length ? (
        cards.map((card) => (
          <AnimatedCard
            key={card.id}
            title={card.title}
            text={card.text}
            image={card.image}
            href={card.href}
            reverse={card.reverse}
          />
        ))
      ) : (
        <div className="py-8 text-center text-sm text-white/60">
          Nu exista proiecte disponibile momentan.
        </div>
      )}
    </section>
  );
}
