import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const lastUpdated = "30 iunie 2026";
const contactEmail = "contact@oriongrup.ro";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white pt-[var(--nav-h)]">
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:border-white/25 hover:text-white"
          >
            Inapoi la site
          </Link>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              Orion Grup
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Politica de confidentialitate
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/65">
              Aceasta pagina explica modul in care Orion Grup poate colecta si folosi datele transmise prin site, formularul de contact, contul de client si abonarea la newsletter.
            </p>
            <p className="mt-4 text-sm text-white/45">
              Ultima actualizare: {lastUpdated}
            </p>
          </div>

          <div className="mt-10 space-y-6 text-white/70">
            <PolicySection title="1. Date prelucrate">
              <p>
                Orion Grup poate prelucra date precum nume, adresa de email, numar de telefon, CUI, mesajul transmis, produsele favorite, fisierele atasate, preferinta de abonare la newsletter si date tehnice necesare functionarii site-ului.
              </p>
            </PolicySection>

            <PolicySection title="2. Scopuri">
              <p>
                Datele sunt folosite pentru raspunsuri la solicitari, cereri de oferta, administrarea conturilor, acces la cataloage, comunicari comerciale acceptate separat, prevenirea abuzurilor si mentinerea securitatii serviciilor.
              </p>
            </PolicySection>

            <PolicySection title="3. Newsletter">
              <p>
                Abonarea la newsletter se face doar pe baza unei optiuni exprimate de utilizator. Comunicarea poate include noutati despre produse, cataloage, proiecte, recomandari si informatii comerciale Orion Grup. Utilizatorul va putea solicita dezabonarea oricand.
              </p>
            </PolicySection>

            <PolicySection title="4. Servicii tehnice">
              <p>
                Pentru functionarea site-ului pot fi folosite servicii tehnice precum Supabase pentru conturi si date de aplicatie, Resend pentru emailuri si infrastructura de hosting/deploy. Aceste servicii pot procesa date strict in masura necesara functionarii tehnice.
              </p>
            </PolicySection>

            <PolicySection title="5. Pastrarea datelor">
              <p>
                Datele sunt pastrate atat timp cat este necesar pentru solutionarea cererilor, administrarea contului, respectarea obligatiilor legale sau gestionarea relatiilor comerciale. Datele folosite pentru newsletter sunt pastrate pana la retragerea consimtamantului sau stergerea lor conform cererii utilizatorului.
              </p>
            </PolicySection>

            <PolicySection title="6. Drepturile utilizatorilor">
              <p>
                Utilizatorii pot solicita acces, rectificare, stergere, restrictionare, opozitie sau retragerea consimtamantului, in conditiile legislatiei aplicabile privind protectia datelor. Pentru solicitari, Orion Grup poate fi contactat la <a href={`mailto:${contactEmail}`} className="text-white underline underline-offset-4 hover:text-indigo-300">{contactEmail}</a>.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}
