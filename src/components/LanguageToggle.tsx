import { Languages } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === "ro" ? "EN" : "RO";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="fixed bottom-5 right-5 z-[9998] inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#111214]/95 px-4 py-3 text-sm font-bold text-white shadow-[0_14px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:border-white/35 hover:bg-[#1b1c1f] focus:outline-none focus:ring-2 focus:ring-white/40"
      aria-label={language === "ro" ? "Switch to English" : "Schimbă în română"}
      title={language === "ro" ? "Switch to English" : "Schimbă în română"}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span>{nextLanguage}</span>
    </button>
  );
}
