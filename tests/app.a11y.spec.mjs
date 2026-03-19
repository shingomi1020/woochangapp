import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

function formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function buildFixture() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const dueToday = formatDate(new Date(currentYear, currentMonth, Math.max(1, now.getDate())));

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

  return {
    adminMember,
    tasks: [
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
    ],
  };
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
      return respond([]);
    }

    if (pathName.endsWith("/attendance_records")) {
      return respond([]);
    }

    if (pathName.endsWith("/employee_documents")) {
      return respond([]);
    }

    return respond([]);
  });
}

function expectNoSeriousViolations(results) {
  const seriousViolations = results.violations.filter((violation) =>
    ["serious", "critical"].includes(String(violation.impact || "").toLowerCase())
  );

  expect(
    seriousViolations,
    seriousViolations
      .map((violation) => `${violation.id}: ${violation.help} (${violation.impact})`)
      .join("\n")
  ).toEqual([]);
}

test("guest auth panel has no serious accessibility violations", async ({ page }) => {
  await mockApi(page, { memberAccounts: [], tasks: [] });

  await page.goto("/");
  await expect(page.locator("#signupView")).toBeVisible();

  const results = await new AxeBuilder({ page }).include("#signupView").analyze();
  expectNoSeriousViolations(results);
});

test("authenticated dashboard shell has no serious accessibility violations", async ({ page }) => {
  const fixture = buildFixture();

  await seedAuthenticatedSession(page, fixture.adminMember);
  await mockApi(page, {
    memberAccounts: [fixture.adminMember],
    tasks: fixture.tasks,
  });

  await page.goto("/");
  await expect(page.locator("#tasksView")).toBeVisible();

  const results = await new AxeBuilder({ page })
    .include(".site-nav")
    .include(".hero")
    .include("#tasksView")
    .disableRules(["color-contrast"])
    .analyze();

  expectNoSeriousViolations(results);
});
