import { useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import {
  CalendarDays,
  CheckCircle2,
  Circle,
  LoaderCircle,
  PencilLine,
  Plus,
  Trash2,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { cn } from "../components/ui/utils";
import { useTodos, type Todo } from "../contexts/TodoContext";
import { parseDateValue, toDateInputValue } from "../lib/date";

function createEmptyForm() {
  return {
    title: "",
    description: "",
    date: toDateInputValue(new Date()),
  };
}

export default function TodoList() {
  const { todos, addTodo, deleteTodo, toggleTodo, updateTodo, isBusy, syncMode } =
    useTodos();
  const [formOpen, setFormOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [formData, setFormData] = useState(createEmptyForm());

  const todayKey = toDateInputValue(new Date());
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  const dueTodayTodos = incompleteTodos.filter((todo) => todo.date === todayKey);
  const overdueTodos = incompleteTodos.filter((todo) => todo.date < todayKey);
  const completionRate =
    todos.length > 0 ? Math.round((completedTodos.length / todos.length) * 100) : 0;

  const closeForm = () => {
    setFormOpen(false);
    setEditingTodo(null);
    setFormData(createEmptyForm());
  };

  const openCreateForm = () => {
    setEditingTodo(null);
    setFormData(createEmptyForm());
    setFormOpen(true);
  };

  const openEditForm = (todo: Todo) => {
    setEditingTodo(todo);
    setFormData({
      title: todo.title,
      description: todo.description,
      date: todo.date,
    });
    setFormOpen(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    if (editingTodo) {
      await updateTodo(editingTodo.id, formData);
    } else {
      await addTodo(formData);
    }

    closeForm();
  };

  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.55fr,1fr]">
        <Card className="overflow-hidden border-0 bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_52%,#2563eb_100%)] text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]">
          <CardContent className="relative px-6 py-7 sm:px-8 sm:py-8">
            <div className="absolute right-0 top-0 h-36 w-36 -translate-y-8 translate-x-10 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                Daily Focus
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                오늘 처리해야 할 일정과 예정 업무를 한 번에 확인하세요.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-cyan-50/90">
                할 일 추가, 수정, 완료 처리와 날짜별 확인을 모두 같은 데이터에서
                관리합니다.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  onClick={openCreateForm}
                  className="rounded-xl bg-white text-slate-950 hover:bg-cyan-50"
                >
                  <Plus className="size-4" />
                  새 일정 추가
                </Button>
                <span className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm">
                  현재 저장 위치: {syncMode === "supabase" ? "Supabase" : "브라우저"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
          <SummaryCard
            label="남은 일정"
            value={`${incompleteTodos.length}건`}
            hint={`오늘 마감 ${dueTodayTodos.length}건`}
            tone="sky"
          />
          <SummaryCard
            label="지연된 일정"
            value={`${overdueTodos.length}건`}
            hint="마감일이 지난 항목"
            tone="amber"
          />
          <SummaryCard
            label="완료율"
            value={`${completionRate}%`}
            hint={`${completedTodos.length}건 완료`}
            tone="emerald"
          />
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr,1fr]">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">집중해야 할 일정</h3>
              <p className="text-sm text-slate-500">
                마감일 순으로 정렬된 진행 중 항목입니다.
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
              {incompleteTodos.length}건
            </span>
          </div>

          {incompleteTodos.length > 0 ? (
            incompleteTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                todayKey={todayKey}
                onEdit={() => openEditForm(todo)}
                onDelete={() => {
                  void deleteTodo(todo.id);
                }}
                onToggle={() => {
                  void toggleTodo(todo.id);
                }}
              />
            ))
          ) : (
            <EmptyState
              title="진행 중인 일정이 없습니다."
              description="새 일정을 추가하면 이 영역에 자동으로 나타납니다."
            />
          )}
        </div>

        <div className="space-y-4">
          <Card className="border-0 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <CardContent className="space-y-4 px-6 py-6">
              <div className="rounded-2xl bg-slate-950 px-4 py-4 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
                  Today
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {format(new Date(), "M월 d일 EEEE", { locale: ko })}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <MiniMetric label="오늘 마감" value={`${dueTodayTodos.length}건`} />
                <MiniMetric label="완료된 일정" value={`${completedTodos.length}건`} />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">완료한 일정</h3>
              <p className="text-sm text-slate-500">
                완료 처리한 일정은 아래에서 다시 확인할 수 있습니다.
              </p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              {completedTodos.length}건
            </span>
          </div>

          {completedTodos.length > 0 ? (
            completedTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                todayKey={todayKey}
                onDelete={() => {
                  void deleteTodo(todo.id);
                }}
                onToggle={() => {
                  void toggleTodo(todo.id);
                }}
                completedView
              />
            ))
          ) : (
            <EmptyState
              title="아직 완료한 일정이 없습니다."
              description="일정을 완료 처리하면 이 영역에 누적됩니다."
            />
          )}
        </div>
      </section>

      <Dialog open={formOpen} onOpenChange={(next) => (next ? setFormOpen(true) : closeForm())}>
        <DialogContent className="rounded-3xl border-0 bg-white p-0 shadow-[0_24px_120px_rgba(15,23,42,0.18)] sm:max-w-xl">
          <div className="border-b border-slate-200 px-6 py-5">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-slate-950">
                {editingTodo ? "일정 수정" : "새 일정 추가"}
              </DialogTitle>
            </DialogHeader>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
            <div className="space-y-2">
              <label htmlFor="todo-title" className="text-sm font-medium text-slate-700">
                제목
              </label>
              <Input
                id="todo-title"
                value={formData.title}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    title: event.target.value,
                  }))
                }
                placeholder="예: 배포 전 점검"
                className="h-11 rounded-xl border-slate-200 bg-slate-50"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="todo-description"
                className="text-sm font-medium text-slate-700"
              >
                설명
              </label>
              <Textarea
                id="todo-description"
                value={formData.description}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    description: event.target.value,
                  }))
                }
                placeholder="세부 메모나 체크 포인트를 남겨 두세요."
                rows={4}
                className="rounded-xl border-slate-200 bg-slate-50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="todo-date" className="text-sm font-medium text-slate-700">
                마감일
              </label>
              <Input
                id="todo-date"
                type="date"
                value={formData.date}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    date: event.target.value,
                  }))
                }
                className="h-11 rounded-xl border-slate-200 bg-slate-50"
                required
              />
            </div>

            <DialogFooter className="border-t border-slate-200 pt-5">
              <Button
                type="button"
                variant="outline"
                onClick={closeForm}
                className="rounded-xl border-slate-300"
              >
                취소
              </Button>
              <Button
                type="submit"
                disabled={isBusy}
                className="rounded-xl bg-slate-950 text-white hover:bg-slate-800"
              >
                {isBusy ? <LoaderCircle className="size-4 animate-spin" /> : null}
                {editingTodo ? "수정 저장" : "일정 저장"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  tone: "sky" | "amber" | "emerald";
}) {
  const toneClassName =
    tone === "sky"
      ? "from-sky-500/10 to-blue-500/10 text-sky-700"
      : tone === "amber"
        ? "from-amber-500/10 to-orange-500/10 text-amber-700"
        : "from-emerald-500/10 to-teal-500/10 text-emerald-700";

  return (
    <Card className="border-0 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
      <CardContent className="px-5 py-5">
        <div className={cn("rounded-2xl bg-gradient-to-br p-4", toneClassName)}>
          <p className="text-sm font-medium">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{value}</p>
          <p className="mt-2 text-sm text-slate-500">{hint}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function TodoCard({
  todo,
  todayKey,
  onEdit,
  onDelete,
  onToggle,
  completedView = false,
}: {
  todo: Todo;
  todayKey: string;
  onEdit?: () => void;
  onDelete: () => void;
  onToggle: () => void;
  completedView?: boolean;
}) {
  const dateLabel = format(parseDateValue(todo.date), "M월 d일 EEEE", {
    locale: ko,
  });

  const badge =
    todo.completed || completedView
      ? {
          label: "완료",
          className: "bg-emerald-100 text-emerald-700",
        }
      : todo.date < todayKey
        ? {
            label: "지연됨",
            className: "bg-amber-100 text-amber-700",
          }
        : todo.date === todayKey
          ? {
              label: "오늘",
              className: "bg-sky-100 text-sky-700",
            }
          : {
              label: "예정",
              className: "bg-slate-100 text-slate-700",
            };

  return (
    <Card className="border-0 bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
      <CardContent className="px-5 py-5">
        <div className="flex items-start gap-4">
          <button
            type="button"
            onClick={onToggle}
            className="mt-1 rounded-full text-slate-400 transition hover:scale-105 hover:text-slate-950"
            aria-label={todo.completed ? "미완료로 변경" : "완료로 변경"}
          >
            {todo.completed || completedView ? (
              <CheckCircle2 className="size-6 text-emerald-600" />
            ) : (
              <Circle className="size-6 text-sky-600" />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4
                className={cn(
                  "text-lg font-semibold text-slate-950",
                  (todo.completed || completedView) && "text-slate-500 line-through",
                )}
              >
                {todo.title}
              </h4>
              <span
                className={cn(
                  "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
                  badge.className,
                )}
              >
                {badge.label}
              </span>
            </div>

            {todo.description ? (
              <p
                className={cn(
                  "mt-2 text-sm leading-6 text-slate-600",
                  (todo.completed || completedView) && "text-slate-400 line-through",
                )}
              >
                {todo.description}
              </p>
            ) : null}

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                <CalendarDays className="size-4" />
                {dateLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {onEdit ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onEdit}
                className="rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-950"
              >
                <PencilLine className="size-4" />
              </Button>
            ) : null}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onDelete}
              className="rounded-xl text-slate-500 hover:bg-rose-50 hover:text-rose-600"
            >
              <Trash2 className="size-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="border border-dashed border-slate-300 bg-white/70">
      <CardContent className="px-6 py-12 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-slate-100">
          <CheckCircle2 className="size-7 text-slate-400" />
        </div>
        <p className="mt-4 text-lg font-semibold text-slate-900">{title}</p>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </CardContent>
    </Card>
  );
}
