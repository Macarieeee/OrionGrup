-- Electron products part 4

begin;



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
  'electron-petite-anti-glare',
  'Electron',
  'Petite Anti-glare',
  'Petite Anti-glare',
  'Ceiling Recessed / Crystal - Starlight Series',
  'PETITE ANTI-GLARE ideal for decorative lighting.
3 SDCM
L90/B10 50000h
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
PETITE ANTI-GLARE.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/p/e/petite_antiglare-21.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/petite_ag_table2.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/p/e/petite-ag-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Crystal - Starlight Series']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/p/e/petite-ag-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"PETITE ANTI-GLARE.pdf","url":"https://electron.gr/media/products/PETITE%20ANTI-GLARE.pdf"}]'::jsonb,
  148,
  null,
  'RON'
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
  'electron-talus-adj-rc',
  'Electron',
  'Talus ADJ RC',
  'Talus ADJ RC',
  'Ceiling Recessed / Petite Anti-glare',
  'o o
TALUS adjustable recessed downlight available in white or black colour.
Monochromatic,
TW, WD: 3 SDCM,
L90/B10 50.000h
RGBW:
White CCT at 4000K. (Other CCTs are available upon request).
TALUS ADJ RC.pdf
Photometrics (ldt files) TALUS RC ADJ.zip
Photometrics (ldt files) TALUS RC ADJ TW.zip
Photometrics (ldt files) TALUS RC ADJ WD.zip
Photometrics (ldt files) TALUS RC ADJ RGBW.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/t/a/talus_rc_adj.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/t/a/talus_rc_adj_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Petite Anti-glare']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/t/a/talus_rc_adj_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"TALUS ADJ RC.pdf","url":"https://electron.gr/media/products/TALUS%20ADJ%20RC.pdf"},{"label":"Photometrics (ldt files) TALUS RC ADJ.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20TALUS%20RC%20ADJ.zip"},{"label":"Photometrics (ldt files) TALUS RC ADJ TW.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20TALUS%20RC%20ADJ%20TW.zip"},{"label":"Photometrics (ldt files) TALUS RC ADJ WD.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20TALUS%20RC%20ADJ%20WD.zip"},{"label":"Photometrics (ldt files) TALUS RC ADJ RGBW.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20TALUS%20RC%20ADJ%20RGBW.zip"}]'::jsonb,
  149,
  null,
  'RON'
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
  'electron-talus-rc',
  'Electron',
  'Talus RC',
  'Talus RC',
  'Ceiling Recessed / Petite Anti-glare',
  'o o
TALUS Recessed downlight available in white or black colour.
Monochromatic, TW:
3 SDCM,
L90/B10 50.000h
WD:
Dimmable options.
3 SDCM
RGBW:
White CCT at 4000K. (Other CCTs are available upon request).
TALUS RC.pdf
Photometrics (ldt files) TALUS RC.zip
Photometrics (ldt files) TALUS RC TW.zip
Photometrics (ldt files) TALUS RC WD.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/t/a/talus_rc.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/t/a/talus_rc_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Petite Anti-glare']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/t/a/talus_rc_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"TALUS RC.pdf","url":"https://electron.gr/media/products/TALUS%20RC.pdf"},{"label":"Photometrics (ldt files) TALUS RC.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20TALUS%20RC.zip"},{"label":"Photometrics (ldt files) TALUS RC TW.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20TALUS%20RC%20TW.zip"},{"label":"Photometrics (ldt files) TALUS RC WD.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20TALUS%20RC%20WD.zip"}]'::jsonb,
  150,
  null,
  'RON'
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
  'electron-rodita',
  'Electron',
  'Rodita',
  'electron-rodita',
  'Ceiling Recessed / Talus ADJ RC',
  'RODITA downlight with a tilt of 60o.
Monochromatic:
High efficiency deep reflector.
Luminaire body: aluminium.
3 SDCM (for monochromatic models).
L90/B10 50.000h
RGBW:
White CCT at 4000K. (Other CCTs are available upon request).
L80/B10 50.000h
RODITA.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/R/O/RODITA.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/r/o/rodita_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Talus ADJ RC']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/r/o/rodita_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"RODITA.pdf","url":"https://electron.gr/media/products/RODITA.pdf"}]'::jsonb,
  151,
  null,
  'RON'
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
  'electron-sorena',
  'Electron',
  'Sorena',
  'electron-sorena',
  'Ceiling Recessed / Rodita',
  'SORENA downlight with a tilt of 60o and rotation of 360o.
Monochromatic:
High purity aluminium. 3 SDCM (for monochromatic models).
L90/B10 50.000h
RGBW:
White CCT at 4000K. (Other CCTs are available upon request).
L80/B10 50.000h
SORENA.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SORENA.jpg']::text[],
  array['Ceiling Recessed', 'Rodita']::text[],
  '{}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SORENA.pdf","url":"https://electron.gr/media/products/SORENA.pdf"}]'::jsonb,
  152,
  null,
  'RON'
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
  'electron-kronos',
  'Electron',
  'Kronos',
  'electron-kronos',
  'Ceiling Recessed / Sorena',
  'o o
KRONOS downlight.
High efficiency deep reflector with clear cover glass.
BRIDGELUX:
3 SDCM,
L90/B10 50.000h
CREE (RGBW):
White CCT at 4000K. (Other CCTs are available upon request),
L80/B10 50.000h
KRONOS.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/k/r/kronos.jpg']::text[],
  array['Ceiling Recessed', 'Sorena']::text[],
  '{}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"KRONOS.pdf","url":"https://electron.gr/media/products/KRONOS.pdf"}]'::jsonb,
  153,
  null,
  'RON'
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
  'electron-ronelo',
  'Electron',
  'Ronelo',
  'electron-ronelo',
  'Ceiling Recessed / Kronos',
  'RONELO adjustable downlight with consumption of up to 62 watt.
High efficiency deep reflector with clear cover glass.
Ideal easy replacement in existing theater houselighting.
Dimmable options.
Increased efficiency.
Monochromatic, TW:
3 SDCM,
L90/B10 50.000h
RGBW:
White CCT at 4000K. (Other CCTs are available upon request).
L80/B10 50.000h
RONELO.pdf
Photometrics (ldt files) RONELO 45.zip
Photometrics (ldt files) RONELO 53.zip
Photometrics (ldt files) RONELO 62.zip
Photometrics (ldt files) RONELO TUNABLE WHITE.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/R/O/RONELO.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/r/o/ronelo_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Kronos']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/r/o/ronelo_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"RONELO.pdf","url":"https://electron.gr/media/products/RONELO.pdf"},{"label":"Photometrics (ldt files) RONELO 45.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20RONELO%2045.zip"},{"label":"Photometrics (ldt files) RONELO 53.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20RONELO%2053.zip"},{"label":"Photometrics (ldt files) RONELO 62.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20RONELO%2062.zip"},{"label":"Photometrics (ldt files) RONELO TUNABLE WHITE.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20RONELO%20TUNABLE%20WHITE.zip"}]'::jsonb,
  154,
  null,
  'RON'
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
  'electron-elto-panel-60x60',
  'Electron',
  'ELTO PANEL 60x60',
  'ELTO PANEL 60x60',
  'Ceiling Recessed / Ronelo',
  'o o o o o
The ELTO PANEL Series consists of high-quality lighting panels designed to accommodate various installation types, including recessed, surface-mounted, and pendant applications.
This adaptability makes it ideal for a wide array of commercial, corporate, and industrial environments.
Engineered with advanced optic lens technology, the series ensures a uniform and consistent light distribution.
With high lumen efficiency, the ELTO PANELS deliver superior brightness while maintaining energy efficiency.
The series offers visual comfort (UGR<19), making it suitable for workplaces, educational institutions, and other facilities.
Available Non Dimmable, Phase Cut, or Dali Dimmable.
Mineral Fiber Ceiling
Recessed
Surface
Pendant
All installation accessories supplied as extra.
ELTO Panel.pdf
ELTO PANEL - Installation Manual.pdf
Photometrics ELTO PANEL.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/l/elto_60.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/l/elto-1.jpg']::text[],
  array['Ceiling Recessed', 'Ronelo']::text[],
  '{}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ELTO Panel.pdf","url":"https://electron.gr/media/products/ELTO%20Panel.pdf"},{"label":"ELTO PANEL - Installation Manual.pdf","url":"https://electron.gr/media/products/ELTO%20PANEL%20-%20Installation%20Manual.pdf"},{"label":"Photometrics ELTO PANEL.zip","url":"https://electron.gr/media/products/Photometrics%20ELTO%20PANEL.zip"}]'::jsonb,
  155,
  null,
  'RON'
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
  'electron-elto-panel-30x120',
  'Electron',
  'ELTO PANEL 30x120',
  'ELTO PANEL 30x120',
  'Ceiling Recessed / Ronelo',
  'o o o o o
The ELTO PANEL Series consists of high-quality lighting panels designed to accommodate various installation types, including recessed, surface-mounted, and pendant applications.
This adaptability makes it ideal for a wide array of commercial, corporate, and industrial environments.
Engineered with advanced optic lens technology, the series ensures a uniform and consistent light distribution.
With high lumen efficiency, the ELTO PANELS deliver superior brightness while maintaining energy efficiency.
The series offers visual comfort (UGR<19), making it suitable for workplaces, educational institutions, and other facilities.
Available Non Dimmable, Phase Cut, or Dali Dimmable.
Mineral Fiber Ceiling
Recessed
Surface
Pendant
All installation accessories supplied as extra.
ELTO Panel.pdf
ELTO PANEL - Installation Manual.pdf
Photometrics ELTO PANEL.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/l/elto_30.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/l/elto-1_1.jpg']::text[],
  array['Ceiling Recessed', 'Ronelo']::text[],
  '{}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ELTO Panel.pdf","url":"https://electron.gr/media/products/ELTO%20Panel.pdf"},{"label":"ELTO PANEL - Installation Manual.pdf","url":"https://electron.gr/media/products/ELTO%20PANEL%20-%20Installation%20Manual.pdf"},{"label":"Photometrics ELTO PANEL.zip","url":"https://electron.gr/media/products/Photometrics%20ELTO%20PANEL.zip"}]'::jsonb,
  156,
  null,
  'RON'
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
  'electron-horizon-60x60',
  'Electron',
  'Horizon 60x60',
  'Horizon 60x60',
  'Ceiling Recessed / Ronelo',
  'o o o o
Horizon is a direct lighting panel available in two dimensions.
Suitable for mineral fiber ceiling, recessed, surface or pendant installation.
Luminaire available in white colour.
Louvre available in silver, white or black colour.
Low Glare: Max UGR<19 with silver louvre.
Dimming: Non-Dimmable, Analogue (1-10V), DALI, Phase Cut.
IP40/ IK06
► Mineral Fiber Ceiling
► Recessed
► Surface
► Pendant',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/6/4/641_horizon1_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/o/horizon_6060_site_1.jpg']::text[],
  array['Ceiling Recessed', 'Ronelo']::text[],
  '{"Model":"HORIZON 25W, 595x595, CCT - CRI90, 3000K, 4000K, Louvre Options (Beam Angle), Silver (65º), Black (65º), White (80º)","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DALI, Phase Cut"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"HORIZON.pdf","url":"https://electron.gr/media/products/HORIZON.pdf"},{"label":"HORIZON - Installation Manual.pdf","url":"https://electron.gr/media/products/HORIZON%20-%20Installation%20Manual.pdf"}]'::jsonb,
  157,
  null,
  'RON'
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
  'electron-horizon-30x120',
  'Electron',
  'Horizon 30x120',
  'Horizon 30x120',
  'Ceiling Recessed / Ronelo',
  'o o o o
Horizon is a direct lighting panel available in two dimensions.
Suitable for mineral fiber ceiling, recessed, surface or pendant installation.
Luminaire available in white colour.
Louvre available in silver, white or black colour.
Low Glare: Max UGR<19 with silver louvre.
Dimming: Non-Dimmable, Analogue (1-10V), DALI, Phase Cut.
IP40/ IK06
► Mineral Fiber Ceiling
► Recessed
► Surface
► Pendant',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/h/o/horizon30120.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/h/o/horizon_30120_site_1.jpg']::text[],
  array['Ceiling Recessed', 'Ronelo']::text[],
  '{"Model":"HORIZON 25W, 295x1195, CCT - CRI90, 3000K, 4000K, Louvre Options (Beam Angle), Silver (65º), Black (65º), White (80º)","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DALI, Phase Cut"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"HORIZON.pdf","url":"https://electron.gr/media/products/HORIZON.pdf"},{"label":"HORIZON - Installation Manual.pdf","url":"https://electron.gr/media/products/HORIZON%20-%20Installation%20Manual.pdf"}]'::jsonb,
  158,
  null,
  'RON'
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
  'electron-led-panel-60x60-30w',
  'Electron',
  'LED Panel 60x60 30W',
  'LED Panel 60x60 30W',
  'Ceiling Recessed / Ronelo',
  'o o
LED PANEL.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/e/led_panel_60x60_30w_f.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/e/led_panel_60x60_30w_sx.jpg']::text[],
  array['Ceiling Recessed', 'Ronelo']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/e/led_panel_60x60_30w_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LED PANEL.pdf","url":"https://electron.gr/media/products/LED%20PANEL.pdf"}]'::jsonb,
  159,
  null,
  'RON'
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



commit;

