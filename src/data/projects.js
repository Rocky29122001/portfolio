import kyawKyarHero from "../assets/projects/kyaw-kyar/customer-homepage.jpg";
import cafemonoHero from "../assets/projects/cafemono/home.jpg";
import pmsHero from "../assets/projects/project-management/login.jpg";
import blackjackHero from "../assets/projects/blackjack/game-screen.jpg";
import caneHandicraftHero from "../assets/projects/cane-handicraft/marketplace-home.jpg";
import bulletinBoardHero from "../assets/projects/bulletin-board/post-board.jpg";
import restaurantProHero from "../assets/projects/restaurant-pro/homepage.jpg";
import animeShopHero from "../assets/projects/anime-figure-shop/shop-home.jpg";
import businessCardHero from "../assets/projects/business-card-4u/saved-cards.jpg";

/**
 * Work = professional delivery. Academic = coursework / learning.
 * Work items omit detail links by default (no public case-study page),
 * unless a project explicitly sets showDetail + link (e.g. Kyaw Kyar Carshowroom).
 * `image`, when present, replaces the abstract monogram visual on the project card.
 * `status`, when present, shows an extra badge (e.g. "In progress") next to the group badge.
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
    desc: "Restaurant management system (R-Pro+) built with Laravel Blade: dine-in table map, category-first POS ordering, and back-office stock/supplier/reporting modules.",
    tags: ["Laravel", "Blade", "PHP", "MySQL"],
    link: "/projects/restaurant-pro",
    showDetail: true,
    image: restaurantProHero,
  },
  {
    title: "Anime Figure Shop",
    desc: "Web and mobile sales platform for local merchants: anime-figure product management, POS-style sales, and an admin dashboard.",
    tags: ["React", "Laravel", "Flutter"],
    link: "/projects/anime-figure-shop",
    showDetail: true,
    status: "In progress",
    image: animeShopHero,
  },
  {
    title: "School Management System",
    desc: "Management system for private and international schools, with separate admin and parent apps for attendance, timetables, classes, and marks.",
    tags: ["Laravel", "Flutter"],
    showDetail: false,
    status: "In progress",
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
    desc: "Multi-shop e-commerce marketplace for traditional Myanmar cane crafts: shop owner dashboards, PayPal checkout, and admin oversight.",
    tags: ["Python", "Django", "Bootstrap", "JavaScript"],
    link: "/projects/cane-handicraft",
    showDetail: true,
    image: caneHandicraftHero,
  },
  {
    title: "Bulletin Board System",
    desc: "Community forum with authentication, posts, and comment threads for announcements and discussion.",
    tags: ["PHP", "Laravel", "MySQL", "jQuery", "CSS"],
    link: "/projects/bulletin-board",
    showDetail: true,
    image: bulletinBoardHero,
  },
  {
    title: "21 Game Blackjack App",
    desc: "Blackjack card game with a Flutter client, Laravel API backend, and MySQL persistence.",
    tags: ["Laravel", "Flutter", "MySQL"],
    link: "/projects/blackjack",
    showDetail: true,
    image: blackjackHero,
  },
  {
    title: "Business Card 4U",
    desc: "Business networking app for saving and finding business cards, connecting with partners, and adding other users as friends.",
    tags: ["Flutter", "Laravel"],
    link: "/projects/business-card-4u",
    showDetail: true,
    image: businessCardHero,
  },
  {
    title: "My Daily Routine",
    desc: "Personal routine and fitness tracker: save daily routines, record calorie intake, and keep a history of lifted weights.",
    tags: ["Flutter", "Firebase"],
    showDetail: false,
  },
];
