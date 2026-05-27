import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FAVORITES_STORAGE_KEY = "orion_favorite_products";
const MAX_ATTACHMENT_SIZE_BYTES = 4 * 1024 * 1024; // 4 MB - safe pentru Vercel Functions

type FavoriteProduct = {
  id?: string;
  name?: string;
};

export default function Footer() {
  const [favoriteNames, setFavoriteNames] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  const refreshFavorites = () => {
    try {
      const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);

      if (!raw) {
        setFavoriteNames([]);
        return;
      }

      const parsed = JSON.parse(raw);

      if (!Array.isArray(parsed)) {
        setFavoriteNames([]);
        return;
      }

      const names = parsed
        .map((item: FavoriteProduct) => item?.name)
        .filter((name: unknown): name is string => {
          return typeof name === "string" && name.trim().length > 0;
        })
        .map((name) => name.trim());

      setFavoriteNames(Array.from(new Set(names)));
    } catch {
      setFavoriteNames([]);
    }
  };

  const favoriteMessage = useMemo(() => {
    if (!favoriteNames.length) return "";

    return `Aș fi interesat de produsele: ${favoriteNames.join(", ")}`;
  }, [favoriteNames]);

  useEffect(() => {
    refreshFavorites();

    const handleFavoritesChanged = () => {
      refreshFavorites();
    };

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === FAVORITES_STORAGE_KEY) {
        refreshFavorites();
      }
    };

    window.addEventListener("orion:favorites-changed", handleFavoritesChanged);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("orion:favorites-changed", handleFavoritesChanged);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    setMessage(favoriteMessage);
  }, [favoriteMessage]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setFileError(null);
      return;
    }

    if (file.size > MAX_ATTACHMENT_SIZE_BYTES) {
      setFileError("Fișierul este prea mare. Te rugăm să încarci un fișier de maximum 4 MB.");
      event.target.value = "";
      return;
    }

    setFileError(null);
  };

  return (
    <footer className="relative w-full bg-[#0a0b0d] text-gray-400 overflow-hidden">
      {/* === CTA Section === */}
      <div id="footer-contact" className="text-center px-6 py-16 max-w-3xl mx-auto scroll-mt-28">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Hai să începem proiectul tău
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Suntem aici să îți oferim informațiile și suportul de care ai nevoie.
        </p>

        {/* Card contact form */}
        <div className="mx-auto w-full max-w-lg rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg p-8">
          <div className="flex flex-col items-center text-center">
            {/* Logo / Icon */}
            <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mb-4">
              ORION.
            </div>

            <h3 className="text-2xl font-semibold text-white mb-2">
              Trimite o cerere
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Completează formularul, iar noi revenim către tine cât mai repede cu toate detaliile necesare.
            </p>

            <form id="contact-form" className="w-full max-w-md mx-auto space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nume *"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Telefon *"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                name="cui"
                placeholder="CUI (opțional)"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                name="message"
                placeholder="Mesaj *"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />

              {/* Upload fișier */}
              <div className="w-full text-left">
                <label className="block text-sm text-gray-300 mb-2">
                  Încarcă fișier (opțional)
                </label>
                <input
                  type="file"
                  name="attachment"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                  onChange={handleFileChange}
                  aria-invalid={fileError ? "true" : "false"}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="mt-2 text-xs text-gray-500">
                  Formate acceptate: PDF, DOC, DOCX, JPG, PNG, WEBP. Dimensiune maximă recomandată: 4 MB.
                </p>
                {fileError ? <p className="mt-2 text-xs text-red-300">{fileError}</p> : null}
              </div>

              {/* Hidden field pentru produsele favorite */}
              <input
                type="hidden"
                name="favoriteProducts"
                value={favoriteNames.join(", ")}
              />

              {/* Hidden field pentru confirmarea termenilor */}
              <input
                type="hidden"
                name="acceptedTerms"
                value={acceptedTerms ? "da" : "nu"}
              />

              <div className="rounded-xl border border-white/10 bg-black/25 p-4 text-left">
                <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    required
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-black accent-indigo-500"
                  />
                  <span>
                    Sunt de acord cu{" "}
                    <Link
                      to="/termeni-si-conditii"
                      className="font-medium text-white underline underline-offset-4 hover:text-indigo-300 transition"
                    >
                      Termenii și Condițiile formularului
                    </Link>
                    {" "}și confirm că datele trimise pot fi folosite pentru procesarea cererii mele de ofertă.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!acceptedTerms || Boolean(fileError)}
                className={[
                  "w-full px-6 py-3 rounded-xl text-white font-medium transition duration-300 ease-in-out",
                  acceptedTerms && !fileError
                    ? "bg-indigo-600 hover:bg-indigo-500"
                    : "bg-indigo-600/40 cursor-not-allowed",
                ].join(" ")}
              >
                Trimite mesajul
              </button>
            </form>
          </div>
        </div>
      </div>

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
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Company</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link to="/termeni-si-conditii" className="hover:text-white">Termeni și Condiții</Link></li>
            </ul>
          </div>

          {/* Col 3: Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</a></li>
            </ul>
          </div>

          {/* Col 4: Webflow Stuff */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stuff</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Style Guide</a></li>
              <li><a href="#" className="hover:text-white">Licensing</a></li>
              <li><a href="#" className="hover:text-white">Instructions</a></li>
              <li><a href="#" className="hover:text-white">Change Log</a></li>
            </ul>
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
