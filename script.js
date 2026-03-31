const dotnetStrengths = [
  {
    label: "01 // Backend",
    title: "Robust APIs",
    description:
      "Building scalable .NET Core applications with clean architecture patterns. Focus on RESTful API design, Entity Framework integration, and database optimization for enterprise solutions.",
  },
  {
    label: "02 // Architecture",
    title: "Clean Design",
    description:
      "Implementing SOLID principles and design patterns for maintainable codebases. Experience with microservices architecture and dependency injection patterns.",
  },
  {
    label: "03 // Integration",
    title: "Full Stack",
    description:
      "Seamless integration between .NET backends and Angular frontends. Expertise in creating cohesive full-stack solutions with efficient data flow.",
  },
];

const angularStrengths = [
  {
    label: "01 // Frontend",
    title: "Modern SPAs",
    description:
      "Building responsive Angular applications with component-based architecture. Expertise in Angular 16+, TypeScript, and modern UI frameworks like Kendo UI and PrimeNG.",
  },
  {
    label: "02 // State Management",
    title: "Reactive Patterns",
    description:
      "Implementing RxJS observables and reactive programming patterns for efficient state management. Experience with Angular services and component communication.",
  },
  {
    label: "03 // UI Libraries",
    title: "Rich Components",
    description:
      "Developing custom reusable component libraries and integrating enterprise UI frameworks. Focus on accessibility and user experience optimization.",
  },
];

const dotnetSkills = [
  { icon: "terminal", name: "C# / .NET", details: "Core, Web API, EF" },
  {
    icon: "storage",
    name: "SQL Server",
    details: "Design, Query, Optimization",
  },
  { icon: "api", name: "REST APIs", details: "Design, Integration" },
  { icon: "layers", name: "Architecture", details: "Clean, Microservices" },
  { icon: "shield", name: "Security", details: "Auth, JWT, HTTPS" },
];

const angularSkills = [
  { icon: "view_quilt", name: "Angular", details: "16+, Components" },
  { icon: "javascript", name: "TypeScript", details: "ES6+, Type Safety" },
  { icon: "palette", name: "Kendo UI", details: "Rich Components" },
  { icon: "web", name: "PrimeNG", details: "UI Framework" },
  { icon: "css", name: "Styling", details: "CSS3, SCSS" },
  { icon: "code", name: "HTML", details: "Semantic, Accessible" },
  { icon: "sync_alt", name: "RxJS", details: "Observables, Operators" },
  { icon: "settings", name: "Tools", details: "Git, JIRA, VS Code" },
];

const professionalProjects = [
  {
    number: "PROJECT 001",
    name: "OpsBeat Employee tracking System",
    role: "Frontend Developer",
    description:
      "Developed and maintained a scalable Angular-based web application for enterprise user engagement and management. Implemented features such as user onboarding, quality management, performance dashboards, and knowledge management modules. Collaborated with cross-functional teams to enhance UI/UX, integrate third-party components, and ensure robust authentication and security practices. Utilized modern frontend technologies, followed best coding standards, and contributed to comprehensive documentation and testing processes to support high-quality software delivery.",
    tech: ["ANGULAR 16+", "KENDO UI", "TYPESCRIPT", "MICRO FRONTEND"],
    duration: "Oct 2025 - Present",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    number: "PROJECT 002",
    name: "PPL+ Application",
    role: "Angular Developer",
    description:
      "Designed and developed responsive, scalable user interfaces using Angular within a micro-frontend architecture, enabling independent deployment and modular feature ownership across teams. Integrated frontend modules seamlessly with an ASP.NET Core backend through well-structured RESTful APIs, ensuring reliable and efficient data exchange. Improved application performance by implementing lazy loading, optimized change detection, and effective state management strategies to reduce bundle size and enhance runtime efficiency. Collaborated closely with backend engineers, QA, and product stakeholders in an Agile environment, contributing to iterative releases, high code quality, and maintainable, production-ready solutions.",
    tech: ["ANGULAR", "COMPONENT LIBRARY", "SCSS", "REUSABLE COMPONENTS"],
    duration: "May 2024 - July 2025",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    link: "#",
  },
];

const personalProjects = [
  {
    number: "PROJECT 003",
    name: "Enterprise Component Library",
    role: "Full Stack Developer",
    description:
      "Custom Angular library with shared components designed for scalability and reusability across multiple applications. Includes loaders, navigation components, and form controls.",
    tech: ["ANGULAR", "TYPESCRIPT", "SCSS", "NPM PACKAGE"],
    duration: "Personal Project",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    link: "#",
  },
];

const experienceData = [
  {
    company: "Cognizant",
    companyIcon: "business",
    totalStart: "2023-10-01",
    totalEnd: null,
    roles: [
      {
        role: "Programmer Analyst",
        type: "Full-time",
        period: "Dec 2024 — Present",
        startDate: "2024-12-01",
        endDate: null,
        location: "On-site",
        skills: ["Angular Developer", "Kendo UI", "TypeScript"],
        description:
          "Required Analysis and development of PPL+ Application for AETN. Developed Key modules using Kendo UI, delivering rich and accessible components. Developed and maintained custom reusable Angular Library for shared components like loaders, breadcrumbs and headers.",
        isActive: true,
      },
      {
        role: "Programmer Analyst Trainee",
        type: "Full-time",
        period: "Dec 2023 — Dec 2024",
        startDate: "2023-12-01",
        endDate: "2024-12-01",
        location: "On-site",
        skills: ["Angular", "TypeScript", "+7 skills"],
        description:
          "As a PAT, I contributed to the development of Web Application using Angular framework. Coordinated testing and validation, ensuring compliance with industry standards. Consistently met project goals and deadlines while maximizing efficiency.",
        isActive: false,
      },
      {
        role: "Full Stack Intern",
        type: "Internship",
        period: "Oct 2023 — Dec 2023",
        startDate: "2023-10-01",
        endDate: "2023-12-01",
        location: "On-site",
        skills: ["MySQL", "ASP.NET", "+7 skills"],
        description: "",
        isActive: false,
      },
    ],
  },
  {
    company: "HighRadius",
    companyIcon: "hub",
    totalStart: "2022-02-01",
    totalEnd: "2022-05-01",
    roles: [
      {
        role: "Consultant Intern",
        type: "Internship",
        period: "Feb 2022 — May 2022",
        startDate: "2022-02-01",
        endDate: "2022-05-01",
        location: "Chandigarh, India",
        skills: ["Project Management", "Analytic Problem Solving", "+3 skills"],
        description: "",
        isActive: false,
      },
    ],
  },
];

function calculateDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  if (months < 1) months = 1;

  if (months < 12) {
    return `${months} mo${months > 1 ? "s" : ""}`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let duration = `${years} yr${years > 1 ? "s" : ""}`;
  if (remainingMonths > 0) {
    duration += ` ${remainingMonths} mo`;
  }

  return duration;
}

function renderStrengths(data) {
  const container = document.getElementById("strengths-grid");
  if (!container) return;

  container.innerHTML = data
    .map(
      (s) => `
      <div class="strength-card">
        <span class="strength-label">${s.label}</span>
        <h3 class="strength-title">${s.title}</h3>
        <p class="strength-description">${s.description}</p>
      </div>
    `,
    )
    .join("");
}

function renderSkills(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data
    .map(
      (skill) => `
      <div class="skill-card">
        <span class="material-symbols-outlined">${skill.icon}</span>
        <h4 class="skill-name">${skill.name}</h4>
        <p class="skill-details">${skill.details}</p>
      </div>
    `,
    )
    .join("");
}

function renderProjects(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <div class="project-item">
        <div class="project-image" style="background-image: url('${project.image}'); background-size: cover; background-position: center;"></div>
        <div class="project-content">
          <span class="project-number">${project.number}</span>
          <h4 class="project-title">${project.name}</h4>
          <p class="project-role">${project.role} — ${project.duration}</p>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <a href="${project.link}" class="project-link">
            View Details
            <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
          </a>
        </div>
      </div>
    `,
    )
    .join("");
}

function renderExperience() {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = experienceData
    .map((company) => {
      const totalDuration = calculateDuration(
        company.totalStart,
        company.totalEnd,
      );

      const rolesHTML = company.roles
        .map((exp, index) => {
          const isLast = index === company.roles.length - 1;
          const duration = calculateDuration(exp.startDate, exp.endDate);

          const skillsHTML = exp.skills
            .map((s) => `<span class="exp-skill-tag">${s}</span>`)
            .join("");

          const descHTML = exp.description
            ? `<p class="exp-role-description">${exp.description}</p>`
            : "";

          return `
            <div class="exp-role-item ${isLast ? "last" : ""}">
              <div class="exp-role-connector">
                <div class="exp-role-dot ${exp.isActive ? "active" : ""}"></div>
              </div>
              <div class="exp-role-content">
                <div class="exp-role-header">
                  <h4 class="exp-role-title">${exp.role}</h4>
                  <span class="exp-role-duration-badge">${duration}</span>
                </div>
                <p class="exp-role-meta">${exp.type} · ${exp.period}</p>
                <p class="exp-role-location">
                  <span class="material-symbols-outlined">location_on</span>
                  ${exp.location}
                </p>
                ${descHTML}
                ${skillsHTML ? `<div class="exp-skills-row">${skillsHTML}</div>` : ""}
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <div class="exp-company-block">
          <div class="exp-company-header">
            <div class="exp-company-logo">
              <span class="material-symbols-outlined">${company.companyIcon}</span>
            </div>
            <div class="exp-company-info">
              <h3 class="exp-company-name">${company.company}</h3>
              <span class="exp-company-total-duration">${totalDuration} total</span>
            </div>
          </div>
          <div class="exp-roles-list">
            ${rolesHTML}
          </div>
        </div>
      `;
    })
    .join("");
}

function switchTheme(theme) {
  const isAngular = theme === "angular";

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });

  document.querySelectorAll(".profile-tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.platform === theme);
  });

  document.querySelectorAll(".skills-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.platform === theme);
  });

  document.body.className = isAngular ? "theme-angular" : "theme-dotnet";

  const primaryColor = isAngular ? "#dd0031" : "#0078D4";
  document.documentElement.style.setProperty("--primary", primaryColor);
  document.documentElement.style.setProperty(
    "--primary-rgb",
    isAngular ? "221, 0, 49" : "0, 120, 212",
  );

  const heroTitleLine1 = document.getElementById("hero-title-line1");
  const heroTitleLine2 = document.getElementById("hero-title-line2");
  const heroBadge = document.getElementById("hero-badge");
  const heroDescription = document.getElementById("hero-description");
  const codeSnippet = document.getElementById("code-snippet");

  if (heroTitleLine1)
    heroTitleLine1.textContent = isAngular ? "ANGULAR" : ".NET";
  if (heroTitleLine2) heroTitleLine2.textContent = "DEVELOPER";
  if (heroBadge)
    heroBadge.textContent = "Frontend Developer | 2+ Year Experience";

  if (heroDescription) {
    heroDescription.textContent = isAngular
      ? "Creating responsive, enterprise-grade Angular applications with modern UI frameworks. Focused on component reusability and user experience."
      : "Building robust backend APIs with .NET Core and modern web applications with Angular. Focused on clean architecture and scalable solutions.";
  }

  if (codeSnippet) {
    if (isAngular) {
      codeSnippet.innerHTML = `<code><span class="text-slate-500">// Component with Kendo UI</span>
<span class="code-accent">@Component</span>({
  selector: <span class="text-emerald-400">'app-dashboard'</span>,
  template: <span class="text-emerald-400">\`
    &lt;kendo-grid [data]="items"&gt;
    &lt;/kendo-grid&gt;
  \`</span>
})
<span class="text-blue-400">export class</span> <span class="text-emerald-400">DashboardComponent</span> {
  items: <span class="text-blue-400">any</span>[] = [];
  
  <span class="code-accent">ngOnInit</span>() {
    <span class="text-blue-400">this</span>.loadData();
  }
}</code>`;
    } else {
      codeSnippet.innerHTML = `<code><span class="code-accent">[HttpGet]</span>
<span class="text-blue-400">public async</span> Task&lt;IActionResult&gt; <span class="text-emerald-400">GetData</span>() {
  <span class="text-blue-400">var</span> result = <span class="text-blue-400">await</span> _service.<span class="code-accent">FetchAsync</span>();
  <span class="text-blue-400">return</span> <span class="text-emerald-400">Ok</span>(result);
}
<span class="text-slate-500">// Angular Component Integration</span>
<span class="text-blue-400">this</span>.apiService.<span class="code-accent">getData</span>().<span class="code-accent">subscribe</span>(data => {
  <span class="text-blue-400">this</span>.items = data;
});</code>`;
    }
  }

  renderStrengths(isAngular ? angularStrengths : dotnetStrengths);
}

function initProjectTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const projectContainers = document.querySelectorAll(".projects-container");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      projectContainers.forEach((container) =>
        container.classList.remove("active-tab"),
      );

      button.classList.add("active");
      const tabType = button.dataset.tab;
      const targetContainer = document.getElementById(`${tabType}-projects`);
      if (targetContainer) targetContainer.classList.add("active-tab");
    });
  });
}

function initProfileTabs() {
  const tabs = document.querySelectorAll(".profile-tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const platform = tab.dataset.platform;
      switchTheme(platform);
    });
  });
}

function initThemeSwitcher() {
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      switchTheme(theme);
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&to=19bcs2063@gmail.com&su=${subject}&body=${body}`,
      "_blank",
    );
    form.reset();
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.setProperty("--primary", "#dd0031");
  document.documentElement.style.setProperty("--primary-rgb", "221, 0, 49");

  renderSkills(angularSkills, "angular-skills-grid");
  renderSkills(dotnetSkills, "dotnet-skills-grid");
  renderStrengths(angularStrengths);
  renderProjects(professionalProjects, "professional-projects");
  renderProjects(personalProjects, "personal-projects");
  renderExperience();

  initProjectTabs();
  initProfileTabs();
  initThemeSwitcher();
  initContactForm();
  initSmoothScroll();
});
