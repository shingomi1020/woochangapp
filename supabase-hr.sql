create table if not exists public.member_accounts (
  id text primary key,
  name text not null default '',
  login_id text not null unique,
  password text not null default '',
  role text not null default 'employee' check (role in ('admin', 'employee', 'freelancer')),
  department text not null default '',
  title text not null default '',
  phone text not null default '',
  note text not null default '',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists member_accounts_login_id_idx on public.member_accounts(login_id);

create table if not exists public.employees (
  id bigint generated always as identity primary key,
  name text not null,
  employment_type text not null default 'insured' check (employment_type in ('insured', 'freelancer')),
  member_id text not null default '',
  login_id text not null default '',
  base_salary numeric not null default 0,
  overtime_rate numeric not null default 0,
  weekend_rate numeric not null default 0,
  department text not null default '',
  title text not null default '',
  phone text not null default '',
  email text not null default '',
  address text not null default '',
  bank_name text not null default '',
  bank_account text not null default '',
  account_holder text not null default '',
  dependents text not null default '',
  note text not null default '',
  created_at timestamptz not null default now()
);

alter table public.employees add column if not exists department text not null default '';
alter table public.employees add column if not exists member_id text not null default '';
alter table public.employees add column if not exists login_id text not null default '';
alter table public.employees add column if not exists title text not null default '';
alter table public.employees add column if not exists phone text not null default '';
alter table public.employees add column if not exists email text not null default '';
alter table public.employees add column if not exists address text not null default '';
alter table public.employees add column if not exists bank_name text not null default '';
alter table public.employees add column if not exists bank_account text not null default '';
alter table public.employees add column if not exists account_holder text not null default '';
alter table public.employees add column if not exists dependents text not null default '';
alter table public.employees add column if not exists note text not null default '';

create table if not exists public.attendance_records (
  id bigint generated always as identity primary key,
  employee_id bigint not null references public.employees(id) on delete cascade,
  work_date date not null,
  clock_in time not null,
  clock_out time not null,
  created_at timestamptz not null default now()
);

create index if not exists attendance_records_employee_id_idx on public.attendance_records(employee_id);
create index if not exists attendance_records_work_date_idx on public.attendance_records(work_date desc);
create index if not exists employees_member_id_idx on public.employees(member_id);
create index if not exists employees_login_id_idx on public.employees(login_id);

create table if not exists public.employee_documents (
  id bigint generated always as identity primary key,
  employee_id bigint not null references public.employees(id) on delete cascade,
  document_type text not null default '기타',
  file_name text not null,
  mime_type text not null default '',
  file_data text not null,
  created_at timestamptz not null default now()
);

create index if not exists employee_documents_employee_id_idx on public.employee_documents(employee_id);

create table if not exists public.task_attachments (
  id bigint generated always as identity primary key,
  task_id bigint not null references public.tasks(id) on delete cascade,
  file_name text not null,
  mime_type text not null default '',
  file_data text not null,
  file_size bigint not null default 0,
  is_image boolean not null default false,
  archived_at timestamptz,
  purge_after timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists task_attachments_task_id_idx on public.task_attachments(task_id);
create index if not exists task_attachments_purge_after_idx on public.task_attachments(purge_after);

create table if not exists public.portfolio_items (
  id bigint generated always as identity primary key,
  client_name text not null default '',
  project_name text not null default '',
  work_date date,
  size_spec text not null default '',
  post_processing text not null default '',
  material text not null default '',
  note text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.portfolio_attachments (
  id bigint generated always as identity primary key,
  portfolio_id bigint not null references public.portfolio_items(id) on delete cascade,
  file_name text not null,
  mime_type text not null default '',
  file_data text not null,
  file_size bigint not null default 0,
  is_image boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists portfolio_attachments_portfolio_id_idx
on public.portfolio_attachments(portfolio_id);
