begin;

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (email = lower(trim(email)) and length(email) <= 254 and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
  created_at timestamptz not null default now(),
  unsubscribed_at timestamptz,
  unsubscribe_token uuid not null unique default gen_random_uuid()
);

create table public.newsletter_campaigns (
  id uuid primary key,
  subject text not null check (length(subject) between 1 and 200),
  message text not null check (length(message) between 1 and 20000),
  sender text not null,
  endpoint text not null,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  recipient_count integer not null default 0
);

create table public.newsletter_batches (
  id bigint generated always as identity primary key,
  campaign_id uuid not null references public.newsletter_campaigns(id) on delete cascade,
  recipients jsonb not null,
  payload jsonb,
  accepted_count integer not null default 0,
  completed_at timestamptz
);
create index on public.newsletter_batches(campaign_id, id);

create table public.newsletter_subscription_limits (
  bucket text primary key,
  started_at timestamptz not null default now(),
  attempts integer not null default 1
);
alter table public.newsletter_subscription_limits enable row level security;
revoke all on public.newsletter_subscription_limits from anon, authenticated;
grant all on public.newsletter_subscription_limits to service_role;

create function public.newsletter_subscription_allowed(bucket_key text)
returns boolean language plpgsql set search_path = public as $$
declare hits integer;
begin
  delete from newsletter_subscription_limits where started_at < now() - interval '1 hour';
  insert into newsletter_subscription_limits(bucket) values (bucket_key)
  on conflict (bucket) do update set attempts = newsletter_subscription_limits.attempts + 1
  returning attempts into hits;
  return hits <= 10;
end;
$$;
revoke all on function public.newsletter_subscription_allowed(text) from public, anon, authenticated;
grant execute on function public.newsletter_subscription_allowed(text) to service_role;

-- Only the server's service role can access addresses, tokens and campaigns.
alter table public.newsletter_subscribers enable row level security;
alter table public.newsletter_campaigns enable row level security;
alter table public.newsletter_batches enable row level security;
revoke all on public.newsletter_subscribers, public.newsletter_campaigns, public.newsletter_batches from anon, authenticated;
grant all on public.newsletter_subscribers, public.newsletter_campaigns, public.newsletter_batches to service_role;
grant usage, select on sequence public.newsletter_batches_id_seq to service_role;

-- Snapshot all active subscribers atomically, without the REST row limit.
create function public.create_newsletter_campaign(
  campaign_id uuid, campaign_subject text, campaign_message text,
  campaign_sender text, campaign_endpoint text, administrator uuid
) returns void language plpgsql set search_path = public as $$
begin
  insert into newsletter_campaigns(id, subject, message, sender, endpoint, created_by)
  values (campaign_id, campaign_subject, campaign_message, campaign_sender, campaign_endpoint, administrator)
  on conflict (id) do nothing;
  if not found then return; end if;

  insert into newsletter_batches(campaign_id, recipients)
  select campaign_id, jsonb_agg(jsonb_build_object('id', id, 'email', email, 'token', unsubscribe_token) order by id)
  from (
    select *, (row_number() over (order by id) - 1) / 50 as batch_number
    from newsletter_subscribers where unsubscribed_at is null
  ) subscribers group by batch_number;

  update newsletter_campaigns c set recipient_count = (
    select coalesce(sum(jsonb_array_length(b.recipients)), 0)
    from newsletter_batches b where b.campaign_id = c.id
  ) where c.id = campaign_id;
end;
$$;
revoke all on function public.create_newsletter_campaign(uuid, text, text, text, text, uuid) from public, anon, authenticated;
grant execute on function public.create_newsletter_campaign(uuid, text, text, text, text, uuid) to service_role;

commit;
