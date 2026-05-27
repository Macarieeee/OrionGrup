import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type PortfolioCategoryRow = {
  id: string;
  slug: string | null;
  name: string;
  display_order: number | null;
  created_at?: string | null;
};

const emptyForm: PortfolioCategoryRow = {
  id: "",
  slug: "",
  name: "",
  display_order: null,
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/ă/g, "a")
    .replace(/â/g, "a")
    .replace(/î/g, "i")
    .replace(/ș/g, "s")
    .replace(/ţ/g, "t")
    .replace(/ț/g, "t")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export default function PortfolioCategoriesAdmin() {
  const [items, setItems] = useState<PortfolioCategoryRow[]>([]);
  const [form, setForm] = useState<PortfolioCategoryRow>(emptyForm);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const load = async () => {
    setBusy(true);
    setErr(null);

    const { data, error } = await supabase
      .from("portfolio_categories")
      .select("id,slug,name,display_order,created_at")
      .order("display_order", { ascending: true, nullsFirst: false })
      .order("name", { ascending: true });

    setBusy(false);

    if (error) {
      setErr(error.message);
      return;
    }

    setItems((data ?? []) as PortfolioCategoryRow[]);
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const search = q.trim().toLowerCase();
    if (!search) return items;

    return items.filter((item) => {
      const haystack = `${item.name} ${item.slug ?? ""} ${item.id}`.toLowerCase();
      return haystack.includes(search);
    });
  }, [items, q]);

  const resetForm = () => {
    setForm(emptyForm);
    setErr(null);
  };

  const genSlug = () => {
    setForm((prev) => ({
      ...prev,
      slug: slugify(prev.name),
    }));
  };

  const edit = (item: PortfolioCategoryRow) => {
    setForm({
      id: item.id,
      slug: item.slug ?? "",
      name: item.name ?? "",
      display_order: item.display_order ?? null,
      created_at: item.created_at ?? null,
    });

    setErr(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const del = async (id: string) => {
    const projectsCheck = await supabase
      .from("portfolio_projects")
      .select("id,title")
      .eq("category_id", id)
      .limit(3);

    if (projectsCheck.data && projectsCheck.data.length > 0) {
      const names = projectsCheck.data.map((p: any) => p.title).join(", ");
      const ok = confirm(
        `Categoria este folosită de proiecte (${names}). Dacă o ștergi, proiectele pot rămâne fără categorie. Continui?`
      );

      if (!ok) return;
    } else {
      if (!confirm("Ștergi categoria?")) return;
    }

    setBusy(true);
    setErr(null);

    const { error } = await supabase
      .from("portfolio_categories")
      .delete()
      .eq("id", id);

    setBusy(false);

    if (error) {
      setErr(error.message);
      return;
    }

    if (form.id === id) resetForm();
    await load();
  };

  const save = async () => {
    setBusy(true);
    setErr(null);

    try {
      const cleanName = form.name.trim();
      const cleanSlug = (form.slug?.trim() || slugify(cleanName)).toLowerCase();

      if (!cleanName) {
        throw new Error("Numele categoriei este obligatoriu.");
      }

      if (!cleanSlug) {
        throw new Error("Slug-ul categoriei este obligatoriu.");
      }

      const payload = {
        slug: cleanSlug,
        name: cleanName,
        display_order: form.display_order,
      };

      if (form.id) {
        const { error } = await supabase
          .from("portfolio_categories")
          .update(payload)
          .eq("id", form.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("portfolio_categories")
          .insert(payload);

        if (error) throw error;
      }

      resetForm();
      await load();
    } catch (e: any) {
      setErr(e.message || "Eroare la salvare.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8">
      {/* LEFT: FORM */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Adaugă / Editează categorie portofoliu</div>
            <p className="mt-1 text-sm text-white/50">
              Categoriile sunt salvate în tabela portfolio_categories.
            </p>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
          >
            New
          </button>
        </div>

        <div className="mt-5 space-y-3">
          {form.id ? (
            <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-xs text-white/60">
              Editezi categoria: <span className="text-white">{form.id}</span>
            </div>
          ) : null}

          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Nume categorie — ex: Iluminat Interior"
            value={form.name}
            onChange={(e) => {
              const nextName = e.target.value;
              setForm((prev) => ({
                ...prev,
                name: nextName,
                slug: prev.slug ? prev.slug : slugify(nextName),
              }));
            }}
          />

          <div className="flex gap-2">
            <input
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
              placeholder="Slug — ex: iluminat-interior"
              value={form.slug ?? ""}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  slug: slugify(e.target.value),
                }))
              }
            />

            <button
              type="button"
              onClick={genSlug}
              className="shrink-0 rounded-xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
            >
              Gen
            </button>
          </div>

          <input
            type="number"
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Ordine afișare — ex: 1, 2, 3"
            value={form.display_order ?? ""}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                display_order: e.target.value === "" ? null : Number(e.target.value),
              }))
            }
          />

          {err ? <div className="text-red-400 text-sm">{err}</div> : null}

          <button
            type="button"
            disabled={busy || !form.name.trim()}
            onClick={save}
            className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black hover:opacity-90 transition duration-300 ease-in-out disabled:opacity-60"
          >
            {busy ? "Saving..." : form.id ? "Update Category" : "Save Category"}
          </button>
        </div>
      </div>

      {/* RIGHT: LIST */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Categorii portofoliu</div>
            <p className="mt-1 text-sm text-white/50">
              Acestea apar în selectul de categorie din proiecte.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={load}
              className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
            >
              Refresh
            </button>

            <input
              className="rounded-xl bg-black/40 border border-white/10 px-4 py-2 outline-none text-sm"
              placeholder="Search..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <div className="min-w-0">
                <div className="text-white font-semibold truncate">{item.name}</div>
                <div className="text-white/60 text-xs truncate">
                  Slug: {item.slug || "nesetat"}
                </div>
                <div className="text-white/50 text-xs">
                  Ordine: {item.display_order ?? "nesetată"}
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => edit(item)}
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => del(item.id)}
                  className="rounded-xl bg-red-500/20 px-3 py-2 text-sm hover:bg-red-500/30 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {!filtered.length ? (
            <div className="text-white/60 text-sm">Nu există categorii momentan.</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
