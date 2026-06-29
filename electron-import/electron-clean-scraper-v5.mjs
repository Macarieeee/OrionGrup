import fs from "fs";
import path from "path";
import slugify from "slugify";
import { chromium } from "playwright";

const BASE_URL = "https://electron.gr";
const CATEGORY_URL = "https://electron.gr/en/products/ceiling-recessed";

const OUTPUT_LINKS_JSON = "electron-product-links.json";
const OUTPUT_PREVIEW_JSON = "electron-products-preview.json";
const OUTPUT_SQL = "electron-products-import.sql";
const SQL_PARTS_DIR = "sql-parts";

const LIMIT = Number(process.env.LIMIT || 0);
const MAX_SQL_BYTES = Number(process.env.MAX_SQL_BYTES || 140000);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function clean(text = "") {
  return String(text)
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function makeSlug(text = "") {
  return slugify(clean(text).replace(/Ø/g, "O").replace(/ø/g, "o"), {
    lower: true,
    strict: true,
    trim: true,
  });
}

function unique(values = []) {
  return [...new Set(values.map(clean).filter(Boolean))];
}

function imageKey(url = "") {
  const cleanUrl = String(url).split("?")[0].split("#")[0].toLowerCase();
  const parts = cleanUrl.split("/");
  const file = parts[parts.length - 1] || cleanUrl;

  return file
    .replace(/[_-](small|thumb|thumbnail|large|big|main|base)(?=\.)/g, "")
    .replace(/\.(jpg|jpeg|png|webp)$/i, "");
}

function uniqueImages(values = []) {
  const out = [];
  const seen = new Set();

  for (const value of values) {
    const url = clean(value);

    if (!url) continue;

    const key = imageKey(url);

    if (seen.has(key)) continue;

    seen.add(key);
    out.push(url);
  }

  return out;
}

function sqlString(value) {
  if (value === null || value === undefined) return "null";
  return `'${String(value).replace(/'/g, "''")}'`;
}

function sqlTextArray(values = []) {
  const cleanValues = unique(values);
  if (!cleanValues.length) return "'{}'::text[]";
  return `array[${cleanValues.map(sqlString).join(", ")}]::text[]`;
}

function sqlJsonb(value) {
  return `${sqlString(JSON.stringify(value ?? {}))}::jsonb`;
}

function deriveFamilyFromName(name = "") {
  const first = clean(name).split(/\s+/)[0] || "";
  return first ? first.charAt(0).toUpperCase() + first.slice(1).toLowerCase() : "";
}

function isProductLikeHeading(text = "") {
  const lower = clean(text).toLowerCase();

  if (!lower) return true;

  return (
    lower.includes(" rc ") ||
    lower.includes(" recessed") ||
    lower.includes("in-out") ||
    lower.includes("spot") ||
    /ø\s*\d+/i.test(text) ||
    /\d+\s*x\s*\d+/i.test(text) ||
    /\d+\s*cm/i.test(text)
  );
}

function isJunkLine(line = "") {
  const lower = clean(line).toLowerCase();

  if (!lower) return true;

  const exactJunk = new Set([
    "o",
    "1",
    "*",
    "* * *",
    "image",
    "images",
    "configurator",
    "dimensions",
    "photometric",
    "ordering code",
    "downloads",
    "product tags",
    "add to cart",
    "add to wishlist",
    "add to compare",
    "qty:",
    "copy reset",
    "required fields",
    "back to top",
  ]);

  if (exactJunk.has(lower)) return true;

  const junkParts = [
    "https://",
    "www.",
    "facebook",
    "twitter",
    "privacy policy",
    "terms & conditions",
    "electron sa",
    "tel:",
    "cookie",
    "co-funded",
    "european union",
    "competitiveness",
    "search site",
    "home",
    "profile",
    "projects",
    "news",
    "contact",
    "//<![cdata",
    "class.create",
    "function(",
    "function (",
    "var ",
    "let ",
    "const ",
    "document.",
    "window.",
    "prototype",
    "optionsprice",
    "opconfig",
    "dependentoptions",
    "optionimages",
  ];

  return junkParts.some((part) => lower.includes(part));
}

/**
 * CATEGORY SCRAPER
 *
 * Finds the products from the category page visually.
 * It stores the exact category preview image for every product.
 */
async function collectProductsFromCategory(page) {
  console.log(`Opening category: ${CATEGORY_URL}`);

  await page.goto(CATEGORY_URL, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(1500);

  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const distance = 650;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        total += distance;

        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 120);
    });
  });

  await page.waitForTimeout(800);

  const products = await page.evaluate(() => {
    const BASE = "https://electron.gr";

    function clean(value = "") {
      return String(value).replace(/\s+/g, " ").trim();
    }

    function absoluteUrl(url) {
      try {
        return new URL(url, BASE).href;
      } catch {
        return "";
      }
    }

    function badImage(url = "") {
      const lower = String(url).toLowerCase();
      const badParts = [
        "logo",
        "espa",
        "european",
        "competitiveness",
        "flag",
        "facebook",
        "twitter",
        "instagram",
        "linkedin",
        "youtube",
        "ajax-loader",
        "loader",
        "sprite",
        "icon",
        "placeholder",
        "cookie",
        "captcha",
        "/skin/",
        "/js/",
        "/media/catalog/category/",
      ];

      return !lower || badParts.some((bad) => lower.includes(bad));
    }

    function rectInfo(el) {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);

      if (
        !rect ||
        rect.width <= 3 ||
        rect.height <= 3 ||
        style.display === "none" ||
        style.visibility === "hidden" ||
        Number(style.opacity) === 0
      ) {
        return null;
      }

      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        right: rect.right + window.scrollX,
        bottom: rect.bottom + window.scrollY,
        width: rect.width,
        height: rect.height,
        centerX: rect.left + window.scrollX + rect.width / 2,
        centerY: rect.top + window.scrollY + rect.height / 2,
        area: rect.width * rect.height,
      };
    }

    function isProductLikeHeading(text = "") {
      const lower = clean(text).toLowerCase();

      return (
        lower.includes(" rc ") ||
        lower.includes(" recessed") ||
        lower.includes("in-out") ||
        lower.includes("spot") ||
        /ø\s*\d+/i.test(text) ||
        /\d+\s*x\s*\d+/i.test(text) ||
        /\d+\s*cm/i.test(text)
      );
    }

    function deriveFamilyFromName(name = "") {
      const first = clean(name).split(/\s+/)[0] || "";
      return first ? first.charAt(0).toUpperCase() + first.slice(1).toLowerCase() : "";
    }

    const contentLeft = 170;
    const contentTop = 100;

    const headings = [...document.querySelectorAll("h1,h2,h3")]
      .map((h) => ({
        text: clean(h.textContent || ""),
        rect: rectInfo(h),
      }))
      .filter((h) => h.text && h.rect)
      .filter((h) => h.rect.left >= contentLeft && h.rect.top >= contentTop)
      .filter((h) => !isProductLikeHeading(h.text))
      .filter((h) => !["products", "ceiling recessed"].includes(h.text.toLowerCase()));

    const images = [...document.querySelectorAll("img")]
      .map((img) => {
        const src = absoluteUrl(
          img.currentSrc ||
            img.getAttribute("src") ||
            img.getAttribute("data-src") ||
            img.getAttribute("data-original") ||
            img.getAttribute("data-zoom-image") ||
            ""
        );

        return {
          src,
          alt: clean(img.getAttribute("alt") || ""),
          title: clean(img.getAttribute("title") || ""),
          rect: rectInfo(img),
        };
      })
      .filter((img) => img.rect)
      .filter((img) => img.rect.left >= contentLeft && img.rect.top >= contentTop)
      .filter((img) => !badImage(img.src));

    const anchors = [...document.querySelectorAll('a[href*="/en/catalog/product/view/"]')];
    const map = new Map();

    for (const a of anchors) {
      const href = absoluteUrl(a.getAttribute("href") || "");
      const rect = rectInfo(a);
      const text = clean(a.textContent || "");

      if (!href || !rect) continue;
      if (rect.left < contentLeft || rect.top < contentTop) continue;

      const current =
        map.get(href) ||
        {
          name: "",
          sourceUrl: href,
          categoryName: "Ceiling Recessed",
          familyName: "",
          previewImage: "",
        };

      if (text && text.length > 2 && text.length < 120) {
        if (!current.name || text.length > current.name.length) {
          current.name = text;
        }
      }

      let previewImage = "";

      const embeddedImg = a.querySelector("img");

      if (embeddedImg) {
        previewImage = absoluteUrl(
          embeddedImg.currentSrc ||
            embeddedImg.getAttribute("src") ||
            embeddedImg.getAttribute("data-src") ||
            embeddedImg.getAttribute("data-original") ||
            embeddedImg.getAttribute("data-zoom-image") ||
            ""
        );
      }

      if (!previewImage || badImage(previewImage)) {
        const candidates = images
          .filter((img) => {
            const sameColumn = Math.abs(img.rect.centerX - rect.centerX) < 260;
            const aboveOrInside = img.rect.bottom <= rect.top + 90;
            const closeEnough = Math.abs(rect.top - img.rect.bottom) < 500;
            const decentSize = img.rect.area > 500;

            return sameColumn && aboveOrInside && closeEnough && decentSize;
          })
          .sort((a, b) => {
            const da =
              Math.abs(rect.top - a.rect.bottom) * 3 +
              Math.abs(rect.centerX - a.rect.centerX);
            const db =
              Math.abs(rect.top - b.rect.bottom) * 3 +
              Math.abs(rect.centerX - b.rect.centerX);

            return da - db;
          });

        previewImage = candidates[0]?.src || "";
      }

      if (previewImage && !badImage(previewImage) && !current.previewImage) {
        current.previewImage = previewImage;
      }

      const heading = headings
        .filter((h) => h.rect.top < rect.top)
        .sort((a, b) => b.rect.top - a.rect.top)[0];

      if (heading?.text) {
        current.familyName = heading.text;
      }

      map.set(href, current);
    }

    return [...map.values()].map((p) => {
      if (!p.familyName || isProductLikeHeading(p.familyName)) {
        p.familyName = deriveFamilyFromName(p.name);
      }

      return p;
    });
  });

  const result = [];
  const seen = new Set();

  for (const product of products) {
    if (!product.name || !product.sourceUrl) continue;
    if (seen.has(product.sourceUrl)) continue;

    product.familyName =
      product.familyName && !isProductLikeHeading(product.familyName)
        ? product.familyName
        : deriveFamilyFromName(product.name);

    seen.add(product.sourceUrl);
    result.push(product);
  }

  fs.writeFileSync(OUTPUT_LINKS_JSON, JSON.stringify(result, null, 2), "utf8");

  console.log(`Product links saved: ${OUTPUT_LINKS_JSON}`);
  console.log(`Products found: ${result.length}`);

  return result;
}

/**
 * PRODUCT PAGE SCRAPER
 *
 * v5 important change:
 * The dimensions image is taken from the rendered browser layout:
 * - find the visible "Dimensions" heading
 * - find the largest visible image below it
 * - stop before "Photometric" / "Configurator" / "Ordering Code" / "Downloads"
 */
async function extractProductPageData(page, product) {
  await page.goto(product.sourceUrl, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(1000);

  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const distance = 550;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        total += distance;

        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 120);
    });
  });

  await page.waitForTimeout(800);

  return page.evaluate(
    ({ fallbackName, previewImage }) => {
      const BASE = "https://electron.gr";

      function clean(value = "") {
        return String(value)
          .replace(/\u00a0/g, " ")
          .replace(/\s+/g, " ")
          .trim();
      }

      function absoluteUrl(url) {
        try {
          return new URL(url, BASE).href;
        } catch {
          return "";
        }
      }

      function imageKey(url = "") {
        const cleanUrl = String(url).split("?")[0].split("#")[0].toLowerCase();
        const parts = cleanUrl.split("/");
        const file = parts[parts.length - 1] || cleanUrl;

        return file
          .replace(/[_-](small|thumb|thumbnail|large|big|main|base)(?=\.)/g, "")
          .replace(/\.(jpg|jpeg|png|webp)$/i, "");
      }

      function badImage(url = "") {
        const lower = String(url).toLowerCase();

        const badParts = [
          "logo",
          "espa",
          "european",
          "competitiveness",
          "flag",
          "facebook",
          "twitter",
          "instagram",
          "linkedin",
          "youtube",
          "ajax-loader",
          "loader",
          "sprite",
          "icon",
          "placeholder",
          "cookie",
          "captcha",
          "/skin/",
          "/js/",
          "/media/catalog/category/",
        ];

        return !lower || badParts.some((bad) => lower.includes(bad));
      }

      function allowedImage(url = "") {
        const lower = String(url).toLowerCase();

        if (badImage(lower)) return false;

        return (
          lower.includes("/media/") ||
          lower.includes("/catalog/product") ||
          lower.includes("/products/")
        );
      }

      function extractImageUrlsFromHtml(html = "") {
        const urls = [];

        const regexes = [
          /https?:\/\/electron\.gr\/[^"'()\s<>\\]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"'()\s<>\\]*)?/gi,
          /\/media\/[^"'()\s<>\\]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"'()\s<>\\]*)?/gi,
          /\/products\/[^"'()\s<>\\]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"'()\s<>\\]*)?/gi,
        ];

        for (const regex of regexes) {
          const matches = html.match(regex) || [];

          for (const match of matches) {
            const url = absoluteUrl(
              String(match)
                .replace(/&amp;/g, "&")
                .replace(/\\\//g, "/")
                .replace(/^["']|["']$/g, "")
            );

            if (allowedImage(url)) {
              urls.push(url);
            }
          }
        }

        return uniqueImages(urls);
      }

      function rectInfo(el) {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);

        if (
          !rect ||
          rect.width <= 3 ||
          rect.height <= 3 ||
          style.display === "none" ||
          style.visibility === "hidden" ||
          Number(style.opacity) === 0
        ) {
          return null;
        }

        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY,
          right: rect.right + window.scrollX,
          bottom: rect.bottom + window.scrollY,
          width: rect.width,
          height: rect.height,
          centerX: rect.left + window.scrollX + rect.width / 2,
          centerY: rect.top + window.scrollY + rect.height / 2,
          area: rect.width * rect.height,
        };
      }

      function imageUrl(img) {
        return absoluteUrl(
          img.currentSrc ||
            img.getAttribute("data-zoom-image") ||
            img.getAttribute("data-large-img-url") ||
            img.getAttribute("data-full") ||
            img.getAttribute("data-src") ||
            img.getAttribute("data-original") ||
            img.getAttribute("src") ||
            ""
        );
      }

      function getVisibleTextElements() {
        return [...document.querySelectorAll("h1,h2,h3,h4,h5,legend,div,span,p,strong,b")]
          .map((el) => {
            const text = clean(el.innerText || el.textContent || "");
            const rect = rectInfo(el);

            return { el, text, lower: text.toLowerCase(), rect };
          })
          .filter((item) => item.text && item.rect);
      }

      function findHeading(exactTexts, afterY = 0) {
        const lowerTexts = exactTexts.map((x) => x.toLowerCase());
        const elements = getVisibleTextElements();

        return elements
          .filter((item) => item.rect.top >= afterY)
          .filter((item) => {
            const lower = item.lower;
            return lowerTexts.some(
              (target) =>
                lower === target ||
                lower.startsWith(`${target} `) ||
                lower.includes(`\n${target}`)
            );
          })
          .sort((a, b) => a.rect.top - b.rect.top || a.rect.left - b.rect.left)[0];
      }

      function findNextSectionY(afterY) {
        const sectionNames = [
          "photometric",
          "configurator",
          "ordering code",
          "downloads",
          "product tags",
        ];

        const elements = getVisibleTextElements();

        const next = elements
          .filter((item) => item.rect.top > afterY)
          .filter((item) => sectionNames.includes(item.lower))
          .sort((a, b) => a.rect.top - b.rect.top)[0];

        return next?.rect.top ?? Number.POSITIVE_INFINITY;
      }

      function uniqueImages(values = []) {
        const out = [];
        const seen = new Set();

        for (const value of values) {
          const url = clean(value);

          if (!url || !allowedImage(url)) continue;

          const key = imageKey(url);

          if (seen.has(key)) continue;

          seen.add(key);
          out.push(url);
        }

        return out;
      }

      const title =
        clean(document.querySelector("h1")?.innerText || "") ||
        clean(fallbackName);

      const h1 = document.querySelector("h1");
      const h1Rect = h1 ? rectInfo(h1) : null;

      const allImages = [...document.images]
        .map((img) => ({
          url: imageUrl(img),
          alt: clean(img.getAttribute("alt") || ""),
          title: clean(img.getAttribute("title") || ""),
          rect: rectInfo(img),
          naturalWidth: img.naturalWidth || 0,
          naturalHeight: img.naturalHeight || 0,
        }))
        .filter((item) => item.rect && allowedImage(item.url))
        .filter((item) => item.rect.area > 900);

      const dimensionsHeading = findHeading(
        ["Dimensions", "Dimension"],
        h1Rect ? h1Rect.top : 0
      );

      const endOfDimensionsY = dimensionsHeading
        ? findNextSectionY(dimensionsHeading.rect.bottom)
        : Number.POSITIVE_INFINITY;

      const dimensionCandidates = dimensionsHeading
        ? allImages
            .filter((img) => img.rect.top >= dimensionsHeading.rect.bottom - 20)
            .filter((img) => img.rect.top < endOfDimensionsY)
            .filter((img) => img.rect.left < 1050)
            .filter((img) => imageKey(img.url) !== imageKey(previewImage))
            .sort((a, b) => b.rect.area - a.rect.area)
        : [];

      // Magento stores the dimensions image in hidden/cache URLs like:
      // /media/catalog/product/cache/1/dimensions_image/.../d/i/disc_rc_sx.jpg
      // Sometimes this URL is not exposed as a visible <img> currentSrc, so we scan the raw HTML too.
      const htmlImageUrls = extractImageUrlsFromHtml(document.documentElement.innerHTML || "");

      const dimensionHtmlCandidates = htmlImageUrls
        .filter((url) => {
          const lower = url.toLowerCase();

          return (
            lower.includes("/dimensions_image/") ||
            lower.includes("dimensions_image") ||
            lower.includes("_sx.") ||
            lower.includes("_dx.") ||
            lower.includes("_dimensions") ||
            lower.includes("dimensions")
          );
        })
        .filter((url) => imageKey(url) !== imageKey(previewImage));

      const dimensionImage =
        dimensionCandidates[0]?.url ||
        dimensionHtmlCandidates[0] ||
        "";

      const generalCandidates = allImages
        .filter((img) => imageKey(img.url) !== imageKey(previewImage))
        .filter((img) => !dimensionImage || imageKey(img.url) !== imageKey(dimensionImage))
        .filter((img) => {
          if (!dimensionsHeading) return true;
          return img.rect.top < dimensionsHeading.rect.top;
        })
        .sort((a, b) => b.rect.area - a.rect.area);

      const generalImage = generalCandidates[0]?.url || "";

      // Description and specs from rendered innerText only. This avoids script/comment code.
      const lines = (document.body.innerText || "")
        .split(/\r?\n/)
        .map(clean)
        .filter(Boolean);

      function isJunkLine(line = "") {
        const lower = clean(line).toLowerCase();

        if (!lower) return true;

        const exactJunk = new Set([
          "o",
          "1",
          "*",
          "* * *",
          "image",
          "images",
          "configurator",
          "dimensions",
          "photometric",
          "ordering code",
          "downloads",
          "product tags",
          "add to cart",
          "add to wishlist",
          "add to compare",
          "qty:",
          "copy reset",
          "required fields",
          "back to top",
        ]);

        if (exactJunk.has(lower)) return true;

        const junkParts = [
          "https://",
          "www.",
          "facebook",
          "twitter",
          "privacy policy",
          "terms & conditions",
          "electron sa",
          "tel:",
          "cookie",
          "co-funded",
          "european union",
          "competitiveness",
          "search site",
          "home",
          "profile",
          "projects",
          "news",
          "contact",
          "//<![cdata",
          "class.create",
          "function(",
          "function (",
          "var ",
          "let ",
          "const ",
          "document.",
          "window.",
          "prototype",
          "optionsprice",
          "opconfig",
          "dependentoptions",
          "optionimages",
        ];

        return junkParts.some((part) => lower.includes(part));
      }

      function findTitleIndex() {
        const normalizedTitle = title.toLowerCase();
        const configuratorIndex = lines.findIndex(
          (line) => line.toLowerCase() === "configurator"
        );

        let result = -1;

        for (let i = 0; i < lines.length; i++) {
          const lower = lines[i].toLowerCase();

          if (lower === normalizedTitle) {
            if (configuratorIndex === -1 || i < configuratorIndex) {
              result = i;
            }
          }
        }

        return result !== -1 ? result : 0;
      }

      const titleIndex = findTitleIndex();

      function extractDescription() {
        const stopTokens = [
          "dimensions",
          "photometric",
          "configurator",
          "ordering code",
          "downloads",
          "product tags",
        ];

        const result = [];

        for (let i = titleIndex + 1; i < lines.length; i++) {
          const line = clean(lines[i]);
          const lower = line.toLowerCase();

          if (!line || isJunkLine(line)) continue;
          if (stopTokens.some((token) => lower === token)) break;

          const nextFew = lines.slice(i, i + 8).join(" ").toLowerCase();

          if (
            lower === "model" ||
            lower.startsWith("model ") ||
            (lower.includes("cri80") && nextFew.includes("led source")) ||
            (lower.includes("led source") && nextFew.includes("type"))
          ) {
            break;
          }

          if (line.length <= 500) {
            result.push(line);
          }
        }

        return [...new Set(result)].join("\n");
      }

      function extractConfiguratorSpecs() {
        let start = -1;

        for (let i = titleIndex; i < lines.length; i++) {
          if (lines[i].toLowerCase() === "configurator") {
            start = i;
            break;
          }
        }

        if (start === -1) return {};

        const stopWords = [
          "ordering code",
          "downloads",
          "product tags",
          "copy reset",
          "add to cart",
          "qty:",
          "add to wishlist",
          "add to compare",
        ];

        const allowedLabels = [
          "Model",
          "LED Power",
          "CCT",
          "Watt / Diameter",
          "Watt",
          "Diameter",
          "CRI",
          "Beam Angle",
          "Type",
          "Luminaire Colour",
          "Luminaire Color",
          "Colour",
          "Color",
          "Voltage",
          "Dimming Option",
          "Accessories",
          "Extras",
          "Reflector",
          "Optic",
          "Driver",
          "Emergency",
          "Function",
          "IP",
        ];

        const specs = {};
        let currentLabel = "";

        for (let i = start + 1; i < lines.length; i++) {
          let line = clean(lines[i]);
          const lower = line.toLowerCase();

          if (!line) continue;

          if (stopWords.some((word) => lower === word || lower.includes(word))) {
            break;
          }

          if (
            lower.includes("required fields") ||
            lower.includes("€0.00") ||
            lower === "*"
          ) {
            continue;
          }

          line = line.replace(/\s*\*\s*$/g, "").trim();

          const foundLabel = allowedLabels.find((label) => {
            const l = label.toLowerCase();
            const value = line.toLowerCase();

            return value === l || value.startsWith(`${l}:`);
          });

          if (foundLabel) {
            currentLabel = foundLabel;

            if (!specs[currentLabel]) specs[currentLabel] = [];

            const inlineValue = clean(
              line.replace(new RegExp(`^${foundLabel}\\s*:?\\s*`, "i"), "")
            );

            if (inlineValue && inlineValue.toLowerCase() !== foundLabel.toLowerCase()) {
              specs[currentLabel].push(inlineValue);
            }

            continue;
          }

          if (!currentLabel) continue;
          if (isJunkLine(line)) continue;
          if (line.length > 160) continue;

          specs[currentLabel].push(line);
        }

        const cleaned = {};

        for (const [label, values] of Object.entries(specs)) {
          const cleanValues = [...new Set(values.map(clean).filter(Boolean))]
            .filter((value) => value !== label)
            .filter((value) => !isJunkLine(value));

          if (cleanValues.length) {
            cleaned[label] = cleanValues.join(", ");
          }
        }

        return cleaned;
      }

      const documents = [...document.querySelectorAll("a")]
        .map((a) => {
          const href = absoluteUrl(a.getAttribute("href") || "");
          const label = clean(a.innerText || a.textContent || href.split("/").pop());

          return { label, url: href };
        })
        .filter((item) => {
          const lower = item.url.toLowerCase();

          return (
            lower.includes(".pdf") ||
            lower.includes(".zip") ||
            lower.includes(".dwg") ||
            lower.includes(".ies") ||
            lower.includes(".ldt") ||
            lower.includes(".dxf")
          );
        });

      return {
        title,
        generalImage,
        dimensionImage,
        description: extractDescription(),
        specs: extractConfiguratorSpecs(),
        documents: [...new Map(documents.map((item) => [item.url, item])).values()],
        debug: {
          dimensionsHeading: dimensionsHeading
            ? { text: dimensionsHeading.text, rect: dimensionsHeading.rect }
            : null,
          endOfDimensionsY,
          dimensionCandidates,
          dimensionHtmlCandidates,
          htmlImageUrls,
          generalCandidates,
          allImages,
        },
      };
    },
    {
      fallbackName: product.name,
      previewImage: product.previewImage,
    }
  );
}

async function scrapeProduct(page, product, index) {
  const data = await extractProductPageData(page, product);

  const title = data.title || product.name;
  const id = `electron-${makeSlug(title)}`;

  const family =
    product.familyName && !isProductLikeHeading(product.familyName)
      ? product.familyName
      : deriveFamilyFromName(title);

  const images = uniqueImages([
    product.previewImage,
    data.generalImage,
    data.dimensionImage,
  ]).slice(0, 3);

  const code =
    title.match(/[A-Z0-9]+(?:[-/ ][A-Z0-9]+)+/i)?.[0] ||
    id;

  const warnings = [];

  if (!product.previewImage) warnings.push("missing_category_preview_image");
  if (!data.generalImage) warnings.push("missing_general_image");
  if (!data.dimensionImage) warnings.push("missing_dimension_image");
  if (images.length !== 3) warnings.push(`images_count_${images.length}`);
  if (!data.description) warnings.push("missing_description");
  if (
    data.description.toLowerCase().includes("class.create") ||
    data.description.toLowerCase().includes("//<![cdata") ||
    data.description.toLowerCase().includes("var dateoption")
  ) {
    warnings.push("description_contains_code");
  }
  if (!Object.keys(data.specs).length) warnings.push("missing_configurator_specs");

  return {
    id,
    brand: "Electron",
    name: title,
    code,
    subtitle: ["Ceiling Recessed", family].filter(Boolean).join(" / "),
    description:
      data.description ||
      `Produs Electron din gama ${family || product.categoryName}.`,
    images,
    solutions: ["Ceiling Recessed", family].filter(Boolean),
    specs: data.specs,
    dimensions_images: data.dimensionImage ? [data.dimensionImage] : [],
    dimensions_text: null,
    documents: data.documents,
    display_order: index + 1,
    price: null,
    currency: "RON",

    // Debug is saved only in preview JSON, not in SQL.
    _source_url: product.sourceUrl,
    _debug: {
      categoryPreviewImage: product.previewImage,
      generalImage: data.generalImage,
      dimensionImage: data.dimensionImage,
      family,
      warnings,
      imageCandidates: data.debug,
    },
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
  ${sqlString(imageUrl || CATEGORY_URL)}
)
on conflict (label) do update set
  image_url = excluded.image_url;
`.trim();
}

function getAllowedCategories(products) {
  const categories = new Map();

  categories.set("Ceiling Recessed", CATEGORY_URL);

  for (const product of products) {
    const family = product.solutions?.[1];

    if (!family || isProductLikeHeading(family)) continue;

    if (!categories.has(family)) {
      categories.set(family, product.images?.[0] || CATEGORY_URL);
    }
  }

  return categories;
}

function buildFullSql(products) {
  const categories = getAllowedCategories(products);

  return [
    "-- Auto-generated Electron clean import v5",
    "-- Images order: category preview, general product image, Dimensions section image",
    "-- Specs: Configurator only",
    "-- Categories: Ceiling Recessed + subcategories only",
    "",
    "begin;",
    "",
    ...[...categories.entries()].map(([label, imageUrl]) =>
      categoryToSql(label, imageUrl)
    ),
    "",
    ...products.map(productToSql),
    "",
    "commit;",
    "",
  ].join("\n\n");
}

function splitSqlFile(fullSql) {
  fs.rmSync(SQL_PARTS_DIR, { recursive: true, force: true });
  fs.mkdirSync(SQL_PARTS_DIR, { recursive: true });

  const raw = fullSql
    .replace(/^\s*--[^\n]*\n/gm, "")
    .replace(/^\s*begin;\s*/i, "")
    .replace(/\s*commit;\s*$/i, "")
    .trim();

  const productMarker = "insert into public.shop_products (";
  const productStart = raw.indexOf(productMarker);

  if (productStart === -1) {
    console.warn("Could not split SQL: no product inserts found.");
    return;
  }

  const categoriesSql = raw.slice(0, productStart).trim();
  const productsSql = raw.slice(productStart).trim();

  const categoryStatements = categoriesSql
    ? categoriesSql
        .split(/\n\s*\n(?=insert into public\.shop_categories \()/g)
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const productStatements = productsSql
    .split(/\n\s*\n(?=insert into public\.shop_products \()/g)
    .map((s) => s.trim())
    .filter(Boolean);

  function wrap(title, statements) {
    return ["-- " + title, "begin;", "", ...statements, "", "commit;", ""].join("\n\n");
  }

  if (categoryStatements.length) {
    fs.writeFileSync(
      path.join(SQL_PARTS_DIR, "00-categories.sql"),
      wrap("Electron categories", categoryStatements),
      "utf8"
    );
  }

  let current = [];
  let part = 1;

  for (const statement of productStatements) {
    const candidate = wrap(`Electron products part ${part}`, [...current, statement]);

    if (current.length && Buffer.byteLength(candidate, "utf8") > MAX_SQL_BYTES) {
      const filename = `${String(part).padStart(2, "0")}-products.sql`;

      fs.writeFileSync(
        path.join(SQL_PARTS_DIR, filename),
        wrap(`Electron products part ${part}`, current),
        "utf8"
      );

      part += 1;
      current = [statement];
    } else {
      current.push(statement);
    }
  }

  if (current.length) {
    const filename = `${String(part).padStart(2, "0")}-products.sql`;

    fs.writeFileSync(
      path.join(SQL_PARTS_DIR, filename),
      wrap(`Electron products part ${part}`, current),
      "utf8"
    );
  }

  fs.writeFileSync(
    path.join(SQL_PARTS_DIR, "README.txt"),
    [
      "Rulează SQL-urile în Supabase în ordine:",
      "1. 00-categories.sql",
      "2. 01-products.sql",
      "3. 02-products.sql etc.",
      "",
      `MAX_SQL_BYTES=${MAX_SQL_BYTES}`,
      `Product statements=${productStatements.length}`,
      `Category statements=${categoryStatements.length}`,
    ].join("\n"),
    "utf8"
  );
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage({
    viewport: { width: 1700, height: 1200 },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
  });

  let productLinks = await collectProductsFromCategory(page);

  if (LIMIT > 0) {
    productLinks = productLinks.slice(0, LIMIT);
  }

  const products = [];

  console.log("");
  console.log(`Scraping products: ${productLinks.length}`);

  for (const product of productLinks) {
    const index = products.length;

    try {
      console.log(`[${index + 1}/${productLinks.length}] ${product.name}`);

      const fullProduct = await scrapeProduct(page, product, index);
      products.push(fullProduct);

      if (fullProduct._debug.warnings.length) {
        console.log(`  warnings: ${fullProduct._debug.warnings.join(", ")}`);
      }

      await sleep(500);
    } catch (error) {
      console.error(`Error on ${product.sourceUrl}: ${error.message}`);
    }
  }

  await browser.close();

  fs.writeFileSync(OUTPUT_PREVIEW_JSON, JSON.stringify(products, null, 2), "utf8");

  const sql = buildFullSql(products);

  fs.writeFileSync(OUTPUT_SQL, sql, "utf8");
  splitSqlFile(sql);

  const categories = getAllowedCategories(products);

  console.log("");
  console.log("Done.");
  console.log(`Products: ${products.length}`);
  console.log(`Categories: ${categories.size}`);
  console.log(`Preview JSON: ${OUTPUT_PREVIEW_JSON}`);
  console.log(`Full SQL: ${OUTPUT_SQL}`);
  console.log(`Split SQL folder: ${SQL_PARTS_DIR}`);
  console.log("");
  console.log("Important: verifică electron-products-preview.json înainte să rulezi SQL-ul.");
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
