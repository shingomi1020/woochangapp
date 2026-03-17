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
const taskStatusInput = document.getElementById("taskStatusInput");
const taskPriorityInput = document.getElementById("taskPriorityInput");
const taskSubmitBtn = document.getElementById("taskSubmitBtn");
const taskCancelBtn = document.getElementById("taskCancelBtn");
const clientFilterSelect = document.getElementById("clientFilterSelect");
const editModal = document.getElementById("editModal");
const editModalBackdrop = document.getElementById("editModalBackdrop");
const editModalCloseBtn = document.getElementById("editModalCloseBtn");
const editModalTitle = document.getElementById("editModalTitle");
const editModalSubtitle = document.getElementById("editModalSubtitle");
const editTaskForm = document.getElementById("editTaskForm");
const editTaskClientInput = document.getElementById("editTaskClientInput");
const editTaskInput = document.getElementById("editTaskInput");
const editTaskDescriptionInput = document.getElementById("editTaskDescriptionInput");
const editTaskReceivedDateInput = document.getElementById("editTaskReceivedDateInput");
const editTaskDueDateInput = document.getElementById("editTaskDueDateInput");
const editTaskStatusInput = document.getElementById("editTaskStatusInput");
const editTaskPriorityInput = document.getElementById("editTaskPriorityInput");
const editTaskCancelBtn = document.getElementById("editTaskCancelBtn");
const taskProgressLabel = document.getElementById("taskProgressLabel");
const taskProgressBar = document.getElementById("taskProgressBar");
const toast = document.getElementById("toast");
const connectionBadge = document.getElementById("connectionBadge");
const connectionMessage = document.getElementById("connectionMessage");
const filterButtons = document.querySelectorAll("[data-filter]");
const focusTodayBtn = document.getElementById("focusTodayBtn");
const focusInputBtn = document.getElementById("focusInputBtn");
const pageHero = document.querySelector(".hero");
const workspaceTabs = document.querySelectorAll("[data-view]");
const pageViews = document.querySelectorAll(".app-view");
const tasksView = document.getElementById("tasksView");
const hrView = document.getElementById("hrView");
const employeeCount = document.getElementById("employeeCount");
const attendanceTodayCount = document.getElementById("attendanceTodayCount");
const monthlyOvertimeHours = document.getElementById("monthlyOvertimeHours");
const employeeForm = document.getElementById("employeeForm");
const employeeNameInput = document.getElementById("employeeNameInput");
const employeeTypeInput = document.getElementById("employeeTypeInput");
const employeeBaseSalaryInput = document.getElementById("employeeBaseSalaryInput");
const employeeOvertimeRateInput = document.getElementById("employeeOvertimeRateInput");
const employeeWeekendRateInput = document.getElementById("employeeWeekendRateInput");
const employeeList = document.getElementById("employeeList");
const payrollMonthInput = document.getElementById("payrollMonthInput");
const payrollSummaryList = document.getElementById("payrollSummaryList");
const attendanceForm = document.getElementById("attendanceForm");
const attendanceEmployeeSelect = document.getElementById("attendanceEmployeeSelect");
const attendanceDateInput = document.getElementById("attendanceDateInput");
const attendanceClockInInput = document.getElementById("attendanceClockInInput");
const attendanceClockOutInput = document.getElementById("attendanceClockOutInput");
const attendanceList = document.getElementById("attendanceList");
const attendanceMonthFilterInput = document.getElementById("attendanceMonthFilterInput");
const attendanceEmployeeFilterSelect = document.getElementById("attendanceEmployeeFilterSelect");
const attendanceStatusFilterSelect = document.getElementById("attendanceStatusFilterSelect");
const monthlyPayrollTotal = document.getElementById("monthlyPayrollTotal");
const employeeModal = document.getElementById("employeeModal");
const employeeModalBackdrop = document.getElementById("employeeModalBackdrop");
const employeeModalCloseBtn = document.getElementById("employeeModalCloseBtn");
const employeeModalTitle = document.getElementById("employeeModalTitle");
const employeeModalSubtitle = document.getElementById("employeeModalSubtitle");
const editEmployeeForm = document.getElementById("editEmployeeForm");
const editEmployeeNameInput = document.getElementById("editEmployeeNameInput");
const editEmployeeTypeInput = document.getElementById("editEmployeeTypeInput");
const editEmployeeBaseSalaryInput = document.getElementById("editEmployeeBaseSalaryInput");
const editEmployeeOvertimeRateInput = document.getElementById("editEmployeeOvertimeRateInput");
const editEmployeeWeekendRateInput = document.getElementById("editEmployeeWeekendRateInput");
const editEmployeeDeleteBtn = document.getElementById("editEmployeeDeleteBtn");
const attendanceModal = document.getElementById("attendanceModal");
const attendanceModalBackdrop = document.getElementById("attendanceModalBackdrop");
const attendanceModalCloseBtn = document.getElementById("attendanceModalCloseBtn");
const attendanceModalTitle = document.getElementById("attendanceModalTitle");
const attendanceModalSubtitle = document.getElementById("attendanceModalSubtitle");
const editAttendanceForm = document.getElementById("editAttendanceForm");
const editAttendanceEmployeeSelect = document.getElementById("editAttendanceEmployeeSelect");
const editAttendanceDateInput = document.getElementById("editAttendanceDateInput");
const editAttendanceClockInInput = document.getElementById("editAttendanceClockInInput");
const editAttendanceClockOutInput = document.getElementById("editAttendanceClockOutInput");
const editAttendanceDeleteBtn = document.getElementById("editAttendanceDeleteBtn");

const supabaseUrl = "https://nmnycqaufrpcgdanmpsj.supabase.co";
const supabaseKey = "sb_publishable_a_WFRivMBscLCg-IPkFcZA_LqpStADT";

const text = {
  booting: "\uc571 \uc2e4\ud589\uc744 \uc2dc\uc791\ud558\ub294 \uc911\uc785\ub2c8\ub2e4.",
  readyToAdd: "\uc0c8 \uc5c5\ubb34\ub97c \ubc14\ub85c \ucd94\uac00\ud560 \uc218 \uc788\uc5b4\uc694.",
  taskAdded: "\uc5c5\ubb34\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub9c8\uac10 \uce98\ub9b0\ub354\uc5d0\ub3c4 \ubc18\uc601\ub429\ub2c8\ub2e4.",
  taskUpdated: "\uc5c5\ubb34 \uc815\ubcf4\ub97c \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4.",
  invalidTaskDate: "\ub9c8\uac10\uc77c\uc740 \uc811\uc218\uc77c\ubcf4\ub2e4 \ube60\ub97c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
  movedToday: "\uc624\ub298 \ub9c8\uac10 \uc5c5\ubb34\ub85c \uc774\ub3d9\ud588\uc2b5\ub2c8\ub2e4.",
  taskActive: "\uc5c5\ubb34\uac00 \ub2e4\uc2dc \uc9c4\ud589\uc911 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  taskDone: "\uc5c5\ubb34\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4.",
  taskDeleted: "\uc5c5\ubb34\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
  loadingTasks: "\uc5c5\ubb34 \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4.",
  syncError: "\ub370\uc774\ud130 \uc5f0\uacb0\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
  connectionChecking: "Supabase \uc5f0\uacb0 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\ub294 \uc911\uc785\ub2c8\ub2e4.",
  connectionReady: "Supabase \uc5f0\uacb0\uc740 \uc815\uc0c1\uc785\ub2c8\ub2e4. \ub2e4\ub978 \uc7a5\uce58\uc5d0\uc11c\ub3c4 \uac19\uc740 \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc62c \uc218 \uc788\uc5b4\uc694.",
  connectionErrorPrefix: "Supabase \uc5f0\uacb0 \uc2e4\ud328:",
  timeoutError: "Supabase \uc751\ub2f5\uc774 \uc9c0\uc5f0\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc \ub610\ub294 \ube0c\ub77c\uc6b0\uc800 \ucc28\ub2e8 \ud655\uc7a5 \ud504\ub85c\uadf8\ub7a8\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
  runtimeErrorPrefix: "\ub7f0\ud0c0\uc784 \uc624\ub958:",
  noTasks:
    "\ud45c\uc2dc\ud560 \ud560 \uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0c8 \uc5c5\ubb34\ub97c \ucd94\uac00\ud574 \ubcf4\uc138\uc694.",
  noClientTasks: "\uc120\ud0dd\ud55c \uac70\ub798\ucc98\uc5d0 \ud574\ub2f9\ud558\ub294 \uc5c5\ubb34\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
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
  editLabel: "\uc218\uc815",
  cancelEditLabel: "\uc218\uc815 \ucde8\uc18c",
  submitCreateLabel: "\ucd94\uac00",
  submitEditLabel: "\uc218\uc815 \uc800\uc7a5",
  activeLabel: "\uc5c5\ubb34 \ubbf8\uc644\ub8cc\ub85c \ubcc0\uacbd",
  doneLabel: "\uc5c5\ubb34 \uc644\ub8cc \ucc98\ub9ac",
  taskStatusDone: "\uc644\ub8cc",
  taskStatusTodo: "\uc9c4\ud589\uc911",
  taskStatusPaused: "\ubcf4\ub958",
  priorityHigh: "\uae34\uae09",
  priorityMedium: "\ubcf4\ud1b5",
  priorityLow: "\ub0ae\uc74c",
  clientFilterAll: "\uc804\uccb4 \uac70\ub798\ucc98",
};

const today = new Date();
const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

const state = {
  viewDate: new Date(currentMonth),
  selectedDateKey: formatDateKey(today),
  taskFilter: "all",
  clientFilter: "all",
  currentView: "tasks",
  editingTaskId: null,
  toastTimer: null,
  isLoading: true,
  tasks: [],
  employees: [],
  attendanceRecords: [],
  editingEmployeeId: null,
  editingAttendanceId: null,
  payrollMonth: formatDateKey(today).slice(0, 7),
  attendanceMonthFilter: formatDateKey(today).slice(0, 7),
  attendanceEmployeeFilter: "all",
  attendanceStatusFilter: "all",
};

setConnectionState("checking", text.booting);

window.addEventListener("error", (event) => {
  const detail = event.message || "\uc54c \uc218 \uc5c6\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc624\ub958";
  setConnectionState("error", `${text.runtimeErrorPrefix} ${detail}`);
});

window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason;
  const detail = reason?.message || String(reason) || "\uc54c \uc218 \uc5c6\ub294 \ube44\ub3d9\uae30 \uc624\ub958";
  setConnectionState("error", `${text.runtimeErrorPrefix} ${detail}`);
});

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
  clearEditingState();
  switchView("tasks");
  taskClientInput.focus();
  showToast(text.readyToAdd);
});

workspaceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    switchView(tab.dataset.view);
  });
});

window.addEventListener("hashchange", () => {
  const nextView = window.location.hash.replace("#", "") || "tasks";
  if (["tasks", "hr", "estimate", "statement", "payroll"].includes(nextView)) {
    switchView(nextView, false);
  }
});

taskForm.addEventListener("submit", async (event) => {
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

  const isEditing = state.editingTaskId !== null;
  const payload = {
    title: value,
    client,
    description,
    received_date: receivedDate,
    due_date: dueDate,
    status: taskStatusInput.value,
    priority: taskPriorityInput.value,
  };

  let { data, error } = await requestTasks(
    isEditing ? `/rest/v1/tasks?id=eq.${state.editingTaskId}` : "/rest/v1/tasks",
    {
      method: isEditing ? "PATCH" : "POST",
      headers: {
        Prefer: "return=representation",
      },
      body: JSON.stringify(
        isEditing
          ? payload
          : {
              ...payload,
              done: taskStatusInput.value === "done",
              category: "\uc77c\ubc18 \uc5c5\ubb34",
            }
      ),
    }
  );

  if (error && shouldRetryWithoutPriority(error)) {
    ({ data, error } = await requestTasks(
      isEditing ? `/rest/v1/tasks?id=eq.${state.editingTaskId}` : "/rest/v1/tasks",
      {
        method: isEditing ? "PATCH" : "POST",
        headers: {
          Prefer: "return=representation",
        },
        body: JSON.stringify(
          isEditing
            ? { ...payload, priority: undefined }
            : {
                ...payload,
                priority: undefined,
                done: taskStatusInput.value === "done",
                category: "\uc77c\ubc18 \uc5c5\ubb34",
              }
        ),
      }
    ));
  }

  if (error) {
    handleSupabaseError(isEditing ? "Failed to update task:" : "Failed to insert task:", error);
    return;
  }

  const savedTask = mapTaskRecord(Array.isArray(data) ? data[0] : data);

  if (isEditing) {
    state.tasks = state.tasks.map((task) => (task.id === savedTask.id ? savedTask : task));
  } else {
    state.tasks.unshift(savedTask);
  }

  taskForm.reset();
  clearEditingState();
  taskReceivedDateInput.value = formatDateKey(today);
  taskDueDateInput.value = formatDateKey(today);
  state.selectedDateKey = dueDate;
  state.viewDate = new Date(new Date(`${dueDate}T00:00:00`).getFullYear(), new Date(`${dueDate}T00:00:00`).getMonth(), 1);
  renderAll();
  taskClientInput.focus();
  showToast(isEditing ? text.taskUpdated : text.taskAdded);
});

taskCancelBtn.addEventListener("click", () => {
  taskForm.reset();
  clearEditingState();
  taskReceivedDateInput.value = formatDateKey(today);
  taskDueDateInput.value = formatDateKey(today);
  taskClientInput.focus();
  showToast(text.cancelEditLabel);
});

editTaskForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (state.editingTaskId === null) {
    return;
  }

  const value = editTaskInput.value.trim();
  const client = editTaskClientInput.value.trim();
  const description = editTaskDescriptionInput.value.trim();
  const receivedDate = editTaskReceivedDateInput.value;
  const dueDate = editTaskDueDateInput.value;

  if (!value || !client || !description || !receivedDate || !dueDate) {
    return;
  }

  if (dueDate < receivedDate) {
    showToast(text.invalidTaskDate);
    return;
  }

  const payload = {
    title: value,
    client,
    description,
    received_date: receivedDate,
    due_date: dueDate,
    status: editTaskStatusInput.value,
    priority: editTaskPriorityInput.value,
  };

  let { data, error } = await requestTasks(`/rest/v1/tasks?id=eq.${state.editingTaskId}`, {
    method: "PATCH",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });

  if (error && shouldRetryWithoutPriority(error)) {
    ({ data, error } = await requestTasks(`/rest/v1/tasks?id=eq.${state.editingTaskId}`, {
      method: "PATCH",
      headers: {
        Prefer: "return=representation",
      },
      body: JSON.stringify({ ...payload, priority: undefined }),
    }));
  }

  if (error) {
    handleSupabaseError("Failed to update task:", error);
    return;
  }

  const savedTask = mapTaskRecord(Array.isArray(data) ? data[0] : data);
  state.tasks = state.tasks.map((task) => (task.id === savedTask.id ? savedTask : task));
  state.selectedDateKey = savedTask.dueDate;
  state.viewDate = new Date(new Date(`${savedTask.dueDate}T00:00:00`).getFullYear(), new Date(`${savedTask.dueDate}T00:00:00`).getMonth(), 1);
  closeEditModal();
  renderAll();
  showToast(text.taskUpdated);
});

editTaskCancelBtn.addEventListener("click", () => {
  closeEditModal();
  showToast(text.cancelEditLabel);
});

editModalCloseBtn.addEventListener("click", () => {
  closeEditModal();
});

editModalBackdrop.addEventListener("click", () => {
  closeEditModal();
});

attendanceModalCloseBtn.addEventListener("click", () => {
  closeAttendanceModal();
});

attendanceModalBackdrop.addEventListener("click", () => {
  closeAttendanceModal();
});

employeeModalCloseBtn.addEventListener("click", () => {
  closeEmployeeModal();
});

employeeModalBackdrop.addEventListener("click", () => {
  closeEmployeeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !editModal.hidden) {
    closeEditModal();
  }
  if (event.key === "Escape" && !attendanceModal.hidden) {
    closeAttendanceModal();
  }
  if (event.key === "Escape" && !employeeModal.hidden) {
    closeEmployeeModal();
  }
});

employeeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = employeeNameInput.value.trim();
  const employmentType = employeeTypeInput.value;
  const baseSalary = Number(employeeBaseSalaryInput.value || 0);
  const overtimeRate = Number(employeeOvertimeRateInput.value || 0);
  const weekendRate = Number(employeeWeekendRateInput.value || 0);

  if (!name || baseSalary < 0 || overtimeRate < 0 || weekendRate < 0) {
    return;
  }

  state.employees.unshift({
    id: `emp-${Date.now()}`,
    name,
    employmentType,
    baseSalary,
    overtimeRate,
    weekendRate,
    createdAt: new Date().toISOString(),
  });

  employeeForm.reset();
  employeeTypeInput.value = "insured";
  saveHrState();
  renderHrWorkspace();
  showToast(`${name} 직원을 등록했습니다.`);
});

attendanceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const employeeId = attendanceEmployeeSelect.value;
  const workDate = attendanceDateInput.value;
  const clockIn = attendanceClockInInput.value;
  const clockOut = attendanceClockOutInput.value;

  if (!employeeId || !workDate || !clockIn || !clockOut || clockOut <= clockIn) {
    return;
  }

  state.attendanceRecords.unshift({
    id: `att-${Date.now()}`,
    employeeId,
    workDate,
    clockIn,
    clockOut,
    createdAt: new Date().toISOString(),
  });

  attendanceForm.reset();
  attendanceDateInput.value = formatDateKey(today);
  attendanceClockInInput.value = "09:00";
  attendanceClockOutInput.value = "18:00";
  saveHrState();
  renderHrWorkspace();
  showToast("출퇴근 기록을 저장했습니다.");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.taskFilter = button.dataset.filter;
    filterButtons.forEach((chip) => chip.classList.toggle("active", chip === button));
    renderTasks();
  });
});

clientFilterSelect.addEventListener("change", () => {
  state.clientFilter = clientFilterSelect.value;
  renderTasks();
});

attendanceMonthFilterInput.addEventListener("change", () => {
  state.attendanceMonthFilter = attendanceMonthFilterInput.value || formatDateKey(today).slice(0, 7);
  renderAttendanceList();
});

attendanceEmployeeFilterSelect.addEventListener("change", () => {
  state.attendanceEmployeeFilter = attendanceEmployeeFilterSelect.value;
  renderAttendanceList();
});

attendanceStatusFilterSelect.addEventListener("change", () => {
  state.attendanceStatusFilter = attendanceStatusFilterSelect.value;
  renderAttendanceList();
});

payrollMonthInput.addEventListener("change", () => {
  state.payrollMonth = payrollMonthInput.value || formatDateKey(today).slice(0, 7);
  renderPayrollSummary();
});

function renderAll() {
  renderCalendar();
  renderSelectedDate();
  renderTasks();
  updateMetrics();
  renderClientFilterOptions();
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
        <article class="schedule-item schedule-item-detail priority-${task.priority}" style="animation-delay:${index * 70}ms">
          <div class="schedule-item-head">
            <strong>${task.title}</strong>
            <span class="day-count">${getStatusLabel(task.status)}</span>
          </div>
          <div class="schedule-meta">${task.client} / ${task.description}</div>
          <div class="schedule-detail-row">
            <span class="task-date-chip">${getPriorityLabel(task.priority)}</span>
            <span class="task-date-chip">${isOverdue(task) ? "\ub9c8\uac10 \uc9c0\uc5f0" : isTodayTask(task) ? "\uc624\ub298 \ub9c8\uac10" : "\ub9c8\uac10 \uc608\uc815"}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTasks() {
  if (state.isLoading) {
    taskList.innerHTML = `<div class="empty-state">${text.loadingTasks}</div>`;
    return;
  }

  const filteredTasks = getVisibleTasks();

  if (!filteredTasks.length) {
    const message =
      state.clientFilter !== "all"
        ? text.noClientTasks
        : state.taskFilter === "done"
          ? text.noDone
          : text.noTasks;
    taskList.innerHTML = `<div class="empty-state">${message}</div>`;
    return;
  }

  taskList.innerHTML = filteredTasks
    .map(
      (task, index) => `
        <article class="task-item ${task.done ? "is-done" : ""} priority-${task.priority} ${isOverdue(task) ? "is-overdue" : ""} ${isTodayTask(task) ? "is-today-deadline" : ""}" style="animation-delay:${index * 80}ms">
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
            <div class="task-meta">${getStatusLabel(task.status)} · ${getPriorityLabel(task.priority)} · ${task.category}</div>
            <div class="task-description">${task.description ?? ""}</div>
            <div class="task-inline-controls">
              <div class="task-choice-group" aria-label="진행 상태 선택">
                ${renderChoiceButton("status", task, "todo", getStatusLabel("todo"))}
                ${renderChoiceButton("status", task, "paused", getStatusLabel("paused"))}
                ${renderChoiceButton("status", task, "done", getStatusLabel("done"))}
              </div>
              <div class="task-choice-group" aria-label="중요도 선택">
                ${renderChoiceButton("priority", task, "high", getPriorityLabel("high"))}
                ${renderChoiceButton("priority", task, "medium", getPriorityLabel("medium"))}
                ${renderChoiceButton("priority", task, "low", getPriorityLabel("low"))}
              </div>
            </div>
            <div class="task-dates">
              <span class="task-date-chip">\uc811\uc218\uc77c ${formatDisplayDate(task.receivedDate)}</span>
              <span class="task-date-chip">\ub9c8\uac10\uc77c ${formatDisplayDate(task.dueDate)}</span>
              ${isOverdue(task) ? `<span class="task-date-chip task-date-chip-alert">\ub9c8\uac10 \uc9c0\uc5f0</span>` : ""}
              ${isTodayTask(task) ? `<span class="task-date-chip task-date-chip-today">\uc624\ub298 \ub9c8\uac10</span>` : ""}
            </div>
          </div>
          <div class="task-actions">
            <button class="edit-btn" type="button" data-action="edit" data-id="${task.id}">${text.editLabel}</button>
            <button class="remove-btn" type="button" data-action="remove" data-id="${task.id}">${text.deleteLabel}</button>
          </div>
        </article>
      `
    )
    .join("");

  taskList.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const taskId = Number(button.dataset.id);
      const action = button.dataset.action;

      if (action === "toggle") {
        const toggledTask = state.tasks.find((task) => task.id === taskId);
        const nextDone = !toggledTask?.done;
        const nextStatus = nextDone ? "done" : "todo";
        const { error } = await requestTasks(`/rest/v1/tasks?id=eq.${taskId}`, {
          method: "PATCH",
          body: JSON.stringify({ done: nextDone, status: nextStatus }),
        });

        if (error) {
          handleSupabaseError("Failed to toggle task:", error);
          return;
        }

        state.tasks = state.tasks.map((task) =>
          task.id === taskId ? { ...task, done: nextDone, status: nextStatus } : task
        );
        showToast(toggledTask?.done ? text.taskActive : text.taskDone);
      }

      if (action === "status") {
        const nextStatus = button.dataset.value;
        const nextDone = nextStatus === "done";
        const { error } = await requestTasks(`/rest/v1/tasks?id=eq.${taskId}`, {
          method: "PATCH",
          body: JSON.stringify({ status: nextStatus, done: nextDone }),
        });

        if (error) {
          handleSupabaseError("Failed to update status:", error);
          return;
        }

        state.tasks = state.tasks.map((task) =>
          task.id === taskId ? { ...task, status: nextStatus, done: nextDone } : task
        );
        showToast(`진행 상태를 ${getStatusLabel(nextStatus)}로 변경했습니다.`);
      }

      if (action === "priority") {
        const nextPriority = button.dataset.value;
        let { error } = await requestTasks(`/rest/v1/tasks?id=eq.${taskId}`, {
          method: "PATCH",
          body: JSON.stringify({ priority: nextPriority }),
        });

        if (error && shouldRetryWithoutPriority(error)) {
          state.tasks = state.tasks.map((task) =>
            task.id === taskId ? { ...task, priority: nextPriority } : task
          );
          renderAll();
          showToast(`중요도를 ${getPriorityLabel(nextPriority)}으로 표시했습니다.`);
          return;
        }

        if (error) {
          handleSupabaseError("Failed to update priority:", error);
          return;
        }

        state.tasks = state.tasks.map((task) =>
          task.id === taskId ? { ...task, priority: nextPriority } : task
        );
        showToast(`중요도를 ${getPriorityLabel(nextPriority)}으로 변경했습니다.`);
      }

      if (action === "edit") {
        const currentTask = state.tasks.find((task) => task.id === taskId);
        if (!currentTask) {
          return;
        }

        openEditModal(currentTask);
        return;
      }

      if (action === "remove") {
        const { error } = await requestTasks(`/rest/v1/tasks?id=eq.${taskId}`, {
          method: "DELETE",
        });

        if (error) {
          handleSupabaseError("Failed to delete task:", error);
          return;
        }

        state.tasks = state.tasks.filter((task) => task.id !== taskId);
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
    .sort(
      (a, b) =>
        Number(a.done) - Number(b.done) ||
        priorityWeight(a.priority) - priorityWeight(b.priority) ||
        a.title.localeCompare(b.title, "ko")
    );
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

async function loadTasks() {
  state.isLoading = true;
  setConnectionState("checking", text.connectionChecking);
  renderAll();

  const { data, error } = await requestTasks("/rest/v1/tasks?select=*&order=created_at.desc");

  if (error) {
    state.isLoading = false;
    renderAll();
    handleSupabaseError("Failed to load tasks:", error);
    return;
  }

  state.tasks = (data ?? []).map(mapTaskRecord);
  state.isLoading = false;
  setConnectionState("ready", text.connectionReady);
  renderAll();
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

function setConnectionState(status, message) {
  connectionBadge.className = `connection-badge is-${status}`;
  connectionMessage.textContent = message;

  if (status === "ready") {
    connectionBadge.textContent = "\uc5f0\uacb0 \uc815\uc0c1";
    return;
  }

  if (status === "error") {
    connectionBadge.textContent = "\uc5f0\uacb0 \uc2e4\ud328";
    return;
  }

  connectionBadge.textContent = "\ud655\uc778 \uc911";
}

function handleSupabaseError(prefix, error) {
  const detail = error?.message || error?.hint || error?.details || "\uc54c \uc218 \uc5c6\ub294 \uc624\ub958";
  console.error(prefix, error);
  setConnectionState("error", `${text.connectionErrorPrefix} ${detail}`);
  showToast(`${text.syncError} (${detail})`);
}

function shouldRetryWithoutPriority(error) {
  const source = `${error?.message || ""} ${error?.details || ""} ${error?.hint || ""}`.toLowerCase();
  return source.includes("priority") && (source.includes("column") || source.includes("schema"));
}

function clearEditingState() {
  state.editingTaskId = null;
  syncFormMode();
  taskStatusInput.value = "todo";
  taskPriorityInput.value = "medium";
}

function syncFormMode() {
  taskSubmitBtn.textContent = text.submitCreateLabel;
  taskCancelBtn.hidden = true;
}

function openEditModal(task) {
  state.editingTaskId = task.id;
  editModalTitle.textContent = `${task.title} 수정`;
  editModalSubtitle.textContent = `${task.client} 업무를 수정하는 중입니다.`;
  editTaskClientInput.value = task.client || "";
  editTaskInput.value = task.title || "";
  editTaskDescriptionInput.value = task.description || "";
  editTaskReceivedDateInput.value = task.receivedDate || formatDateKey(today);
  editTaskDueDateInput.value = task.dueDate || formatDateKey(today);
  editTaskStatusInput.value = task.status || "todo";
  editTaskPriorityInput.value = task.priority || "medium";
  editModal.hidden = false;
  document.body.classList.add("modal-open");
  editTaskInput.focus();
}

function closeEditModal() {
  editModal.hidden = true;
  document.body.classList.remove("modal-open");
  editTaskForm.reset();
  clearEditingState();
}

function openAttendanceModal(record) {
  state.editingAttendanceId = record.id;
  const employee = state.employees.find((item) => String(item.id) === String(record.employeeId));
  attendanceModalTitle.textContent = `${employee?.name || "직원"} 출퇴근 기록 수정`;
  attendanceModalSubtitle.textContent = `${formatLongDate(new Date(`${record.workDate}T00:00:00`))} 기록을 수정하거나 삭제할 수 있습니다.`;
  renderEditAttendanceEmployeeSelect();
  editAttendanceEmployeeSelect.value = String(record.employeeId);
  editAttendanceDateInput.value = record.workDate;
  editAttendanceClockInInput.value = record.clockIn;
  editAttendanceClockOutInput.value = record.clockOut;
  attendanceModal.hidden = false;
  document.body.classList.add("modal-open");
  editAttendanceEmployeeSelect.focus();
}

function closeAttendanceModal() {
  state.editingAttendanceId = null;
  attendanceModal.hidden = true;
  document.body.classList.remove("modal-open");
  editAttendanceForm.reset();
}

function switchView(view, shouldSyncHash = true) {
  state.currentView = view;
  const isTasks = view === "tasks";
  pageHero.hidden = !isTasks;
  pageViews.forEach((section) => {
    section.hidden = section.id !== `${view}View`;
  });
  workspaceTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  if (shouldSyncHash) {
    const nextHash = `#${view}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
  }
}

async function requestTasks(path, options = {}) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(`${supabaseUrl}${path}`, {
      method: options.method || "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: options.body,
      signal: controller.signal,
    });

    const raw = await response.text();
    const parsed = raw ? JSON.parse(raw) : null;

    if (!response.ok) {
      return {
        data: null,
        error: {
          message: parsed?.message || parsed?.error || `${response.status} ${response.statusText}`,
          details: parsed?.details || raw,
          hint: parsed?.hint || "",
        },
      };
    }

    return {
      data: parsed,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: {
        message: error?.name === "AbortError" ? text.timeoutError : error?.message || String(error),
        details: "",
        hint: "",
      },
    };
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function mapTaskRecord(record) {
  const category = record.category === "New Task" ? "\uc77c\ubc18 \uc5c5\ubb34" : record.category;
  return {
    id: record.id,
    title: record.title,
    done: record.done ?? record.status === "done",
    status: record.status || (record.done ? "done" : "todo"),
    priority: record.priority || "medium",
    category,
    client: record.client,
    description: record.description,
    receivedDate: record.received_date,
    dueDate: record.due_date,
  };
}

function getVisibleTasks() {
  return state.tasks.filter((task) => {
    if (state.taskFilter === "active" && task.status !== "todo") {
      return false;
    }
    if (state.taskFilter === "paused" && task.status !== "paused") {
      return false;
    }
    if (state.taskFilter === "done" && task.status !== "done") {
      return false;
    }
    if (state.clientFilter !== "all" && task.client !== state.clientFilter) {
      return false;
    }
    return true;
  });
}

function renderClientFilterOptions() {
  const clients = Array.from(new Set(state.tasks.map((task) => task.client).filter(Boolean))).sort((a, b) =>
    a.localeCompare(b, "ko")
  );
  const currentValue = state.clientFilter;
  clientFilterSelect.innerHTML = [
    `<option value="all">${text.clientFilterAll}</option>`,
    ...clients.map((client) => `<option value="${escapeHtml(client)}">${escapeHtml(client)}</option>`),
  ].join("");
  clientFilterSelect.value = clients.includes(currentValue) || currentValue === "all" ? currentValue : "all";
  state.clientFilter = clientFilterSelect.value;
}

function renderChoiceButton(kind, task, value, label) {
  const isActive = (kind === "status" ? task.status : task.priority) === value;
  const tone = kind === "status" ? `status-${value}` : `priority-${value}`;
  return `<button class="task-choice-btn ${tone} ${isActive ? "is-active" : ""}" type="button" data-action="${kind}" data-id="${task.id}" data-value="${value}">${label}</button>`;
}

function loadHrState() {
  try {
    state.employees = JSON.parse(window.localStorage.getItem("flowboard-employees") || "[]");
    state.attendanceRecords = JSON.parse(window.localStorage.getItem("flowboard-attendance") || "[]");
  } catch (error) {
    state.employees = [];
    state.attendanceRecords = [];
  }
}

function saveHrState() {
  window.localStorage.setItem("flowboard-employees", JSON.stringify(state.employees));
  window.localStorage.setItem("flowboard-attendance", JSON.stringify(state.attendanceRecords));
}

function renderHrWorkspace() {
  renderEmployeeSelect();
  renderEditAttendanceEmployeeSelect();
  renderAttendanceFilterOptions();
  renderEmployees();
  renderPayrollSummary();
  renderAttendanceList();
  updateHrMetrics();
}

function renderEmployeeSelect() {
  if (!state.employees.length) {
    attendanceEmployeeSelect.innerHTML = `<option value="">직원을 먼저 등록해 주세요</option>`;
    return;
  }

  attendanceEmployeeSelect.innerHTML = [
    `<option value="">직원을 선택하세요</option>`,
    ...state.employees.map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)}</option>`),
  ].join("");
}

function renderEditAttendanceEmployeeSelect() {
  if (!state.employees.length) {
    editAttendanceEmployeeSelect.innerHTML = `<option value="">직원을 먼저 등록해 주세요</option>`;
    return;
  }

  editAttendanceEmployeeSelect.innerHTML = [
    `<option value="">직원을 선택하세요</option>`,
    ...state.employees.map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)}</option>`),
  ].join("");
}

function renderAttendanceFilterOptions() {
  const currentValue = state.attendanceEmployeeFilter;
  attendanceEmployeeFilterSelect.innerHTML = [
    `<option value="all">전체 직원</option>`,
    ...state.employees.map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)}</option>`),
  ].join("");
  attendanceEmployeeFilterSelect.value = state.employees.some((employee) => String(employee.id) === currentValue)
    ? currentValue
    : "all";
  state.attendanceEmployeeFilter = attendanceEmployeeFilterSelect.value;
}

function renderEmployees() {
  if (!state.employees.length) {
    employeeList.innerHTML = `<div class="empty-state">등록된 직원이 없습니다. 기본급과 수당 기준을 먼저 입력해 주세요.</div>`;
    return;
  }

  employeeList.innerHTML = state.employees
    .map(
      (employee) => `
        <article class="employee-card">
          <div class="employee-card-head">
            <strong>${employee.name}</strong>
            <span class="employee-type ${employee.employmentType}">${employee.employmentType === "insured" ? "4대보험 적용" : "프리랜서"}</span>
          </div>
          <div class="employee-pay-grid">
            <span>기본급 ${formatCurrency(employee.baseSalary)}</span>
            <span>야근 수당 ${formatCurrency(employee.overtimeRate)}/h</span>
            <span>주말 수당 ${formatCurrency(employee.weekendRate)}/h</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAttendanceList() {
  if (!state.attendanceRecords.length) {
    attendanceList.innerHTML = `<div class="empty-state">출근기록부가 비어 있습니다. 직원과 출퇴근 시간을 입력해 주세요.</div>`;
    return;
  }

  attendanceList.innerHTML = state.attendanceRecords
    .slice()
    .sort((a, b) => `${b.workDate}${b.clockIn}`.localeCompare(`${a.workDate}${a.clockIn}`))
    .map((record) => {
      const employee = state.employees.find((item) => item.id === record.employeeId);
      const summary = calculateAttendance(record, employee);
      return `
        <article class="attendance-card">
          <div class="attendance-card-head">
            <div>
              <strong>${employee?.name || "삭제된 직원"}</strong>
              <p>${formatLongDate(new Date(`${record.workDate}T00:00:00`))}</p>
            </div>
            <span class="task-date-chip">${employee?.employmentType === "freelancer" ? "프리랜서" : "4대보험 적용"}</span>
          </div>
          <div class="attendance-times">
            <span>출근 ${record.clockIn}</span>
            <span>퇴근 ${record.clockOut}</span>
            <span>총 ${summary.totalHours.toFixed(1)}시간</span>
          </div>
          <div class="attendance-pay-grid">
            <span>야근 ${summary.overtimeHours.toFixed(1)}시간 / ${formatCurrency(summary.overtimePay)}</span>
            <span>주말 ${summary.weekendHours.toFixed(1)}시간 / ${formatCurrency(summary.weekendPay)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateHrMetrics() {
  employeeCount.textContent = `${state.employees.length}`;
  attendanceTodayCount.textContent = `${state.attendanceRecords.filter((item) => item.workDate === formatDateKey(today)).length}`;

  const currentMonthKey = state.payrollMonth;
  const overtimeHours = state.attendanceRecords.reduce((total, record) => {
    if (!record.workDate.startsWith(currentMonthKey)) {
      return total;
    }
    const employee = state.employees.find((item) => String(item.id) === String(record.employeeId));
    return total + calculateAttendance(record, employee).overtimeHours;
  }, 0);

  monthlyOvertimeHours.textContent = `${overtimeHours.toFixed(1)}h`;
  monthlyPayrollTotal.textContent = formatCurrency(
    buildPayrollSummary().reduce((sum, item) => sum + item.totalPay, 0)
  );
}

function calculateAttendance(record, employee) {
  const startMinutes = timeToMinutes(record.clockIn);
  const endMinutes = timeToMinutes(record.clockOut);
  const totalMinutes = Math.max(endMinutes - startMinutes, 0);
  const workDate = new Date(`${record.workDate}T00:00:00`);
  const isWeekend = workDate.getDay() === 0 || workDate.getDay() === 6;
  const overtimeStart = 18 * 60;
  const overtimeMinutes = isWeekend ? 0 : Math.max(endMinutes - Math.max(startMinutes, overtimeStart), 0);
  const weekendMinutes = isWeekend ? totalMinutes : 0;
  const overtimeHours = overtimeMinutes / 60;
  const weekendHours = weekendMinutes / 60;
  const attendanceStatus = getAttendanceStatus(record);

  return {
    totalHours: totalMinutes / 60,
    overtimeHours,
    weekendHours,
    overtimePay: Math.round(overtimeHours * Number(employee?.overtimeRate || 0)),
    weekendPay: Math.round(weekendHours * Number(employee?.weekendRate || 0)),
    attendanceStatus,
  };
}

function getAttendanceStatus(record) {
  const startMinutes = timeToMinutes(record.clockIn);
  const endMinutes = timeToMinutes(record.clockOut);
  const workDate = new Date(`${record.workDate}T00:00:00`);
  const isWeekend = workDate.getDay() === 0 || workDate.getDay() === 6;

  if (startMinutes >= 12 * 60 && endMinutes <= 12 * 60 + 30) {
    return "absent";
  }
  if (!isWeekend && startMinutes > 9 * 60) {
    return "late";
  }
  if (!isWeekend && endMinutes < 18 * 60) {
    return "early";
  }
  return "normal";
}

function getAttendanceStatusLabel(status) {
  if (status === "late") return "지각";
  if (status === "early") return "조퇴";
  if (status === "absent") return "결근";
  return "정상";
}

function buildPayrollSummary() {
  return state.employees.map((employee) => {
    const records = state.attendanceRecords.filter(
      (record) => String(record.employeeId) === String(employee.id) && record.workDate.startsWith(state.payrollMonth)
    );
    const totals = records.reduce(
      (acc, record) => {
        const summary = calculateAttendance(record, employee);
        acc.overtimeHours += summary.overtimeHours;
        acc.weekendHours += summary.weekendHours;
        acc.overtimePay += summary.overtimePay;
        acc.weekendPay += summary.weekendPay;
        return acc;
      },
      { overtimeHours: 0, weekendHours: 0, overtimePay: 0, weekendPay: 0 }
    );

    return {
      employee,
      ...totals,
      totalPay: Number(employee.baseSalary || 0) + totals.overtimePay + totals.weekendPay,
    };
  });
}

function renderPayrollSummary() {
  const summaryItems = buildPayrollSummary();
  if (!summaryItems.length) {
    payrollSummaryList.innerHTML = `<div class="empty-state">등록된 직원이 없어서 급여 요약을 계산할 수 없습니다.</div>`;
    return;
  }

  payrollSummaryList.innerHTML = summaryItems
    .map(
      (item) => `
        <article class="employee-card payroll-card">
          <div class="employee-card-head">
            <div>
              <strong>${item.employee.name}</strong>
              <p class="employee-card-subtitle">${state.payrollMonth} 기준 예상 급여</p>
            </div>
            <span class="task-date-chip">${item.employee.employmentType === "freelancer" ? "프리랜서" : "4대보험 적용 직원"}</span>
          </div>
          <div class="employee-pay-grid">
            <span>기본급 ${formatCurrency(item.employee.baseSalary)}</span>
            <span>야근 수당 ${formatCurrency(item.overtimePay)}</span>
            <span>주말 수당 ${formatCurrency(item.weekendPay)}</span>
            <span>총 예상 ${formatCurrency(item.totalPay)}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function timeToMinutes(value) {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW", maximumFractionDigits: 0 }).format(
    Number(value || 0)
  );
}

function getStatusLabel(status) {
  if (status === "done") {
    return text.taskStatusDone;
  }
  if (status === "paused") {
    return text.taskStatusPaused;
  }
  return text.taskStatusTodo;
}

function getPriorityLabel(priority) {
  if (priority === "high") {
    return text.priorityHigh;
  }
  if (priority === "low") {
    return text.priorityLow;
  }
  return text.priorityMedium;
}

function priorityWeight(priority) {
  if (priority === "high") {
    return 0;
  }
  if (priority === "medium") {
    return 1;
  }
  return 2;
}

function isTodayTask(task) {
  return task.status !== "done" && task.dueDate === formatDateKey(today);
}

function isOverdue(task) {
  return task.status !== "done" && task.dueDate < formatDateKey(today);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function mapEmployeeRecord(record) {
  return {
    id: record.id,
    name: record.name || "",
    employmentType: record.employment_type || "insured",
    baseSalary: Number(record.base_salary || 0),
    overtimeRate: Number(record.overtime_rate || 0),
    weekendRate: Number(record.weekend_rate || 0),
    createdAt: record.created_at || new Date().toISOString(),
  };
}

function mapAttendanceRecord(record) {
  return {
    id: record.id,
    employeeId: record.employee_id,
    workDate: record.work_date,
    clockIn: record.clock_in,
    clockOut: record.clock_out,
    createdAt: record.created_at || new Date().toISOString(),
  };
}

async function loadHrData() {
  const [employeesResult, attendanceResult] = await Promise.all([
    requestTasks("/rest/v1/employees?select=*&order=created_at.desc"),
    requestTasks("/rest/v1/attendance_records?select=*&order=work_date.desc"),
  ]);

  if (employeesResult.error) {
    handleSupabaseError("Failed to load employees:", employeesResult.error);
    return;
  }

  if (attendanceResult.error) {
    handleSupabaseError("Failed to load attendance:", attendanceResult.error);
    return;
  }

  state.employees = (employeesResult.data ?? []).map(mapEmployeeRecord);
  state.attendanceRecords = (attendanceResult.data ?? []).map(mapAttendanceRecord);
  renderHrWorkspace();
}

async function saveEmployee() {
  const name = employeeNameInput.value.trim();
  const employmentType = employeeTypeInput.value;
  const baseSalary = Number(employeeBaseSalaryInput.value || 0);
  const overtimeRate = Number(employeeOvertimeRateInput.value || 0);
  const weekendRate = Number(employeeWeekendRateInput.value || 0);

  if (!name || baseSalary < 0 || overtimeRate < 0 || weekendRate < 0) {
    return;
  }

  const { data, error } = await requestTasks("/rest/v1/employees", {
    method: "POST",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      name,
      employment_type: employmentType,
      base_salary: baseSalary,
      overtime_rate: overtimeRate,
      weekend_rate: weekendRate,
    }),
  });

  if (error) {
    handleSupabaseError("Failed to insert employee:", error);
    return;
  }

  const savedEmployee = mapEmployeeRecord(Array.isArray(data) ? data[0] : data);
  state.employees.unshift(savedEmployee);
  employeeForm.reset();
  employeeTypeInput.value = "insured";
  renderHrWorkspace();
  showToast(`${name} 직원을 등록했습니다.`);
}

async function saveAttendance() {
  const employeeId = attendanceEmployeeSelect.value;
  const workDate = attendanceDateInput.value;
  const clockIn = attendanceClockInInput.value;
  const clockOut = attendanceClockOutInput.value;
  const normalizedEmployeeId = Number(employeeId);

  if (!employeeId || !workDate || !clockIn || !clockOut || clockOut <= clockIn || !Number.isFinite(normalizedEmployeeId)) {
    return;
  }

  const { data, error } = await requestTasks("/rest/v1/attendance_records", {
    method: "POST",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      employee_id: normalizedEmployeeId,
      work_date: workDate,
      clock_in: clockIn,
      clock_out: clockOut,
    }),
  });

  if (error) {
    handleSupabaseError("Failed to insert attendance:", error);
    return;
  }

  const savedRecord = mapAttendanceRecord(Array.isArray(data) ? data[0] : data);
  state.attendanceRecords.unshift(savedRecord);
  attendanceForm.reset();
  attendanceDateInput.value = formatDateKey(today);
  attendanceClockInInput.value = "09:00";
  attendanceClockOutInput.value = "18:00";
  renderHrWorkspace();
  showToast("출퇴근 기록을 저장했습니다.");
}

async function updateAttendance() {
  if (state.editingAttendanceId === null) {
    return;
  }

  const employeeId = editAttendanceEmployeeSelect.value;
  const workDate = editAttendanceDateInput.value;
  const clockIn = editAttendanceClockInInput.value;
  const clockOut = editAttendanceClockOutInput.value;
  const normalizedEmployeeId = Number(employeeId);

  if (!employeeId || !workDate || !clockIn || !clockOut || clockOut <= clockIn || !Number.isFinite(normalizedEmployeeId)) {
    return;
  }

  const { data, error } = await requestTasks(
    `/rest/v1/attendance_records?id=eq.${state.editingAttendanceId}&select=*`,
    {
      method: "PATCH",
      headers: {
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        employee_id: normalizedEmployeeId,
        work_date: workDate,
        clock_in: clockIn,
        clock_out: clockOut,
      }),
    }
  );

  if (error) {
    handleSupabaseError("Failed to update attendance:", error);
    return;
  }

  const rawRecord = Array.isArray(data) ? data[0] : data;
  if (!rawRecord) {
    await loadHrData();
    closeAttendanceModal();
    showToast("출퇴근 기록을 다시 불러왔습니다.");
    return;
  }

  const savedRecord = mapAttendanceRecord(rawRecord);
  state.attendanceRecords = state.attendanceRecords.map((record) =>
    String(record.id) === String(savedRecord.id) ? savedRecord : record
  );
  closeAttendanceModal();
  renderHrWorkspace();
  showToast("출퇴근 기록을 수정했습니다.");
}

async function deleteAttendance() {
  if (state.editingAttendanceId === null) {
    return;
  }

  const { error } = await requestTasks(`/rest/v1/attendance_records?id=eq.${state.editingAttendanceId}`, {
    method: "DELETE",
  });

  if (error) {
    handleSupabaseError("Failed to delete attendance:", error);
    return;
  }

  state.attendanceRecords = state.attendanceRecords.filter(
    (record) => String(record.id) !== String(state.editingAttendanceId)
  );
  closeAttendanceModal();
  renderHrWorkspace();
  showToast("출퇴근 기록을 삭제했습니다.");
}

function renderEmployeeSelect() {
  if (!state.employees.length) {
    attendanceEmployeeSelect.innerHTML = `<option value="">직원을 먼저 등록해 주세요</option>`;
    return;
  }

  attendanceEmployeeSelect.innerHTML = [
    `<option value="">직원을 선택하세요</option>`,
    ...state.employees.map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)}</option>`),
  ].join("");
}

function renderEmployees() {
  if (!state.employees.length) {
    employeeList.innerHTML = `<div class="empty-state">등록된 직원이 없습니다. 기본급과 수당 기준을 먼저 입력해 주세요.</div>`;
    return;
  }

  employeeList.innerHTML = state.employees
    .map(
      (employee) => `
        <article class="employee-card">
          <div class="employee-card-head">
            <strong>${employee.name}</strong>
            <span class="employee-type ${employee.employmentType}">${employee.employmentType === "insured" ? "4대보험 적용 직원" : "프리랜서"}</span>
          </div>
          <div class="employee-pay-grid">
            <span>기본급 ${formatCurrency(employee.baseSalary)}</span>
            <span>야근 수당 ${formatCurrency(employee.overtimeRate)}/h</span>
            <span>주말 수당 ${formatCurrency(employee.weekendRate)}/h</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAttendanceList() {
  if (!state.attendanceRecords.length) {
    attendanceList.innerHTML = `<div class="empty-state">출근기록부가 비어 있습니다. 직원과 출퇴근 시간을 입력해 주세요.</div>`;
    return;
  }

  attendanceList.innerHTML = state.attendanceRecords
    .slice()
    .sort((a, b) => `${b.workDate}${b.clockIn}`.localeCompare(`${a.workDate}${a.clockIn}`))
    .map((record) => {
      const employee = state.employees.find((item) => String(item.id) === String(record.employeeId));
      const summary = calculateAttendance(record, employee);
      return `
        <article class="attendance-card">
          <div class="attendance-card-head">
            <div>
              <strong>${employee?.name || "알 수 없는 직원"}</strong>
              <p>${formatLongDate(new Date(`${record.workDate}T00:00:00`))}</p>
            </div>
            <div class="attendance-card-tools">
              <span class="task-date-chip">${employee?.employmentType === "freelancer" ? "프리랜서" : "4대보험 적용 직원"}</span>
              <button class="ghost-btn attendance-edit-btn" type="button" data-attendance-action="edit" data-id="${record.id}">수정</button>
            </div>
          </div>
          <div class="attendance-times">
            <span>출근 ${record.clockIn}</span>
            <span>퇴근 ${record.clockOut}</span>
            <span>총 ${summary.totalHours.toFixed(1)}시간</span>
          </div>
          <div class="attendance-pay-grid">
            <span>야근 ${summary.overtimeHours.toFixed(1)}시간 / ${formatCurrency(summary.overtimePay)}</span>
            <span>주말 ${summary.weekendHours.toFixed(1)}시간 / ${formatCurrency(summary.weekendPay)}</span>
          </div>
          <div class="attendance-insight">
            <span class="task-date-chip">${summary.overtimeHours > 0 ? `야근 ${summary.overtimeHours.toFixed(1)}시간` : "정규 근무"}</span>
            <span class="task-date-chip">${summary.weekendHours > 0 ? `주말 ${summary.weekendHours.toFixed(1)}시간` : "평일 기준"}</span>
          </div>
        </article>
      `;
    })
    .join("");

  attendanceList.querySelectorAll("[data-attendance-action='edit']").forEach((button) => {
    button.addEventListener("click", () => {
      const record = state.attendanceRecords.find((item) => String(item.id) === String(button.dataset.id));
      if (record) {
        openAttendanceModal(record);
      }
    });
  });
}

function openEmployeeModal(employee) {
  state.editingEmployeeId = employee.id;
  employeeModalTitle.textContent = `${employee.name} 정보 수정`;
  employeeModalSubtitle.textContent = "기본급, 수당, 고용 형태를 수정하거나 직원을 삭제할 수 있습니다.";
  editEmployeeNameInput.value = employee.name || "";
  editEmployeeTypeInput.value = employee.employmentType || "insured";
  editEmployeeBaseSalaryInput.value = employee.baseSalary || 0;
  editEmployeeOvertimeRateInput.value = employee.overtimeRate || 0;
  editEmployeeWeekendRateInput.value = employee.weekendRate || 0;
  employeeModal.hidden = false;
  document.body.classList.add("modal-open");
  editEmployeeNameInput.focus();
}

function closeEmployeeModal() {
  state.editingEmployeeId = null;
  employeeModal.hidden = true;
  document.body.classList.remove("modal-open");
  editEmployeeForm.reset();
}

async function updateEmployee() {
  if (state.editingEmployeeId === null) {
    return;
  }

  const name = editEmployeeNameInput.value.trim();
  const employmentType = editEmployeeTypeInput.value;
  const baseSalary = Number(editEmployeeBaseSalaryInput.value || 0);
  const overtimeRate = Number(editEmployeeOvertimeRateInput.value || 0);
  const weekendRate = Number(editEmployeeWeekendRateInput.value || 0);

  if (!name || baseSalary < 0 || overtimeRate < 0 || weekendRate < 0) {
    return;
  }

  const { data, error } = await requestTasks(`/rest/v1/employees?id=eq.${state.editingEmployeeId}&select=*`, {
    method: "PATCH",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      name,
      employment_type: employmentType,
      base_salary: baseSalary,
      overtime_rate: overtimeRate,
      weekend_rate: weekendRate,
    }),
  });

  if (error) {
    handleSupabaseError("Failed to update employee:", error);
    return;
  }

  const savedEmployee = mapEmployeeRecord(Array.isArray(data) ? data[0] : data);
  state.employees = state.employees.map((employee) =>
    String(employee.id) === String(savedEmployee.id) ? savedEmployee : employee
  );
  closeEmployeeModal();
  renderHrWorkspace();
  showToast("직원 정보를 수정했습니다.");
}

async function deleteEmployee() {
  if (state.editingEmployeeId === null) {
    return;
  }

  const { error } = await requestTasks(`/rest/v1/employees?id=eq.${state.editingEmployeeId}`, {
    method: "DELETE",
  });

  if (error) {
    handleSupabaseError("Failed to delete employee:", error);
    return;
  }

  state.employees = state.employees.filter((employee) => String(employee.id) !== String(state.editingEmployeeId));
  state.attendanceRecords = state.attendanceRecords.filter(
    (record) => String(record.employeeId) !== String(state.editingEmployeeId)
  );
  closeEmployeeModal();
  renderHrWorkspace();
  showToast("직원을 삭제했습니다.");
}

function renderEmployees() {
  if (!state.employees.length) {
    employeeList.innerHTML = `<div class="empty-state">등록된 직원이 없습니다. 기본급과 수당 기준을 먼저 입력해 주세요.</div>`;
    return;
  }

  employeeList.innerHTML = state.employees
    .map(
      (employee) => `
        <article class="employee-card">
          <div class="employee-card-head">
            <div>
              <strong>${employee.name}</strong>
              <p class="employee-card-subtitle">${employee.employmentType === "insured" ? "4대보험 적용 직원" : "프리랜서"}</p>
            </div>
            <div class="employee-card-tools">
              <span class="employee-type ${employee.employmentType}">${employee.employmentType === "insured" ? "4대보험 적용 직원" : "프리랜서"}</span>
              <button class="ghost-btn attendance-edit-btn" type="button" data-employee-action="edit" data-id="${employee.id}">수정</button>
            </div>
          </div>
          <div class="employee-pay-grid">
            <span>기본급 ${formatCurrency(employee.baseSalary)}</span>
            <span>야근 수당 ${formatCurrency(employee.overtimeRate)}/h</span>
            <span>주말 수당 ${formatCurrency(employee.weekendRate)}/h</span>
          </div>
        </article>
      `
    )
    .join("");

  employeeList.querySelectorAll("[data-employee-action='edit']").forEach((button) => {
    button.addEventListener("click", () => {
      const employee = state.employees.find((item) => String(item.id) === String(button.dataset.id));
      if (employee) {
        openEmployeeModal(employee);
      }
    });
  });
}

function renderAttendanceList() {
  if (!state.attendanceRecords.length) {
    attendanceList.innerHTML = `<div class="empty-state">출근기록부가 비어 있습니다. 직원과 출퇴근 시간을 입력해 주세요.</div>`;
    return;
  }

  const filteredRecords = state.attendanceRecords
    .slice()
    .sort((a, b) => `${b.workDate}${b.clockIn}`.localeCompare(`${a.workDate}${a.clockIn}`))
    .filter((record) => {
      if (state.attendanceMonthFilter && !record.workDate.startsWith(state.attendanceMonthFilter)) {
        return false;
      }
      if (state.attendanceEmployeeFilter !== "all" && String(record.employeeId) !== String(state.attendanceEmployeeFilter)) {
        return false;
      }
      const employee = state.employees.find((item) => String(item.id) === String(record.employeeId));
      const summary = calculateAttendance(record, employee);
      return state.attendanceStatusFilter === "all" || summary.attendanceStatus === state.attendanceStatusFilter;
    });

  if (!filteredRecords.length) {
    attendanceList.innerHTML = `<div class="empty-state">현재 필터에 맞는 출근기록이 없습니다. 조회 월이나 상태를 바꿔 보세요.</div>`;
    return;
  }

  attendanceList.innerHTML = filteredRecords
    .map((record) => {
      const employee = state.employees.find((item) => String(item.id) === String(record.employeeId));
      const summary = calculateAttendance(record, employee);
      return `
        <article class="attendance-card attendance-${summary.attendanceStatus}">
          <div class="attendance-card-head">
            <div>
              <strong>${employee?.name || "알 수 없는 직원"}</strong>
              <p>${formatLongDate(new Date(`${record.workDate}T00:00:00`))}</p>
            </div>
            <div class="attendance-card-tools">
              <span class="task-date-chip">${employee?.employmentType === "freelancer" ? "프리랜서" : "4대보험 적용 직원"}</span>
              <button class="ghost-btn attendance-edit-btn" type="button" data-attendance-action="edit" data-id="${record.id}">수정</button>
            </div>
          </div>
          <div class="attendance-times">
            <span>출근 ${record.clockIn}</span>
            <span>퇴근 ${record.clockOut}</span>
            <span>총 ${summary.totalHours.toFixed(1)}시간</span>
          </div>
          <div class="attendance-pay-grid">
            <span>야근 ${summary.overtimeHours.toFixed(1)}시간 / ${formatCurrency(summary.overtimePay)}</span>
            <span>주말 ${summary.weekendHours.toFixed(1)}시간 / ${formatCurrency(summary.weekendPay)}</span>
          </div>
          <div class="attendance-insight">
            <span class="task-date-chip">${getAttendanceStatusLabel(summary.attendanceStatus)}</span>
            <span class="task-date-chip">${summary.overtimeHours > 0 ? `야근 ${summary.overtimeHours.toFixed(1)}시간` : "정규 근무"}</span>
            <span class="task-date-chip">${summary.weekendHours > 0 ? `주말 ${summary.weekendHours.toFixed(1)}시간` : "평일 기준"}</span>
          </div>
        </article>
      `;
    })
    .join("");

  attendanceList.querySelectorAll("[data-attendance-action='edit']").forEach((button) => {
    button.addEventListener("click", () => {
      const record = state.attendanceRecords.find((item) => String(item.id) === String(button.dataset.id));
      if (record) {
        openAttendanceModal(record);
      }
    });
  });
}

taskReceivedDateInput.value = formatDateKey(today);
taskDueDateInput.value = formatDateKey(today);
taskStatusInput.value = "todo";
taskPriorityInput.value = "medium";
attendanceDateInput.value = formatDateKey(today);
attendanceClockInInput.value = "09:00";
attendanceClockOutInput.value = "18:00";
employeeTypeInput.value = "insured";
attendanceMonthFilterInput.value = state.attendanceMonthFilter;
payrollMonthInput.value = state.payrollMonth;
syncFormMode();
loadHrState();
renderHrWorkspace();
employeeForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    void saveEmployee();
  },
  true
);
attendanceForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    void saveAttendance();
  },
  true
);
editAttendanceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  void updateAttendance();
});
editAttendanceDeleteBtn.addEventListener("click", () => {
  void deleteAttendance();
});
editEmployeeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  void updateEmployee();
});
editEmployeeDeleteBtn.addEventListener("click", () => {
  void deleteEmployee();
});
switchView(
  ["tasks", "hr", "estimate", "statement", "payroll"].includes(window.location.hash.replace("#", ""))
    ? window.location.hash.replace("#", "")
    : "tasks",
  false
);
loadHrData();
loadTasks();
