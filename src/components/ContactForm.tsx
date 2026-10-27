import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { readContactDraft, saveContactDraft, clearContactDraft } from "../lib/contactDraft";

const FAVORITES_STORAGE_KEY = "orion_favorite_products";
const MAX_ATTACHMENT_SIZE_BYTES = 4 * 1024 * 1024; // 4 MB
const CONTACT_ENDPOINT = "/api/contact.php";

type FavoriteProduct = {
  id?: string;
  name?: string;
};

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [favoriteNames, setFavoriteNames] = useState<string[]>([]);
  const [draft, setDraft] = useState(readContactDraft);
  const message = draft.message;
  const updateDraft = (patch: Partial<typeof draft>) => {
    const next = { ...draft, ...patch, updatedAt: Date.now() };
    saveContactDraft(next);
    setDraft(next);
  };
  const acceptedTerms = draft.acceptedTerms;
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    // Favorites suggest a message only before the user starts writing.
    setDraft((previous) => previous.message || previous.updatedAt ? previous : { ...previous, message: favoriteMessage });
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

  const fileToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        if (typeof result !== "string") {
          reject(new Error("Fisier invalid."));
          return;
        }

        resolve(result.split(",")[1] ?? "");
      };

      reader.onerror = () => reject(new Error("Fisierul nu a putut fi citit."));
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fileError || isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const attachment = formData.get("attachment");

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const attachmentFile = attachment instanceof File && attachment.size > 0
        ? {
            name: attachment.name,
            type: attachment.type || "application/octet-stream",
            content: await fileToBase64(attachment),
          }
        : null;

      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(formData.get("name") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          phone: String(formData.get("phone") ?? "").trim(),
          cui: String(formData.get("cui") ?? "").trim(),
          message: message.trim(),
          favoriteProducts: favoriteNames,
          acceptedTerms,
          attachment: attachmentFile,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result) {
        throw new Error(result?.message || "Mesajul nu a putut fi trimis.");
      }

      setSubmitStatus("success");
      setSubmitMessage("Cererea a fost trimisa. Vei primi si un email de confirmare.");
      clearContactDraft();
      setDraft(readContactDraft());
      setFileError(null);

      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(error instanceof Error ? error.message : "Mesajul nu a putut fi trimis.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

            <form
              id="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full max-w-md mx-auto space-y-4"
            >
              <input
                type="text"
                name="name"
                value={draft.name}
                onChange={(event) => updateDraft({ name: event.target.value })}
                disabled={isSubmitting}
                placeholder="Nume *"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                name="email"
                value={draft.email}
                onChange={(event) => updateDraft({ email: event.target.value })}
                disabled={isSubmitting}
                placeholder="Email *"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="tel"
                name="phone"
                value={draft.phone}
                onChange={(event) => updateDraft({ phone: event.target.value })}
                disabled={isSubmitting}
                placeholder="Telefon *"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                name="cui"
                value={draft.cui}
                onChange={(event) => updateDraft({ cui: event.target.value })}
                disabled={isSubmitting}
                placeholder="CUI (opțional)"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                name="message"
                placeholder="Mesaj *"
                required
                rows={5}
                value={message}
                onChange={(e) => updateDraft({ message: e.target.value })}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />

              <p className="text-xs text-gray-400">Datele completate se păstrează în acest browser timp de 24 de ore de la ultima modificare. Dacă revii pe pagină, reselectează fișierul atașat.</p>

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
                    onChange={(e) => updateDraft({ acceptedTerms: e.target.checked })}
                    disabled={isSubmitting}
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
                disabled={!acceptedTerms || Boolean(fileError) || isSubmitting}
                className={[
                  "w-full px-6 py-3 rounded-xl text-white font-medium transition duration-300 ease-in-out",
                  acceptedTerms && !fileError && !isSubmitting
                    ? "bg-indigo-600 hover:bg-indigo-500"
                    : "bg-indigo-600/40 cursor-not-allowed",
                ].join(" ")}
              >
                {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
              </button>

              {submitMessage ? (
                <p
                  className={[
                    "text-sm",
                    submitStatus === "success" ? "text-green-300" : "text-red-300",
                  ].join(" ")}
                  role={submitStatus === "error" ? "alert" : "status"}
                >
                  {submitMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>

  );
}
