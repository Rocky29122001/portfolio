/**
 * Work = professional delivery. Academic = coursework / learning.
 * Work items omit detail links (no public case-study page).
 */

export const workProjects = [
  {
    title: "Kyaw Kyar Carshowroom",
    desc: "Frontend support with React.js: reusable components, clearer browsing flow, and responsive layout for the showroom experience.",
    tags: ["React.js", "JavaScript", "CSS"],
    showDetail: false,
  },
  {
    title: "Project Management System",
    desc: "Internal site management app: mobile client with Laravel API backend for roles, content, and operations.",
    tags: ["Laravel", "REST API", "Mobile"],
    showDetail: false,
  },
  {
    title: "Mini POS",
    desc: "Point-of-sale backend: Laravel services for catalog, sales, and reporting (API-only, no public storefront).",
    tags: ["Laravel", "PHP", "MySQL"],
    showDetail: false,
  },
  {
    title: "Restaurant Pro",
    desc: "Restaurant web presence built with Laravel Blade: pages, menu, and server-rendered UI.",
    tags: ["Laravel", "Blade", "PHP", "MySQL"],
    showDetail: false,
  },
];

export const academicProjects = [
  {
    title: "Myanmar Cane Handicraft Platform",
    desc: "E-commerce platform for traditional Myanmar cane crafts: product catalog, cart, and admin dashboard.",
    tags: ["Python", "Django", "Bootstrap", "JavaScript"],
    link: "#",
    showDetail: true,
  },
  {
    title: "Bulletin Board System",
    desc: "Community forum with authentication, posts, and comment threads for announcements and discussion.",
    tags: ["PHP", "Laravel", "MySQL", "jQuery", "CSS"],
    link: "/projects/bulletin-board",
    showDetail: true,
  },
  {
    title: "21 Game Android App",
    desc: "Mobile card game based on classic Blackjack rules, with local persistence and responsive UI.",
    tags: ["Android Studio", "SQLite", "Mobile"],
    link: "#",
    showDetail: true,
  },
];
