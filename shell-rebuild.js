(function rebuildWorkspaceShell() {
  function run() {
    if (document.body.dataset.shellRebuilt === "true") {
      return;
    }

    const appShell = document.querySelector(".app-shell");
    const siteNav = document.querySelector(".site-nav");
    const hero = document.querySelector(".hero");
    const hub = document.querySelector(".workspace-hub");
    const tasksView = document.getElementById("tasksView");
    const pageViews = Array.from(document.querySelectorAll(".app-view"));

    if (!appShell || !siteNav || !hero || !hub || !tasksView || !pageViews.length) {
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

    const shell = document.createElement("div");
    shell.className = "rebuild-v3-shell";
    const sidebar = document.createElement("aside");
    sidebar.className = "rebuild-v3-sidebar";
    const content = document.createElement("main");
    content.className = "rebuild-v3-content";

    appShell.insertBefore(shell, appShell.firstChild);
    shell.append(sidebar, content);
    sidebar.appendChild(siteNav);

    const sideCard = document.createElement("section");
    sideCard.className = "rebuild-v3-sidecard";
    sideCard.innerHTML = `
      <p class="section-label">System</p>
      <h2>One clean flow</h2>
      <p>Tasks, deadlines, people records, and payroll now share a single workspace structure.</p>
    `;
    sidebar.appendChild(sideCard);

    const heroLabel = hero.querySelector(".section-label");
    const heroTitle = hero.querySelector("h1");
    const heroCopy = hero.querySelector(".hero-copy");
    if (heroLabel) heroLabel.textContent = "Control Center";
    if (heroTitle) heroTitle.textContent = "A rebuilt operating desk for daily work";
    if (heroCopy) {
      heroCopy.textContent =
        "The layout is reorganized around one path: intake work, review deadlines, check people data, and settle payroll without layout friction.";
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
    if (hubTitle) hubTitle.textContent = "Utility tools without leaving the main workflow";
    if (hubCopy) {
      hubCopy.textContent =
        "Portfolio, statements, and member management remain available as utility cards instead of competing with the work board.";
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

    content.append(hero, hub);
    pageViews.forEach((view) => content.appendChild(view));

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

    [
      document.getElementById("hrView"),
      document.getElementById("employeeinfoView"),
      document.getElementById("payrollView"),
      document.getElementById("membersView"),
      document.getElementById("loginView"),
      document.getElementById("signupView"),
      document.getElementById("clientView"),
    ].forEach((view) => {
      if (!view || view.querySelector(".rebuild-v3-view")) {
        return;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "rebuild-v3-view";
      while (view.firstChild) {
        wrapper.appendChild(view.firstChild);
      }
      view.appendChild(wrapper);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();
