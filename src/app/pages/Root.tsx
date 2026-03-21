import { Link, Outlet, useLocation } from "react-router";
import {
  CalendarDays,
  CheckCircle2,
  Cloud,
  HardDrive,
  ListTodo,
  RefreshCw,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { TodoProvider, useTodos } from "../contexts/TodoContext";
import { cn } from "../components/ui/utils";

const navigationItems = [
  { href: "/", label: "할 일", icon: ListTodo },
  { href: "/calendar", label: "캘린더", icon: CalendarDays },
];

export default function Root() {
  return (
    <TodoProvider>
      <RootShell />
    </TodoProvider>
  );
}

function RootShell() {
  const location = useLocation();
  const { syncMode, syncMessage, errorMessage, isBusy, reloadTodos } = useTodos();

  const isSupabaseMode = syncMode === "supabase";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_34%),linear-gradient(180deg,_#f4fbff_0%,_#eef6ff_48%,_#f7fbff_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-8">
          <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white/80 shadow-[0_18px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl">
            <div className="flex flex-col gap-5 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-7">
              <div className="flex items-start gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f766e,#2563eb)] shadow-lg shadow-cyan-500/25">
                  <CheckCircle2 className="size-7 text-white" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700/80">
                    Todo and Calendar
                  </p>
                  <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    일정과 할 일을 한 화면에서 관리하는 워크스페이스
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    현재 폴더에 있던 Todo 리스트와 캘린더 구조를 정리해 실행 가능한
                    앱으로 다시 구성했습니다.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <nav className="flex flex-wrap gap-2 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-1.5">
                  {navigationItems.map(({ href, label, icon: Icon }) => {
                    const active = location.pathname === href;

                    return (
                      <Link
                        key={href}
                        to={href}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition",
                          active
                            ? "bg-slate-950 text-white shadow-lg"
                            : "text-slate-600 hover:bg-white hover:text-slate-950",
                        )}
                      >
                        <Icon className="size-4" />
                        {label}
                      </Link>
                    );
                  })}
                </nav>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    void reloadTodos();
                  }}
                  disabled={isBusy}
                  className="rounded-xl border-slate-300 bg-white/80"
                >
                  <RefreshCw className={cn("size-4", isBusy && "animate-spin")} />
                  새로고침
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200/70 bg-slate-50/70 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-7">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                    isSupabaseMode
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700",
                  )}
                >
                  {isSupabaseMode ? (
                    <Cloud className="size-3.5" />
                  ) : (
                    <HardDrive className="size-3.5" />
                  )}
                  {isSupabaseMode ? "Supabase 연결" : "로컬 모드"}
                </span>
                <p className="text-sm text-slate-600">{syncMessage}</p>
              </div>

              <p className="text-xs text-slate-500">
                GitHub 업로드 전에는 `.env`에 Supabase 값을 넣고, 민감한 값은 커밋하지
                마세요.
              </p>
            </div>

            {errorMessage ? (
              <div className="border-t border-rose-200 bg-rose-50 px-5 py-3 text-sm text-rose-700 lg:px-7">
                {errorMessage}
              </div>
            ) : null}
          </div>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
