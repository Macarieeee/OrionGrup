const FORMATTER_CURRENCIES = ["RON", "EUR", "USD", "GBP"] as const;
const ADMIN_CURRENCIES = ["RON", "EUR", "USD"] as const;
const CURRENCY_SYMBOLS: Record<string, string> = {
  RON: "lei",
  EUR: "\u20ac",
  USD: "$",
  GBP: "\u00a3",
};

export type AdminCurrency = (typeof ADMIN_CURRENCIES)[number];

export const adminCurrencies: AdminCurrency[] = [...ADMIN_CURRENCIES];

export function normalizeCurrency(value: unknown): string {
  const raw = String(value || "").trim().toUpperCase();

  if (["EURO", "EUROS", "€"].includes(raw)) return "EUR";
  if (["LEI", "LEU", "RONI"].includes(raw)) return "RON";
  if (FORMATTER_CURRENCIES.includes(raw as (typeof FORMATTER_CURRENCIES)[number])) {
    return raw;
  }

  return "RON";
}

export function normalizeAdminCurrency(value: unknown): AdminCurrency {
  const normalized = normalizeCurrency(value);

  return ADMIN_CURRENCIES.includes(normalized as AdminCurrency)
    ? (normalized as AdminCurrency)
    : "RON";
}

export function formatPrice(
  price: number | string | null | undefined,
  currency: unknown,
  maximumFractionDigits = 0
) {
  if (price === null || price === undefined || price === "") {
    return "La cerere";
  }

  const numericPrice = Number(price);

  if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
    return "La cerere";
  }

  const safeCurrency = normalizeCurrency(currency);

  try {
    const formattedNumber = new Intl.NumberFormat("ro-RO", {
      minimumFractionDigits: maximumFractionDigits,
      maximumFractionDigits,
    }).format(numericPrice);

    return `${formattedNumber} ${CURRENCY_SYMBOLS[safeCurrency] ?? safeCurrency} + TVA`;
  } catch {
    return `${numericPrice.toLocaleString("ro-RO")} ${safeCurrency} + TVA`;
  }
}
