// src/data/shopCatalog.ts
// ✅ De acum, datele vin din Supabase. Aici păstrăm doar tipurile (și exporturi placeholder).

export type Solution = string;

export type SpecItem = {
  label: string;
  value: string;
};

export type DimensionBlock = {
  images?: string[];
  text?: string;
};

export type DocType = "catalog" | "datasheet" | "bim" | "cad" | string;

export type ProductDocument = {
  label: string;
  type: DocType;
  url: string;
};

export type ShopProduct = {
  id: string;
  brand: string;
  name: string;
  code: string;
  subtitle?: string | null;
  description: string;

  images: string[];
  solutions: Solution[];

  specs: SpecItem[];

  dimensions?: DimensionBlock | null;

  documents: ProductDocument[];
};

export type ShopCategory = {
  id: string;
  label: string;
  imageUrl: string;
};

// 🔻 Placeholders ca să nu crape alte fișiere care încă importă aceste nume.
// (Ideal: pe viitor eliminăm complet importurile astea.)
export const SHOP_PRODUCTS: ShopProduct[] = [];
export const SHOP_CATEGORIES: ShopCategory[] = [];
export const ALL_SOLUTIONS: Solution[] = [];