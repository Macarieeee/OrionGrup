// src/data/shopCatalog.ts

export type Solution =
  | "Ceiling Recessed"
  | "Surface"
  | "Suspension"
  | "Wall"
  | "Table & Floor"
  | "Tracklights"
  | "Custom Systems"
  | "Lamps"
  | "Outdoor";

export type ShopCategory = {
  id: string;
  label: Solution;
  imageUrl: string;
};

export type ProductSpec = { label: string; value: string };

export type ProductDoc = {
  label: string;
  type: "catalog" | "datasheet" | "bim" | "cad";
  url: string;
};

export type ShopProduct = {
  id: string; // folosit în URL
  brand: string;
  name: string;
  code: string; // cod produs
  subtitle?: string;
  description: string;

  // imagini multiple pentru slider
  images: string[];

  // tag-uri pt “produse similare”
  solutions: Solution[];

  // secțiuni
  specs: ProductSpec[];
dimensions?: {
  images?: string[];
  text?: string;
};

  documents?: ProductDoc[];
};

export const ALL_SOLUTIONS: Solution[] = [
  "Ceiling Recessed",
  "Surface",
  "Suspension",
  "Wall",
  "Table & Floor",
  "Tracklights",
  "Custom Systems",
  "Lamps",
  "Outdoor",
];

export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    id: "t1",
    label: "Ceiling Recessed",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "t2",
    label: "Surface",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t3",
    label: "Suspension",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t4",
    label: "Wall",
    imageUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t5",
    label: "Table & Floor",
    imageUrl:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t6",
    label: "Tracklights",
    imageUrl:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t7",
    label: "Custom Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t8",
    label: "Lamps",
    imageUrl:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t9",
    label: "Outdoor",
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SHOP_PRODUCTS: ShopProduct[] = [
    {
  id: "test-1",
  brand: "Arkoslight",
  name: "TEST PRODUCT 1",
  code: "TEST-001",
  description: "Test",
  images: ["https://images.unsplash.com/photo-1484101403633-562f891dc89a"],
  solutions: ["Ceiling Recessed"],
  specs: [],
},
{
  id: "test-2",
  brand: "Arkoslight",
  name: "TEST PRODUCT 2",
  code: "TEST-002",
  description: "Test",
  images: ["https://images.unsplash.com/photo-1558002038-1055907df827"],
  solutions: ["Surface"],
  specs: [],
},
  {
    id: "arkoslight-magnetic-24v-micro-shaper",
    brand: "Arkoslight",
    name: "MAGNETIC 24V MICRO SHAPER",
    code: "ARK-M24V-MSHAPER",
    subtitle: "LED adjustable semi-inset spotlight",
    description:
      "From the MINIMAL TRACK product family, Arkoslight’s miniaturised spotlights enable a seamless integration with recessed magnetic connection.",
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=1400&q=80",
    ],
    solutions: ["Ceiling Recessed", "Tracklights"],
    specs: [
      { label: "Flux luminos", value: "190 lm / 210 lm / 250 lm" },
      { label: "Putere", value: "2.2 W" },
      { label: "CCT", value: "2700K / 3000K / 4000K" },
      { label: "Dimming", value: "Opțiuni disponibile" },
      { label: "Optică", value: "18° / 34° / 52°" },
    ],
    dimensions: {
    images: [
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  ],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },

  // Exemple extra (păstrează ce ai acum și le completezi treptat)
  {
    id: "arkoslight-nano-recessed",
    brand: "Arkoslight",
    name: "NANO RECESSED",
    code: "ARK-NANO-REC",
    subtitle: "Round LED recessed aluminium spotlight",
    description:
      "Compact recessed solution for architectural lighting, designed for clean ceilings and controlled glare.",
    images: [
      "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1400&q=80",
    ],
    solutions: ["Ceiling Recessed"],
    specs: [
      { label: "Material", value: "Aluminiu" },
      { label: "CCT", value: "2700K / 3000K / 4000K" },
      { label: "CRI", value: "90+" },
    ],
    documents: [{ label: "Catalog (PDF)", type: "catalog", url: "#" }],
  },
];
