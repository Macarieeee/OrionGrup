import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type PortfolioCategory = {
  id: string;
  name: string;
  slug?: string | null;
};

type PortfolioProjectDb = {
  id?: string;
  slug: string;
  title: string;
  badge_label: string | null;
  portfolio_description: string | null;
  main_description: string | null;
  cover_image: string | null;
  main_images: string[] | null;
  site_title: string | null;
  site_description: string | null;
  site_images: string[] | null;
  category_id: string | null;
  display_order: number | null;
  is_active: boolean | null;
  created_at?: string | null;
};

const BUCKET = "portfolio";

const emptyForm: PortfolioProjectDb = {
  slug: "",
  title: "",
  badge_label: "",
  portfolio_description: "",
  main_description: "",
  cover_image: "",
  main_images: [],
  site_title: "De pe șantier la realitate",
  site_description: "",
  site_images: [],
  category_id: null,
  display_order: null,
  is_active: true,
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/ă/g, "a")
    .replace(/â/g, "a")
    .replace(/î/g, "i")
    .replace(/ș/g, "s")
    .replace(/ş/g, "s")
    .replace(/ț/g, "t")
    .replace(/ţ/g, "t")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function safeArr(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}

function uniq(arr: string[]) {
  return Array.from(new Set(arr.map((x) => x.trim()).filter(Boolean)));
}

function parseStoragePathFromPublicUrl(url: string): string | null {
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const idx = url.indexOf(marker);

  if (idx === -1) return null;

  return url.slice(idx + marker.length);
}

async function uploadMany(files: File[], folder: string) {
  const urls: string[] = [];

  for (const file of files) {
    const ext = file.name.split(".").pop() || "jpg";
    const path = `${folder}/${crypto.randomUUID()}.${ext}`;

    const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
      upsert: true,
      cacheControl: "3600",
      contentType: file.type,
    });

    if (error) throw error;

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    urls.push(data.publicUrl);
  }

  return urls;
}

export default function PortfolioProjectsAdmin() {
  const [items, setItems] = useState<PortfolioProjectDb[]>([]);
  const [categories, setCategories] = useState<PortfolioCategory[]>([]);
  const [form, setForm] = useState<PortfolioProjectDb>(emptyForm);
  const getProjectUrl = (slug: string) => {
    const base = import.meta.env.BASE_URL || "/";
    return `${base.replace(/\/$/, "")}/portofoliu/${slug}`;
  };
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [mainFiles, setMainFiles] = useState<File[]>([]);
  const [siteFiles, setSiteFiles] = useState<File[]>([]);

  const [manualCoverUrl, setManualCoverUrl] = useState("");
  const [manualMainUrl, setManualMainUrl] = useState("");
  const [manualSiteUrl, setManualSiteUrl] = useState("");

  const load = async () => {
    setBusy(true);
    setErr(null);

    const [{ data: projects, error: projectsErr }, { data: cats, error: catsErr }] =
      await Promise.all([
        supabase
          .from("portfolio_projects")
          .select(
            "id,slug,title,badge_label,portfolio_description,main_description,cover_image,main_images,site_title,site_description,site_images,category_id,display_order,is_active,created_at"
          )
          .order("display_order", { ascending: true, nullsFirst: false })
          .order("created_at", { ascending: true }),
        supabase
          .from("portfolio_categories")
          .select("id,name,slug")
          .order("display_order", { ascending: true, nullsFirst: false })
          .order("name", { ascending: true }),
      ]);

    setBusy(false);

    if (projectsErr) return setErr(projectsErr.message);
    if (catsErr) return setErr(catsErr.message);

    setItems((projects ?? []) as PortfolioProjectDb[]);
    setCategories((cats ?? []) as PortfolioCategory[]);
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const search = q.trim().toLowerCase();

    if (!search) return items;

    return items.filter((item) => {
      const haystack = `${item.title} ${item.slug} ${item.badge_label ?? ""}`.toLowerCase();
      return haystack.includes(search);
    });
  }, [items, q]);

  const resetForm = () => {
    setForm(emptyForm);
    setCoverFile(null);
    setMainFiles([]);
    setSiteFiles([]);
    setManualCoverUrl("");
    setManualMainUrl("");
    setManualSiteUrl("");
    setErr(null);
  };

  const edit = (project: PortfolioProjectDb) => {
    setForm({
      id: project.id,
      slug: project.slug ?? "",
      title: project.title ?? "",
      badge_label: project.badge_label ?? "",
      portfolio_description: project.portfolio_description ?? "",
      main_description: project.main_description ?? "",
      cover_image: project.cover_image ?? "",
      main_images: safeArr(project.main_images),
      site_title: project.site_title ?? "De pe șantier la realitate",
      site_description: project.site_description ?? "",
      site_images: safeArr(project.site_images),
      category_id: project.category_id ?? null,
      display_order: project.display_order ?? null,
      is_active: project.is_active ?? true,
      created_at: project.created_at ?? null,
    });

    setCoverFile(null);
    setMainFiles([]);
    setSiteFiles([]);
    setManualCoverUrl("");
    setManualMainUrl("");
    setManualSiteUrl("");
    setErr(null);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const removeProject = async (id?: string) => {
    if (!id) return;
    if (!confirm("Ștergi proiectul?")) return;

    setBusy(true);
    setErr(null);

    const { error } = await supabase.from("portfolio_projects").delete().eq("id", id);

    setBusy(false);

    if (error) setErr(error.message);
    else {
      await load();
      resetForm();
    }
  };

  const genSlugFromTitle = () => {
    setForm((prev) => ({ ...prev, slug: slugify(prev.title) }));
  };

  const addManualImage = (kind: "cover" | "main" | "site") => {
    if (kind === "cover") {
      const url = manualCoverUrl.trim();
      if (!url) return;

      setForm((prev) => ({ ...prev, cover_image: url }));
      setManualCoverUrl("");
      return;
    }

    if (kind === "main") {
      const url = manualMainUrl.trim();
      if (!url) return;

      setForm((prev) => ({ ...prev, main_images: uniq([...safeArr(prev.main_images), url]) }));
      setManualMainUrl("");
      return;
    }

    const url = manualSiteUrl.trim();
    if (!url) return;

    setForm((prev) => ({ ...prev, site_images: uniq([...safeArr(prev.site_images), url]) }));
    setManualSiteUrl("");
  };

  const removeImage = async (kind: "cover" | "main_images" | "site_images", url: string) => {
    if (kind === "cover") {
      setForm((prev) => ({ ...prev, cover_image: "" }));
    } else {
      setForm((prev) => {
        const next = safeArr((prev as any)[kind]).filter((item) => item !== url);
        return { ...prev, [kind]: next };
      });
    }

    try {
      const path = parseStoragePathFromPublicUrl(url);
      if (!path) return;

      const ok = confirm(
        "Vrei să ștergi și fișierul din Storage? OK = șterge fișierul, Cancel = doar scoate poza din proiect."
      );

      if (!ok) return;

      const { error } = await supabase.storage.from(BUCKET).remove([path]);
      if (error) console.warn("Storage remove error:", error.message);
    } catch (e) {
      console.warn("Storage remove error:", e);
    }
  };

  const save = async () => {
    setBusy(true);
    setErr(null);

    try {
      let cover_image = form.cover_image?.trim() || "";
      let main_images = safeArr(form.main_images);
      let site_images = safeArr(form.site_images);

      if (coverFile) {
        const uploaded = await uploadMany([coverFile], "covers");
        cover_image = uploaded[0] ?? cover_image;
      }

      if (mainFiles.length) {
        const uploaded = await uploadMany(mainFiles, "main");
        main_images = uniq([...main_images, ...uploaded]);
      }

      if (siteFiles.length) {
        const uploaded = await uploadMany(siteFiles, "site");
        site_images = uniq([...site_images, ...uploaded]);
      }

      const payload = {
        slug: form.slug.trim(),
        title: form.title.trim(),
        badge_label: form.badge_label?.trim() ? form.badge_label.trim() : null,
        portfolio_description: form.portfolio_description?.trim()
          ? form.portfolio_description.trim()
          : null,
        main_description: form.main_description?.trim() ? form.main_description.trim() : null,
        cover_image: cover_image || null,
        main_images,
        site_title: form.site_title?.trim() ? form.site_title.trim() : "De pe șantier la realitate",
        site_description: form.site_description?.trim() ? form.site_description.trim() : null,
        site_images,
        category_id: form.category_id || null,
        display_order:
          form.display_order === null || form.display_order === undefined
            ? null
            : Number(form.display_order),
        is_active: form.is_active ?? true,
      };

      if (!payload.slug || !payload.title) {
        throw new Error("Slug și titlul sunt obligatorii.");
      }

      if (!payload.cover_image && main_images.length > 0) {
        payload.cover_image = main_images[0];
      }

      if (form.id) {
        const { error } = await supabase
          .from("portfolio_projects")
          .update(payload)
          .eq("id", form.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("portfolio_projects").insert(payload);

        if (error) throw error;
      }

      setCoverFile(null);
      setMainFiles([]);
      setSiteFiles([]);
      setManualCoverUrl("");
      setManualMainUrl("");
      setManualSiteUrl("");

      await load();
    } catch (e: any) {
      setErr(e.message || "Eroare la salvarea proiectului.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-8">
      {/* LEFT: FORM */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Adaugă / Editează proiect</div>
            <p className="mt-1 text-xs text-white/50">
              Datele sunt salvate în tabela portfolio_projects.
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
          <div className="flex gap-2">
            <input
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
              placeholder="Slug ex: biblioteca-centrala-universitara"
              value={form.slug}
              onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
            />

            <button
              type="button"
              onClick={genSlugFromTitle}
              className="shrink-0 rounded-xl bg-white/10 px-3 py-3 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
              title="Generează slug din titlu"
            >
              Gen
            </button>
          </div>

          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Titlu proiect"
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
          />

          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Badge ex: Indoor Lighting"
            value={form.badge_label ?? ""}
            onChange={(e) => setForm((prev) => ({ ...prev, badge_label: e.target.value }))}
          />

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_150px] gap-2">
            <select
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
              value={form.category_id ?? ""}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category_id: e.target.value || null }))
              }
            >
              <option value="">Fără categorie</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
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

          <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80">
            <input
              type="checkbox"
              checked={form.is_active ?? true}
              onChange={(e) => setForm((prev) => ({ ...prev, is_active: e.target.checked }))}
              className="h-4 w-4 accent-white"
            />
            Proiect activ / vizibil pe site
          </label>

          <textarea
            className="w-full min-h-[110px] rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Descriere scurtă pentru pagina Portofoliu"
            value={form.portfolio_description ?? ""}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, portfolio_description: e.target.value }))
            }
          />

          <textarea
            className="w-full min-h-[130px] rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Descriere principală pentru pagina proiectului"
            value={form.main_description ?? ""}
            onChange={(e) => setForm((prev) => ({ ...prev, main_description: e.target.value }))}
          />

          {/* COVER */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold">Imagine cover pentru Portofoliu</div>
            <p className="mt-1 text-xs text-white/50">
              Dacă o lași goală, se folosește automat prima imagine principală.
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
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                placeholder="Sau lipește URL cover"
                value={manualCoverUrl}
                onChange={(e) => setManualCoverUrl(e.target.value)}
              />
              <button
                type="button"
                onClick={() => addManualImage("cover")}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
              >
                Add
              </button>
            </div>

            {form.cover_image ? (
              <div className="relative mt-4 h-[120px] overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <img src={form.cover_image} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage("cover", form.cover_image || "")}
                  className="absolute right-2 top-2 rounded-lg bg-black/70 px-2 py-1 text-xs hover:bg-black"
                >
                  ✕
                </button>
              </div>
            ) : null}
          </div>

          {/* MAIN IMAGES */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold">Primele poze / galerie principală</div>
            <p className="mt-1 text-xs text-white/50">
              Acestea apar în prima secțiune a paginii de proiect.
            </p>

            <div className="mt-3">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setMainFiles(Array.from(e.target.files ?? []))}
              />
              {mainFiles.length ? (
                <div className="mt-2 text-xs text-white/50">
                  {mainFiles.length} fișiere selectate
                </div>
              ) : null}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                placeholder="Sau lipește URL imagine principală"
                value={manualMainUrl}
                onChange={(e) => setManualMainUrl(e.target.value)}
              />
              <button
                type="button"
                onClick={() => addManualImage("main")}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
              >
                Add
              </button>
            </div>

            <ImageList urls={safeArr(form.main_images)} onRemove={(url) => removeImage("main_images", url)} />
          </div>

          {/* SITE SECTION */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold">Secțiunea „De pe șantier la realitate”</div>

            <input
              className="mt-3 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
              placeholder="Titlu secțiune"
              value={form.site_title ?? ""}
              onChange={(e) => setForm((prev) => ({ ...prev, site_title: e.target.value }))}
            />

            <textarea
              className="mt-3 w-full min-h-[110px] rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
              placeholder="Descriere secțiune"
              value={form.site_description ?? ""}
              onChange={(e) => setForm((prev) => ({ ...prev, site_description: e.target.value }))}
            />

            <div className="mt-3">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setSiteFiles(Array.from(e.target.files ?? []))}
              />
              {siteFiles.length ? (
                <div className="mt-2 text-xs text-white/50">
                  {siteFiles.length} fișiere selectate
                </div>
              ) : null}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none text-sm"
                placeholder="Sau lipește URL imagine șantier/final"
                value={manualSiteUrl}
                onChange={(e) => setManualSiteUrl(e.target.value)}
              />
              <button
                type="button"
                onClick={() => addManualImage("site")}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
              >
                Add
              </button>
            </div>

            <ImageList urls={safeArr(form.site_images)} onRemove={(url) => removeImage("site_images", url)} />
          </div>

          {err ? <div className="text-sm text-red-400">{err}</div> : null}

          <button
            type="button"
            disabled={busy}
            onClick={save}
            className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black transition duration-300 ease-in-out hover:opacity-90 disabled:opacity-60"
          >
            {busy ? "Saving..." : "Save Project"}
          </button>
        </div>
      </div>

      {/* RIGHT: LIST */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">Proiecte</div>
            <div className="text-xs text-white/50">{items.length} proiecte în total</div>
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
          {filtered.map((project) => (
            <div
              key={project.id ?? project.slug}
              className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="h-[64px] w-[92px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                  {project.cover_image || safeArr(project.main_images)[0] ? (
                    <img
                      src={project.cover_image || safeArr(project.main_images)[0]}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>

                <div className="min-w-0">
                  <div className="truncate font-semibold text-white">{project.title}</div>
                  <div className="truncate text-xs text-white/60">/{project.slug}</div>
                  <div className="text-xs text-white/50">
                    Ordine: {project.display_order ?? "nesetată"} •{" "}
                    {project.is_active ? "activ" : "inactiv"}
                  </div>
                  <div className="truncate text-xs text-white/50">
                    Badge: {project.badge_label || "nesetat"}
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 gap-2">
                <a
                  href={getProjectUrl(project.slug)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
                >
                  View
                </a>

                <button
                  type="button"
                  onClick={() => edit(project)}
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => removeProject(project.id)}
                  className="rounded-xl bg-red-500/20 px-3 py-2 text-sm hover:bg-red-500/30 transition duration-300 ease-in-out"
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

function ImageList({
  urls,
  onRemove,
}: {
  urls: string[];
  onRemove: (url: string) => void;
}) {
  if (!urls.length) {
    return <div className="mt-3 text-sm text-white/60">Nu există imagini încă.</div>;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {urls.map((url) => (
        <div
          key={url}
          className="relative h-[72px] w-[92px] overflow-hidden rounded-xl border border-white/10 bg-black/30"
        >
          <img src={url} className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={() => onRemove(url)}
            className="absolute right-1 top-1 rounded-lg bg-black/70 px-2 py-1 text-xs hover:bg-black"
            title="Remove"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
