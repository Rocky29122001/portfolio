import kyawKyarHero from "../assets/projects/kyaw-kyar/customer-homepage.jpg";
import cafemonoHero from "../assets/projects/cafemono/home.jpg";
import pmsHero from "../assets/projects/project-management/login.jpg";

/**
 * Work = professional delivery. Academic = coursework / learning.
 * Work items omit detail links by default (no public case-study page),
 * unless a project explicitly sets showDetail + link (e.g. Kyaw Kyar Carshowroom).
 * `image`, when present, replaces the abstract monogram visual on the project card.
 */

export const workProjects = [
  {
    title: "Kyaw Kyar Carshowroom",
    desc: "Frontend support with React.js: reusable components, clearer browsing flow, and responsive layout for the showroom experience.",
    tags: ["React.js", "JavaScript", "CSS"],
    link: "/projects/kyaw-kyar-carshowroom",
    showDetail: true,
    image: kyawKyarHero,
  },
  {
    title: "Project Management System",
    desc: "Internal site management app: mobile client with Laravel API backend for roles, content, and operations.",
    tags: ["Laravel", "REST API", "Mobile"],
    link: "/projects/project-management-system",
    showDetail: true,
    image: pmsHero,
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
    title: "Cafemono",
    desc: "A beautifully crafted cafe ordering platform: elegant menu browsing, a concierge-style order flow, and a Laravel-backed admin dashboard.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Laravel API"],
    link: "/projects/cafemono",
    showDetail: true,
    demoUrl: "https://cafemono.vercel.app/",
    image: cafemonoHero,
  },
  {
    title: "Myanmar Cane Handicraft Platform",
    desc: "E-commerce platform for traditional Myanmar cane crafts: product catalog, cart, and admin dashboard.",
    tags: ["Python", "Django", "Bootstrap", "JavaScript"],
    link: "/projects/cane-handicraft",
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
    title: "21 Game Blackjack App",
    desc: "Blackjack card game with a Flutter client, Laravel API backend, and MySQL persistence.",
    tags: ["Laravel", "Flutter", "MySQL"],
    link: "/projects/blackjack",
    showDetail: true,
  },
];
