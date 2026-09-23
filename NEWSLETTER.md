# Configurare newsletter

## 1. Supabase

Rulează integral `database-migrations/2026-09-23-newsletter.sql` în SQL Editor, o singură dată. Migrarea creează tabelul de abonați, tabelele de campanii/loturi și limita de abonare. RLS este activ; accesul direct din browser este interzis.

În Authentication → Users copiază **User UID** pentru administrator. Autentificarea în admin rămâne cea existentă, însă backendul newsletter acceptă exclusiv ID-urile configurate mai jos. Conturile obișnuite nu pot citi abonații sau trimite campanii.

## 2. Vercel → Settings → Environment Variables

| Variabilă | Valoare |
| --- | --- |
| `SUPABASE_URL` | URL-ul proiectului Supabase (sau variabila existentă `VITE_SUPABASE_URL`) |
| `SUPABASE_SERVICE_ROLE_KEY` | Cheia server `service_role` din Supabase; **niciodată cu prefixul VITE_** |
| `RESEND_API_KEY` | Cheia Resend existentă, cu permisiune de trimitere |
| `RESEND_FROM_EMAIL` | Expeditor verificat în Resend, de exemplu `Orion Grup <noreply@oriongrup.eu>` |
| `NEWSLETTER_ADMIN_IDS` | UUID-ul administratorului; mai multe UUID-uri separate prin virgulă |
| `NEWSLETTER_PUBLIC_API_URL` | URL-ul public complet și stabil, de exemplu `https://proiectul-tau.vercel.app/api/newsletter`; folosit și pentru dezabonare |
| `NEWSLETTER_ALLOWED_ORIGINS` | Originile frontendului, fără slash final, separate prin virgulă: `https://oriongrup.ro,https://www.oriongrup.ro` |

Redeploy după configurare. Nu folosi un URL de preview temporar pentru dezabonare. Funcția `api/newsletter.ts` necesită găzduire Vercel; GitHub Pages nu execută funcții backend.

## 3. Frontend și găzduire

Repository-ul conține un workflow de publicare pe **GitHub Pages**, iar formularul de contact folosește `/api/contact.php`. Prin urmare, nu se poate presupune că frontendul și API-ul sunt pe aceeași găzduire.

- Dacă frontendul este pe același domeniu Vercel cu API-ul, valoarea implicită `/api/newsletter` este suficientă.
- Dacă site-ul rămâne pe altă găzduire, setează **la buildul frontendului** `VITE_NEWSLETTER_API_URL=https://proiectul-tau.vercel.app/api/newsletter`. În GitHub Actions adaugă această valoare în variabilele repository-ului; workflow-ul o transmite la build.
- Păstrează domeniul frontendului în `NEWSLETTER_ALLOWED_ORIGINS` pe Vercel.
- `npm run dev` pornește numai Vite. Pentru test local cu API folosește Vercel Dev sau un backend Vercel de test și adaugă originea locală în lista permisă.

## Utilizare

Abonarea din footer salvează emailul normalizat în `newsletter_subscribers`. Emailurile duplicate nu creează rânduri noi. O adresă dezabonată nu este reactivată prin formularul public. Există o limită de 10 cereri/IP/oră; IP-ul este stocat doar ca HMAC. Formularul reprezintă acordul pentru abonare, fără confirmare suplimentară prin email.

În Admin → Newsletter apar abonații activi, subiectul, mesajul, previzualizarea și istoricul ultimelor 20 de campanii. Bifează confirmarea și apasă „Trimite newsletterul”. Destinatarii sunt fotografiați la pornirea campaniei; fiecare primește un mesaj individual și un link de dezabonare. Nu sunt expuse celelalte adrese.

Păstrează secțiunea deschisă până la final. Se trimit loturi de maximum 50 de mesaje. Dacă se întrerupe conexiunea, revino și apasă „Reia trimiterea”. Progresul este salvat în Supabase. Resend folosește aceeași cheie de idempotency pentru fiecare lot, inclusiv după o eroare de salvare în baza de date. Reluarea este blocată după 23 de ore pentru a nu depăși retenția de 24h a cheilor Resend. Nu crea o campanie nouă pentru a relua una parțial trimisă: ar include din nou destinatarii deja procesați.

Dezabonările sunt verificate înainte de pregătirea fiecărui lot. Un lot deja pregătit/acceptat nu mai poate fi retras. Numărul „acceptate” înseamnă că Resend a preluat mesajele; verifică livrările, bounce-urile și limitele contului în dashboardul Resend. Nu este implementată procesarea webhookurilor de livrare.

Opțiunea newsletter din formularul de creare a contului este anterioară acestei implementări și păstrează preferința în metadatele contului. Migrarea nu importă automat acele conturi; noua listă este alimentată de formularul din footer.

## Verificare după configurare

1. Abonează o adresă de test din footer și verifică rândul în Supabase. Repetarea nu trebuie să dubleze adresa.
2. Un cont de client trebuie să primească eroare de acces în secțiunea newsletter.
3. Cu numai adrese de test în listă, trimite o campanie și verifică emailul și progresul.
4. Deschide linkul de dezabonare (GET nu modifică nimic), confirmă și verifică `unsubscribed_at`. Adresa nu trebuie să apară în următoarea campanie.

Referință: [Resend batch idempotency](https://resend.com/changelog/batch-idempotency-keys).
