create extension if not exists "pgcrypto";

insert into storage.buckets (id, name, public)
values ('catalogs', 'catalogs', true)
on conflict (id) do update set public = excluded.public;

create table if not exists public.catalog_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  display_order integer null,
  created_at timestamptz not null default now()
);

create table if not exists public.catalogs (
  id uuid primary key default gen_random_uuid(),
  category_id uuid null references public.catalog_categories(id) on delete set null,
  name text not null,
  brand text null,
  description text null,
  heyzine_url text not null,
  download_url text null,
  cover_image text null,
  display_order integer null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists catalog_categories_display_order_idx
  on public.catalog_categories(display_order, name);

create index if not exists catalogs_category_id_idx
  on public.catalogs(category_id);

create index if not exists catalogs_display_order_idx
  on public.catalogs(display_order, created_at);

alter table public.catalog_categories enable row level security;
alter table public.catalogs enable row level security;

drop policy if exists "Authenticated users can read catalog categories" on public.catalog_categories;
drop policy if exists "Authenticated users can manage catalog categories" on public.catalog_categories;
drop policy if exists "Authenticated users can read catalogs" on public.catalogs;
drop policy if exists "Authenticated users can manage catalogs" on public.catalogs;

create policy "Authenticated users can read catalog categories"
  on public.catalog_categories
  for select
  to authenticated
  using (true);

create policy "Authenticated users can manage catalog categories"
  on public.catalog_categories
  for all
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can read catalogs"
  on public.catalogs
  for select
  to authenticated
  using (true);

create policy "Authenticated users can manage catalogs"
  on public.catalogs
  for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Public can read catalog covers" on storage.objects;
drop policy if exists "Authenticated users can upload catalog covers" on storage.objects;
drop policy if exists "Authenticated users can update catalog covers" on storage.objects;
drop policy if exists "Authenticated users can delete catalog covers" on storage.objects;

create policy "Public can read catalog covers"
  on storage.objects
  for select
  using (bucket_id = 'catalogs');

create policy "Authenticated users can upload catalog covers"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'catalogs');

create policy "Authenticated users can update catalog covers"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'catalogs')
  with check (bucket_id = 'catalogs');

create policy "Authenticated users can delete catalog covers"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'catalogs');

insert into public.catalog_categories (slug, name, display_order)
values ('catalog-digital', 'Catalog digital', 1)
on conflict (slug) do nothing;

insert into public.catalogs (
  category_id,
  name,
  brand,
  description,
  heyzine_url,
  download_url,
  display_order,
  is_active
)
select
  cc.id,
  'Catalog Orion Grup',
  'Orion Grup',
  'Catalog digital Orion Grup disponibil in format flipbook.',
  'https://heyzine.com/flip-book/40b2490807.html',
  'https://heyzine.com/flip-book/40b2490807.html',
  1,
  true
from public.catalog_categories cc
where cc.slug = 'catalog-digital'
  and not exists (
    select 1
    from public.catalogs c
    where c.heyzine_url = 'https://heyzine.com/flip-book/40b2490807.html'
  );
