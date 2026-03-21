create extension if not exists "pgcrypto";

create table if not exists public.todos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  due_date date not null,
  completed boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.todos enable row level security;

drop policy if exists "todos_select_all" on public.todos;
drop policy if exists "todos_insert_all" on public.todos;
drop policy if exists "todos_update_all" on public.todos;
drop policy if exists "todos_delete_all" on public.todos;

create policy "todos_select_all"
  on public.todos
  for select
  to anon, authenticated
  using (true);

create policy "todos_insert_all"
  on public.todos
  for insert
  to anon, authenticated
  with check (true);

create policy "todos_update_all"
  on public.todos
  for update
  to anon, authenticated
  using (true)
  with check (true);

create policy "todos_delete_all"
  on public.todos
  for delete
  to anon, authenticated
  using (true);
