export const CONTACT_DRAFT_KEY = "orion_contact_draft_v1";
export const CONTACT_DRAFT_TTL = 24 * 60 * 60 * 1000;
const empty = { name: "", email: "", phone: "", cui: "", message: "", acceptedTerms: false, updatedAt: 0 };
export type ContactDraft = typeof empty;

export function clearContactDraft() {
  try { localStorage.removeItem(CONTACT_DRAFT_KEY); } catch { /* Storage may be unavailable. */ }
}

export function readContactDraft(): ContactDraft {
  try {
    const value = JSON.parse(localStorage.getItem(CONTACT_DRAFT_KEY) || "null");
    if (!value || typeof value.updatedAt !== "number" || !Number.isFinite(value.updatedAt) ||
        value.updatedAt > Date.now() || Date.now() - value.updatedAt >= CONTACT_DRAFT_TTL) {
      clearContactDraft();
      return { ...empty };
    }
    return {
      ...Object.fromEntries(["name", "email", "phone", "cui", "message"].map(key =>
        [key, typeof value[key] === "string" ? value[key] : ""])),
      acceptedTerms: value.acceptedTerms === true,
      updatedAt: value.updatedAt,
    } as ContactDraft;
  } catch { return { ...empty }; }
}

export function saveContactDraft(value: ContactDraft) {
  try {
    localStorage.setItem(CONTACT_DRAFT_KEY, JSON.stringify({ ...value, updatedAt: Date.now() }));
  } catch { /* The form remains usable when browser storage is blocked. */ }
}
