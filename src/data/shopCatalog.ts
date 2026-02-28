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
  | "Click It"
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
  id: "click-it-spot-7w",
  brand: "Electron",
  name: "CLICK IT SPOT 7W",
  code: "CLICK IT S7",
  description: "Click It S7 spot is the smallest in size spot of Click It system.",
  images: [import.meta.env.BASE_URL + "products/400f1_click_it_spot_7w.jpg"],
  solutions: ["Click It"],
  dimensions: {
    images:  [import.meta.env.BASE_URL + "products/screenshot_2025-10-23_131550.png"],},
  specs: [
  { label: "Model", value: "CLICK IT SPOT 7W" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },
  { label: "Type", value: "Adjustable" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "27° / 32° / 46°" },
  { label: "Colour", value: "White / Black" },
  { label: "Dimming Option", value: "42V PWM / 48V DALI / 48V Wireless" },
  { label: "Accessories", value: "Standard / Honeycomb / Line Spread Lens / Softening Lens" },
],
},
{
  id: "click-it-spot-18w",
  brand: "Electron",
  name: "CLICK IT Spot 18W - Tunable White 12W/17W",
  code: "CLICK IT SPOT 18W",
    description: `Rotatable 320 degrees.
Available in black or white colour.
It is offered with a variety of accessories : honeycomb, line spread lens, softening lens, snoot, or half snoot
L90/B10 50.000h
3SDCM
Monochromatic 18W

Click It S18 spot is the middle sized spot of Click It system.
UGR<20(44º) / UGR<13(35º) / UGR<15(21º)
Tunable White 12W/17W

Click It S21spot is the tunable white spot of Click It system.
Casambi ready device.
Constant lumen output when shifting CCT.
UGR<20(44º) / UGR<13(35º) / UGR<15(21º)`,
  images: [import.meta.env.BASE_URL + "products/399f2_click_it_spot_18w_-_tw_12w-17w.jpg"],
  solutions: ["Click It"],
  specs: [
  { label: "Model", value: "CLICK IT SPOT 17.6W (CLICK IT S18)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  { label: "LED Source", value: "CRI80: 1518lm / 1634lm / 1634lm / 1750lm | CRI90: 1140lm / 1225lm / 1225lm / 1310lm" },

  { label: "Type", value: "Adjustable" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "21° / 35° / 44°" },
  { label: "Colour", value: "White / Black" },
  { label: "Dimming Option", value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable" },
  { label: "Accessories", value: "Standard / Honeycomb / Line spread lens / Softening lens" },

  // (opțional, apare separat în dreapta ca “EXTRAS”)
  { label: "Extras", value: "No Extras / Snoot Black / Half Snoot Black / Frosted Cover / Snoot White / Half Snoot White" },
],
dimensions: {
    images:  [import.meta.env.BASE_URL + "products/399sx_click_it_spot_18w_-_tw_12w-17w.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
},
  {
    id: "click-it-surface-track",
    brand: "Electron",
    name: "Click It Surface/Pendant Track",
    code: "CLICK IT SYSTEM",
    subtitle: "Click It Surface Track",
    description: `Click-It system offers a modern, minimalistic approach to lighting, designed for ultimate versatility and effortless adaptability.
Suitable for trimless, surface-mounted, and pendant applications, it ensures an installation that maintains a clean and sophisticated aesthetic.

With its click and reposition functionality, the system allows for quick and easy adjustments, making it ideal for dynamic environments.

Click It system comes with a wide selection of luminaires, enabling limitless design possibilities.
It is complemented by a wide range of accessories, offering further customization options, to suit the exact needs of any project.

Click It Spots: Three sized spots, a zoom spot, a frame spot, and a gobo spot.
Click It Linear: Directional linear/ linear wash fixtures, and four sizes of linear ambient luminaires.
Click It Tubes: Two rotatable tube sizes (340°) to create dynamic lighting patterns.
Click It Decorative: Featuring two elegant pendant cylindrical fixtures, sphere in spot and pendant version, and a bell shaped pendant fixture for a refined aesthetic.

Click it System is offered in 42V PWM Dimmable, 48V DALI Dimmable or 48V Wireless Dimmable.

Whether illuminating high-end residential spaces, inviting lobbies, or sophisticated commercial environments, Click It system delivers elegance, making it the perfect lighting solution for any premium space.

Note: Track max amperage 10A.`,
    images: [import.meta.env.BASE_URL + "products/393_click_it_track_sf.jpg"],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/clk.013x-dimensions.jpg"],
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
    id: "click-it-trimless-track",
    brand: "Electron",
    name: "Click It Trimless Track",
    code: "CLICK IT SYSTEM",
    subtitle: "Click It Trimless Track",
    description: `Click-It system offers a modern, minimalistic approach to lighting, designed for ultimate versatility and effortless adaptability. Suitable for trimless, surface-mounted, and pendant applications, it ensures an installation that maintains a clean and sophisticated aesthetic.

With its click and reposition functionality, the system allows for quick and easy adjustments, making it ideal for dynamic environments.

Click It system comes with a wide selection of luminaires, enabling limitless design possibilities. It is complemented by a wide range of accessories, offering further customization options, to suit the exact needs of any project.

Click It Spots: Three sized spots, a zoom spot, a frame spot, and a gobo spot.
Click It Linear: Directional linear/ linear wash fixtures, and four sizes of linear ambient luminaires.
Click It Tubes: Two rotatable tube sizes (340°) to create dynamic lighting patterns.
Click It Decorative: Featuring two elegant pendant cylindrical fixtures, sphere in spot and pendant version, and a bell shaped pendant fixture for a refined aesthetic.
Click it System is offered in 42V PWM Dimmable, 48V DALI Dimmable or 48V Wireless Dimmable.

Whether illuminating high-end residential spaces, inviting lobbies, or sophisticated commercial environments, Click It system delivers elegance, making it the perfect lighting solution for any premium space.

Note: Track max amperage 10A.`,
    images: [import.meta.env.BASE_URL + "products/393_click_it_track_tr.jpg"],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/clk.001x-dimensions.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "surface-power-connectors",
    brand: "Electron",
    name: "Surface Power Connectors for CLICK IT",
    code: "CLICK IT SYSTEM",
    subtitle: "Surface Power Connectors",
    description: ``,
    images: [import.meta.env.BASE_URL + "products/394a_2.jpg"],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/394a_CLICK_IT_Prefabricated_Corners.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "surface-prefabricated-corners-90",
    brand: "Electron",
    name: "Surface Prefabricated Corners 90 for CLICK IT",
    code: "CLICK IT SYSTEM",
    subtitle: "Surface Prefabricated Corners",
    description: ``,
    images: [import.meta.env.BASE_URL + "products/394b_2.jpg"],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/394b_CLICK_IT_Prefabricated_Corners.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "trimless-prefabricated-corners-90",
    brand: "Electron",
    name: "Trimless Prefabricated Corners 90 for CLICK IT",
    code: "CLICK IT SYSTEM",
    subtitle: "Trimless Prefabricated Corners",
    description: ``,
    images: [import.meta.env.BASE_URL + "products/395a_1.jpg"],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/395a_CLICK_IT_Prefabricated_Corners.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "accessories-for-click-it",
    brand: "Electron",
    name: "Accessories for CLICK IT",
    code: "CLICK IT SYSTEM",
    subtitle: "Accessories",
    description: ``,
    images: [import.meta.env.BASE_URL + "products/423b.jpg"],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/396a_CLICK_IT_Accessories.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-spot-22w",
    brand: "Electron",
    name: "CLICK IT Spot 22W - Tunable White 21W",
    code: "CLICK IT SYSTEM",
    subtitle: "CLICK IT Spot",
    description: `Rotatable 320 degrees.
Available in black or white colour.
It is offered with a variety of accessories : honeycomb, line spread lens, softening lens, snoot, or half snoot
L90/B10 50.000h
3SDCM
Monochromatic 22W

Click It S22 spot is the highest sized spot of Click It system.
UGR<19(42º) / UGR<15(35º) / UGR<17(22º)
Tunable White 21W

Click It S21spot is the tunable white spot of Click It system.
Casambi ready device.
Constant lumen output when shifting CCT.
UGR<20(44º) / UGR<13(35º) / UGR<15(21º)`,
    images: [import.meta.env.BASE_URL + "products/398f2_click_it_spot_22w_-_tw_21w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT SPOT 22.3W (CLICK IT S22)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  { label: "LED Source", value: "CRI80: 2465lm / 2651lm / 2837lm / 2651lm | CRI90: 1850lm / 1901lm / 2125lm / 1985lm" },

  { label: "Type", value: "Adjustable" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "22° / 35° / 42°" },
  { label: "Colour", value: "White / Black" },
  { label: "Dimming Option", value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable" },
  { label: "Accessories", value: "Standard / Honeycomb / Line spread lens / Softening lens" },

  // (opțional, apare ca “EXTRAS”)
  { label: "Extras", value: "No Extras / Snoot Black / Half Snoot Black / Frosted Cover / Snoot White / Half Snoot White" },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/398sx_click_it_spot_22w_-_tw_21w.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-zoom-spot-12w",
    brand: "Electron",
    name: "Click It Zoom Spot 12W",
    code: "Click It Zoom Spot 12W",
    subtitle: "CLICK IT Spot",
    description: `Click It Zoom spot of Click It system Is a flexible spot that allows selection of the beam angle from 16 to 50 degrees.
It is rotatable 320 degrees.
Available in black or white colour.
UGR <19(50°) / UGR< 12(16°)
L90/B10 50.000h
3SDCM`,
    images: [import.meta.env.BASE_URL + "products/401f1_click_it_zoom_spot_12w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT ZOOM SPOT 12W (CLICK IT ZS12)" },
  { label: "CCT", value: "2700K / 3000K / 4000K" },

  // (opțional, dar apare în tabel)
  { label: "LED Source", value: "CRI80: 1194lm / 1257lm / 1307lm | CRI90: 992lm / 1055lm / 1106lm" },

  { label: "Type", value: "Adjustable" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "Adjustable 16° (min) – 50° (max)" },
  { label: "Colour", value: "White / Black" },
  { label: "Dimming Option", value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable" },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/screenshot_2025-10-23_131731.png"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-frame-spot-13w",
    brand: "Electron",
    name: "Click It Frame Spot 13W",
    code: "Click It Frame Spot 13W",
    subtitle: "CLICK IT Spot",
    description: `Click It Zoom Frame is ideal to highlight artwork that requires a lighting frame.
It is rotatable 320 degrees.
Available in black or white colour.
L90/B10 50.000h
3SDCM`,
    images: [import.meta.env.BASE_URL + "products/404f2_click_it_frame_spot_13w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT FRAME SPOT 12.8W (CLICK IT FR S13)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  { label: "LED Source", value: "CRI80: 1102lm / 1148lm / 1211lm / 1226lm | CRI90: 925lm / 965lm / 1015lm / 1030lm" },

  { label: "Type", value: "Adjustable" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "27° max" },
  { label: "Colour", value: "White / Black" },
  { label: "Dimming Option", value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable" },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/screenshot_2025-10-23_124846.png"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-gobo-spot-13w",
    brand: "Electron",
    name: "Click It Gobo Spot 13W",
    code: "Click It Gobo Spot 13W",
    subtitle: "CLICK IT Spot",
    description: `Click It Zoom Gobo is suitable for applications where a logo, a photo or any other custom projection is required.
Gobo material: glass
It is rotatable 320 degrees.
Available in black or white colour.
L190/B10 50.000h
3SDCM`,
    images: [import.meta.env.BASE_URL + "products/405f2_click_it_gobo_spot_13w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT GOBO SPOT 12.8W (CLICK IT GB S13)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  { label: "LED Source", value: "CRI80: 1102lm / 1148lm / 1211lm / 1226lm | CRI90: 925lm / 965lm / 1015lm / 1030lm" },

  { label: "Type", value: "Adjustable" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "27° max" },
  { label: "Colour", value: "White / Black" },
  { label: "Dimming Option", value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable" },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/screenshot_2025-10-23_125039.png"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
   {
    id: "click-it-linear-spot-15w",
    brand: "Electron",
    name: "Click It Linear Spot 15W - Tunable White 15W",
    code: "Click It Linear Spot 15W",
    subtitle: "CLICK IT Spot",
    description: `Click It LS15 is a directional linear luminaire of Click It System.
Available in black or white colour.
With a selection of beam angles to meet any lighting requirements.
Length of 205mm.


Monochromatic 15W

UGR<19(56º) / UGR<14(32º) / UGR<10(25º) / UGR<10(13º) / UGR<10(9º) / UGR<11(9-32º)
L90/B10 50.000h
3SDCM
 

Tunable White 15W

Casambi ready device.
Constant lumen output when shifting CCT.
L70/B10 50.000h
UGR<19(56º) / UGR<14(32º) / UGR<10(25º) / UGR<10(13º) / UGR<11(9-32º)
`,
    images: [import.meta.env.BASE_URL + "products/406f2_click_it_linear_spot_15w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT GOBO SPOT 12.8W (CLICK IT GB S13)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  { label: "LED Source", value: "CRI80: 1102lm / 1148lm / 1211lm / 1226lm | CRI90: 925lm / 965lm / 1015lm / 1030lm" },

  { label: "Type", value: "Adjustable" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "27° max" },
  { label: "Colour", value: "White / Black" },
  { label: "Dimming Option", value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable" },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/406sx_click_it_linear_spot_15w.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-linear-wash-14w",
    brand: "Electron",
    name: "Click It Linear Wash 14W",
    code: "Click It Linear Wash 14W",
    subtitle: "CLICK IT Spot",
    description: `Click It LW14 is a linear wash of Click It System.
Available in black or white colour.
With a selection of beam angleof 1048 ddegrees
Length of 205mm.
L90/B10 50.000h
3SDCM
`,
    images: [import.meta.env.BASE_URL + "products/407f2_click_it_linear_wash_14w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT LINEAR WASH 14W (CLICK IT LW14)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  { label: "LED Source", value: "CRI80: 1250lm / 1332lm / 1404lm / 1404lm | CRI90: 1026lm / 1098lm / 1250lm / 1250lm" },

  { label: "Type", value: "Linear wash" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "10° × 48°" },
  { label: "Colour", value: "White / Black" },
  { label: "Dimming Option", value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable" },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/click_it_linear_wash_14w_schema1.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-ambient-30w",
    brand: "Electron",
    name: "Click It Ambient 30W",
    code: "Click It Ambient 30W",
    subtitle: "CLICK IT Spot",
    description: `Click It A30 spot is the largest sized available linear ambient luminaire of Click It system.
Available in black or white colour.
Beam angle of 115 degrees
Length of 1200mm.
L90/B10 50.000h
3SDCM
`,
    images: [import.meta.env.BASE_URL + "products/408f2_click_it_ambinet_35w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT AMBIENT 29.6W (CLICK IT A30)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  {
    label: "LED Source",
    value:
      "CRI80: 5525lm / 5860lm / 6165lm / 6165lm | CRI90: 4144lm / 4395lm / 4624lm / 4624lm",
  },

  { label: "Type", value: "Fixed" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "115°" },
  { label: "Colour", value: "White / Black" },
  {
    label: "Dimming Option",
    value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable",
  },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/click_it_ambient_35w_photo2.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-ambient-25w",
    brand: "Electron",
    name: "Click It Ambient 25W",
    code: "Click It Ambient 25W",
    subtitle: "CLICK IT Spot",
    description: `Click It A25 spot is the larger mid-sized available linear ambient luminaire of Click It system.
Available in black or white colour.
Beam angle of 115 degrees
Length of 800mm.
L90/B10 50.000h
3SDCM
`,
    images: [import.meta.env.BASE_URL + "products/409f2_click_it_ambinet_25w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT AMBIENT 24.8W (CLICK IT A25)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  {
    label: "LED Source",
    value:
      "CRI80: 3960lm / 4200lm / 4440lm / 4440lm | CRI90: 2970lm / 3150lm / 3330lm / 3330lm",
  },

  { label: "Type", value: "Fixed" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "115°" },
  { label: "Colour", value: "White / Black" },
  {
    label: "Dimming Option",
    value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable",
  },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/click_it_ambient_25w_photo2.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-ambient-12w",
    brand: "Electron",
    name: "Click It Ambient 12W",
    code: "Click It Ambient 12W",
    subtitle: "CLICK IT Spot",
    description: `Click It A12 spot is the smaller mid-sized available linear ambient luminaire of Click It system.
Available in black or white colour.
Beam angle of 115 degrees
Length of 407mm.
L90/B10 50.000h
3SDCM
`,
    images: [import.meta.env.BASE_URL + "products/410f2_click_it_ambinet_12w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT AMBIENT 12.4W (CLICK IT A12)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  {
    label: "LED Source",
    value:
      "CRI80: 1980lm / 2100lm / 2220lm / 2220lm | CRI90: 1485lm / 1575lm / 1665lm / 1665lm",
  },

  { label: "Type", value: "Fixed" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "115°" },
  { label: "Colour", value: "White / Black" },
  {
    label: "Dimming Option",
    value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable",
  },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/click_it_ambient_12w_photo2.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-ambient-9w",
    brand: "Electron",
    name: "Click It Ambient 9W",
    code: "Click It Ambient 9W",
    subtitle: "CLICK IT Spot",
    description: `Click It A9 spot is the smallest sized available linear ambient luminaire of Click It system.
Available in black or white colour.
Beam angle of 115 degrees
Length of 205mm.
L90/B10 50.000h
3SDCM
`,
    images: [import.meta.env.BASE_URL + "products/411f2_click_it_ambinet_9w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT AMBIENT 9.2W" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  {
    label: "LED Source",
    value:
      "CRI80: 990lm / 1050lm / 1110lm / 1110lm | CRI90: 740lm / 790lm / 830lm / 830lm",
  },

  { label: "Type", value: "Fixed" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "115°" },
  { label: "Colour", value: "White / Black" },
  {
    label: "Dimming Option",
    value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable",
  },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/click_it_ambient_9w_photo2.jpg"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-pendant-21w",
    brand: "Electron",
    name: "Click It Pendant 21W",
    code: "Click It Pendant 21W",
    subtitle: "CLICK IT Spot",
    description: `Click It PD21 is a cylindrical decorative luminaire of Click it system.
Available in black or white colour.
It is offered with a variety of accessories : honeycomb, line spread lens, softening lens, snoot, or half snoot.
L90/B10 50.000h.
3SDCM
`,
    images: [import.meta.env.BASE_URL + "products/416f2_click_it_pendant_21w.jpg"],
    solutions: ["Click It"],
    specs: [
  { label: "Model", value: "CLICK IT PENDANT 20.6W" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  {
    label: "LED Source",
    value:
      "CRI80: 2147lm / 2309lm / 2379lm / 2309lm | CRI90: 1610lm / 1730lm / 1785lm / 1730lm",
  },

  { label: "Type", value: "Pendant" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "18° / 37° / 42°" },
  { label: "Colour", value: "White / Black" },
  {
    label: "Dimming Option",
    value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable",
  },
  {
    label: "Accessories",
    value: "Standard / Honeycomb / Line spread lens / Softening lens",
  },
  {
    label: "Extras",
    value:
      "No Extras / Snoot Black / Half Snoot Black / Frosted Cover / Snoot White / Half Snoot White",
  },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/screenshot_2025-10-23_130318.png"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-pendant-10w",
    brand: "Electron",
    name: "Click It Pendant 10W",
    code: "Click It Pendant 10W",
    subtitle: "CLICK IT Spot",
    description: `Click It PD10 is a small sized cylindrical decorative luminaire of Click it system.
Available in black or white colour.
UGR<22(46°) / UGR<18(32°) / UGR<18(27°)
L90/B10 50.000h
3SDCM
`,
    images: [import.meta.env.BASE_URL + "products/417f2_click_it_pendant_10w.jpg"],
    solutions: ["Click It"],
specs: [
  { label: "Model", value: "CLICK IT PENDANT 10W (CLICK IT PD10)" },
  { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

  // (opțional, dar e în tabel)
  {
    label: "LED Source",
    value:
      "CRI80: 767lm / 823lm / 888lm / 888lm | CRI90: 575lm / 615lm / 710lm / 710lm",
  },

  { label: "Type", value: "Pendant" },
  { label: "CRI", value: "80 / 90" },
  { label: "Beam Angle", value: "27° / 32° / 46°" },
  { label: "Colour", value: "White / Black" },
  {
    label: "Dimming Option",
    value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable",
  },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/screenshot_2025-10-23_130814.png"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
  {
    id: "click-it-pendant-v-12w",
    brand: "Electron",
    name: "Click It Pendant V 12W Black",
    code: "Click It Pendant V 12W Black",
    subtitle: "CLICK IT Spot",
    description: `Click It PD V is a decorative pendant V shaped luminaire of Click It System.
Available in black, white or gold colour (Inner shade: white).
Diameter of 318mm.
L90/B10 50.000h
3SDCM
`,
    images: [import.meta.env.BASE_URL + "products/420_click_it_pendant_v_12w.jpg"],
    solutions: ["Click It"],
specs: [
  { label: "Model", value: "CLICK IT PENDANT V (CLICK IT PD V)" },
  { label: "Watt", value: "12.3W" },
  { label: "CCT", value: "2700K / 3000K / 4000K" }, // *available also in 5000K upon request
  { label: "LED Source", value: "1365lm / 1515lm / 1635lm" },
  { label: "Type", value: "Fixed" },
  { label: "CRI", value: "90" },
  { label: "Beam Angle", value: "85°" },
  { label: "Colour", value: "Black / White / Gold" },
  { label: "Dimming Option", value: "42V PWM Dimmable / 48V DALI Dimmable / 48V Wireless Dimmable" },
],
    dimensions: {
    images:  [import.meta.env.BASE_URL + "products/screenshot_2025-10-23_131128.png"],
  text: "Dimensiunile exacte diferă în funcție de variantă.",
},
    documents: [
      { label: "Catalog (PDF)", type: "catalog", url: "#" },
      { label: "Fișă tehnică (PDF)", type: "datasheet", url: "#" },
      { label: "BIM (ZIP)", type: "bim", url: "#" },
      { label: "CAD (DWG)", type: "cad", url: "#" },
    ],
  },
];
