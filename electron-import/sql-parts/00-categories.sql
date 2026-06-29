-- Electron categories

begin;



insert into public.shop_categories (
  label,
  image_url
)
values (
  'Ceiling Recessed',
  'https://electron.gr/en/products/ceiling-recessed'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Disc',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/i/disc_rc27-.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Eclipse',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/c/eclipse_rc_58-.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Loop',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/o/loop_rc_3030.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Orbit',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/o/r/orbit_rc_5959-.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Reform',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/2/0/2026_reform30rc_site_sq.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Dando',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/d/a/dando_zoom_rc.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Adorno',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/A/D/ADORNO_RC_Spotlight_Retrofit.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Split',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/p/split_micro.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'SPLIT MICRO',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Soul',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_DEEP_1.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Soul Deep LL',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SOUL_MINI_IP65_DEEP.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Soul Mini IP65 Deep',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/H/I/HIDE_RC.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Hide RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/H/I/HIDE_MINI_RC_DEEP.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Santi',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/W/H/WHISPER_RC.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Whisper RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/4/548_crush_rc_rd.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Crush LL',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/5/5/556b_8.2w_polar_rc.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Mani Round',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/s/c/scoop_n.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Scoop N',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_ag_bl-wh-.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Nordia AntiGlare',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/n/o/nordia_wash_ss-.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Nordia Wash SS',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_21_RC.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Lima 21 RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_21_WASH_RC.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Lima 21 Wash RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_21_DIFFUSED_RC.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Lima 21 Diffused RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/l/i/lima_10_rc_ip44.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Lima 10 IP44 RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/I/LIMA_21_RC_IP65.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Lima 21 IP65 RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/L/A/LANE_31_RC.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Lane 31 RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/F/O/FOCUS_RC.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Focus RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/E/R/ERIS.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Eris',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/e/merlyn_xl_rd.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Merlyn XL Round',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/A/CASTALIA_R.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Castalia R',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/6/1/612_revo_m.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Revo M',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/B/O/BORRELY_DOUBLE.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Borrely Double Square',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/V/E/VESTA_RD.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Vesta Round',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/A/V/AVRA.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Avra',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/j/u/jupiter.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Jupiter',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/l/eldo.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Eldo',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/v/evo_i.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Evo I',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/T/O/TORN_TORN_MINI.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Torn',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/B/A/BAROLO.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Barolo',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/U/CUBIC.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Cubic',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/E/Y/EYE_EYE_SQ.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Eye',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/f/r/frame.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Frame',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/C/R/CRYSTAL_Starlight_Series.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Crystal - Starlight Series',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/p/e/petite_antiglare-21.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Petite Anti-glare',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/t/a/talus_rc_adj.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Talus ADJ RC',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/R/O/RODITA.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Rodita',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/S/O/SORENA.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Sorena',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/k/r/kronos.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Kronos',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/R/O/RONELO.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;

insert into public.shop_categories (
  label,
  image_url
)
values (
  'Ronelo',
  'https://electron.gr/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/e/l/elto_60.jpg'
)
on conflict (label) do update set
  image_url = excluded.image_url;



commit;

