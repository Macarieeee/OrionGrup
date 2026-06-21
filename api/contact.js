const RESEND_EMAILS_URL = "https://api.resend.com/emails";
const DEFAULT_OWNER_EMAIL = "macariemihai113@gmail.com";
const MAX_ATTACHMENT_SIZE_BYTES = 4 * 1024 * 1024;
const ALLOWED_ATTACHMENT_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

function json(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function base64Size(base64) {
  const padding = base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0;
  return Math.floor((base64.length * 3) / 4) - padding;
}

async function readBody(req) {
  if (req.body) {
    return typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
}

function buildOwnerEmail(data) {
  const favoriteProducts = data.favoriteProducts.length
    ? data.favoriteProducts.map(escapeHtml).join(", ")
    : "Nu au fost selectate produse favorite.";

  const rows = [
    ["Nume", data.name],
    ["Email", data.email],
    ["Telefon", data.phone],
    ["CUI", data.cui || "-"],
    ["Produse favorite", favoriteProducts],
    ["Termeni acceptati", "Da"],
  ];

  const htmlRows = rows
    .map(([label, value]) => {
      return `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${value}</td></tr>`;
    })
    .join("");

  const text = [
    "Cerere noua de oferta Orion Grup",
    "",
    `Nume: ${data.name}`,
    `Email: ${data.email}`,
    `Telefon: ${data.phone}`,
    `CUI: ${data.cui || "-"}`,
    `Produse favorite: ${data.favoriteProducts.join(", ") || "-"}`,
    "",
    "Mesaj:",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
      <h1 style="font-size:22px;margin:0 0 16px;">Cerere noua de oferta Orion Grup</h1>
      <table style="border-collapse:collapse;width:100%;max-width:720px;margin-bottom:20px;">${htmlRows}</table>
      <h2 style="font-size:16px;margin:0 0 8px;">Mesaj</h2>
      <div style="white-space:pre-wrap;padding:14px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">${escapeHtml(data.message)}</div>
    </div>
  `;

  return { html, text };
}

function buildCustomerEmail(data) {
  const text = [
    `Buna, ${data.name},`,
    "",
    "Am primit cererea ta de oferta transmisa catre Orion Grup.",
    "Echipa noastra va analiza mesajul si va reveni cu detalii cat mai curand.",
    "",
    "Rezumatul solicitarii:",
    data.message,
    "",
    "Orion Grup",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
      <h1 style="font-size:22px;margin:0 0 16px;">Am primit cererea ta</h1>
      <p>Buna, ${escapeHtml(data.name)},</p>
      <p>Am primit cererea ta de oferta transmisa catre Orion Grup. Echipa noastra va analiza mesajul si va reveni cu detalii cat mai curand.</p>
      <h2 style="font-size:16px;margin:24px 0 8px;">Rezumatul solicitarii</h2>
      <div style="white-space:pre-wrap;padding:14px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">${escapeHtml(data.message)}</div>
      <p style="margin-top:24px;">Orion Grup</p>
    </div>
  `;

  return { html, text };
}

async function sendResendEmail(apiKey, payload) {
  const response = await fetch(RESEND_EMAILS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    const message = body?.message || body?.error || "Resend nu a acceptat emailul.";
    throw new Error(message);
  }

  return body;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { message: "Metoda nepermisa." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const ownerEmail = process.env.CONTACT_OWNER_EMAIL || DEFAULT_OWNER_EMAIL;

  if (!apiKey || !fromEmail) {
    return json(res, 500, {
      message: "Configuratia pentru trimiterea emailurilor lipseste.",
    });
  }

  try {
    const body = await readBody(req);
    const data = {
      name: normalizeText(body.name),
      email: normalizeText(body.email).toLowerCase(),
      phone: normalizeText(body.phone),
      cui: normalizeText(body.cui),
      message: normalizeText(body.message),
      favoriteProducts: Array.isArray(body.favoriteProducts)
        ? body.favoriteProducts.map(normalizeText).filter(Boolean)
        : [],
      acceptedTerms: body.acceptedTerms === true,
      attachment: body.attachment && typeof body.attachment === "object" ? body.attachment : null,
    };

    if (!data.name || !data.email || !data.phone || !data.message) {
      return json(res, 400, { message: "Completeaza toate campurile obligatorii." });
    }

    if (!isEmail(data.email)) {
      return json(res, 400, { message: "Adresa de email nu este valida." });
    }

    if (!data.acceptedTerms) {
      return json(res, 400, { message: "Trebuie acceptati termenii formularului." });
    }

    const attachments = [];

    if (data.attachment) {
      const filename = normalizeText(data.attachment.name);
      const content = normalizeText(data.attachment.content);
      const type = normalizeText(data.attachment.type);
      const size = base64Size(content);

      if (!filename || !content) {
        return json(res, 400, { message: "Fisierul atasat este invalid." });
      }

      if (size > MAX_ATTACHMENT_SIZE_BYTES) {
        return json(res, 400, { message: "Fisierul atasat depaseste limita de 4 MB." });
      }

      if (type && !ALLOWED_ATTACHMENT_TYPES.has(type)) {
        return json(res, 400, { message: "Tipul fisierului atasat nu este acceptat." });
      }

      attachments.push({
        filename,
        content,
      });
    }

    const ownerEmailContent = buildOwnerEmail(data);
    const customerEmailContent = buildCustomerEmail(data);

    await Promise.all([
      sendResendEmail(apiKey, {
        from: fromEmail,
        to: ownerEmail,
        reply_to: data.email,
        subject: `Cerere oferta Orion Grup - ${data.name}`,
        html: ownerEmailContent.html,
        text: ownerEmailContent.text,
        attachments,
      }),
      sendResendEmail(apiKey, {
        from: fromEmail,
        to: data.email,
        reply_to: ownerEmail,
        subject: "Am primit cererea ta - Orion Grup",
        html: customerEmailContent.html,
        text: customerEmailContent.text,
      }),
    ]);

    return json(res, 200, { message: "Mesaj trimis cu succes." });
  } catch (error) {
    console.error("Contact form error:", error);
    return json(res, 500, {
      message: "Mesajul nu a putut fi trimis. Te rugam sa incerci din nou.",
    });
  }
}
