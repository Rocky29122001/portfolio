import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBoxes,
  FaCashRegister,
  FaCheck,
  FaChair,
  FaUserShield,
} from "react-icons/fa";
import { fadeUp } from "../animations";
import loginShot from "../assets/projects/restaurant-pro/login.jpg";
import homepageShot from "../assets/projects/restaurant-pro/homepage.jpg";
import dineInShot from "../assets/projects/restaurant-pro/dine-in.jpg";
import orderPageShot from "../assets/projects/restaurant-pro/order-page.jpg";

const screenshots = [
  {
    src: loginShot,
    alt: "Restaurant Pro sign-in screen with a purple Welcome Back panel and a username/password form",
    step: "Screen 01",
    kicker: "Sign in",
    title: "A branded gate in front of the full back office",
    text: "A split-panel sign-in screen — brand messaging on one side, a plain username/password form on the other — sits in front of every staff-facing module in the system.",
  },
  {
    src: homepageShot,
    alt: "Restaurant Pro dashboard shell with a sidebar covering Dashboard, My Store, Suppliers, Stock Control, Configuration, Reports, and Users",
    step: "Screen 02",
    kicker: "Dashboard shell",
    title: "One sidebar for the whole restaurant's back office",
    text: "After signing in, the System Administrator role lands on a dashboard shell with a sidebar covering Dashboard, My Store, Suppliers, Stock Control, Configuration, Reports, and Users — the full set of modules a restaurant needs beyond the dining floor.",
  },
  {
    src: dineInShot,
    alt: "Restaurant Pro Dine-In screen with a color-coded table map split into Ground Floor and First Floor, and an order panel on the right",
    step: "Screen 03",
    kicker: "Dine-In table map",
    title: "A floor plan that shows table status at a glance",
    text: "Tables are color-coded Available, Reservation, or Occupied and grouped by Ground Floor and First Floor. Tapping a table opens an order panel on the right with Add Order, Table Merge, and Check Out actions.",
  },
  {
    src: orderPageShot,
    alt: "Restaurant Pro Food Items ordering screen with category tiles, an item grid with Burmese and English names, and a running order total",
    step: "Screen 04",
    kicker: "Order building",
    title: "Category-first ordering with a live running total",
    text: "Staff pick a category, then an item, and the order panel on the right builds up quantities, per-line remarks, and a running total in MMK before Place Order sends it through. Station tabs — All, Bar, Kitchen, BBQ, pc — route tickets to the right prep area.",
  },
];

const systemFeatures = [
  {
    title: "Dine-in table management",
    text: "A color-coded table map across Ground Floor and First Floor keeps front-of-house staff aware of availability, reservations, and occupied tables without walking the room.",
  },
  {
    title: "Category-first POS ordering",
    text: "Menu items are organized by category first, then filtered by station (Bar, Kitchen, BBQ), so an order builds quickly and prints to the right prep area.",
  },
  {
    title: "Back-office operations",
    text: "My Store, Suppliers, Stock Control, and Reports give the restaurant visibility beyond the dining floor: inventory, supplier records, and sales reporting in one system.",
  },
  {
    title: "Role-gated administration",
    text: "Configuration and Users sit behind a signed-in System Administrator role, keeping store settings and account management restricted to authorized staff.",
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

const RestaurantProDetail = ({ onNavigate }) => (
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
        <p className="detail-kicker">Work project</p>
      </div>

      <h1>Restaurant Pro</h1>
      <p>
        A Laravel Blade restaurant management system, branded R-Pro+, built
        for Asia Brightway IT. It covers the dining floor — a color-coded
        table map and category-first ordering — alongside back-office modules
        for stock, suppliers, and reporting.
      </p>

      <div className="detail-tags" aria-label="Technologies used">
        <span>Laravel</span>
        <span>Blade</span>
        <span>PHP</span>
        <span>MySQL</span>
      </div>
    </Motion.section>

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
        <p className="detail-kicker">System</p>
        <h2>Front-of-house and back-office in one system</h2>
      </div>
      <div className="detail-grid">
        {systemFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("Dine-in") ? <FaChair aria-hidden="true" /> : null}
            {item.title.includes("POS") ? <FaCashRegister aria-hidden="true" /> : null}
            {item.title.includes("Back-office") ? <FaBoxes aria-hidden="true" /> : null}
            {item.title.includes("Role-gated") ? <FaUserShield aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Purpose</p>
        <h2>Why it goes beyond a menu page</h2>
      </div>
      <div>
        <p>
          Restaurant Pro runs the parts of a restaurant a customer never sees:
          which tables are free, what an order actually contains as it's being
          built, and whether stock and supplier records are current. Server-
          rendered Laravel Blade views keep the whole system — dine-in,
          ordering, and back-office reporting — on one consistent stack.
        </p>
        <div className="login-points" style={{ marginTop: "24px" }}>
          <span>
            <FaCheck aria-hidden="true" />
            Built with Laravel Blade, PHP, and MySQL end to end
          </span>
        </div>
      </div>
    </AnimatedSection>
  </main>
);

export default RestaurantProDetail;
