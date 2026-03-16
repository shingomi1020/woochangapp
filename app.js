const calendarGrid = document.getElementById("calendarGrid");
const monthLabel = document.getElementById("monthLabel");
const selectedDateLabel = document.getElementById("selectedDateLabel");
const selectedDateCount = document.getElementById("selectedDateCount");
const selectedDateEvents = document.getElementById("selectedDateEvents");
const selectedDaySummary = document.getElementById("selectedDaySummary");
const calendarHint = document.getElementById("calendarHint");
const remainingCount = document.getElementById("remainingCount");
const monthEventCount = document.getElementById("monthEventCount");
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskClientInput = document.getElementById("taskClientInput");
const taskDescriptionInput = document.getElementById("taskDescriptionInput");
const taskReceivedDateInput = document.getElementById("taskReceivedDateInput");
const taskDueDateInput = document.getElementById("taskDueDateInput");
const taskProgressLabel = document.getElementById("taskProgressLabel");
const taskProgressBar = document.getElementById("taskProgressBar");
const toast = document.getElementById("toast");
const filterButtons = document.querySelectorAll("[data-filter]");
const focusTodayBtn = document.getElementById("focusTodayBtn");
const focusInputBtn = document.getElementById("focusInputBtn");

const text = {
  readyToAdd: "\uc0c8 \uc5c5\ubb34\ub97c \ubc14\ub85c \ucd94\uac00\ud560 \uc218 \uc788\uc5b4\uc694.",
  taskAdded: "\uc5c5\ubb34\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub9c8\uac10 \uce98\ub9b0\ub354\uc5d0\ub3c4 \ubc18\uc601\ub429\ub2c8\ub2e4.",
  invalidTaskDate: "\ub9c8\uac10\uc77c\uc740 \uc811\uc218\uc77c\ubcf4\ub2e4 \ube60\ub97c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
  movedToday: "\uc624\ub298 \ub9c8\uac10 \uc5c5\ubb34\ub85c \uc774\ub3d9\ud588\uc2b5\ub2c8\ub2e4.",
  taskActive: "\uc5c5\ubb34\uac00 \ub2e4\uc2dc \uc9c4\ud589\uc911 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  taskDone: "\uc5c5\ubb34\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4.",
  taskDeleted: "\uc5c5\ubb34\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  noTasks:
    "\ud45c\uc2dc\ud560 \ud560 \uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0c8 \uc5c5\ubb34\ub97c \ucd94\uac00\ud574 \ubcf4\uc138\uc694.",
  noDone: "\uc644\ub8cc\ub41c \uc5c5\ubb34\uac00 \uc544\uc9c1 \uc5c6\uc2b5\ub2c8\ub2e4.",
  noCalendarTasks:
    "\uc120\ud0dd\ud55c \ub0a0\uc9dc\uc5d0 \ub9c8\uac10\uc778 \uc5c5\ubb34\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.<br />\ud560 \uc77c\uc744 \ucd94\uac00\ud558\uba74 \uce98\ub9b0\ub354\uc5d0 \uc790\ub3d9\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
  todayHint: (count) =>
    `\uc624\ub298 \ub9c8\uac10 \uc5c5\ubb34\ub294 ${count}\uac1c\uc785\ub2c8\ub2e4. \uc2dc\uae09\ud55c \uc791\uc5c5\ubd80\ud130 \ud655\uc778\ud574 \ubcf4\uc138\uc694.`,
  selectedHint: (count) =>
    `\uc120\ud0dd\ud55c \ub0a0\uc9dc\uc5d0 \ub9c8\uac10\uc778 \uc5c5\ubb34\ub294 ${count}\uac1c\uc785\ub2c8\ub2e4.`,
  countTasks: (count) => `${count} \uac74`,
  countDone: (done, total) => `${done} / ${total} \uc644\ub8cc`,
  countDayLabel: (count) => `${count}\uac1c`,
  ariaDay: (date, count) => `${date} \ub9c8\uac10 \uc5c5\ubb34 ${count}\uac1c`,
  deleteLabel: "\uc0ad\uc81c",
  activeLabel: "\uc5c5\ubb34 \ubbf8\uc644\ub8cc\ub85c \ubcc0\uacbd",
  doneLabel: "\uc5c5\ubb34 \uc644\ub8cc \ucc98\ub9ac",
  taskStatusDone: "\uc644\ub8cc",
  taskStatusTodo: "\uc9c4\ud589\uc911",
};

const STORAGE_KEYS = {
  tasks: "flowboard.tasks",
};

const today = new Date();
const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

const state = {
  viewDate: new Date(currentMonth),
  selectedDateKey: formatDateKey(today),
  taskFilter: "all",
  toastTimer: null,
  tasks: [
    {
      id: 1,
      title: "\uc624\uc804 \uc77c\uc815 \ud655\uc778 \ubc0f \uc6b0\uc120\uc21c\uc704 \uc815\ub9ac",
      done: false,
      category: "Daily Flow",
      client: "\ub0b4\ubd80 \uc6b4\uc601",
      description: "\uae08\uc77c \uc9c4\ud589\ud560 \uc5c5\ubb34 \uc21c\uc11c\ub97c \uc815\ub9ac\ud558\uace0 \uc6b0\uc120\uc21c\uc704\ub97c \ud655\uc815\ud569\ub2c8\ub2e4.",
      receivedDate: formatDateKey(today),
      dueDate: formatDateKey(today),
    },
    {
      id: 2,
      title: "\uace0\uac1d \ubbf8\ud305 \uc900\ube44 \uc790\ub8cc \uc815\ub9ac",
      done: false,
      category: "Meeting",
      client: "\uc6b0\ucc3d\ud2b8\ub808\uc774\ub529",
      description: "\ubbf8\ud305\uc6a9 \uc81c\uc548\uc11c\uc640 \uc608\uc0c1 \ubb38\uc758 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud569\ub2c8\ub2e4.",
      receivedDate: formatDateKey(today),
      dueDate: addDaysToDateKey(today, 2),
    },
    {
      id: 3,
      title: "\uc5b4\uc81c \uc644\ub8cc \uc5c5\ubb34 \ud53c\ub4dc\ubc31 \ubc18\uc601",
      done: true,
      category: "Review",
      client: "\ube14\ub8e8\uc2a4\ud018\uc5b4",
      description: "\uc804\ub2ec\ubc1b\uc740 \ud53c\ub4dc\ubc31\uc744 \ubc18\uc601\ud558\uc5ec \uc5c5\ubb34 \ubb38\uc11c\ub97c \uc218\uc815\ud569\ub2c8\ub2e4.",
      receivedDate: addDaysToDateKey(today, -1),
      dueDate: formatDateKey(today),
    },
    {
      id: 4,
      title: "\uc8fc\uac04 \uc77c\uc815\ud45c \uacf5\uc720",
      done: false,
      category: "Team",
      client: "\ub0b4\ubd80 \uc6b4\uc601",
      description: "\ud300\uc6d0\uc5d0\uac8c \uc8fc\uac04 \uc77c\uc815\uacfc \ub9c8\uac10 \uc77c\uc815\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4.",
      receivedDate: formatDateKey(today),
      dueDate: addDaysToDateKey(today, 4),
    },
  ],
};

loadStoredTasks();

document.getElementById("prevMonthBtn").addEventListener("click", () => {
  state.viewDate = new Date(state.viewDate.getFullYear(), state.viewDate.getMonth() - 1, 1);
  renderCalendar();
});

document.getElementById("nextMonthBtn").addEventListener("click", () => {
  state.viewDate = new Date(state.viewDate.getFullYear(), state.viewDate.getMonth() + 1, 1);
  renderCalendar();
});

document.getElementById("todayBtn").addEventListener("click", () => {
  focusToday();
});

focusTodayBtn.addEventListener("click", () => {
  focusToday();
  document.querySelector(".panel-calendar").scrollIntoView({ behavior: "smooth", block: "start" });
});

focusInputBtn.addEventListener("click", () => {
  taskClientInput.focus();
  showToast(text.readyToAdd);
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = taskInput.value.trim();
  const client = taskClientInput.value.trim();
  const description = taskDescriptionInput.value.trim();
  const receivedDate = taskReceivedDateInput.value;
  const dueDate = taskDueDateInput.value;

  if (!value || !client || !description || !receivedDate || !dueDate) {
    return;
  }

  if (dueDate < receivedDate) {
    showToast(text.invalidTaskDate);
    return;
  }

  state.tasks.unshift({
    id: Date.now(),
    title: value,
    done: false,
    category: "New Task",
    client,
    description,
    receivedDate,
    dueDate,
  });

  persistTasks();
  taskForm.reset();
  taskReceivedDateInput.value = formatDateKey(today);
  taskDueDateInput.value = formatDateKey(today);
  state.selectedDateKey = dueDate;
  state.viewDate = new Date(new Date(`${dueDate}T00:00:00`).getFullYear(), new Date(`${dueDate}T00:00:00`).getMonth(), 1);
  renderAll();
  taskClientInput.focus();
  showToast(text.taskAdded);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.taskFilter = button.dataset.filter;
    filterButtons.forEach((chip) => chip.classList.toggle("active", chip === button));
    renderTasks();
  });
});

function renderAll() {
  renderCalendar();
  renderSelectedDate();
  renderTasks();
  updateMetrics();
}

function renderCalendar() {
  const year = state.viewDate.getFullYear();
  const month = state.viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  monthLabel.textContent = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
  }).format(state.viewDate);
  calendarGrid.innerHTML = "";

  const cells = [];

  for (let index = startOffset - 1; index >= 0; index -= 1) {
    cells.push(createDayConfig(new Date(year, month - 1, daysInPrevMonth - index), true));
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(createDayConfig(new Date(year, month, day), false));
  }

  while (cells.length < 42) {
    cells.push(createDayConfig(new Date(year, month, daysInMonth + (cells.length - (startOffset + daysInMonth)) + 1), true));
  }

  cells.forEach((cell, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "day-card";
    card.style.animationDelay = `${index * 16}ms`;
    card.classList.toggle("is-outside", cell.isOutside);
    card.classList.toggle("is-selected", cell.dateKey === state.selectedDateKey);
    card.classList.toggle("is-today", cell.dateKey === formatDateKey(today));
    card.setAttribute("aria-label", text.ariaDay(formatLongDate(cell.date), cell.tasks.length));

    card.innerHTML = `
      <div class="day-top">
        <span class="day-number">${cell.date.getDate()}</span>
        ${cell.tasks.length ? `<span class="day-count">${text.countDayLabel(cell.tasks.length)}</span>` : ""}
      </div>
      <div class="day-events">
        ${cell.tasks
          .slice(0, 2)
          .map((task) => `<span class="mini-event">${task.title}</span>`)
          .join("")}
      </div>
    `;

    card.addEventListener("click", () => {
      state.selectedDateKey = cell.dateKey;
      if (cell.date.getMonth() !== state.viewDate.getMonth()) {
        state.viewDate = new Date(cell.date.getFullYear(), cell.date.getMonth(), 1);
      }
      renderCalendar();
      renderSelectedDate();
    });

    calendarGrid.appendChild(card);
  });

  monthEventCount.textContent = state.tasks.filter((task) => {
    const dueDate = new Date(`${task.dueDate}T00:00:00`);
    return dueDate.getFullYear() === year && dueDate.getMonth() === month;
  }).length;

  updateCalendarHint();
}

function renderSelectedDate() {
  const selectedDate = new Date(`${state.selectedDateKey}T00:00:00`);
  const tasks = getTasksByDate(state.selectedDateKey);

  selectedDateLabel.textContent = formatLongDate(selectedDate);
  selectedDateCount.textContent = text.countTasks(tasks.length);
  selectedDaySummary.textContent = `${tasks.length}`;

  if (!tasks.length) {
    selectedDateEvents.innerHTML = `<div class="empty-state">${text.noCalendarTasks}</div>`;
    return;
  }

  selectedDateEvents.innerHTML = tasks
    .map(
      (task, index) => `
        <article class="schedule-item" style="animation-delay:${index * 70}ms">
          <div class="schedule-item-head">
            <strong>${task.title}</strong>
            <span class="day-count">${task.done ? text.taskStatusDone : text.taskStatusTodo}</span>
          </div>
          <div class="schedule-meta">${task.client} / ${task.description}</div>
        </article>
      `
    )
    .join("");
}

function renderTasks() {
  const filteredTasks = state.tasks.filter((task) => {
    if (state.taskFilter === "todo") {
      return !task.done;
    }
    if (state.taskFilter === "done") {
      return task.done;
    }
    return true;
  });

  if (!filteredTasks.length) {
    taskList.innerHTML = `<div class="empty-state">${state.taskFilter === "done" ? text.noDone : text.noTasks}</div>`;
    return;
  }

  taskList.innerHTML = filteredTasks
    .map(
      (task, index) => `
        <article class="task-item ${task.done ? "is-done" : ""}" style="animation-delay:${index * 80}ms">
          <button
            class="check-btn"
            type="button"
            data-action="toggle"
            data-id="${task.id}"
            aria-label="${task.done ? text.activeLabel : text.doneLabel}"
          ></button>
          <div class="task-content">
            <div class="task-client">${task.client ?? task.category}</div>
            <div class="task-title">${task.title}</div>
            <div class="task-meta">${task.category}</div>
            <div class="task-description">${task.description ?? ""}</div>
            <div class="task-dates">
              <span class="task-date-chip">\uc811\uc218\uc77c ${formatDisplayDate(task.receivedDate)}</span>
              <span class="task-date-chip">\ub9c8\uac10\uc77c ${formatDisplayDate(task.dueDate)}</span>
            </div>
          </div>
          <button class="remove-btn" type="button" data-action="remove" data-id="${task.id}">${text.deleteLabel}</button>
        </article>
      `
    )
    .join("");

  taskList.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const taskId = Number(button.dataset.id);
      const action = button.dataset.action;

      if (action === "toggle") {
        const toggledTask = state.tasks.find((task) => task.id === taskId);
        state.tasks = state.tasks.map((task) => (task.id === taskId ? { ...task, done: !task.done } : task));
        persistTasks();
        showToast(toggledTask?.done ? text.taskActive : text.taskDone);
      }

      if (action === "remove") {
        state.tasks = state.tasks.filter((task) => task.id !== taskId);
        persistTasks();
        showToast(text.taskDeleted);
      }

      renderAll();
    });
  });
}

function updateMetrics() {
  const total = state.tasks.length;
  const completed = state.tasks.filter((task) => task.done).length;
  remainingCount.textContent = `${total - completed}`;
  taskProgressLabel.textContent = text.countDone(completed, total);
  taskProgressBar.style.width = `${total ? Math.round((completed / total) * 100) : 0}%`;
}

function updateCalendarHint() {
  const todayTasks = getTasksByDate(formatDateKey(today)).length;
  const selectedTasks = getTasksByDate(state.selectedDateKey).length;

  calendarHint.textContent =
    state.selectedDateKey === formatDateKey(today) ? text.todayHint(todayTasks) : text.selectedHint(selectedTasks);
}

function getTasksByDate(dateKey) {
  return state.tasks
    .filter((task) => task.dueDate === dateKey)
    .sort((a, b) => Number(a.done) - Number(b.done) || a.title.localeCompare(b.title, "ko"));
}

function createDayConfig(date, isOutside) {
  const dateKey = formatDateKey(date);
  return {
    date,
    dateKey,
    isOutside,
    tasks: getTasksByDate(dateKey),
  };
}

function loadStoredTasks() {
  try {
    const storedTasks = window.localStorage.getItem(STORAGE_KEYS.tasks);
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      if (Array.isArray(parsedTasks)) {
        state.tasks = parsedTasks;
      }
    }
  } catch (error) {
    console.error("Failed to load local tasks:", error);
  }
}

function persistTasks() {
  try {
    window.localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(state.tasks));
  } catch (error) {
    console.error("Failed to save tasks:", error);
  }
}

function focusToday() {
  state.viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
  state.selectedDateKey = formatDateKey(today);
  renderAll();
  showToast(text.movedToday);
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDaysToDateKey(date, days) {
  const value = new Date(date);
  value.setDate(value.getDate() + days);
  return formatDateKey(value);
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
}

function formatDisplayDate(dateKey) {
  if (!dateKey) {
    return "-";
  }
  return new Intl.DateTimeFormat("ko-KR", {
    month: "numeric",
    day: "numeric",
  }).format(new Date(`${dateKey}T00:00:00`));
}

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  state.toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

taskReceivedDateInput.value = formatDateKey(today);
taskDueDateInput.value = formatDateKey(today);

renderAll();
