create table if not exists public.employees (
  id bigint generated always as identity primary key,
  name text not null,
  employment_type text not null default 'insured' check (employment_type in ('insured', 'freelancer')),
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
