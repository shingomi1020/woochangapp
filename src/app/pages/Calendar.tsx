import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { ko } from "date-fns/locale";
import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { cn } from "../components/ui/utils";
import { useTodos } from "../contexts/TodoContext";
import { parseDateValue, toDateInputValue } from "../lib/date";

const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];

export default function Calendar() {
  const { todos, getTodosByDate, toggleTodo } = useTodos();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const selectedDateKey = toDateInputValue(selectedDate);
  const selectedTodos = getTodosByDate(selectedDateKey);
  const monthTodos = todos.filter((todo) =>
    isSameMonth(parseDateValue(todo.date), currentMonth),
  );
  const monthCompletedCount = monthTodos.filter((todo) => todo.completed).length;

  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.55fr,1fr]">
        <Card className="border-0 bg-[linear-gradient(135deg,#082f49_0%,#0f766e_48%,#16a34a_100%)] text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]">
          <CardContent className="px-6 py-7 sm:px-8 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/85">
              Monthly View
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              날짜별 일정 밀도를 확인하고 완료 상태를 바로 업데이트하세요.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-cyan-50/90">
              월간 캘린더에서 일정 개수와 완료 여부를 빠르게 파악할 수 있습니다.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
          <CalendarMetric
            label="이번 달 일정"
            value={`${monthTodos.length}건`}
            hint="현재 월에 포함된 전체 항목"
          />
          <CalendarMetric
            label="이번 달 완료"
            value={`${monthCompletedCount}건`}
            hint="완료 처리한 항목 수"
          />
          <CalendarMetric
            label="선택 날짜"
            value={format(selectedDate, "M월 d일", { locale: ko })}
            hint={`${selectedTodos.length}건 배정`}
          />
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.65fr,1fr]">
        <Card className="border-0 bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <CardHeader className="border-b border-slate-200 pb-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-2xl font-semibold text-slate-950">
                  {format(currentMonth, "yyyy년 M월", { locale: ko })}
                </CardTitle>
                <p className="mt-1 text-sm text-slate-500">
                  셀을 눌러 해당 날짜의 일정을 오른쪽 패널에서 확인하세요.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  className="rounded-xl border-slate-300 bg-white"
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const today = new Date();
                    setCurrentMonth(today);
                    setSelectedDate(today);
                  }}
                  className="rounded-xl border-slate-300 bg-white"
                >
                  오늘
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className="rounded-xl border-slate-300 bg-white"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-4 pb-4 pt-5 sm:px-6">
            <div className="grid grid-cols-7 gap-2">
              {weekdayLabels.map((label, index) => (
                <div
                  key={label}
                  className={cn(
                    "px-2 py-3 text-center text-sm font-semibold",
                    index === 0
                      ? "text-rose-500"
                      : index === 6
                        ? "text-blue-600"
                        : "text-slate-600",
                  )}
                >
                  {label}
                </div>
              ))}

              {days.map((day) => {
                const dateKey = toDateInputValue(day);
                const dayTodos = getTodosByDate(dateKey);
                const incompleteCount = dayTodos.filter((todo) => !todo.completed).length;
                const active = isSameDay(day, selectedDate);
                const currentMonthDay = isSameMonth(day, currentMonth);

                return (
                  <button
                    key={dateKey}
                    type="button"
                    onClick={() => setSelectedDate(day)}
                    className={cn(
                      "min-h-28 rounded-2xl border px-3 py-3 text-left transition",
                      currentMonthDay
                        ? "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                        : "border-transparent bg-slate-50 text-slate-400",
                      active && "border-slate-950 bg-slate-950 text-white shadow-lg",
                      isToday(day) && !active && "ring-2 ring-cyan-400/70 ring-offset-2",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{format(day, "d")}</span>
                      {incompleteCount > 0 ? (
                        <span
                          className={cn(
                            "inline-flex min-w-6 items-center justify-center rounded-full px-2 py-1 text-xs font-semibold",
                            active
                              ? "bg-white/15 text-white"
                              : "bg-cyan-100 text-cyan-700",
                          )}
                        >
                          {incompleteCount}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-3 space-y-1.5">
                      {dayTodos.slice(0, 2).map((todo) => (
                        <div
                          key={todo.id}
                          className={cn(
                            "truncate rounded-lg px-2 py-1 text-xs font-medium",
                            active
                              ? todo.completed
                                ? "bg-white/10 text-white/70"
                                : "bg-white/15 text-white"
                              : todo.completed
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-slate-100 text-slate-700",
                          )}
                        >
                          {todo.title}
                        </div>
                      ))}

                      {dayTodos.length > 2 ? (
                        <p
                          className={cn(
                            "px-1 text-xs",
                            active ? "text-white/75" : "text-slate-500",
                          )}
                        >
                          +{dayTodos.length - 2}개 더 있음
                        </p>
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <CardHeader className="border-b border-slate-200 pb-5">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-semibold text-slate-950">
                  선택한 날짜 일정
                </CardTitle>
                <p className="mt-1 text-sm text-slate-500">
                  {format(selectedDate, "yyyy년 M월 d일 EEEE", { locale: ko })}
                </p>
              </div>
              {isToday(selectedDate) ? (
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                  오늘
                </span>
              ) : null}
            </div>
          </CardHeader>

          <CardContent className="space-y-4 px-6 pt-5">
            <div className="rounded-2xl bg-slate-950 px-4 py-4 text-white">
              <div className="flex items-center gap-2 text-cyan-200">
                <CalendarDays className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Agenda
                </span>
              </div>
              <p className="mt-3 text-2xl font-semibold">
                {selectedTodos.length}건 예정
              </p>
              <p className="mt-1 text-sm text-white/75">
                완료 {selectedTodos.filter((todo) => todo.completed).length}건, 미완료{" "}
                {selectedTodos.filter((todo) => !todo.completed).length}건
              </p>
            </div>

            {selectedTodos.length > 0 ? (
              selectedTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={cn(
                    "rounded-2xl border px-4 py-4 transition",
                    todo.completed
                      ? "border-emerald-100 bg-emerald-50"
                      : "border-slate-200 bg-slate-50",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        void toggleTodo(todo.id);
                      }}
                      className="mt-0.5"
                      aria-label={todo.completed ? "미완료로 변경" : "완료로 변경"}
                    >
                      {todo.completed ? (
                        <CheckCircle2 className="size-5 text-emerald-600" />
                      ) : (
                        <Circle className="size-5 text-slate-500" />
                      )}
                    </button>

                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "font-semibold text-slate-950",
                          todo.completed && "text-slate-500 line-through",
                        )}
                      >
                        {todo.title}
                      </p>
                      {todo.description ? (
                        <p
                          className={cn(
                            "mt-1 text-sm leading-6 text-slate-600",
                            todo.completed && "text-slate-400 line-through",
                          )}
                        >
                          {todo.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-slate-100">
                  <CalendarDays className="size-7 text-slate-400" />
                </div>
                <p className="mt-4 text-lg font-semibold text-slate-900">
                  선택한 날짜에 일정이 없습니다.
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  할 일 화면에서 새 일정을 추가하면 이곳에서 바로 확인됩니다.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function CalendarMetric({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <Card className="border-0 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur">
      <CardContent className="px-5 py-5">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="mt-2 text-3xl font-semibold text-slate-950">{value}</p>
        <p className="mt-2 text-sm text-slate-500">{hint}</p>
      </CardContent>
    </Card>
  );
}
