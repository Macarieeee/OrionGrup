import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type CategoryRow = { id: string; label: string; image_url: string | null };

export default function CategoriesAdmin() {
  const [items, setItems] = useState<CategoryRow[]>([]);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [form, setForm] = useState<CategoryRow>({ id: "", label: "", image_url: "" });
  const [file, setFile] = useState<File | null>(null);

  const load = async () => {
    setBusy(true);
    setErr(null);
    const { data, error } = await supabase
      .from("shop_categories")
      .select("id,label,image_url")
      .order("label", { ascending: true });
    setBusy(false);
    if (error) return setErr(error.message);
    setItems((data ?? []) as any);
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((x) => (x.label || "").toLowerCase().includes(s) || x.id.includes(s));
  }, [items, q]);

  const uploadCategoryImage = async () => {
    if (!file) return form.image_url;

    const ext = file.name.split(".").pop() || "jpg";
    const path = `categories/${crypto.randomUUID()}.${ext}`;

    const { error: upErr } = await supabase.storage.from("shop").upload(path, file, {
      upsert: true,
      cacheControl: "3600",
      contentType: file.type,
    });
    if (upErr) throw upErr;

    const { data } = supabase.storage.from("shop").getPublicUrl(path);
    return data.publicUrl;
  };

const save = async () => {
  setBusy(true);
  setErr(null);
  try {
    const image_url = await uploadCategoryImage();

    // dacă ai ID -> e edit, facem UPDATE
    if (form.id) {
      const { error } = await supabase
        .from("shop_categories")
        .update({ label: form.label, image_url })
        .eq("id", form.id);

      if (error) throw error;
    } else {
      // dacă NU ai ID -> e create, NU trimitem id deloc (DB generează UUID)
      const { error } = await supabase
        .from("shop_categories")
        .insert({ label: form.label, image_url });

      if (error) throw error;
    }

    setForm({ id: "", label: "", image_url: "" });
    setFile(null);
    await load();
  } catch (e: any) {
    setErr(e.message || "Eroare la salvare.");
  } finally {
    setBusy(false);
  }
};

  const edit = (c: CategoryRow) => {
    setForm(c);
    setFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const del = async (id: string) => {
    if (!confirm("Ștergi categoria?")) return;
    setBusy(true);
    setErr(null);
    const { error } = await supabase.from("shop_categories").delete().eq("id", id);
    setBusy(false);
    if (error) setErr(error.message);
    else load();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="text-lg font-semibold">Adaugă / Editează categorie</div>

        <div className="mt-4 space-y-3">
          {/* {form.id ? (
  <div className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white/70">
    UUID categorie: <span className="text-white">{form.id}</span>
  </div>
) : (
  <div className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white/70">
    ID-ul se generează automat (UUID)
  </div>
)} */}
          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"
            placeholder="Label ex: Click It"
            value={form.label}
            onChange={(e) => setForm((p) => ({ ...p, label: e.target.value }))}
          />

          <div className="text-sm text-white/70">Imagine categorie</div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />

          {form.image_url ? (
            <img src={form.image_url} className="mt-2 w-full rounded-xl border border-white/10" />
          ) : null}

          {err ? <div className="text-red-400 text-sm">{err}</div> : null}

          <button
            disabled={busy || !form.label.trim()}
            onClick={save}
            className="w-full rounded-xl bg-white text-black px-4 py-3 font-semibold hover:opacity-90 transition duration-300 ease-in-out disabled:opacity-60"
          >
            {busy ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="text-lg font-semibold">Categorii</div>
          <input
            className="rounded-xl bg-black/40 border border-white/10 px-4 py-2 outline-none text-sm"
            placeholder="Search…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <div className="mt-4 space-y-3">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <div className="min-w-0">
                <div className="text-white font-semibold truncate">{c.label}</div>
                <div className="text-white/60 text-xs truncate">{c.id}</div>
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => edit(c)}
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15 transition duration-300 ease-in-out"
                >
                  Edit
                </button>
                <button
                  onClick={() => del(c.id)}
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