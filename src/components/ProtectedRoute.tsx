import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function checkSession() {
      const { data } = await supabase.auth.getSession();

      if (!mounted) return;

      setIsLoggedIn(Boolean(data.session));
      setLoading(false);
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(Boolean(session));
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black pt-[var(--nav-h)] text-white">
        <section className="mx-auto flex min-h-[calc(100vh-var(--nav-h))] max-w-7xl items-center justify-center px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-6 text-white/70">
            Se verifică accesul...
          </div>
        </section>
      </main>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}