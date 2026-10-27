-- Read-only diagnostics. Run in Supabase SQL Editor and share the results.
-- Includes every Storage policy because a policy can cover multiple buckets.
select schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
from pg_policies
where (schemaname = 'public' and tablename in ('portfolio_projects', 'portfolio_categories'))
   or (schemaname = 'storage' and tablename = 'objects')
order by schemaname, tablename, policyname;

select grantee, table_schema, table_name, privilege_type
from information_schema.role_table_grants
where table_schema = 'public'
  and table_name in ('portfolio_projects', 'portfolio_categories')
  and grantee in ('anon', 'authenticated')
order by table_name, grantee, privilege_type;
