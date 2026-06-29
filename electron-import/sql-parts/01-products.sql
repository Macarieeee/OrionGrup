-- Electron products part 1

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
  'electron-disc-rc-o27cm',
  'Electron',
  'Disc RC Ø27cm',
  'Disc RC',
  'Ceiling Recessed / Disc',
  'o o o o
Disc is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 214lm/W (4000K)
Luminaire efficacy up to 143lm/W (4000K)
Available upon request:
Custom luminaire colours
Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc27-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc_p4_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/i/disc_rc_sx.jpg']::text[],
  array['Ceiling Recessed', 'Disc']::text[],
  '{"Model":"DISC Recessed HighPower, DISC Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"11.9W / 27cm, 4.9W / 27cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/i/disc_rc_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"DISC RC.pdf","url":"https://electron.gr/media/products/DISC%20RC.pdf"},{"label":"DISC RC - Installation Manual.pdf","url":"https://electron.gr/media/products/DISC%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) DISC RC 27cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20DISC%20RC%2027cm.zip"}]'::jsonb,
  1,
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
  'electron-disc-rc-o40cm',
  'Electron',
  'Disc RC Ø40cm',
  'Disc RC',
  'Ceiling Recessed / Disc',
  'o o o o
Disc is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 214lm/W (4000K)
Luminaire efficacy up to 143lm/W (4000K)
Available upon request:
Custom luminaire colours
Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc40-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc_p4_2.jpg']::text[],
  array['Ceiling Recessed', 'Disc']::text[],
  '{"Model":"DISC Recessed HighPower, DISC Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"10.7W / 40cm, 26.2W / 40cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"DISC RC.pdf","url":"https://electron.gr/media/products/DISC%20RC.pdf"},{"label":"DISC RC - Installation Manual.pdf","url":"https://electron.gr/media/products/DISC%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) DISC RC 40cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20DISC%20RC%2040cm.zip"}]'::jsonb,
  2,
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
  'electron-disc-rc-o58cm',
  'Electron',
  'Disc RC Ø58cm',
  'Disc RC',
  'Ceiling Recessed / Disc',
  'o o o o
Disc is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 214lm/W (4000K)
Luminaire efficacy up to 143lm/W (4000K)
Available upon request:
Custom luminaire colours
Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc58-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc_p4_3.jpg']::text[],
  array['Ceiling Recessed', 'Disc']::text[],
  '{"Model":"DISC Recessed HighPower, DISC Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"24.5W / 58cm, 57.4W / 58cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"DISC RC.pdf","url":"https://electron.gr/media/products/DISC%20RC.pdf"},{"label":"DISC RC - Installation Manual.pdf","url":"https://electron.gr/media/products/DISC%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) DISC RC 58cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20DISC%20RC%2058cm.zip"}]'::jsonb,
  3,
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
  'electron-disc-rc-o85cm',
  'Electron',
  'Disc RC Ø85cm',
  'Disc RC',
  'Ceiling Recessed / Disc',
  'o o o o
Disc is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 214lm/W (4000K)
Luminaire efficacy up to 143lm/W (4000K)
Available upon request:
Custom luminaire colours
Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc85-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc_p4_4.jpg']::text[],
  array['Ceiling Recessed', 'Disc']::text[],
  '{"Model":"DISC Recessed HighPower, DISC Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"123.8W / 85cm, 50W / 85cm","CRI":"80, 90","Type":"Opal","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"DISC RC.pdf","url":"https://electron.gr/media/products/DISC%20RC.pdf"},{"label":"DISC RC - Installation Manual.pdf","url":"https://electron.gr/media/products/DISC%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) DISC RC 85cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20DISC%20RC%2085cm.zip"}]'::jsonb,
  4,
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
  'electron-disc-rc-o113cm',
  'Electron',
  'Disc RC Ø113cm',
  'Disc RC',
  'Ceiling Recessed / Disc',
  'o o o o
Disc is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 214lm/W (4000K)
Luminaire efficacy up to 143lm/W (4000K)
Available upon request:
Custom luminaire colours
Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc113-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc_p4_5.jpg']::text[],
  array['Ceiling Recessed', 'Disc']::text[],
  '{"Model":"DISC Recessed HighPower, DISC Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"214.8W / 113cm, 89W / 113cm","CRI":"80, 90","Type":"Opal","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"DISC RC.pdf","url":"https://electron.gr/media/products/DISC%20RC.pdf"},{"label":"DISC RC - Installation Manual.pdf","url":"https://electron.gr/media/products/DISC%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) DISC RC 113cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20DISC%20RC%20113cm.zip"}]'::jsonb,
  5,
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
  'electron-disc-rc-o142cm',
  'Electron',
  'Disc RC Ø142cm',
  'Disc RC',
  'Ceiling Recessed / Disc',
  'o o o o
Disc is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 214lm/W (4000K)
Luminaire efficacy up to 143lm/W (4000K)
Available upon request:
Custom luminaire colours
Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc142-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc_p4.jpg']::text[],
  array['Ceiling Recessed', 'Disc']::text[],
  '{"Model":"DISC Recessed HighPower, DISC Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"140W / 142cm, 336.6W / 142cm","CRI":"80, 90","Type":"Opal","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"DISC RC.pdf","url":"https://electron.gr/media/products/DISC%20RC.pdf"},{"label":"DISC RC - Installation Manual.pdf","url":"https://electron.gr/media/products/DISC%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) DISC RC 142cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20DISC%20RC%20142cm.zip"}]'::jsonb,
  6,
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
  'electron-eclipse-rc-o58cm',
  'Electron',
  'Eclipse RC Ø58cm',
  'Eclipse RC',
  'Ceiling Recessed / Eclipse',
  'o o o o o
ECLIPSE is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 195lm/W (4000K)
Luminaire efficacy up to 119lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/c/eclipse_rc_58-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/c/eclipse_rcp4.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/e/c/eclipse_rc_sx.jpg']::text[],
  array['Ceiling Recessed', 'Eclipse']::text[],
  '{"Model":"ECLIPSE Recessed High Power, ECLIPSE Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"46.2W / 58cm, 17.6W / 58cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/e/c/eclipse_rc_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ECLIPSE RC.pdf","url":"https://electron.gr/media/products/ECLIPSE%20RC.pdf"},{"label":"ECLIPSE RC - Installation Manual.pdf","url":"https://electron.gr/media/products/ECLIPSE%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) ECLIPSE RC 58cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20ECLIPSE%20RC%2058cm.zip"}]'::jsonb,
  7,
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
  'electron-eclipse-rc-o85cm',
  'Electron',
  'Eclipse RC Ø85cm',
  'Eclipse RC',
  'Ceiling Recessed / Eclipse',
  'o o o o o
ECLIPSE is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 195lm/W (4000K)
Luminaire efficacy up to 119lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/c/eclipse_rc_85-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/c/eclipse_rcp4_1.jpg']::text[],
  array['Ceiling Recessed', 'Eclipse']::text[],
  '{"Model":"ECLIPSE Recessed High Power, ECLIPSE Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"75W / 85cm, 26.7W / 85cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ECLIPSE RC.pdf","url":"https://electron.gr/media/products/ECLIPSE%20RC.pdf"},{"label":"ECLIPSE RC - Installation Manual.pdf","url":"https://electron.gr/media/products/ECLIPSE%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) ECLIPSE RC 85cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20ECLIPSE%20RC%2085cm.zip"}]'::jsonb,
  8,
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
  'electron-eclipse-rc-o113cm',
  'Electron',
  'Eclipse RC Ø113cm',
  'Eclipse RC',
  'Ceiling Recessed / Eclipse',
  'o o o o o
ECLIPSE is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 195lm/W (4000K)
Luminaire efficacy up to 119lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/c/eclipse_rc_113-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/c/eclipse_rcp4_1_1.jpg']::text[],
  array['Ceiling Recessed', 'Eclipse']::text[],
  '{"Model":"ECLIPSE Recessed High Power, ECLIPSE Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"104.5W / 113cm, 37.2W / 113cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ECLIPSE RC.pdf","url":"https://electron.gr/media/products/ECLIPSE%20RC.pdf"},{"label":"ECLIPSE RC - Installation Manual.pdf","url":"https://electron.gr/media/products/ECLIPSE%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) ECLIPSE RC 113cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20ECLIPSE%20RC%20113cm.zip"}]'::jsonb,
  9,
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
  'electron-eclipse-rc-o142cm',
  'Electron',
  'Eclipse RC Ø142cm',
  'Eclipse RC',
  'Ceiling Recessed / Eclipse',
  'o o o o o
ECLIPSE is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 195lm/W (4000K)
Luminaire efficacy up to 119lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/c/eclipse_rc_142-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/c/eclipse_rcp4_1_1_1.jpg']::text[],
  array['Ceiling Recessed', 'Eclipse']::text[],
  '{"Model":"ECLIPSE Recessed High Power, ECLIPSE Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"134.1W / 142cm, 47.8W / 142cm","CRI":"80, 90","Type":"Opal","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ECLIPSE RC.pdf","url":"https://electron.gr/media/products/ECLIPSE%20RC.pdf"},{"label":"ECLIPSE RC - Installation Manual.pdf","url":"https://electron.gr/media/products/ECLIPSE%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) ECLIPSE RC 142cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20ECLIPSE%20RC%20142cm.zip"}]'::jsonb,
  10,
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
  'electron-loop-rc-30x30',
  'Electron',
  'Loop RC 30x30',
  'Loop RC 30x30',
  'Ceiling Recessed / Loop',
  'o o o o
LOOP is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 132lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rc_3030.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rcp4.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/o/loop_rc_sx.jpg']::text[],
  array['Ceiling Recessed', 'Loop']::text[],
  '{"Model":"LOOP Recessed High Power, LOOP Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"17.6W / 30x30cm, 6.6W / 30x30cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/l/o/loop_rc_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LOOP RC.pdf","url":"https://electron.gr/media/products/LOOP%20RC.pdf"},{"label":"LOOP RC - Installation Manual.pdf","url":"https://electron.gr/media/products/LOOP%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) LOOP RC 30x30cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20LOOP%20RC%2030x30cm.zip"}]'::jsonb,
  11,
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
  'electron-loop-rc-45x45',
  'Electron',
  'Loop RC 45x45',
  'Loop RC 45x45',
  'Ceiling Recessed / Loop',
  'o o o o
LOOP is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 132lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rc_4545.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rcp4_1.jpg']::text[],
  array['Ceiling Recessed', 'Loop']::text[],
  '{"Model":"LOOP Recessed High Power, LOOP Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"13.4W / 45x45cm, 39.5W / 45x45cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LOOP RC.pdf","url":"https://electron.gr/media/products/LOOP%20RC.pdf"},{"label":"LOOP RC - Installation Manual.pdf","url":"https://electron.gr/media/products/LOOP%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) LOOP RC 45x45cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20LOOP%20RC%2045x45cm.zip"}]'::jsonb,
  12,
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
  'electron-loop-rc-59x59',
  'Electron',
  'Loop RC 59x59',
  'Loop RC 59x59',
  'Ceiling Recessed / Loop',
  'o o o o
LOOP is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 132lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rc_5959.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rcp4_1_1.jpg']::text[],
  array['Ceiling Recessed', 'Loop']::text[],
  '{"Model":"LOOP Recessed High Power, LOOP Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"25.9W / 59x59cm, 75W / 59x59cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LOOP RC.pdf","url":"https://electron.gr/media/products/LOOP%20RC.pdf"},{"label":"LOOP RC - Installation Manual.pdf","url":"https://electron.gr/media/products/LOOP%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) LOOP RC 59x59cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20LOOP%20RC%2059x59cm.zip"}]'::jsonb,
  13,
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
  'electron-loop-rc-86x86',
  'Electron',
  'Loop RC 86x86',
  'Loop RC 86x86',
  'Ceiling Recessed / Loop',
  'o o o o
LOOP is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 132lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rc_8686.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rcp4_1_1_1.jpg']::text[],
  array['Ceiling Recessed', 'Loop']::text[],
  '{"Model":"LOOP Recessed High Power, LOOP Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"153.5W / 86x86cm, 58.3W / 86x86cm","CRI":"80, 90","Type":"Opal","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LOOP RC.pdf","url":"https://electron.gr/media/products/LOOP%20RC.pdf"},{"label":"LOOP RC - Installation Manual.pdf","url":"https://electron.gr/media/products/LOOP%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) LOOP RC 86x86cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20LOOP%20RC%2086x86cm.zip"}]'::jsonb,
  14,
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
  'electron-loop-rc-113x113',
  'Electron',
  'Loop RC 113x113',
  'Loop RC 113x113',
  'Ceiling Recessed / Loop',
  'o o o o
LOOP is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 132lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rc_113113.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rcp4_1_1_1_1.jpg']::text[],
  array['Ceiling Recessed', 'Loop']::text[],
  '{"Model":"LOOP Recessed High Power, LOOP Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"103.7W / 113x113cm, 272.8W / 113x113cm","CRI":"80, 90","Type":"Opal","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LOOP RC.pdf","url":"https://electron.gr/media/products/LOOP%20RC.pdf"},{"label":"LOOP RC - Installation Manual.pdf","url":"https://electron.gr/media/products/LOOP%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) LOOP RC 113X113cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20LOOP%20RC%20113X113cm.zip"}]'::jsonb,
  15,
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
  'electron-loop-rc-140x140',
  'Electron',
  'Loop RC 140x140',
  'Loop RC 140x140',
  'Ceiling Recessed / Loop',
  'o o o o
LOOP is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 132lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rc_140140.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rcp4_1_1_1_1_1.jpg']::text[],
  array['Ceiling Recessed', 'Loop']::text[],
  '{"Model":"LOOP Recessed High Power, LOOP Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"162W / 140x140cm, 426.3W / 140x140cm","CRI":"80, 90","Type":"Opal","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"LOOP RC.pdf","url":"https://electron.gr/media/products/LOOP%20RC.pdf"},{"label":"LOOP RC - Installation Manual.pdf","url":"https://electron.gr/media/products/LOOP%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) LOOP RC 140X140cm.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20LOOP%20RC%20140X140cm.zip"}]'::jsonb,
  16,
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
  'electron-orbit-rc-59x59',
  'Electron',
  'Orbit RC 59x59',
  'Orbit RC 59x59',
  'Ceiling Recessed / Orbit',
  'o o o o
ORBIT is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 120lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/o/r/orbit_rc_5959-.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/r/orbit_rcp4.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/o/r/orbit_rc_sx.jpg']::text[],
  array['Ceiling Recessed', 'Orbit']::text[],
  '{"Model":"ORBIT Recessed High Power, ORBIT Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"23.4W / 59x59cm, 61.6W / 59x59cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/o/r/orbit_rc_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ORBIT RC.pdf","url":"https://electron.gr/media/products/ORBIT%20RC.pdf"},{"label":"ORBIT RC - Installation Manual.pdf","url":"https://electron.gr/media/products/ORBIT%20RC%20-%20Installation%20Manual.pdf"}]'::jsonb,
  17,
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
  'electron-orbit-rc-86x86',
  'Electron',
  'Orbit RC 86x86',
  'Orbit RC 86x86',
  'Ceiling Recessed / Orbit',
  'o o o o
ORBIT is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 120lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/o/r/orbit_rc_8686.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/r/orbit_rcp4_1.jpg']::text[],
  array['Ceiling Recessed', 'Orbit']::text[],
  '{"Model":"ORBIT Recessed High Power, ORBIT Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"32.8W / 86x86cm, 93.6W / 86x86cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ORBIT RC.pdf","url":"https://electron.gr/media/products/ORBIT%20RC.pdf"},{"label":"ORBIT RC - Installation Manual.pdf","url":"https://electron.gr/media/products/ORBIT%20RC%20-%20Installation%20Manual.pdf"}]'::jsonb,
  18,
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
  'electron-orbit-rc-113x113',
  'Electron',
  'Orbit RC 113x113',
  'Orbit RC 113x113',
  'Ceiling Recessed / Orbit',
  'o o o o
ORBIT is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 120lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/o/r/orbit_rc_113113.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/r/orbit_rcp4_1_1.jpg']::text[],
  array['Ceiling Recessed', 'Orbit']::text[],
  '{"Model":"ORBIT Recessed High Power, ORBIT Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"128.7W / 113x113cm, 45.1W / 113x113cm","CRI":"80, 90","Type":"Opal, Low Glare Microprismatic","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ORBIT RC.pdf","url":"https://electron.gr/media/products/ORBIT%20RC.pdf"},{"label":"ORBIT RC - Installation Manual.pdf","url":"https://electron.gr/media/products/ORBIT%20RC%20-%20Installation%20Manual.pdf"}]'::jsonb,
  19,
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
  'electron-orbit-rc-140x140',
  'Electron',
  'Orbit RC 140x140',
  'Orbit RC 140x140',
  'Ceiling Recessed / Orbit',
  'o o o o
ORBIT is a complete series of round luminaires available in surface, pendant, recessed and trimless application.
It consists of two models: High Power and High Efficiency.
It is offered with Opal or Low Glare Microprismatic option.
Luminaire material: Aluminium.
Cover material: PMMA
Powder Coated: Black (RAL9005), White (RAL9003), or Grey (RAL7037) as standard.
Custom luminaire colours also available on request.
Low tolerances for colour temperature (MacAdam 3).
Lumen maintenance L80/B10 50.000h
Emergency Function capability. (3 hours, with build-in rechargeable battery).
Indoor Use: IP40
LED source efficacy up to 197lm/W (4000K)
Luminaire efficacy up to 120lm/W (4000K)
Available upon request:
- Custom luminaire colours
- Emergency version
*Glare Evaluation: X=4H / Y=8H, S=0,25H, Reflection factors: 70/50/20',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/o/r/orbit_rc_140140.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/o/r/orbit_rcp4_1_1_1.jpg']::text[],
  array['Ceiling Recessed', 'Orbit']::text[],
  '{"Model":"ORBIT Recessed High Power, ORBIT Recessed High Efficiency","Luminaire Colour":"White, Black, Grey","CCT":"3000K, 4000K","Watt / Diameter":"163.9W / 140x140cm, 57.4W/ 140x140cm","CRI":"80, 90","Type":"Opal","Voltage":"230VAC","Dimming Option":"Non-Dimmable, Analogue (1-10V), DALI, Wireless","Extras":"Standard Function, Emergency Function"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ORBIT RC.pdf","url":"https://electron.gr/media/products/ORBIT%20RC.pdf"},{"label":"ORBIT RC - Installation Manual.pdf","url":"https://electron.gr/media/products/ORBIT%20RC%20-%20Installation%20Manual.pdf"}]'::jsonb,
  20,
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
  'electron-reform-30-recessed',
  'Electron',
  'Reform 30 Recessed',
  'Reform 30 Recessed',
  'Ceiling Recessed / Reform',
  'o o
Reform 30 is a complete series of miniaturized downlights available recessed, trimless or surface.
It is available in round form.
Power consumption: 3watt and 6watt.
Beam angle varies from 12 to 50 degrees.
Accessories available: honeycomb.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
Brass and Bronze: anodized aluminium.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<14 /black inner ring).',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform30rc_site_sq.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform30rc_site.jpg']::text[],
  array['Ceiling Recessed', 'Reform']::text[],
  '{"Model":"REFORM 30 Recessed","LED Power":"3W, 5.8W, 6.3W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"12º, 28º, 36º, 50º","Type":"Adjustable","Luminaire Colour":"Black/Black/Black/Black, Black/Black/Black/White, Black/Black/White/White, Black/Black/White/Black, Black/Black/Brass/Black, Black/Black/Bronze/Black, White/White/Black/Black, White/White/Black/White, White/White/White/White, White/White/White/Black, White/Black/Black/Black, White/Black/Black/White, White/Black/White/White, White/Black/White/Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - No Extras, Standard Cover - Emergency, Honeycomb Cover - No Extras, Honeycomb Cover - Emergency, Softening Lens - No Extras, Softening Lens - Emergency"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"REFORM 30 RC.pdf","url":"https://electron.gr/media/products/REFORM%2030%20RC.pdf"},{"label":"REFORM 30 RECESSED - Installation Manual.pdf","url":"https://electron.gr/media/products/REFORM%2030%20RECESSED%20-%20Installation%20Manual.pdf"},{"label":"Photometrics REFORM 30 RECESSED.zip","url":"https://electron.gr/media/products/Photometrics%20REFORM%2030%20RECESSED.zip"}]'::jsonb,
  21,
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
  'electron-reform-30-in-out-rc',
  'Electron',
  'REFORM 30 IN-OUT RC',
  'REFORM 30 IN-OUT RC',
  'Ceiling Recessed / Reform',
  'o o o
Reform 30 is a complete series of miniaturized downlights available recessed, trimless or surface.
It is available in round form.
Power consumption: 3watt and 6watt.
Beam angle varies from 12 to 50 degrees.
Accessories available: honeycomb.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
Emergency kit and battery replacement accessibility of emergency kit should be considered as the kit does not pass through the Recessed luminaire cutout.
Brass and Bronze: anodized aluminium.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<14 /black inner ring).',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform30rc_inout_site_sq_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform30rc_inout_site_m2.jpg']::text[],
  array['Ceiling Recessed', 'Reform']::text[],
  '{"Model":"REFORM 30 In-Out Recessed","LED Power":"3W, 5.8W, 6.3W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"12º, 28º, 36º, 50º","Type":"Adjustable","Luminaire Colour":"Black Base - Black Spot - Black Inner Ring, Black Base - Black Spot - White Inner Ring, Black Base - White Spot - Black Inner Ring, Black Base - White Spot - White Inner Ring, White Base - Black Spot - Black Inner Ring, White Base - Black Spot - White Inner Ring, White Base - White Spot - Black Inner Ring, White Base - White Spot - White Inner Ring, Black Base - Brass Spot - Black Inner Ring, Black Base - Bronze Spot - Black Inner Ring","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard - No Extras, Standard - Emergency, Honeycomb - No Extras, Honeycomb - Emergency, Softening Lens - No Extras, Softening Lens - Emergency"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"REFORM 30 IN-OUT RC.pdf","url":"https://electron.gr/media/products/REFORM%2030%20IN-OUT%20RC.pdf"},{"label":"REFORM 30 IN-OUT RECESSED - Installation Manual.pdf","url":"https://electron.gr/media/products/REFORM%2030%20IN-OUT%20RECESSED%20-%20Installation%20Manual.pdf"},{"label":"Photometrics REFORM 30 IN OUT RECESSED.zip","url":"https://electron.gr/media/products/Photometrics%20REFORM%2030%20IN%20OUT%20RECESSED.zip"}]'::jsonb,
  22,
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
  'electron-reform-30-recessed-spot',
  'Electron',
  'Reform 30 Recessed Spot',
  'Reform 30 Recessed Spot',
  'Ceiling Recessed / Reform',
  'o o o
Reform 30 is a complete series of miniaturized downlights available recessed, trimless or surface.
It is available in round form.
Power consumption: 3watt and 6watt.
Beam angle varies from 12 to 50 degrees.
Accessories available: honeycomb.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
Emergency kit and battery replacement accessibility of emergency kit should be considered as the kit does not pass through the Recessed luminaire cutout.
Brass and Bronze: anodized aluminium.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<14 /black inner ring).',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform30rc_spot_site_sq.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform30rc_spot_site_m.jpg']::text[],
  array['Ceiling Recessed', 'Reform']::text[],
  '{"Model":"REFORM 30 Recessed Spot","LED Power":"3W, 5.8W, 6.3W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"12º, 28º, 36º, 50º","Type":"Adjustable","Luminaire Colour":"Black Base - Black Spot - Black Inner Ring, Black Base - Black Spot - White Inner Ring, Black Base - White Spot - Black Inner Ring, Black Base - White Spot - White Inner Ring, White Base - Black Spot - Black Inner Ring, White Base - Black Spot - White Inner Ring, White Base - White Spot - Black Inner Ring, White Base - White Spot - White Inner Ring, Black Base - Brass Spot - Black Inner Ring, Black Base - Bronze Spot - Black Inner Ring","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard - No Extras, Standard - Emergency, Honeycomb - No Extras, Honeycomb - Emergency, Softening Lens - No Extras, Softening Lens - Emergency"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"REFORM 30 RC Spot.pdf","url":"https://electron.gr/media/products/REFORM%2030%20RC%20Spot.pdf"},{"label":"REFORM 30 RECESSED SPOT - Installation Manual.pdf","url":"https://electron.gr/media/products/REFORM%2030%20RECESSED%20SPOT%20-%20Installation%20Manual.pdf"},{"label":"Photometrics REFORM 30 RECESSED SPOT.zip","url":"https://electron.gr/media/products/Photometrics%20REFORM%2030%20RECESSED%20SPOT.zip"}]'::jsonb,
  23,
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
  'electron-reform-52-recessed',
  'Electron',
  'Reform 52 Recessed',
  'Reform 52 Recessed',
  'Ceiling Recessed / Reform',
  'o o
Reform 52 is a complete series of downlights available recessed, trimless or surface.
It is available in round form.
Power consumption: 12watt and 8.2watt.
Beam angle varies from 6 to 44 degrees.
Accessories available: honeycomb, line spread lens or softening lens.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
Brass and Bronze: anodized aluminium.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<12 /black inner ring).',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform52rc_sq.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform52rc.jpg']::text[],
  array['Ceiling Recessed', 'Reform']::text[],
  '{"Model":"REFORM 52 Recessed","LED Power":"8.2W, 12W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"6º, 21º, 33º, 44º","Type":"Adjustable","Luminaire Colour":"Black/Black/Black/Black, Black/Black/Black/White, Black/Black/White/White, Black/Black/White/Black, Black/Black/Brass/Black, Black/Black/Bronze/Black, White/White/Black/Black, White/White/Black/White, White/White/White/White, White/White/White/Black, White/Black/Black/Black, White/Black/Black/White, White/Black/White/White, White/Black/White/Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - No Extras, Standard Cover - Emergency, Honeycomb Cover - No Extras, Honeycomb Cover - Emergency, Softening Lens - No Extras, Softening Lens - Emergency"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"REFORM 52 RC.pdf","url":"https://electron.gr/media/products/REFORM%2052%20RC.pdf"},{"label":"REFORM 52 RECESSED - Installation Manual.pdf","url":"https://electron.gr/media/products/REFORM%2052%20RECESSED%20-%20Installation%20Manual.pdf"},{"label":"Photometrics REFORM 52 RECESSED.zip","url":"https://electron.gr/media/products/Photometrics%20REFORM%2052%20RECESSED.zip"}]'::jsonb,
  24,
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
  'electron-reform-52-in-out-rc',
  'Electron',
  'REFORM 52 IN-OUT RC',
  'REFORM 52 IN-OUT RC',
  'Ceiling Recessed / Reform',
  'o o o
Reform 52 is a complete series of miniaturized downlights available recessed, trimless or surface.
It is available in round form.
Power consumption: 12 watt and 8.2 watt.
Beam angle varies from 4 to 44 degrees.
Accessories available: honeycomb.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
Brass and Bronze: anodized aluminium.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<12 /black inner ring).',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform52rc_inout_sq_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform52rc_inout.jpg']::text[],
  array['Ceiling Recessed', 'Reform']::text[],
  '{"Model":"REFORM 52 In-Out Recessed","LED Power":"8.2W, 12W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"6º, 21º, 33º, 44º","Type":"Adjustable","Luminaire Colour":"Black Base - Black Spot - Black Inner Ring, Black Base - Black Spot - White Inner Ring, Black Base - White Spot - Black Inner Ring, Black Base - White Spot - White Inner Ring, White Base - Black Spot - Black Inner Ring, White Base - Black Spot - White Inner Ring, White Base - White Spot - Black Inner Ring, White Base - White Spot - White Inner Ring, Black Base - Brass Spot - Black Inner Ring, Black Base - Bronze Spot - Black Inner Ring","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Line Spread Lens - Emergency, Line Spread Lens - No Extras, Standard - No Extras, Standard - Emergency, Honeycomb - No Extras, Honeycomb - Emergency, Softening Lens - No Extras, Softening Lens - Emergency"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"REFORM 52 IN-OUT RC.pdf","url":"https://electron.gr/media/products/REFORM%2052%20IN-OUT%20RC.pdf"},{"label":"REFORM 52 IN-OUT RECESSED - Installation Manual.pdf","url":"https://electron.gr/media/products/REFORM%2052%20IN-OUT%20RECESSED%20-%20Installation%20Manual.pdf"},{"label":"Photometrics REFORM 52 IN OUT RECESSED.zip","url":"https://electron.gr/media/products/Photometrics%20REFORM%2052%20IN%20OUT%20RECESSED.zip"}]'::jsonb,
  25,
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
  'electron-reform-52-recessed-spot',
  'Electron',
  'Reform 52 Recessed Spot',
  'Reform 52 Recessed Spot',
  'Ceiling Recessed / Reform',
  'o o
Reform 52 is a complete series of downlights available recessed, trimless or surface.
It is available in round form.
Power consumption : 12watt and 8.2watt.
Beam angle varies from 6 to 44 degrees.
Accessories available: honeycomb, line spread lens or softening lens.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
Brass and Bronze: anodized aluminium.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<12 /black inner ring).',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform52rc_spot_sq.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform52rc_spot.jpg']::text[],
  array['Ceiling Recessed', 'Reform']::text[],
  '{"Model":"REFORM 52 Recessed Spot","LED Power":"8.2W, 12W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"6º, 21º, 33º, 44º","Type":"Adjustable","Luminaire Colour":"Black Base - Black Spot - Black Inner Ring, Black Base - Black Spot - White Inner Ring, Black Base - White Spot - Black Inner Ring, Black Base - White Spot - White Inner Ring, White Base - Black Spot - Black Inner Ring, White Base - Black Spot - White Inner Ring, White Base - White Spot - Black Inner Ring, White Base - White Spot - White Inner Ring, Black Base - Brass Spot - Black Inner Ring, Black Base - Bronze Spot - Black Inner Ring","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Line Spread Lens - Emergency, Line Spread Lens - No Extras, Standard - No Extras, Standard - Emergency, Honeycomb - No Extras, Honeycomb - Emergency, Softening Lens - No Extras, Softening Lens - Emergency"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"REFORM 52 RC Spot.pdf","url":"https://electron.gr/media/products/REFORM%2052%20RC%20Spot.pdf"},{"label":"REFORM 52 RECESSED SPOT - Installation Manual.pdf","url":"https://electron.gr/media/products/REFORM%2052%20RECESSED%20SPOT%20-%20Installation%20Manual.pdf"},{"label":"Photometrics REFORM 52 RECESSED SPOT.zip","url":"https://electron.gr/media/products/Photometrics%20REFORM%2052%20RECESSED%20SPOT.zip"}]'::jsonb,
  26,
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
  'electron-reform-75-recessed-spot',
  'Electron',
  'Reform 75 Recessed Spot',
  'Reform 75 Recessed Spot',
  'Ceiling Recessed / Reform',
  'o o o
Reform 75 is series of downlights available recessed or surface.
It is available in round form.
Power consumption : 23.5watt and 18watt.
Beam angle varies from 17 to 50 degrees.
Accessories available: honeycomb, line spread lens or softening lens.
Luminaire material: aluminium construction/ PC parts.
It is offered in white and/or black colour as standard but RAL colours also are available on request.
3 SDCM
L90/B10 50000h
Low UGR ensuring visual comfort (UGR<15 /black inner ring).
Accessories',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/r/e/reform75rc_spot_site.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/reform75rc_spot_site_m_copy.jpg']::text[],
  array['Ceiling Recessed', 'Reform']::text[],
  '{"Model":"REFORM 75 Recessed Spot","LED Power":"18W, 23.5W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Beam Angle":"17º, 27º, 50º","Type":"Adjustable","Luminaire Colour":"Black Base - Black Spot - Black Inner Ring, Black Base - Black Spot - White Inner Ring, Black Base - White Spot - Black Inner Ring, Black Base - White Spot - White Inner Ring, White Base - Black Spot - Black Inner Ring, White Base - Black Spot - White Inner Ring, White Base - White Spot - Black Inner Ring, White Base - White Spot - White Inner Ring","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Line Spread Lens - Emergency, Line Spread Lens - No Extras, Standard - No Extras, Standard - Emergency, Honeycomb - No Extras, Honeycomb - Emergency, Softening Lens - No Extras, Softening Lens - Emergency"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"photometric REFORM 75 18W.zip","url":"https://electron.gr/media/products/photometric%20REFORM%2075%2018W.zip"},{"label":"REFORM 75 RC Spot.pdf","url":"https://electron.gr/media/products/REFORM%2075%20RC%20Spot.pdf"}]'::jsonb,
  27,
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
  'electron-dando-zoom-recessed',
  'Electron',
  'Dando Zoom Recessed',
  'Dando Zoom Recessed',
  'Ceiling Recessed / Dando',
  'o o
Dando Zoom RC is a recessed downlight, flexible due to its adjustable beam angle.
It is also available in surface version with the same dimming options.
Available in black or white as standard but custom colours also available upon request.
Low UGR ensuring visual comfort . (UGR<19)
L90/B10 50.000h
3 SDCM',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/a/dando_zoom_rc.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/a/dando_zoom_rc-dimensions.jpg']::text[],
  array['Ceiling Recessed', 'Dando']::text[],
  '{"Model":"DANDO Zoom Recessed","LED Power":"12W","CCT":"2700K, 3000K, 4000K","CRI":"80, 90","Beam Angle":"Adjustable (16º -50º)","Type":"Adjustable","Colour":"White, Black","Dimming Option":"Non Dimmable, Phase Cut, DALI, 48V PWM Dimmable"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/a/dando_zoom_rc-dimensions.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"DANDO ZOOM RC.pdf","url":"https://electron.gr/media/products/DANDO%20ZOOM%20RC.pdf"},{"label":"Photometrics DANDO ZOOM RC.zip","url":"https://electron.gr/media/products/Photometrics%20DANDO%20ZOOM%20RC.zip"}]'::jsonb,
  28,
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
  'electron-dando-frame-recessed',
  'Electron',
  'Dando Frame Recessed',
  'Dando Frame Recessed',
  'Ceiling Recessed / Dando',
  'o o o
Dando Frame RC is a recessed downlight, ideal to highlight and elevate any artwork.
It is also available in surface version with the same dimming options.
Available in black or white as standard but custom colours also available upon request
Low UGR ensuring visual comfort (UGR<10)
L90/B10 50.000h
3 SDCM',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/1/516_dando_frame_rc_p.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/a/dando_frame-dimensions.png']::text[],
  array['Ceiling Recessed', 'Dando']::text[],
  '{"Model":"DANDO Frame Recessed","LED Power":"12.8W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90","Type":"Adjustable","Beam Angle":"27º max","Colour":"White, Black","Dimming Option":"Non Dimmable, Phase Cut, DALI, 48V PWM Dimmable"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/d/a/dando_frame-dimensions.png']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"DANDO FRAME RC.pdf","url":"https://electron.gr/media/products/DANDO%20FRAME%20RC.pdf"}]'::jsonb,
  29,
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
  'electron-adorno-recessed-retrofit',
  'Electron',
  'Adorno Recessed Retrofit',
  'Adorno Recessed Retrofit',
  'Ceiling Recessed / Adorno',
  'o o o
Adorno series spotlight with GU10 lampholder, max 7.5W (lamp not included).
Powder coated Aluminium housing.
Minimal aesthetic for contemporary architectural design.
Available in white or black colour for the outer housing and in white, black or gold for the inner housing.
Available with accessories: honeycomb, linear spread lens, softening lens, spread lens.',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/A/D/ADORNO_RC_Spotlight_Retrofit.jpg']::text[],
  array['Ceiling Recessed', 'Adorno']::text[],
  '{"Model":"ADORNO Recessed Spotlight Retrofit, Outer Colour - Inner Colour, White-White, White-Black, White-Gold, Black-Black, Black-White","Type":"Adjustable, Lamp Holder, GU10 (max 7.5W)","Accessories":"Standard, Honeycomb, Linear Spread, Softening Lens, Spread Lens"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"ADORNO RC Spotlight Retrofit.pdf","url":"https://electron.gr/media/products/ADORNO%20RC%20Spotlight%20Retrofit.pdf"},{"label":"manual ADORNO Recessed Retrofit.pdf","url":"https://electron.gr/media/products/manualadornorecessedretrofit.pdf"}]'::jsonb,
  30,
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
  'electron-split-micro',
  'Electron',
  'SPLIT MICRO',
  'SPLIT MICRO',
  'Ceiling Recessed / Split',
  'o o o o
SPLIT family is a complete series of recessed downlights available in four sizes.
Spilt Series is also available in trimless version.
Extremely low UGR (Micro: 38° UGR<12, Mini/Midi: 44° UGR<10, Max: 48° UGR<10).
Offered with honeycomb as extra.
Ingress protection: IP20 or IP54 (face only).
Brass, Bronze and Copper: anodized aluminium.
3 SDCM
L90/B10 50000h
500mA / 1.8W
(Source Lm/CRI90: 2700K: 165Lm / 3000K: 175Lm / 4000K: 190Lm)
700mA / 2.5W
(Source Lm/CRI90: 2700K: 230Lm / 3000K: 245Lm / 4000K: 265Lm)
900mA / 3.4W
(Source Lm/CRI90: 2700K: 310Lm / 3000K: 330Lm / 4000K: 360Lm)',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/p/split_micro.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/split_micro_2.jpg']::text[],
  array['Ceiling Recessed', 'Split']::text[],
  '{"Model":"SPLIT MICRO","CCT":"2700K, 3000K, 4000K","CRI":"90","Beam Angle":"15º, 25º, 38º","Colour":"White, Black, Brass, Cooper","Accessories":"Standard - IP20, Standard - IP54, Honeycomb - IP20, Honeycomb - IP54"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SPLIT Series.pdf","url":"https://electron.gr/media/products/SPLIT%20Series.pdf"},{"label":"SPLIT MICRO RC - Installation Manual.pdf","url":"https://electron.gr/media/products/SPLIT%20MICRO%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) SPLIT MICRO.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20SPLIT%20MICRO.zip"}]'::jsonb,
  31,
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
  'electron-split-mini',
  'Electron',
  'SPLIT MINI',
  'SPLIT MINI',
  'Ceiling Recessed / Split',
  'o o o o o
SPLIT family is a complete series of recessed downlights available in four sizes.
Spilt Series is also available in trimless version.
Extremely low UGR (Micro: 38° UGR<12, Mini/Midi: 44° UGR<10, Max: 48° UGR<10).
Offered with honeycomb as extra.
Ingress protection: IP20 or IP54 (face only).
Brass, Bronze and Copper: anodized aluminium.
3 SDCM
L90/B10 50000h
350mA / 3W
(Source Lm/CRI90: 2700K: 430Lm / 3000K: 450Lm / 4000K: 465Lm)
500mA / 4.6W
(Source Lm/CRI90: 2700K: 580Lm / 3000K: 595Lm / 4000K: 620Lm)',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/p/split_mini_3.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/p/split_mini_2_2.jpg']::text[],
  array['Ceiling Recessed', 'Split']::text[],
  '{"Model":"SPLIT MINI","CCT":"2700K, 3000K, 4000K","CRI":"90","Beam Angle":"18º, 32º, 44º","Colour":"White, Black, Brass, Cooper","Accessories":"Standard - IP20, Standard - IP54, Honeycomb - IP20, Honeycomb - IP54"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SPLIT Series.pdf","url":"https://electron.gr/media/products/SPLIT%20Series.pdf"},{"label":"SPLIT MINI RC - Installation Manual.pdf","url":"https://electron.gr/media/products/SPLIT%20MINI%20RC%20-%20Installation%20Manual.pdf"},{"label":"SPLIT MINI RC D - Installation Manual.pdf","url":"https://electron.gr/media/products/SPLIT%20MINI%20RC%20D%20-%20Installation%20Manual.pdf"},{"label":"SPLIT MINI RC Q - Installation Manual.pdf","url":"https://electron.gr/media/products/SPLIT%20MINI%20RC%20Q%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) SPLIT MINI.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20SPLIT%20MINI.zip"}]'::jsonb,
  32,
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
  'electron-split-midi',
  'Electron',
  'SPLIT MIDI',
  'SPLIT MIDI',
  'Ceiling Recessed / Split',
  'o o o o
SPLIT family is a complete series of recessed downlights available in four sizes.
Spilt Series is also available in trimless version.
Extremely low UGR (Micro: 38° UGR<12, Mini/Midi: 44° UGR<10, Max: 48° UGR<10).
Offered with honeycomb as extra.
Ingress protection: IP20 or IP54 (face only).
Brass, Bronze and Copper: anodized aluminium.
3 SDCM
L90/B10 50000h
500mA / 8.5W
(Source Lm/CRI90: 2700K: 1210Lm / 3000K: 1260Lm / 4000K: 1280Lm)
700mA / 12.1W
(Source Lm/CRI90: 2700K: 1615Lm / 3000K: 1680Lm / 4000K: 1705Lm)',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/p/split_midi.jpg']::text[],
  array['Ceiling Recessed', 'Split']::text[],
  '{"Model":"SPLIT MIDI","CCT":"2700K, 3000K, 4000K","CRI":"90","Beam Angle":"20º, 31º, 44º","Colour":"White, Black, Brass, Cooper","Accessories":"Standard - IP20, Standard - IP54, Honeycomb - IP20, Honeycomb - IP54"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SPLIT Series.pdf","url":"https://electron.gr/media/products/SPLIT%20Series.pdf"},{"label":"SPLIT MIDI RC - Installation Manual.pdf","url":"https://electron.gr/media/products/SPLIT%20MIDI%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) SPLIT MIDI.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20SPLIT%20MIDI.zip"}]'::jsonb,
  33,
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
  'electron-split-max',
  'Electron',
  'SPLIT MAX',
  'SPLIT MAX',
  'Ceiling Recessed / Split',
  'o o o o
SPLIT family is a complete series of recessed downlights available in four sizes.
Spilt Series is also available in trimless version.
Extremely low UGR (Micro: 38° UGR<12, Mini/Midi: 44° UGR<10, Max: 48° UGR<10).
Offered with honeycomb as extra.
Ingress protection: IP20 or IP54 (face only).
Brass, Bronze and Copper: anodized aluminium.
3 SDCM
L90/B10 50000h
500mA / 17.2W
(Source Lm/CRI90: 2700K: 2495Lm / 3000K: 2590Lm / 4000K: 2640Lm)
700mA / 23.9W
(Source Lm/CRI90: 2700K: 3570Lm / 3000K: 3715Lm / 4000K: 3770Lm)',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/p/split_max.jpg']::text[],
  array['Ceiling Recessed', 'Split']::text[],
  '{"Model":"SPLIT MAX","CCT":"2700K, 3000K, 4000K","CRI":"90","Beam Angle":"20º, 32º, 48º","Colour":"White, Black, Brass, Cooper","Accessories":"Standard - IP20, Standard - IP54, Honeycomb - IP20, Honeycomb - IP54"}'::jsonb,
  '{}'::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SPLIT Series.pdf","url":"https://electron.gr/media/products/SPLIT%20Series.pdf"},{"label":"SPLIT MAX RC - Installation Manual.pdf","url":"https://electron.gr/media/products/SPLIT%20MAX%20RC%20-%20Installation%20Manual.pdf"},{"label":"Photometrics (ldt files) SPLIT MAX.zip","url":"https://electron.gr/media/products/Photometrics%20(ldt%20files)%20SPLIT%20MAX.zip"}]'::jsonb,
  34,
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
  'electron-soul',
  'Electron',
  'Soul',
  'electron-soul',
  'Ceiling Recessed / SPLIT MICRO',
  'o o o
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
Accessories
Name
SOUL
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_sx.jpg']::text[],
  array['Ceiling Recessed', 'SPLIT MICRO']::text[],
  '{"Model":"-- Please Select --, Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"-- Please Select --, Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20Series%20-%20Installation%20manual.pdf"},{"label":"Photometrics SOUL.zip","url":"https://electron.gr/media/products/Photometrics%20SOUL.zip"}]'::jsonb,
  35,
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
  'electron-soul-deep',
  'Electron',
  'Soul Deep',
  'Soul Deep',
  'Ceiling Recessed / SPLIT MICRO',
  'o o o
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
Accessories
Name
SOUL DEEP
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_DEEP.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_deep_sx.jpg']::text[],
  array['Ceiling Recessed', 'SPLIT MICRO']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º, Colour (Trim/Inner Case), White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_deep_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20Series%20-%20Installation%20manual.pdf"},{"label":"Photometrics SOUL DEEP BLACK.zip","url":"https://electron.gr/media/products/Photometrics%20SOUL%20DEEP%20BLACK.zip"}]'::jsonb,
  36,
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
  'electron-soul-adj',
  'Electron',
  'Soul ADJ',
  'Soul ADJ',
  'Ceiling Recessed / SPLIT MICRO',
  'o o o
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
Accessories
Name
SOUL ADJ
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_ADJ.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_adj_sx.jpg']::text[],
  array['Ceiling Recessed', 'SPLIT MICRO']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_adj_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20Series%20-%20Installation%20manual.pdf"},{"label":"Photometrics SOUL A.zip","url":"https://electron.gr/media/products/Photometrics%20SOUL%20A.zip"}]'::jsonb,
  37,
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
  'electron-soul-adj-deep',
  'Electron',
  'Soul ADJ Deep',
  'Soul ADJ Deep',
  'Ceiling Recessed / SPLIT MICRO',
  'o o o
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
Accessories
Name
SOUL ADJ DEEP
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_DEEP_ADJ.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_adj_deep_sx.jpg']::text[],
  array['Ceiling Recessed', 'SPLIT MICRO']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º, Colour (Trim/Inner Case), White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_adj_deep_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20Series%20-%20Installation%20manual.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"}]'::jsonb,
  38,
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
  'electron-soul-ip65',
  'Electron',
  'Soul IP65',
  'Soul IP65',
  'Ceiling Recessed / SPLIT MICRO',
  'o o o
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
Accessories
Name
SOUL IP65
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_IP65.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_ip65_sx.jpg']::text[],
  array['Ceiling Recessed', 'SPLIT MICRO']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º","Colour":"White, Black","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP65 - No Extras, Standard Cover - IP65 - Emergency Kit, Honeycomb Cover - IP65 - No Extras, Honeycomb Cover - IP65 - Emergency Kit, Linear Spread - IP65 - No Extras, Linear Spread - IP65 - Emergency Kit, Softening Lens - IP65 - No Extras"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_ip65_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20Series%20-%20Installation%20manual.pdf"},{"label":"Photometrics SOUL 65.zip","url":"https://electron.gr/media/products/Photometrics%20SOUL%2065.zip"}]'::jsonb,
  39,
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
  'electron-soul-ip65-deep',
  'Electron',
  'Soul IP65 Deep',
  'Soul IP65 Deep',
  'Ceiling Recessed / SPLIT MICRO',
  'o o o
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
Accessories
Name
SOUL IP65 DEEP
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_DEEP_IP65.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_ip65_deep_sx.jpg']::text[],
  array['Ceiling Recessed', 'SPLIT MICRO']::text[],
  '{"Model":"Low Depth 7W, Standard 6.2W, Standard 12.2W, Standard 18W, Low Depth High Efficiency 5.4W, High Efficiency 3.1W, High Efficiency 6.2W, High Efficiency 8.3W, High Efficiency 10.1W, Narrow Beam 6W, Narrow Beam 8W, Zoom 6.4W, Zoom 13W, Warm Dimming 0.2~6W, Warm Dimming 12W, DT8 Tunable White 5.9W, DT8 Tunable White 11.5W","CCT":"2700K, 3000K, 4000K, 5000K, 1800K ~ 3000K, 1800K ~ 4000K, 2700K ~ 5000K","CRI":"80, 90, 95, 98","Beam Angle":"9º, 16º, 19º, 27º, 30º, 35º, 45º, 50º, 22º~50º, Colour (Trim/Inner Case), White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable, Analogue (1-10V), DMX, DALI, Push Button, Phase Cut, Wireless","Accessories":"Standard Cover - IP65 - No Extras, Standard Cover - IP65 - Emergency Kit, Honeycomb Cover - IP65 - No Extras, Honeycomb Cover - IP65 - Emergency Kit, Linear Spread - IP65 - No Extras, Linear Spread - IP65 - Emergency Kit, Softening Lens - IP65 - No Extras"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_ip65_deep_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20Series%20-%20Installation%20manual.pdf"},{"label":"Photometrics SOUL 65 DEEP BLACK.zip","url":"https://electron.gr/media/products/Photometrics%20SOUL%2065%20DEEP%20BLACK.zip"}]'::jsonb,
  40,
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
  'electron-soul-deep-ll',
  'Electron',
  'Soul Deep LL',
  'Soul Deep LL',
  'Ceiling Recessed / Soul',
  'o o o o
SOUL is a series of recessed downlights.
It is available either round or square.
It is either fixed or adjustable depending on the model.
It is available in standard or deep version offering extra visual comfort.
SOUL DEEP version is also available for LED lamps.
Accessories available: honeycomb, linear spread lens, softening lens.
Luminaire outer trim material: aluminium.
Outer trim available in black or white as standard but custom colours also available upon request.
Soul series has low UGR ensuring visual comfort.
Selection of IP protection: either IP20 or IP54 (face only).
Soul is also offered with an ingress protection rate IP65 (face only).
Accessories
Name
SOUL DEEP LL
SOUL ADJ DEEP LL
SOUL IP65 DEEP LL
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
Standard - IP65
Honeycomb - IP20
Honeycomb - IP54
Honeycomb - IP65
Linear Spread - IP20
Linear Spread - IP54
Linear Spread - IP65
Softening Lens - IP20
Softening Lens - IP54
Softening Lens - IP65
_-_-_-_-_
SOUL Series.pdf
Jobs
info@electron.gr
sales@electron.gr
68 ANTIOHIAS STR - Ν.PHILADELPHIA,
143 41 ATHENS - GREECE
© 2023 Electron S.A.. All Rights Reserved.
ALLOW',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_DEEP_1.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_deep_ll_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul']::text[],
  '{"Colour":"White/White, White/Black, Black/Black, Black/White, Lamp Holder, GU10 (max 7.5W)","Accessories":"Standard - IP20, Standard - IP54, Standard - IP65, Honeycomb - IP20, Honeycomb - IP54, Honeycomb - IP65, Linear Spread - IP20, Linear Spread - IP54, Linear Spread - IP65, Softening Lens - IP20, Softening Lens - IP54, Softening Lens - IP65"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soul_deep_ll_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"}]'::jsonb,
  41,
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
  'electron-soul-mini',
  'Electron',
  'Soul Mini',
  'Soul Mini',
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
SOUL MINI
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_MINI.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 27º, 35º, 47º","Colour":"White, Black","Dimming Option":"Without Driver, Non Dimmable","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL MINI Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20MINI%20Series%20-%20Installation%20manual.pdf"},{"label":"Photometrics SOUL MINI.zip","url":"https://electron.gr/media/products/Photometrics%20SOUL%20MINI.zip"}]'::jsonb,
  42,
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
  'electron-soul-mini-deep',
  'Electron',
  'Soul Mini Deep',
  'Soul Mini Deep',
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
SOUL MINI DEEP
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_MINI_DEEP.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_deep_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 25º, 30º, 38º","Colour":"White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_deep_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL MINI Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20MINI%20Series%20-%20Installation%20manual.pdf"},{"label":"Photometrics SOUL MINI DEEP.zip","url":"https://electron.gr/media/products/Photometrics%20SOUL%20MINI%20DEEP.zip"}]'::jsonb,
  43,
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
  'electron-soul-mini-adj',
  'Electron',
  'Soul Mini ADJ',
  'Soul Mini ADJ',
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
SOUL MINI ADJ
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_MINI_ADJ.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_adj_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 27º, 35º, 47º","Colour":"White, Black","Dimming Option":"Without Driver, Non Dimmable","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_adj_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"Photometrics SOUL MINI ADJ.zip","url":"https://electron.gr/media/products/Photometrics%20SOUL%20MINI%20ADJ.zip"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL MINI Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20MINI%20Series%20-%20Installation%20manual.pdf"}]'::jsonb,
  44,
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
  'electron-soul-mini-adj-deep',
  'Electron',
  'Soul Mini ADJ Deep',
  'Soul Mini ADJ Deep',
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
SOUL MINI ADJ DEEP
Shape
Round
Square',
  array['https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_MINI_DEEP_ADJ.jpg', 'https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_adj_deep_sx.jpg']::text[],
  array['Ceiling Recessed', 'Soul']::text[],
  '{"Model":"Standard 3W, Standard 4.3W, High Efficiency 3W, High Efficiency 4.3W, Narrow Beam 4W","CCT":"2700K, 3000K, 4000K, 5000K","CRI":"80, 90, 98","Beam Angle":"13º, 25º, 30º, 38º","Colour":"White/White, White/Black, Black/Black, Black/White","Dimming Option":"Without Driver, Non Dimmable","Accessories":"Standard Cover - IP20 - No Extras, Standard Cover - IP20 - Emergency Kit, Honeycomb Cover - IP20 - No Extras, Honeycomb Cover - IP20 - Emergency Kit, Linear Spread - IP20 - No Extras, Linear Spread - IP20 - Emergency Kit, Softening Lens - IP20 - No Extras, Softening Lens - IP20 - Emergency Kit, Standard Cover - IP54 - No Extras, Standard Cover - IP54 - Emergency Kit, Honeycomb Cover - IP54 - No Extras, Honeycomb Cover - IP54 - Emergency Kit, Linear Spread - IP54 - No Extras, Linear Spread - IP54 - Emergency Kit, Softening Lens - IP54 - No Extras, Softening Lens - IP54 - Emergency Kit"}'::jsonb,
  array['https://electron.gr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/s/o/soulmini_adj_deep_sx.jpg']::text[],
  null,
  '[{"label":"antagonistikotita_webEN.pdf","url":"https://electron.gr/media/pdfs/antagonistikotita_webEN.pdf"},{"label":"SOUL Series.pdf","url":"https://electron.gr/media/products/SOUL%20Series.pdf"},{"label":"SOUL MINI Series - Installation manual.pdf","url":"https://electron.gr/media/products/SOUL%20MINI%20Series%20-%20Installation%20manual.pdf"}]'::jsonb,
  45,
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

