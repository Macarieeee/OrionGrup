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
  | "Nano"
  | "Trimless Downlights"
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
    images: ["/products/400f1_click_it_spot_7w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
    solutions: ["Click It"],
    dimensions: {
      images: ["/products/screenshot_2025-10-23_131550.png"],
    },
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
    images: ["/products/399f2_click_it_spot_18w_-_tw_12w-17w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/399sx_click_it_spot_18w_-_tw_12w-17w.jpg"],
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
    images: ["/products/393_click_it_track_sf.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
      images: ["/products/clk.013x-dimensions.jpg"],
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
    images: ["/products/393_click_it_track_tr.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
      images: ["/products/clk.001x-dimensions.jpg"],
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
    images: ["/products/394a_2.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
      images: ["/products/394a_CLICK_IT_Prefabricated_Corners.jpg"],
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
    images: ["/products/394b_2.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
      images: [
        "/products/394b_CLICK_IT_Prefabricated_Corners.jpg",
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
  {
    id: "trimless-prefabricated-corners-90",
    brand: "Electron",
    name: "Trimless Prefabricated Corners 90 for CLICK IT",
    code: "CLICK IT SYSTEM",
    subtitle: "Trimless Prefabricated Corners",
    description: ``,
    images: ["/products/395a_1.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
      images: ["/products/395a_CLICK_IT_Prefabricated_Corners.jpg"],
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
    images: ["/products/423b.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
    solutions: ["Click It"],
    specs: [
    ],
    dimensions: {
      images: ["/products/396a_CLICK_IT_Accessories.jpg"],
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
    images: ["/products/398f2_click_it_spot_22w_-_tw_21w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/398sx_click_it_spot_22w_-_tw_21w.jpg"],
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
    images: ["/products/401f1_click_it_zoom_spot_12w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/screenshot_2025-10-23_131731.png"],
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
    images: ["/products/404f2_click_it_frame_spot_13w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/screenshot_2025-10-23_124846.png"],
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
    images: ["/products/405f2_click_it_gobo_spot_13w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/screenshot_2025-10-23_125039.png"],
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
    images: ["/products/406f2_click_it_linear_spot_15w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/406sx_click_it_linear_spot_15w.jpg"],
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
    images: ["/products/407f2_click_it_linear_wash_14w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/click_it_linear_wash_14w_schema1.jpg"],
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
    images: ["/products/408f2_click_it_ambinet_35w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/click_it_ambient_35w_photo2.jpg"],
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
    images: ["/products/409f2_click_it_ambinet_25w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/click_it_ambient_25w_photo2.jpg"],
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
    images: ["/products/410f2_click_it_ambinet_12w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/click_it_ambient_12w_photo2.jpg"],
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
    images: ["/products/411f2_click_it_ambinet_9w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/click_it_ambient_9w_photo2.jpg"],
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
    images: ["/products/416f2_click_it_pendant_21w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/screenshot_2025-10-23_130318.png"],
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
    images: ["/products/417f2_click_it_pendant_10w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/screenshot_2025-10-23_130814.png"],
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
    images: ["/products/420_click_it_pendant_v_12w.jpg",
    "/products/clickit1.jpeg",
    "/products/clickit2.jpeg",
    "/products/clickit3.jpeg",
    "/products/clickit4.jpeg",
    "/products/clickit5.jpeg",
    ],
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
      images: ["/products/screenshot_2025-10-23_131128.png"],
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
    id: "nano-recessed-track",
    brand: "Electron",
    name: "NANO Recessed Track",
    code: "NANO Recessed Track",
    subtitle: "NANO TRACK",
    description: ` 
Nano is a new miniaturized system suitable for highly demanding spaces.
The system is suitable for surface, pendant, recessed and trimless application.
Flexibility and easiness in the repositioning of the luminaires.
It is offered with a variety of accessories.
Nano system includes: Nano spots, Nano linear spots and Nano linear ambient luminaires.
Maximum load per system: 150W
The system is offered in 48 DALI Dimmable or Wireless Dimmable.
Curved tracks cannot have luminaires on.
`,
    images: ["/products/426m_rc_nano_system_2_.jpg",
    ],
    solutions: ["Nano"],
    specs: [

    ],
    dimensions: {
      images: ["/products/nan.041x-dimensions.jpg"],
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
    id: "nano-sruface-track",
    brand: "Electron",
    name: "NANO Surface Track",
    code: "NANO Surface Track",
    subtitle: "NANO TRACK",
    description: ` 
Nano is a new miniaturized system suitable for highly demanding spaces.
The system is suitable for surface, pendant, recessed and trimless application.
Flexibility and easiness in the repositioning of the luminaires.
it is offered with a variety of accessories.
Nano system Includes: Nano spots, Nano linear spots and Nano linear ambient luminaires.
Maximum load per system: 150W
The system is offered In 48 DALI Dimmable or Wireless Dimmable.
Curved tracks cannot have luminaires on.
`,
    images: ["/products/426m_sf_nano_system_2_.jpg",
    ],
    solutions: ["Nano"],
    specs: [

    ],
    dimensions: {
      images: ["/products/426_nano_system.jpg"],
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
    id: "nano-spot-6w-4w",
    brand: "Electron",
    name: "NANO Spot 6W & 4W",
    code: "NANO Spot 6W & 4W",
    subtitle: "NANO SPOT",
    description: ` 
Nano SP are two miniaturized spots of Nano System.
Available in 4 and 6Watt.
Rotatable 320 degrees.
Available in black or white colour.
UGR<16(50º) / UGR<13(38º) / UGR<11(28º)
L90/B10 50.000h
3SDCM
`,
    images: ["/products/430_nano_spot4w_spot6w_1.jpg",
    ],
    solutions: ["Nano"],
    specs: [
      { label: "Model", value: "NANO SPOT (NANO SP)" },

      // are 2 variante de putere în tabel
      { label: "Watt", value: "3.8W / 5.5W" },

      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

      // (opțional, dar e în tabel — valori separate pe fiecare watt)
      {
        label: "LED Source",
        value:
          "3.8W — CRI80: 460lm / 460lm / 500lm / 500lm | CRI90: 370lm / 400lm / 430lm / 460lm; " +
          "5.5W — CRI80: 670lm / 670lm / 720lm / 720lm | CRI90: 540lm / 575lm / 625lm / 670lm",
      },

      { label: "Type", value: "Adjustable" },
      { label: "CRI", value: "80 / 90" },
      { label: "Beam Angle", value: "28° / 38° / 50°" },
      { label: "Colour", value: "White / Black" },

      // atenție: în poză e 48V PWM (nu 42V)
      { label: "Dimming Option", value: "48V PWM Dimmable" },
    ],
    dimensions: {
      images: ["/products/430sx_nano_spot4w_spot6w.jpg"],
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
    id: "nano-spot-7w",
    brand: "Electron",
    name: "NANO Spot Round 7W",
    code: "NANO Spot Round 7W",
    subtitle: "NANO SPOT",
    description: ` 
Nano SP RD is an elegant flat round luminaire of Nano System.
It is a rotatable 320 degrees.
Available in black or white colour.
UGR < 18(60°) / UGR<17(48°) / UGR<19(35°) / UGR <18(20°) / UGR < 15(13°)
L90/B10 50.000h
3SDCM
`,
    images: ["/products/431_nano_spotround_7w_1.jpg",
    ],
    solutions: ["Nano"],
    specs: [
      { label: "Model", value: "NANO SPOT ROUND (NANO SP RD)" },
      { label: "Watt", value: "6.7W" },
      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

      // (opțional, dar e în tabel)
      {
        label: "LED Source",
        value:
          "CRI80: 820lm / 820lm / 885lm / 885lm | CRI90: 660lm / 705lm / 760lm / 820lm",
      },

      { label: "Type", value: "Adjustable" },
      { label: "CRI", value: "80 / 90" },
      { label: "Beam Angle", value: "13° / 20° / 35° / 48° / 60°" },
      { label: "Colour", value: "White / Black" },
      { label: "Dimming Option", value: "48V PWM Dimmable" },
    ],
    dimensions: {
      images: ["/products/431sx_nano_spotround_7w.jpg"],
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
    id: "nano-ambient-13w-7w",
    brand: "Electron",
    name: "NANO Ambient 13W & 7W",
    code: "NANO Ambient 13W & 7W",
    subtitle: "NANO Ambient",
    description: ` 
Nano A consists of two linear ambient luminaire of Nano system.
Available in black or white colour.
With a length of 300 or 600mm.
L90/B10 50.000h
3SDCM
`,
    images: ["/products/432_nano_ambient7w_ambient13w_1.jpg",
    ],
    solutions: ["Nano"],
    specs: [
      { label: "Model", value: "NANO AMBIENT (NANO A)" },

      // sunt 2 variante de putere în tabel
      { label: "Watt", value: "6.7W / 13.4W" },

      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

      // în poză apare doar CRI90 (nu și CRI80)
      {
        label: "LED Source",
        value:
          "6.7W — CRI90: 615lm / 620lm / 630lm / 630lm; " +
          "13.4W — CRI90: 1030lm / 1040lm / 1060lm / 1060lm",
      },

      { label: "Type", value: "Fixed" },
      { label: "CRI", value: "90" },
      { label: "Beam Angle", value: "115°" },
      { label: "Colour", value: "White / Black" },
      { label: "Dimming Option", value: "48V PWM Dimmable" },
    ],
    dimensions: {
      images: ["/products/432sx_nano_ambient7w_ambient13w.jpg"],
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
    id: "nano-linear-spot-10w-5w",
    brand: "Electron",
    name: "NANO Linear Spot 10W & 5W",
    code: "NANO Linear Spot 10W & 5W",
    subtitle: "NANO Linear Spot",
    description: ` 
NANO LS consists of two directional linear luminaires of Nano System.
Available in black or white colour.
Available in 33 degrees & 27 degrees for antiglare version.
With a length of 300 or 600mm.
UGR <10(33°)
L90/B10 50.000h
3SDCM
`,
    images: ["/products/433_nano_linearspot5w_linearspot10w_1_1.jpg",
    ],
    solutions: ["Nano"],
    specs: [
      { label: "Model", value: "NANO LINEAR SPOT (NANO LS)" },

      // sunt 2 variante de putere în tabel
      { label: "Watt", value: "4.8W / 9.6W" },

      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

      // în poză apare doar CRI90
      {
        label: "LED Source",
        value:
          "4.8W — CRI90: 460lm / 460lm / 470lm / 480lm; " +
          "9.6W — CRI90: 920lm / 920lm / 960lm / 970lm",
      },

      { label: "Type", value: "Fixed" },
      { label: "CRI", value: "90" },
      { label: "Beam Angle", value: "33°" },
      { label: "Colour", value: "White / Black" },
      { label: "Dimming Option", value: "48V PWM Dimmable" },
    ],
    dimensions: {
      images: ["/products/433sx_nano_linearspot5w_linearspot10w_1.jpg"],
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
    id: "reform-30-tr",
    brand: "Electron",
    name: "Reform 30 TR",
    code: "Reform 30 TR",
    subtitle: "",
    description: ` 
Reform 30 is a complete series of miniaturized downlights available recessed, trimless or surface.
It is available in round form.
Power consumption: 3 watt and 6 watt.
Beam angle varies from 12 to 50 degrees.
Accessories available: honeycomb.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
Driver, Emergency kit, battery replacement accessibility of emergency kit should be considered as the kit does not pass through the Trimless luminaire cutout.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR Constant current 350mA @3W / 700mA @ 6.3W.
`,
    images: ["/products/reform30tr_site_m_copy.jpg",
    ],
    solutions: ["Trimless Downlights"],
    specs: [
      { label: "Model", value: "REFORM 30 Trimless (REFORM 30 TR)" },

      // în tabel apar 4 variante de putere (în funcție de optică)
      { label: "LED Power", value: "3W / 5.8W / 3W / 6.3W" },

      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

      // am păstrat valorile exact cum sunt în tabel, pe fiecare configurație
      {
        label: "LED Source",
        value:
          "12° — 3W: CRI80 310/310/330/360lm | CRI90 250/265/290/310lm; " +
          "12° — 5.8W: CRI80 615/615/665/715lm | CRI90 500/530/575/615lm; " +
          "28°/36°/50° — 3W: CRI80 396/396/428/428lm | CRI90 320/342/369/396lm; " +
          "28°/36°/50° — 6.3W: CRI80 669/669/722/722lm | CRI90 540/577/623/669lm",
      },

      { label: "Type", value: "Adjustable" },

      { label: "CRI", value: "80 / 90" },

      { label: "Beam Angle", value: "12° / 28° / 36° / 50°" },

      {
        label: "Luminaire Colour",
        value: "Base: White / Black • Spot: White / Black • Inner Ring: White / Black",
      },

      {
        label: "Dimming Option",
        value:
          "Without Driver / Non Dimmable / Analogue (1–10V) / DMX / DALI / Push Button / Phase Cut / Wireless",
      },

      { label: "Accessories", value: "Standard / Honeycomb / Softening lens" },

      { label: "Extras", value: "No Extras / Emergency" },
    ],
    dimensions: {
      images: ["/products/660sx_reform_30_tr.jpg"],
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
    id: "reform-30-in-out-tr",
    brand: "Electron",
    name: "Reform 30 In-out TR",
    code: "Reform 30 In-out TR",
    subtitle: "",
    description: ` 
Reform 30 is a complete series of miniaturized downlights available recessed, trimless or surface.
It is available in round form.
Power consumption: 3 watt and 6 watt.
Beam angle varies from 12 to 50 degrees.
Accessories available: honeycomb.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
Driver, Emergency kit, battery replacement accessibility of emergency kit should be considered as the kit does not pass through the Trimless luminaire cutout.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort .(UGR<14 /black inner ring)
Constant current 350mA @3W / 700mA @ 6.3W.
`,
    images: ["/products/reform30tr_inout_site_m_copy.jpg",
    ],
    solutions: ["Trimless Downlights"],
    specs: [
      { label: "Model", value: "REFORM 30 IN-OUT Trimless (REFORM 30 IO TR)" },

      // apar 4 variante de putere în tabel (în funcție de optică)
      { label: "LED Power", value: "3W / 5.8W / 3W / 6.3W" },

      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

      {
        label: "LED Source",
        value:
          "12° — 3W: CRI80 310/310/330/360lm | CRI90 250/265/290/310lm; " +
          "12° — 5.8W: CRI80 615/615/665/715lm | CRI90 500/530/575/615lm; " +
          "28°/36°/50° — 3W: CRI80 396/396/428/428lm | CRI90 320/342/369/396lm; " +
          "28°/36°/50° — 6.3W: CRI80 669/669/722/722lm | CRI90 540/577/623/669lm",
      },

      { label: "Type", value: "Adjustable" },
      { label: "CRI", value: "80 / 90" },
      { label: "Beam Angle", value: "12° / 28° / 36° / 50°" },

      {
        label: "Luminaire Colour",
        value: "Base: White / Black • Spot: White / Black • Inner Ring: White / Black",
      },

      // în poză apare doar “Without Driver”
      { label: "Dimming Option", value: "Without Driver" },

      { label: "Accessories", value: "Standard / Honeycomb / Softening lens" },
      { label: "Extras", value: "No Extras / Emergency" },
    ],
    dimensions: {
      images: ["/products/reform_30_in_out_tr_schema1.jpg"],
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
    id: "reform-52-tr",
    brand: "Electron",
    name: "Reform 52 TR",
    code: "Reform 52 TR",
    subtitle: "",
    description: ` 
Reform 52 is a complete series of downlights available recessed, trimless or surface.
It is available in round form.
Power consumption : 12watt and 8.2watt.
Beam angle varies from 6 to 44 degrees.
Accessories available: honeycomb, line spread lens or softening lens.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<12 /black inner ring).
`,
    images: ["/products/reform52tr_site_m_copy.jpg",
    ],
    solutions: ["Trimless Downlights"],
    specs: [
      { label: "Model", value: "REFORM 52 Trimless (REFORM 52 TR)" },

      // în tabel sunt 2 variante de putere
      { label: "LED Power", value: "8.2W / 12W" },

      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },

      {
        label: "LED Source",
        value:
          "8.2W — CRI80: 779lm / 779lm / 841lm / 903lm | CRI90: 628lm / 673lm / 726lm / 779lm; " +
          "12W — CRI80: 1590lm / 1710lm / 1830lm / 1710lm | CRI90: 1380lm / 1485lm / 1590lm / 1590lm",
      },

      { label: "Type", value: "Adjustable" },
      { label: "CRI", value: "80 / 90" },

      // unghiuri diferite pe fiecare putere
      { label: "Beam Angle", value: "8.2W: 6° | 12W: 21° / 33° / 44°" },

      {
        label: "Luminaire Colour",
        value: "Base: White / Black • Spot: White / Black • Inner Ring: White / Black",
      },

      {
        label: "Dimming Option",
        value:
          "Without Driver / Non Dimmable / Analogue (1–10V) / DMX / DALI / Push Button / Phase Cut / Wireless",
      },

      {
        label: "Accessories",
        value: "Standard / Honeycomb / Line spread lens / Softening lens",
      },

      { label: "Extras", value: "No Extras / Emergency" },
    ],
    dimensions: {
      images: ["/products/reform52tr_site_m_copy.jpg"],
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
    id: "reform-52-in-out-tr",
    brand: "Electron",
    name: "Reform 52 In-out TR",
    code: "Reform 52 In-out TR",
    subtitle: "",
    description: ` 
Reform 52 is a complete series of downlights available recessed, trimless or surface.
It is available in round form.
Power consumption : 12watt and 8.2watt.
Beam angle varies from 6 to 44 degrees.
Accessories available: honeycomb, line spread lens or softening lens.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<12 /black inner ring).
`,
    images: ["/products/reform52tr_inout_site_m_copy.jpg",
    ],
    solutions: ["Trimless Downlights"],
    specs: [
      { label: "Model", value: "REFORM 52 IN-OUT Trimless (REFORM 52 IO TR)" },

      // 2 variante de putere
      { label: "LED Power", value: "8.2W / 12W" },

      // în notă: 3500K & 6500K disponibile la cerere
      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K (3500K & 6500K on request)" },

      {
        label: "LED Source",
        value:
          "8.2W — CRI80: 779lm / 779lm / 841lm / 903lm | CRI90: 628lm / 673lm / 726lm / 779lm; " +
          "12W — CRI80: 1590lm / 1710lm / 1830lm / 1710lm | CRI90: 1380lm / 1485lm / 1590lm / 1590lm",
      },

      { label: "Type", value: "Adjustable" },
      { label: "CRI", value: "80 / 90" },

      // unghiuri diferite pe fiecare putere
      { label: "Beam Angle", value: "8.2W: 6° | 12W: 21° / 33° / 44°" },

      {
        label: "Luminaire Colour",
        value: "Base: White / Black • Spot: White / Black • Inner Ring: White / Black",
      },

      // în tabel aici apare doar “Without Driver”
      { label: "Dimming Option", value: "Without Driver" },

      { label: "Accessories", value: "Standard / Honeycomb / Line spread lens / Softening lens" },
      { label: "Extras", value: "No Extras / Emergency" },
    ],
    dimensions: {
      images: ["/products/reform_52_in_out_tr_schema1.jpg"],
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
    id: "whisper-tr",
    brand: "Electron",
    name: "Whisper TR",
    code: "Whisper TR",
    subtitle: "",
    description: ` 
Whisper is a high aesthetically downlight.
It is offered either recessed or trimless.
It is available either round or square.
WHISPER DEEP version is also available for GU10 LED lamps.
Luminaire outer trim material: aluminium.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15).
Selection of IP protection: either IP20 or IP54 (face only).
`,
    images: ["/products/WHISPER_TR.jpg",
    ],
    solutions: ["Trimless Downlights"],
    specs: [
      { label: "Model", value: "REFORM 52 IN-OUT Trimless (REFORM 52 IO TR)" },

      // 2 variante de putere
      { label: "LED Power", value: "8.2W / 12W" },

      // în notă: 3500K & 6500K disponibile la cerere
      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K (3500K & 6500K on request)" },

      {
        label: "LED Source",
        value:
          "8.2W — CRI80: 779lm / 779lm / 841lm / 903lm | CRI90: 628lm / 673lm / 726lm / 779lm; " +
          "12W — CRI80: 1590lm / 1710lm / 1830lm / 1710lm | CRI90: 1380lm / 1485lm / 1590lm / 1590lm",
      },

      { label: "Type", value: "Adjustable" },
      { label: "CRI", value: "80 / 90" },

      // unghiuri diferite pe fiecare putere
      { label: "Beam Angle", value: "8.2W: 6° | 12W: 21° / 33° / 44°" },

      {
        label: "Luminaire Colour",
        value: "Base: White / Black • Spot: White / Black • Inner Ring: White / Black",
      },

      // în tabel aici apare doar “Without Driver”
      { label: "Dimming Option", value: "Without Driver" },

      { label: "Accessories", value: "Standard / Honeycomb / Line spread lens / Softening lens" },
      { label: "Extras", value: "No Extras / Emergency" },
    ],
    dimensions: {
      images: ["/products/whisper_tr_schema1.jpg"],
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
    id: "crush-tr-round",
    brand: "Electron",
    name: "Crush TR Round",
    code: "Crush TR Round",
    subtitle: "",
    description: ` 
Crush is a downlight available either recessed or trimless.
It is available in square form.
Power consumption: varies from 6 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
CRUSH is also available for GU10 LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15).
Selection of IP protection: either IP20 or IP54 (face only).
`,
    images: ["/products/crush_tr_rd.jpg",
    ],
    solutions: ["Trimless Downlights"],
    specs: [
      { label: "Model", value: "CRUSH TR (CRUSH TR) — Low Depth 7W (LD7)" },
      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },
      { label: "LED Source", value: "CRI80: 930 / 960 / 1020 / 1020 lm | CRI90: 762 / 792 / 840 / 840 lm" },
      { label: "Beam Angle", value: "30°" },
      { label: "Luminaire Colour", value: "Outer: White / Black • Inner Ring: White / Black" },
      {
        label: "Dimming Option",
        value: "Without Driver / Non Dimmable / Analogue (1–10V) / DMX / DALI / Push Button / Phase Cut / Wireless",
      },
      { label: "Cover", value: "Standard / Honeycomb / Linear spread / Softening lens" },
      { label: "IP Rate", value: "IP20 / IP54" },
      { label: "Extras", value: "No Extras / Emergency Kit" },
    ],
    dimensions: {
      images: ["/products/683.jpg"],
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
    id: "crush-tr-square",
    brand: "Electron",
    name: "Crush TR Square",
    code: "Crush TR Square",
    subtitle: "",
    description: ` 
Crush is a downlight available either recessed or trimless.
It is available in square form.
Power consumption: varies from 6 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
CRUSH is also available for GU10 LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15).
Selection of IP protection: either IP20 or IP54 (face only).
`,
    images: ["/products/CRUSH_TR.jpg",
    ],
    solutions: ["Trimless Downlights"],
    specs: [
      { label: "Model", value: "CRUSH TR (CRUSH TR) — Low Depth 7W (LD7)" },
      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },
      { label: "LED Source", value: "CRI80: 930 / 960 / 1020 / 1020 lm | CRI90: 762 / 792 / 840 / 840 lm" },
      { label: "Beam Angle", value: "30°" },
      { label: "Luminaire Colour", value: "Outer: White / Black • Inner Ring: White / Black" },
      {
        label: "Dimming Option",
        value: "Without Driver / Non Dimmable / Analogue (1–10V) / DMX / DALI / Push Button / Phase Cut / Wireless",
      },
      { label: "Cover", value: "Standard / Honeycomb / Linear spread / Softening lens" },
      { label: "IP Rate", value: "IP20 / IP54" },
      { label: "Extras", value: "No Extras / Emergency Kit" },
    ],
    dimensions: {
      images: ["/products/crush_tr_dimensions.jpg"],
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
    id: "crush-tr-double",
    brand: "Electron",
    name: "Crush TR Double",
    code: "Crush TR Double",
    subtitle: "",
    description: ` 
Crush is a downlight available either recessed or trimless.
It is available in square form.
Power consumption: varies from 6 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
CRUSH is also available for GU10 LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15).
Selection of IP protection: either IP20 or IP54 (face only).
`,
    images: ["/products/CRUSH_TR_DOUBLE.jpg",
    ],
    solutions: ["Trimless Downlights"],
    specs: [
      { label: "Model", value: "CRUSH TR (CRUSH TR) — Low Depth 7W (LD7)" },
      { label: "CCT", value: "2700K / 3000K / 4000K / 5000K" },
      { label: "LED Source", value: "CRI80: 930 / 960 / 1020 / 1020 lm | CRI90: 762 / 792 / 840 / 840 lm" },
      { label: "Beam Angle", value: "30°" },
      { label: "Luminaire Colour", value: "Outer: White / Black • Inner Ring: White / Black" },
      {
        label: "Dimming Option",
        value: "Without Driver / Non Dimmable / Analogue (1–10V) / DMX / DALI / Push Button / Phase Cut / Wireless",
      },
      { label: "Cover", value: "Standard / Honeycomb / Linear spread / Softening lens" },
      { label: "IP Rate", value: "IP20 / IP54" },
      { label: "Extras", value: "No Extras / Emergency Kit" },
    ],
    dimensions: {
      images: ["/products/crush_tr_double_dimensions.jpg"],
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
    id: "polar-tr-7.5w",
    brand: "Electron",
    name: "Polar TR 7.5W",
    code: "Polar TR 7.5W",
    subtitle: "",
    description: ` 
Polar is a miniaturized downlight available either trimless or recessed.
It is ideal in spaces with low depth ceiling due to its special design.
It has a low UGR ensuring visual comfort (UGR<16).
It is available in round (7.5W, 12W, 18W) or square (7.5W).
Body material: aluminium.
Trimless outer base: PC.
3 SDCM
L90/B10 50.000h
Selection of IP protection: either IP40 or IP44.
`,
    images: ["/products/684_8.2w_polar_tr_1.jpg",
    ],
    solutions: ["Trimless Downlights"],
specs: [
  { label: "Model", value: "POLAR Trimless (POLAR TR)" },

  // apar 3 variante de putere
  { label: "LED Power", value: "7.5W / 12W / 18W" },

  // pentru 7.5W există 2 forme + IP diferit
  { label: "Type", value: "Round / Square" },
  { label: "IP Protection", value: "Round: IP40 • Square: IP44" },

  { label: "CCT", value: "7.5W: 2700K / 3000K / 3500K / 4000K / 5000K • 12W/18W: 2700K / 3000K / 4000K / 5000K" },

  {
    label: "LED Source",
    value:
      "7.5W — CRI80: 792/792/855/855/918lm | CRI90: 639/684/684/738/792lm; " +
      "12W — CRI80: 1590/1710/1830/1710lm | CRI90: 1380/1485/1590/1590lm; " +
      "18W — CRI80: 2065/2225/2380/2225lm | CRI90: 1795/1930/2065/2065lm",
  },

  // în tabel: 7.5W are 12/16/20/30/44, iar 12W are 18/30/50 (18W pare să continue aceeași optică)
  { label: "Beam Angle", value: "7.5W: 12° / 16° / 20° / 30° / 44° • 12W/18W: 18° / 30° / 50°" },

  // tipul optic e Fixed
  { label: "Optic", value: "Fixed" },

  { label: "Colour", value: "White / Black" },

  {
    label: "Dimming Option",
    value:
      "7.5W: Without Driver / Non Dimmable / Phase Cut / 24V PWM Dimmable / 48V PWM Dimmable • " +
      "12W/18W: Without Driver / Non Dimmable / Push Button / 48V PWM Dimmable",
  },

  // în dreapta la 12W apar explicit extras
  { label: "Extras", value: "Standard / Honeycomb" },
],
    dimensions: {
      images: ["/products/685sx.jpg"],
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
    id: "polar-tr-12w",
    brand: "Electron",
    name: "Polar TR 12W",
    code: "Polar TR 12W",
    subtitle: "",
    description: ` 
Polar is a miniaturized downlight available either trimless or recessed.
It is ideal in spaces with low depth ceiling due to its special design.
It has a low UGR ensuring visual comfort (UGR<16).
It is available in round (7.5W, 12W, 18W) or square (7.5W).
Body material: aluminium.
Trimless outer base: PC.
3 SDCM
L90/B10 50.000h
Selection of IP protection: either IP40 or IP44.
`,
    images: ["/products/684_12w_polar_tr.jpg",
    ],
    solutions: ["Trimless Downlights"],
specs: [
  { label: "Model", value: "POLAR Trimless (POLAR TR)" },

  // apar 3 variante de putere
  { label: "LED Power", value: "7.5W / 12W / 18W" },

  // pentru 7.5W există 2 forme + IP diferit
  { label: "Type", value: "Round / Square" },
  { label: "IP Protection", value: "Round: IP40 • Square: IP44" },

  { label: "CCT", value: "7.5W: 2700K / 3000K / 3500K / 4000K / 5000K • 12W/18W: 2700K / 3000K / 4000K / 5000K" },

  {
    label: "LED Source",
    value:
      "7.5W — CRI80: 792/792/855/855/918lm | CRI90: 639/684/684/738/792lm; " +
      "12W — CRI80: 1590/1710/1830/1710lm | CRI90: 1380/1485/1590/1590lm; " +
      "18W — CRI80: 2065/2225/2380/2225lm | CRI90: 1795/1930/2065/2065lm",
  },

  // în tabel: 7.5W are 12/16/20/30/44, iar 12W are 18/30/50 (18W pare să continue aceeași optică)
  { label: "Beam Angle", value: "7.5W: 12° / 16° / 20° / 30° / 44° • 12W/18W: 18° / 30° / 50°" },

  // tipul optic e Fixed
  { label: "Optic", value: "Fixed" },

  { label: "Colour", value: "White / Black" },

  {
    label: "Dimming Option",
    value:
      "7.5W: Without Driver / Non Dimmable / Phase Cut / 24V PWM Dimmable / 48V PWM Dimmable • " +
      "12W/18W: Without Driver / Non Dimmable / Push Button / 48V PWM Dimmable",
  },

  // în dreapta la 12W apar explicit extras
  { label: "Extras", value: "Standard / Honeycomb" },
],
    dimensions: {
      images: ["/products/685sx12_2.png"],
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
    id: "polar-tr-18w",
    brand: "Electron",
    name: "Polar TR 18W",
    code: "Polar TR 18W",
    subtitle: "",
    description: ` 
Polar is a miniaturized downlight available either trimless or recessed.
It is ideal in spaces with low depth ceiling due to its special design.
It has a low UGR ensuring visual comfort (UGR<16).
It is available in round (7.5W, 12W, 18W) or square (7.5W).
Body material: aluminium.
Trimless outer base: PC.
3 SDCM
L90/B10 50.000h
Selection of IP protection: either IP40 or IP44.
`,
    images: ["/products/684_18w_polar_tr.jpg",
    ],
    solutions: ["Trimless Downlights"],
specs: [
  { label: "Model", value: "POLAR Trimless (POLAR TR)" },

  // apar 3 variante de putere
  { label: "LED Power", value: "7.5W / 12W / 18W" },

  // pentru 7.5W există 2 forme + IP diferit
  { label: "Type", value: "Round / Square" },
  { label: "IP Protection", value: "Round: IP40 • Square: IP44" },

  { label: "CCT", value: "7.5W: 2700K / 3000K / 3500K / 4000K / 5000K • 12W/18W: 2700K / 3000K / 4000K / 5000K" },

  {
    label: "LED Source",
    value:
      "7.5W — CRI80: 792/792/855/855/918lm | CRI90: 639/684/684/738/792lm; " +
      "12W — CRI80: 1590/1710/1830/1710lm | CRI90: 1380/1485/1590/1590lm; " +
      "18W — CRI80: 2065/2225/2380/2225lm | CRI90: 1795/1930/2065/2065lm",
  },

  // în tabel: 7.5W are 12/16/20/30/44, iar 12W are 18/30/50 (18W pare să continue aceeași optică)
  { label: "Beam Angle", value: "7.5W: 12° / 16° / 20° / 30° / 44° • 12W/18W: 18° / 30° / 50°" },

  // tipul optic e Fixed
  { label: "Optic", value: "Fixed" },

  { label: "Colour", value: "White / Black" },

  {
    label: "Dimming Option",
    value:
      "7.5W: Without Driver / Non Dimmable / Phase Cut / 24V PWM Dimmable / 48V PWM Dimmable • " +
      "12W/18W: Without Driver / Non Dimmable / Push Button / 48V PWM Dimmable",
  },

  // în dreapta la 12W apar explicit extras
  { label: "Extras", value: "Standard / Honeycomb" },
],
    dimensions: {
      images: ["/products/685sx18_1.png"],
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
    id: "limit-4.7w-tr",
    brand: "Electron",
    name: "Limit 4.7W TR",
    code: "IP67-IP66",
    subtitle: "",
    description: ` 
LIMIT 67/66 is an elegant waterproof 'rimless or recessed downlight available in 3 different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
The series offers low UGR ensuring visual comfort.
Available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h 
IP Protection: IP67/IP66
`,
    images: ["/products/688f.jpg",
    ],
    solutions: ["Trimless Downlights"],
specs: [
  { label: "Model", value: "LIMIT TR (LIMIT TR)" },

  // toate variantele din tabel
  { label: "LED Power", value: "4.7W / 6.4W / 8.8W / 12.8W / 17W" },

  // CCT (4.7W are până la 4000K în tabel, restul au până la 5000K)
  { label: "CCT", value: "4.7W: 2700K / 3000K / 4000K • 6.4W/8.8W/12.8W/17W: 2700K / 3000K / 4000K / 5000K" },

  {
    label: "LED Source",
    value:
      "4.7W — CRI80: 480/510/525lm | CRI90: 395/415/435lm; " +
      "6.4W — CRI80: 793/843/867/878lm | CRI90: 655/684/724/759lm; " +
      "8.8W — CRI80: 1204/1279/1316/1331lm | CRI90: 993/1038/1098/1151lm; " +
      "12.8W — CRI80: 1678/1783/1835/1857lm | CRI90: 1384/1447/1531/1605lm; " +
      "17W — CRI80: 2525/2680/2760/2790lm | CRI90: 2080/2180/2300/2415lm",
  },

  { label: "Type", value: "Fixed" },
  { label: "CRI", value: "80 / 90" },

  // unghiuri diferite în funcție de putere
  {
    label: "Beam Angle",
    value:
      "4.7W: 18° / 24° / 30° / 38° • " +
      "6.4W: 24° / 36° / 48° • " +
      "8.8W: 17° / 24° / 36° / 60°",
  },

  { label: "Colour", value: "White / Black" },

  // 4.7W are doar Without Driver (cu notă **)
  {
    label: "Dimming Option",
    value:
      "4.7W: Without Driver • " +
      "6.4W/8.8W/12.8W/17W: Without Driver / Non Dimmable / Analogue (1–10V) / DMX / DALI / Push Button / Phase Cut / Wireless",
  },

  // în coloana de Accessories din dreapta sus (pentru 4.7W) apar acestea
  { label: "Accessories", value: "No Extras / Emergency / Honeycomb" },
],
    dimensions: {
      images: ["/products/690sx.png"],
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
