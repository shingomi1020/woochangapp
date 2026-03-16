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
const taskProgressLabel = document.getElementById("taskProgressLabel");
const taskProgressBar = document.getElementById("taskProgressBar");
const toast = document.getElementById("toast");
const filterButtons = document.querySelectorAll("[data-filter]");
const focusTodayBtn = document.getElementById("focusTodayBtn");
const focusInputBtn = document.getElementById("focusInputBtn");
const openEventModalBtn = document.getElementById("openEventModalBtn");
const selectedDateAddBtn = document.getElementById("selectedDateAddBtn");
const eventModal = document.getElementById("eventModal");
const eventModalBackdrop = document.getElementById("eventModalBackdrop");
const closeEventModalBtn = document.getElementById("closeEventModalBtn");
const cancelEventBtn = document.getElementById("cancelEventBtn");
const deleteEventBtn = document.getElementById("deleteEventBtn");
const eventForm = document.getElementById("eventForm");
const eventIdInput = document.getElementById("eventIdInput");
const eventTitleInput = document.getElementById("eventTitleInput");
const eventDateInput = document.getElementById("eventDateInput");
const eventTimeInput = document.getElementById("eventTimeInput");
const eventTagInput = document.getElementById("eventTagInput");
const eventModalTitle = document.getElementById("eventModalTitle");

const text = {
  readyToAdd: "\uc0c8 \uc5c5\ubb34\ub97c \ubc14\ub85c \ucd94\uac00\ud560 \uc218 \uc788\uc5b4\uc694.",
  taskAdded: "\uc5c5\ubb34\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  movedToday: "\uc624\ub298 \uc77c\uc815\uc73c\ub85c \uc774\ub3d9\ud588\uc2b5\ub2c8\ub2e4.",
  taskActive: "\uc5c5\ubb34\uac00 \ub2e4\uc2dc \uc9c4\ud589\uc911 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  taskDone: "\uc5c5\ubb34\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4.",
  taskDeleted: "\uc5c5\ubb34\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  eventAdded: "\uc77c\uc815\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  eventUpdated: "\uc77c\uc815\uc774 \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  eventDeleted: "\uc77c\uc815\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  newEventTitle: "\uc0c8 \uc77c\uc815 \ucd94\uac00",
  editEventTitle: "\uc77c\uc815 \uc218\uc815",
  noEvents:
    "\uc120\ud0dd\ud55c \ub0a0\uc9dc\uc5d0 \ub4f1\ub85d\ub41c \uc77c\uc815\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.<br />\uc5ec\uc720 \uc2dc\uac04\uc5d0 \uc0c8\ub85c\uc6b4 \uc5c5\ubb34\ub97c \uc815\ub9ac\ud574 \ubcf4\uc138\uc694.",
  noDone: "\uc644\ub8cc\ub41c \uc5c5\ubb34\uac00 \uc544\uc9c1 \uc5c6\uc2b5\ub2c8\ub2e4.",
  noTasks:
    "\ud45c\uc2dc\ud560 \ud560 \uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0c8 \uc5c5\ubb34\ub97c \ucd94\uac00\ud574 \ubcf4\uc138\uc694.",
  todayHint: (count) =>
    `\uc624\ub298 \ub4f1\ub85d\ub41c \uc77c\uc815\uc740 ${count}\uac1c\uc785\ub2c8\ub2e4. \uc2dc\uac04\ub300\ubcc4\ub85c \ubc14\ub85c \ud655\uc778\ud574 \ubcf4\uc138\uc694.`,
  selectedHint: (count) =>
    `\uc120\ud0dd\ud55c \ub0a0\uc9dc\uc5d0 \ub4f1\ub85d\ub41c \uc77c\uc815\uc740 ${count}\uac1c\uc785\ub2c8\ub2e4.`,
  countEvents: (count) => `${count} \uc77c\uc815`,
  countDone: (done, total) => `${done} / ${total} \uc644\ub8cc`,
  countDayLabel: (count) => `${count}\uac1c`,
  ariaDay: (date, count) => `${date} \uc77c\uc815 ${count}\uac1c`,
  deleteLabel: "\uc0ad\uc81c",
  activeLabel: "\uc5c5\ubb34 \ubbf8\uc644\ub8cc\ub85c \ubcc0\uacbd",
  doneLabel: "\uc5c5\ubb34 \uc644\ub8cc \ucc98\ub9ac",
  editLabel: "\uc218\uc815",
  tagFallback: "\uae30\ubcf8",
};

const today = new Date();
const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

const state = {
  viewDate: new Date(currentMonth),
  selectedDateKey: formatDateKey(today),
  taskFilter: "all",
  toastTimer: null,
  editingEventId: null,
  tasks: [
    { id: 1, title: "\uc624\uc804 \uc77c\uc815 \ud655\uc778 \ubc0f \uc6b0\uc120\uc21c\uc704 \uc815\ub9ac", done: false, category: "Daily Flow" },
    { id: 2, title: "\uace0\uac1d \ubbf8\ud305 \uc900\ube44 \uc790\ub8cc \uc815\ub9ac", done: false, category: "Meeting" },
    { id: 3, title: "\uc5b4\uc81c \uc644\ub8cc \uc5c5\ubb34 \ud53c\ub4dc\ubc31 \ubc18\uc601", done: true, category: "Review" },
    { id: 4, title: "\uc8fc\uac04 \uc77c\uc815\ud45c \uacf5\uc720", done: false, category: "Team" },
  ],
  events: [
    { id: 101, date: "2026-03-16", time: "09:30", title: "\uc8fc\uac04 \uc5c5\ubb34 \uccb4\ud06c\uc778", tag: "Team Sync" },
    { id: 102, date: "2026-03-16", time: "14:00", title: "\uacac\uc801 \ud504\ub85c\uc138\uc2a4 \uc544\uc774\ub514\uc5b4 \uc815\ub9ac", tag: "Planning" },
    { id: 103, date: "2026-03-17", time: "11:00", title: "\uac70\ub798\ucc98 \ubbf8\ud305", tag: "Client" },
    { id: 104, date: "2026-03-18", time: "16:00", title: "\uce98\ub9b0\ub354 UX \uc810\uac80", tag: "Design" },
    { id: 105, date: "2026-03-20", time: "10:00", title: "\uc8fc\uac04 \uc5c5\ubb34 \ub9c8\uac10 \ud655\uc778", tag: "Review" },
    { id: 106, date: "2026-03-23", time: "13:30", title: "\uc790\ub3d9\uacac\uc801 \uae30\ub2a5 \uad6c\uc870 \ud68c\uc758", tag: "Product" },
    { id: 107, date: "2026-03-27", time: "17:00", title: "\uc6d4\ub9d0 \uc77c\uc815 \uc815\ub9ac", tag: "Ops" },
  ],
};

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
  taskInput.focus();
  showToast(text.readyToAdd);
});

openEventModalBtn.addEventListener("click", () => {
  openEventModal();
});

selectedDateAddBtn.addEventListener("click", () => {
  openEventModal();
});

closeEventModalBtn.addEventListener("click", closeEventModal);
cancelEventBtn.addEventListener("click", closeEventModal);
eventModalBackdrop.addEventListener("click", closeEventModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && eventModal.classList.contains("is-open")) {
    closeEventModal();
  }
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = taskInput.value.trim();

  if (!value) {
    return;
  }

  state.tasks.unshift({
    id: Date.now(),
    title: value,
    done: false,
    category: "New Task",
  });

  taskInput.value = "";
  renderTasks();
  updateMetrics();
  taskInput.focus();
  showToast(text.taskAdded);
});

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const eventData = {
    id: state.editingEventId ?? Date.now(),
    title: eventTitleInput.value.trim(),
    date: eventDateInput.value,
    time: eventTimeInput.value,
    tag: eventTagInput.value.trim() || text.tagFallback,
  };

  if (!eventData.title || !eventData.date || !eventData.time) {
    return;
  }

  if (state.editingEventId) {
    state.events = state.events.map((item) => (item.id === state.editingEventId ? eventData : item));
    showToast(text.eventUpdated);
  } else {
    state.events.push(eventData);
    showToast(text.eventAdded);
  }

  state.selectedDateKey = eventData.date;
  state.viewDate = new Date(`${eventData.date}T00:00:00`);
  state.viewDate = new Date(state.viewDate.getFullYear(), state.viewDate.getMonth(), 1);

  closeEventModal();
  renderAll();
});

deleteEventBtn.addEventListener("click", () => {
  if (!state.editingEventId) {
    return;
  }

  state.events = state.events.filter((item) => item.id !== state.editingEventId);
  closeEventModal();
  renderAll();
  showToast(text.eventDeleted);
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
    const date = new Date(year, month - 1, daysInPrevMonth - index);
    cells.push(createDayConfig(date, true));
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    cells.push(createDayConfig(date, false));
  }

  while (cells.length < 42) {
    const date = new Date(year, month, daysInMonth + (cells.length - (startOffset + daysInMonth)) + 1);
    cells.push(createDayConfig(date, true));
  }

  cells.forEach((cell, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "day-card";
    card.style.animationDelay = `${index * 16}ms`;
    card.classList.toggle("is-outside", cell.isOutside);
    card.classList.toggle("is-selected", cell.dateKey === state.selectedDateKey);
    card.classList.toggle("is-today", cell.dateKey === formatDateKey(today));
    card.setAttribute("aria-label", text.ariaDay(formatLongDate(cell.date), cell.events.length));

    card.innerHTML = `
      <div class="day-top">
        <span class="day-number">${cell.date.getDate()}</span>
        ${cell.events.length ? `<span class="day-count">${text.countDayLabel(cell.events.length)}</span>` : ""}
      </div>
      <div class="day-events">
        ${cell.events
          .slice(0, 2)
          .map((item) => `<span class="mini-event">${item.title}</span>`)
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

  monthEventCount.textContent = state.events.filter((item) => {
    const eventDate = new Date(`${item.date}T00:00:00`);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  }).length;

  updateCalendarHint();
}

function renderSelectedDate() {
  const selectedDate = new Date(`${state.selectedDateKey}T00:00:00`);
  const events = state.events
    .filter((item) => item.date === state.selectedDateKey)
    .sort((a, b) => a.time.localeCompare(b.time));

  selectedDateLabel.textContent = formatLongDate(selectedDate);
  selectedDateCount.textContent = text.countEvents(events.length);
  selectedDaySummary.textContent = `${events.length}`;

  if (!events.length) {
    selectedDateEvents.innerHTML = `
      <div class="empty-state">
        ${text.noEvents}
      </div>
    `;
    return;
  }

  selectedDateEvents.innerHTML = events
    .map(
      (item, index) => `
        <article class="schedule-item" style="animation-delay:${index * 70}ms">
          <div class="schedule-item-head">
            <strong>${item.title}</strong>
            <button class="event-edit-btn" type="button" data-event-id="${item.id}">${text.editLabel}</button>
          </div>
          <div class="schedule-meta">${item.time} / ${item.tag}</div>
        </article>
      `
    )
    .join("");

  selectedDateEvents.querySelectorAll("[data-event-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const eventId = Number(button.dataset.eventId);
      openEventModal(eventId);
    });
  });
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
    const emptyMessage = state.taskFilter === "done" ? text.noDone : text.noTasks;

    taskList.innerHTML = `
      <div class="empty-state">
        ${emptyMessage}
      </div>
    `;
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
            <div class="task-title">${task.title}</div>
            <div class="task-meta">${task.category}</div>
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
        showToast(toggledTask?.done ? text.taskActive : text.taskDone);
      }

      if (action === "remove") {
        state.tasks = state.tasks.filter((task) => task.id !== taskId);
        showToast(text.taskDeleted);
      }

      renderTasks();
      updateMetrics();
    });
  });
}

function updateMetrics() {
  const total = state.tasks.length;
  const completed = state.tasks.filter((task) => task.done).length;
  const remaining = total - completed;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  remainingCount.textContent = `${remaining}`;
  taskProgressLabel.textContent = text.countDone(completed, total);
  taskProgressBar.style.width = `${progress}%`;
}

function updateCalendarHint() {
  const todayEvents = state.events.filter((item) => item.date === formatDateKey(today)).length;
  const selectedEvents = state.events.filter((item) => item.date === state.selectedDateKey).length;

  if (state.selectedDateKey === formatDateKey(today)) {
    calendarHint.textContent = text.todayHint(todayEvents);
    return;
  }

  calendarHint.textContent = text.selectedHint(selectedEvents);
}

function openEventModal(eventId = null) {
  state.editingEventId = eventId;

  if (eventId) {
    const eventItem = state.events.find((item) => item.id === eventId);

    if (!eventItem) {
      return;
    }

    eventModalTitle.textContent = text.editEventTitle;
    eventIdInput.value = String(eventItem.id);
    eventTitleInput.value = eventItem.title;
    eventDateInput.value = eventItem.date;
    eventTimeInput.value = eventItem.time;
    eventTagInput.value = eventItem.tag;
    deleteEventBtn.classList.remove("hidden");
  } else {
    eventModalTitle.textContent = text.newEventTitle;
    eventIdInput.value = "";
    eventTitleInput.value = "";
    eventDateInput.value = state.selectedDateKey;
    eventTimeInput.value = "09:00";
    eventTagInput.value = "";
    deleteEventBtn.classList.add("hidden");
  }

  eventModal.classList.add("is-open");
  eventModal.setAttribute("aria-hidden", "false");
  eventTitleInput.focus();
}

function closeEventModal() {
  state.editingEventId = null;
  eventForm.reset();
  deleteEventBtn.classList.add("hidden");
  eventModal.classList.remove("is-open");
  eventModal.setAttribute("aria-hidden", "true");
}

function focusToday() {
  state.viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
  state.selectedDateKey = formatDateKey(today);
  renderAll();
  showToast(text.movedToday);
}

function createDayConfig(date, isOutside) {
  const dateKey = formatDateKey(date);

  return {
    date,
    dateKey,
    isOutside,
    events: state.events.filter((item) => item.date === dateKey),
  };
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
}

function showToast(message) {
  window.clearTimeout(state.toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");

  state.toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

renderAll();
