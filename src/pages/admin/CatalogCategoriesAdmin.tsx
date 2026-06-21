import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type CatalogCategoryRow = {
  id: string;
  slug: string;
  name: string;
  display_order: number | null;
  created_at?: string | null;
};

const emptyForm: CatalogCategoryRow = {
  id: "",
  slug: "",
  name: "",
  display_order: null,
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export default function CatalogCategoriesAdmin() {
  const [items, setItems] = useState<CatalogCategoryRow[]>([]);
  const [form, setForm] = useState<CatalogCategoryRow>(emptyForm);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const load = async () => {
    setBusy(true);
    setErr(null);

    const { data, error } = await supabase
      .from("catalog_categories")
      .select("id,slug,name,display_order,created_at")
      .order("display_order", { ascending: true, nullsFirst: false })
      .order("name", { ascending: true });

    setBusy(false);

    if (error) {
      setErr(error.message);
      return;
    }

    setItems((data ?? []) as CatalogCategoryRow[]);
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const search = q.trim().toLowerCase();
    if (!search) return items;

    return items.filter((item) =>
      `${item.name} ${item.slug} ${item.id}`.toLowerCase().includes(search)
    );
  }, [items, q]);

  const resetForm = () => {
    setForm(emptyForm);
    setErr(null);
  };

  const edit = (item: CatalogCategoryRow) => {
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
    const catalogsCheck = await supabase
      .from("catalogs")
      .select("id,name")
      .eq("category_id", id)
      .limit(3);

    if (catalogsCheck.data && catalogsCheck.data.length > 0) {
      const names = catalogsCheck.data.map((item: any) => item.name).join(", ");
      const ok = confirm(
        `Categoria este folosita de cataloage (${names}). Daca o stergi, cataloagele raman fara categorie. Continui?`
      );
      if (!ok) return;
    } else if (!confirm("Stergi categoria?")) {
      return;
    }

    setBusy(true);
    setErr(null);

    const { error } = await supabase.from("catalog_categories").delete().eq("id", id);

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
      const cleanSlug = slugify(form.slug || cleanName);

      if (!cleanName) throw new Error("Numele categoriei este obligatoriu.");
      if (!cleanSlug) throw new Error("Slug-ul categoriei este obligatoriu.");

      const payload = {
        slug: cleanSlug,
        name: cleanName,
        display_order: form.display_order,
      };

      if (form.id) {
        const { error } = await supabase
          .from("catalog_categories")
          .update(payload)
          .eq("id", form.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("catalog_categories").insert(payload);
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
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr]">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Adauga / Editeaza categorie catalog</div>
            <p className="mt-1 text-sm text-white/50">
              Categoriile sunt folosite ca filtre in pagina de cataloage.
            </p>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="rounded-xl bg-white/10 px-3 py-2 text-sm transition hover:bg-white/15"
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
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            placeholder="Nume categorie"
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
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
              placeholder="Slug"
              value={form.slug}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  slug: slugify(e.target.value),
                }))
              }
            />

            <button
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, slug: slugify(prev.name) }))}
              className="shrink-0 rounded-xl bg-white/10 px-4 py-3 text-sm transition hover:bg-white/15"
            >
              Gen
            </button>
          </div>

          <input
            type="number"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            placeholder="Ordine afisare"
            value={form.display_order ?? ""}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                display_order: e.target.value === "" ? null : Number(e.target.value),
              }))
            }
          />

          {err ? <div className="text-sm text-red-400">{err}</div> : null}

          <button
            type="button"
            disabled={busy || !form.name.trim()}
            onClick={save}
            className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
          >
            {busy ? "Saving..." : form.id ? "Update Category" : "Save Category"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Categorii cataloage</div>
            <p className="mt-1 text-sm text-white/50">{items.length} categorii in total</p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={load}
              className="rounded-xl bg-white/10 px-3 py-2 text-sm transition hover:bg-white/15"
            >
              Refresh
            </button>
            <input
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm outline-none"
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
                <div className="truncate font-semibold text-white">{item.name}</div>
                <div className="truncate text-xs text-white/60">Slug: {item.slug}</div>
                <div className="text-xs text-white/50">
                  Ordine: {item.display_order ?? "nesetata"}
                </div>
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => edit(item)}
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm transition hover:bg-white/15"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => del(item.id)}
                  className="rounded-xl bg-red-500/20 px-3 py-2 text-sm transition hover:bg-red-500/30"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {!filtered.length ? (
            <div className="text-sm text-white/60">Nu exista categorii momentan.</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
