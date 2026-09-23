import { supabase } from './supabaseClient';

const endpoint = import.meta.env.VITE_NEWSLETTER_API_URL || '/api/newsletter';

export async function newsletterRequest<T>(body: Record<string, unknown>, admin = false): Promise<T> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (admin) {
    const { data } = await supabase.auth.getSession();
    if (!data.session) throw new Error('Autentifică-te din nou.');
    headers.Authorization = `Bearer ${data.session.access_token}`;
  }
  const response = await fetch(endpoint, { method: 'POST', headers, body: JSON.stringify(body) });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result) throw new Error(result?.message || 'Serviciul newsletter nu este disponibil. Încearcă din nou.');
  return result as T;
}
