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
const taskClientInput = document.getElementById("taskClientInput");
const taskDescriptionInput = document.getElementById("taskDescriptionInput");
const taskReceivedDateInput = document.getElementById("taskReceivedDateInput");
const taskDueDateInput = document.getElementById("taskDueDateInput");
const taskStatusInput = document.getElementById("taskStatusInput");
const taskPriorityInput = document.getElementById("taskPriorityInput");
const taskSubmitBtn = document.getElementById("taskSubmitBtn");
const taskCancelBtn = document.getElementById("taskCancelBtn");
const clientFilterSelect = document.getElementById("clientFilterSelect");
const taskSearchInput = document.getElementById("taskSearchInput");
const openArchiveBtn = document.getElementById("openArchiveBtn");
const archivedTaskCount = document.getElementById("archivedTaskCount");
const archivedTaskSummary = document.getElementById("archivedTaskSummary");
const archivedTaskList = document.getElementById("archivedTaskList");
const calendarViewButtons = document.querySelectorAll("[data-calendar-view]");
const editModal = document.getElementById("editModal");
const editModalBackdrop = document.getElementById("editModalBackdrop");
const editModalCloseBtn = document.getElementById("editModalCloseBtn");
const editModalTitle = document.getElementById("editModalTitle");
const editModalSubtitle = document.getElementById("editModalSubtitle");
const editTaskForm = document.getElementById("editTaskForm");
const editTaskClientInput = document.getElementById("editTaskClientInput");
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
const roleSensitiveTabs = document.querySelectorAll("[data-role-visible]");
const authSensitiveTabs = document.querySelectorAll("[data-auth-visible]");
const pageViews = document.querySelectorAll(".app-view");
const roleSections = document.querySelectorAll("[data-role-section]");
const roleSwitcher = document.querySelector(".role-switcher");
const roleValue = document.getElementById("roleValue");
const sessionBadge = document.getElementById("sessionBadge");
const sessionUserName = document.getElementById("sessionUserName");
const sessionUserMeta = document.getElementById("sessionUserMeta");
const logoutBtn = document.getElementById("logoutBtn");
const tasksView = document.getElementById("tasksView");
const boardViews = ["calendar", "todos"];
const clientView = document.getElementById("clientView");
const hrView = document.getElementById("hrView");
const employeeinfoView = document.getElementById("employeeinfoView");
const loginView = document.getElementById("loginView");
const signupView = document.getElementById("signupView");
const membersView = document.getElementById("membersView");
const loginForm = document.getElementById("loginForm");
const loginIdInput = document.getElementById("loginIdInput");
const loginPasswordInput = document.getElementById("loginPasswordInput");
const signupForm = document.getElementById("signupForm");
const signupNameInput = document.getElementById("signupNameInput");
const signupIdInput = document.getElementById("signupIdInput");
const signupPasswordInput = document.getElementById("signupPasswordInput");
const signupRoleInput = document.getElementById("signupRoleInput");
const signupGuideText = document.getElementById("signupGuideText");
const moveSignupBtn = document.getElementById("moveSignupBtn");
const moveLoginBtn = document.getElementById("moveLoginBtn");
const memberCount = document.getElementById("memberCount");
const activeMemberCount = document.getElementById("activeMemberCount");
const adminMemberCount = document.getElementById("adminMemberCount");
const memberList = document.getElementById("memberList");
const memberModal = document.getElementById("memberModal");
const memberModalBackdrop = document.getElementById("memberModalBackdrop");
const memberModalCloseBtn = document.getElementById("memberModalCloseBtn");
const editMemberForm = document.getElementById("editMemberForm");
const editMemberNameInput = document.getElementById("editMemberNameInput");
const editMemberLoginIdInput = document.getElementById("editMemberLoginIdInput");
const editMemberPasswordInput = document.getElementById("editMemberPasswordInput");
const editMemberRoleInput = document.getElementById("editMemberRoleInput");
const editMemberDepartmentInput = document.getElementById("editMemberDepartmentInput");
const editMemberTitleInput = document.getElementById("editMemberTitleInput");
const editMemberPhoneInput = document.getElementById("editMemberPhoneInput");
const editMemberActiveInput = document.getElementById("editMemberActiveInput");
const editMemberNoteInput = document.getElementById("editMemberNoteInput");
const editMemberDeleteBtn = document.getElementById("editMemberDeleteBtn");
const editMemberCancelBtn = document.getElementById("editMemberCancelBtn");
const clientDetailTitle = document.getElementById("clientDetailTitle");
const clientDetailSubtitle = document.getElementById("clientDetailSubtitle");
const clientDetailMetrics = document.getElementById("clientDetailMetrics");
const clientTaskHeading = document.getElementById("clientTaskHeading");
const clientTaskCount = document.getElementById("clientTaskCount");
const clientTaskList = document.getElementById("clientTaskList");
const clientDeadlineList = document.getElementById("clientDeadlineList");
const clientBackBtn = document.getElementById("clientBackBtn");
const employeeCount = document.getElementById("employeeCount");
const attendanceTodayCount = document.getElementById("attendanceTodayCount");
const monthlyOvertimeHours = document.getElementById("monthlyOvertimeHours");
const employeeForm = document.getElementById("employeeForm");
const employeeNameInput = document.getElementById("employeeNameInput");
const employeeTypeInput = document.getElementById("employeeTypeInput");
const employeeMemberInput = document.getElementById("employeeMemberInput");
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
const attendanceSummaryCards = document.getElementById("attendanceSummaryCards");
const attendanceBatchDateInput = document.getElementById("attendanceBatchDateInput");
  const attendanceBatchList = document.getElementById("attendanceBatchList");
  const saveBatchAttendanceBtn = document.getElementById("saveBatchAttendanceBtn");
const attendanceMonthFilterInput = document.getElementById("attendanceMonthFilterInput");
const attendanceEmployeeFilterSelect = document.getElementById("attendanceEmployeeFilterSelect");
const attendanceStatusFilterSelect = document.getElementById("attendanceStatusFilterSelect");
const attendanceCalendarEmployeeSelect = document.getElementById("attendanceCalendarEmployeeSelect");
const attendanceCalendarMonthInput = document.getElementById("attendanceCalendarMonthInput");
const attendanceCalendarLabel = document.getElementById("attendanceCalendarLabel");
const attendanceCalendarGrid = document.getElementById("attendanceCalendarGrid");
const monthlyPayrollTotal = document.getElementById("monthlyPayrollTotal");
const payrollEmployeeCount = document.getElementById("payrollEmployeeCount");
const monthlyWeekendHours = document.getElementById("monthlyWeekendHours");
const hrMonthlyOvertimeHours = document.getElementById("hrMonthlyOvertimeHours");
const hrMonthlyPayrollTotal = document.getElementById("hrMonthlyPayrollTotal");
const printPayrollBtn = document.getElementById("printPayrollBtn");
const payrollConfirmedCount = document.getElementById("payrollConfirmedCount");
const employeeInfoBackBtn = document.getElementById("employeeInfoBackBtn");
const employeeInfoEditBtn = document.getElementById("employeeInfoEditBtn");
const employeeInfoEmpty = document.getElementById("employeeInfoEmpty");
const employeeInfoDesktopList = document.getElementById("employeeInfoDesktopList");
const employeeInfoDesktopSummary = document.getElementById("employeeInfoDesktopSummary");
const employeeInfoDesktopSections = document.getElementById("employeeInfoDesktopSections");
const employeeInfoMobileSelector = document.getElementById("employeeInfoMobileSelector");
const employeeInfoMobileHero = document.getElementById("employeeInfoMobileHero");
const employeeInfoMobileSections = document.getElementById("employeeInfoMobileSections");
const employeeModal = document.getElementById("employeeModal");
const employeeModalBackdrop = document.getElementById("employeeModalBackdrop");
const employeeModalCloseBtn = document.getElementById("employeeModalCloseBtn");
const employeeModalTitle = document.getElementById("employeeModalTitle");
const employeeModalSubtitle = document.getElementById("employeeModalSubtitle");
const editEmployeeForm = document.getElementById("editEmployeeForm");
const editEmployeeNameInput = document.getElementById("editEmployeeNameInput");
const editEmployeeTypeInput = document.getElementById("editEmployeeTypeInput");
const editEmployeeMemberInput = document.getElementById("editEmployeeMemberInput");
  const editEmployeeBaseSalaryInput = document.getElementById("editEmployeeBaseSalaryInput");
  const editEmployeeOvertimeRateInput = document.getElementById("editEmployeeOvertimeRateInput");
  const editEmployeeWeekendRateInput = document.getElementById("editEmployeeWeekendRateInput");
  const editEmployeeDepartmentInput = document.getElementById("editEmployeeDepartmentInput");
  const editEmployeeTitleInput = document.getElementById("editEmployeeTitleInput");
  const editEmployeePhoneInput = document.getElementById("editEmployeePhoneInput");
  const editEmployeeEmailInput = document.getElementById("editEmployeeEmailInput");
  const editEmployeeAddressInput = document.getElementById("editEmployeeAddressInput");
  const editEmployeeBankNameInput = document.getElementById("editEmployeeBankNameInput");
  const editEmployeeBankAccountInput = document.getElementById("editEmployeeBankAccountInput");
  const editEmployeeAccountHolderInput = document.getElementById("editEmployeeAccountHolderInput");
  const editEmployeeDependentsInput = document.getElementById("editEmployeeDependentsInput");
  const editEmployeeNoteInput = document.getElementById("editEmployeeNoteInput");
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
const employeeDetailModal = document.getElementById("employeeDetailModal");
const employeeDetailModalBackdrop = document.getElementById("employeeDetailModalBackdrop");
const employeeDetailCloseBtn = document.getElementById("employeeDetailCloseBtn");
const employeeDetailTitle = document.getElementById("employeeDetailTitle");
  const employeeDetailSubtitle = document.getElementById("employeeDetailSubtitle");
  const employeeDetailBody = document.getElementById("employeeDetailBody");

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

function loadArchivedTaskIds() {
  try {
    const raw = JSON.parse(window.localStorage.getItem("flowboard-archived-task-ids") || "[]");
    return Array.isArray(raw) ? raw.map(String) : [];
  } catch (error) {
    return [];
  }
}

function loadPayrollStatusMap() {
  try {
    return JSON.parse(window.localStorage.getItem("flowboard-payroll-status-map") || "{}");
  } catch (error) {
    return {};
  }
}

function loadTaskOrderMap() {
  try {
    const raw = JSON.parse(window.localStorage.getItem("flowboard-task-order-map") || "{}");
    return raw && typeof raw === "object" ? raw : {};
  } catch (error) {
    return {};
  }
}

function saveTaskOrderMap() {
  window.localStorage.setItem("flowboard-task-order-map", JSON.stringify(state.taskOrderMap));
}

function getAssignableMembers() {
  return state.members.filter((member) => member.role === "employee" || member.role === "freelancer");
}

function getEmploymentTypeForRole(role) {
  return role === "freelancer" ? "freelancer" : "insured";
}

function findLinkedEmployeeByMember(member) {
  if (!member) {
    return null;
  }

  return (
    state.employees.find((employee) => String(employee.memberId || "") === String(member.id)) ||
    state.employees.find((employee) => String(employee.loginId || "") === String(member.loginId)) ||
    null
  );
}

function renderEmployeeMemberOptions(selectElement, selectedValue = "") {
  if (!selectElement) {
    return;
  }

  const options = [
    `<option value="">?곌껐 ????/option>`,
    ...getAssignableMembers().map(
      (member) =>
        `<option value="${member.id}">${escapeHtml(member.name)} 쨌 ${escapeHtml(member.loginId)} 쨌 ${getRoleLabel(member.role)}</option>`
    ),
  ];

  selectElement.innerHTML = options.join("");
  selectElement.value = getAssignableMembers().some((member) => String(member.id) === String(selectedValue))
    ? String(selectedValue)
    : "";
}

async function upsertLinkedEmployeeForMember(member) {
  if (!member || (member.role !== "employee" && member.role !== "freelancer")) {
    return null;
  }

  const linkedEmployee = findLinkedEmployeeByMember(member);
  const payload = {
    name: member.name,
    employment_type: getEmploymentTypeForRole(member.role),
    member_id: member.id,
    login_id: member.loginId,
    department: member.department || "",
    title: member.title || "",
    phone: member.phone || "",
    note: member.note || "",
  };

  const { data, error } = await requestTasks(
    linkedEmployee ? `/rest/v1/employees?id=eq.${linkedEmployee.id}&select=*` : "/rest/v1/employees",
    {
      method: linkedEmployee ? "PATCH" : "POST",
      headers: {
        Prefer: "return=representation",
      },
      body: JSON.stringify(
        linkedEmployee
          ? payload
          : {
              ...payload,
              base_salary: 0,
              overtime_rate: 0,
              weekend_rate: 0,
            }
      ),
    }
  );

  if (error) {
    handleSupabaseError("Failed to sync linked employee:", error);
    return null;
  }

  const savedEmployee = mapEmployeeRecord(Array.isArray(data) ? data[0] : data);
  if (!savedEmployee) {
    return null;
  }

  const exists = state.employees.some((employee) => String(employee.id) === String(savedEmployee.id));
  state.employees = exists
    ? state.employees.map((employee) => (String(employee.id) === String(savedEmployee.id) ? savedEmployee : employee))
    : [savedEmployee, ...state.employees];

  return savedEmployee;
}

function loadMembers() {
  try {
    const raw = JSON.parse(window.localStorage.getItem("flowboard-members") || "[]");
    return Array.isArray(raw) ? raw : [];
  } catch (error) {
    return [];
  }
}

function loadCurrentUser() {
  try {
    return JSON.parse(window.localStorage.getItem("flowboard-session-user") || "null");
  } catch (error) {
    return null;
  }
}

const state = {
  viewDate: new Date(currentMonth),
  selectedDateKey: formatDateKey(today),
  taskFilter: "all",
  clientFilter: "all",
  taskSearch: "",
  calendarMode: "month",
  currentView: "calendar",
  selectedClient: "",
  currentRole: loadCurrentUser()?.role || "employee",
  editingTaskId: null,
  toastTimer: null,
  isLoading: true,
  tasks: [],
  archivedTaskIds: loadArchivedTaskIds(),
  employees: [],
  attendanceRecords: [],
  editingEmployeeId: null,
  editingAttendanceId: null,
  editingMemberId: null,
  members: loadMembers(),
  currentUser: loadCurrentUser(),
  payrollMonth: formatDateKey(today).slice(0, 7),
  attendanceMonthFilter: formatDateKey(today).slice(0, 7),
  attendanceEmployeeFilter: "all",
    attendanceStatusFilter: "all",
    employeeDetailId: null,
  employeeDocuments: [],
  selectedEmployeeDocumentId: null,
  payrollStatusMap: loadPayrollStatusMap(),
  taskOrderMap: loadTaskOrderMap(),
  draggedTaskId: null,
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
  if (state.currentView !== "calendar") {
    switchView("calendar");
  }
  focusToday();
  document.querySelector(".panel-calendar").scrollIntoView({ behavior: "smooth", block: "start" });
});

focusInputBtn.addEventListener("click", () => {
  clearEditingState();
  switchView("todos");
  taskClientInput.focus();
  showToast(text.readyToAdd);
});

workspaceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    switchView(tab.dataset.view);
  });
});

calendarViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.calendarMode = button.dataset.calendarView;
    calendarViewButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderCalendar();
  });
});

taskSearchInput.addEventListener("input", () => {
  state.taskSearch = taskSearchInput.value.trim().toLowerCase();
  renderTasks();
});

openArchiveBtn.addEventListener("click", () => {
  archivedTaskList.scrollIntoView({ behavior: "smooth", block: "start" });
});

clientBackBtn.addEventListener("click", () => {
  switchView("calendar");
});

logoutBtn?.addEventListener("click", () => {
  logoutCurrentUser();
});

memberModalCloseBtn?.addEventListener("click", () => {
  closeMemberModal();
});

memberModalBackdrop?.addEventListener("click", () => {
  closeMemberModal();
});

editMemberCancelBtn?.addEventListener("click", () => {
  closeMemberModal();
});

moveSignupBtn?.addEventListener("click", () => {
  syncSignupRoleUi();
  switchView("signup");
});

moveLoginBtn?.addEventListener("click", () => {
  switchView("login");
});

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  await loginMember(loginIdInput.value.trim(), loginPasswordInput.value);
});

signupForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = signupNameInput.value.trim();
  const loginId = signupIdInput.value.trim();
  const password = signupPasswordInput.value.trim();
  const role = state.members.length === 0 ? "admin" : signupRoleInput.value;

  if (!name || !loginId || !password) {
    showToast("?뚯썝 ?뺣낫瑜?紐⑤몢 ?낅젰??二쇱꽭??");
    return;
  }

  if (state.members.some((member) => member.loginId === loginId)) {
    showToast("?대? ?ъ슜 以묒씤 ?꾩씠?붿엯?덈떎.");
    return;
  }

  state.members.unshift({
    id: `member-${Date.now()}`,
    name,
    loginId,
    password,
    role,
    isActive: true,
    createdAt: new Date().toISOString(),
  });
  saveMembers();
  if (role === "employee" || role === "freelancer") {
    await upsertLinkedEmployeeForMember(state.members[0]);
  }
  renderMembers();
  renderHrWorkspace();
  signupForm.reset();
  syncSignupRoleUi();
  showToast("?뚯썝 怨꾩젙???깅줉?덉뒿?덈떎.");
  switchView("login");
});

editMemberForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!state.editingMemberId) {
    return;
  }

  const member = state.members.find((item) => item.id === state.editingMemberId);
  if (!member) {
    return;
  }

  const nextName = editMemberNameInput.value.trim();
  const nextLoginId = editMemberLoginIdInput.value.trim();
  const nextPassword = editMemberPasswordInput.value.trim();

  if (!nextName || !nextLoginId) {
    showToast("?뚯썝 ?대쫫怨??꾩씠?붾? ?낅젰??二쇱꽭??");
    return;
  }

  const duplicateMember = state.members.find(
    (item) => item.id !== member.id && item.loginId === nextLoginId
  );
  if (duplicateMember) {
    showToast("?대? ?ъ슜 以묒씤 ?꾩씠?붿엯?덈떎.");
    return;
  }

  member.name = nextName;
  member.loginId = nextLoginId;
  member.role = editMemberRoleInput.value;
  member.department = editMemberDepartmentInput.value.trim();
  member.title = editMemberTitleInput.value.trim();
  member.phone = editMemberPhoneInput.value.trim();
  member.note = editMemberNoteInput.value.trim();
  member.isActive = editMemberActiveInput.value === "true";
  if (nextPassword) {
    member.password = nextPassword;
  }

  if (state.currentUser?.id === member.id) {
    state.currentUser = {
      ...state.currentUser,
      name: member.name,
      loginId: member.loginId,
      role: member.role,
    };
    saveSessionUser();
  }

  saveMembers();
  if (member.role === "employee" || member.role === "freelancer") {
    await upsertLinkedEmployeeForMember(member);
  }
  renderMembers();
  renderHrWorkspace();
  applyRoleAccess();
  closeMemberModal();
  if (state.currentUser?.id === member.id && member.isActive === false) {
    logoutCurrentUser(true);
    showToast("?꾩옱 怨꾩젙??鍮꾪솢?깊솕?댁꽌 ?ㅼ떆 濡쒓렇?명빐???⑸땲??");
    return;
  }
  showToast("?뚯썝 ?뺣낫瑜??섏젙?덉뒿?덈떎.");
});

editMemberDeleteBtn?.addEventListener("click", () => {
  if (!state.editingMemberId) {
    return;
  }
  const member = state.members.find((item) => item.id === state.editingMemberId);
  if (!member || member.loginId === "admin") {
    return;
  }

  state.members = state.members.filter((item) => item.id !== state.editingMemberId);
  saveMembers();
  renderMembers();
  closeMemberModal();
  if (state.currentUser?.id === member.id) {
    logoutCurrentUser(true);
    showToast("?꾩옱 濡쒓렇?명븳 怨꾩젙????젣?덉뒿?덈떎.");
    return;
  }
  showToast("?뚯썝 怨꾩젙????젣?덉뒿?덈떎.");
});

window.addEventListener("hashchange", () => {
  const nextView = window.location.hash.replace("#", "") || "calendar";
  if (["tasks", "calendar", "todos", "client", "hr", "employeeinfo", "estimate", "statement", "payroll", "members", "login", "signup"].includes(nextView)) {
    switchView(nextView, false);
  }
});

window.addEventListener("resize", () => {
  syncDeviceMode();
});

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const client = taskClientInput.value.trim();
  const description = taskDescriptionInput.value.trim();
  const receivedDate = taskReceivedDateInput.value;
  const dueDate = taskDueDateInput.value;

  if (!client || !description || !receivedDate || !dueDate) {
    return;
  }

  if (dueDate < receivedDate) {
    showToast(text.invalidTaskDate);
    return;
  }

  const isEditing = state.editingTaskId !== null;
  const payload = {
    title: description,
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

  const client = editTaskClientInput.value.trim();
  const description = editTaskDescriptionInput.value.trim();
  const receivedDate = editTaskReceivedDateInput.value;
  const dueDate = editTaskDueDateInput.value;

  if (!client || !description || !receivedDate || !dueDate) {
    return;
  }

  if (dueDate < receivedDate) {
    showToast(text.invalidTaskDate);
    return;
  }

  const payload = {
    title: description,
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

employeeDetailCloseBtn.addEventListener("click", () => {
  closeEmployeeDetailModal();
});

employeeDetailModalBackdrop.addEventListener("click", () => {
  closeEmployeeDetailModal();
});

employeeInfoBackBtn?.addEventListener("click", () => {
  switchView("hr");
});

employeeInfoEditBtn?.addEventListener("click", () => {
  const employee = getSelectedEmployee();
  if (employee) {
    openEmployeeModal(employee);
  }
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
  if (event.key === "Escape" && !employeeDetailModal.hidden) {
    closeEmployeeDetailModal();
  }
  if (event.key === "Escape" && !employeeModal.hidden) {
    closeEmployeeModal();
  }
  if (event.key === "Escape" && memberModal && !memberModal.hidden) {
    closeMemberModal();
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
  showToast(`${name} 吏곸썝???깅줉?덉뒿?덈떎.`);
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
  showToast("異쒗눜洹?湲곕줉????ν뻽?듬땲??");
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
  if (attendanceCalendarMonthInput) {
    attendanceCalendarMonthInput.value = state.attendanceMonthFilter;
  }
  renderAttendanceList();
  renderAttendanceSummary();
  renderAttendanceCalendar();
});

attendanceEmployeeFilterSelect.addEventListener("change", () => {
  state.attendanceEmployeeFilter = attendanceEmployeeFilterSelect.value;
  if (attendanceCalendarEmployeeSelect && state.attendanceEmployeeFilter !== "all") {
    attendanceCalendarEmployeeSelect.value = state.attendanceEmployeeFilter;
  }
  renderAttendanceList();
  renderAttendanceSummary();
  renderAttendanceCalendar();
});

attendanceStatusFilterSelect.addEventListener("change", () => {
  state.attendanceStatusFilter = attendanceStatusFilterSelect.value;
  renderAttendanceList();
  renderAttendanceSummary();
  renderAttendanceCalendar();
});

attendanceCalendarEmployeeSelect?.addEventListener("change", () => {
  renderAttendanceCalendar();
});

attendanceCalendarMonthInput?.addEventListener("change", () => {
  renderAttendanceCalendar();
});

payrollMonthInput.addEventListener("change", () => {
  state.payrollMonth = payrollMonthInput.value || formatDateKey(today).slice(0, 7);
  renderPayrollSummary();
  updateHrMetrics();
  renderClientDetailView();
});

function renderAll() {
  renderCalendar();
  renderSelectedDate();
  renderClientFilterOptions();
  renderTasks();
  renderArchivedTasks();
  renderClientDetailView();
  updateMetrics();
}

function renderCalendar() {
  calendarGrid.className = `calendar-grid calendar-mode-${state.calendarMode}`;
  if (state.calendarMode === "week") {
    renderWeekCalendar();
    return;
  }
  if (state.calendarMode === "list") {
    renderListCalendar();
    return;
  }
  renderMonthCalendar();
}

function renderMonthCalendar() {
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

  calendarGrid.innerHTML = cells.map((cell) => renderDayCard(cell)).join("");
  bindCalendarDayCards();

  monthEventCount.textContent = state.tasks.filter((task) => {
    if (isArchivedTask(task.id)) {
      return false;
    }
    const dueDate = new Date(`${task.dueDate}T00:00:00`);
    return dueDate.getFullYear() === year && dueDate.getMonth() === month;
  }).length;

  updateCalendarHint();
}

function renderWeekCalendar() {
  const selectedDate = new Date(`${state.selectedDateKey}T00:00:00`);
  const weekStart = new Date(selectedDate);
  weekStart.setDate(selectedDate.getDate() - selectedDate.getDay());
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + index);
    return createDayConfig(date, false);
  });

  monthLabel.textContent = `${selectedDate.getFullYear()}??${selectedDate.getMonth() + 1}??二쇨컙`;
  calendarGrid.innerHTML = days.map((config) => renderDayCard(config)).join("");
  bindCalendarDayCards();
  monthEventCount.textContent = days.reduce((sum, day) => sum + day.tasks.length, 0);
  updateCalendarHint();
}

function renderListCalendar() {
  const monthTasks = state.tasks
    .filter((task) => !isArchivedTask(task.id) && task.dueDate.startsWith(formatMonthPrefix(state.viewDate)))
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate) || priorityWeight(a.priority) - priorityWeight(b.priority));

  monthLabel.textContent = `${state.viewDate.getFullYear()}??${state.viewDate.getMonth() + 1}??由ъ뒪??;

  if (!monthTasks.length) {
    calendarGrid.innerHTML = `<div class="empty-state calendar-list-empty">?대쾲 ??留덇컧 ?낅Т媛 ?놁뒿?덈떎.</div>`;
    monthEventCount.textContent = "0";
    updateCalendarHint();
    return;
  }

  calendarGrid.innerHTML = monthTasks
    .map(
      (task) => `
        <article class="calendar-list-item priority-${task.priority}">
          <button class="calendar-list-open" type="button" data-date-select="${task.dueDate}">
            <span class="calendar-list-date">${formatDisplayDate(task.dueDate)}</span>
            <strong>${escapeHtml(task.client || "嫄곕옒泥?誘몄???)}</strong>
            <p>${escapeHtml(task.description || task.title || "")}</p>
          </button>
        </article>
      `
    )
    .join("");

  calendarGrid.querySelectorAll("[data-date-select]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDateKey = button.dataset.dateSelect;
      renderSelectedDate();
      updateMetrics();
      renderCalendar();
    });
  });

  monthEventCount.textContent = `${monthTasks.length}`;
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
            <button class="client-link-button" type="button" data-client-open="${escapeHtmlAttribute(task.client || "")}">
              <strong>${task.client}</strong>
            </button>
            <span class="day-count">${getStatusLabel(task.status)}</span>
          </div>
          <div class="schedule-meta schedule-description-strong">${task.description}</div>
          <div class="schedule-detail-row">
            <span class="task-date-chip">${getPriorityLabel(task.priority)}</span>
            <span class="task-date-chip">${isOverdue(task) ? "\ub9c8\uac10 \uc9c0\uc5f0" : isTodayTask(task) ? "\uc624\ub298 \ub9c8\uac10" : "\ub9c8\uac10 \uc608\uc815"}</span>
          </div>
        </article>
      `
    )
    .join("");

  selectedDateEvents.querySelectorAll("[data-client-open]").forEach((button) => {
    button.addEventListener("click", () => {
      openClientDetail(button.dataset.clientOpen);
    });
  });
}

function renderTasks() {
  if (state.isLoading) {
    taskList.innerHTML = `<div class="empty-state">${text.loadingTasks}</div>`;
    return;
  }

  const filteredTasks = getSortedTasks(getVisibleTasks());

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
        <article class="task-item ${task.done ? "is-done" : ""} priority-${task.priority} ${isOverdue(task) ? "is-overdue" : ""} ${isTodayTask(task) ? "is-today-deadline" : ""}" style="animation-delay:${index * 80}ms" draggable="true" data-task-id="${task.id}">
          <button
            class="check-btn"
            type="button"
            data-action="toggle"
            data-id="${task.id}"
            aria-label="${task.done ? text.activeLabel : text.doneLabel}"
          ></button>
          <div class="task-content">
            <button class="task-client task-client-link" type="button" data-action="client" data-client="${escapeHtmlAttribute(task.client ?? task.category ?? "")}">
              ${task.client ?? task.category}
            </button>
            <div class="task-description task-description-primary">${task.description ?? task.title ?? ""}</div>
            <div class="task-meta">${getStatusLabel(task.status)} 쨌 ${getPriorityLabel(task.priority)} 쨌 ${task.category}</div>
            <div class="task-inline-controls">
              <div class="task-choice-group" aria-label="吏꾪뻾 ?곹깭 ?좏깮">
                ${renderChoiceButton("status", task, "todo", getStatusLabel("todo"))}
                ${renderChoiceButton("status", task, "paused", getStatusLabel("paused"))}
                ${renderChoiceButton("status", task, "done", getStatusLabel("done"))}
              </div>
              <div class="task-choice-group" aria-label="以묒슂???좏깮">
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
            ${task.status === "done" ? `<button class="ghost-btn task-archive-btn" type="button" data-action="archive" data-id="${task.id}">蹂닿?</button>` : ""}
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

      if (action === "client") {
        openClientDetail(button.dataset.client);
        return;
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
        showToast(`吏꾪뻾 ?곹깭瑜?${getStatusLabel(nextStatus)}濡?蹂寃쏀뻽?듬땲??`);
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
          showToast(`以묒슂?꾨? ${getPriorityLabel(nextPriority)}?쇰줈 ?쒖떆?덉뒿?덈떎.`);
          return;
        }

        if (error) {
          handleSupabaseError("Failed to update priority:", error);
          return;
        }

        state.tasks = state.tasks.map((task) =>
          task.id === taskId ? { ...task, priority: nextPriority } : task
        );
        showToast(`以묒슂?꾨? ${getPriorityLabel(nextPriority)}?쇰줈 蹂寃쏀뻽?듬땲??`);
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

      if (action === "archive") {
        toggleArchivedTask(taskId);
        showToast("?꾨즺 ?낅Т瑜?蹂닿??⑥쑝濡??대룞?덉뒿?덈떎.");
      }

      renderAll();
    });
  });

  taskList.querySelectorAll("[data-task-id]").forEach((item) => {
    item.addEventListener("dragstart", () => {
      state.draggedTaskId = item.dataset.taskId;
      item.classList.add("is-dragging");
    });

    item.addEventListener("dragend", () => {
      state.draggedTaskId = null;
      item.classList.remove("is-dragging");
      taskList.querySelectorAll(".is-drop-target").forEach((target) => target.classList.remove("is-drop-target"));
    });

    item.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (!state.draggedTaskId || state.draggedTaskId === item.dataset.taskId) {
        return;
      }
      taskList.querySelectorAll(".is-drop-target").forEach((target) => target.classList.remove("is-drop-target"));
      item.classList.add("is-drop-target");
    });

    item.addEventListener("dragleave", () => {
      item.classList.remove("is-drop-target");
    });

    item.addEventListener("drop", (event) => {
      event.preventDefault();
      item.classList.remove("is-drop-target");
      if (!state.draggedTaskId || state.draggedTaskId === item.dataset.taskId) {
        return;
      }
      reorderVisibleTasks(state.draggedTaskId, item.dataset.taskId);
      state.draggedTaskId = null;
      renderAll();
      showToast("?????쒖꽌瑜?蹂寃쏀뻽?듬땲??");
    });
  });
}

function updateMetrics() {
  const activeTasks = getActiveTasks();
  const total = activeTasks.length;
  const completed = activeTasks.filter((task) => task.done).length;
  remainingCount.textContent = `${total - completed}`;
  taskProgressLabel.textContent = text.countDone(completed, total);
  taskProgressBar.style.width = `${total ? Math.round((completed / total) * 100) : 0}%`;
}

function renderArchivedTasks() {
  const archivedTasks = state.tasks
    .filter((task) => isArchivedTask(task.id))
    .sort((a, b) => `${b.dueDate}${b.receivedDate}`.localeCompare(`${a.dueDate}${a.receivedDate}`));

  archivedTaskCount.textContent = `${archivedTasks.length}`;
  archivedTaskSummary.textContent = `${archivedTasks.length}嫄?蹂닿?`;

  if (!archivedTasks.length) {
    archivedTaskList.innerHTML = `<div class="empty-state">?꾩쭅 蹂닿????꾨즺 ?낅Т媛 ?놁뒿?덈떎.</div>`;
    return;
  }

  archivedTaskList.innerHTML = archivedTasks
    .map(
      (task) => `
        <article class="task-item archive-task-item">
          <div class="task-content">
            <button class="task-client task-client-link" type="button" data-client-open="${escapeHtmlAttribute(task.client || "")}">
              ${escapeHtml(task.client || "嫄곕옒泥?誘몄???)}
            </button>
            <div class="task-description task-description-primary">${escapeHtml(task.description || task.title || "")}</div>
            <div class="task-dates">
              <span class="task-date-chip">留덇컧??${formatDisplayDate(task.dueDate)}</span>
            </div>
          </div>
          <div class="task-actions">
            <button class="ghost-btn task-archive-btn" type="button" data-archive-restore="${task.id}">蹂듭썝</button>
          </div>
        </article>
      `
    )
    .join("");

  archivedTaskList.querySelectorAll("[data-archive-restore]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleArchivedTask(button.dataset.archiveRestore);
      renderAll();
      showToast("蹂닿??⑥뿉???낅Т瑜?蹂듭썝?덉뒿?덈떎.");
    });
  });

  archivedTaskList.querySelectorAll("[data-client-open]").forEach((button) => {
    button.addEventListener("click", () => {
      openClientDetail(button.dataset.clientOpen);
    });
  });
}

function updateCalendarHint() {
  const todayTasks = getTasksByDate(formatDateKey(today)).length;
  const selectedTasks = getTasksByDate(state.selectedDateKey).length;

  calendarHint.textContent =
    state.selectedDateKey === formatDateKey(today) ? text.todayHint(todayTasks) : text.selectedHint(selectedTasks);
}

function getTasksByDate(dateKey) {
  return getSortedTasks(getActiveTasks().filter((task) => task.dueDate === dateKey));
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

function renderDayCard(config) {
  const taskPreview = config.tasks
    .slice(0, state.calendarMode === "week" ? 3 : 2)
    .map(
      (task) => `
        <div class="mini-event priority-${task.priority}">
          <span class="mini-event-client mini-event-link" data-client-open="${escapeHtmlAttribute(task.client || "")}">${escapeHtml(task.client || "嫄곕옒泥?誘몄???)}</span>
          <span class="mini-event-text">${escapeHtml(task.description || task.title || "")}</span>
        </div>
      `
    )
    .join("");

  return `
    <button
      class="day-card ${config.isOutside ? "is-outside" : ""} ${config.dateKey === state.selectedDateKey ? "is-selected" : ""}"
      type="button"
      data-date="${config.dateKey}"
      aria-label="${text.ariaDay(config.dateKey, config.tasks.length)}"
    >
      <div class="day-top">
        <span class="day-number">${config.date.getDate()}</span>
        ${config.tasks.length ? `<span class="day-count">${text.countDayLabel(config.tasks.length)}</span>` : ""}
      </div>
      <div class="day-events">
        ${taskPreview || ""}
      </div>
    </button>
  `;
}

function bindCalendarDayCards() {
  calendarGrid.querySelectorAll("[data-date]").forEach((card) => {
    card.addEventListener("click", (event) => {
      const clientButton = event.target.closest("[data-client-open]");
      if (clientButton) {
        event.stopPropagation();
        openClientDetail(clientButton.dataset.clientOpen);
        return;
      }
      state.selectedDateKey = card.dataset.date;
      const selectedDate = new Date(`${card.dataset.date}T00:00:00`);
      if (state.calendarMode === "month" && selectedDate.getMonth() !== state.viewDate.getMonth()) {
        state.viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      }
      renderSelectedDate();
      updateMetrics();
      renderCalendar();
    });
  });
}

function formatMonthPrefix(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
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
  normalizeTaskOrderMap();
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

function daysBetween(startDate, endDate) {
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  return Math.round((end.getTime() - start.getTime()) / 86400000);
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
  const duration = message.includes("?ㅽ뙣") || message.includes("臾몄젣") || message.includes("?ㅻ쪟") ? 5200 : 3600;
  state.toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), duration);
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
  editModalTitle.textContent = `${task.title} ?섏젙`;
  editModalSubtitle.textContent = `${task.client} ?낅Т瑜??섏젙?섎뒗 以묒엯?덈떎.`;
  editTaskClientInput.value = task.client || "";
  editTaskDescriptionInput.value = task.description || "";
  editTaskReceivedDateInput.value = task.receivedDate || formatDateKey(today);
  editTaskDueDateInput.value = task.dueDate || formatDateKey(today);
  editTaskStatusInput.value = task.status || "todo";
  editTaskPriorityInput.value = task.priority || "medium";
  editModal.hidden = false;
  document.body.classList.add("modal-open");
  editTaskDescriptionInput.focus();
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
  attendanceModalTitle.textContent = `${employee?.name || "吏곸썝"} 異쒗눜洹?湲곕줉 ?섏젙`;
  attendanceModalSubtitle.textContent = `${formatLongDate(new Date(`${record.workDate}T00:00:00`))} 湲곕줉???섏젙?섍굅????젣?????덉뒿?덈떎.`;
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

function openMemberModal(member) {
  if (!memberModal || !member) {
    return;
  }
  state.editingMemberId = member.id;
  editMemberNameInput.value = member.name || "";
  editMemberLoginIdInput.value = member.loginId || "";
  editMemberPasswordInput.value = "";
  editMemberRoleInput.value = member.role || "employee";
  editMemberDepartmentInput.value = member.department || "";
  editMemberTitleInput.value = member.title || "";
  editMemberPhoneInput.value = member.phone || "";
  editMemberActiveInput.value = member.isActive === false ? "false" : "true";
  editMemberNoteInput.value = member.note || "";
  editMemberDeleteBtn.hidden = member.loginId === "admin";
  memberModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeMemberModal() {
  if (!memberModal) {
    return;
  }
  state.editingMemberId = null;
  memberModal.hidden = true;
  document.body.classList.remove("modal-open");
  editMemberForm?.reset();
}

function saveMembers() {
  window.localStorage.setItem("flowboard-members", JSON.stringify(state.members));
}

function saveSessionUser() {
  window.localStorage.setItem("flowboard-session-user", JSON.stringify(state.currentUser));
}

function ensureDefaultAdmin() {
  const sessionExists = state.currentUser && state.members.some(
    (member) => member.id === state.currentUser.id && member.isActive !== false
  );
  if (!sessionExists) {
    state.currentUser = null;
    window.localStorage.removeItem("flowboard-session-user");
  }
}

function isAuthenticated() {
  return Boolean(state.currentUser);
}

function syncRoleWithCurrentUser() {
  if (!state.currentUser) {
    return;
  }
  state.currentRole = state.currentUser.role || "employee";
}

function renderSessionUi() {
  if (!sessionBadge || !sessionUserName || !sessionUserMeta || !logoutBtn) {
    return;
  }

  if (!state.currentUser) {
    sessionBadge.hidden = false;
    logoutBtn.hidden = true;
    sessionUserName.textContent = "寃뚯뒪??;
    sessionUserMeta.textContent = "濡쒓렇?몄씠 ?꾩슂?⑸땲??;
    if (roleSwitcher) {
      roleSwitcher.hidden = true;
    }
    return;
  }

  sessionBadge.hidden = false;
  logoutBtn.hidden = false;
  sessionUserName.textContent = state.currentUser.name;
  sessionUserMeta.textContent = `${getRoleLabel(state.currentUser.role)} 쨌 ${state.currentUser.loginId}`;
  if (roleSwitcher) {
    roleSwitcher.hidden = false;
  }
  if (roleValue) {
    roleValue.textContent = getRoleLabel(state.currentRole);
  }
}

function getGuestLandingView() {
  return state.members.length === 0 ? "signup" : "login";
}

function getViewForUnauthenticated(view) {
  if (["login", "signup"].includes(view)) {
    if (view === "login" && state.members.length === 0) {
      return "signup";
    }
    return view;
  }
  return getGuestLandingView();
}

function syncSignupRoleUi() {
  if (!signupRoleInput || !signupGuideText) {
    return;
  }

  if (state.members.length === 0) {
    signupRoleInput.value = "employee";
    signupRoleInput.disabled = true;
    signupGuideText.textContent = "泥?媛??怨꾩젙? 蹂댁븞???꾪빐 ?먮룞?쇰줈 愿由ъ옄 沅뚰븳?쇰줈 ?앹꽦?⑸땲?? ?댄썑 愿由ъ옄留??ㅻⅨ 愿由ъ옄 沅뚰븳??遺?ы븷 ???덉뒿?덈떎.";
    return;
  }

  signupRoleInput.disabled = false;
  if (!["employee", "freelancer"].includes(signupRoleInput.value)) {
    signupRoleInput.value = "employee";
  }
  signupGuideText.textContent = "?대??⑹씠???꾩닔 ?뺣낫留?諛쏆뒿?덈떎. ?대쫫, ?꾩씠?? 鍮꾨?踰덊샇? 吏곸썝/?꾨━?쒖꽌 援щ텇留??낅젰?섎㈃ ?⑸땲??";
}

function renderMembers() {
  if (!memberList || !memberCount || !activeMemberCount || !adminMemberCount) {
    return;
  }

  memberCount.textContent = String(state.members.length);
  activeMemberCount.textContent = String(state.members.filter((member) => member.isActive !== false).length);
  adminMemberCount.textContent = String(state.members.filter((member) => member.role === "admin").length);

  if (!state.members.length) {
    memberList.innerHTML = `<div class="empty-state">?깅줉???뚯썝???놁뒿?덈떎.</div>`;
    return;
  }

  memberList.innerHTML = state.members
    .map(
      (member) => `
        <article class="member-card">
          <div class="member-card-main">
            <strong>${escapeHtml(member.name)}</strong>
            <div class="member-meta">
              <span>${escapeHtml(member.loginId)}</span>
              <span>${getRoleLabel(member.role)}</span>
              <span>${member.department ? escapeHtml(member.department) : "遺??誘몄???}</span>
              <span>${member.title ? escapeHtml(member.title) : "吏곸콉 誘몄???}</span>
              <span>${member.isActive === false ? "鍮꾪솢?? : "?쒖꽦"}</span>
            </div>
            <p class="member-profile-line">${member.phone ? escapeHtml(member.phone) : "?곕씫泥?誘몃벑濡?}</p>
            ${member.note ? `<p class="member-profile-note">${escapeHtml(member.note)}</p>` : ""}
          </div>
          <div class="member-actions">
            <button class="ghost-btn" type="button" data-member-edit="${member.id}">?섏젙</button>
            <select class="member-role-select" data-member-role="${member.id}">
              <option value="admin" ${member.role === "admin" ? "selected" : ""}>愿由ъ옄</option>
              <option value="employee" ${member.role === "employee" ? "selected" : ""}>吏곸썝</option>
              <option value="freelancer" ${member.role === "freelancer" ? "selected" : ""}>?꾨━?쒖꽌</option>
            </select>
            <button class="ghost-btn" type="button" data-member-toggle="${member.id}" ${member.loginId === "admin" ? "disabled" : ""}>
              ${member.isActive === false ? "?쒖꽦?? : "鍮꾪솢?깊솕"}
            </button>
            ${
              member.loginId !== "admin"
                ? `<button class="remove-btn" type="button" data-member-delete="${member.id}">??젣</button>`
                : `<span class="member-status">湲곕낯 怨꾩젙</span>`
            }
          </div>
        </article>
      `
    )
    .join("");

  memberList.querySelectorAll("[data-member-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const member = state.members.find((item) => item.id === button.dataset.memberEdit);
      if (!member) {
        return;
      }
      openMemberModal(member);
    });
  });

  memberList.querySelectorAll("[data-member-role]").forEach((select) => {
    select.addEventListener("change", () => {
      const member = state.members.find((item) => item.id === select.dataset.memberRole);
      if (!member) {
        return;
      }
      member.role = select.value;
      if (state.currentUser?.id === member.id) {
        state.currentUser.role = member.role;
        saveSessionUser();
        syncRoleWithCurrentUser();
      }
      saveMembers();
      renderMembers();
      applyRoleAccess();
      showToast("?뚯썝 沅뚰븳??蹂寃쏀뻽?듬땲??");
    });
  });

  memberList.querySelectorAll("[data-member-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const member = state.members.find((item) => item.id === button.dataset.memberToggle);
      if (!member) {
        return;
      }
      if (member.loginId === "admin") {
        showToast("湲곕낯 愿由ъ옄 怨꾩젙? 鍮꾪솢?깊솕?????놁뒿?덈떎.");
        return;
      }
      member.isActive = member.isActive === false;
      if (state.currentUser?.id === member.id && member.isActive === false) {
        logoutCurrentUser(true);
        return;
      }
      saveMembers();
      renderMembers();
      showToast(member.isActive === false ? "?뚯썝 怨꾩젙??鍮꾪솢?깊솕?덉뒿?덈떎." : "?뚯썝 怨꾩젙???쒖꽦?뷀뻽?듬땲??");
    });
  });

  memberList.querySelectorAll("[data-member-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      state.members = state.members.filter((member) => member.id !== button.dataset.memberDelete);
      saveMembers();
      renderMembers();
      showToast("?뚯썝 怨꾩젙????젣?덉뒿?덈떎.");
    });
  });
}

async function loginMember(loginId, password) {
  if (!state.members.length) {
    showToast("?깅줉??怨꾩젙???놁뒿?덈떎. 癒쇱? ?뚯썝媛?낆쓣 吏꾪뻾??二쇱꽭??");
    switchView("signup");
    return false;
  }

  const member = state.members.find(
      (item) => item.loginId === loginId && item.password === password && item.isActive !== false
  );
  if (!member) {
    showToast("濡쒓렇???뺣낫瑜??ㅼ떆 ?뺤씤??二쇱꽭??");
    return false;
  }

  state.currentUser = {
    id: member.id,
    name: member.name,
    loginId: member.loginId,
    role: member.role,
  };
  saveSessionUser();
  if (member.role === "employee" || member.role === "freelancer") {
    await upsertLinkedEmployeeForMember(member);
  }
  syncRoleWithCurrentUser();
  applyRoleAccess();
  switchView(member.role === "admin" ? "calendar" : "hr");
  showToast(`${member.name} ?섏쑝濡?濡쒓렇?명뻽?듬땲??`);
  return true;
}

function logoutCurrentUser(skipToast = false) {
  state.currentUser = null;
  window.localStorage.removeItem("flowboard-session-user");
  applyRoleAccess();
  switchView(getGuestLandingView());
  if (!skipToast) {
    showToast("濡쒓렇?꾩썐?덉뒿?덈떎.");
  }
}

function renderStandaloneViews(activeView) {
  pageViews.forEach((section) => {
    section.hidden = true;
    section.style.removeProperty("display");
  });

  if (tasksView && boardViews.includes(activeView)) {
    tasksView.hidden = false;
    tasksView.dataset.boardView = activeView === "todos" ? "todos" : "calendar";
  }

  const targetView = document.getElementById(`${activeView}View`);
  if (targetView) {
    targetView.hidden = false;
    if (["login", "signup"].includes(activeView)) {
      targetView.style.display = "grid";
    }
  }

  if (loginView) {
    loginView.hidden = activeView !== "login";
    if (activeView === "login") {
      loginView.style.display = "grid";
    }
  }
  if (signupView) {
    signupView.hidden = activeView !== "signup";
    if (activeView === "signup") {
      signupView.style.display = "grid";
    }
  }
}

function syncDeviceMode() {
  if (!document.body) {
    return;
  }
  document.body.dataset.device = window.innerWidth <= 760 ? "mobile" : "desktop";
}

function switchView(view, shouldSyncHash = true) {
  if (view === "tasks") {
    view = "calendar";
  }
  if (!isAuthenticated()) {
    view = getViewForUnauthenticated(view);
  } else if (!isViewAllowedForRole(view)) {
    view = state.currentRole === "admin" ? "calendar" : "hr";
  }

  state.currentView = view;
  if (document.body) {
    document.body.dataset.view = view;
  }
  const isBoardView = boardViews.includes(view);
  pageHero.hidden = !isBoardView;
  renderStandaloneViews(view);
  workspaceTabs.forEach((tab) => {
    const isActive =
      (view === "client" && tab.dataset.view === "calendar") ||
      (view === "calendar" && tab.dataset.view === "calendar") ||
      (view === "todos" && tab.dataset.view === "todos") ||
      tab.dataset.view === view;
    tab.classList.toggle("active", isActive);
  });
  if (shouldSyncHash) {
    const nextHash = `#${view}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
  }
}

function getRoleLabel(role) {
  if (role === "employee") {
    return "吏곸썝";
  }
  if (role === "freelancer") {
    return "?꾨━?쒖꽌";
  }
  return "愿由ъ옄";
}

function isViewAllowedForRole(view) {
  const allowed = {
    admin: ["tasks", "calendar", "todos", "client", "hr", "employeeinfo", "estimate", "statement", "payroll", "members", "login", "signup"],
    employee: ["tasks", "calendar", "todos", "client", "hr", "employeeinfo", "payroll", "login", "signup"],
    freelancer: ["tasks", "calendar", "todos", "client", "hr", "employeeinfo", "payroll", "login", "signup"],
  };
  return allowed[state.currentRole]?.includes(view);
}

function applyRoleAccess() {
  ensureDefaultAdmin();
  syncRoleWithCurrentUser();
  renderSessionUi();

  authSensitiveTabs.forEach((tab) => {
    tab.hidden = tab.dataset.authVisible === "guest" ? isAuthenticated() : !isAuthenticated();
  });

  if (!isAuthenticated()) {
    roleSensitiveTabs.forEach((tab) => {
      tab.hidden = true;
    });
  } else {
    roleSensitiveTabs.forEach((tab) => {
      const visibleRoles = (tab.dataset.roleVisible || "admin").split(",");
      tab.hidden = !visibleRoles.includes(state.currentRole);
    });
  }

  roleSections.forEach((section) => {
    const onlyRole = section.dataset.roleSection;
    section.hidden = onlyRole && onlyRole !== state.currentRole;
  });

  if (!isAuthenticated()) {
    pageHero.hidden = true;
    switchView(getViewForUnauthenticated(state.currentView));
  } else if (!isViewAllowedForRole(state.currentView)) {
    switchView(state.currentRole === "admin" ? "calendar" : "hr");
  }

  renderMembers();
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

function isArchivedTask(taskId) {
  return state.archivedTaskIds.includes(String(taskId));
}

function saveArchivedTaskIds() {
  window.localStorage.setItem("flowboard-archived-task-ids", JSON.stringify(state.archivedTaskIds));
}

function toggleArchivedTask(taskId) {
  const key = String(taskId);
  if (isArchivedTask(key)) {
    state.archivedTaskIds = state.archivedTaskIds.filter((item) => item !== key);
  } else {
    state.archivedTaskIds = [...state.archivedTaskIds, key];
  }
  saveArchivedTaskIds();
}

function getVisibleTasks() {
  return state.tasks.filter((task) => {
    if (isArchivedTask(task.id)) {
      return false;
    }
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
    if (state.taskSearch) {
      const source = `${task.client} ${task.description} ${task.title} ${task.category}`.toLowerCase();
      if (!source.includes(state.taskSearch)) {
        return false;
      }
    }
    return true;
  });
}

function renderClientFilterOptions() {
  const clients = getActiveTasks()
    .map((task) => task.client)
    .filter(Boolean)
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort((a, b) => a.localeCompare(b, "ko"));
  const currentValue = state.clientFilter;
  clientFilterSelect.innerHTML = [
    `<option value="all">${text.clientFilterAll}</option>`,
    ...clients.map((client) => `<option value="${escapeHtml(client)}">${escapeHtml(client)}</option>`),
  ].join("");
  clientFilterSelect.value = clients.includes(currentValue) || currentValue === "all" ? currentValue : "all";
  state.clientFilter = clientFilterSelect.value;
}

function getActiveTasks() {
  return state.tasks.filter((task) => !isArchivedTask(task.id));
}

function openClientDetail(clientName) {
  if (!clientName) {
    return;
  }
  state.selectedClient = clientName;
  switchView("client");
  renderClientDetailView();
}

function renderClientDetailView() {
  if (!clientView) {
    return;
  }

  if (!state.selectedClient) {
    clientDetailTitle.textContent = "嫄곕옒泥??낅Т ?붿빟";
    clientDetailSubtitle.textContent = "?낅Т 移대뱶??罹섎┛?붿뿉??嫄곕옒泥섎? ?좏깮?섎㈃ ?꾩껜 ?먮쫫??蹂????덉뒿?덈떎.";
    clientDetailMetrics.innerHTML = `<article class="metric-card"><span class="metric-label">?좏깮??嫄곕옒泥?/span><strong>0</strong><small>嫄곕옒泥섎? ?좏깮??二쇱꽭??</small></article>`;
    clientTaskHeading.textContent = "嫄곕옒泥??낅Т 紐⑸줉";
    clientTaskCount.textContent = "0嫄?;
    clientTaskList.innerHTML = `<div class="empty-state">嫄곕옒泥섎? 癒쇱? ?좏깮??二쇱꽭??</div>`;
    clientDeadlineList.innerHTML = `<div class="empty-state">嫄곕옒泥섎? ?좏깮?섎㈃ ?ㅺ??ㅻ뒗 留덇컧怨??꾨즺 ?꾪솴??蹂????덉뒿?덈떎.</div>`;
    return;
  }

  const tasks = getActiveTasks()
    .filter((task) => task.client === state.selectedClient)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  const doneCount = tasks.filter((task) => task.status === "done").length;
  const overdueCount = tasks.filter((task) => isOverdue(task)).length;
  const upcomingTasks = tasks.filter((task) => task.status !== "done").slice(0, 6);
  const highPriorityCount = tasks.filter((task) => task.priority === "high").length;

  clientDetailTitle.textContent = state.selectedClient;
  clientDetailSubtitle.textContent = `${tasks.length}嫄댁쓽 ?깅줉 ?낅Т? 留덇컧 ?먮쫫?????붾㈃?먯꽌 ?뺤씤?⑸땲??`;
  clientTaskHeading.textContent = `${state.selectedClient} ?낅Т 紐⑸줉`;
  clientTaskCount.textContent = `${tasks.length}嫄?;

  clientDetailMetrics.innerHTML = `
    <article class="metric-card">
      <span class="metric-label">?깅줉 ?낅Т</span>
      <strong>${tasks.length}</strong>
      <small>?꾩옱 嫄곕옒泥섏뿉 ?곌껐???꾩껜 ?낅Т ??/small>
    </article>
    <article class="metric-card">
      <span class="metric-label">?꾨즺 ?낅Т</span>
      <strong>${doneCount}</strong>
      <small>?꾨즺 泥섎━???낅Т ??/small>
    </article>
    <article class="metric-card">
      <span class="metric-label">吏???낅Т</span>
      <strong>${overdueCount}</strong>
      <small>留덇컧?쇱씠 吏??誘몄셿猷??낅Т ??/small>
    </article>
    <article class="metric-card">
      <span class="metric-label">湲닿툒 ?곗꽑?쒖쐞</span>
      <strong>${highPriorityCount}</strong>
      <small>湲닿툒?쇰줈 ?쒖떆???낅Т ??/small>
    </article>
  `;

  clientTaskList.innerHTML = tasks.length
    ? tasks
        .map(
          (task) => `
            <article class="task-item client-task-item ${task.status === "done" ? "is-done" : ""}">
              <div class="task-content">
                <div class="task-client">${escapeHtml(task.client)}</div>
                <div class="task-description task-description-primary">${escapeHtml(task.description || task.title || "")}</div>
                <div class="task-meta">${getStatusLabel(task.status)} 쨌 ${getPriorityLabel(task.priority)}</div>
                <div class="task-dates">
                  <span class="task-date-chip">?묒닔??${formatDisplayDate(task.receivedDate)}</span>
                  <span class="task-date-chip">留덇컧??${formatDisplayDate(task.dueDate)}</span>
                  ${isOverdue(task) ? `<span class="task-date-chip task-date-chip-alert">留덇컧 吏??/span>` : ""}
                </div>
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">??嫄곕옒泥섏뿉 ?깅줉???낅Т媛 ?놁뒿?덈떎.</div>`;

  clientDeadlineList.innerHTML = upcomingTasks.length
    ? upcomingTasks
        .map(
          (task) => `
            <article class="schedule-item schedule-item-detail priority-${task.priority}">
              <div class="schedule-item-head">
                <strong>${escapeHtml(task.client)}</strong>
                <span class="day-count">${formatDisplayDate(task.dueDate)}</span>
              </div>
              <div class="schedule-meta schedule-description-strong">${escapeHtml(task.description || task.title || "")}</div>
              <div class="schedule-detail-row">
                <span class="task-date-chip">${getStatusLabel(task.status)}</span>
                <span class="task-date-chip">${getPriorityLabel(task.priority)}</span>
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">?ㅺ??ㅻ뒗 留덇컧 ?낅Т媛 ?놁뒿?덈떎.</div>`;
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


function updateHrMetrics() {
  employeeCount.textContent = `${state.employees.length}`;
  attendanceTodayCount.textContent = `${state.attendanceRecords.filter((item) => item.workDate === formatDateKey(today)).length}`;

  const payrollSummary = buildPayrollSummary();
  monthlyOvertimeHours.textContent = `${payrollSummary.reduce((sum, item) => sum + item.overtimeHours, 0).toFixed(1)}h`;
  monthlyWeekendHours.textContent = `${payrollSummary.reduce((sum, item) => sum + item.weekendHours, 0).toFixed(1)}h`;
  monthlyPayrollTotal.textContent = formatCurrency(payrollSummary.reduce((sum, item) => sum + item.totalPay, 0));
  payrollEmployeeCount.textContent = `${payrollSummary.length}`;
  payrollConfirmedCount.textContent = `${payrollSummary.filter((item) => item.payrollStatus === "confirmed" || item.payrollStatus === "paid").length} / ${payrollSummary.length}`;
  hrMonthlyOvertimeHours.textContent = monthlyOvertimeHours.textContent;
  hrMonthlyPayrollTotal.textContent = monthlyPayrollTotal.textContent;
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
  if (status === "late") return "吏媛?;
  if (status === "early") return "議고눜";
  if (status === "absent") return "寃곌렐";
  return "?뺤긽";
}

function calculatePayrollDeductions(employee, grossPay) {
  const gross = Number(grossPay || 0);

  if (employee?.employmentType === "freelancer") {
    const withholding = Math.round(gross * 0.033);
    return {
      typeLabel: "?꾨━?쒖꽌 3.3%",
      nationalPension: 0,
      healthInsurance: 0,
      employmentInsurance: 0,
      withholding,
      totalDeduction: withholding,
      netPay: gross - withholding,
    };
  }

  const nationalPension = Math.round(gross * 0.045);
  const healthInsurance = Math.round(gross * 0.03545);
  const employmentInsurance = Math.round(gross * 0.009);
  const totalDeduction = nationalPension + healthInsurance + employmentInsurance;

  return {
    typeLabel: "4?蹂댄뿕 異붿젙",
    nationalPension,
    healthInsurance,
    employmentInsurance,
    withholding: 0,
    totalDeduction,
    netPay: gross - totalDeduction,
  };
}

function getPayrollStatusKey(employeeId) {
  return `${state.payrollMonth}:${employeeId}`;
}

function getPayrollStatus(employeeId) {
  return state.payrollStatusMap[getPayrollStatusKey(employeeId)] || "draft";
}

function setPayrollStatus(employeeId, status) {
  state.payrollStatusMap = {
    ...state.payrollStatusMap,
    [getPayrollStatusKey(employeeId)]: status,
  };
  window.localStorage.setItem("flowboard-payroll-status-map", JSON.stringify(state.payrollStatusMap));
}

function getPayrollStatusLabel(status) {
  if (status === "confirmed") {
    return "?뺤젙";
  }
  if (status === "paid") {
    return "吏湲??꾨즺";
  }
  return "誘명솗??;
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

    const grossPay = Number(employee.baseSalary || 0) + totals.overtimePay + totals.weekendPay;
    const deductions = calculatePayrollDeductions(employee, grossPay);

    return {
      employee,
      ...totals,
      totalPay: grossPay,
      deductions,
      netPay: deductions.netPay,
      payrollStatus: getPayrollStatus(employee.id),
    };
  });
}

function renderPayrollSummary() {
  const summaryItems = buildPayrollSummary();
  if (!summaryItems.length) {
    payrollSummaryList.innerHTML = `<div class="empty-state">?깅줉??吏곸썝???놁뼱??湲됱뿬 ?붿빟??怨꾩궛?????놁뒿?덈떎.</div>`;
    payrollConfirmedCount.textContent = "0 / 0";
    return;
  }

  const finalizedCount = summaryItems.filter((item) => item.payrollStatus === "confirmed" || item.payrollStatus === "paid").length;
  payrollConfirmedCount.textContent = `${finalizedCount} / ${summaryItems.length}`;

  payrollSummaryList.innerHTML = summaryItems
    .map(
      (item) => `
        <article class="employee-card payroll-card">
          <div class="employee-card-head">
            <div>
              <strong>${item.employee.name}</strong>
              <p class="employee-card-subtitle">${state.payrollMonth} 湲곗? ?덉긽 湲됱뿬</p>
            </div>
            <span class="task-date-chip">${item.employee.employmentType === "freelancer" ? "?꾨━?쒖꽌" : "4?蹂댄뿕 ?곸슜 吏곸썝"}</span>
          </div>
          <div class="payroll-status-group" role="group" aria-label="payroll status">
            <button class="task-choice-btn ${item.payrollStatus === "draft" ? "is-active" : ""}" type="button" data-payroll-status="draft" data-employee-id="${item.employee.id}">誘명솗??/button>
            <button class="task-choice-btn ${item.payrollStatus === "confirmed" ? "is-active" : ""}" type="button" data-payroll-status="confirmed" data-employee-id="${item.employee.id}">?뺤젙</button>
            <button class="task-choice-btn ${item.payrollStatus === "paid" ? "is-active" : ""}" type="button" data-payroll-status="paid" data-employee-id="${item.employee.id}">吏湲??꾨즺</button>
          </div>
          <div class="payroll-total-row">
            <strong>${formatCurrency(item.netPay)}</strong>
            <span>${getPayrollStatusLabel(item.payrollStatus)} 쨌 ${item.overtimeHours.toFixed(1)}h ?쇨렐 쨌 ${item.weekendHours.toFixed(1)}h 二쇰쭚</span>
          </div>
          <div class="employee-pay-grid">
            <span>湲곕낯湲?${formatCurrency(item.employee.baseSalary)}</span>
            <span>?쇨렐 ?섎떦 ${formatCurrency(item.overtimePay)}</span>
            <span>二쇰쭚 ?섎떦 ${formatCurrency(item.weekendPay)}</span>
            <span>珥?吏湲?${formatCurrency(item.totalPay)}</span>
            <span>${item.deductions.typeLabel} ${formatCurrency(item.deductions.totalDeduction)}</span>
            <span>?ㅼ?湲?${formatCurrency(item.netPay)}</span>
          </div>
          <div class="attendance-insight">
            ${item.employee.employmentType === "insured"
              ? `<span class="task-date-chip">援???곌툑 ${formatCurrency(item.deductions.nationalPension)}</span>
                 <span class="task-date-chip">嫄닿컯蹂댄뿕 ${formatCurrency(item.deductions.healthInsurance)}</span>
                 <span class="task-date-chip">怨좎슜蹂댄뿕 ${formatCurrency(item.deductions.employmentInsurance)}</span>`
              : `<span class="task-date-chip">?먯쿇吏뺤닔 ${formatCurrency(item.deductions.withholding)}</span>`}
          </div>
        </article>
      `
    )
    .join("");

  payrollSummaryList.querySelectorAll("[data-payroll-status]").forEach((button) => {
    button.addEventListener("click", () => {
      setPayrollStatus(button.dataset.employeeId, button.dataset.payrollStatus);
      renderPayrollSummary();
      showToast(`湲됱뿬 ?곹깭瑜?${button.textContent}濡?蹂寃쏀뻽?듬땲??`);
    });
  });
}

function renderAttendanceSummary() {
  if (!attendanceSummaryCards) {
    return;
  }

  const filteredRecords = getFilteredAttendanceRecords();
  if (!filteredRecords.length) {
    attendanceSummaryCards.innerHTML = `
      <article class="attendance-summary-card">
        <span class="metric-label">?꾩옱 議고쉶 寃곌낵</span>
        <strong>0嫄?/strong>
        <small>?꾪꽣??留욌뒗 異쒗눜洹?湲곕줉???놁뒿?덈떎.</small>
      </article>
    `;
    return;
  }

  const totals = filteredRecords.reduce(
    (acc, record) => {
      const employee = state.employees.find((item) => String(item.id) === String(record.employeeId));
      const summary = calculateAttendance(record, employee);
      acc.records += 1;
      acc.totalHours += summary.totalHours;
      acc.overtimeHours += summary.overtimeHours;
      if (summary.attendanceStatus === "late") acc.late += 1;
      if (summary.attendanceStatus === "early") acc.early += 1;
      if (summary.attendanceStatus === "absent") acc.absent += 1;
      return acc;
    },
    { records: 0, totalHours: 0, overtimeHours: 0, late: 0, early: 0, absent: 0 }
  );

  attendanceSummaryCards.innerHTML = `
    <article class="attendance-summary-card">
      <span class="metric-label">議고쉶 湲곕줉</span>
      <strong>${totals.records}嫄?/strong>
      <small>?꾩옱 ?꾪꽣 湲곗? 異쒗눜洹?湲곕줉 ??/small>
    </article>
    <article class="attendance-summary-card">
      <span class="metric-label">珥?洹쇰Т ?쒓컙</span>
      <strong>${totals.totalHours.toFixed(1)}h</strong>
      <small>?꾪꽣???ы븿???꾩껜 洹쇰Т ?쒓컙</small>
    </article>
    <article class="attendance-summary-card">
      <span class="metric-label">?쇨렐 ?꾩쟻</span>
      <strong>${totals.overtimeHours.toFixed(1)}h</strong>
      <small>18???댄썑 ?꾩쟻 ?쒓컙</small>
    </article>
    <article class="attendance-summary-card">
      <span class="metric-label">洹쇳깭 ?댁뒋</span>
      <strong>${totals.late + totals.early + totals.absent}嫄?/strong>
      <small>吏媛?${totals.late} 쨌 議고눜 ${totals.early} 쨌 寃곌렐 ${totals.absent}</small>
    </article>
  `;
}

function getFilteredAttendanceRecords() {
  return state.attendanceRecords
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
}

function renderAttendanceBatchList() {
  if (!attendanceBatchList) {
    return;
  }

  if (!state.employees.length) {
    attendanceBatchList.innerHTML = `<div class="empty-state">吏곸썝??癒쇱? ?깅줉?섎㈃ 媛숈? ?좎쭨???щ윭 紐낆쓽 異쒗눜洹?湲곕줉????踰덉뿉 ?낅젰?????덉뒿?덈떎.</div>`;
    return;
  }

  attendanceBatchList.innerHTML = state.employees
    .map(
      (employee) => `
        <div class="attendance-batch-row">
          <label class="attendance-batch-toggle">
            <input type="checkbox" data-batch-enabled="${employee.id}" />
            <span>${escapeHtml(employee.name)}</span>
          </label>
          <span class="employee-type ${employee.employmentType}">${employee.employmentType === "insured" ? "4?蹂댄뿕 ?곸슜 吏곸썝" : "?꾨━?쒖꽌"}</span>
          <input type="time" data-batch-clock-in="${employee.id}" value="09:00" />
          <input type="time" data-batch-clock-out="${employee.id}" value="18:00" />
        </div>
      `
    )
    .join("");
}

async function saveBatchAttendance() {
  const workDate = attendanceBatchDateInput.value;
  if (!workDate) {
    return;
  }

  const rows = state.employees
    .map((employee) => {
      const enabled = document.querySelector(`[data-batch-enabled="${employee.id}"]`);
      const clockIn = document.querySelector(`[data-batch-clock-in="${employee.id}"]`);
      const clockOut = document.querySelector(`[data-batch-clock-out="${employee.id}"]`);
      return {
        employeeId: employee.id,
        enabled: enabled?.checked,
        clockIn: clockIn?.value,
        clockOut: clockOut?.value,
      };
    })
    .filter((row) => row.enabled && row.clockIn && row.clockOut && row.clockOut > row.clockIn)
    .map((row) => ({
      employee_id: Number(row.employeeId),
      work_date: workDate,
      clock_in: row.clockIn,
      clock_out: row.clockOut,
    }));

  if (!rows.length) {
    showToast("?쇨큵 ??ν븷 吏곸썝怨??쒓컙??癒쇱? ?좏깮??二쇱꽭??");
    return;
  }

  const { data, error } = await requestTasks("/rest/v1/attendance_records", {
    method: "POST",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify(rows),
  });

  if (error) {
    handleSupabaseError("Failed to insert batch attendance:", error);
    return;
  }

  state.attendanceRecords = [...(Array.isArray(data) ? data.map(mapAttendanceRecord) : []), ...state.attendanceRecords];
  renderHrWorkspace();
  showToast("異쒗눜洹?湲곕줉???쇨큵 ??ν뻽?듬땲??");
}

function openEmployeeDetailModal(employee) {
  state.employeeDetailId = employee.id;
  const records = state.attendanceRecords
    .filter((record) => String(record.employeeId) === String(employee.id) && record.workDate.startsWith(state.payrollMonth))
    .sort((a, b) => `${b.workDate}${b.clockIn}`.localeCompare(`${a.workDate}${a.clockIn}`));
  const payrollItem = buildPayrollSummary().find((item) => String(item.employee.id) === String(employee.id));

  employeeDetailTitle.textContent = `${employee.name} ?곸꽭`;
  employeeDetailSubtitle.textContent = `${state.payrollMonth} 湲곗? 洹쇳깭? 湲됱뿬 ?붿빟?낅땲??`;
  employeeDetailBody.innerHTML = `
    <div class="attendance-summary-grid">
      <article class="attendance-summary-card">
        <span class="metric-label">怨좎슜 ?뺥깭</span>
        <strong>${employee.employmentType === "insured" ? "4?蹂댄뿕" : "?꾨━?쒖꽌"}</strong>
        <small>湲곕낯湲?${formatCurrency(employee.baseSalary)}</small>
      </article>
      <article class="attendance-summary-card">
        <span class="metric-label">??洹쇰Т 湲곕줉</span>
        <strong>${records.length}嫄?/strong>
        <small>${state.payrollMonth} 湲곗? ?낅젰 嫄댁닔</small>
      </article>
      <article class="attendance-summary-card">
        <span class="metric-label">?덉긽 珥앹?湲?/span>
        <strong>${formatCurrency(payrollItem?.totalPay || 0)}</strong>
        <small>?쇨렐/二쇰쭚 ?섎떦 ?ы븿</small>
      </article>
      <article class="attendance-summary-card">
        <span class="metric-label">?덉긽 ?ㅼ?湲?/span>
        <strong>${formatCurrency(payrollItem?.netPay || 0)}</strong>
        <small>怨듭젣 異붿젙 諛섏쁺</small>
      </article>
    </div>
    <div class="employee-detail-records">
      ${
        records.length
          ? records
              .map((record) => {
                const summary = calculateAttendance(record, employee);
                return `
                  <article class="attendance-card attendance-${summary.attendanceStatus}">
                    <div class="attendance-card-head">
                      <div>
                        <strong>${formatLongDate(new Date(`${record.workDate}T00:00:00`))}</strong>
                        <p>${getAttendanceStatusLabel(summary.attendanceStatus)}</p>
                      </div>
                      <span class="task-date-chip">珥?${summary.totalHours.toFixed(1)}?쒓컙</span>
                    </div>
                    <div class="attendance-pay-grid">
                      <span>異쒓렐 ${record.clockIn}</span>
                      <span>?닿렐 ${record.clockOut}</span>
                      <span>?쇨렐 ${summary.overtimeHours.toFixed(1)}?쒓컙</span>
                      <span>二쇰쭚 ${summary.weekendHours.toFixed(1)}?쒓컙</span>
                    </div>
                  </article>
                `;
              })
              .join("")
          : `<div class="empty-state">?좏깮??湲곗? ?붿뿉 ?깅줉??異쒗눜洹?湲곕줉???놁뒿?덈떎.</div>`
      }
    </div>
  `;
  employeeDetailModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeEmployeeDetailModal() {
  state.employeeDetailId = null;
  employeeDetailModal.hidden = true;
  document.body.classList.remove("modal-open");
  employeeDetailBody.innerHTML = "";
}

function getSelectedEmployee() {
  if (!state.employees.length) {
    return null;
  }

  return (
    state.employees.find((employee) => String(employee.id) === String(state.employeeDetailId)) ||
    state.employees[0]
  );
}

function buildEmployeeMonthSummary(employee) {
  const records = state.attendanceRecords
    .filter((record) => String(record.employeeId) === String(employee.id) && record.workDate.startsWith(state.payrollMonth))
    .sort((a, b) => `${b.workDate}${b.clockIn}`.localeCompare(`${a.workDate}${a.clockIn}`));
  const payrollItem = buildPayrollSummary().find((item) => String(item.employee.id) === String(employee.id));
  const statusCounts = records.reduce(
    (acc, record) => {
      const summary = calculateAttendance(record, employee);
      acc[summary.attendanceStatus] = (acc[summary.attendanceStatus] || 0) + 1;
      acc.totalHours += summary.totalHours;
      return acc;
    },
    { normal: 0, late: 0, early: 0, absent: 0, totalHours: 0 }
  );

  return {
    records,
    payrollItem,
    statusCounts,
  };
}

function getEmployeeDocuments(employeeId) {
  return state.employeeDocuments
    .filter((document) => String(document.employeeId) === String(employeeId))
    .sort((a, b) => `${b.createdAt}`.localeCompare(`${a.createdAt}`));
}

function createEmployeeInfoDocumentMarkup(employee) {
  const documents = getEmployeeDocuments(employee.id);
  const previewDocument =
    documents.find((document) => String(document.id) === String(state.selectedEmployeeDocumentId)) || documents[0] || null;

  const uploadForm = state.currentRole === "admin"
    ? `
      <form class="employee-doc-upload-form" data-document-upload-form="${employee.id}">
        <label class="field">
          <span>臾몄꽌 援щ텇</span>
          <select name="documentType">
            <option value="?좊텇利?>?좊텇利?/option>
            <option value="怨꾩빟??>怨꾩빟??/option>
            <option value="?듭옣?щ낯">?듭옣?щ낯</option>
            <option value="湲고?">湲고?</option>
          </select>
        </label>
        <label class="field">
          <span>利앸튃?쒕쪟 ?뚯씪</span>
          <input name="documentFile" type="file" accept="image/*,.pdf" required />
        </label>
        <button type="submit" class="submit-btn task-submit">利앸튃?쒕쪟 ?낅줈??/button>
      </form>
    `
    : "";

  const previewMarkup = (() => {
    if (!previewDocument) {
      return `<div class="empty-state">?깅줉??利앸튃?쒕쪟媛 ?놁뒿?덈떎.</div>`;
    }

    if ((previewDocument.mimeType || "").startsWith("image/")) {
      return `<img class="employee-doc-preview-image" src="${previewDocument.fileData}" alt="${escapeHtml(previewDocument.fileName)}" />`;
    }

    if (previewDocument.mimeType === "application/pdf") {
      return `<iframe class="employee-doc-preview-frame" src="${previewDocument.fileData}" title="${escapeHtml(previewDocument.fileName)}"></iframe>`;
    }

    return `<div class="empty-state">???뺤떇???뚯씪? 誘몃━蹂닿린瑜?吏?먰븯吏 ?딆뒿?덈떎.</div>`;
  })();

  return `
    <section class="employee-info-section-card">
      <div class="employee-info-section-head">
        <div>
          <p class="section-label">利앸튃?쒕쪟</p>
          <h3>?낅줈??諛?誘몃━蹂닿린</h3>
        </div>
      </div>
      ${uploadForm}
      <div class="employee-doc-layout">
        <div class="employee-doc-list">
          ${
            documents.length
              ? documents
                  .map(
                    (document) => `
                      <button class="employee-doc-item${String(previewDocument?.id) === String(document.id) ? " is-active" : ""}" type="button" data-document-preview="${document.id}">
                        <strong>${escapeHtml(document.type)}</strong>
                        <span>${escapeHtml(document.fileName)}</span>
                      </button>
                    `
                  )
                  .join("")
              : `<div class="empty-state compact">?깅줉??臾몄꽌媛 ?놁뒿?덈떎.</div>`
          }
        </div>
        <div class="employee-doc-preview">${previewMarkup}</div>
      </div>
    </section>
  `;
}

function renderEmployeeStatusCalendar(employee) {
  const monthDate = new Date(`${state.payrollMonth}-01T00:00:00`);
  const startDay = new Date(monthDate);
  startDay.setDate(1);
  startDay.setDate(startDay.getDate() - startDay.getDay());

  const recordsByDate = new Map(
    state.attendanceRecords
      .filter(
        (record) =>
          String(record.employeeId) === String(employee.id) &&
          record.workDate.startsWith(`${monthDate.getFullYear()}-${String(monthDate.getMonth() + 1).padStart(2, "0")}`)
      )
      .map((record) => {
        const summary = calculateAttendance(record, employee);
        return [record.workDate, { record, summary }];
      })
  );

  const weekdayLabels = ["??, "??, "??, "??, "紐?, "湲?, "??]
    .map((label) => `<span class="employee-month-weekday">${label}</span>`)
    .join("");

  const cells = Array.from({ length: 35 }, (_, index) => {
    const currentDate = new Date(startDay);
    currentDate.setDate(startDay.getDate() + index);
    const dateKey = formatDateKey(currentDate);
    const recordInfo = recordsByDate.get(dateKey);
    const isCurrentMonth = currentDate.getMonth() === monthDate.getMonth();
    const status = recordInfo?.summary.attendanceStatus || "";
    return `
      <article class="employee-month-cell${isCurrentMonth ? "" : " is-outside"}${status ? ` is-${status}` : ""}">
        <span class="employee-month-date">${currentDate.getDate()}</span>
        ${
          recordInfo
            ? `<span class="employee-month-state">${getAttendanceStatusLabel(recordInfo.summary.attendanceStatus)}</span>
               <span class="employee-month-time">${recordInfo.record.clockIn} 쨌 ${recordInfo.record.clockOut}</span>`
            : `<span class="employee-month-state empty">${isCurrentMonth ? "湲곕줉 ?놁쓬" : ""}</span>`
        }
      </article>
    `;
  }).join("");

  return `
    <div class="employee-month-calendar">
      <div class="employee-month-weekdays">${weekdayLabels}</div>
      <div class="employee-month-grid">${cells}</div>
    </div>
  `;
}

function renderEmployeeInfoPage() {
  if (!employeeInfoEmpty || !employeeInfoDesktopList || !employeeInfoDesktopSummary || !employeeInfoDesktopSections || !employeeInfoMobileSelector || !employeeInfoMobileHero || !employeeInfoMobileSections) {
    return;
  }

  if (employeeInfoEditBtn) {
    employeeInfoEditBtn.hidden = state.currentRole !== "admin";
  }

  if (!state.employees.length) {
    employeeInfoEmpty.hidden = false;
    employeeInfoDesktopList.innerHTML = "";
    employeeInfoDesktopSummary.innerHTML = "";
    employeeInfoDesktopSections.innerHTML = "";
    employeeInfoMobileSelector.innerHTML = "";
    employeeInfoMobileHero.innerHTML = "";
    employeeInfoMobileSections.innerHTML = "";
    return;
  }

  employeeInfoEmpty.hidden = true;
  const employee = getSelectedEmployee();
  state.employeeDetailId = employee.id;
  const monthSummary = buildEmployeeMonthSummary(employee);

  const listMarkup = state.employees
    .map((item) => {
      const isActive = String(item.id) === String(employee.id);
      return `
        <button class="employee-info-list-item${isActive ? " is-active" : ""}" type="button" data-employee-info-id="${item.id}">
          <strong>${escapeHtml(item.name)}</strong>
          <span>${item.employmentType === "insured" ? "4?蹂댄뿕 吏곸썝" : "?꾨━?쒖꽌"}</span>
        </button>
      `;
    })
    .join("");

  employeeInfoDesktopList.innerHTML = listMarkup;
  employeeInfoMobileSelector.innerHTML = `<div class="employee-info-mobile-rail">${listMarkup}</div>`;

  const insuredLabel = employee.employmentType === "insured" ? "4?蹂댄뿕 ?곸슜 吏곸썝" : "?꾨━?쒖꽌";
  const totalPay = monthSummary.payrollItem?.totalPay || 0;
  const netPay = monthSummary.payrollItem?.netPay || 0;
  const firstLetter = escapeHtml(employee.name.slice(0, 1) || "吏?);
  const documentSectionMarkup = createEmployeeInfoDocumentMarkup(employee);

  employeeInfoDesktopSummary.innerHTML = `
    <div class="employee-profile-desktop">
      <div class="employee-profile-avatar">${firstLetter}</div>
      <div class="employee-profile-copy">
        <p class="section-label">吏곸썝 湲곕낯 ?꾨줈??/p>
        <h3>${escapeHtml(employee.name)}</h3>
        <p>${insuredLabel}</p>
        <div class="employee-profile-meta">
          <span class="task-date-chip">湲곕낯湲?${formatCurrency(employee.baseSalary)}</span>
          <span class="task-date-chip">?쇨렐 ${formatCurrency(employee.overtimeRate)}/h</span>
          <span class="task-date-chip">二쇰쭚 ${formatCurrency(employee.weekendRate)}/h</span>
        </div>
      </div>
      <div class="employee-profile-stats">
        <article class="attendance-summary-card">
          <span class="metric-label">?대쾲 ???덉긽 珥앷툒??/span>
          <strong>${formatCurrency(totalPay)}</strong>
          <small>湲곕낯湲?+ ?쇨렐 + 二쇰쭚 ?섎떦</small>
        </article>
        <article class="attendance-summary-card">
          <span class="metric-label">?대쾲 ???ㅼ?湲??덉긽</span>
          <strong>${formatCurrency(netPay)}</strong>
          <small>${state.payrollMonth} 湲곗? 怨듭젣 諛섏쁺</small>
        </article>
      </div>
    </div>
  `;

  const recordsMarkup = monthSummary.records.length
    ? monthSummary.records
        .slice(0, 6)
        .map((record) => {
          const summary = calculateAttendance(record, employee);
          return `
            <article class="employee-record-item">
              <div>
                <strong>${formatLongDate(new Date(`${record.workDate}T00:00:00`))}</strong>
                <p>${record.clockIn} - ${record.clockOut}</p>
              </div>
              <div class="employee-record-pills">
                <span class="attendance-status-pill ${summary.attendanceStatus}">${getAttendanceStatusLabel(summary.attendanceStatus)}</span>
                <span class="task-date-chip">珥?${summary.totalHours.toFixed(1)}?쒓컙</span>
              </div>
            </article>
          `;
        })
        .join("")
    : `<div class="empty-state">?대쾲 ??洹쇳깭 湲곕줉???꾩쭅 ?놁뒿?덈떎.</div>`;

  const sectionsMarkup = `
    <div class="employee-info-section-grid">
      <section class="employee-info-section-card">
        <div class="employee-info-section-head">
          <div>
            <p class="section-label">湲곕낯?뺣낫</p>
            <h3>?몄궗 ?뺣낫 ?붿빟</h3>
          </div>
        </div>
        <div class="employee-info-facts">
          <div><span>援щ텇</span><strong>${insuredLabel}</strong></div>
          <div><span>遺??/span><strong>${escapeHtml(employee.department || "誘몄???)}</strong></div>
          <div><span>吏곸콉</span><strong>${escapeHtml(employee.title || "誘몄???)}</strong></div>
          <div><span>?곕씫泥?/span><strong>${escapeHtml(employee.phone || "誘몃벑濡?)}</strong></div>
          <div><span>?대찓??/span><strong>${escapeHtml(employee.email || "誘몃벑濡?)}</strong></div>
          <div><span>二쇱냼</span><strong>${escapeHtml(employee.address || "誘몃벑濡?)}</strong></div>
          <div><span>湲곕낯湲?/span><strong>${formatCurrency(employee.baseSalary)}</strong></div>
          <div><span>?쇨렐 ?섎떦</span><strong>${formatCurrency(employee.overtimeRate)}/h</strong></div>
          <div><span>二쇰쭚 ?섎떦</span><strong>${formatCurrency(employee.weekendRate)}/h</strong></div>
          <div><span>湲됱뿬 ???/span><strong>${escapeHtml(employee.bankName || "誘몃벑濡?)}</strong></div>
          <div><span>怨꾩쥖踰덊샇</span><strong>${escapeHtml(employee.bankAccount || "誘몃벑濡?)}</strong></div>
          <div><span>?덇툑二?/span><strong>${escapeHtml(employee.accountHolder || "誘몃벑濡?)}</strong></div>
          <div><span>遺?묎?議?/span><strong>${escapeHtml(employee.dependents || "誘몃벑濡?)}</strong></div>
          <div><span>珥?洹쇰Т</span><strong>${monthSummary.statusCounts.totalHours.toFixed(1)}?쒓컙</strong></div>
          <div><span>?대쾲 ??湲곕줉</span><strong>${monthSummary.records.length}嫄?/strong></div>
        </div>
      </section>
      <section class="employee-info-section-card">
        <div class="employee-info-section-head">
          <div>
            <p class="section-label">洹쇳깭 ?먮쫫</p>
            <h3>${state.payrollMonth} ?붽컙 ?щ젰</h3>
          </div>
        </div>
        <div class="employee-status-overview">
          <span class="attendance-status-pill normal">?뺤긽 ${monthSummary.statusCounts.normal}</span>
          <span class="attendance-status-pill late">吏媛?${monthSummary.statusCounts.late}</span>
          <span class="attendance-status-pill early">議고눜 ${monthSummary.statusCounts.early}</span>
          <span class="attendance-status-pill absent">寃곌렐 ${monthSummary.statusCounts.absent}</span>
        </div>
        ${renderEmployeeStatusCalendar(employee)}
      </section>
      <section class="employee-info-section-card">
        <div class="employee-info-section-head">
          <div>
            <p class="section-label">理쒓렐 湲곕줉</p>
            <h3>異쒗눜洹??곸꽭</h3>
          </div>
        </div>
        <div class="employee-record-list">${recordsMarkup}</div>
      </section>
      <section class="employee-info-section-card">
        <div class="employee-info-section-head">
          <div>
            <p class="section-label">異붽? ?뺣낫</p>
            <h3>硫붾え? ?덈궡</h3>
          </div>
        </div>
        <div class="employee-info-notes">
          <p>${escapeHtml(employee.note || "吏곸썝蹂?硫붾え媛 ?꾩쭅 ?놁뒿?덈떎. ?낅Т ?뱀씠?ы빆?대굹 ?몄궗 硫붾え瑜?湲곕줉?대몮 ???덉뒿?덈떎.")}</p>
          <div class="employee-profile-meta">
            <span class="task-date-chip">利앸튃?쒕쪟</span>
            <span class="task-date-chip">湲됱뿬怨꾩쥖</span>
            <span class="task-date-chip">遺?묎?議?/span>
            <span class="task-date-chip">怨듭? ?뺤씤</span>
          </div>
        </div>
      </section>
      ${documentSectionMarkup}
    </div>
  `;

  employeeInfoDesktopSections.innerHTML = sectionsMarkup;

  employeeInfoMobileHero.innerHTML = `
    <section class="panel employee-info-mobile-card">
      <div class="employee-mobile-profile">
        <div class="employee-mobile-avatar">${firstLetter}</div>
        <div>
          <p class="section-label">吏곸썝 ?꾨줈??/p>
          <h3>${escapeHtml(employee.name)}</h3>
          <p>${insuredLabel}</p>
        </div>
      </div>
      <div class="employee-profile-meta">
        <span class="task-date-chip">湲곕낯湲?${formatCurrency(employee.baseSalary)}</span>
        <span class="task-date-chip">?ㅼ?湲?${formatCurrency(netPay)}</span>
      </div>
    </section>
  `;

  employeeInfoMobileSections.innerHTML = sectionsMarkup;

  document.querySelectorAll("[data-employee-info-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.employeeDetailId = button.dataset.employeeInfoId;
      state.selectedEmployeeDocumentId = null;
      renderEmployeeInfoPage();
    });
  });

  document.querySelectorAll("[data-document-preview]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedEmployeeDocumentId = button.dataset.documentPreview;
      renderEmployeeInfoPage();
    });
  });

  document.querySelectorAll("[data-document-upload-form]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const targetForm = event.currentTarget;
      const employeeId = targetForm.dataset.documentUploadForm;
      const fileInput = targetForm.querySelector('input[name="documentFile"]');
      const typeInput = targetForm.querySelector('select[name="documentType"]');
      const file = fileInput?.files?.[0];
      if (!file) {
        showToast("?낅줈?쒗븷 ?뚯씪???좏깮??二쇱꽭??");
        return;
      }

      const fileData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("?뚯씪???쎌? 紐삵뻽?듬땲??"));
        reader.readAsDataURL(file);
      });

      const { data, error } = await requestTasks("/rest/v1/employee_documents", {
        method: "POST",
        headers: {
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          employee_id: Number(employeeId),
          document_type: typeInput.value,
          file_name: file.name,
          mime_type: file.type || "",
          file_data: fileData,
        }),
      });

      if (error) {
        handleSupabaseError("Failed to upload employee document:", error);
        return;
      }

      const savedDocument = mapEmployeeDocumentRecord(Array.isArray(data) ? data[0] : data);
      state.employeeDocuments.unshift(savedDocument);
      state.selectedEmployeeDocumentId = savedDocument.id;
      renderEmployeeInfoPage();
      showToast("利앸튃?쒕쪟瑜??낅줈?쒗뻽?듬땲??");
    });
  });
}

function getStatusSortWeight(task) {
  if (task.status === "todo") {
    return 0;
  }
  if (task.status === "paused") {
    return 1;
  }
  return 2;
}

function getDeadlineSortWeight(task) {
  if (task.status === "done") {
    return 4;
  }
  if (isOverdue(task)) {
    return 0;
  }
  if (isTodayTask(task)) {
    return 1;
  }
  const dueOffset = daysBetween(today, new Date(`${task.dueDate}T00:00:00`));
  if (dueOffset <= 2) {
    return 2;
  }
  return 3;
}

function getTaskAutoSortKey(task) {
  return [
    getStatusSortWeight(task),
    getDeadlineSortWeight(task),
    priorityWeight(task.priority),
    task.dueDate || "9999-99-99",
    task.receivedDate || "9999-99-99",
    (task.client || "").toLowerCase(),
    (task.description || task.title || "").toLowerCase(),
    String(task.id),
  ];
}

function compareTaskAutoOrder(a, b) {
  const aKey = getTaskAutoSortKey(a);
  const bKey = getTaskAutoSortKey(b);

  for (let index = 0; index < aKey.length; index += 1) {
    if (aKey[index] < bKey[index]) {
      return -1;
    }
    if (aKey[index] > bKey[index]) {
      return 1;
    }
  }

  return 0;
}

function compareTasks(a, b) {
  const aManual = state.taskOrderMap[String(a.id)];
  const bManual = state.taskOrderMap[String(b.id)];
  const aHasManual = Number.isFinite(aManual);
  const bHasManual = Number.isFinite(bManual);

  if (aHasManual && bHasManual && aManual !== bManual) {
    return aManual - bManual;
  }

  if (aHasManual && !bHasManual) {
    return -1;
  }

  if (!aHasManual && bHasManual) {
    return 1;
  }

  return compareTaskAutoOrder(a, b);
}

function getSortedTasks(tasks) {
  return [...tasks].sort(compareTasks);
}

function normalizeTaskOrderMap() {
  const activeIds = new Set(getActiveTasks().map((task) => String(task.id)));
  state.taskOrderMap = Object.fromEntries(
    Object.entries(state.taskOrderMap).filter(([id, order]) => activeIds.has(id) && Number.isFinite(order))
  );
  saveTaskOrderMap();
}

function reorderVisibleTasks(draggedId, targetId) {
  const visibleIds = getSortedTasks(getVisibleTasks()).map((task) => String(task.id));
  const allOrderedIds = getSortedTasks(getActiveTasks()).map((task) => String(task.id));
  const orderedIds = [...visibleIds];
  const fromIndex = orderedIds.indexOf(String(draggedId));
  const toIndex = orderedIds.indexOf(String(targetId));

  if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
    return;
  }

  const [movedId] = orderedIds.splice(fromIndex, 1);
  orderedIds.splice(toIndex, 0, movedId);

  const nextIds = [];
  allOrderedIds.forEach((id) => {
    if (visibleIds.includes(id)) {
      if (!nextIds.includes(orderedIds[0])) {
        nextIds.push(orderedIds.shift());
      }
      return;
    }
    nextIds.push(id);
  });

  state.taskOrderMap = {};
  nextIds.forEach((id, index) => {
    state.taskOrderMap[id] = index;
  });
  saveTaskOrderMap();
}

function printPayrollView() {
  document.body.classList.add("print-payroll");
  window.print();
  window.setTimeout(() => {
    document.body.classList.remove("print-payroll");
  }, 300);
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

function escapeHtmlAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

function mapEmployeeRecord(record) {
  return {
    id: record.id,
    name: record.name || "",
    employmentType: record.employment_type || "insured",
    memberId: record.member_id || "",
    loginId: record.login_id || "",
    baseSalary: Number(record.base_salary || 0),
    overtimeRate: Number(record.overtime_rate || 0),
    weekendRate: Number(record.weekend_rate || 0),
    department: record.department || "",
    title: record.title || "",
    phone: record.phone || "",
    email: record.email || "",
    address: record.address || "",
    bankName: record.bank_name || "",
    bankAccount: record.bank_account || "",
    accountHolder: record.account_holder || "",
    dependents: record.dependents || "",
    note: record.note || "",
    createdAt: record.created_at || new Date().toISOString(),
  };
}

function mapEmployeeDocumentRecord(record) {
  return {
    id: record.id,
    employeeId: record.employee_id,
    type: record.document_type || "湲고?",
    fileName: record.file_name || "臾몄꽌",
    mimeType: record.mime_type || "",
    fileData: record.file_data || "",
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
  const [employeesResult, attendanceResult, documentsResult] = await Promise.all([
    requestTasks("/rest/v1/employees?select=*&order=created_at.desc"),
    requestTasks("/rest/v1/attendance_records?select=*&order=work_date.desc"),
    requestTasks("/rest/v1/employee_documents?select=*&order=created_at.desc"),
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
  state.employeeDocuments = documentsResult.error ? [] : (documentsResult.data ?? []).map(mapEmployeeDocumentRecord);
  renderHrWorkspace();
}

async function saveEmployee() {
  const name = employeeNameInput.value.trim();
  const linkedMember = state.members.find((member) => String(member.id) === String(employeeMemberInput?.value || ""));
  const employmentType = linkedMember ? getEmploymentTypeForRole(linkedMember.role) : employeeTypeInput.value;
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
      member_id: linkedMember?.id || null,
      login_id: linkedMember?.loginId || "",
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
  renderEmployeeMemberOptions(employeeMemberInput);
  renderHrWorkspace();
  showToast(`${name} 吏곸썝???깅줉?덉뒿?덈떎.`);
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
  showToast("異쒗눜洹?湲곕줉????ν뻽?듬땲??");
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
    showToast("異쒗눜洹?湲곕줉???ㅼ떆 遺덈윭?붿뒿?덈떎.");
    return;
  }

  const savedRecord = mapAttendanceRecord(rawRecord);
  state.attendanceRecords = state.attendanceRecords.map((record) =>
    String(record.id) === String(savedRecord.id) ? savedRecord : record
  );
  closeAttendanceModal();
  renderHrWorkspace();
  showToast("異쒗눜洹?湲곕줉???섏젙?덉뒿?덈떎.");
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
  showToast("異쒗눜洹?湲곕줉????젣?덉뒿?덈떎.");
}

function renderEmployeeSelect() {
  if (!state.employees.length) {
    attendanceEmployeeSelect.innerHTML = `<option value="">吏곸썝??癒쇱? ?깅줉??二쇱꽭??/option>`;
    return;
  }

  attendanceEmployeeSelect.innerHTML = [
    `<option value="">吏곸썝???좏깮?섏꽭??/option>`,
    ...state.employees.map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)}</option>`),
  ].join("");
}

function renderEditAttendanceEmployeeSelect() {
  if (!editAttendanceEmployeeSelect) {
    return;
  }

  if (!state.employees.length) {
    editAttendanceEmployeeSelect.innerHTML = `<option value="">吏곸썝??癒쇱? ?깅줉??二쇱꽭??/option>`;
    return;
  }

  editAttendanceEmployeeSelect.innerHTML = [
    `<option value="">吏곸썝???좏깮??二쇱꽭??/option>`,
    ...state.employees.map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)}</option>`),
  ].join("");
}


function openEmployeeModal(employee) {
  state.editingEmployeeId = employee.id;
  employeeModalTitle.textContent = `${employee.name} ?뺣낫 ?섏젙`;
  employeeModalSubtitle.textContent = "湲곕낯湲? ?섎떦, 怨좎슜 ?뺥깭瑜??섏젙?섍굅??吏곸썝????젣?????덉뒿?덈떎.";
  editEmployeeNameInput.value = employee.name || "";
  editEmployeeTypeInput.value = employee.employmentType || "insured";
  renderEmployeeMemberOptions(editEmployeeMemberInput, employee.memberId || "");
  editEmployeeBaseSalaryInput.value = employee.baseSalary || 0;
  editEmployeeOvertimeRateInput.value = employee.overtimeRate || 0;
  editEmployeeWeekendRateInput.value = employee.weekendRate || 0;
  editEmployeeDepartmentInput.value = employee.department || "";
  editEmployeeTitleInput.value = employee.title || "";
  editEmployeePhoneInput.value = employee.phone || "";
  editEmployeeEmailInput.value = employee.email || "";
  editEmployeeAddressInput.value = employee.address || "";
  editEmployeeBankNameInput.value = employee.bankName || "";
  editEmployeeBankAccountInput.value = employee.bankAccount || "";
  editEmployeeAccountHolderInput.value = employee.accountHolder || "";
  editEmployeeDependentsInput.value = employee.dependents || "";
  editEmployeeNoteInput.value = employee.note || "";
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
  const linkedMember = state.members.find((member) => String(member.id) === String(editEmployeeMemberInput?.value || ""));
  const employmentType = linkedMember ? getEmploymentTypeForRole(linkedMember.role) : editEmployeeTypeInput.value;
  const baseSalary = Number(editEmployeeBaseSalaryInput.value || 0);
  const overtimeRate = Number(editEmployeeOvertimeRateInput.value || 0);
  const weekendRate = Number(editEmployeeWeekendRateInput.value || 0);
  const department = editEmployeeDepartmentInput.value.trim();
  const title = editEmployeeTitleInput.value.trim();
  const phone = editEmployeePhoneInput.value.trim();
  const email = editEmployeeEmailInput.value.trim();
  const address = editEmployeeAddressInput.value.trim();
  const bankName = editEmployeeBankNameInput.value.trim();
  const bankAccount = editEmployeeBankAccountInput.value.trim();
  const accountHolder = editEmployeeAccountHolderInput.value.trim();
  const dependents = editEmployeeDependentsInput.value.trim();
  const note = editEmployeeNoteInput.value.trim();

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
        member_id: linkedMember?.id || null,
        login_id: linkedMember?.loginId || "",
        base_salary: baseSalary,
        overtime_rate: overtimeRate,
        weekend_rate: weekendRate,
        department,
        title,
        phone,
        email,
        address,
        bank_name: bankName,
        bank_account: bankAccount,
        account_holder: accountHolder,
        dependents,
        note,
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
  showToast("吏곸썝 ?뺣낫瑜??섏젙?덉뒿?덈떎.");
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
  showToast("吏곸썝????젣?덉뒿?덈떎.");
}


function normalizeAttendanceCalendarControls() {
  if (!attendanceCalendarEmployeeSelect || !attendanceCalendarMonthInput) {
    return { employeeId: "", monthValue: state.attendanceMonthFilter };
  }

  if (!attendanceCalendarMonthInput.value) {
    attendanceCalendarMonthInput.value = state.attendanceMonthFilter;
  }

  if (!attendanceCalendarEmployeeSelect.value) {
    const fallbackEmployeeId =
      state.attendanceEmployeeFilter !== "all"
        ? state.attendanceEmployeeFilter
        : state.employees[0]
          ? String(state.employees[0].id)
          : "";
    attendanceCalendarEmployeeSelect.value = fallbackEmployeeId;
  }

  return {
    employeeId: attendanceCalendarEmployeeSelect.value,
    monthValue: attendanceCalendarMonthInput.value || state.attendanceMonthFilter,
  };
}

function renderAttendanceCalendar() {
  if (!attendanceCalendarGrid || !attendanceCalendarEmployeeSelect || !attendanceCalendarMonthInput || !attendanceCalendarLabel) {
    return;
  }

  const currentEmployeeValue = attendanceCalendarEmployeeSelect.value;
  attendanceCalendarEmployeeSelect.innerHTML = [
    `<option value="">吏곸썝???좏깮??二쇱꽭??/option>`,
    ...state.employees.map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)}</option>`),
  ].join("");

  if (state.employees.some((employee) => String(employee.id) === String(currentEmployeeValue))) {
    attendanceCalendarEmployeeSelect.value = currentEmployeeValue;
  }

  const { employeeId, monthValue } = normalizeAttendanceCalendarControls();
  const monthDate = new Date(`${monthValue || formatDateKey(today).slice(0, 7)}-01T00:00:00`);

  if (!employeeId) {
    attendanceCalendarLabel.textContent = "吏곸썝???좏깮?섎㈃ ?붽컙 洹쇳깭 ?먮쫫??蹂댁엯?덈떎";
    attendanceCalendarGrid.innerHTML = `<div class="empty-state">吏곸썝???좏깮?섎㈃ ?뺤긽, 吏媛? 議고눜, 寃곌렐 ?먮쫫???붽컙 ?щ젰?쇰줈 ?뺤씤?????덉뒿?덈떎.</div>`;
    return;
  }

  const employee = state.employees.find((item) => String(item.id) === String(employeeId));
  const monthLabelText = `${monthDate.getFullYear()}??${monthDate.getMonth() + 1}??;
  attendanceCalendarLabel.textContent = `${employee?.name || "吏곸썝"} 쨌 ${monthLabelText} 洹쇳깭 ?щ젰`;

  const startDay = new Date(monthDate);
  startDay.setDate(1);
  startDay.setDate(startDay.getDate() - startDay.getDay());

  const recordsByDate = new Map(
    state.attendanceRecords
      .filter(
        (record) =>
          String(record.employeeId) === String(employeeId) &&
          record.workDate.startsWith(`${monthDate.getFullYear()}-${String(monthDate.getMonth() + 1).padStart(2, "0")}`)
      )
      .map((record) => {
        const summary = calculateAttendance(record, employee);
        return [record.workDate, { record, summary }];
      })
  );

  const dayNames = ["??, "??, "??, "??, "紐?, "湲?, "??]
    .map((dayName) => `<span class="attendance-calendar-weekday">${dayName}</span>`)
    .join("");

  const cells = Array.from({ length: 42 }, (_, index) => {
    const currentDate = new Date(startDay);
    currentDate.setDate(startDay.getDate() + index);
    const dateKey = formatDateKey(currentDate);
    const recordInfo = recordsByDate.get(dateKey);
    const isCurrentMonth = currentDate.getMonth() === monthDate.getMonth();
    const status = recordInfo?.summary.attendanceStatus || "";
    const weekendClass = currentDate.getDay() === 0 ? " sunday" : currentDate.getDay() === 6 ? " saturday" : "";
    return `
      <button
        class="attendance-calendar-cell${isCurrentMonth ? "" : " is-outside"}${status ? ` is-${status}` : ""}${weekendClass}"
        type="button"
        data-attendance-calendar-date="${dateKey}"
        ${recordInfo ? `data-attendance-record-id="${recordInfo.record.id}"` : ""}
      >
        <span class="attendance-calendar-date">${currentDate.getDate()}</span>
        ${
          recordInfo
            ? `
              <span class="attendance-calendar-status">${getAttendanceStatusLabel(recordInfo.summary.attendanceStatus)}</span>
              <span class="attendance-calendar-time">${recordInfo.record.clockIn}-${recordInfo.record.clockOut}</span>
            `
            : `<span class="attendance-calendar-status empty">${isCurrentMonth ? "湲곕줉 ?놁쓬" : ""}</span>`
        }
      </button>
    `;
  }).join("");

  attendanceCalendarGrid.innerHTML = `
    <div class="attendance-calendar-weekdays">${dayNames}</div>
    <div class="attendance-calendar-cells">${cells}</div>
  `;

  attendanceCalendarGrid.querySelectorAll("[data-attendance-record-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = state.attendanceRecords.find((item) => String(item.id) === String(button.dataset.attendanceRecordId));
      if (record) {
        openAttendanceModal(record);
      }
    });
  });
}

function renderAttendanceFilterOptions() {
  const currentFilterValue = state.attendanceEmployeeFilter;
  attendanceEmployeeFilterSelect.innerHTML = [
    `<option value="all">?꾩껜 吏곸썝</option>`,
    ...state.employees.map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)}</option>`),
  ].join("");
  attendanceEmployeeFilterSelect.value = state.employees.some((employee) => String(employee.id) === String(currentFilterValue))
    ? currentFilterValue
    : "all";
  state.attendanceEmployeeFilter = attendanceEmployeeFilterSelect.value;

  if (attendanceCalendarEmployeeSelect) {
    const calendarCurrentValue = attendanceCalendarEmployeeSelect.value;
    attendanceCalendarEmployeeSelect.innerHTML = [
      `<option value="">吏곸썝???좏깮??二쇱꽭??/option>`,
      ...state.employees.map((employee) => `<option value="${employee.id}">${escapeHtml(employee.name)}</option>`),
    ].join("");
    if (state.employees.some((employee) => String(employee.id) === String(calendarCurrentValue))) {
      attendanceCalendarEmployeeSelect.value = calendarCurrentValue;
    }
  }
}

function renderEmployees() {
  if (!state.employees.length) {
    employeeList.innerHTML = `<div class="empty-state">?깅줉??吏곸썝???놁뒿?덈떎. 湲곕낯湲됯낵 ?섎떦 湲곗???癒쇱? ?낅젰??二쇱꽭??</div>`;
    return;
  }

  const canManageEmployees = state.currentRole === "admin";

  employeeList.innerHTML = state.employees
    .map(
      (employee) => `
        <article class="employee-card">
          <div class="employee-card-head">
            <div>
              <strong>${employee.name}</strong>
              ${employee.loginId ? `<p class="employee-card-subtitle">?④쑴??${escapeHtml(employee.loginId)}</p>` : ""}
              <p class="employee-card-subtitle">${employee.employmentType === "insured" ? "4?蹂댄뿕 ?곸슜 吏곸썝" : "?꾨━?쒖꽌"}</p>
            </div>
            <div class="employee-card-tools">
              <span class="employee-type ${employee.employmentType}">${employee.employmentType === "insured" ? "4?蹂댄뿕 ?곸슜 吏곸썝" : "?꾨━?쒖꽌"}</span>
              <div class="employee-card-actions">
                <button class="ghost-btn attendance-edit-btn" type="button" data-employee-action="detail" data-id="${employee.id}">?곸꽭</button>
                ${canManageEmployees ? `<button class="ghost-btn attendance-edit-btn" type="button" data-employee-action="edit" data-id="${employee.id}">?섏젙</button>` : ""}
              </div>
            </div>
          </div>
          <div class="employee-pay-grid">
            <span>湲곕낯湲?${formatCurrency(employee.baseSalary)}</span>
            <span>?쇨렐 ?섎떦 ${formatCurrency(employee.overtimeRate)}/h</span>
            <span>二쇰쭚 ?섎떦 ${formatCurrency(employee.weekendRate)}/h</span>
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

  employeeList.querySelectorAll("[data-employee-action='detail']").forEach((button) => {
    button.addEventListener("click", () => {
      const employee = state.employees.find((item) => String(item.id) === String(button.dataset.id));
        if (employee) {
          if (attendanceCalendarEmployeeSelect) {
            attendanceCalendarEmployeeSelect.value = String(employee.id);
          }
          renderAttendanceCalendar();
          state.employeeDetailId = employee.id;
          renderEmployeeInfoPage();
          switchView("employeeinfo");
        }
      });
    });
  }

function renderAttendanceList() {
  if (!state.attendanceRecords.length) {
    attendanceList.innerHTML = `<div class="empty-state">異쒓렐湲곕줉遺媛 鍮꾩뼱 ?덉뒿?덈떎. 吏곸썝怨?異쒗눜洹??쒓컙???낅젰??二쇱꽭??</div>`;
    renderAttendanceSummary();
    renderAttendanceCalendar();
    return;
  }

  const filteredRecords = getFilteredAttendanceRecords();

  if (!filteredRecords.length) {
    attendanceList.innerHTML = `<div class="empty-state">?꾩옱 ?꾪꽣??留욌뒗 異쒓렐湲곕줉???놁뒿?덈떎. 議고쉶 ?붿씠??吏곸썝??諛붽퓭 蹂댁꽭??</div>`;
    renderAttendanceSummary();
    renderAttendanceCalendar();
    return;
  }

  const canEditAttendance = state.currentRole === "admin";

  attendanceList.innerHTML = `
    <div class="attendance-table-wrap">
      <table class="attendance-table">
        <thead>
          <tr>
            <th>吏곸썝紐?/th>
            <th>洹쇰Т??/th>
            <th>異쒓렐</th>
            <th>?닿렐</th>
            <th>珥앷렐臾?/th>
            <th>?쇨렐</th>
            <th>二쇰쭚</th>
            <th>洹쇳깭?곹깭</th>
            <th>?곸꽭</th>
          </tr>
        </thead>
        <tbody>
          ${filteredRecords
            .map((record) => {
              const employee = state.employees.find((item) => String(item.id) === String(record.employeeId));
              const summary = calculateAttendance(record, employee);
              return `
                <tr class="attendance-row attendance-${summary.attendanceStatus}" data-attendance-row="${record.id}">
                  <td class="attendance-cell-strong" data-label="吏곸썝紐?>
                    <button class="attendance-row-link" type="button" data-attendance-employee="${employee?.id || ""}">
                      ${employee?.name || "?대쫫 ?녿뒗 吏곸썝"}
                    </button>
                  </td>
                  <td data-label="洹쇰Т??>${record.workDate}</td>
                  <td data-label="異쒓렐">${record.clockIn}</td>
                  <td data-label="?닿렐">${record.clockOut}</td>
                  <td data-label="珥앷렐臾?>${summary.totalHours.toFixed(1)}h</td>
                  <td data-label="?쇨렐">${summary.overtimeHours.toFixed(1)}h</td>
                  <td data-label="二쇰쭚">${summary.weekendHours.toFixed(1)}h</td>
                  <td data-label="洹쇳깭?곹깭"><span class="attendance-status-pill is-${summary.attendanceStatus}">${getAttendanceStatusLabel(summary.attendanceStatus)}</span></td>
                  <td data-label="?곸꽭">${canEditAttendance ? `<button class="ghost-btn attendance-edit-btn" type="button" data-attendance-action="edit" data-id="${record.id}">?섏젙</button>` : `<button class="ghost-btn attendance-edit-btn" type="button" data-attendance-action="view" data-id="${record.id}">?곸꽭</button>`}</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;

  renderAttendanceSummary();
  renderAttendanceCalendar();

  attendanceList.querySelectorAll("[data-attendance-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const record = state.attendanceRecords.find((item) => String(item.id) === String(button.dataset.id));
      if (record) {
        openAttendanceModal(record);
      }
    });
  });

  attendanceList.querySelectorAll("[data-attendance-row]").forEach((row) => {
    row.addEventListener("click", () => {
      const record = state.attendanceRecords.find((item) => String(item.id) === String(row.dataset.attendanceRow));
      if (record) {
        openAttendanceModal(record);
      }
    });
  });

  attendanceList.querySelectorAll("[data-attendance-employee]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (attendanceCalendarEmployeeSelect) {
        attendanceCalendarEmployeeSelect.value = button.dataset.attendanceEmployee;
      }
      renderAttendanceCalendar();
    });
  });
}

function renderHrWorkspace() {
  renderEmployeeMemberOptions(employeeMemberInput);
  renderEmployeeSelect();
  renderEditAttendanceEmployeeSelect();
  renderAttendanceFilterOptions();
  renderEmployees();
  renderEmployeeInfoPage();
  renderPayrollSummary();
  renderAttendanceList();
  renderAttendanceSummary();
  renderAttendanceBatchList();
  renderAttendanceCalendar();
  updateHrMetrics();
}

taskReceivedDateInput.value = formatDateKey(today);
taskDueDateInput.value = formatDateKey(today);
taskStatusInput.value = "todo";
taskPriorityInput.value = "medium";
attendanceDateInput.value = formatDateKey(today);
attendanceClockInInput.value = "09:00";
attendanceClockOutInput.value = "18:00";
attendanceBatchDateInput.value = formatDateKey(today);
employeeTypeInput.value = "insured";
attendanceMonthFilterInput.value = state.attendanceMonthFilter;
if (attendanceCalendarMonthInput) {
  attendanceCalendarMonthInput.value = state.attendanceMonthFilter;
}
payrollMonthInput.value = state.payrollMonth;
syncDeviceMode();
syncSignupRoleUi();
syncFormMode();
loadHrState();
applyRoleAccess();
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
saveBatchAttendanceBtn.addEventListener("click", () => {
  void saveBatchAttendance();
});
printPayrollBtn.addEventListener("click", () => {
  printPayrollView();
});
const initialHashView = window.location.hash.replace("#", "");
const initialView = ["tasks", "calendar", "todos", "client", "hr", "employeeinfo", "estimate", "statement", "payroll", "members", "login", "signup"].includes(
  initialHashView
)
  ? initialHashView
  : isAuthenticated()
    ? "calendar"
    : getGuestLandingView();
switchView(isAuthenticated() ? initialView : getViewForUnauthenticated(initialView), false);
loadHrData();
loadTasks();

