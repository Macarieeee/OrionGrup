-- Electron products part 2

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
  'electron-soul-mini-ip65',
  'Electron',
  'Soul Mini IP65',
  'Soul Mini IP65',
  'Ceiling Recessed / Soul',
  'o o
SOUL is a series of recessed downlights.
It is available either round or square.
It is either fixed or adjustable depending on the model.
It is available in standard or deep version offering extra visual comfort.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
SOUL DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Soul series has low UGR ensuring visual comfort.
HE models (black) in all degrees have a UGR<20.
UGR for HE models: HE3<16, HE6<18, HE8<19, HE10<20
Selection of IP protection: either IP20 or IP54 (face only).
Soul is also offered with an ingress protection rate IP65 (face only).
SOUL MINI-MINI DEEP / ADJ-ADJ DEEP / IP65-IP65 DEEP
Standard 3W 350mA / 4.3W 500mA
High Efficiency 3W 350mA / 4.3W 500mA
Narrow Beam 4W 350mA
Accessories
Name
SOUL MINI IP65
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_MINI_IP65.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_ip65_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 27º, 35º, 47º","Colour":"White, Black","Dimming Option":"Without Driver, Non Dimmable","Accessories":"Standard Cover - IP65 - No Extras, Standard Cover - IP65 - Emergency Kit, Honeycomb Cover - IP65 - No Extras, Honeycomb Cover - IP65 - Emergency Kit, Linear Spread - IP65 - No Extras, Linear Spread - IP65 - Emergency Kit, Softening Lens - IP65 - No Extras"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_ip65_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL MINI Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20MINI%20Series%20-%20Installation%20manual.pdf"}]'::jsonb,
  46,
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
  'electron-soul-mini-ip65-deep',
  'Electron',
  'Soul Mini IP65 Deep',
  'Soul Mini IP65 Deep',
  'Ceiling Recessed / Soul Deep LL',
  'SOUL is a series of recessed downlights.
It is available either round or square.
It is either fixed or adjustable depending on the model.
It is available in standard or deep version offering extra visual comfort.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
SOUL DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Soul series has low UGR ensuring visual comfort.
HE models (black) in all degrees have a UGR<20.
UGR for HE models: HE3<16, HE6<18, HE8<19, HE10<20
Selection of IP protection: either IP20 or IP54 (face only).
Soul is also offered with an ingress protection rate IP65 (face only).
SOUL MINI-MINI DEEP / ADJ-ADJ DEEP / IP65-IP65 DEEP
Standard 3W 350mA / 4.3W 500mA
High Efficiency 3W 350mA / 4.3W 500mA
Narrow Beam 4W 350mA
Accessories
Name
SOUL MINI IP65 DEEP
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_MINI_IP65_DEEP.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/s/o/soul_mini_rc_schema3_1.jpg']::text[],
  array['Ceiling Recessed', 'Soul Deep LL']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 25º, 30º, 38º","Colour":"White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable","Accessories":"Standard Cover - IP65 - No Extras, Standard Cover - IP65 - Emergency Kit, Honeycomb Cover - IP65 - No Extras, Honeycomb Cover - IP65 - Emergency Kit, Linear Spread - IP65 - No Extras, Linear Spread - IP65 - Emergency Kit, Softening Lens - IP65 - No Extras"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/s/o/soul_mini_rc_schema3_1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL MINI Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20MINI%20Series%20-%20Installation%20manual.pdf"}]'::jsonb,
  47,
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
  'electron-hide-rc',
  'Electron',
  'Hide RC',
  'Hide RC',
  'Ceiling Recessed / Soul Mini IP65 Deep',
  'o o
HIDE & HIDE MINI is a series of downlights available either recessed or trimless.
It is available either round or square.
It is adjustable and rotatable.
It is available in standard or deep version offering extra visual comfort.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
HIDE DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
HIDE RC / HIDE RC DEEP
Low Depth 7W 200mA
Standard 6.2W 700mA / 12.2W 700mA / 18W 500mA
Low Depth High Efficiency 5.4W 300mA
High Efficiency 3.1W 350mA / 6.2W 700mA / 8.3W 500mA / 10.1W 600mA
Narrow Beam 6W 500mA / 8W 700mA
Zoom 6.4W 700mA / 13W 350mA
Warm Dimming 0.2~6W 350mA / 12W 350mA
DT8 Tunable White 5.9W / 11.5W (180mA, 330mA, 350mA, 600mA)
Accessories
Name
HIDE RC
Shape
Round
Square
Square Double',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/H/I/HIDE_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_rc_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul Mini IP65 Deep']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White-White, White-Black, Black-White, Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_rc_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"HIDE RC Series.pdf","url":"https://electron.gr/media/products/HIDE%20RC%20Series.pdf"},{"label":"HIDE RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/HIDE%20RECESSED%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometric HIDE RC WHITE.zip","url":"https://electron.gr/media/products/Photometric%20HIDE%20RC%20WHITE.zip"}]'::jsonb,
  48,
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
  'electron-hide-rc-deep',
  'Electron',
  'Hide RC Deep',
  'Hide RC Deep',
  'Ceiling Recessed / Soul Mini IP65 Deep',
  'o o
HIDE & HIDE MINI is a series of downlights available either recessed or trimless.
It is available either round or square.
It is adjustable and rotatable.
It is available in standard or deep version offering extra visual comfort.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
HIDE DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
HIDE RC / HIDE RC DEEP
Low Depth 7W 200mA
Standard 6.2W 700mA / 12.2W 700mA / 18W 500mA
Low Depth High Efficiency 5.4W 300mA
High Efficiency 3.1W 350mA / 6.2W 700mA / 8.3W 500mA / 10.1W 600mA
Narrow Beam 6W 500mA / 8W 700mA
Zoom 6.4W 700mA / 13W 350mA
Warm Dimming 0.2~6W 350mA / 12W 350mA
DT8 Tunable White 5.9W / 11.5W (180mA, 330mA, 350mA, 600mA)
Accessories
Name
HIDE RC DEEP
Shape
Round
Square
Square Double',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/H/I/HIDE_RC_DEEP.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_deep_rc_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul Mini IP65 Deep']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White-White-White, White-Black-White, Black-White-White, Black-Black-White, White-White-Black, White-Black-Black, Black-White-Black, Black-Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_deep_rc_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"HIDE RC Series.pdf","url":"https://electron.gr/media/products/HIDE%20RC%20Series.pdf"},{"label":"HIDE RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/HIDE%20RECESSED%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometric HIDE RC DEEP BLACK.zip","url":"https://electron.gr/media/products/Photometric%20HIDE%20RC%20DEEP%20BLACK.zip"}]'::jsonb,
  49,
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
  'electron-hide-rc-double',
  'Electron',
  'Hide RC Double',
  'Hide RC Double',
  'Ceiling Recessed / Soul Mini IP65 Deep',
  'o o
HIDE & HIDE MINI is a series of downlights available either recessed or trimless.
It is available either round or square.
It is adjustable and rotatable.
It is available in standard or deep version offering extra visual comfort.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
HIDE DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
HIDE RC / HIDE RC DEEP
Low Depth 7W 200mA
Standard 6.2W 700mA / 12.2W 700mA / 18W 500mA
Low Depth High Efficiency 5.4W 300mA
High Efficiency 3.1W 350mA / 6.2W 700mA / 8.3W 500mA / 10.1W 600mA
Narrow Beam 6W 500mA / 8W 700mA
Zoom 6.4W 700mA / 13W 350mA
Warm Dimming 0.2~6W 350mA / 12W 350mA
DT8 Tunable White 5.9W / 11.5W (180mA, 330mA, 350mA, 600mA)
Accessories
Name
HIDE RC
Shape
Square Double',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/H/I/HIDE_RC_DOUBLE.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_rc_double_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul Mini IP65 Deep']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White-White, White-Black, Black-White, Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_rc_double_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"HIDE RC Series.pdf","url":"https://electron.gr/media/products/HIDE%20RC%20Series.pdf"},{"label":"HIDE RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/HIDE%20RECESSED%20Series%20-%20Installation%20Manual.pdf"}]'::jsonb,
  50,
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
  'electron-hide-rc-deep-double',
  'Electron',
  'Hide RC Deep Double',
  'Hide RC Deep Double',
  'Ceiling Recessed / Soul Mini IP65 Deep',
  'o o
HIDE & HIDE MINI is a series of downlights available either recessed or trimless.
It is available either round or square.
It is adjustable and rotatable.
It is available in standard or deep version offering extra visual comfort.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
HIDE DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
HIDE RC / HIDE RC DEEP
Low Depth 7W 200mA
Standard 6.2W 700mA / 12.2W 700mA / 18W 500mA
Low Depth High Efficiency 5.4W 300mA
High Efficiency 3.1W 350mA / 6.2W 700mA / 8.3W 500mA / 10.1W 600mA
Narrow Beam 6W 500mA / 8W 700mA
Zoom 6.4W 700mA / 13W 350mA
Warm Dimming 0.2~6W 350mA / 12W 350mA
DT8 Tunable White 5.9W / 11.5W (180mA, 330mA, 350mA, 600mA)
Accessories
Name
HIDE RC DEEP
Shape
Square Double',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/H/I/HIDE_RC_DOUBLE_DEEP.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_deep_rc_double_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul Mini IP65 Deep']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White-White-White, White-Black-White, Black-White-White, Black-Black-White, White-White-Black, White-Black-Black, Black-White-Black, Black-Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_deep_rc_double_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"HIDE RC Series.pdf","url":"https://electron.gr/media/products/HIDE%20RC%20Series.pdf"},{"label":"HIDE RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/HIDE%20RECESSED%20Series%20-%20Installation%20Manual.pdf"}]'::jsonb,
  51,
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
  'electron-hide-rc-deep-ll',
  'Electron',
  'Hide RC Deep LL',
  'Hide RC Deep LL',
  'Ceiling Recessed / Soul Mini IP65 Deep',
  'o o
HIDE & HIDE MINI is a series of downlights available either recessed or trimless.
It is available either round or square.
It is available in standard or deep version offering extra visual comfort.
HIDE DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
Selection of IP protection: either IP20 or IP54 (face only).
Accessories
Name
HIDE RC DEEP LL
Shape
Round
Square
Square Double
Colour
White-White-White
White-Black-White
Black-White-White
Black-Black-White
White-White-Black
White-Black-Black
Black-White-Black
Black-Black-Black
Lamp Holder
GU10 (max 7.5W)
Standard - IP20
Standard - IP54
Honeycomb - IP20
Honeycomb - IP54
Linear Spread - IP20
Linear Spread - IP54
Softening Lens - IP20
Softening Lens - IP54
HIDE RC DEEP LL-_-_-_-_
HIDE RC Series.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/H/I/HIDE_RC_DEEP_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_ll_rc_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul Mini IP65 Deep']::text[],
  '{"Colour":"White-White-White, White-Black-White, Black-White-White, Black-Black-White, White-White-Black, White-Black-Black, Black-White-Black, Black-Black-Black, Lamp Holder, GU10 (max 7.5W)","Accessories":"Standard - IP20, Standard - IP54, Honeycomb - IP20, Honeycomb - IP54, Linear Spread - IP20, Linear Spread - IP54, Softening Lens - IP20, Softening Lens - IP54"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/i/hide_ll_rc_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"HIDE RC Series.pdf","url":"https://electron.gr/media/products/HIDE%20RC%20Series.pdf"}]'::jsonb,
  52,
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
  'electron-hide-mini-rc',
  'Electron',
  'Hide Mini RC',
  'Hide Mini RC',
  'Ceiling Recessed / Soul Mini IP65 Deep',
  'o o
HIDE & HIDE MINI is a series of downlights available either recessed or trimless.
It is available either round or square.
It is adjustable and rotatable.
It is available in standard or deep version offering extra visual comfort.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
HIDE DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
HIDE RC / HIDE RC DEEP
Standard 3W 350mA / 4.3W 500mA
High Efficiency 3W 350mA / 4.3W 500mA
Narrow Beam 4W 350mA
Accessories
Name
HIDE MINI RC
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/H/I/HIDE_MINI_RC.jpg']::text[],
  array['Ceiling Recessed', 'Soul Mini IP65 Deep']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 27º, 35º, 47º","Colour":"White-White-Without, White-Black-Without, Black-Black-Without, Black-White-Without","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"Photometric HIDE MINI RC WHITE.zip","url":"https://electron.gr/media/products/Photometric%20HIDE%20MINI%20RC%20WHITE.zip"},{"label":"HIDE RC Series.pdf","url":"https://electron.gr/media/products/HIDE%20RC%20Series.pdf"},{"label":"HIDE MINI RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/HIDE%20MINI%20RECESSED%20Series%20-%20Installation%20Manual.pdf"}]'::jsonb,
  53,
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
  'electron-hide-mini-rc-deep',
  'Electron',
  'Hide Mini RC Deep',
  'Hide Mini RC Deep',
  'Ceiling Recessed / Hide RC',
  'o o
HIDE & HIDE MINI is a series of downlights available either recessed or trimless.
It is available either round or square.
It is adjustable and rotatable.
It is available in standard or deep version offering extra visual comfort.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
HIDE DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
HIDE RC / HIDE RC DEEP
Standard 3W 350mA / 4.3W 500mA
High Efficiency 3W 350mA / 4.3W 500mA
Narrow Beam 4W 350mA
Accessories
Name
HIDE MINI RC DEEP
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/H/I/HIDE_MINI_RC_DEEP.jpg']::text[],
  array['Ceiling Recessed', 'Hide RC']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 25º, 30º, 38º","Colour":"White-White-White, White-Black-White, Black-White-White, Black-Black-White, White-White-Black, White-Black-Black, Black-White-Black, Black-Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"HIDE RC Series.pdf","url":"https://electron.gr/media/products/HIDE%20RC%20Series.pdf"},{"label":"HIDE MINI RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/HIDE%20MINI%20RECESSED%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometric HIDE MINI RC DEEP BLACK.zip","url":"https://electron.gr/media/products/Photometric%20HIDE%20MINI%20RC%20%20DEEP%20BLACK.zip"}]'::jsonb,
  54,
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
  'electron-santi',
  'Electron',
  'Santi',
  'electron-santi',
  'Ceiling Recessed / Hide RC',
  'o o o
SANTI and SANTI MINI is a series of elegant recessed downlights with extra small trim.
It is available either round or square.
Santi is also available in wash version.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
SANTI DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Available in Black RAL9004, White RAL9003, Brass (round models) or Bronze (round models) as standard but custom colours also available upon request.
Luminaire outer trim material: aluminium (White, Black), anodized aluminium (Brass, Bronze).
3 SDCM
L90/B10 50000h
Santi series has low UGR ensuring visual comfort.
HE models (black) in all degrees have a UGR<14.
UGR for HE models: HE3<10, HE6<12, HE8<13, HE10<14
Selection of IP protection: either IP20 or IP54 (face only).
SANTI / SANTI ADJ / SANTI WASH
Low Depth 7W 200mA
Standard 6.2W 700mA / 12.2W 700mA / 18W 500mA
Low Depth High Efficiency 5.4W 300mA
High Efficiency 3.1W 350mA / 6.2W 700mA / 8.3W 500mA / 10.1W 600mA
Narrow Beam 6W 500mA / 8W 700mA
Zoom 6.4W 700mA / 13W 350mA
Warm Dimming 0.2~6W / 12W
DT8 Tunable White 5.9W / 11.5W
Accessories
Name
SANTI
Shape
Round',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/a/santi.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/santi_site1_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/a/santi_sx.jpg']::text[],
  array['Ceiling Recessed', 'Hide RC']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White, Black, Brass, Bronze","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/a/santi_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SANTI Series.pdf","url":"https://electron.gr/media/products/SANTI%20Series.pdf"},{"label":"SANTI Series - Installation Manual.pdf","url":"https://electron.gr/media/products/SANTI%20Series%20-%20Installation%20Manual.pdf"},{"label":"photometrics SANTI.zip","url":"https://electron.gr/media/products/photometrics%20SANTI.zip"}]'::jsonb,
  55,
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
  'electron-santi-wash',
  'Electron',
  'Santi Wash',
  'Santi Wash',
  'Ceiling Recessed / Hide RC',
  'o o
SANTI and SANTI MINI is a series of elegant recessed downlights with extra small trim.
It is available either round or square.
Santi is also available in wash version.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
SANTI DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Available in Black RAL9004, White RAL9003, Brass (round models) or Bronze (round models) as standard but custom colours also available upon request.
Luminaire outer trim material: aluminium (White, Black), anodized aluminium (Brass, Bronze).
3 SDCM
L90/B10 50000h
Santi series has low UGR ensuring visual comfort.
HE models (black) in all degrees have a UGR<14.
UGR for HE models: HE3<10, HE6<12, HE8<13, HE10<14
Selection of IP protection: either IP20 or IP54 (face only).
SANTI / SANTI ADJ / SANTI WASH
Low Depth 7W 200mA
Standard 6.2W 700mA / 12.2W 700mA / 18W 500mA
Low Depth High Efficiency 5.4W 300mA
High Efficiency 3.1W 350mA / 6.2W 700mA / 8.3W 500mA / 10.1W 600mA
Narrow Beam 6W 500mA / 8W 700mA
Zoom 6.4W 700mA / 13W 350mA
Warm Dimming 0.2~6W / 12W
DT8 Tunable White 5.9W / 11.5W
Accessories
Name
SANTI WASH
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/A/SANTI_ADJ_WASH.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/santi_wash_site1.jpg']::text[],
  array['Ceiling Recessed', 'Hide RC']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 17º, 19º, 23º, 27º, 30º, 32º, 35º, 45º, 50º, 22º~50º","Colour":"White, Black, Brass, Bronze","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SANTI Series.pdf","url":"https://electron.gr/media/products/SANTI%20Series.pdf"},{"label":"SANTI Series - Installation Manual.pdf","url":"https://electron.gr/media/products/SANTI%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometrics SANTI WASH.zip","url":"https://electron.gr/media/products/Photometrics%20SANTI%20WASH.zip"}]'::jsonb,
  56,
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
  'electron-santi-adj',
  'Electron',
  'Santi ADJ',
  'Santi ADJ',
  'Ceiling Recessed / Hide RC',
  'o o o
SANTI and SANTI MINI is a series of elegant recessed downlights with extra small trim.
It is available either round or square.
Santi is also available in wash version.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
SANTI DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Available in Black RAL9004, White RAL9003, Brass (round models) or Bronze (round models) as standard but custom colours also available upon request.
Luminaire outer trim material: aluminium (White, Black), anodized aluminium (Brass, Bronze).
3 SDCM
L90/B10 50000h
Santi series has low UGR ensuring visual comfort.
HE models (black) in all degrees have a UGR<14.
UGR for HE models: HE3<10, HE6<12, HE8<13, HE10<14
Selection of IP protection: either IP20 or IP54 (face only).
SANTI / SANTI ADJ / SANTI WASH
Low Depth 7W 200mA
Standard 6.2W 700mA / 12.2W 700mA / 18W 500mA
Low Depth High Efficiency 5.4W 300mA
High Efficiency 3.1W 350mA / 6.2W 700mA / 8.3W 500mA / 10.1W 600mA
Narrow Beam 6W 500mA / 8W 700mA
Zoom 6.4W 700mA / 13W 350mA
Warm Dimming 0.2~6W / 12W
DT8 Tunable White 5.9W / 11.5W
Accessories
Name
SANTI ADJ
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/A/SANTI_ADJ.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/santi_adj_site1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/a/santi_adj_sx.jpg']::text[],
  array['Ceiling Recessed', 'Hide RC']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White, Black, Brass, Bronze","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/a/santi_adj_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SANTI Series.pdf","url":"https://electron.gr/media/products/SANTI%20Series.pdf"},{"label":"SANTI Series - Installation Manual.pdf","url":"https://electron.gr/media/products/SANTI%20Series%20-%20Installation%20Manual.pdf"}]'::jsonb,
  57,
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
  'electron-santi-deep-ll',
  'Electron',
  'SANTI DEEP LL',
  'SANTI DEEP LL',
  'Ceiling Recessed / Hide RC',
  'o o
SANTI and SANTI MINI is a series of elegant recessed downlights with extra small trim.
It is available either round or square.
Santi is also available in wash version.
SANTI DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Available in Black RAL9004, White RAL9003, Brass (round models) or Bronze (round models) as standard but custom colours also available upon request.
Luminaire outer trim material: aluminium (White, Black), anodized aluminium (Brass, Bronze).
Selection of IP protection: either IP20 or IP54 (face only).
Accessories
Name
SANTI DEEP LL
SANTI ADJ DEEP LL
SANTI WASH DEEP LL
Shape
Round
Square
Colour
White/White
White/Black
Black/Black
Black/White
Brass/Black
Brass/White
Bronze/Black
Bronze/White
Lamp Holder
GU10 (max 7.5W)
Standard - IP20
Standard - IP54
Honeycomb - IP20
Honeycomb - IP54
Linear Spread - IP20
Linear Spread - IP54
Softening Lens - IP20
Softening Lens - IP54
_-_-_-_-_
SANTI Series.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/a/santi_deep_ll_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/santi_deep_ll_.jpg']::text[],
  array['Ceiling Recessed', 'Hide RC']::text[],
  '{"Colour":"White/White, White/Black, Black/Black, Black/White, Brass/Black, Brass/White, Bronze/Black, Bronze/White, Lamp Holder, GU10 (max 7.5W)","Accessories":"Standard - IP20, Standard - IP54, Honeycomb - IP20, Honeycomb - IP54, Linear Spread - IP20, Linear Spread - IP54, Softening Lens - IP20, Softening Lens - IP54"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SANTI Series.pdf","url":"https://electron.gr/media/products/SANTI%20Series.pdf"}]'::jsonb,
  58,
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
  'electron-santi-mini',
  'Electron',
  'Santi Mini',
  'Santi Mini',
  'Ceiling Recessed / Hide RC',
  'o o o
SANTI and SANTI MINI is a series of elegant recessed downlights with extra small trim.
It is available either round or square.
Santi is also available in wash version.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
SANTI DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Available in Black RAL9004, White RAL9003, Brass (round models) or Bronze (round models) as standard but custom colours also available upon request.
Luminaire outer trim material: aluminium (White, Black), anodized aluminium (Brass, Bronze).
3 SDCM
L90/B10 50000h
Santi series has low UGR ensuring visual comfort.
HE models (black) in all degrees have a UGR<14.
UGR for HE models: HE3<10, HE6<12, HE8<13, HE10<14
Selection of IP protection: either IP20 or IP54 (face only).
SANTI MINI / SANTI MINI ADJ
Standard 3W 350mA / 4.3W 500mA
High Efficiency 3W 350mA / 4.3W 500mA
Narrow Beam 4W 350mA
Accessories
Name
SANTI MINI
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/a/santi_mini.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/santi_mini_site1_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/a/santi_mini_sx.jpg']::text[],
  array['Ceiling Recessed', 'Hide RC']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 27º, 35º, 47º","Colour":"White, Black, Brass, Bronze","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/a/santi_mini_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SANTI Series.pdf","url":"https://electron.gr/media/products/SANTI%20Series.pdf"},{"label":"SANTI MINI Series - Installation Manual.pdf","url":"https://electron.gr/media/products/SANTI%20MINI%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) SANTI MINI HE.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20SANTI%20MINI%20HE.zip"},{"label":"Photometrics (ldt files) SANTI MINI ST.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20SANTI%20MINI%20ST.zip"},{"label":"Photometrics (ldt files) SANTI MINI NB.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20SANTI%20MINI%20NB.zip"}]'::jsonb,
  59,
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
  'electron-santi-mini-adj',
  'Electron',
  'Santi Mini ADJ',
  'Santi Mini ADJ',
  'Ceiling Recessed / Hide RC',
  'o o o
SANTI and SANTI MINI is a series of elegant recessed downlights with extra small trim.
It is available either round or square.
Santi is also available in wash version.
Power consumption: varies from 3 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
SANTI DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Available in Black RAL9004, White RAL9003, Brass (round models) or Bronze (round models) as standard but custom colours also available upon request.
Luminaire outer trim material: aluminium (White, Black), anodized aluminium (Brass, Bronze).
3 SDCM
L90/B10 50000h
Santi series has low UGR ensuring visual comfort.
HE models (black) in all degrees have a UGR<14.
UGR for HE models: HE3<10, HE6<12, HE8<13, HE10<14
Selection of IP protection: either IP20 or IP54 (face only).
SANTI MINI / SANTI MINI ADJ
Standard 3W 350mA / 4.3W 500mA
High Efficiency 3W 350mA / 4.3W 500mA
Narrow Beam 4W 350mA
Accessories
Name
SANTI MINI ADJ
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/a/santi_mini_adj.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/santi_mini_adj_site1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/a/santi_mini_adj_sx.jpg']::text[],
  array['Ceiling Recessed', 'Hide RC']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 27º, 35º, 47º","Colour":"White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/a/santi_mini_adj_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SANTI Series.pdf","url":"https://electron.gr/media/products/SANTI%20Series.pdf"},{"label":"SANTI MINI Series - Installation Manual.pdf","url":"https://electron.gr/media/products/SANTI%20MINI%20Series%20-%20Installation%20Manual.pdf"},{"label":"photometric SANTI MINI.zip","url":"https://electron.gr/media/products/photometric%20SANTI%20MINI.zip"}]'::jsonb,
  60,
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
  'electron-whisper-rc',
  'Electron',
  'Whisper RC',
  'Whisper RC',
  'Ceiling Recessed / Santi',
  'o o
Whisper is a high aesthetically downlight available recessed or trimless.
It is available either round or square.
WHISPER DEEP version is also available for LED lamps.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
Accessories
Name
WHISPER RC
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/W/H/WHISPER_RC.jpg']::text[],
  array['Ceiling Recessed', 'Santi']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 18º, 19º, 27º, 30º, 35º, 37º, 45º, 52º, 22º~50º","Colour":"White-White, White-Black, Black-White, Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"WHISPER RC Series.pdf","url":"https://electron.gr/media/products/WHISPER%20RC%20Series.pdf"},{"label":"WHISPER RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/WHISPER%20RECESSED%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometrics WHISPER RC.zip","url":"https://electron.gr/media/products/Photometrics%20WHISPER%20RC.zip"}]'::jsonb,
  61,
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
  'electron-whisper-adj',
  'Electron',
  'Whisper ADJ',
  'Whisper ADJ',
  'Ceiling Recessed / Santi',
  'o o
Whisper is a high aesthetically downlight available recessed or trimless.
It is available either round or square.
WHISPER DEEP version is also available for LED lamps.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
Accessories
Name
WHISPER ADJ
Shape
Round',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/W/H/WHISPER_RC_ADJ.jpg']::text[],
  array['Ceiling Recessed', 'Santi']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 18º, 19º, 27º, 30º, 35º, 37º, 45º, 52º, 22º~50º","Colour":"White-White, White-Black, Black-White, Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"WHISPER RC Series.pdf","url":"https://electron.gr/media/products/WHISPER%20RC%20Series.pdf"},{"label":"WHISPER RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/WHISPER%20RECESSED%20Series%20-%20Installation%20Manual.pdf"}]'::jsonb,
  62,
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
  'electron-whisper-deep-ll',
  'Electron',
  'Whisper Deep LL',
  'Whisper Deep LL',
  'Ceiling Recessed / Santi',
  'o o
Whisper is a high aesthetically downlight available recessed or trimless.
It is available either round or square.
WHISPER DEEP version is also available for LED lamps.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
Selection of IP protection: either IP20 or IP54 (face only).
Accessories
Name
WHISPER RC DEEP LL
WHISPER ADJ DEEP LL
Shape
Round
Square
Colour
White/White
White/Black
Black/Black
Black/White
Lamp Holder
GU10 (max 7.5W)
Standard - IP20
Standard - IP54
Honeycomb - IP20
Honeycomb - IP54
Linear Spread - IP20
Linear Spread - IP54
Softening Lens - IP20
Softening Lens - IP54
_-_-_-_-_
WHISPER RC Series.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/W/H/WHISPER_RC_1.jpg']::text[],
  array['Ceiling Recessed', 'Santi']::text[],
  '{"Colour":"White/White, White/Black, Black/Black, Black/White, Lamp Holder, GU10 (max 7.5W)","Accessories":"Standard - IP20, Standard - IP54, Honeycomb - IP20, Honeycomb - IP54, Linear Spread - IP20, Linear Spread - IP54, Softening Lens - IP20, Softening Lens - IP54"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"WHISPER RC Series.pdf","url":"https://electron.gr/media/products/WHISPER%20RC%20Series.pdf"}]'::jsonb,
  63,
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
  'electron-crush-rc-round',
  'Electron',
  'Crush RC Round',
  'Crush RC Round',
  'Ceiling Recessed / Whisper RC',
  'o o o
Crush is a downlight available either recessed or trimless.
It is available in square or round form.
Power consumption: varies from 6 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
CRUSH is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
Accessories
Name
CRUSH RC Round',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/4/548_crush_rc_rd.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/c/r/crush_rc_rd_sx.jpg']::text[],
  array['Ceiling Recessed', 'Whisper RC']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White-White, White-Black, Black-White, Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/c/r/crush_rc_rd_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CRUSH RC Series.pdf","url":"https://electron.gr/media/products/CRUSH%20RC%20Series.pdf"},{"label":"CRUSH RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/CRUSH%20RECESSED%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometric CRUSH RC.zip","url":"https://electron.gr/media/products/Photometric%20CRUSH%20RC.zip"}]'::jsonb,
  64,
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
  'electron-crush-rc-square',
  'Electron',
  'Crush RC Square',
  'Crush RC Square',
  'Ceiling Recessed / Whisper RC',
  'o o o
Crush is a downlight available either recessed or trimless.
It is available in square or round form.
Power consumption: varies from 6 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
CRUSH is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
Accessories
Name
CRUSH RC Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/4/548_crush_rc_sq.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/c/r/crush_rc_sq_sx.jpg']::text[],
  array['Ceiling Recessed', 'Whisper RC']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White-White, White-Black, Black-White, Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/c/r/crush_rc_sq_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CRUSH RC Series.pdf","url":"https://electron.gr/media/products/CRUSH%20RC%20Series.pdf"},{"label":"CRUSH RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/CRUSH%20RECESSED%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometric CRUSH RC.zip","url":"https://electron.gr/media/products/Photometric%20CRUSH%20RC.zip"}]'::jsonb,
  65,
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
  'electron-crush-rc-double',
  'Electron',
  'Crush RC Double',
  'Crush RC Double',
  'Ceiling Recessed / Whisper RC',
  'o o o
Crush is a downlight available either recessed or trimless.
It is available in square or round form.
Power consumption: varies from 6 to 18 watt.
Beam angle: varies from 9 to 50 degrees.
CRUSH is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 for DEEP version models).
Selection of IP protection: either IP20 or IP54 (face only).
Accessories
Name
CRUSH RC Double',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/R/CRUSH_RC_DOUBLE.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/c/r/crush_rc_db_sx.jpg']::text[],
  array['Ceiling Recessed', 'Whisper RC']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White-White, White-Black, Black-White, Black-Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/c/r/crush_rc_db_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CRUSH RECESSED Series - Installation Manual.pdf","url":"https://electron.gr/media/products/CRUSH%20RECESSED%20Series%20-%20Installation%20Manual.pdf"},{"label":"CRUSH RC Series.pdf","url":"https://electron.gr/media/products/CRUSH%20RC%20Series.pdf"}]'::jsonb,
  66,
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
  'electron-crush-ll',
  'Electron',
  'Crush LL',
  'Crush LL',
  'Ceiling Recessed / Whisper RC',
  'o o
Crush is a downlight available either recessed or trimless.
It is available in square or round form.
CRUSH is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
Selection of IP protection: either IP20 or IP54 (face only).
Accessories
Name
CRUSH RC LL
CRUSH RC Double LL
CRUSH RC Round LL
Colour
White/White
White/Black
Black/Black
Black/White
Lamp Holder
GU10 (max 7.5W)
Standard - IP20
Standard - IP54
Honeycomb - IP20
Honeycomb - IP54
Linear Spread - IP20
Linear Spread - IP54
Softening Lens - IP20
Softening Lens - IP54
_-_-_-_
CRUSH RC Series.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/4/548_crush_rc_rd_2.jpg']::text[],
  array['Ceiling Recessed', 'Whisper RC']::text[],
  '{"Colour":"White/White, White/Black, Black/Black, Black/White, Lamp Holder, GU10 (max 7.5W)","Accessories":"Standard - IP20, Standard - IP54, Honeycomb - IP20, Honeycomb - IP54, Linear Spread - IP20, Linear Spread - IP54, Softening Lens - IP20, Softening Lens - IP54"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CRUSH RC Series.pdf","url":"https://electron.gr/media/products/CRUSH%20RC%20Series.pdf"}]'::jsonb,
  67,
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
  'electron-polar-rc-75w',
  'Electron',
  'Polar RC 7.5W',
  'Polar RC 7',
  'Ceiling Recessed / Crush LL',
  'o o o
Polar is a miniaturized downlight available either recessed or trimless.
It is ideal in spaces with low depth ceiling due to its special design.
It is available in round (7.5W, 12W, 18W) or square (7.5W).
Body material: aluminium.
Selection of IP protection: either IP40 or IP44.
3 SDCM
L90/B10 50000h
It has a low UGR ensuring visual comfort (UGR<16).',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/5/556b_8.2w_polar_rc.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/556b_POLAR_RC.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"Polar RC","LED Power":"7.5W","Type":"Round, Square, IP Protection, IP40, IP44, Fixed, Colour Outer/Inner Trim, White/White, White/Black, Black/Black, Black/White","CCT":"2700K, 3000K, 3500K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"12º, 16º, 20º, 30º, 44º","Dimming Option":"Without Driver, Non Dimmable, Phase Cut, 24V PWM Dimmable, 48V PWM Dimmable"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"POLAR RC.pdf","url":"https://electron.gr/media/products/POLAR%20RC.pdf"},{"label":"POLAR RC Installation Manual.pdf","url":"https://electron.gr/media/products/POLAR%20RC%20Installation%20Manual.pdf"},{"label":"Photometrics POLAR RC8.zip","url":"https://electron.gr/media/products/Photometrics%20POLAR%20RC8.zip"}]'::jsonb,
  68,
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
  'electron-polar-rc-12w',
  'Electron',
  'Polar RC 12W',
  'Polar RC 12W',
  'Ceiling Recessed / Crush LL',
  'o o o
Polar is a miniaturized downlight available either recessed or trimless.
It is ideal in spaces with low depth ceiling due to its special design.
It is available in round (7.5W, 12W, 18W) or square (7.5W).
Body material: aluminium.
Selection of IP protection: either IP40 or IP44.
3 SDCM
L90/B10 50000h
It has a low UGR ensuring visual comfort (UGR<16).',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/5/556_12w_polar_rc.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/556b_POLAR_RC.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"Polar RC","LED Power":"12W","Type":"Round, IP Protection, IP40, IP44, Fixed, Colour Outer/Inner Trim, White/White, White/Black, Black/Black, Black/White","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"18º, 30º, 50º","Dimming Option":"Without Driver, Non Dimmable, Push Button, 48V PWM Dimmable, DALI","Extras":"Standard, Honeycomb"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"POLAR RC.pdf","url":"https://electron.gr/media/products/POLAR%20RC.pdf"},{"label":"POLAR RC Installation Manual.pdf","url":"https://electron.gr/media/products/POLAR%20RC%20Installation%20Manual.pdf"},{"label":"Photometrics POLAR RC12.zip","url":"https://electron.gr/media/products/Photometrics%20POLAR%20RC12.zip"}]'::jsonb,
  69,
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
  'electron-polar-rc-18w',
  'Electron',
  'Polar RC 18W',
  'Polar RC 18W',
  'Ceiling Recessed / Crush LL',
  'o o o
Polar is a miniaturized downlight available either recessed or trimless.
It is ideal in spaces with low depth ceiling due to its special design.
It is available in round (7.5W, 12W, 18W) or square (7.5W).
Body material: aluminium.
Selection of IP protection: either IP40 or IP44.
3 SDCM
L90/B10 50000h
It has a low UGR ensuring visual comfort (UGR<16).',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/5/556_18w_polar_rc.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/556b_POLAR_RC.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"Polar RC","LED Power":"18W","Type":"Round, IP Protection, IP40, IP44, Fixed, Colour Outer/Inner Trim, White/White, White/Black, Black/Black, Black/White","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"18º, 30º, 50º","Dimming Option":"Without Driver, Non Dimmable, Push Button, 48V PWM Dimmable, DALI","Extras":"Standard, Honeycomb"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"POLAR RC.pdf","url":"https://electron.gr/media/products/POLAR%20RC.pdf"},{"label":"POLAR RC Installation Manual.pdf","url":"https://electron.gr/media/products/POLAR%20RC%20Installation%20Manual.pdf"},{"label":"Photometrics POLAR RC18.zip","url":"https://electron.gr/media/products/Photometrics%20POLAR%20RC18.zip"}]'::jsonb,
  70,
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
  'electron-limit-47w-rc-ip67-ip66',
  'Electron',
  'Limit 4.7W RC IP67-IP66',
  'Limit 4',
  'Ceiling Recessed / Crush LL',
  'o o o
LIMIT 67/66 is an elegant waterproof trimless or recessed downlight available in different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
The series offers low UGR ensuring visual comfort.
Available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h
IP Protection: IP67/IP66
Name
LIMIT RC',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/i/limit_rc_4.7_1.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"4.7W","CCT":"2700K, 3000K, 4000K","CRI":"80, 90","Beam Angle":"17, 24º, 36º, 48º","Type":"Fixed, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver","Extras":"No Extras","Emergency":"Honeycomb"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMIT RC IP67-IP66.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP67-IP66.pdf"},{"label":"LIMIT RC IP67-IP66 Installation Manual.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP67-IP66%20Installation%20Manual.pdf"},{"label":"Photometrics LIMIT RC-05 IP66.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC-05%20IP66.zip"}]'::jsonb,
  71,
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
  'electron-limit-64w-rc-ip67-ip66',
  'Electron',
  'Limit 6.4W RC IP67-IP66',
  'Limit 6',
  'Ceiling Recessed / Crush LL',
  'o o o
LIMIT 67/66 is an elegant waterproof trimless or recessed downlight available in different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
The series offers low UGR ensuring visual comfort.
Available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h
IP Protection: IP67/IP66
Name
LIMIT RC',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/6/560s_6.4_limit_rc_ip67-ip66.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/6/560_6.4_limit_rc_ip67-ip66.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"6.4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"24º, 36º, 48º","Type":"Fixed, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras","Emergency":"Honeycomb"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMIT RC IP67-IP66.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP67-IP66.pdf"},{"label":"LIMIT RC IP67-IP66 Installation Manual.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP67-IP66%20Installation%20Manual.pdf"},{"label":"Photometrics - LIMIT RC06 IP66.zip","url":"https://electron.gr/media/products/Photometrics%20-%20LIMIT%20RC06%20IP66.zip"}]'::jsonb,
  72,
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
  'electron-limit-88w-rc-ip67-ip66',
  'Electron',
  'Limit 8.8W RC IP67-IP66',
  'Limit 8',
  'Ceiling Recessed / Crush LL',
  'o o o
LIMIT 67/66 is an elegant waterproof trimless or recessed downlight available in different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
The series offers low UGR ensuring visual comfort.
Available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h
IP Protection: IP67/IP66
Name
LIMIT RC',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/6/560s_8.8_limit_rc_ip67-ip66.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/6/560_8.8_limit_rc_ip67-ip66.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"8.8W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"17º, 24º, 36º, 60º","Type":"Fixed, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras","Emergency":"Honeycomb"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMIT RC IP67-IP66.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP67-IP66.pdf"},{"label":"LIMIT RC IP67-IP66 Installation Manual.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP67-IP66%20Installation%20Manual.pdf"},{"label":"Photometrics LIMIT RC09 IP66.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC09%20IP66.zip"}]'::jsonb,
  73,
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
  'electron-limit-128w-and-17w-rc-ip67-ip66',
  'Electron',
  'Limit 12.8W & 17W RC IP67-IP66',
  'Limit 12',
  'Ceiling Recessed / Crush LL',
  'o o o
LIMIT 67/66 is an elegant waterproof trimless or recessed downlight available in different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
The series offers low UGR ensuring visual comfort.
Available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h
IP Protection: IP67/IP66
Name
LIMIT RC',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/6/560s_12.8_limit_rc_ip67-ip66.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/6/560_12.8_limit_rc_ip67-ip66.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"12.8W, 17W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"17º, 24º, 36º, 60º","Type":"Fixed, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras","Emergency":"Honeycomb"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMIT RC IP67-IP66.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP67-IP66.pdf"},{"label":"LIMIT RC IP67-IP66 Installation Manual.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP67-IP66%20Installation%20Manual.pdf"},{"label":"Photometrics LIMIT RC13 IP66.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC13%20IP66.zip"},{"label":"Photometrics LIMIT RC17 IP66.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC17%20IP66.zip"}]'::jsonb,
  74,
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
  'electron-limit-47w-and-69w-rc-ip20-ip44',
  'Electron',
  'Limit 4.7W & 6.9W RC IP20-IP44',
  'Limit 4',
  'Ceiling Recessed / Crush LL',
  'o o
LIMIT 20/44 is an elegant trimless or recessed downlight available in different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
Limit TR is also available adjustable in 8.7Watt or 12.6Watt.
The series offers low UGR ensuring visual comfort.
It is available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h
IP Protection: IP20 or IP44 (face only).
Name
LIMIT RC IP20
LIMIT RC IP44',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/i/limit_rc_4.7_6.9.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"4.7W, 6.9W","CCT":"2700K, 3000K, 4000K","CRI":"80, 90","Beam Angle":"18º, 24º, 30º, 38º","Type":"Fixed, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver","Extras":"No Extras"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMIT RC IP20-IP44.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44.pdf"},{"label":"LIMIT RC IP20-IP44 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMIT RC20-05.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC20-05.zip"},{"label":"Photometrics LIMIT RC20-07.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC20-07.zip"}]'::jsonb,
  75,
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
  'electron-limit-64w-rc-ip20-ip44',
  'Electron',
  'Limit 6.4W RC IP20-IP44',
  'Limit 6',
  'Ceiling Recessed / Crush LL',
  'o o o
LIMIT 20/44 is an elegant trimless or recessed downlight available in different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
Limit TR is also available adjustable in 8.7Watt or 12.6Watt.
The series offers low UGR ensuring visual comfort.
It is available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h
IP Protection: IP20 or IP44 (face only).
Name
LIMIT RC IP20
LIMIT RC IP44',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/6/563s_6.4_limit_rc_ip20-ip44.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/6/563_6.4_limit_rc_ip20-ip44.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"6.4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"19º, 25º, 36º, 45º","Type":"Fixed, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMIT RC IP20-IP44.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44.pdf"},{"label":"LIMIT RC IP20-IP44 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMIT RC20-06.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC20-06.zip"}]'::jsonb,
  76,
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
  'electron-limit-88w-rc-ip20-ip44',
  'Electron',
  'Limit 8.8W RC IP20-IP44',
  'Limit 8',
  'Ceiling Recessed / Crush LL',
  'o o o
LIMIT 20/44 is an elegant trimless or recessed downlight available in different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
Limit TR is also available adjustable in 8.7Watt or 12.6Watt.
The series offers low UGR ensuring visual comfort.
It is available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h
IP Protection: IP20 or IP44 (face only).
Name
LIMIT RC IP20
LIMIT RC IP44',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/6/563s_8.8_limit_rc_ip20-ip44.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/6/563_8.8_limit_rc_ip20-ip44.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"8.8W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"19º, 25º, 36º, 45º","Type":"Fixed, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMIT RC IP20-IP44.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44.pdf"},{"label":"LIMIT RC IP20-IP44 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMIT RC20-09.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC20-09.zip"}]'::jsonb,
  77,
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
  'electron-limit-128w-and-17w-rc-ip20-ip44',
  'Electron',
  'Limit 12.8W & 17W RC IP20-IP44',
  'Limit 12',
  'Ceiling Recessed / Crush LL',
  'o o o
LIMIT 20/44 is an elegant trimless or recessed downlight available in different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
Limit TR is also available adjustable in 8.7Watt or 12.6Watt.
The series offers low UGR ensuring visual comfort.
It is available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h
IP Protection: IP20 or IP44 (face only).
Name
LIMIT RC IP20
LIMIT RC IP44',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/6/563s_12.8_limit_rc_ip20-ip44.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/6/563_12.8_limit_rc_ip20-ip44.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"12.8W, 17W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"19º, 25º, 36º, 55º","Type":"Fixed, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMIT RC IP20-IP44.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44.pdf"},{"label":"LIMIT RC IP20-IP44 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMIT RC20-13.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC20-13.zip"},{"label":"Photometrics LIMIT RC20-17.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC20-17.zip"}]'::jsonb,
  78,
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
  'electron-limit-87w-and-126w-adj-rc-ip20-ip44',
  'Electron',
  'Limit 8.7W & 12.6W Adj RC IP20-IP44',
  'Limit 8',
  'Ceiling Recessed / Crush LL',
  'o o
LIMIT 20/44 is an elegant trimless or recessed downlight available in different sizes.
Most models may also be 9/12mm lowered from the ceiling offering a special note to any space.
Limit TR is also available adjustable in 8.7Watt or 12.6Watt.
The series offers low UGR ensuring visual comfort.
It is available in either black or white colour.
It offers a selection of dimming options.
3 SDCM
L90/B10 50.000h
IP Protection: IP20 or IP44 (face only).
Name
LIMIT RC IP44 Adjustable',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/6/563s_12.6adj_limit_rc_ip20-ip44.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"8.7W, 12.6W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"18º, 30º, 50º","Type":"Adjustable, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMIT RC IP20-IP44.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44.pdf"},{"label":"LIMIT RC IP20-IP44 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMIT%20RC%20IP20-IP44%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMIT RC ADJ.zip","url":"https://electron.gr/media/products/Photometrics%20LIMIT%20RC%20ADJ.zip"}]'::jsonb,
  79,
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
  'electron-mani-round',
  'Electron',
  'Mani Round',
  'Mani Round',
  'Ceiling Recessed / Crush LL',
  'MANI is a downlight available in round & square.
3 SDCM
L90/B10 50000h
Low UGR (UGR<10 for black colour)
Name
MANI Round',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/M/A/MANI_RD.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/a/mani_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"6.1W, 8.9W","CCT":"2700K, 3000K, 4000K","Type":"Fixed","CRI":"80, 90","Beam Angle":"15º, 24º, 36º, 45º","Colour":"White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/a/mani_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"MANI.pdf","url":"https://electron.gr/media/products/MANI.pdf"},{"label":"MANI - Installation Manual.pdf","url":"https://electron.gr/media/products/MANI%20-%20Installation%20Manual.pdf"},{"label":"photometric MANI R9-S9 4000K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%204000K%20cri90.zip"},{"label":"photometric MANI R9-S9 4000K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%204000K%20cri80.zip"},{"label":"photometric MANI R9-S9 3000K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%203000K%20cri90.zip"},{"label":"photometric MANI R9-S9 3000K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%203000K%20cri80.zip"},{"label":"photometric MANI R9-S9 2700K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%202700K%20cri90.zip"},{"label":"photometric MANI R6-S6 4000K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%204000K%20cri90.zip"},{"label":"photometric MANI R6-S6 4000K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%204000K%20cri80.zip"},{"label":"photometric MANI R6-S6 3000K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%203000K%20cri80.zip"},{"label":"photometric MANI R6-S6 2700K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%202700K%20cri80.zip"},{"label":"photometric MANI R6-S6 3000K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%203000K%20cri90.zip"}]'::jsonb,
  80,
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
  'electron-mani-square',
  'Electron',
  'Mani Square',
  'Mani Square',
  'Ceiling Recessed / Crush LL',
  'MANI is a downlight available in round & square.
3 SDCM
L90/B10 50000h
Low UGR (UGR<10 for black colour)
Name
MANI Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/M/A/MANI_SQ.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/a/mani_schema1_1.jpg']::text[],
  array['Ceiling Recessed', 'Crush LL']::text[],
  '{"Model":"6.1W, 8.9W","CCT":"2700K, 3000K, 4000K","Type":"Fixed","CRI":"80, 90","Beam Angle":"15º, 24º, 36º, 45º","Colour":"White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/a/mani_schema1_1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"MANI.pdf","url":"https://electron.gr/media/products/MANI.pdf"},{"label":"MANI - Installation Manual.pdf","url":"https://electron.gr/media/products/MANI%20-%20Installation%20Manual.pdf"},{"label":"photometric MANI R6-S6 3000K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%203000K%20cri90.zip"},{"label":"photometric MANI R6-S6 2700K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%202700K%20cri80.zip"},{"label":"photometric MANI R6-S6 2700K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%202700K%20cri90.zip"},{"label":"photometric MANI R6-S6 3000K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%203000K%20cri80.zip"},{"label":"photometric MANI R6-S6 4000K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%204000K%20cri80.zip"},{"label":"photometric MANI R6-S6 4000K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R6-S6%204000K%20cri90.zip"},{"label":"photometric MANI R9-S9 2700K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%202700K%20cri90.zip"},{"label":"photometric MANI R9-S9 3000K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%203000K%20cri80.zip"},{"label":"photometric MANI R9-S9 3000K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%203000K%20cri90.zip"},{"label":"photometric MANI R9-S9 4000K cri80.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%204000K%20cri80.zip"},{"label":"photometric MANI R9-S9 4000K cri90.zip","url":"https://electron.gr/media/products/photometric%20MANI%20R9-S9%204000K%20cri90.zip"}]'::jsonb,
  81,
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
  'electron-scoop-n',
  'Electron',
  'Scoop N',
  'Scoop N',
  'Ceiling Recessed / Mani Round',
  'o o
Scoop N is a miniaturized recessed adjustable downlight suitable for display lighting.
Power consumption: 1W g 350mA and 1.5W g 500mA.
Available in black or white colour, custom colours also available upon request
Low UGR ensuring visual comfort. UGR<10 (21º & 28º), UGR<16 (38º)
3SDCM
L80/B10 50000h
Name
SCOOP N
LED Power
1W
1.5W
CCT
2700K
3000K
4000K
5000K
CRI
80
90
Beam Angle
21º
28º
38º
Type
Adjustable
Colour
White
Black
Dimming Option
Without Driver
24 PWM Dimmable
SCOOP N-_-_-_-_-AD-_-_
SCOOP N.pdf
photometric SCOOP N.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/c/scoop_n.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/s/c/scoop-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Mani Round']::text[],
  '{"LED Power":"1W, 1.5W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"21º, 28º, 38º","Type":"Adjustable","Colour":"White, Black","Dimming Option":"Without Driver, 24 PWM Dimmable"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/s/c/scoop-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SCOOP N.pdf","url":"https://electron.gr/media/products/SCOOP%20N.pdf"},{"label":"photometric SCOOP N.zip","url":"https://electron.gr/media/products/photometric%20SCOOP%20N.zip"}]'::jsonb,
  82,
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
  'electron-nordia-antiglare',
  'Electron',
  'Nordia AntiGlare',
  'Nordia AntiGlare',
  'Ceiling Recessed / Scoop N',
  'o o
NORDIA antiglare is an outdoor recessed downlight available in round form.
Body material: aluminium.
The luminaire can be customized with the use of softening lens, line spread lens and honeycomb supplied as extra.
Power cable HO5RN-F 2x0.75mm2 L= 1m
Cable outer dimeter: 6.5mm
Cable gland: IP67
Safety Glass: 6mm
Optics available: lenses
UGR<19 (6°, 15°, 30°, 46°)
3 SDCM
L90/B10 50000h
Ingress Protection: IP67
IK Rate: IK07
Accessories
Name
NORDIA Antiglare
Power
4.1W
6.5W
CCT
2700K
3000K
4000K
5000K
6500K
CRI
80
90
Beam Angle
6º
15º
30º
46º
Shape
Round
Type
Fixed
Colour
White
Black
Dimming Option
Without Driver
230VAC Non Dimmable
24/48DC Non Dimmable
24VDC PWM Dimmable
48VDC PWM Dimmable
230V Phase Cut
Extras
Standard Cover - No Extras
Standard Cover - Emergency Kit
Honeycomb Cover - No Extras
Honeycomb Cover - Emergency Kit
Softening lens - No Extras
Softening lens - Emergency Kit
Line spread lens - No Extras
Line spread lens - Emergency Kit
NORDIA AG-_-_-_-_-RD-FX-_-_-_
NORDIA AG.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_ag_bl-wh-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_ag_bl-wh.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/n/o/nordia-ag-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Scoop N']::text[],
  '{"CCT":"2700K, 3000K, 4000K, 5000K, 6500K","CRI":"80, 90","Beam Angle":"6º, 15º, 30º, 46º, Shape, Round","Type":"Fixed","Colour":"White, Black","Dimming Option":"Without Driver, 230VAC Non Dimmable, 24/48DC Non Dimmable, 24VDC PWM Dimmable, 48VDC PWM Dimmable, 230V Phase Cut","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit, Honeycomb Cover - No Extras, Honeycomb Cover - Emergency Kit, Softening lens - No Extras, Softening lens - Emergency Kit, Line spread lens - No Extras, Line spread lens - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/n/o/nordia-ag-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"NORDIA AG.pdf","url":"https://electron.gr/media/products/NORDIA%20AG.pdf"}]'::jsonb,
  83,
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
  'electron-nordia',
  'Electron',
  'Nordia',
  'electron-nordia',
  'Ceiling Recessed / Scoop N',
  'o o
Nordia is an outdoor recessed downlight available either round or square.
Nordia is also available in antiglare version in Black and White colour.
Body material: aluminium.
Trim material: Either aluminium electrostatically painted (white, black or other RAL finishes on request) or stainless steel AISI 316.
The luminaire can be customized with the use of softening lens, line spread lens and honeycomb supplied as extra.
Power cable HO5RN-F 2x0.75mm2 L= 1m
Cable outer dimeter: 6.5mm
Cable gland: IP67
Safety Glass: 6mm
Optics available: lenses
UGR<19 (6º, 15º, 30º, 46º)
3 SDCM
L90/B10 50000h
Ingress Protection: IP67
IK Rate: IK07
Accessories
Name
NORDIA
Power
4.1W
6.5W
CCT
2700K
3000K
4000K
5000K
6500K
CRI
80
90
Beam Angle
6º
15º
30º
46º
Shape
Round
Square
Type
Fixed
Colour
White
Black
Dimming Option
Without Driver
230VAC Non Dimmable
24/48DC Non Dimmable
24VDC PWM Dimmable
48VDC PWM Dimmable
230V Phase Cut
Extras
Standard Cover - No Extras
Standard Cover - Emergency Kit
Honeycomb Cover - No Extras
Honeycomb Cover - Emergency Kit
Softening lens - No Extras
Softening lens - Emergency Kit
Line spread lens - No Extras
Line spread lens - Emergency Kit
NORDIA-_-_-_-_-_-FX-_-_-_
NORDIA.pdf
NORDIA - NORDIA SQ Installation Manual.pdf
photometric NORDIA.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_bl-wh-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_bl-wh.jpg']::text[],
  array['Ceiling Recessed', 'Scoop N']::text[],
  '{"CCT":"2700K, 3000K, 4000K, 5000K, 6500K","CRI":"80, 90","Beam Angle":"6º, 15º, 30º, 46º, Shape, Round, Square","Type":"Fixed","Colour":"White, Black","Dimming Option":"Without Driver, 230VAC Non Dimmable, 24/48DC Non Dimmable, 24VDC PWM Dimmable, 48VDC PWM Dimmable, 230V Phase Cut","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit, Honeycomb Cover - No Extras, Honeycomb Cover - Emergency Kit, Softening lens - No Extras, Softening lens - Emergency Kit, Line spread lens - No Extras, Line spread lens - Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"NORDIA.pdf","url":"https://electron.gr/media/products/NORDIA.pdf"},{"label":"NORDIA - NORDIA SQ Installation Manual.pdf","url":"https://electron.gr/media/products/NORDIA%20-%20NORDIA%20SQ%20Installation%20Manual.pdf"},{"label":"photometric NORDIA.zip","url":"https://electron.gr/media/products/photometric%20NORDIA.zip"}]'::jsonb,
  84,
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
  'electron-nordia-ss',
  'Electron',
  'Nordia SS',
  'Nordia SS',
  'Ceiling Recessed / Scoop N',
  'o o
Nordia is an outdoor recessed downlight available either round or square.
Nordia is also available in antiglare version in Black and White colour.
Body material: aluminium.
Trim material: Either aluminium electrostatically painted (white, black or other RAL finishes on request) or stainless steel AISI 316.
The luminaire can be customized with the use of softening lens, line spread lens and honeycomb supplied as extra.
Power cable HO5RN-F 2x0.75mm2 L= 1m
Cable outer dimeter: 6.5mm
Cable gland: IP67
Safety Glass: 6mm
Optics available: lenses
UGR<19 (6º, 15º, 30º, 46º)
3 SDCM
L90/B10 50000h
Ingress Protection: IP67
IK Rate: IK07
Accessories
Name
NORDIA
Power
4.1W
6.5W
CCT
2700K
3000K
4000K
5000K
6500K
CRI
80
90
Beam Angle
6º
15º
30º
46º
Shape
Round
Square
Type
Fixed
Colour
Stainless Steel
Dimming Option
Without Driver
230VAC Non Dimmable
24/48DC Non Dimmable
24VDC PWM Dimmable
48VDC PWM Dimmable
230V Phase Cut
Extras
Standard Cover - No Extras
Standard Cover - Emergency Kit
Honeycomb Cover - No Extras
Honeycomb Cover - Emergency Kit
Softening lens - No Extras
Softening lens - Emergency Kit
Line spread lens - No Extras
Line spread lens - Emergency Kit
NORDIA-_-_-_-_-_-FX-SS-_-_
NORDIA.pdf
NORDIA SS - NORDIA SQ SS Installation Manual.pdf
photometric NORDIA.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_ss-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_ss.jpg']::text[],
  array['Ceiling Recessed', 'Scoop N']::text[],
  '{"CCT":"2700K, 3000K, 4000K, 5000K, 6500K","CRI":"80, 90","Beam Angle":"6º, 15º, 30º, 46º, Shape, Round, Square","Type":"Fixed","Colour":"Stainless Steel","Dimming Option":"Without Driver, 230VAC Non Dimmable, 24/48DC Non Dimmable, 24VDC PWM Dimmable, 48VDC PWM Dimmable, 230V Phase Cut","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit, Honeycomb Cover - No Extras, Honeycomb Cover - Emergency Kit, Softening lens - No Extras, Softening lens - Emergency Kit, Line spread lens - No Extras, Line spread lens - Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"NORDIA.pdf","url":"https://electron.gr/media/products/NORDIA.pdf"},{"label":"NORDIA SS - NORDIA SQ SS Installation Manual.pdf","url":"https://electron.gr/media/products/NORDIA%20SS%20-%20NORDIA%20SQ%20SS%20Installation%20Manual.pdf"},{"label":"photometric NORDIA.zip","url":"https://electron.gr/media/products/photometric%20NORDIA.zip"}]'::jsonb,
  85,
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
  'electron-nordia-diffused',
  'Electron',
  'Nordia Diffused',
  'Nordia Diffused',
  'Ceiling Recessed / Scoop N',
  'o o
Nordia is an outdoor recessed downlight available either round or square.
It has minimal aesthetic.
Body material: aluminium.
Trim material: Either aluminium electrostatically painted (white, black or other RAL finishes on request) or stainless steel AISI 316.
Power cable HO5RN-F 2x0.75mm2 L= 1m
Cable outer dimeter: 6.5mm
Cable gland: IP67
Safety Glass: 6mm
Optics available: lenses
Ingress Protection: IP67
IK Rate: IK07
Name
NORDIA Difussed
Power
2.1W
CCT
2700K
3000K
4000K
CRI
80
Beam Angle
Difussed
Shape
Round
Square
Type
Fixed
Colour
White
Black
Dimming Option
Without Driver
24/48DC Non Dimmable
24VDC PWM Dimmable
48VDC PWM Dimmable
230V Non Dimmable
Extras
No Extras
Emergency Kit
NORDIA DF-2-_-80-DF-_-FX-_-_-_
NORDIA DF.pdf
NORDIA - NORDIA SQ Installation Manual.pdf
photometric NORDIA DIFFUSED.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_df_bl-wh-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_df_bl-wh.jpg']::text[],
  array['Ceiling Recessed', 'Scoop N']::text[],
  '{"CCT":"2700K, 3000K, 4000K","CRI":"80","Beam Angle":"Difussed, Shape, Round, Square","Type":"Fixed","Colour":"White, Black","Dimming Option":"Without Driver, 24/48DC Non Dimmable, 24VDC PWM Dimmable, 48VDC PWM Dimmable, 230V Non Dimmable","Extras":"No Extras, Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"NORDIA DF.pdf","url":"https://electron.gr/media/products/NORDIA%20DF.pdf"},{"label":"NORDIA - NORDIA SQ Installation Manual.pdf","url":"https://electron.gr/media/products/NORDIA%20-%20NORDIA%20SQ%20Installation%20Manual.pdf"},{"label":"photometric NORDIA DIFFUSED.zip","url":"https://electron.gr/media/products/photometric%20NORDIA%20DIFFUSED.zip"}]'::jsonb,
  86,
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
  'electron-nordia-diffused-ss',
  'Electron',
  'Nordia Diffused SS',
  'Nordia Diffused SS',
  'Ceiling Recessed / Scoop N',
  'o o
Nordia is an outdoor recessed downlight available either round or square.
It has minimal aesthetic.
Body material: aluminium.
Trim material: Either aluminium electrostatically painted (white, black or other RAL finishes on request) or stainless steel AISI 316.
Power cable HO5RN-F 2x0.75mm2 L= 1m
Cable outer dimeter: 6.5mm
Cable gland: IP67
Safety Glass: 6mm
Optics available: lenses
Ingress Protection: IP67
IK Rate: IK07
Name
NORDIA DF
Power
2.1W
CCT
2700K
3000K
4000K
CRI
80
Beam Angle
Difussed
Shape
Round
Square
Type
Fixed
Colour
Stainless Steel
Dimming Option
Without Driver
24/48DC Non Dimmable
24VDC PWM Dimmable
48VDC PWM Dimmable
230V Non Dimmable
Extras
No Extras
Emergency Kit
NORDIA DF-2-_-80-DF-_-FX-SS-_-_
NORDIA DF.pdf
NORDIA SS - NORDIA SQ SS Installation Manual.pdf
photometric NORDIA DIFFUSED.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_df_ss-.jpg']::text[],
  array['Ceiling Recessed', 'Scoop N']::text[],
  '{"CCT":"2700K, 3000K, 4000K","CRI":"80","Beam Angle":"Difussed, Shape, Round, Square","Type":"Fixed","Colour":"Stainless Steel","Dimming Option":"Without Driver, 24/48DC Non Dimmable, 24VDC PWM Dimmable, 48VDC PWM Dimmable, 230V Non Dimmable","Extras":"No Extras, Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"NORDIA DF.pdf","url":"https://electron.gr/media/products/NORDIA%20DF.pdf"},{"label":"NORDIA SS - NORDIA SQ SS Installation Manual.pdf","url":"https://electron.gr/media/products/NORDIA%20SS%20-%20NORDIA%20SQ%20SS%20Installation%20Manual.pdf"},{"label":"photometric NORDIA DIFFUSED.zip","url":"https://electron.gr/media/products/photometric%20NORDIA%20DIFFUSED.zip"}]'::jsonb,
  87,
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

