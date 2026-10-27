type MutationError = { message: string; code?: string };

export function requirePortfolioMutation<T extends { id: string }>(result: {
  data: T | null;
  error: MutationError | null;
}): T {
  if (result.error) {
    if (result.error.code === "42501" || /row-level security/i.test(result.error.message)) {
      throw new Error("Nu ai permisiunea de a modifica proiectele. Verifică drepturile contului de administrator și politicile Supabase pentru portfolio_projects.");
    }
    throw new Error(result.error.message);
  }
  if (!result.data) {
    throw new Error("Nu s-a modificat niciun proiect. Proiectul nu mai există sau contul nu are permisiune de modificare (RLS).");
  }
  return result.data;
}
