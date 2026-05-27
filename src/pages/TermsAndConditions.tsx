import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const lastUpdated = "28 mai 2026";
const contactEmail = "contact@oriongrup.ro"; // Înlocuiește dacă Orion Grup folosește altă adresă oficială.

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white pt-[var(--nav-h)]">
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:border-white/25 hover:text-white"
          >
            Înapoi la site
          </Link>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              Orion Grup
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Termeni și Condiții pentru formularul de contact
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/65">
              Această pagină explică modul în care sunt folosite datele transmise prin formularul de contact și cerere de ofertă de pe site-ul Orion Grup.
            </p>
            <p className="mt-4 text-sm text-white/45">
              Ultima actualizare: {lastUpdated}
            </p>
          </div>

          <div className="mt-10 space-y-6 text-white/70">
            <TermsSection title="1. Rolul formularului">
              <p>
                Formularul de contact are rolul de a permite vizitatorilor să trimită către Orion Grup o cerere de informații, o solicitare de ofertă sau o întrebare legată de produsele și serviciile prezentate pe site. Trimiterea formularului nu reprezintă acceptarea automată a unei oferte comerciale și nu creează, prin ea însăși, un contract între utilizator și Orion Grup.
              </p>
            </TermsSection>

            <TermsSection title="2. Datele care pot fi colectate">
              <p>
                Prin formular pot fi transmise următoarele categorii de date: nume, adresă de email, număr de telefon, CUI, mesajul scris de utilizator, produsele marcate ca favorite și, opțional, un fișier atașat. În momentul în care formularul va fi conectat tehnic, datele vor fi transmise printr-un endpoint securizat către Orion Grup, pentru procesarea cererii.
              </p>
            </TermsSection>

            <TermsSection title="3. Produsele favorite">
              <p>
                Dacă utilizatorul marchează produse ca favorite pe site, denumirile acestora pot fi adăugate automat în mesajul formularului și/sau într-un câmp tehnic al cererii. Această funcționalitate are scopul de a ajuta echipa Orion Grup să înțeleagă mai rapid ce produse prezintă interes pentru utilizator.
              </p>
            </TermsSection>

            <TermsSection title="4. Fișiere atașate">
              <p>
                Utilizatorul poate încărca opțional un fișier relevant pentru solicitare, cum ar fi o schiță, un plan, o imagine de referință sau un document tehnic. Sunt recomandate doar fișiere necesare pentru cererea de ofertă. Nu trebuie încărcate documente care conțin date personale sensibile, informații confidențiale excesive sau conținut ilegal.
              </p>
              <p>
                Pentru compatibilitate cu infrastructura tehnică folosită pentru formular, dimensiunea maximă recomandată pentru fișier este de 4 MB. Tipurile de fișiere acceptate pot include PDF, DOC, DOCX, JPG, JPEG, PNG și WEBP.
              </p>
            </TermsSection>

            <TermsSection title="5. Scopul folosirii datelor">
              <p>
                Datele transmise sunt folosite pentru analizarea solicitării, contactarea utilizatorului, transmiterea unui răspuns sau a unei oferte, identificarea produselor de interes și păstrarea unei evidențe rezonabile a comunicării comerciale. Datele nu vor fi folosite pentru newslettere sau campanii de marketing fără un consimțământ separat, explicit.
              </p>
            </TermsSection>

            <TermsSection title="6. Trimiterea emailurilor prin servicii terțe">
              <p>
                Pentru procesarea formularului, site-ul poate folosi servicii tehnice terțe. Endpoint-ul formularului poate fi găzduit prin Vercel, iar emailurile pot fi trimise prin Resend. Aceste servicii sunt folosite pentru transmiterea tehnică a cererii către Orion Grup și, dacă este cazul, pentru trimiterea unui email automat de confirmare către utilizator.
              </p>
              <p>
                Datele pot fi procesate tehnic de aceste servicii strict în măsura necesară pentru funcționarea formularului, livrarea emailurilor, prevenirea abuzurilor, diagnosticarea erorilor și menținerea securității infrastructurii.
              </p>
            </TermsSection>

            <TermsSection title="7. Confirmarea către utilizator">
              <p>
                După trimiterea formularului, utilizatorul poate primi un email automat de confirmare la adresa introdusă. Acest email are scop informativ și confirmă faptul că solicitarea a fost transmisă sau urmează să fie analizată. Răspunsul comercial efectiv poate fi transmis ulterior de echipa Orion Grup.
              </p>
            </TermsSection>

            <TermsSection title="8. Obligațiile utilizatorului">
              <p>
                Utilizatorul declară că datele introduse în formular sunt corecte, că are dreptul să transmită informațiile respective și că nu va folosi formularul pentru spam, abuz, conținut ilegal, tentative de fraudă sau transmiterea unor fișiere malițioase.
              </p>
            </TermsSection>

            <TermsSection title="9. Securitate și limitări tehnice">
              <p>
                Orion Grup va lua măsuri rezonabile pentru protejarea datelor transmise prin formular. Totuși, nicio metodă de transmitere electronică nu poate garanta securitate absolută. Pot exista erori tehnice, întârzieri de livrare, mesaje blocate de filtre antispam sau indisponibilități temporare ale serviciilor folosite.
              </p>
            </TermsSection>

            <TermsSection title="10. Păstrarea datelor">
              <p>
                Datele transmise prin formular pot fi păstrate pe durata necesară pentru soluționarea cererii, comunicarea cu utilizatorul, întocmirea unei oferte și îndeplinirea eventualelor obligații legale sau comerciale. Dacă solicitarea nu duce la o colaborare, datele pot fi șterse la cererea utilizatorului, în limitele permise de lege.
              </p>
            </TermsSection>

            <TermsSection title="11. Drepturile utilizatorului">
              <p>
                Utilizatorul poate solicita acces la datele transmise, corectarea acestora, ștergerea lor, restricționarea prelucrării sau opoziția față de anumite prelucrări, în condițiile legislației aplicabile privind protecția datelor. Pentru astfel de solicitări, utilizatorul poate contacta Orion Grup la adresa: <a href={`mailto:${contactEmail}`} className="text-white underline underline-offset-4 hover:text-indigo-300">{contactEmail}</a>.
              </p>
            </TermsSection>

            <TermsSection title="12. Modificarea termenilor">
              <p>
                Orion Grup poate actualiza această pagină atunci când formularul, infrastructura tehnică, serviciile terțe folosite sau cerințele legale se modifică. Versiunea aplicabilă este cea publicată pe site la momentul folosirii formularului.
              </p>
            </TermsSection>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-white/65">
            <h2 className="text-xl font-semibold text-white">Ai o întrebare?</h2>
            <p className="mt-3 leading-relaxed">
              Pentru clarificări privind formularul, produsele sau procesarea cererilor de ofertă, poți contacta Orion Grup folosind datele publicate pe site.
            </p>
            <Link
              to="/"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Revenire la pagina principală
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function TermsSection({
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
