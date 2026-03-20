(function rebuildWorkspaceShell() {
  function run() {
    if (document.body.dataset.shellRebuilt === "true") {
      return;
    }

    const siteNav = document.querySelector(".site-nav");
    const hero = document.querySelector(".hero");
    const hub = document.querySelector(".workspace-hub");
    const tasksView = document.getElementById("tasksView");

    if (!siteNav || !hero || !hub || !tasksView) {
      return;
    }

    document.body.classList.add("rebuild-v3");
    document.body.dataset.shellRebuilt = "true";

    const brandTitle = siteNav.querySelector(".site-brand strong");
    const brandCopy = siteNav.querySelector(".site-brand p");
    if (brandTitle) brandTitle.textContent = "WOOCHANG OPS";
    if (brandCopy) brandCopy.textContent = "Operations workspace";

    const navLabels = {
      calendar: "Dashboard",
      todos: "Tasks",
      hr: "People",
      payroll: "Payroll",
      employeeinfo: "Profiles",
      login: "Login",
      signup: "Sign Up",
    };

    siteNav.querySelectorAll(".site-menu-link").forEach((button) => {
      const nextLabel = navLabels[button.dataset.view];
      if (nextLabel) {
        button.textContent = nextLabel;
      }
    });

    const heroLabel = hero.querySelector(".section-label");
    const heroTitle = hero.querySelector("h1");
    const heroCopy = hero.querySelector(".hero-copy");
    if (heroLabel) heroLabel.textContent = "Control Center";
    if (heroTitle) heroTitle.textContent = "A rebuilt operating desk for daily work";
    if (heroCopy) {
      heroCopy.textContent =
        "The workspace is reset around one safe path: review deadlines, update tasks, and manage people records without layout friction.";
    }

    const focusTodayBtn = document.getElementById("focusTodayBtn");
    const focusInputBtn = document.getElementById("focusInputBtn");
    [focusTodayBtn, focusInputBtn].forEach((button, index) => {
      if (!button) {
        return;
      }
      const labelNode = button.lastElementChild || button;
      labelNode.textContent = index === 0 ? "Focus Today" : "Add New Task";
    });

    const hubTitle = hub.querySelector("h2");
    const hubCopy = hub.querySelector(".workspace-hub-copy");
    if (hubTitle) hubTitle.textContent = "Utility tools in a quieter secondary zone";
    if (hubCopy) {
      hubCopy.textContent =
        "Member, statement, and portfolio tools stay available, but they no longer compete with the daily work surface.";
    }

    hub.querySelectorAll(".workspace-card").forEach((button) => {
      const labelMap = {
        portfolio: ["Archive", "Portfolio"],
        statement: ["Docs", "Statements"],
        members: ["Admin", "Members"],
      };
      const next = labelMap[button.dataset.shortcutView];
      if (!next) {
        return;
      }
      const small = button.querySelector(".workspace-card-label");
      const strong = button.querySelector(".workspace-card-title");
      if (small) small.textContent = next[0];
      if (strong) strong.textContent = next[1];
    });

    const calendarPanel = tasksView.querySelector(".panel-calendar");
    const taskPanel = tasksView.querySelector(".panel-tasks");
    const taskHeadLabel = taskPanel?.querySelector(".panel-head .section-label");
    const taskHeadTitle = taskPanel?.querySelector(".panel-head h2");
    const calendarHeadLabel = calendarPanel?.querySelector(".panel-head .section-label");
    const calendarHeadTitle = calendarPanel?.querySelector(".panel-head h2");

    if (taskHeadLabel) taskHeadLabel.textContent = "Task Board";
    if (taskHeadTitle) taskHeadTitle.textContent = "Work that should move now";
    if (calendarHeadLabel) calendarHeadLabel.textContent = "Calendar";
    if (calendarHeadTitle) calendarHeadTitle.textContent = "Deadline calendar";

    [
      ["#hrView", ".hr-hero .section-label", "People Ops"],
      ["#hrView", ".hr-hero h2", "People setup, attendance, and review in one board"],
      ["#employeeinfoView", ".employee-info-hero .section-label", "Employee Profiles"],
      ["#employeeinfoView", ".employee-info-hero h2", "Profiles, documents, and records on one surface"],
      ["#payrollView", ".hr-hero .section-label", "Payroll"],
      ["#payrollView", ".hr-hero h2", "Monthly settlement and payout status without clutter"],
      ["#membersView", ".hr-hero .section-label", "Members"],
      ["#membersView", ".hr-hero h2", "Accounts and roles organized by operating policy"],
      ["#loginView", ".auth-panel h2", "Sign in to the workspace"],
      ["#signupView", ".auth-panel h2", "Create a new operator account"],
    ].forEach(([viewSelector, targetSelector, text]) => {
      const target = document.querySelector(`${viewSelector} ${targetSelector}`);
      if (target) {
        target.textContent = text;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();
