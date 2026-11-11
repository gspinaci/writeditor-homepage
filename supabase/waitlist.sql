create table public.waitlist (
  id bigint generated always as identity primary key,
  email text not null,
  created_at timestamptz not null default now(),
  constraint waitlist_email_check check (
    char_length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  )
);

-- one row per address, case-insensitive (the form treats HTTP 409 as "already subscribed")
create unique index waitlist_email_key on public.waitlist (lower(email));

-- the publishable key in the page may only add rows
alter table public.waitlist enable row level security;
create policy waitlist_insert on public.waitlist for insert to anon with check (true);
grant insert on public.waitlist to anon;
