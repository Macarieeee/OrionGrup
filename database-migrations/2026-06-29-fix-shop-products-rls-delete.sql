-- Fix "stack depth limit exceeded" when deleting products from admin.
-- That error is typically caused by recursive RLS policies, for example a
-- shop_products policy that queries shop_products again while evaluating DELETE.

alter table public.shop_products enable row level security;
alter table public.shop_categories enable row level security;

do $$
declare
  policy_name text;
begin
  for policy_name in
    select pol.policyname
    from pg_policies pol
    where pol.schemaname = 'public'
      and pol.tablename = 'shop_products'
  loop
    execute format('drop policy if exists %I on public.shop_products', policy_name);
  end loop;

  for policy_name in
    select pol.policyname
    from pg_policies pol
    where pol.schemaname = 'public'
      and pol.tablename = 'shop_categories'
  loop
    execute format('drop policy if exists %I on public.shop_categories', policy_name);
  end loop;
end $$;

create policy "Public can read shop products"
on public.shop_products
for select
using (true);

create policy "Authenticated users can insert shop products"
on public.shop_products
for insert
to authenticated
with check (true);

create policy "Authenticated users can update shop products"
on public.shop_products
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated users can delete shop products"
on public.shop_products
for delete
to authenticated
using (true);

create policy "Public can read shop categories"
on public.shop_categories
for select
using (true);

create policy "Authenticated users can insert shop categories"
on public.shop_categories
for insert
to authenticated
with check (true);

create policy "Authenticated users can update shop categories"
on public.shop_categories
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated users can delete shop categories"
on public.shop_categories
for delete
to authenticated
using (true);
