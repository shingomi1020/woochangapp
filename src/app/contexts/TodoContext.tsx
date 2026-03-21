import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { shiftDate, toDateInputValue } from "../lib/date";
import {
  hasSupabaseConfig,
  supabase,
  supabaseTableName,
} from "../lib/supabase";

export interface Todo {
  id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
  createdAt: string;
}

export interface TodoDraft {
  title: string;
  description?: string;
  date: string;
  completed?: boolean;
}

type TodoUpdates = Partial<Omit<TodoDraft, "completed">> & {
  completed?: boolean;
};

export type SyncMode = "loading" | "supabase" | "local";

interface TodoContextType {
  todos: Todo[];
  syncMode: SyncMode;
  syncMessage: string;
  errorMessage: string | null;
  isBusy: boolean;
  reloadTodos: () => Promise<void>;
  addTodo: (todo: TodoDraft) => Promise<void>;
  updateTodo: (id: string, updates: TodoUpdates) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  toggleTodo: (id: string) => Promise<void>;
  getTodosByDate: (date: string) => Todo[];
}

interface TodoRow {
  id: string;
  title: string;
  description: string | null;
  due_date: string;
  completed: boolean;
  created_at: string;
}

const LOCAL_STORAGE_KEY = "todo-calendar-app.todos.v1";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

function mapRowToTodo(row: TodoRow): Todo {
  return {
    id: row.id,
    title: row.title,
    description: row.description ?? "",
    date: row.due_date,
    completed: row.completed,
    createdAt: row.created_at,
  };
}

function sortTodos(items: Todo[]) {
  return [...items].sort((left, right) => {
    const dateCompare = left.date.localeCompare(right.date);
    if (dateCompare !== 0) {
      return dateCompare;
    }

    if (left.completed !== right.completed) {
      return Number(left.completed) - Number(right.completed);
    }

    return left.createdAt.localeCompare(right.createdAt);
  });
}

function createId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  return `todo-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createSeedTodos(): Todo[] {
  const today = new Date();

  return sortTodos([
    {
      id: "seed-1",
      title: "Supabase 프로젝트 준비",
      description: "테이블과 환경 변수를 먼저 연결해 두세요.",
      date: toDateInputValue(today),
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: "seed-2",
      title: "GitHub 저장소 연결",
      description: "원격 저장소를 만들고 현재 폴더를 푸시할 준비를 합니다.",
      date: toDateInputValue(shiftDate(today, 1)),
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: "seed-3",
      title: "이번 주 일정 정리",
      description: "캘린더 화면에서 마감일과 완료 여부를 확인하세요.",
      date: toDateInputValue(shiftDate(today, 3)),
      completed: false,
      createdAt: new Date().toISOString(),
    },
  ]);
}

function sanitizeTodo(input: Partial<Todo>): Todo | null {
  if (
    typeof input.id !== "string" ||
    typeof input.title !== "string" ||
    typeof input.date !== "string" ||
    typeof input.createdAt !== "string"
  ) {
    return null;
  }

  return {
    id: input.id,
    title: input.title,
    description: typeof input.description === "string" ? input.description : "",
    date: input.date,
    completed: Boolean(input.completed),
    createdAt: input.createdAt,
  };
}

function readLocalTodos() {
  if (typeof window === "undefined") {
    return createSeedTodos();
  }

  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) {
    const seed = createSeedTodos();
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seed));
    return seed;
  }

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      throw new Error("Invalid todo payload");
    }

    const normalized = parsed
      .map((item) => sanitizeTodo(item))
      .filter((item): item is Todo => item !== null);

    return sortTodos(normalized);
  } catch {
    const seed = createSeedTodos();
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seed));
    return seed;
  }
}

function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message) {
    return `${fallback}: ${error.message}`;
  }

  return fallback;
}

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [syncMode, setSyncMode] = useState<SyncMode>("loading");
  const [syncMessage, setSyncMessage] = useState("데이터를 불러오는 중입니다.");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);

  const reloadTodos = async () => {
    setIsBusy(true);
    setErrorMessage(null);

    if (supabase) {
      const { data, error } = await supabase
        .from(supabaseTableName)
        .select("id, title, description, due_date, completed, created_at")
        .order("due_date", { ascending: true })
        .order("created_at", { ascending: true });

      if (!error && data) {
        setTodos(sortTodos(data.map((row) => mapRowToTodo(row as TodoRow))));
        setSyncMode("supabase");
        setSyncMessage("Supabase 데이터베이스에 연결되었습니다.");
        setIsBusy(false);
        return;
      }

      if (error) {
        setErrorMessage(`Supabase 로드 실패: ${error.message}`);
      }

      setSyncMessage(
        "Supabase 연결에 실패해 브라우저 로컬 저장소 모드로 전환했습니다.",
      );
    } else {
      setSyncMessage(
        hasSupabaseConfig
          ? "Supabase 연결에 실패해 브라우저 로컬 저장소 모드로 전환했습니다."
          : "Supabase 환경 변수가 없어 브라우저 로컬 저장소 모드로 실행 중입니다.",
      );
    }

    setTodos(readLocalTodos());
    setSyncMode("local");
    setIsBusy(false);
  };

  useEffect(() => {
    void reloadTodos();
  }, []);

  useEffect(() => {
    if (syncMode !== "local" || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [syncMode, todos]);

  const addTodo = async (todo: TodoDraft) => {
    const title = todo.title.trim();
    const description = (todo.description ?? "").trim();

    if (!title) {
      return;
    }

    setIsBusy(true);
    setErrorMessage(null);

    try {
      if (syncMode === "supabase" && supabase) {
        const { data, error } = await supabase
          .from(supabaseTableName)
          .insert({
            title,
            description: description || null,
            due_date: todo.date,
            completed: Boolean(todo.completed),
          })
          .select("id, title, description, due_date, completed, created_at")
          .single();

        if (error || !data) {
          throw error ?? new Error("저장된 일정 응답이 비어 있습니다.");
        }

        setTodos((current) => sortTodos([...current, mapRowToTodo(data as TodoRow)]));
        setSyncMessage("일정이 Supabase에 저장되었습니다.");
        return;
      }

      const newTodo: Todo = {
        id: createId(),
        title,
        description,
        date: todo.date,
        completed: Boolean(todo.completed),
        createdAt: new Date().toISOString(),
      };

      setTodos((current) => sortTodos([...current, newTodo]));
      setSyncMessage("일정이 브라우저 로컬 저장소에 저장되었습니다.");
    } catch (error) {
      setErrorMessage(getErrorMessage(error, "일정 저장에 실패했습니다"));
    } finally {
      setIsBusy(false);
    }
  };

  const updateTodo = async (id: string, updates: TodoUpdates) => {
    setIsBusy(true);
    setErrorMessage(null);

    try {
      if (syncMode === "supabase" && supabase) {
        const payload: Record<string, string | boolean | null> = {};

        if (typeof updates.title === "string") {
          payload.title = updates.title.trim();
        }

        if (typeof updates.description === "string") {
          payload.description = updates.description.trim() || null;
        }

        if (typeof updates.date === "string") {
          payload.due_date = updates.date;
        }

        if (typeof updates.completed === "boolean") {
          payload.completed = updates.completed;
        }

        const { data, error } = await supabase
          .from(supabaseTableName)
          .update(payload)
          .eq("id", id)
          .select("id, title, description, due_date, completed, created_at")
          .single();

        if (error || !data) {
          throw error ?? new Error("수정된 일정 응답이 비어 있습니다.");
        }

        setTodos((current) =>
          sortTodos(
            current.map((todo) =>
              todo.id === id ? mapRowToTodo(data as TodoRow) : todo,
            ),
          ),
        );
        setSyncMessage("일정이 Supabase에서 업데이트되었습니다.");
        return;
      }

      setTodos((current) =>
        sortTodos(
          current.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  title:
                    typeof updates.title === "string"
                      ? updates.title.trim()
                      : todo.title,
                  description:
                    typeof updates.description === "string"
                      ? updates.description.trim()
                      : todo.description,
                  date: updates.date ?? todo.date,
                  completed:
                    typeof updates.completed === "boolean"
                      ? updates.completed
                      : todo.completed,
                }
              : todo,
          ),
        ),
      );
      setSyncMessage("일정이 브라우저 로컬 저장소에서 업데이트되었습니다.");
    } catch (error) {
      setErrorMessage(getErrorMessage(error, "일정 수정에 실패했습니다"));
    } finally {
      setIsBusy(false);
    }
  };

  const deleteTodo = async (id: string) => {
    setIsBusy(true);
    setErrorMessage(null);

    try {
      if (syncMode === "supabase" && supabase) {
        const { error } = await supabase.from(supabaseTableName).delete().eq("id", id);
        if (error) {
          throw error;
        }

        setTodos((current) => current.filter((todo) => todo.id !== id));
        setSyncMessage("일정이 Supabase에서 삭제되었습니다.");
        return;
      }

      setTodos((current) => current.filter((todo) => todo.id !== id));
      setSyncMessage("일정이 브라우저 로컬 저장소에서 삭제되었습니다.");
    } catch (error) {
      setErrorMessage(getErrorMessage(error, "일정 삭제에 실패했습니다"));
    } finally {
      setIsBusy(false);
    }
  };

  const toggleTodo = async (id: string) => {
    const target = todos.find((todo) => todo.id === id);
    if (!target) {
      return;
    }

    await updateTodo(id, { completed: !target.completed });
  };

  const getTodosByDate = (date: string) => {
    return todos
      .filter((todo) => todo.date === date)
      .sort((left, right) =>
        left.createdAt.localeCompare(right.createdAt),
      );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        syncMode,
        syncMessage,
        errorMessage,
        isBusy,
        reloadTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
        getTodosByDate,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }

  return context;
}
