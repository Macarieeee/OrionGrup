import { config } from "dotenv";
config({ path: ".env.local" });
import { createClient } from "@supabase/supabase-js";

// IMPORTANT: pune aici importul către fișierul tău
import { SHOP_CATEGORIES, SHOP_PRODUCTS } from "../src/data/shopCatalog2";

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRole) {
  throw new Error("Lipsesc VITE_SUPABASE_URL sau SUPABASE_SERVICE_ROLE_KEY din .env.local");
}

const supabase = createClient(supabaseUrl, serviceRole);

async function main() {
  // 1) Categories
  const categoriesPayload = SHOP_CATEGORIES.map((c: any) => ({
    label: c.label,
    image_url: c.imageUrl,
  }));

  const { error: catErr } = await supabase
    .from("shop_categories")
    .upsert(categoriesPayload, { onConflict: "label" });

  if (catErr) throw catErr;

  // 2) Products
  const productsPayload = SHOP_PRODUCTS.map((p: any) => ({
    id: p.id,
    brand: p.brand,
    name: p.name,
    code: p.code,
    subtitle: p.subtitle ?? null,
    description: p.description,

    images: p.images ?? [],
    solutions: p.solutions ?? [],

    specs: p.specs ?? [],
    dimensions_images: p.dimensions?.images ?? [],
    dimensions_text: p.dimensions?.text ?? null,

    documents: p.documents ?? [],
  }));

  const { error: prodErr } = await supabase
    .from("shop_products")
    .upsert(productsPayload, { onConflict: "id" });

  if (prodErr) throw prodErr;

  console.log("✅ Seed done:", {
    categories: categoriesPayload.length,
    products: productsPayload.length,
  });
}

main().catch((e) => {
  console.error("❌ Seed failed:", e);
  process.exit(1);
});