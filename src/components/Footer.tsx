import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import { newsletterRequest } from "../lib/newsletter";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterBusy, setNewsletterBusy] = useState(false);
  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newsletterBusy) return;
    setNewsletterBusy(true);
    setNewsletterMessage("");
    try {
      const result = await newsletterRequest<{ message: string }>({ action: 'subscribe', email: newsletterEmail, consent: true });
      setNewsletterMessage(result.message);
      setNewsletterEmail("");
    } catch (error) {
      setNewsletterMessage(error instanceof Error ? error.message : 'Abonarea nu a reușit.');
    } finally { setNewsletterBusy(false); }
  };

  return (
    <footer className="relative w-full bg-[#0a0b0d] text-gray-400 overflow-hidden">
      {/* === Footer main === */}
      <div className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">ORION.</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              SHOWROOM ORION GRUP Șoseaua Mihai Bravu 12, București 021326
            </p>
          </div>

          {/* Col 2: Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Companie</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Acasa</Link></li>
              <li><Link to="/despre" className="hover:text-white">Despre noi</Link></li>
              <li><Link to="/portofoliu" className="hover:text-white">Portofoliu</Link></li>
              <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link to="/cataloage" className="hover:text-white">Cataloage</Link></li>
              <li><Link to="/work-in-progress" className="hover:text-white">Work in Progress</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/oriongrup.ro/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/orion-grup/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resurse</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/termeni-si-conditii" className="hover:text-white">Termeni si conditii</Link></li>
              <li><Link to="/politica-de-confidentialitate" className="hover:text-white">Politica de confidentialitate</Link></li>
              <li><Link to="/sign-in" className="hover:text-white">Cont client si newsletter</Link></li>
              <li><Link to="/contact" className="hover:text-white">Cerere oferta</Link></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_420px] md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">Abonare la newsletter</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
                Primește noutăți despre colecții, cataloage și soluții de iluminat Orion Grup. Te poți dezabona oricând din email.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={newsletterEmail}
                  aria-label="Adresa de email pentru newsletter"
                  maxLength={254}
                  disabled={newsletterBusy}
                  onChange={(event) => {
                    setNewsletterEmail(event.target.value);
                    setNewsletterMessage("");
                  }}
                  placeholder="email@exemplu.ro"
                  required
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  disabled={newsletterBusy}
                >
                  {newsletterBusy ? 'Se înregistrează…' : 'Abonează-te'}
                </button>
              </div>
              {newsletterMessage ? (
                <p className="text-xs leading-relaxed text-gray-400" role="status">
                  {newsletterMessage}
                </p>
              ) : (
                <p className="text-xs leading-relaxed text-gray-500">
                  Prin apăsarea „Abonează-te”, accepți primirea newsletterului și prelucrarea adresei de email conform <Link to="/politica-de-confidentialitate" className="underline">politicii de confidențialitate</Link>.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* === Bottom bar === */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto">
        <p>
          Design and Build by Macarie Mihai-Alexandru
        </p>
        <p>
          COPYRIGHT BY ORION GRUP
        </p>
      </div>
    </footer>
  );
}
