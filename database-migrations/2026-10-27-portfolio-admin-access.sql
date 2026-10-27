-- Run this entire file in Supabase > SQL Editor.
-- Adds access for the designated portfolio administrator only.
-- Existing policies are preserved. Other permissive policies can still grant
-- access; restrictive policies can still deny it. Review diagnostics if needed.
begin;

do $$
begin
  if not exists (select 1 from auth.users where id = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid) then
    raise exception 'Administrator UID does not exist in this Supabase project';
  end if;
  if not exists (select 1 from storage.buckets where id = 'portfolio') then
    raise exception 'Storage bucket portfolio does not exist';
  end if;
end;
$$;

alter table public.portfolio_projects enable row level security;
grant select, insert, update, delete on public.portfolio_projects to authenticated;

-- SELECT is also needed to edit inactive projects and return saved rows.
drop policy if exists "Orion portfolio admin select" on public.portfolio_projects;
create policy "Orion portfolio admin select" on public.portfolio_projects
for select to authenticated
using ((select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid);

drop policy if exists "Orion portfolio admin insert" on public.portfolio_projects;
create policy "Orion portfolio admin insert" on public.portfolio_projects
for insert to authenticated
with check ((select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid);

drop policy if exists "Orion portfolio admin update" on public.portfolio_projects;
create policy "Orion portfolio admin update" on public.portfolio_projects
for update to authenticated
using ((select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid)
with check ((select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid);

drop policy if exists "Orion portfolio admin delete" on public.portfolio_projects;
create policy "Orion portfolio admin delete" on public.portfolio_projects
for delete to authenticated
using ((select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid);

-- Public image URLs remain public. File management is scoped to this bucket.
drop policy if exists "Orion portfolio files admin select" on storage.objects;
create policy "Orion portfolio files admin select" on storage.objects
for select to authenticated
using (bucket_id = 'portfolio' and (select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid);

drop policy if exists "Orion portfolio files admin insert" on storage.objects;
create policy "Orion portfolio files admin insert" on storage.objects
for insert to authenticated
with check (bucket_id = 'portfolio' and (select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid);

drop policy if exists "Orion portfolio files admin update" on storage.objects;
create policy "Orion portfolio files admin update" on storage.objects
for update to authenticated
using (bucket_id = 'portfolio' and (select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid)
with check (bucket_id = 'portfolio' and (select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid);

drop policy if exists "Orion portfolio files admin delete" on storage.objects;
create policy "Orion portfolio files admin delete" on storage.objects
for delete to authenticated
using (bucket_id = 'portfolio' and (select auth.uid()) = '41c7c20d-ac42-4d29-90cf-2357c4a4d8a9'::uuid);

commit;
