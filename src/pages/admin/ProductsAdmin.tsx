import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type SpecRow = { label: string; value: string };
type DocType = "catalog" | "datasheet" | "bim" | "cad" | "other";
type DocRow = { label: string; url: string; type: DocType };

type ProductRowDb = {
  id: string;
  brand: string;
  name: string;
  code: string;
  subtitle: string | null;
  description: string | null;
  images: string[] | null;
  solutions: string[] | null;
  specs: SpecRow[] | null;
  dimensions_images: string[] | null;
  dimensions_text: string | null;
  documents: DocRow[] | null;
};

type CategoryRow = { id: string; label: string; image_url?: string | null };

const BUCKET = "shop";

const emptyForm: ProductRowDb = {
  id: "",
  brand: "",
  name: "",
  code: "",
  subtitle: null,
  description: "",
  images: [],
  solutions: [],
  specs: [],
  dimensions_images: [],
  dimensions_text: "",
  documents: [],
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/ă/g, "a")
    .replace(/â/g, "a")
    .replace(/î/g, "i")
    .replace(/ș/g, "s")
    .replace(/ț/g, "t")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function uniq(arr: string[]) {
  return Array.from(new Set(arr.filter(Boolean)));
}

function safeArr(a: any): string[] {
  return Array.isArray(a) ? a.filter((x) => typeof x === "string") : [];
}

function parseStoragePathFromPublicUrl(url: string): string | null {
  // example:
  // https://xxx.supabase.co/storage/v1/object/public/shop/products/abc.jpg
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const idx = url.indexOf(marker);
  if (idx === -1) return null;
  return url.slice(idx + marker.length); // "products/abc.jpg"
}

async function uploadMany(files: File[], folder: string) {
  const urls: string[] = [];

  for (const file of files) {
    const ext = file.name.split(".").pop() || "jpg";
    const path = folder
  ? `${folder}/${crypto.randomUUID()}.${ext}`
  : `${crypto.randomUUID()}.${ext}`;

    const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, file, {
      upsert: true,
      cacheControl: "3600",
      contentType: file.type,
    });
    if (upErr) throw upErr;

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    urls.push(data.publicUrl);
  }

  return urls;
}

export default function ProductsAdmin() {
  const [items, setItems] = useState<ProductRowDb[]>([]);
  const [categories, setCategories] = useState<CategoryRow[]>([]);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [form, setForm] = useState<ProductRowDb>(emptyForm);

  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [dimFiles, setDimFiles] = useState<File[]>([]);

  const [manualImgUrl, setManualImgUrl] = useState("");
  const [manualDimUrl, setManualDimUrl] = useState("");

  const load = async () => {
    setBusy(true);
    setErr(null);

    const [{ data: prod, error: prodErr }, { data: cats, error: catErr }] = await Promise.all([
      supabase
        .from("shop_products")
        .select(
          "id,brand,name,code,subtitle,description,images,solutions,specs,dimensions_images,dimensions_text,documents"
        )
        .order("name", { ascending: true }),
      supabase.from("shop_categories").select("id,label,image_url").order("label", { ascending: true }),
    ]);

    setBusy(false);

    if (prodErr) return setErr(prodErr.message);
    if (catErr) return setErr(catErr.message);

    setItems((prod ?? []) as any);
    setCategories((cats ?? []) as any);
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;

    return items.filter((p) => {
      const hay = `${p.id} ${p.brand} ${p.name} ${p.code} ${(p.solutions ?? []).join(" ")}`.toLowerCase();
      return hay.includes(s);
    });
  }, [items, q]);

  const resetForm = () => {
    setForm(emptyForm);
    setGalleryFiles([]);
    setDimFiles([]);
    setManualImgUrl("");
    setManualDimUrl("");
    setErr(null);
  };

  const edit = (p: ProductRowDb) => {
    setForm({
      id: p.id,
      brand: p.brand ?? "",
      name: p.name ?? "",
      code: p.code ?? "",
      subtitle: p.subtitle ?? null,
      description: p.description ?? "",
      images: safeArr(p.images),
      solutions: safeArr(p.solutions),
      specs: Array.isArray(p.specs) ? p.specs : [],
      dimensions_images: safeArr(p.dimensions_images),
      dimensions_text: p.dimensions_text ?? "",
      documents: Array.isArray(p.documents) ? p.documents : [],
    });

    setGalleryFiles([]);
    setDimFiles([]);
    setManualImgUrl("");
    setManualDimUrl("");
    setErr(null);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const del = async (id: string) => {
    if (!confirm("Ștergi produsul?")) return;
    setBusy(true);
    setErr(null);

    const { error } = await supabase.from("shop_products").delete().eq("id", id);

    setBusy(false);
    if (error) setErr(error.message);
    else load();
  };

  const save = async () => {
    setBusy(true);
    setErr(null);

    try {
      // 1) upload new files (optional)
      let images = safeArr(form.images);
      let dimensions_images = safeArr(form.dimensions_images);

      if (galleryFiles.length) {
        const uploaded = await uploadMany(galleryFiles, "");
        images = uniq([...images, ...uploaded]);
      }
      if (dimFiles.length) {
        const uploaded = await uploadMany(dimFiles, "");
        dimensions_images = uniq([...dimensions_images, ...uploaded]);
      }

      // 2) sanitize payload
      const payload = {
        id: form.id.trim(),
        brand: form.brand.trim(),
        name: form.name.trim(),
        code: form.code.trim(),
        subtitle: form.subtitle?.trim() ? form.subtitle.trim() : null,
        description: form.description?.trim() ?? "",
        images,
        solutions: uniq(safeArr(form.solutions).map((x) => x.trim()).filter(Boolean)),
        specs: Array.isArray(form.specs) ? form.specs.filter((s) => s.label?.trim() || s.value?.trim()) : [],
        dimensions_images,
        dimensions_text: form.dimensions_text?.trim() ? form.dimensions_text.trim() : null,
        documents: Array.isArray(form.documents)
          ? form.documents
              .map((d) => ({ ...d, label: d.label?.trim(), url: d.url?.trim() }))
              .filter((d) => d.label && d.url)
          : [],
      };

      if (!payload.id || !payload.brand || !payload.name) {
        throw new Error("ID, Brand și Name sunt obligatorii.");
      }

      const { error } = await supabase.from("shop_products").upsert(payload);
      if (error) throw error;

      setGalleryFiles([]);
      setDimFiles([]);
      setManualImgUrl("");
      setManualDimUrl("");

      await load();
    } catch (e: any) {
      setErr(e.message || "Eroare la salvare.");
    } finally {
      setBusy(false);
    }
  };

  const genIdFromName = () => {
    const base = slugify(`${form.brand} ${form.name}`.trim());
    setForm((p) => ({ ...p, id: base }));
  };

  const addSpecRow = () => setForm((p) => ({ ...p, specs: [...(p.specs ?? []), { label: "", value: "" }] }));
  const removeSpecRow = (i: number) =>
    setForm((p) => ({ ...p, specs: (p.specs ?? []).filter((_, idx) => idx !== i) }));

  const addDocRow = () =>
    setForm((p) => ({
      ...p,
      documents: [...(p.documents ?? []), { label: "", url: "", type: "catalog" }],
    }));
  const removeDocRow = (i: number) =>
    setForm((p) => ({ ...p, documents: (p.documents ?? []).filter((_, idx) => idx !== i) }));

const toggleSolution = (categoryId: string) => {
  const cat = categories.find((c) => c.id === categoryId);
  const label = (cat?.label ?? "").trim();
  if (!label) return;

  setForm((p) => {
    const cur = safeArr(p.solutions);

    // ștergem atât label-ul cât și uuid-ul (dacă există), ca să nu rămână dubluri amestecate
    const cleaned = cur.filter((x) => x !== label && x !== categoryId);

    // dacă era activ (prin label sau prin id), îl scoatem; altfel îl adăugăm ca LABEL
    const wasActive = cur.includes(label) || cur.includes(categoryId);
    return wasActive
      ? { ...p, solutions: cleaned }
      : { ...p, solutions: [...cleaned, label] };
  });
};

  const addManualImage = (kind: "images" | "dimensions_images") => {
    const url = (kind === "images" ? manualImgUrl : manualDimUrl).trim();
    if (!url) return;

    setForm((p) => {
      const next = uniq([...(safeArr((p as any)[kind])), url]);
      return { ...p, [kind]: next } as any;
    });

    if (kind === "images") setManualImgUrl("");
    else setManualDimUrl("");
  };

  const removeImage = async (kind: "images" | "dimensions_images", url: string) => {
    // 1) scoatem din DB array (instant UI)
    setForm((p) => {
      const next = safeArr((p as any)[kind]).filter((x) => x !== url);
      return { ...p, [kind]: next } as any;
    });

    // 2) optional: ștergem și din storage (doar dacă e url public din bucket)
    // dacă vrei să NU ștergi fișierul, poți comenta blocul de mai jos.
    try {
      const path = parseStoragePathFromPublicUrl(url);
      if (!path) return;

      // confirm extra (safety)
      const ok = confirm("Vrei să ștergi și fișierul din Storage? (OK = delete file, Cancel = doar scoate din produs)");
      if (!ok) return;

      const { error } = await supabase.storage.from(BUCKET).remove([path]);
      if (error) console.warn("Storage remove error:", error.message);
    } catch (e) {
      console.warn("Storage remove error:", e);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-8">
      {/* LEFT: FORM */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="text-lg font-semibold">Adaugă / Editează produs</div>
          <button
            onClick={resetForm}
            className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
          >
            New
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {/* ID */}
          <div className="flex gap-2">
            <input
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
              placeholder="ID (slug) ex: click-it-ambient-12w"
              value={form.id}
              onChange={(e) => setForm((p) => ({ ...p, id: e.target.value }))}
            />
            <button
              type="button"
              onClick={genIdFromName}
              className="shrink-0 rounded-xl bg-white/10 px-3 py-3 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
              title="Generate slug din Brand + Name"
            >
              Gen
            </button>
          </div>

          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Brand"
            value={form.brand}
            onChange={(e) => setForm((p) => ({ ...p, brand: e.target.value }))}
          />

          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          />

          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Code"
            value={form.code}
            onChange={(e) => setForm((p) => ({ ...p, code: e.target.value }))}
          />

          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Subtitle (opțional)"
            value={form.subtitle ?? ""}
            onChange={(e) => setForm((p) => ({ ...p, subtitle: e.target.value }))}
          />

          <textarea
            className="w-full min-h-[140px] rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Description"
            value={form.description ?? ""}
            onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
          />

          {/* Solutions/Categories */}
          <div className="mt-2">
            <div className="text-sm text-white/70 mb-2">Categorii (solutions)</div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = (form.solutions ?? []).includes(c.label) || (form.solutions ?? []).includes(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => toggleSolution(c.id)}
                    className={`rounded-full px-3 py-1 text-xs transition duration-300 ease-in-out ${
                      active ? "bg-white text-black" : "bg-white/10 hover:bg-white/15 text-white"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
              {!categories.length ? (
                <div className="text-white/60 text-sm">Nu există categorii încă.</div>
              ) : null}
            </div>
          </div>

          {/* Gallery Images */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold">Imagini produs (gallery)</div>

            <div className="mt-3">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setGalleryFiles(Array.from(e.target.files ?? []))}
              />
              {galleryFiles.length ? (
                <div className="mt-2 text-white/60 text-xs">{galleryFiles.length} fișiere selectate</div>
              ) : null}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                placeholder="Sau lipește un URL manual și apasă Add"
                value={manualImgUrl}
                onChange={(e) => setManualImgUrl(e.target.value)}
              />
              <button
                type="button"
                onClick={() => addManualImage("images")}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
              >
                Add
              </button>
            </div>

            {(form.images?.length ?? 0) > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {safeArr(form.images).map((url) => (
                  <div
                    key={url}
                    className="relative w-[92px] h-[72px] rounded-xl overflow-hidden border border-white/10 bg-black/30"
                  >
                    <img src={url} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage("images", url)}
                      className="absolute top-1 right-1 rounded-lg bg-black/60 px-2 py-1 text-xs hover:bg-black/80"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 text-white/60 text-sm">Nu există imagini încă.</div>
            )}
          </div>

          {/* Dimensions */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold">Dimensiuni</div>

            <div className="mt-3">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setDimFiles(Array.from(e.target.files ?? []))}
              />
              {dimFiles.length ? (
                <div className="mt-2 text-white/60 text-xs">{dimFiles.length} fișiere selectate</div>
              ) : null}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                placeholder="URL dimensiune manual (opțional)"
                value={manualDimUrl}
                onChange={(e) => setManualDimUrl(e.target.value)}
              />
              <button
                type="button"
                onClick={() => addManualImage("dimensions_images")}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
              >
                Add
              </button>
            </div>

            <textarea
              className="mt-3 w-full min-h-[90px] rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
              placeholder="dimensions_text (opțional)"
              value={form.dimensions_text ?? ""}
              onChange={(e) => setForm((p) => ({ ...p, dimensions_text: e.target.value }))}
            />

            {(form.dimensions_images?.length ?? 0) > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {safeArr(form.dimensions_images).map((url) => (
                  <div
                    key={url}
                    className="relative w-[92px] h-[72px] rounded-xl overflow-hidden border border-white/10 bg-black/30"
                  >
                    <img src={url} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage("dimensions_images", url)}
                      className="absolute top-1 right-1 rounded-lg bg-black/60 px-2 py-1 text-xs hover:bg-black/80"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 text-white/60 text-sm">Nu există imagini de dimensiuni încă.</div>
            )}
          </div>

          {/* Specs */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Specificații (specs)</div>
              <button
                type="button"
                onClick={addSpecRow}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
              >
                + Add row
              </button>
            </div>

            {(form.specs?.length ?? 0) > 0 ? (
              <div className="mt-3 space-y-2">
                {(form.specs ?? []).map((s, i) => (
                  <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                    <input
                      className="rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                      placeholder="Label"
                      value={s.label}
                      onChange={(e) =>
                        setForm((p) => {
                          const next = [...(p.specs ?? [])];
                          next[i] = { ...next[i], label: e.target.value };
                          return { ...p, specs: next };
                        })
                      }
                    />
                    <input
                      className="rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                      placeholder="Value"
                      value={s.value}
                      onChange={(e) =>
                        setForm((p) => {
                          const next = [...(p.specs ?? [])];
                          next[i] = { ...next[i], value: e.target.value };
                          return { ...p, specs: next };
                        })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => removeSpecRow(i)}
                      className="rounded-xl bg-red-500/20 px-3 py-2 text-sm hover:bg-red-500/30 transition duration-300 ease-in-out"
                      title="Remove row"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 text-white/60 text-sm">Nu există specificații încă.</div>
            )}
          </div>

          {/* Documents */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Documente (documents)</div>
              <button
                type="button"
                onClick={addDocRow}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
              >
                + Add doc
              </button>
            </div>

            {(form.documents?.length ?? 0) > 0 ? (
              <div className="mt-3 space-y-2">
                {(form.documents ?? []).map((d, i) => (
                  <div key={i} className="grid grid-cols-1 gap-2 rounded-xl border border-white/10 bg-black/20 p-3">
                    <div className="grid grid-cols-[1fr_auto] gap-2">
                      <input
                        className="rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                        placeholder="Label (ex: Fișă tehnică)"
                        value={d.label}
                        onChange={(e) =>
                          setForm((p) => {
                            const next = [...(p.documents ?? [])];
                            next[i] = { ...next[i], label: e.target.value };
                            return { ...p, documents: next };
                          })
                        }
                      />
                      <select
                        className="rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                        value={d.type}
                        onChange={(e) =>
                          setForm((p) => {
                            const next = [...(p.documents ?? [])];
                            next[i] = { ...next[i], type: e.target.value as DocType };
                            return { ...p, documents: next };
                          })
                        }
                      >
                        <option value="catalog">catalog</option>
                        <option value="datasheet">datasheet</option>
                        <option value="bim">bim</option>
                        <option value="cad">cad</option>
                        <option value="other">other</option>
                      </select>
                    </div>

                    <input
                      className="rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                      placeholder="URL document"
                      value={d.url}
                      onChange={(e) =>
                        setForm((p) => {
                          const next = [...(p.documents ?? [])];
                          next[i] = { ...next[i], url: e.target.value };
                          return { ...p, documents: next };
                        })
                      }
                    />

                    <button
                      type="button"
                      onClick={() => removeDocRow(i)}
                      className="self-start rounded-xl bg-red-500/20 px-3 py-2 text-sm hover:bg-red-500/30 transition duration-300 ease-in-out"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 text-white/60 text-sm">Nu există documente încă.</div>
            )}
          </div>

          {err ? <div className="text-red-400 text-sm">{err}</div> : null}

          <button
            disabled={busy}
            onClick={save}
            className="w-full rounded-xl bg-white text-black px-4 py-3 font-semibold hover:opacity-90 transition duration-300 ease-in-out disabled:opacity-60"
          >
            {busy ? "Saving…" : "Save Product"}
          </button>
        </div>
      </div>

      {/* RIGHT: LIST */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="text-lg font-semibold">Produse</div>
          <div className="flex gap-2">
            <button
              onClick={load}
              className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
            >
              Refresh
            </button>
            <input
              className="rounded-xl bg-black/40 border border-white/10 px-4 py-2 outline-none text-sm"
              placeholder="Search…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="h-[52px] w-[72px] rounded-xl overflow-hidden border border-white/10 bg-black/30 shrink-0">
                  {safeArr(p.images)[0] ? (
                    <img src={safeArr(p.images)[0]} className="w-full h-full object-cover" />
                  ) : null}
                </div>

                <div className="min-w-0">
                  <div className="text-white font-semibold truncate">{p.name}</div>
                  <div className="text-white/60 text-xs truncate">
                    {p.brand} • {p.id}
                  </div>
                  {safeArr(p.solutions).length ? (
                    <div className="mt-1 text-white/60 text-xs truncate">
                      {safeArr(p.solutions).join(", ")}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => edit(p)}
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
                >
                  Edit
                </button>
                <button
                  onClick={() => del(p.id)}
                  className="rounded-xl bg-red-500/20 px-3 py-2 text-sm hover:bg-red-500/30 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {!filtered.length ? <div className="text-white/60 text-sm">No results.</div> : null}
        </div>
      </div>
    </div>
  );
}