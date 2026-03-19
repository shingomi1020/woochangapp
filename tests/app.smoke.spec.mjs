import { test, expect } from "@playwright/test";

function formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function buildFixture() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const dueToday = formatDate(new Date(currentYear, currentMonth, Math.max(1, now.getDate())));
  const dueSoon = formatDate(new Date(currentYear, currentMonth, Math.min(daysInCurrentMonth, Math.max(2, now.getDate() + 2))));
  const monthPrefix = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}`;

  const adminMember = {
    id: "pw-admin",
    name: "Playwright Admin",
    login_id: "admin",
    password: "pass1234",
    role: "admin",
    department: "Ops",
    title: "Lead",
    phone: "010-0000-0000",
    note: "",
    is_active: true,
  };

  const employee = {
    id: 101,
    name: "Alex Kim",
    employment_type: "freelancer",
    member_id: "pw-admin",
    login_id: "admin",
    base_salary: 2600000,
    overtime_rate: 15000,
    weekend_rate: 15000,
    department: "Design",
    title: "Manager",
    phone: "010-2222-3333",
    email: "alex@example.com",
    address: "Seoul",
    bank_name: "Test Bank",
    bank_account: "123-456-789",
    account_holder: "Alex Kim",
    dependents: "",
    note: "Smoke test employee",
    created_at: `${monthPrefix}-01T09:00:00.000Z`,
  };

  const attendanceRecords = [
    {
      id: 5001,
      employee_id: 101,
      work_date: `${monthPrefix}-03`,
      clock_in: "09:00",
      clock_out: "18:00",
      created_at: `${monthPrefix}-03T18:00:00.000Z`,
    },
    {
      id: 5002,
      employee_id: 101,
      work_date: `${monthPrefix}-04`,
      clock_in: "09:10",
      clock_out: "18:00",
      created_at: `${monthPrefix}-04T18:00:00.000Z`,
    },
    {
      id: 5003,
      employee_id: 101,
      work_date: `${monthPrefix}-05`,
      clock_in: "09:00",
      clock_out: "17:20",
      created_at: `${monthPrefix}-05T17:20:00.000Z`,
    },
  ];

  const tasks = [
    {
      id: 2001,
      title: "Calendar item",
      done: false,
      status: "todo",
      priority: "high",
      category: "General",
      client: "Client A",
      description: "Print proof review",
      received_date: dueToday,
      due_date: dueToday,
    },
    {
      id: 2002,
      title: "Todo item",
      done: false,
      status: "paused",
      priority: "medium",
      category: "General",
      client: "Client B",
      description: "Signage follow-up",
      received_date: dueToday,
      due_date: dueSoon,
    },
  ];

  return {
    adminMember,
    employee,
    attendanceRecords,
    tasks,
  };
}

function cloneFixture(data) {
  return JSON.parse(JSON.stringify(data));
}

function parseIdFilter(url) {
  const raw = url.searchParams.get("id");
  if (!raw) {
    return null;
  }

  if (raw.startsWith("eq.")) {
    return [decodeURIComponent(raw.slice(3))];
  }

  if (raw.startsWith("in.(") && raw.endsWith(")")) {
    return raw
      .slice(4, -1)
      .split(",")
      .map((value) => decodeURIComponent(value));
  }

  return null;
}

function nextNumericId(records) {
  return records.reduce((max, record) => Math.max(max, Number(record?.id) || 0), 0) + 1;
}

async function seedAuthenticatedSession(page, member) {
  await page.addInitScript((currentMember) => {
    window.localStorage.setItem(
      "flowboard-session-user",
      JSON.stringify({
        id: currentMember.id,
        name: currentMember.name,
        loginId: currentMember.login_id,
        role: currentMember.role,
      })
    );

    window.localStorage.setItem(
      "flowboard-members",
      JSON.stringify([
        {
          id: currentMember.id,
          name: currentMember.name,
          loginId: currentMember.login_id,
          password: currentMember.password,
          role: currentMember.role,
          department: currentMember.department,
          title: currentMember.title,
          phone: currentMember.phone,
          note: currentMember.note,
          isActive: currentMember.is_active,
        },
      ])
    );
  }, member);
}

async function mockApi(page, fixture) {
  const db = {
    memberAccounts: cloneFixture(fixture.memberAccounts ?? []),
    tasks: cloneFixture(fixture.tasks ?? []),
    taskAttachments: cloneFixture(fixture.taskAttachments ?? []),
    employees: cloneFixture(fixture.employees ?? []),
    attendanceRecords: cloneFixture(fixture.attendanceRecords ?? []),
    employeeDocuments: cloneFixture(fixture.employeeDocuments ?? []),
  };

  let nextTaskId = nextNumericId(db.tasks);

  await page.route("**/rest/v1/**", async (route) => {
    const url = new URL(route.request().url());
    const pathName = url.pathname;
    const method = route.request().method();
    const requestBody = route.request().postData() ? JSON.parse(route.request().postData()) : {};
    const idFilter = parseIdFilter(url);

    const respond = (body, status = 200) =>
      route.fulfill({
        status,
        contentType: "application/json",
        body: JSON.stringify(body),
      });

    if (pathName.endsWith("/member_accounts")) {
      return respond(db.memberAccounts);
    }

    if (pathName.endsWith("/tasks")) {
      if (method === "GET") {
        const rows = idFilter
          ? db.tasks.filter((task) => idFilter.includes(String(task.id)))
          : db.tasks;
        return respond(rows);
      }

      if (method === "POST") {
        const createdTask = {
          id: nextTaskId++,
          created_at: new Date().toISOString(),
          ...requestBody,
        };
        db.tasks.unshift(createdTask);
        return respond([createdTask]);
      }

      if (method === "PATCH") {
        const updated = [];
        db.tasks = db.tasks.map((task) => {
          if (!idFilter || !idFilter.includes(String(task.id))) {
            return task;
          }

          const nextTask = {
            ...task,
            ...requestBody,
          };
          updated.push(nextTask);
          return nextTask;
        });
        return respond(updated);
      }

      if (method === "DELETE") {
        db.tasks = db.tasks.filter((task) => !idFilter?.includes(String(task.id)));
        return respond([]);
      }

      return respond([]);
    }

    if (pathName.endsWith("/task_attachments")) {
      return respond(db.taskAttachments);
    }

    if (pathName.endsWith("/employees")) {
      return respond(db.employees);
    }

    if (pathName.endsWith("/attendance_records")) {
      return respond(db.attendanceRecords);
    }

    if (pathName.endsWith("/employee_documents")) {
      return respond(db.employeeDocuments);
    }

    return respond([]);
  });
}

test("guest landing opens auth view and keeps hidden modals closed", async ({ page }) => {
  await mockApi(page, { memberAccounts: [], tasks: [], employees: [], attendanceRecords: [] });

  await page.goto("/");

  await expect(page.locator(".site-nav")).toBeVisible();
  await expect(page.locator("#signupView")).toBeVisible();
  await expect(page.locator("#attachmentPreviewModal")).toBeHidden();
  await expect(page.locator("#employeeDetailModal")).toBeHidden();
});

test("existing member can log in and land on the desktop dashboard", async ({ page }) => {
  const fixture = buildFixture();

  await mockApi(page, {
    memberAccounts: [fixture.adminMember],
    tasks: [],
    employees: [],
    attendanceRecords: [],
  });

  await page.goto("/");

  await expect(page.locator("#loginView")).toBeVisible();
  await page.locator("#loginIdInput").fill(fixture.adminMember.login_id);
  await page.locator("#loginPasswordInput").fill(fixture.adminMember.password);
  await page.locator('#loginForm button[type="submit"]').click();

  await expect(page.locator("body")).toHaveAttribute("data-view", "calendar");
  await expect(page.locator("#tasksView")).toBeVisible();
  await expect(page.locator("#sessionBadge")).toContainText("Playwright Admin");
  await expect(page.locator("#logoutBtn")).toBeVisible();
});

test("desktop admin smoke flow renders calendar selection, team, and payroll views", async ({ page }) => {
  const fixture = buildFixture();

  await seedAuthenticatedSession(page, fixture.adminMember);

  await mockApi(page, {
    memberAccounts: [fixture.adminMember],
    tasks: fixture.tasks,
    employees: [fixture.employee],
    attendanceRecords: fixture.attendanceRecords,
  });

  await page.goto("/");

  await expect(page.locator("#tasksView")).toBeVisible();
  await expect(page.locator("#calendarGrid")).toBeVisible();
  await expect(page.locator("#attachmentPreviewModal")).toBeHidden();
  await expect(page.locator("body")).toHaveAttribute("data-view", "calendar");
  await expect(page.locator("#selectedDateEvents")).toContainText("Print proof review");

  const dueSoonCard = page.locator(`#calendarGrid [data-date="${fixture.tasks[1].due_date}"]`).first();
  await dueSoonCard.scrollIntoViewIfNeeded();
  await dueSoonCard.dispatchEvent("click");
  await expect(page.locator("#selectedDateEvents")).toContainText("Signage follow-up");
  await expect(page.locator("#monthEventCount")).toContainText("2");

  await page.locator('button[data-view="employeeinfo"]').click();
  await expect(page.locator("#employeeinfoView")).toBeVisible();
  await expect(page.locator("#employeeInfoDesktopSummary")).toContainText("Alex Kim");

  await page.locator('button[data-view="payroll"]').click();
  await expect(page.locator("#payrollView")).toBeVisible();
  await expect(page.locator("#payrollSummaryList")).toContainText("Alex Kim");
});

test("desktop admin can create a todo and move it to done", async ({ page }) => {
  const fixture = buildFixture();
  const newTaskDescription = "Playwright created task";
  const newClientName = "Client Z";

  await seedAuthenticatedSession(page, fixture.adminMember);

  await mockApi(page, {
    memberAccounts: [fixture.adminMember],
    tasks: fixture.tasks,
    employees: [fixture.employee],
    attendanceRecords: fixture.attendanceRecords,
  });

  await page.goto("/");

  await page.locator('button[data-view="todos"]').click();
  await expect(page.locator("body")).toHaveAttribute("data-view", "todos");

  await page.locator("#taskClientInput").fill(newClientName);
  await page.locator("#taskDescriptionInput").fill(newTaskDescription);
  await page.locator("#taskReceivedDateInput").fill(fixture.tasks[0].received_date);
  await page.locator("#taskDueDateInput").fill(fixture.tasks[0].due_date);
  await page.locator("#taskStatusInput").selectOption("todo");
  await page.locator("#taskPriorityInput").selectOption("high");
  await page.locator('#taskForm button[type="submit"]').click();

  const createdTask = page.locator("#taskList .task-item").filter({ hasText: newTaskDescription }).first();
  await expect(createdTask).toBeVisible();
  await expect(page.locator("#taskProgressLabel")).toContainText("0 / 3");

  await createdTask.locator('[data-action="status"][data-value="done"]').click();
  await expect(createdTask).toHaveClass(/is-done/);

  await page.locator('.task-filter [data-filter="done"]').click();
  await expect(page.locator("#taskList")).toContainText(newTaskDescription);
  await expect(page.locator("#taskProgressLabel")).toContainText("1 / 3");
});
