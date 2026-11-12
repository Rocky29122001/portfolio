import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBoxes,
  FaCheck,
  FaGlobeAsia,
  FaMobileAlt,
  FaUserShield,
} from "react-icons/fa";
import { fadeUp } from "../animations";
import shopHomeShot from "../assets/projects/anime-figure-shop/shop-home.jpg";
import productShot from "../assets/projects/anime-figure-shop/product-detail.jpg";
import loginShot from "../assets/projects/anime-figure-shop/login.jpg";

const screenshots = [
  {
    src: shopHomeShot,
    alt: "Archive storefront with a Featured carousel of anime figures showing discounts, stock badges, pre-order dates, and condition grades",
    step: "Screen 01",
    kicker: "Storefront",
    title: "Every card answers the questions collectors ask first",
    text: "The Featured carousel shows manufacturer, scale, and price on every figure, along with its stock state. In stock, only a few left, pre-order with a release date, or sold out each get their own badge, so shoppers don't have to open a product to find out.",
  },
  {
    src: productShot,
    alt: "Archive product page for a 1/7 scale figure with an image gallery, discounted price, quantity selector, and a specifications table",
    step: "Screen 02",
    kicker: "Product detail",
    title: "Specs and condition up front, stock rechecked at checkout",
    text: "The product page pairs an image gallery with a full specification table: category, series, manufacturer, scale, and separate grades for the item and its box. A per-order quantity limit and a note that stock is rechecked at checkout set expectations before the shopper pays.",
  },
  {
    src: loginShot,
    alt: "Archive login screen with a dark welcome panel listing order tracking, saved addresses, and loyalty points next to an email and password form",
    step: "Screen 03",
    kicker: "Account",
    title: "One sign-in for shoppers and staff",
    text: "Customers and staff use the same sign-in, and the account's role decides what comes next. A guest cart merges into the account on login, and signed-in shoppers can track orders and pre-orders, save delivery addresses, and collect loyalty points.",
  },
];

const systemFeatures = [
  {
    title: "Pre-orders and stock",
    text: "Pre-orders are paid in full and held until release, while live stock counts drive the In stock, Only N left, and Sold out states shown on every product.",
  },
  {
    title: "Role-gated admin panel",
    text: "The same React app includes a staff-only admin area for the dashboard, products and stock, orders, announcements, sales reports, and an activity log.",
  },
  {
    title: "English and Burmese",
    text: "The storefront switches between English and Burmese, so local buyers can browse in the language they're most comfortable with.",
  },
  {
    title: "One API, two clients",
    text: "A versioned Laravel API (/api/v1) handles checkout, price calculation, and loyalty points on the server, and both the React web app and the Flutter mobile app use the same endpoints.",
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

const AnimeFigureShopDetail = ({ onNavigate }) => (
  <main className="detail-page anime-detail-page">
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
        <p className="detail-kicker">Work project · In progress</p>
      </div>

      <h1>Anime Figure Shop</h1>
      <p>
        Archive is a web and mobile sales platform for local merchants selling
        anime figures, from scale figures and Nendoroids to garage kits and
        graded pre-owned pieces. One Laravel API powers a React storefront with
        a built-in admin panel and a Flutter mobile app.
      </p>

      <div className="detail-tags" aria-label="Technologies used">
        <span>React</span>
        <span>Laravel</span>
        <span>Flutter</span>
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
        <h2>Storefront, back office, and mobile on one backend</h2>
      </div>
      <div className="detail-grid">
        {systemFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("Pre-orders") ? <FaBoxes aria-hidden="true" /> : null}
            {item.title.includes("admin") ? <FaUserShield aria-hidden="true" /> : null}
            {item.title.includes("Burmese") ? <FaGlobeAsia aria-hidden="true" /> : null}
            {item.title.includes("API") ? <FaMobileAlt aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Purpose</p>
        <h2>Why the server owns the money</h2>
      </div>
      <div>
        <p>
          Collectible figures are expensive and often limited, so a wrong price
          or an oversold pre-order costs real money. Archive keeps stock checks,
          pricing, and loyalty points on the server. The web and mobile apps
          only display what the API confirms, and every total is recalculated
          at checkout.
        </p>
        <div className="login-points" style={{ marginTop: "24px" }}>
          {[
            "React storefront and admin panel in one role-gated app",
            "Flutter mobile app on the same /api/v1 endpoints",
            "Currently in progress",
          ].map((item) => (
            <span key={item}>
              <FaCheck aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </main>
);

export default AnimeFigureShopDetail;
