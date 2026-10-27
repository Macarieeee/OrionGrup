// src/lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";
import { readRecoveryUrl } from "./recoveryUrl";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
if (!supabaseUrl || !supabaseAnonKey) {
  // ajută la debugging dacă uiți .env
  // eslint-disable-next-line no-console
  console.error("Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY");
}

// Capture and remove recovery credentials before the regular client can consume them.
const recovery = readRecoveryUrl(window.location.href);
export const isPasswordRecovery = recovery.isRecovery;
if (isPasswordRecovery) {
  window.history.replaceState(null, "", "/admin/reset");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { detectSessionInUrl: !isPasswordRecovery },
});

// This client never shares storage or auth events with the application's client.
export const recoveryClient = isPasswordRecovery
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        storageKey: "orion-password-recovery",
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  : null;

// One initialization promise also prevents duplicate exchanges under StrictMode.
export const recoveryReady = (async () => {
  if (!recoveryClient) return false;
  const { error: logoutError } = await supabase.auth.signOut({ scope: "local" });
  if (logoutError || !recovery.tokens) return false;
  const { data, error } = await recoveryClient.auth.setSession(recovery.tokens);
  recovery.tokens = null;
  return !error && Boolean(data.session);
})();
