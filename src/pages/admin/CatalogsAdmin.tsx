import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type CatalogCategory = {
  id: string;
  name: string;
  slug: string | null;
};

type CatalogRow = {
  id?: string;
  category_id: string | null;
  name: string;
  brand: string | null;
  description: string | null;
  heyzine_url: string;
  download_url: string | null;
  cover_image: string | null;
  display_order: number | null;
  is_active: boolean;
  created_at?: string | null;
};

const BUCKET = "catalogs";

const emptyForm: CatalogRow = {
  category_id: null,
  name: "",
  brand: "",
  description: "",
  heyzine_url: "",
  download_url: "",
  cover_image: "",
  display_order: null,
  is_active: true,
};

function parseStoragePathFromPublicUrl(url: string): string | null {
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const idx = url.indexOf(marker);

  if (idx === -1) return null;

  return url.slice(idx + marker.length);
}

async function uploadCover(file: File) {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `covers/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    upsert: true,
    cacheControl: "3600",
    contentType: file.type,
  });

  if (error) throw error;

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export default function CatalogsAdmin() {
  const [items, setItems] = useState<CatalogRow[]>([]);
  const [categories, setCategories] = useState<CatalogCategory[]>([]);
  const [form, setForm] = useState<CatalogRow>(emptyForm);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [manualCoverUrl, setManualCoverUrl] = useState("");

  const load = async () => {
    setBusy(true);
    setErr(null);

    const [{ data: catalogs, error: catalogsErr }, { data: cats, error: catsErr }] =
      await Promise.all([
        supabase
          .from("catalogs")
          .select(
            "id,category_id,name,brand,description,heyzine_url,download_url,cover_image,display_order,is_active,created_at"
          )
          .order("display_order", { ascending: true, nullsFirst: false })
          .order("created_at", { ascending: true }),
        supabase
          .from("catalog_categories")
          .select("id,name,slug")
          .order("display_order", { ascending: true, nullsFirst: false })
          .order("name", { ascending: true }),
      ]);

    setBusy(false);

    if (catalogsErr) return setErr(catalogsErr.message);
    if (catsErr) return setErr(catsErr.message);

    setItems((catalogs ?? []) as CatalogRow[]);
    setCategories((cats ?? []) as CatalogCategory[]);
  };

  useEffect(() => {
    load();
  }, []);

  const categoryById = useMemo(() => {
    return new Map(categories.map((category) => [category.id, category]));
  }, [categories]);

  const filtered = useMemo(() => {
    const search = q.trim().toLowerCase();
    if (!search) return items;

    return items.filter((item) => {
      const category = item.category_id ? categoryById.get(item.category_id)?.name ?? "" : "";
      return `${item.name} ${item.brand ?? ""} ${category}`.toLowerCase().includes(search);
    });
  }, [categoryById, items, q]);

  const resetForm = () => {
    setForm(emptyForm);
    setCoverFile(null);
    setManualCoverUrl("");
    setErr(null);
  };

  const edit = (catalog: CatalogRow) => {
    setForm({
      id: catalog.id,
      category_id: catalog.category_id ?? null,
      name: catalog.name ?? "",
      brand: catalog.brand ?? "",
      description: catalog.description ?? "",
      heyzine_url: catalog.heyzine_url ?? "",
      download_url: catalog.download_url ?? "",
      cover_image: catalog.cover_image ?? "",
      display_order: catalog.display_order ?? null,
      is_active: catalog.is_active ?? true,
      created_at: catalog.created_at ?? null,
    });
    setCoverFile(null);
    setManualCoverUrl("");
    setErr(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const removeCover = async (url: string) => {
    setForm((prev) => ({ ...prev, cover_image: "" }));

    const path = parseStoragePathFromPublicUrl(url);
    if (!path) return;

    const ok = confirm(
      "Vrei sa stergi si fisierul din Storage? OK = sterge fisierul, Cancel = doar scoate poza din catalog."
    );

    if (!ok) return;

    const { error } = await supabase.storage.from(BUCKET).remove([path]);
    if (error) setErr(error.message);
  };

  const removeCatalog = async (id?: string) => {
    if (!id) return;
    if (!confirm("Stergi catalogul?")) return;

    setBusy(true);
    setErr(null);

    const { error } = await supabase.from("catalogs").delete().eq("id", id);

    setBusy(false);

    if (error) {
      setErr(error.message);
      return;
    }

    if (form.id === id) resetForm();
    await load();
  };

  const addManualCover = () => {
    const url = manualCoverUrl.trim();
    if (!url) return;

    setForm((prev) => ({ ...prev, cover_image: url }));
    setManualCoverUrl("");
  };

  const save = async () => {
    setBusy(true);
    setErr(null);

    try {
      const cleanName = form.name.trim();
      const cleanHeyzineUrl = form.heyzine_url.trim();

      if (!cleanName) throw new Error("Numele catalogului este obligatoriu.");
      if (!cleanHeyzineUrl) throw new Error("Link-ul Heyzine este obligatoriu.");

      let cover_image = form.cover_image?.trim() || "";

      if (coverFile) {
        cover_image = await uploadCover(coverFile);
      }

      const payload = {
        category_id: form.category_id || null,
        name: cleanName,
        brand: form.brand?.trim() ? form.brand.trim() : null,
        description: form.description?.trim() ? form.description.trim() : null,
        heyzine_url: cleanHeyzineUrl,
        download_url: form.download_url?.trim() ? form.download_url.trim() : cleanHeyzineUrl,
        cover_image: cover_image || null,
        display_order:
          form.display_order === null || form.display_order === undefined
            ? null
            : Number(form.display_order),
        is_active: form.is_active ?? true,
      };

      if (form.id) {
        const { error } = await supabase.from("catalogs").update(payload).eq("id", form.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("catalogs").insert(payload);
        if (error) throw error;
      }

      setCoverFile(null);
      setManualCoverUrl("");
      await load();
    } catch (e: any) {
      setErr(e.message || "Eroare la salvarea catalogului.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[520px_1fr]">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Adauga / Editeaza catalog</div>
            <p className="mt-1 text-xs text-white/50">
              Link-ul Heyzine deschide flipbook-ul, iar cover-ul apare in card.
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
          <input
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            placeholder="Nume catalog"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          />

          <input
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            placeholder="Brand, ex: Orion Grup"
            value={form.brand ?? ""}
            onChange={(e) => setForm((prev) => ({ ...prev, brand: e.target.value }))}
          />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_140px]">
            <select
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
              value={form.category_id ?? ""}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category_id: e.target.value || null }))
              }
            >
              <option value="">Fara categorie</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
              placeholder="Ordine"
              value={form.display_order ?? ""}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  display_order: e.target.value === "" ? null : Number(e.target.value),
                }))
              }
            />
          </div>

          <input
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            placeholder="Heyzine URL"
            value={form.heyzine_url}
            onChange={(e) => setForm((prev) => ({ ...prev, heyzine_url: e.target.value }))}
          />

          <input
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            placeholder="Download URL optional (daca e gol, se foloseste Heyzine URL)"
            value={form.download_url ?? ""}
            onChange={(e) => setForm((prev) => ({ ...prev, download_url: e.target.value }))}
          />

          <textarea
            className="min-h-[90px] w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            placeholder="Descriere optionala"
            value={form.description ?? ""}
            onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
          />

          <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80">
            <input
              type="checkbox"
              checked={form.is_active}
              onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
              className="h-4 w-4 accent-white"
            />
            Catalog activ / vizibil pe site
          </label>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold">Imagine principala card</div>
            <p className="mt-1 text-xs text-white/50">
              Recomandat: imagine verticala clara, exportata din coperta catalogului.
            </p>

            <div className="mt-3">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCoverFile(e.target.files?.[0] ?? null)}
              />
            </div>

            <div className="mt-3 flex gap-2">
              <input
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none"
                placeholder="Sau lipeste URL imagine"
                value={manualCoverUrl}
                onChange={(e) => setManualCoverUrl(e.target.value)}
              />
              <button
                type="button"
                onClick={addManualCover}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm transition hover:bg-white/15"
              >
                Add
              </button>
            </div>

            {form.cover_image ? (
              <div className="relative mt-4 h-[220px] overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <img src={form.cover_image} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeCover(form.cover_image || "")}
                  className="absolute right-2 top-2 rounded-lg bg-black/70 px-2 py-1 text-xs hover:bg-black"
                >
                  x
                </button>
              </div>
            ) : null}
          </div>

          {err ? <div className="text-sm text-red-400">{err}</div> : null}

          <button
            type="button"
            disabled={busy}
            onClick={save}
            className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
          >
            {busy ? "Saving..." : "Save Catalog"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Cataloage</div>
            <div className="text-xs text-white/50">{items.length} cataloage in total</div>
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
          {filtered.map((catalog) => (
            <div
              key={catalog.id ?? catalog.heyzine_url}
              className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="h-[86px] w-[64px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                  {catalog.cover_image ? (
                    <img src={catalog.cover_image} className="h-full w-full object-cover" />
                  ) : null}
                </div>

                <div className="min-w-0">
                  <div className="truncate font-semibold text-white">{catalog.name}</div>
                  <div className="truncate text-xs text-white/60">
                    {catalog.brand || "Brand nesetat"}
                  </div>
                  <div className="truncate text-xs text-white/50">
                    Categorie:{" "}
                    {catalog.category_id
                      ? categoryById.get(catalog.category_id)?.name ?? "necunoscuta"
                      : "fara categorie"}
                  </div>
                  <div className="text-xs text-white/50">
                    Ordine: {catalog.display_order ?? "nesetata"} -{" "}
                    {catalog.is_active ? "activ" : "inactiv"}
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 gap-2">
                <a
                  href={catalog.heyzine_url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm transition hover:bg-white/15"
                >
                  View
                </a>
                <button
                  type="button"
                  onClick={() => edit(catalog)}
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm transition hover:bg-white/15"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => removeCatalog(catalog.id)}
                  className="rounded-xl bg-red-500/20 px-3 py-2 text-sm transition hover:bg-red-500/30"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {!filtered.length ? <div className="text-sm text-white/60">No results.</div> : null}
        </div>
      </div>
    </div>
  );
}
