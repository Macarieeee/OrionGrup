import fs from "fs";
import * as cheerio from "cheerio";
import slugify from "slugify";

const BASE_URL = "https://electron.gr";
const START_URLS = [
  "https://electron.gr/en/products/ceiling-recessed",
];

const OUTPUT_SQL = "electron-products-import.sql";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function clean(text = "") {
  return text.replace(/\s+/g, " ").trim();
}

function makeSlug(text = "") {
  return slugify(text, {
    lower: true,
    strict: true,
    trim: true,
  });
}

function absoluteUrl(url) {
  if (!url) return "";
  return new URL(url, BASE_URL).href;
}

function sqlString(value) {
  if (value === null || value === undefined) return "null";
  return `'${String(value).replace(/'/g, "''")}'`;
}

function sqlTextArray(values = []) {
  const unique = [...new Set(values.filter(Boolean))];

  if (!unique.length) return "'{}'::text[]";

  return `array[${unique.map(sqlString).join(", ")}]::text[]`;
}

function sqlJsonb(value) {
  return `${sqlString(JSON.stringify(value ?? []))}::jsonb`;
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed ${response.status}: ${url}`);
  }

  return response.text();
}

async function getProductsFromCategory(categoryUrl) {
  const html = await fetchHtml(categoryUrl);
  const $ = cheerio.load(html);

  const categoryName =
    clean($("h1").first().text()) ||
    categoryUrl.split("/").pop().replaceAll("-", " ");

  const products = [];

  let currentFamily = "";

  $("body")
    .find("h1, h2, h3, a")
    .each((_, el) => {
      const tag = el.tagName?.toLowerCase();
      const text = clean($(el).text());

      if (!text) return;

      if (["h1", "h2", "h3"].includes(tag)) {
        currentFamily = text;
        return;
      }

      if (tag === "a") {
        const href = $(el).attr("href");

        if (!href) return;

        const fullUrl = absoluteUrl(href);

        if (fullUrl.includes("/en/catalog/product/view/")) {
          products.push({
            name: text,
            sourceUrl: fullUrl,
            categoryName,
            familyName: currentFamily,
          });
        }
      }
    });

  const unique = new Map();

  for (const product of products) {
    unique.set(product.sourceUrl, product);
  }

  return [...unique.values()];
}

async function scrapeProduct(product, index) {
  const html = await fetchHtml(product.sourceUrl);
  const $ = cheerio.load(html);

  const title = clean($("h1").first().text()) || product.name;
  const id = `electron-${makeSlug(title)}`;

  const bodyText = clean($("body").text());

  const productImages = [];

  $("img").each((_, img) => {
    const src =
      $(img).attr("src") ||
      $(img).attr("data-src") ||
      $(img).attr("data-original");

    if (!src) return;

    const full = absoluteUrl(src);

    const lower = full.toLowerCase();

    if (
      lower.includes("/catalog/product") ||
      lower.includes("/media/") ||
      lower.includes(makeSlug(title).split("-")[0])
    ) {
      productImages.push(full);
    }
  });

  const documents = [];

  $("a").each((_, a) => {
    const href = $(a).attr("href");
    const label = clean($(a).text());

    if (!href) return;

    const full = absoluteUrl(href);
    const lower = full.toLowerCase();

    if (
      lower.includes(".pdf") ||
      lower.includes(".zip") ||
      lower.includes(".dwg") ||
      lower.includes(".ies")
    ) {
      documents.push({
        label: label || full.split("/").pop(),
        url: full,
      });
    }
  });

  const bulletSpecs = [];

  $("li").each((_, li) => {
    const text = clean($(li).text());

    if (
      text.length > 3 &&
      text.length < 250 &&
      !text.toLowerCase().includes("add to") &&
      !text.toLowerCase().includes("back to")
    ) {
      bulletSpecs.push(text);
    }
  });

  const tables = [];

  $("table").each((_, table) => {
    const rows = [];

    $(table)
      .find("tr")
      .each((_, tr) => {
        const cells = $(tr)
          .find("th, td")
          .map((_, cell) => clean($(cell).text()))
          .get()
          .filter(Boolean);

        if (cells.length) rows.push(cells);
      });

    if (rows.length) tables.push(rows);
  });

  const specs = {
    source_url: product.sourceUrl,
    category: product.categoryName,
    family: product.familyName,
    bullets: [...new Set(bulletSpecs)],
    tables,
  };

  const description =
    [...new Set(bulletSpecs)].slice(0, 8).join("\n") ||
    `Produs Electron din gama ${product.familyName || product.categoryName}.`;

  const code =
    title.match(/[A-Z0-9]+(?:[-/ ][A-Z0-9]+)+/i)?.[0] ||
    id;

  return {
    id,
    brand: "Electron",
    name: title,
    code,
    subtitle: [product.categoryName, product.familyName].filter(Boolean).join(" / "),
    description,
    images: productImages,
    solutions: [product.categoryName, product.familyName].filter(Boolean),
    specs,
    dimensions_images: [],
    dimensions_text: null,
    documents,
    display_order: index + 1,
    price: null,
    currency: "RON",
  };
}

function productToSql(product) {
  return `
insert into public.shop_products (
  id,
  brand,
  name,
  code,
  subtitle,
  description,
  images,
  solutions,
  specs,
  dimensions_images,
  dimensions_text,
  documents,
  display_order,
  price,
  currency
)
values (
  ${sqlString(product.id)},
  ${sqlString(product.brand)},
  ${sqlString(product.name)},
  ${sqlString(product.code)},
  ${sqlString(product.subtitle)},
  ${sqlString(product.description)},
  ${sqlTextArray(product.images)},
  ${sqlTextArray(product.solutions)},
  ${sqlJsonb(product.specs)},
  ${sqlTextArray(product.dimensions_images)},
  ${sqlString(product.dimensions_text)},
  ${sqlJsonb(product.documents)},
  ${product.display_order},
  null,
  ${sqlString(product.currency)}
)
on conflict (id) do update set
  brand = excluded.brand,
  name = excluded.name,
  code = excluded.code,
  subtitle = excluded.subtitle,
  description = excluded.description,
  images = excluded.images,
  solutions = excluded.solutions,
  specs = excluded.specs,
  dimensions_images = excluded.dimensions_images,
  dimensions_text = excluded.dimensions_text,
  documents = excluded.documents,
  display_order = excluded.display_order,
  price = excluded.price,
  currency = excluded.currency,
  updated_at = now();
`.trim();
}

function categoryToSql(label, imageUrl) {
  return `
insert into public.shop_categories (
  label,
  image_url
)
values (
  ${sqlString(label)},
  ${sqlString(imageUrl || "https://electron.gr/")}
)
on conflict (label) do update set
  image_url = excluded.image_url;
`.trim();
}

async function main() {
  const allProducts = [];

  for (const categoryUrl of START_URLS) {
    console.log(`Reading category: ${categoryUrl}`);

    const products = await getProductsFromCategory(categoryUrl);

    console.log(`Found ${products.length} products`);

    for (const product of products) {
      const index = allProducts.length;

      try {
        console.log(`[${index + 1}] ${product.name}`);

        const fullProduct = await scrapeProduct(product, index);
        allProducts.push(fullProduct);

        await sleep(600);
      } catch (error) {
        console.error(`Error on ${product.sourceUrl}:`, error.message);
      }
    }
  }

  const categories = new Map();

  for (const product of allProducts) {
    for (const label of product.solutions) {
      if (!categories.has(label)) {
        categories.set(label, product.images[0] || "");
      }
    }
  }

  const sql = [
    "-- Auto-generated Electron import",
    "-- Review before running in Supabase SQL Editor",
    "",
    "begin;",
    "",
    ...[...categories.entries()].map(([label, imageUrl]) =>
      categoryToSql(label, imageUrl)
    ),
    "",
    ...allProducts.map(productToSql),
    "",
    "commit;",
  ].join("\n\n");

  fs.writeFileSync(OUTPUT_SQL, sql, "utf8");

  console.log("");
  console.log(`Done. Generated: ${OUTPUT_SQL}`);
  console.log(`Products: ${allProducts.length}`);
  console.log(`Categories: ${categories.size}`);
}

main();