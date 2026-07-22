import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaMugHot,
  FaCheck,
  FaLayerGroup,
  FaUserFriends,
  FaMapMarkedAlt,
  FaLock,
  FaClipboardList,
  FaChartBar,
  FaTags,
} from "react-icons/fa";
import { fadeUp } from "../animations";
import homeShot from "../assets/projects/cafemono/home.jpg";
import menuShot from "../assets/projects/cafemono/menu.jpg";
import loginShot from "../assets/projects/cafemono/login.jpg";

const screenshots = [
  {
    src: homeShot,
    alt: "Cafemono homepage hero with the Elevate Your Ritual headline",
    step: "Screen 01",
    kicker: "Homepage",
    title: "A premium hero built to sell the ritual, not just the drink",
    text: "The landing page leads with an editorial headline, a warm cafe photo, and a floating \"Freshly Roasted\" card — then funnels straight into Order Now or View Menu.",
  },
  {
    src: menuShot,
    alt: "Cafemono menu page showing the Coffee category with Latte, Espresso, and Cappuccino cards",
    step: "Screen 02",
    kicker: "Menu",
    title: "A categorized menu instead of one long list",
    text: "Coffee, Drinks, and Snacks each get their own small paged carousel, so browsing 18 items feels curated rather than overwhelming.",
  },
  {
    src: loginShot,
    alt: "Cafemono login page with a cafe photo on one side and a sign-in form on the other",
    step: "Screen 03",
    kicker: "Login",
    title: "A sign-in screen that still feels on-brand",
    text: "Checkout is gated behind an account, so the login page carries the same warm photography and typography as the rest of the site instead of dropping into a generic form.",
  },
];

const orderHighlights = [
  "Dine-in, takeaway, or delivery — chosen with a single tap",
  "The visual panel updates live as a guest picks an item",
  "Checkout is gated behind an account, guiding guests to log in first",
  "Clear, human error messages instead of raw API errors",
];

const storefrontFeatures = [
  {
    title: "Live menu, graceful fallback",
    text: "The homepage pulls featured drinks straight from the Laravel API, and quietly falls back to sample items if the API isn't reachable — so the storefront never shows a blank page.",
  },
  {
    title: "Categorized browsing",
    text: "The menu page groups items into Coffee, Drinks, and Snacks, each with its own small paged carousel instead of one long scrolling list.",
  },
  {
    title: "Brand story & team",
    text: "The About page pairs an editorial brand story with a team grid introducing the head barista, roast master, and pastry chef.",
  },
  {
    title: "Concierge contact",
    text: "The Contact page combines an inquiry form with an embedded map, styled to feel like a concierge desk rather than a plain contact form.",
  },
];

const backendFeatures = [
  {
    title: "Token-based auth",
    text: "Registration and login run through a Laravel Sanctum API, issuing a bearer token the frontend attaches to every authenticated request.",
  },
  {
    title: "Full order lifecycle",
    text: "Orders move through pending, confirmed, preparing, ready, completed, and cancelled states, each change recorded in an order status log.",
  },
  {
    title: "Admin dashboard",
    text: "A staff-only dashboard shows live stats — total orders, products, categories, and revenue — alongside a recent-orders table with status pills.",
  },
  {
    title: "Promotions, reviews & FAQs",
    text: "The same API also handles promotions, product reviews, notifications, and an FAQ section with visitor feedback, rounding out the storefront.",
  },
];

const AnimatedSection = ({ className, children }) => (
  <Motion.section
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.18 }}
  >
    {children}
  </Motion.section>
);

const CafemonoDetail = ({ onNavigate }) => (
  <main className="detail-page">
    <Motion.section
      className="detail-page-header"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      <div className="detail-topline">
        <a
          className="back-link"
          href="/#projects"
          aria-label="Back to projects"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/#projects");
          }}
        >
          <FaArrowLeft aria-hidden="true" />
        </a>
        <p className="detail-kicker">Personal project</p>
      </div>

      <h1>Cafemono</h1>
      <p>
        A full-stack coffee ordering experience: a React and Tailwind storefront
        for browsing and ordering, backed by a Laravel API that also powers a
        staff-facing admin dashboard for products, categories, and orders.
      </p>

      <div className="detail-tags" aria-label="Technologies used">
        <span>React</span>
        <span>React Router</span>
        <span>Tailwind CSS</span>
        <span>Framer Motion</span>
        <span>Laravel (Sanctum)</span>
      </div>

      <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a
          href="https://cafemono.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Visit live demo <FaExternalLinkAlt style={{ marginLeft: "6px" }} />
        </a>
        <a
          href="/#projects"
          className="btn"
          style={{ background: "transparent", color: "var(--text)", border: "1px solid var(--border)" }}
          onClick={(e) => {
            e.preventDefault();
            onNavigate("/#projects");
          }}
        >
          Back to projects
        </a>
      </div>
    </Motion.section>

    <AnimatedSection className="detail-section">
      <div className="login-showcase-copy" style={{ maxWidth: "760px" }}>
        <p className="detail-kicker">Order experience</p>
        <h2>A concierge-style flow, not just a cart</h2>
        <p>
          Picking an item swaps a live visual panel before the order is even
          submitted, and choosing dine-in, takeaway, or delivery is a single
          tap. Checkout sits behind an account, so guests are guided to log in
          instead of hitting a dead end.
        </p>
        <div className="login-points">
          {orderHighlights.map((item) => (
            <span key={item}>
              <FaCheck aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>

    {screenshots.map((shot) => (
      <AnimatedSection className="detail-section shot-section" key={shot.kicker}>
        <div className="screen-section-copy">
          <p className="detail-kicker">{shot.step} · {shot.kicker}</p>
          <h2>{shot.title}</h2>
          <p>{shot.text}</p>
        </div>
        <figure className="shot-frame">
          <figcaption className="shot-frame-bar">
            <span className="shot-dot shot-dot-red" />
            <span className="shot-dot shot-dot-yellow" />
            <span className="shot-dot shot-dot-green" />
          </figcaption>
          <img src={shot.src} alt={shot.alt} loading="lazy" />
        </figure>
      </AnimatedSection>
    ))}

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">Storefront</p>
        <h2>Browsing built for a premium cafe brand</h2>
      </div>
      <div className="detail-grid">
        {storefrontFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("Live menu") ? <FaMugHot aria-hidden="true" /> : null}
            {item.title.includes("Categorized") ? <FaLayerGroup aria-hidden="true" /> : null}
            {item.title.includes("team") ? <FaUserFriends aria-hidden="true" /> : null}
            {item.title.includes("Concierge") ? <FaMapMarkedAlt aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">Laravel backend</p>
        <h2>An API built to run a real cafe, not just a demo</h2>
      </div>
      <div className="detail-grid">
        {backendFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("Token") ? <FaLock aria-hidden="true" /> : null}
            {item.title.includes("lifecycle") ? <FaClipboardList aria-hidden="true" /> : null}
            {item.title.includes("dashboard") ? <FaChartBar aria-hidden="true" /> : null}
            {item.title.includes("Promotions") ? <FaTags aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Purpose</p>
        <h2>Why Cafemono goes beyond a landing page</h2>
      </div>
      <p>
        Cafemono demonstrates a complete order lifecycle, not just a pretty
        storefront: a guest browses and orders on the React frontend, that
        order is tracked through Laravel's status pipeline, and staff manage
        the whole thing from an admin dashboard backed by the same API. The
        live demo showcases the full frontend experience end to end, with
        built-in fallback data whenever the API isn't reachable.
      </p>
    </AnimatedSection>
  </main>
);

export default CafemonoDetail;
