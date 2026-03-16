create table if not exists public.employees (
  id bigint generated always as identity primary key,
  name text not null,
  employment_type text not null default 'insured' check (employment_type in ('insured', 'freelancer')),
  base_salary numeric not null default 0,
  overtime_rate numeric not null default 0,
  weekend_rate numeric not null default 0,
  created_at timestamptz not null default now()
);

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
