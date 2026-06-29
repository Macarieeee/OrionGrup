import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "comercial@oriongrup.eu";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Orion Grup <noreply@oriongrup.eu>";

const allowedOrigins = [
  "https://oriongrup.ro",
  "https://www.oriongrup.ro",
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
].filter(Boolean);

function setCors(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metoda nu este permisă." });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ message: "Lipsește RESEND_API_KEY în Vercel." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const cui = String(body?.cui || "").trim();
    const message = String(body?.message || "").trim();
    const acceptedTerms = Boolean(body?.acceptedTerms);
    const favoriteProducts = Array.isArray(body?.favoriteProducts)
      ? body.favoriteProducts.filter((item: unknown) => typeof item === "string")
      : [];

    const attachment = body?.attachment;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "Te rugăm să completezi toate câmpurile obligatorii." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Adresa de email nu este validă." });
    }

    if (!acceptedTerms) {
      return res.status(400).json({ message: "Trebuie să accepți termenii și condițiile." });
    }

    const productsHtml = favoriteProducts.length
      ? `<p><strong>Produse favorite:</strong><br />${favoriteProducts.map(escapeHtml).join("<br />")}</p>`
      : `<p><strong>Produse favorite:</strong> Nu au fost selectate produse favorite.</p>`;

    const internalHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>Cerere nouă de pe oriongrup.ro</h2>

        <p><strong>Nume:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
        <p><strong>CUI:</strong> ${cui ? escapeHtml(cui) : "Nu a fost completat"}</p>

        ${productsHtml}

        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>

        <p><strong>Termeni acceptați:</strong> Da</p>
      </div>
    `;

    const clientHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>Am primit cererea ta</h2>

        <p>Bună, ${escapeHtml(name)},</p>

        <p>Îți mulțumim pentru mesaj. Echipa Orion Grup a primit cererea ta și va reveni către tine cât mai curând.</p>

        <p><strong>Rezumatul cererii tale:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>

        ${
          favoriteProducts.length
            ? `<p><strong>Produse de interes:</strong><br />${favoriteProducts.map(escapeHtml).join("<br />")}</p>`
            : ""
        }

        <p>Cu drag,<br />Echipa Orion Grup</p>
      </div>
    `;

    const attachments =
      attachment?.content && attachment?.name
        ? [
            {
              filename: String(attachment.name),
              content: String(attachment.content),
              contentType: String(attachment.type || "application/octet-stream"),
            },
          ]
        : [];

    const [internalEmail, clientEmail] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        replyTo: email,
        subject: `Cerere nouă Orion Grup - ${name}`,
        html: internalHtml,
        attachments,
      }),

      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "Am primit cererea ta - Orion Grup",
        html: clientHtml,
      }),
    ]);

    if (internalEmail.error || clientEmail.error) {
      console.error("Resend error:", {
        internalEmailError: internalEmail.error,
        clientEmailError: clientEmail.error,
      });

      return res.status(500).json({
        message: "Emailul nu a putut fi trimis. Te rugăm să încerci din nou.",
      });
    }

    return res.status(200).json({
      message: "Mesajul a fost trimis cu succes.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      message: "A apărut o eroare la trimiterea mesajului.",
    });
  }
}