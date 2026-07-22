import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCar,
  FaCheck,
  FaLayerGroup,
  FaMobileAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { fadeUp } from "../animations";
import adminDashboard from "../assets/projects/kyaw-kyar/admin-dashboard.jpg";
import customerHomepage from "../assets/projects/kyaw-kyar/customer-homepage.jpg";
import browseCarousel from "../assets/projects/kyaw-kyar/browse-carousel.jpg";

const screenshots = [
  {
    src: customerHomepage,
    alt: "Kyaw Kyar Car Showroom customer-facing homepage with brand and model search",
    step: "Screen 01",
    kicker: "Customer homepage",
    title: "A bilingual hero built for fast car search",
    text: "The landing page leads with a brand/model search, a live customer rating, and a featured-showroom callout — so shoppers can start narrowing down a car in seconds. Copy renders in Myanmar with an English toggle, both driven from the same React components.",
    url: "kyawkyarcarshowroom.com",
  },
  {
    src: browseCarousel,
    alt: "Build type and brand carousel on the Kyaw Kyar Car Showroom browsing page",
    step: "Screen 02",
    kicker: "Build type & brand browsing",
    title: "Carousels that make browsing feel guided, not overwhelming",
    text: "Below the hero, a build-type carousel (Sedan, SUV, and more) and a trusted-manufacturer row let customers browse by the shape or brand they already have in mind, instead of scanning a flat inventory list.",
    url: "kyawkyarcarshowroom.com/my",
  },
  {
    src: adminDashboard,
    alt: "Kyaw Kyar Car Showroom admin dashboard with inventory and showroom stats",
    step: "Screen 03",
    kicker: "Admin dashboard",
    title: "One dashboard for the whole showroom's inventory",
    text: "Staff get stat cards for cars, brands, models, build types, showrooms, and sell requests, plus a sidebar covering everything from brand/model records to homepage and payment content — all built with reusable React components shared with the public site.",
    url: "kyawkyarcarshowroom.com/admin",
  },
];

const frontendHighlights = [
  {
    title: "Reusable components",
    text: "Search bars, carousels, and stat cards were built as shared components reused across the customer site and admin dashboard.",
  },
  {
    title: "Clearer browsing flow",
    text: "Brand and model search, plus build-type carousels, help customers narrow down cars quickly.",
  },
  {
    title: "Responsive layout",
    text: "Layouts adapt from the admin dashboard grid down to the customer-facing hero and carousels.",
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

const KyawKyarCarshowroomDetail = ({ onNavigate }) => (
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

      <h1>Kyaw Kyar Carshowroom</h1>
      <p>
        Frontend support with React.js for a car showroom platform: reusable
        components, a clearer browsing flow for shoppers, and a responsive
        layout across the customer site and admin dashboard.
      </p>

      <div className="detail-tags" aria-label="Technologies used">
        <span>React.js</span>
        <span>JavaScript</span>
        <span>CSS</span>
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
            <span className="shot-frame-url">{shot.url}</span>
          </figcaption>
          <img src={shot.src} alt={shot.alt} loading="lazy" />
        </figure>
      </AnimatedSection>
    ))}

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">Frontend work</p>
        <h2>What the React.js support covered</h2>
      </div>
      <div className="detail-grid">
        {frontendHighlights.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("Reusable") ? <FaLayerGroup aria-hidden="true" /> : null}
            {item.title.includes("browsing") ? <FaCar aria-hidden="true" /> : null}
            {item.title.includes("Responsive") ? <FaMobileAlt aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
        <article className="detail-card">
          <FaTachometerAlt aria-hidden="true" />
          <h3>Admin at a glance</h3>
          <p>
            Dashboard stat cards surface cars, brands, models, showrooms, and
            sell requests without digging through separate pages.
          </p>
        </article>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Purpose</p>
        <h2>Why the frontend work mattered</h2>
      </div>
      <div>
        <p>
          The showroom needed a browsing experience that felt as polished as
          its inventory: fast brand/model search, an easy way to compare
          build types, and an admin view that keeps showroom staff on top of
          listings. The React.js work focused on making that flow consistent
          and responsive across devices.
        </p>
        <div className="login-points" style={{ marginTop: "24px" }}>
          <span>
            <FaCheck aria-hidden="true" />
            Built with React.js on the customer-facing and admin surfaces
          </span>
        </div>
      </div>
    </AnimatedSection>
  </main>
);

export default KyawKyarCarshowroomDetail;
