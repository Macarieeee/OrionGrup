# Newsletter Orion Grup — activare

Interfața există în `/admin`, fila **Newsletter**: abonați, editor, previzualizare,
confirmarea trimiterii, istoric și reluarea campaniilor întrerupte.

## 1. Resend

1. În Domains verifică domeniul folosit în adresa expeditorului. Poți păstra
   `oriongrup.eu` dacă este deja verificat sau verifica `oriongrup.ro`.
2. Adaugă la furnizorul DNS exact înregistrările de trimitere afișate de Resend
   (SPF/DKIM), apoi verifică starea domeniului. Nu înlocui înregistrările MX
   existente pentru primirea emailurilor cu cele pentru un alt serviciu.
3. În API Keys creează o cheie cu Sending access pentru acel domeniu sau
   reutilizează cheia serverului existent dacă are acces la domeniu.
4. Nu trebuie importată lista de abonați în Resend Contacts și nu trebuie
   creat un Broadcast: implementarea citește abonații din Supabase și trimite prin API.

Documentație: https://resend.com/docs/dashboard/domains/introduction
Chei: https://resend.com/docs/dashboard/api-keys/introduction

## 2. Backend Vercel

Publică repository-ul pe Vercel pentru a executa `api/newsletter.ts`.
Dacă folosești deja Vercel pentru formularul de contact, verifică dacă același
proiect include acest fișier și folosește adresa lui publică stabilă.

În Settings → Environment Variables, pentru Production, configurează:

| Variabilă | Valoare |
| --- | --- |
| `SUPABASE_URL` | URL-ul proiectului Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | cheia service_role, păstrată exclusiv pe server |
| `RESEND_API_KEY` | cheia Resend cu acces de trimitere |
| `RESEND_FROM_EMAIL` | de exemplu `Orion Grup <newsletter@oriongrup.ro>`, numai dacă acest domeniu este verificat |
| `NEWSLETTER_ADMIN_IDS` | `41c7c20d-ac42-4d29-90cf-2357c4a4d8a9` |
| `NEWSLETTER_PUBLIC_API_URL` | `https://NUMELE-PROIECTULUI.vercel.app/api/newsletter` sau domeniul real al API-ului |
| `NEWSLETTER_ALLOWED_ORIGINS` | `https://oriongrup.ro,https://www.oriongrup.ro` |

Înlocuiește URL-ul exemplu cu adresa reală. Endpointul trebuie accesibil public,
fără protecție de preview/login Vercel: este folosit și pentru dezabonare.
Dacă RESEND_FROM_EMAIL este deja folosit de formularul de contact, schimbarea
lui afectează și acel formular. Refolosește expeditorul verificat dacă este potrivit.
După modificarea variabilelor, fă redeploy la backend.
Nu pune cheile secrete în variabile VITE_* sau în repository.

## 3. Frontend

Dacă site-ul este pe GitHub Pages, API-ul Node nu rulează acolo. În mediul de build
al site-ului configurează:

```dotenv
VITE_NEWSLETTER_API_URL=https://NUMELE-PROIECTULUI.vercel.app/api/newsletter
```

Apoi reconstruiește și publică frontendul. Dacă frontendul și API-ul rulează
pe același domeniu Vercel, valoarea implicită `/api/newsletter` este suficientă.
`npm run dev` pornește doar Vite, nu funcțiile Vercel.

## 4. Verificare înainte de prima campanie

- Intră în `/admin` cu contul asociat UID-ului configurat și selectează Newsletter.
- Verifică lista abonaților, expeditorul și configurația afișată. Starea de
  configurare nu verifică validitatea cheii sau DNS-ul din contul Resend.
- Verifică în Resend limitele planului și starea domeniului.
- Butonul Trimite trimite către TOȚI abonații activi; nu este un buton de test.
  Pentru un test folosește un mediu separat cu numai adresa proprie abonată.
- Păstrează secțiunea deschisă până la procesarea campaniei. Reluarea este
  disponibilă 23 de ore, iar mesajele acceptate se verifică în Resend → Emails.
- Testează și dezabonarea. Linkul se adaugă automat; accesarea lui cere confirmare.

SQL-ul existent este `database-migrations/2026-09-23-newsletter.sql`.
Dacă a fost deja aplicat, nu îl rula din nou: nu este o migrare idempotentă.
Configurarea SMTP din Supabase Auth pentru resetarea parolei este separată;
newsletterul folosește direct cheia API Resend din backend.
