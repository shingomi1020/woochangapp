import { test, expect } from "@playwright/test";

function formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function buildFixture() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const dueToday = formatDate(new Date(currentYear, currentMonth, Math.max(1, now.getDate())));
  const dueSoon = formatDate(new Date(currentYear, currentMonth, Math.max(2, now.getDate() + 2)));
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

async function mockApi(page, fixture) {
  await page.route("**/rest/v1/**", async (route) => {
    const url = new URL(route.request().url());
    const pathName = url.pathname;

    const respond = (body) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(body),
      });

    if (pathName.endsWith("/member_accounts")) {
      return respond(fixture.memberAccounts ?? []);
    }

    if (pathName.endsWith("/tasks")) {
      return respond(fixture.tasks ?? []);
    }

    if (pathName.endsWith("/task_attachments")) {
      return respond([]);
    }

    if (pathName.endsWith("/employees")) {
      return respond(fixture.employees ?? []);
    }

    if (pathName.endsWith("/attendance_records")) {
      return respond(fixture.attendanceRecords ?? []);
    }

    if (pathName.endsWith("/employee_documents")) {
      return respond([]);
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

test("desktop admin smoke flow renders dashboard, team, and payroll views", async ({ page }) => {
  const fixture = buildFixture();

  await page.addInitScript((member) => {
    window.localStorage.setItem(
      "flowboard-session-user",
      JSON.stringify({
        id: member.id,
        name: member.name,
        loginId: member.login_id,
        role: member.role,
      })
    );

    window.localStorage.setItem(
      "flowboard-members",
      JSON.stringify([
        {
          id: member.id,
          name: member.name,
          loginId: member.login_id,
          password: member.password,
          role: member.role,
          department: member.department,
          title: member.title,
          phone: member.phone,
          note: member.note,
          isActive: member.is_active,
        },
      ])
    );
  }, fixture.adminMember);

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

  await page.locator('button[data-view="employeeinfo"]').click();
  await expect(page.locator("#employeeinfoView")).toBeVisible();
  await expect(page.locator("#employeeInfoDesktopSummary")).toContainText("Alex Kim");

  await page.locator('button[data-view="payroll"]').click();
  await expect(page.locator("#payrollView")).toBeVisible();
  await expect(page.locator("#payrollSummaryList")).toContainText("Alex Kim");
});
