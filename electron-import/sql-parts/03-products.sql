-- Electron products part 3

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
  'electron-nordia-wash',
  'Electron',
  'Nordia Wash',
  'Nordia Wash',
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
3 SDCM
L90/B10 50000h
Ingress Protection: IP67
IK Rate: IK07
Name
NORDIA WASH
Power
4.1W
CCT
2700K
3000K
4000K
5000K
CRI
80
90
Beam Angle
Asymmetric 27ºx42º
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
230VC Non Dimmable
Extras
No Extras
Emergency Kit
NORDIA W-04-_-_-AS-_-FX-_-_-_
NORDIA WASH.pdf
NORDIA - NORDIA SQ Installation Manual.pdf
Photometric NORDIA WASH.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_wash_bl-wh-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_wash_bl-wh.jpg']::text[],
  array['Ceiling Recessed', 'Scoop N']::text[],
  '{"CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"Asymmetric 27ºx42º, Shape, Round, Square","Type":"Fixed","Colour":"White, Black","Dimming Option":"Without Driver, 24/48DC Non Dimmable, 24VDC PWM Dimmable, 48VDC PWM Dimmable, 230VC Non Dimmable","Extras":"No Extras, Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"NORDIA WASH.pdf","url":"https://electron.gr/media/products/NORDIA%20WASH.pdf"},{"label":"NORDIA - NORDIA SQ Installation Manual.pdf","url":"https://electron.gr/media/products/NORDIA%20-%20NORDIA%20SQ%20Installation%20Manual.pdf"},{"label":"Photometric NORDIA WASH.zip","url":"https://electron.gr/media/products/Photometric%20NORDIA%20WASH.zip"}]'::jsonb,
  88,
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
  'electron-nordia-wash-ss',
  'Electron',
  'Nordia Wash SS',
  'Nordia Wash SS',
  'Ceiling Recessed / Nordia AntiGlare',
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
3 SDCM
L90/B10 50000h
Ingress Protection: IP67
IK Rate: IK07
Name
NORDIA WASH
Power
4.1W
CCT
2700K
3000K
4000K
5000K
CRI
80
90
Beam Angle
Asymmetric 27ºx42º
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
NORDIA W-_-_-_-_-_-FX-SS-_-_
NORDIA WASH.pdf
NORDIA SS - NORDIA SQ SS Installation Manual.pdf
Photometric NORDIA WASH.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_wash_ss-.jpg']::text[],
  array['Ceiling Recessed', 'Nordia AntiGlare']::text[],
  '{"CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"Asymmetric 27ºx42º, Shape, Round, Square","Type":"Fixed","Colour":"Stainless Steel","Dimming Option":"Without Driver, 24/48DC Non Dimmable, 24VDC PWM Dimmable, 48VDC PWM Dimmable, 230V Non Dimmable","Extras":"No Extras, Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"NORDIA WASH.pdf","url":"https://electron.gr/media/products/NORDIA%20WASH.pdf"},{"label":"NORDIA SS - NORDIA SQ SS Installation Manual.pdf","url":"https://electron.gr/media/products/NORDIA%20SS%20-%20NORDIA%20SQ%20SS%20Installation%20Manual.pdf"},{"label":"Photometric NORDIA WASH.zip","url":"https://electron.gr/media/products/Photometric%20NORDIA%20WASH.zip"}]'::jsonb,
  89,
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
  'electron-lima-21-rc',
  'Electron',
  'Lima 21 RC',
  'Lima 21 RC',
  'Ceiling Recessed / Nordia Wash SS',
  'Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
It is available in different beam angles, diffused and wall wash applications.
It includes models for recessed and trimless installations.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_21_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_rc_schema1_2.jpg']::text[],
  array['Ceiling Recessed', 'Nordia Wash SS']::text[],
  '{"Model":"LIMA 21W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 50º, 15ºx35º, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_rc_schema1_2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA RC.pdf","url":"https://electron.gr/media/products/LIMA%20RC.pdf"},{"label":"LIMA Recessed - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20Recessed%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMA 21.zip","url":"https://electron.gr/media/products/Photometrics%20LIMA%2021.zip"}]'::jsonb,
  90,
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
  'electron-lima-10-rc',
  'Electron',
  'Lima 10 RC',
  'Lima 10 RC',
  'Ceiling Recessed / Nordia Wash SS',
  'Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
It is available in different beam angles, diffused and wall wash applications.
It includes models for recessed and trimless installations.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_10_rc.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_rc_schema1_1.jpg']::text[],
  array['Ceiling Recessed', 'Nordia Wash SS']::text[],
  '{"Model":"LIMA 10W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 50º, 15ºx35º, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_rc_schema1_1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA RC.pdf","url":"https://electron.gr/media/products/LIMA%20RC.pdf"},{"label":"LIMA Recessed - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20Recessed%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMA 10.zip","url":"https://electron.gr/media/products/Photometrics%20LIMA%2010.zip"}]'::jsonb,
  91,
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
  'electron-lima-4-rc',
  'Electron',
  'Lima 4 RC',
  'Lima 4 RC',
  'Ceiling Recessed / Nordia Wash SS',
  'Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
It is available in different beam angles, diffused and wall wash applications.
It includes models for recessed and trimless installations.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_4_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_rc_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Nordia Wash SS']::text[],
  '{"Model":"LIMA 4W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 50º, 15ºx35º, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_rc_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA RC.pdf","url":"https://electron.gr/media/products/LIMA%20RC.pdf"},{"label":"LIMA Recessed - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20Recessed%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMA 4.zip","url":"https://electron.gr/media/products/Photometrics%20LIMA%204.zip"}]'::jsonb,
  92,
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
  'electron-lima-21-wash-rc',
  'Electron',
  'Lima 21 Wash RC',
  'Lima 21 Wash RC',
  'Ceiling Recessed / Lima 21 RC',
  'o o o
Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
It is available in different beam angles, diffused and wall wash applications.
It includes models for recessed and trimless installations.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Constant current
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_21_WASH_RC.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 RC']::text[],
  '{"Model":"LIMA WASH 21W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"45ºx75º, Colour Trim/Inner Case, White/Black, Black/Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA WASH RC.pdf","url":"https://electron.gr/media/products/LIMA%20WASH%20RC.pdf"},{"label":"LIMA WASH (Recessed) - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20WASH%20(Recessed)%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMA 21 WASH.zip","url":"https://electron.gr/media/products/Photometrics%20LIMA%2021%20WASH.zip"}]'::jsonb,
  93,
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
  'electron-lima-10-wash-rc',
  'Electron',
  'Lima 10 Wash RC',
  'Lima 10 Wash RC',
  'Ceiling Recessed / Lima 21 RC',
  'Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
It is available in different beam angles, diffused and wall wash applications.
It includes models for recessed and trimless installations.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Constant current
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_10_wash_rc.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_wash_rc_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 RC']::text[],
  '{"Model":"LIMA WASH 10W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"45ºx75º, Colour Trim/Inner Case, White/Black, Black/Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_wash_rc_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA WASH RC.pdf","url":"https://electron.gr/media/products/LIMA%20WASH%20RC.pdf"},{"label":"LIMA WASH (Recessed) - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20WASH%20(Recessed)%20-%20Installation%20Manual.pdf"},{"label":"Photometrics LIMA 10 WASH.zip","url":"https://electron.gr/media/products/Photometrics%20LIMA%2010%20WASH.zip"}]'::jsonb,
  94,
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
  'electron-lima-21-diffused-rc',
  'Electron',
  'Lima 21 Diffused RC',
  'Lima 21 Diffused RC',
  'Ceiling Recessed / Lima 21 Wash RC',
  'o o
Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
It is available in different beam angles, diffused and wall wash applications.
It includes models for recessed and trimless installations.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_21_DIFFUSED_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_df_rc_schema1_2.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 Wash RC']::text[],
  '{"Model":"LIMA Diffused 21W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"Diffused, Colour Trim/Inner Case, White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_df_rc_schema1_2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA DF RC.pdf","url":"https://electron.gr/media/products/LIMA%20DF%20RC.pdf"},{"label":"LIMA Diffused Recessed - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20Diffused%20Recessed%20-%20Installation%20Manual.pdf"},{"label":"photometric LIMA DF RC.zip","url":"https://electron.gr/media/products/photometric%20LIMA%20DF%20RC.zip"}]'::jsonb,
  95,
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
  'electron-lima-10-diffused-rc',
  'Electron',
  'Lima 10 Diffused RC',
  'Lima 10 Diffused RC',
  'Ceiling Recessed / Lima 21 Wash RC',
  'o o o o
Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
It is available in different beam angles, diffused and wall wash applications.
It includes models for recessed and trimless installations.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_10_diffused_rc.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 Wash RC']::text[],
  '{"Model":"LIMA Diffused 10W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"Diffused, Colour Trim/Inner Case, White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA DF RC.pdf","url":"https://electron.gr/media/products/LIMA%20DF%20RC.pdf"},{"label":"LIMA Diffused Recessed - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20Diffused%20Recessed%20-%20Installation%20Manual.pdf"},{"label":"photometric LIMA DF RC.zip","url":"https://electron.gr/media/products/photometric%20LIMA%20DF%20RC.zip"}]'::jsonb,
  96,
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
  'electron-lima-4-diffused-rc',
  'Electron',
  'Lima 4 Diffused RC',
  'Lima 4 Diffused RC',
  'Ceiling Recessed / Lima 21 Wash RC',
  'o o
Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
It is available in different beam angles, diffused and wall wash applications.
It includes models for recessed and trimless installations.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_4_DIFFUSED_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_df_rc_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 Wash RC']::text[],
  '{"Model":"LIMA Diffused 4W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"Diffused, Colour Trim/Inner Case, White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_df_rc_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA DF RC.pdf","url":"https://electron.gr/media/products/LIMA%20DF%20RC.pdf"},{"label":"LIMA Diffused Recessed - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20Diffused%20Recessed%20-%20Installation%20Manual.pdf"},{"label":"photometric LIMA DF RC.zip","url":"https://electron.gr/media/products/photometric%20LIMA%20DF%20RC.zip"}]'::jsonb,
  97,
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
  'electron-lima-10-ip44-rc',
  'Electron',
  'Lima 10 IP44 RC',
  'Lima 10 IP44 RC',
  'Ceiling Recessed / Lima 21 Diffused RC',
  'Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP44',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_10_rc_ip44.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip44_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 Diffused RC']::text[],
  '{"Model":"LIMA 10W IP44 Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 50º, 15ºx35º, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip44_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA IP44.pdf","url":"https://electron.gr/media/products/LIMA%20IP44.pdf"},{"label":"LIMA IP44 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20IP44%20-%20Installation%20Manual.pdf"},{"label":"photometric LIMA 10 IP44.zip","url":"https://electron.gr/media/products/photometric%20LIMA%2010%20IP44.zip"}]'::jsonb,
  98,
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
  'electron-lima-4-ip44-rc',
  'Electron',
  'Lima 4 IP44 RC',
  'Lima 4 IP44 RC',
  'Ceiling Recessed / Lima 21 Diffused RC',
  'Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP44',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_4_RC_IP44.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip44_schema1_1.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 Diffused RC']::text[],
  '{"Model":"LIMA 4W IP44 Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 50º, 15ºx35º, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip44_schema1_1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA IP44.pdf","url":"https://electron.gr/media/products/LIMA%20IP44.pdf"},{"label":"LIMA IP44 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20IP44%20-%20Installation%20Manual.pdf"},{"label":"photometric LIMA 4 IP44.zip","url":"https://electron.gr/media/products/photometric%20LIMA%204%20IP44.zip"}]'::jsonb,
  99,
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
  'electron-lima-21-ip65-rc',
  'Electron',
  'Lima 21 IP65 RC',
  'Lima 21 IP65 RC',
  'Ceiling Recessed / Lima 10 IP44 RC',
  'Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP65 (FACE ONLY)',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_21_RC_IP65.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip65_schema1_1.jpg']::text[],
  array['Ceiling Recessed', 'Lima 10 IP44 RC']::text[],
  '{"Model":"LIMA 21W IP65 Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 50º, 15ºx35º, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip65_schema1_1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA IP65.pdf","url":"https://electron.gr/media/products/LIMA%20IP65.pdf"},{"label":"LIMA IP65 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20IP65%20-%20Installation%20Manual.pdf"},{"label":"photometric LIMA 21 IP65.zip","url":"https://electron.gr/media/products/photometric%20LIMA%2021%20IP65.zip"}]'::jsonb,
  100,
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
  'electron-lima-10-ip65-rc',
  'Electron',
  'Lima 10 IP65 RC',
  'Lima 10 IP65 RC',
  'Ceiling Recessed / Lima 10 IP44 RC',
  'Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP65 (FACE ONLY)',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_10_rc_ip65.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip65_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Lima 10 IP44 RC']::text[],
  '{"Model":"LIMA 10W IP65 Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 50º, 15ºx35º, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip65_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA IP65.pdf","url":"https://electron.gr/media/products/LIMA%20IP65.pdf"},{"label":"LIMA IP65 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20IP65%20-%20Installation%20Manual.pdf"},{"label":"photometric LIMA 10 IP65.zip","url":"https://electron.gr/media/products/photometric%20LIMA%2010%20IP65.zip"}]'::jsonb,
  101,
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
  'electron-lima-4-ip65-rc',
  'Electron',
  'Lima 4 IP65 RC',
  'Lima 4 IP65 RC',
  'Ceiling Recessed / Lima 10 IP44 RC',
  'Lima series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Constant current
Indoor use: IP65 (FACE ONLY)',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_4_RC_IP65.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip65_schema1_2.jpg']::text[],
  array['Ceiling Recessed', 'Lima 10 IP44 RC']::text[],
  '{"Model":"LIMA 4W IP65 Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 50º, 15ºx35º, Colour Trim/Inner Case, White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"Standard Cover - No Extras, Standard Cover - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_ip65_schema1_2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LIMA IP65.pdf","url":"https://electron.gr/media/products/LIMA%20IP65.pdf"},{"label":"LIMA IP65 - Installation Manual.pdf","url":"https://electron.gr/media/products/LIMA%20IP65%20-%20Installation%20Manual.pdf"},{"label":"photometric LIMA 4 IP65.zip","url":"https://electron.gr/media/products/photometric%20LIMA%204%20IP65.zip"}]'::jsonb,
  102,
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
  'electron-lane-31-rc',
  'Electron',
  'Lane 31 RC',
  'Lane 31 RC',
  'Ceiling Recessed / Lima 21 IP65 RC',
  'Lane series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/A/LANE_31_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1_5.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 IP65 RC']::text[],
  '{"Model":"LANE 31W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 45º, Colour Trim/Inner Case, White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras, Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1_5.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LANE RC.pdf","url":"https://electron.gr/media/products/LANE%20RC.pdf"},{"label":"LANE (Recessed) - Installation Manual.pdf","url":"https://electron.gr/media/products/LANE%20(Recessed)%20-%20Installation%20Manual.pdf"},{"label":"Photometric (ldt files) LANE 31.zip","url":"https://electron.gr/media/products/Photometric%20(ldt%20files)%20LANE%2031.zip"}]'::jsonb,
  103,
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
  'electron-lane-21-rc',
  'Electron',
  'Lane 21 RC',
  'Lane 21 RC',
  'Ceiling Recessed / Lima 21 IP65 RC',
  'Lane series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/A/LANE_21_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1_3.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 IP65 RC']::text[],
  '{"Model":"LANE 21W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 45º, Colour Trim/Inner Case, White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras, Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1_3.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LANE RC.pdf","url":"https://electron.gr/media/products/LANE%20RC.pdf"},{"label":"LANE (Recessed) - Installation Manual.pdf","url":"https://electron.gr/media/products/LANE%20(Recessed)%20-%20Installation%20Manual.pdf"},{"label":"Photometric (ldt files) LANE 21.zip","url":"https://electron.gr/media/products/Photometric%20(ldt%20files)%20LANE%2021.zip"}]'::jsonb,
  104,
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
  'electron-lane-10-rc',
  'Electron',
  'Lane 10 RC',
  'Lane 10 RC',
  'Ceiling Recessed / Lima 21 IP65 RC',
  'Lane series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_10_rc.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 IP65 RC']::text[],
  '{"Model":"LANE 10W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 45º, Colour Trim/Inner Case, White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras, Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LANE RC.pdf","url":"https://electron.gr/media/products/LANE%20RC.pdf"},{"label":"LANE (Recessed) - Installation Manual.pdf","url":"https://electron.gr/media/products/LANE%20(Recessed)%20-%20Installation%20Manual.pdf"},{"label":"Photometric (ldt files) LANE 10.zip","url":"https://electron.gr/media/products/Photometric%20(ldt%20files)%20LANE%2010.zip"}]'::jsonb,
  105,
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
  'electron-lane-4-rc',
  'Electron',
  'Lane 4 RC',
  'Lane 4 RC',
  'Ceiling Recessed / Lima 21 IP65 RC',
  'Lane series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/A/LANE_4_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1_2.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 IP65 RC']::text[],
  '{"Model":"LANE 4W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 45º, Colour Trim/Inner Case, White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras, Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1_2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LANE RC.pdf","url":"https://electron.gr/media/products/LANE%20RC.pdf"},{"label":"LANE (Recessed) - Installation Manual.pdf","url":"https://electron.gr/media/products/LANE%20(Recessed)%20-%20Installation%20Manual.pdf"},{"label":"Photometric (ldt files) LANE 4.zip","url":"https://electron.gr/media/products/Photometric%20(ldt%20files)%20LANE%204.zip"}]'::jsonb,
  106,
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
  'electron-lane-2-rc',
  'Electron',
  'Lane 2 RC',
  'Lane 2 RC',
  'Ceiling Recessed / Lima 21 IP65 RC',
  'Lane series is a complete series of die cast aluminium luminaires.
It is available in different wattage consumption and each model is offered in different lumen outputs.
In terms of LED, it is available in different CCTs as standard and it can also be offered upon request (depending on the model) in tunable white TW and individual colours R,G,B,A.
3 SDCM
L90/B10 50000h
Low UGR (UGR<16 /black mask, UGR<19 /white mask).
Indoor use: IP40',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/A/LANE_2_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1_1.jpg']::text[],
  array['Ceiling Recessed', 'Lima 21 IP65 RC']::text[],
  '{"Model":"LANE 2W Recessed","CCT":"2700K, 3000K, 4000K, 6500K","CRI":"80, 90","Type":"Fixed","Beam Angle":"15º, 30º, 45º, Colour Trim/Inner Case, White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Extras":"No Extras, Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/l/a/lane_rc_schema1_1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LANE RC.pdf","url":"https://electron.gr/media/products/LANE%20RC.pdf"},{"label":"LANE (Recessed) - Installation Manual.pdf","url":"https://electron.gr/media/products/LANE%20(Recessed)%20-%20Installation%20Manual.pdf"},{"label":"Photometric (ldt files) LANE 2.zip","url":"https://electron.gr/media/products/Photometric%20(ldt%20files)%20LANE%202.zip"}]'::jsonb,
  107,
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
  'electron-focus-rc',
  'Electron',
  'Focus RC',
  'Focus RC',
  'Ceiling Recessed / Lane 31 RC',
  'Focus is a series of recessed downlights.
Offered with IP44 (face only) LED module or with GU10 lampholder (max 7.5 Watt).
Available either fixed or adjustable.
Outer ring offered in white or black colour, inner ring availbale in white, black, gold or silver colour.
3 SDCM
L90/B10 50000h
Low UGR (UGR<10)',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/F/O/FOCUS_RC.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/F/O/FOCUS_RC_grey.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/f/o/focus_rc_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Lane 31 RC']::text[],
  '{"Model":"FOCUS Recessed","LED Power":"6.1W, 10.3W, Warm Dimming 6.1W","CCT":"2700K, 3000K, 4000K, 1800K-3000K","CRI":"80, 90, 95","Beam Angle":"18º, 24º, 32º, 48º","Type":"Adjustable, Fixed, Colour Outer/Inner Trim, White/White, White/Black, White/Gold, White/Silver, Black/Black, Black/White, Black/Gold, Black/Silver","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"No Extra, Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/f/o/focus_rc_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"FOCUS RC.pdf","url":"https://electron.gr/media/products/FOCUS%20RC.pdf"},{"label":"FOCUS RC (Recessed) - Installation Manual.pdf","url":"https://electron.gr/media/products/FOCUS%20RC%20(Recessed)%20-%20Installation%20Manual.pdf"},{"label":"Photometrics FOCUS RC.zip","url":"https://electron.gr/media/products/Photometrics%20FOCUS%20RC.zip"}]'::jsonb,
  108,
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
  'electron-eris',
  'Electron',
  'Eris',
  'electron-eris',
  'Ceiling Recessed / Focus RC',
  'ERIS series is a recessed downlight available either fixed or adjustable.
It is offered in four different power consumptions and in a vast variety of beam angles.
Outer case available in white or black colour. Inner case available in white, black, silver or gold colour.
3 SDCM
L90/B10 50.000h
Accessories
ERIS.pdf
ERIS Installation Manual.pdf
Photometrics (ldt files) ERIS M.zip
Photometrics (ldt files) ERIS L.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/E/R/ERIS.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/E/R/ERIS_grey.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/e/r/eris_schema2.jpg']::text[],
  array['Ceiling Recessed', 'Focus RC']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/e/r/eris_schema2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ERIS.pdf","url":"https://electron.gr/media/products/ERIS.pdf"},{"label":"ERIS Installation Manual.pdf","url":"https://electron.gr/media/products/ERIS%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) ERIS M.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20ERIS%20M.zip"},{"label":"Photometrics (ldt files) ERIS L.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20ERIS%20L.zip"}]'::jsonb,
  109,
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
  'electron-merlyn-xl-round',
  'Electron',
  'Merlyn XL Round',
  'Merlyn XL Round',
  'Ceiling Recessed / Eris',
  'o o
Merlyn series consists of adjustable downlights in round or square form.
Available in 18 / 25 /32 Watt.
Available with honeycomb, line spread and softening lens as extra.
3 SDCM
L90/B10 50000h
UGR<10
Accessories
MERLYN XL.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_xl_rd.jpg']::text[],
  array['Ceiling Recessed', 'Eris']::text[],
  '{}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"MERLYN XL.pdf","url":"https://electron.gr/media/products/MERLYN%20XL.pdf"}]'::jsonb,
  110,
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
  'electron-merlyn-xl-square',
  'Electron',
  'Merlyn XL Square',
  'Merlyn XL Square',
  'Ceiling Recessed / Eris',
  'o o
Merlyn series consists of adjustable downlights in round or square form.
Available in 18 / 25 /32 Watt.
Available with honeycomb, line spread and softening lens as extra.
3 SDCM
L90/B10 50000h
UGR<10
Accessories
MERLYN XL.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_xl_sq.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_xl_schema1_1.jpg']::text[],
  array['Ceiling Recessed', 'Eris']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_xl_schema1_1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"MERLYN XL.pdf","url":"https://electron.gr/media/products/MERLYN%20XL.pdf"}]'::jsonb,
  111,
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
  'electron-merlyn-round',
  'Electron',
  'Merlyn Round',
  'Merlyn Round',
  'Ceiling Recessed / Eris',
  'o o
Merlyn is a recessed adjustable downlight in round or square form.
Available in 9/13 watt & 6/12 watt (WD).
Available with honeycomb, line spread and softening lens as extra.
3 SDCM
L90/B10 50000h
UGR<10
IP40
Accessories
MERLYN.pdf
photometric MERLYN 3000K.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_rd.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Eris']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"MERLYN.pdf","url":"https://electron.gr/media/products/MERLYN.pdf"},{"label":"photometric MERLYN 3000K.zip","url":"https://electron.gr/media/products/photometric%20MERLYN%203000K.zip"}]'::jsonb,
  112,
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
  'electron-merlyn-square',
  'Electron',
  'Merlyn Square',
  'Merlyn Square',
  'Ceiling Recessed / Eris',
  'Merlyn is a recessed adjustable downlight in round or square form.
Available in 9/13 watt & 6/12 watt (WD).
Available with honeycomb, line spread and softening lens as extra.
3 SDCM
L90/B10 50000h
UGR<10
IP40
Accessories
MERLYN.pdf
MERLYN SQUARE (MERLYN S09-S13) - Installation Manual.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_sq.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_schema1_1.jpg']::text[],
  array['Ceiling Recessed', 'Eris']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_schema1_1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"MERLYN.pdf","url":"https://electron.gr/media/products/MERLYN.pdf"},{"label":"MERLYN SQUARE (MERLYN S09-S13) - Installation Manual.pdf","url":"https://electron.gr/media/products/MERLYN%20SQUARE%20(MERLYN%20S09-S13)%20-%20Installation%20Manual.pdf"}]'::jsonb,
  113,
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
  'electron-merlyn-ip44',
  'Electron',
  'Merlyn IP44',
  'Merlyn IP44',
  'Ceiling Recessed / Eris',
  'Merlyn IP44 is a fixed downlight available with LED or with GU10 lamp holder for LED lamps.
High antiglare rate due to its depth.
Material : aluminium die cast.
Variety of colour combinations.
Variety of accessories: honeycomb/spread lens/soft lens/ line spread lens.
3 SDCM
L90/B10 50000h
Ingress Protection: IP44 (face only)
MERLYN IP44.pdf
MERLYN IP44 - Installation Manual.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/M/E/MERLYN_IP44.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_ip44_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Eris']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_ip44_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"MERLYN IP44.pdf","url":"https://electron.gr/media/products/MERLYN%20IP44.pdf"},{"label":"MERLYN IP44 - Installation Manual.pdf","url":"https://electron.gr/media/products/MERLYN%20IP44%20-%20Installation%20Manual.pdf"}]'::jsonb,
  114,
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
  'electron-merlyn-ip44-retrofit',
  'Electron',
  'Merlyn IP44 Retrofit',
  'Merlyn IP44 Retrofit',
  'Ceiling Recessed / Eris',
  'Merlyn IP44 is a fixed downlight available with LED or with GU10 lamp holder for LED lamps.
High antiglare rate due to its depth.
Material : aluminium die cast.
Variety of colour combinations.
Variety of accessories: honeycomb/spread lens/soft lens/ line spread lens.
3 SDCM
L90/B10 50000h
Ingress Protection: IP44 (face only)
MERLYN IP44.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/M/E/MERLYN_IP44_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_ip44_schema2_1.jpg']::text[],
  array['Ceiling Recessed', 'Eris']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_ip44_schema2_1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"MERLYN IP44.pdf","url":"https://electron.gr/media/products/MERLYN%20IP44.pdf"}]'::jsonb,
  115,
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
  'electron-castalia-r',
  'Electron',
  'Castalia R',
  'Castalia R',
  'Ceiling Recessed / Merlyn XL Round',
  'Recessed spots for indoor use.
Ideal for antiglare lighting installations.
Easy magnetic installation.
Offered with IP44 (face only) LED module or suitable for GU10 LED lamps.
3 SDCM
L90/B10 50000h
CASTALIA R.pdf
photometric CASTALIA R.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_R.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_R_grey.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_r_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Merlyn XL Round']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_r_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CASTALIA R.pdf","url":"https://electron.gr/media/products/CASTALIA%20R.pdf"},{"label":"photometric CASTALIA R.zip","url":"https://electron.gr/media/products/photometric%20CASTALIA%20R.zip"}]'::jsonb,
  116,
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
  'electron-castalia-s',
  'Electron',
  'Castalia S',
  'Castalia S',
  'Ceiling Recessed / Merlyn XL Round',
  'Recessed spots for indoor use.
Ideal for antiglare lighting installations.
Easy magnetic installation.
Offered with IP44 (face only) LED module or suitable for GU10 LED lamps.
3 SDCM
L90/B10 50000h
CASTALIA S.pdf
photometric CASTALIA S.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_S.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_S_grey.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_s_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Merlyn XL Round']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_s_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CASTALIA S.pdf","url":"https://electron.gr/media/products/CASTALIA%20S.pdf"},{"label":"photometric CASTALIA S.zip","url":"https://electron.gr/media/products/photometric%20CASTALIA%20S.zip"}]'::jsonb,
  117,
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
  'electron-castalia-e',
  'Electron',
  'Castalia E',
  'Castalia E',
  'Ceiling Recessed / Merlyn XL Round',
  'Recessed spots for indoor use.
Ideal for antiglare lighting installations.
Easy magnetic installation.
Offered with IP44 (face only) LED module or suitable for GU10 LED lamps.
Adjustable on one axis.
3 SDCM
L90/B10 50000h
CASTALIA E.pdf
photometric CASTALIA E.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_E.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_E_grey.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_e_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Merlyn XL Round']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_e_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CASTALIA E.pdf","url":"https://electron.gr/media/products/CASTALIA%20E.pdf"},{"label":"photometric CASTALIA E.zip","url":"https://electron.gr/media/products/photometric%20CASTALIA%20E.zip"}]'::jsonb,
  118,
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
  'electron-castalia-h',
  'Electron',
  'Castalia H',
  'Castalia H',
  'Ceiling Recessed / Merlyn XL Round',
  'Recessed spots for indoor use.
Ideal for antiglare lighting installations.
Easy magnetic installation.
Offered with IP44 (face only) LED module or suitable for GU10 LED lamps.
Adjustable on one axis.
3 SDCM
L90/B10 50000h
CASTALIA H.pdf
photometric CASTALIA H.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_H.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_H_grey.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_h_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Merlyn XL Round']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_h_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CASTALIA H.pdf","url":"https://electron.gr/media/products/CASTALIA%20H.pdf"},{"label":"photometric CASTALIA H.zip","url":"https://electron.gr/media/products/photometric%20CASTALIA%20H.zip"}]'::jsonb,
  119,
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
  'electron-castalia-a',
  'Electron',
  'Castalia A',
  'Castalia A',
  'Ceiling Recessed / Merlyn XL Round',
  'Recessed spots for indoor use.
Ideal for antiglare lighting installations.
Easy magnetic installation.
Offered with IP44 (face only) LED module or suitable for GU10 LED lamps.
3 SDCM
L90/B10 50000h
CASTALIA A.pdf
photometric CASTALIA A.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_A.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_A_grey.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_a_schema2.jpg']::text[],
  array['Ceiling Recessed', 'Merlyn XL Round']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_a_schema2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CASTALIA A.pdf","url":"https://electron.gr/media/products/CASTALIA%20A.pdf"},{"label":"photometric CASTALIA A.zip","url":"https://electron.gr/media/products/photometric%20CASTALIA%20A.zip"}]'::jsonb,
  120,
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
  'electron-castalia-w',
  'Electron',
  'Castalia W',
  'Castalia W',
  'Ceiling Recessed / Merlyn XL Round',
  'Recessed spots for indoor use.
Ideal for antiglare lighting installations.
Easy magnetic installation.
Offered with IP44 (face only) LED module or suitable for GU10 LED lamps.
Adjustable on one axis.
3 SDCM
L90/B10 50000h
CASTALIA W.pdf
photometric CASTALIA W.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_W.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_W_grey.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_w_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Merlyn XL Round']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/a/castalia_w_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CASTALIA W.pdf","url":"https://electron.gr/media/products/CASTALIA%20W.pdf"},{"label":"photometric CASTALIA W.zip","url":"https://electron.gr/media/products/photometric%20CASTALIA%20W.zip"}]'::jsonb,
  121,
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
  'electron-revo-m',
  'Electron',
  'Revo M',
  'Revo M',
  'Ceiling Recessed / Castalia R',
  'o o
REVO M is the second recessed downlight of REVO series.
It is available in white or black colour.
It is offered monochromatic, tunable white or warm dimming.
It has a variety of dimming options.
Indoor use: IP44 (face only).
Low UGR ensuring visual comfort (UGR<18).
Monochromatic, TW, WD
3 SDCM
L90/B10 50.000h
REVO M.pdf
REVO Series - Installation Manual.pdf
Photometrics REVO M.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/6/1/612_revo_m.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/r/e/revo-m-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Castalia R']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/r/e/revo-m-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"REVO M.pdf","url":"https://electron.gr/media/products/REVO%20M.pdf"},{"label":"REVO Series - Installation Manual.pdf","url":"https://electron.gr/media/products/REVO%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometrics REVO M.zip","url":"https://electron.gr/media/products/Photometrics%20REVO%20M.zip"}]'::jsonb,
  122,
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
  'electron-revo-l',
  'Electron',
  'Revo L',
  'Revo L',
  'Ceiling Recessed / Castalia R',
  'o o
REVO L is the large recessed downlight of REVO series.
It is available in white or black colour.
It is offered monochromatic, tunable white or warm dimming.
It has a variety of dimming options.
Indoor use: IP44 (face only).
Low UGR ensuring visual comfort (UGR<18).
Monochromatic, TW, WD
3 SDCM
L90/B10 50.000h
REVO L.pdf
REVO Series - Installation Manual.pdf
Photometrics REVO L.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/6/1/614_revo_l.jpg']::text[],
  array['Ceiling Recessed', 'Castalia R']::text[],
  '{}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"REVO L.pdf","url":"https://electron.gr/media/products/REVO%20L.pdf"},{"label":"REVO Series - Installation Manual.pdf","url":"https://electron.gr/media/products/REVO%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometrics REVO L.zip","url":"https://electron.gr/media/products/Photometrics%20REVO%20L.zip"}]'::jsonb,
  123,
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
  'electron-revo-x',
  'Electron',
  'Revo X',
  'Revo X',
  'Ceiling Recessed / Castalia R',
  'o o
REVO X is the largest recessed downlight of REVO series.
It is available in white or black colour.
It is offered monochromatic, tunable white or warm dimming.
It has a variety of dimming options.
Indoor use: IP44 (face only).
Low UGR ensuring visual comfort (UGR<18).
Monochromatic, TW, WD
3 SDCM
L90/B10 50.000h
REVO X.pdf
REVO Series - Installation Manual.pdf
Photometrics REVO X.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/6/1/616_revo_x.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/r/e/revo-x-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Castalia R']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/r/e/revo-x-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"REVO X.pdf","url":"https://electron.gr/media/products/REVO%20X.pdf"},{"label":"REVO Series - Installation Manual.pdf","url":"https://electron.gr/media/products/REVO%20Series%20-%20Installation%20Manual.pdf"},{"label":"Photometrics REVO X.zip","url":"https://electron.gr/media/products/Photometrics%20REVO%20X.zip"}]'::jsonb,
  124,
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
  'electron-borrely-double-square',
  'Electron',
  'Borrely Double Square',
  'Borrely Double Square',
  'Ceiling Recessed / Revo M',
  'BORRELY is an adjustable recessed downlight available single or double.
High efficiency deep reflector with clear cover glass.
Heat sink is of die-cast aluminium.
3 SDCM
L90/B10 50.000h
BORRELY.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/B/O/BORRELY_DOUBLE.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/b/o/borrely_schema2.jpg']::text[],
  array['Ceiling Recessed', 'Revo M']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/b/o/borrely_schema2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"BORRELY.pdf","url":"https://electron.gr/media/products/BORRELY.pdf"}]'::jsonb,
  125,
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
  'electron-borrely-round',
  'Electron',
  'Borrely Round',
  'Borrely Round',
  'Ceiling Recessed / Revo M',
  'o o
BORRELY is an adjustable recessed downlight available single or double.
High efficiency deep reflector with clear cover glass.
Heat sink is of die-cast aluminium.
3 SDCM
L90/B10 50.000h
BORRELY.pdf
BORRELY_R09-30B1135-AD-80-38-WH-ND.zip
BORRELY_R12-30B1657-AD-80-38-WH-ND.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/B/O/BORRELY_RD.jpg']::text[],
  array['Ceiling Recessed', 'Revo M']::text[],
  '{}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"BORRELY.pdf","url":"https://electron.gr/media/products/BORRELY.pdf"},{"label":"BORRELY_R09-30B1135-AD-80-38-WH-ND.zip","url":"https://electron.gr/media/products/BORRELY_R09-30B1135-AD-80-38-WH-ND.zip"},{"label":"BORRELY_R12-30B1657-AD-80-38-WH-ND.zip","url":"https://electron.gr/media/products/BORRELY_R12-30B1657-AD-80-38-WH-ND.zip"}]'::jsonb,
  126,
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
  'electron-borrely-square',
  'Electron',
  'Borrely Square',
  'Borrely Square',
  'Ceiling Recessed / Revo M',
  'o o
BORRELY is an adjustable recessed downlight available single or double.
High efficiency deep reflector with clear cover glass.
Heat sink is of die-cast aluminium.
3 SDCM
L90/B10 50.000h
BORRELY.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/B/O/BORRELY_SQ.jpg']::text[],
  array['Ceiling Recessed', 'Revo M']::text[],
  '{}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"BORRELY.pdf","url":"https://electron.gr/media/products/BORRELY.pdf"}]'::jsonb,
  127,
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
  'electron-vesta-round',
  'Electron',
  'Vesta Round',
  'Vesta Round',
  'Ceiling Recessed / Borrely Double Square',
  'VESTA is a small sized downlight available in round or square form.
Increased efficiency.
3 SDCM
L90/B10 50.000h
VESTA.pdf
VESTA_R06-30B0817-AD-80-43-WH-ND.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/V/E/VESTA_RD.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/v/e/vesta_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Borrely Double Square']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/v/e/vesta_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"VESTA.pdf","url":"https://electron.gr/media/products/VESTA.pdf"},{"label":"VESTA_R06-30B0817-AD-80-43-WH-ND.zip","url":"https://electron.gr/media/products/VESTA_R06-30B0817-AD-80-43-WH-ND.zip"}]'::jsonb,
  128,
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
  'electron-vesta-square',
  'Electron',
  'Vesta Square',
  'Vesta Square',
  'Ceiling Recessed / Borrely Double Square',
  'VESTA is a small sized downlight available in round or square form.
Increased efficiency.
3 SDCM
L90/B10 50.000h
VESTA.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/V/E/VESTA_SQ.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/v/e/vesta_schema2.jpg']::text[],
  array['Ceiling Recessed', 'Borrely Double Square']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/v/e/vesta_schema2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"VESTA.pdf","url":"https://electron.gr/media/products/VESTA.pdf"}]'::jsonb,
  129,
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
  'electron-avra',
  'Electron',
  'Avra',
  'electron-avra',
  'Ceiling Recessed / Vesta Round',
  'AVRA is a downlight suitable for LED lamps available with clear or frosted glass.
Luminaire: Die-cast aluminium.
Ideal for lighting in bathrooms, spa, fitting rooms, etc.
IP65 (face only).
AVRA.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/A/V/AVRA.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/a/v/avra_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Vesta Round']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/a/v/avra_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"AVRA.pdf","url":"https://electron.gr/media/products/AVRA.pdf"}]'::jsonb,
  130,
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
  'electron-jupiter',
  'Electron',
  'Jupiter',
  'electron-jupiter',
  'Ceiling Recessed / Avra',
  'JUPITER is a fixed downlight available with clear or frosted glass.
Luminaire: Die cast aluminium.
3 SDCM
L90/B10 50000h
IP65 (face only)
JUPITER.pdf
photometric JUPITER 10.zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/j/u/jupiter.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/j/u/jupiter_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Avra']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/j/u/jupiter_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"JUPITER.pdf","url":"https://electron.gr/media/products/JUPITER.pdf"},{"label":"photometric JUPITER 10.zip","url":"https://electron.gr/media/products/photometric%20JUPITER%2010.zip"}]'::jsonb,
  131,
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
  'electron-eldo',
  'Electron',
  'Eldo',
  'electron-eldo',
  'Ceiling Recessed / Jupiter',
  'ELDO is a small scale downlight suitable in applications with low depth ceiling.
Available in Black or White, but also RAL colours are available on request.
Consumption: 1 W@300mA 1,5Wg500mA 2,1 wg 700mA
L90 B10 50000h
3 SDCM
ELDO.pdf
ELDO - Installation Manual.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/l/eldo.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/e/l/eldo-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Jupiter']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/e/l/eldo-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ELDO.pdf","url":"https://electron.gr/media/products/ELDO.pdf"},{"label":"ELDO - Installation Manual.pdf","url":"https://electron.gr/media/products/ELDO%20-%20Installation%20Manual.pdf"}]'::jsonb,
  132,
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
  'electron-evo-i',
  'Electron',
  'Evo I',
  'Evo I',
  'Ceiling Recessed / Eldo',
  'EVO I is a low depth downlight, suitable in applications with limited space.
Adjustable : tilt +/ 25o.
Material: aluminium.
Colour: anodized aluminum (silver).
Indoor use only.
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
EVO I.pdf
EVO I - Installation Manual.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/v/evo_i.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/e/v/evo_i_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Eldo']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/e/v/evo_i_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"EVO I.pdf","url":"https://electron.gr/media/products/EVO%20I.pdf"},{"label":"EVO I - Installation Manual.pdf","url":"https://electron.gr/media/products/EVO%20I%20-%20Installation%20Manual.pdf"}]'::jsonb,
  133,
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
  'electron-torn',
  'Electron',
  'Torn',
  'electron-torn',
  'Ceiling Recessed / Evo I',
  'TORN & TORN MINI miniaturized dimmable constant current LED spot.
Ideal for decorative lighting.
Luminaire body: aluminium.
3 SDCM
L90/B10 50000h
Lighting management options: On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
TORN - TORN MINI.pdf
TORN 3000-3500K 350mA 60deg (ALI.226).zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/T/O/TORN_TORN_MINI.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/TORN-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/t/o/torn_torn_mini_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Evo I']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/t/o/torn_torn_mini_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"TORN - TORN MINI.pdf","url":"https://electron.gr/media/products/TORN%20-%20TORN%20MINI.pdf"},{"label":"TORN 3000-3500K 350mA 60deg (ALI.226).zip","url":"https://electron.gr/media/products/TORN%203000-3500K%20350mA%2060deg%20(ALI.226).zip"}]'::jsonb,
  134,
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
  'electron-torn-mini',
  'Electron',
  'Torn Mini',
  'Torn Mini',
  'Ceiling Recessed / Evo I',
  'TORN & TORN MINI miniaturized dimmable constant current LED spot.
Ideal for decorative lighting.
Luminaire body: aluminium.
3 SDCM
L90/B10 50000h
Lighting management options: On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
TORN - TORN MINI.pdf
TORN MINI 3000-3500K 350mA 30deg (ALI.228).zip
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/T/O/TORN_TORN_MINI_1.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/TORN-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/t/o/torn_torn_mini_schema2.jpg']::text[],
  array['Ceiling Recessed', 'Evo I']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/t/o/torn_torn_mini_schema2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"TORN - TORN MINI.pdf","url":"https://electron.gr/media/products/TORN%20-%20TORN%20MINI.pdf"},{"label":"TORN MINI 3000-3500K 350mA 30deg (ALI.228).zip","url":"https://electron.gr/media/products/TORN%20MINI%203000-3500K%20350mA%2030deg%20(ALI.228).zip"}]'::jsonb,
  135,
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
  'electron-barolo',
  'Electron',
  'Barolo',
  'electron-barolo',
  'Ceiling Recessed / Torn',
  'BAROLO is a small sized constant current downlight.
Available in 30º & 60º.
3 SDCM
L90/B10 50000h
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
BAROLO.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/B/A/BAROLO.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/BAROLO-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/b/a/barolo_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Torn']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/b/a/barolo_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"BAROLO.pdf","url":"https://electron.gr/media/products/BAROLO.pdf"}]'::jsonb,
  136,
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
  'electron-cubic',
  'Electron',
  'Cubic',
  'electron-cubic',
  'Ceiling Recessed / Barolo',
  'Decorative small sized downlights.
Luminaire body: aluminium.
3 SDCM
L90/B10 50000h
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
CUBIC - EYE - EYE SQUARE.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/U/CUBIC.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/CUBIC-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/u/cubic_eye_eye_square_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Barolo']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/u/cubic_eye_eye_square_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CUBIC - EYE - EYE SQUARE.pdf","url":"https://electron.gr/media/products/CUBIC%20-%20EYE%20-%20EYE%20SQUARE.pdf"}]'::jsonb,
  137,
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
  'electron-eye',
  'Electron',
  'Eye',
  'electron-eye',
  'Ceiling Recessed / Cubic',
  'Decorative small sized downlights.
Luminaire body: aluminium.
3 SDCM
L90/B10 50000h
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
CUBIC - EYE - EYE SQUARE.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/E/Y/EYE_EYE_SQ.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/CUBIC-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/u/cubic_eye_eye_square_schema2.jpg']::text[],
  array['Ceiling Recessed', 'Cubic']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/u/cubic_eye_eye_square_schema2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CUBIC - EYE - EYE SQUARE.pdf","url":"https://electron.gr/media/products/CUBIC%20-%20EYE%20-%20EYE%20SQUARE.pdf"}]'::jsonb,
  138,
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
  'electron-eye-square',
  'Electron',
  'Eye Square',
  'Eye Square',
  'Ceiling Recessed / Cubic',
  'Decorative small sized downlights.
Luminaire body: aluminium.
3 SDCM
L90/B10 50000h
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
CUBIC - EYE - EYE SQUARE.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/E/Y/EYE_EYE_SQ_1.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/CUBIC-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/u/cubic_eye_eye_square_schema3.jpg']::text[],
  array['Ceiling Recessed', 'Cubic']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/u/cubic_eye_eye_square_schema3.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"CUBIC - EYE - EYE SQUARE.pdf","url":"https://electron.gr/media/products/CUBIC%20-%20EYE%20-%20EYE%20SQUARE.pdf"}]'::jsonb,
  139,
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
  'electron-frame',
  'Electron',
  'Frame',
  'electron-frame',
  'Ceiling Recessed / Eye',
  'o o
Decorative small sized recessed downlights.
Diffused light emission.
Round and Square shape.
3 SDCM
L90/B10 50000h
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
FRAME - FRAME SQUARE.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/f/r/frame.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/FRAME-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/f/r/frame_schema1.jpg']::text[],
  array['Ceiling Recessed', 'Eye']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/f/r/frame_schema1.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"FRAME - FRAME SQUARE.pdf","url":"https://electron.gr/media/products/FRAME%20-%20FRAME%20SQUARE.pdf"}]'::jsonb,
  140,
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
  'electron-frame-square',
  'Electron',
  'Frame Square',
  'Frame Square',
  'Ceiling Recessed / Eye',
  'o o
Decorative small sized recessed downlights.
Diffused light emission.
Round and Square shape.
3 SDCM
L90/B10 50000h
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
FRAME - FRAME SQUARE.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/f/r/frame_sq.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/FRAME-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/f/r/frame_schema2.jpg']::text[],
  array['Ceiling Recessed', 'Eye']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/f/r/frame_schema2.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"FRAME - FRAME SQUARE.pdf","url":"https://electron.gr/media/products/FRAME%20-%20FRAME%20SQUARE.pdf"}]'::jsonb,
  141,
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
  'electron-crystal-starlight-series',
  'Electron',
  'Crystal - Starlight Series',
  'Starlight Series',
  'Ceiling Recessed / Frame',
  'Decorative small sized downlights.
Dimmable Constant Current LED Spots 350mA.
Available in different forms creating various lighting patterns.
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
STARLIGHT SERIES.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/R/CRYSTAL_Starlight_Series.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/STARLIGHT_SERIES-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/r/crystal_starlight-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Frame']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/c/r/crystal_starlight-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"STARLIGHT SERIES.pdf","url":"https://electron.gr/media/products/STARLIGHT%20SERIES.pdf"}]'::jsonb,
  142,
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
  'electron-rhomb-starlight-series',
  'Electron',
  'Rhomb - Starlight Series',
  'Starlight Series',
  'Ceiling Recessed / Frame',
  'Decorative small sized downlights.
Dimmable Constant Current LED Spots 350mA.
Available in different forms creating various lighting patterns.
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
STARLIGHT SERIES.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/R/H/RHOMB_Starlight_Series.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/STARLIGHT_SERIES-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/r/h/rhomb_starlight-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Frame']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/r/h/rhomb_starlight-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"STARLIGHT SERIES.pdf","url":"https://electron.gr/media/products/STARLIGHT%20SERIES.pdf"}]'::jsonb,
  143,
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
  'electron-ball-starlight-series',
  'Electron',
  'Ball - Starlight Series',
  'Starlight Series',
  'Ceiling Recessed / Frame',
  'Decorative small sized downlights.
Dimmable Constant Current LED Spots 350mA.
Available in different forms creating various lighting patterns.
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
STARLIGHT SERIES.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/B/A/BALL_Starlight_Series.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/STARLIGHT_SERIES-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/b/a/ball_starlight-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Frame']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/b/a/ball_starlight-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"STARLIGHT SERIES.pdf","url":"https://electron.gr/media/products/STARLIGHT%20SERIES.pdf"}]'::jsonb,
  144,
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
  'electron-diamond-starlight-series',
  'Electron',
  'Diamond - Starlight Series',
  'Starlight Series',
  'Ceiling Recessed / Frame',
  'Decorative small sized downlights.
Dimmable Constant Current LED Spots 350mA.
Available in different forms creating various lighting patterns.
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
STARLIGHT SERIES.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/D/I/DIAMOND_Starlight_Series.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/STARLIGHT_SERIES-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/d/i/diamond-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Frame']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/d/i/diamond-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"STARLIGHT SERIES.pdf","url":"https://electron.gr/media/products/STARLIGHT%20SERIES.pdf"}]'::jsonb,
  145,
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
  'electron-diamond-mini-starlight-series',
  'Electron',
  'Diamond Mini - Starlight Series',
  'Diamond Mini',
  'Ceiling Recessed / Frame',
  'Decorative small sized downlights.
Dimmable Constant Current LED Spots 350mA.
Available in different forms creating various lighting patterns.
Lighting management options:
On-Off/DALI/0..10V/1..10V/DMX512/PHASE CUT/IR/RF/PUSH BUTTON/Bluetooth
STARLIGHT SERIES.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/D/I/DIAMOND_MINI_Starlight_Series.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/STARLIGHT_SERIES-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/d/i/diamond_mini_starlight-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Frame']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/d/i/diamond_mini_starlight-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"STARLIGHT SERIES.pdf","url":"https://electron.gr/media/products/STARLIGHT%20SERIES.pdf"}]'::jsonb,
  146,
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
  'electron-diamond-rgb-starlight-series',
  'Electron',
  'Diamond RGB - Starlight Series',
  'Diamond RGB',
  'Ceiling Recessed / Frame',
  'Decorative small sized downlights.
Dimmable Constant Current LED Spots 350mA.
Available in different forms creating various lighting patterns.
Lighting management options:
DALI/DMX512/PHASE CUT/IR/RF/Bluetooth
STARLIGHT SERIES.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/i/diamond_starlight_series.jpg', 'https://electron.gr/media/wysiwyg/Products/Ceiling_Recessed/STARLIGHT_SERIES-RGB-table.jpg', 'https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/d/i/diamond-rgb-demensions.jpg']::text[],
  array['Ceiling Recessed', 'Frame']::text[],
  '{}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/dimensions_image/9df78eab33525d08d6e5fb8d27136e95/d/i/diamond-rgb-demensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"STARLIGHT SERIES.pdf","url":"https://electron.gr/media/products/STARLIGHT%20SERIES.pdf"}]'::jsonb,
  147,
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

