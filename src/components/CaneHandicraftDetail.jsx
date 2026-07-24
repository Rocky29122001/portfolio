import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBoxOpen,
  FaCheck,
  FaCreditCard,
  FaShoppingCart,
  FaStore,
  FaUsersCog,
  FaUserShield,
} from "react-icons/fa";
import { fadeUp } from "../animations";
import marketplaceHomeShot from "../assets/projects/cane-handicraft/marketplace-home.jpg";
import shopProductsShot from "../assets/projects/cane-handicraft/shop-products.jpg";
import shopOrdersShot from "../assets/projects/cane-handicraft/shop-orders.jpg";
import stockAlertsShot from "../assets/projects/cane-handicraft/stock-alerts.jpg";
import djangoAdminShot from "../assets/projects/cane-handicraft/django-admin.jpg";

const customerHighlights = [
  "Filter the catalog by shop (Select Company) or by category",
  "Cart workflow leads into a PayPal-style checkout",
  "Bootstrap-based responsive storefront layout",
  "Django backend with dedicated Shops, Products, and Orders models",
];

const platformFeatures = [
  {
    title: "Multi-shop catalog",
    text: "Shoppers can browse everything with the company filter set to All, or narrow it to a single seller — UK Sein Myanmar, Naung Fern, or Myat Thitsar — then filter further by category.",
  },
  {
    title: "PayPal-style checkout",
    text: "The cart leads into a PayPal-style payment flow: a PayPal IPN record confirms each payment before an order is created — a sandboxed flow rather than a live PayPal merchant account.",
  },
  {
    title: "Shop owner dashboard",
    text: "Each shop owner manages their own products, tracks incoming orders, and sees a dedicated out-of-stock alert list — all scoped to their own store.",
  },
  {
    title: "Admin oversight",
    text: "A separate Django admin role manages user accounts, PayPal IPN payment records, and every shop's categories, products, and orders platform-wide.",
  },
];

const roles = [
  {
    title: "Admin",
    text: "Manages user accounts and groups, reviews PayPal IPN payment records, and can reach every shop's data through Django's admin panel.",
    Icon: FaUsersCog,
  },
  {
    title: "Shop owner",
    text: "Manages their own store's products, incoming orders, and stock alerts from a dedicated dashboard, scoped to their shop only.",
    Icon: FaStore,
  },
  {
    title: "Customer",
    text: "Browses all shops or filters to one, builds a cart, and checks out through the PayPal-style payment flow.",
    Icon: FaShoppingCart,
  },
];

const screens = [
  {
    src: marketplaceHomeShot,
    alt: "CANEecomm marketplace homepage with a Select Company shop filter and a cane furniture product grid",
    step: "Screen 01",
    kicker: "Marketplace home",
    title: "One storefront, three independent shops",
    text: "A \"Select Company\" dropdown lets shoppers browse All products or filter down to a single shop — UK Sein Myanmar, Naung Fern, or Myat Thitsar — while a category sidebar (Furniture, Home Decoration, Kitchenware, and more) narrows the product grid further.",
  },
  {
    src: shopProductsShot,
    alt: "Shop owner product management view listing cane furniture with Edit and Delete actions",
    step: "Screen 02",
    kicker: "Shop owner · Products",
    title: "Shop owners manage their own catalog",
    text: "A dedicated Products area lets a shop owner view, add, edit, and delete their own listings — price, material, and stock quantity — without touching another shop's inventory.",
  },
  {
    src: shopOrdersShot,
    alt: "Shop owner orders list with customer name, email, address, and order status",
    step: "Screen 03",
    kicker: "Shop owner · Orders",
    title: "Order tracking scoped to the shop",
    text: "Incoming orders show the buyer's name, email, shipping address, and status, with a View Order action to open the full order detail.",
  },
  {
    src: stockAlertsShot,
    alt: "Out of stock products table showing an item, price, and zero quantity",
    step: "Screen 04",
    kicker: "Shop owner · Stock alerts",
    title: "A dedicated view for what's run out",
    text: "An Out of Stock Products page surfaces any item at zero quantity, so a shop owner knows what to restock without scanning the full catalog.",
  },
  {
    src: djangoAdminShot,
    alt: "Django administration site listing Users, Groups, PayPal IPNs, and store models like Shops, Products, and Orders",
    step: "Screen 05",
    kicker: "Admin",
    title: "Platform-wide oversight through Django admin",
    text: "The admin role works a level above individual shops: managing user accounts and groups, reviewing PayPal IPN payment records, and reaching every store's categories, products, and orders in one place.",
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

const CaneHandicraftDetail = ({ onNavigate }) => (
  <main className="detail-page craft-detail-page">
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
        <p className="detail-kicker">Academic project</p>
      </div>
      <h1>Myanmar Cane Handicraft Platform</h1>
      <p>
        A Django e-commerce marketplace for traditional Myanmar cane crafts,
        branded on the storefront as CANEecomm. Three independent shops sell
        through one site, split across three roles: an admin who oversees
        every shop from Django's admin panel, shop owners who manage their own
        products and orders, and customers who browse by shop or category
        before checking out through a PayPal-style payment flow.
      </p>
      <div className="detail-tags" aria-label="Technologies used">
        <span>Python</span>
        <span>Django</span>
        <span>Bootstrap</span>
        <span>JavaScript</span>
      </div>
    </Motion.section>

    <AnimatedSection className="detail-section">
      <div className="login-showcase-copy" style={{ maxWidth: "760px" }}>
        <p className="detail-kicker">Storefront</p>
        <h2>Product discovery for local craft items</h2>
        <p>
          The storefront focuses on helping customers understand each handmade
          item quickly: product name, category, price, and add-to-cart action
          are visible without adding unnecessary steps.
        </p>
        <div className="login-points">
          {customerHighlights.map((item) => (
            <span key={item}>
              <FaCheck aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>

    {screens.map((shot) => (
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
        <p className="detail-kicker">Core modules</p>
        <h2>Customer shopping, shop management, and platform oversight</h2>
      </div>
      <div className="detail-grid">
        {platformFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("catalog") ? <FaStore aria-hidden="true" /> : null}
            {item.title.includes("checkout") ? <FaCreditCard aria-hidden="true" /> : null}
            {item.title.includes("Shop owner") ? <FaBoxOpen aria-hidden="true" /> : null}
            {item.title.includes("Admin") ? <FaUserShield aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section blackjack-flow-section">
      <div className="screen-section-copy">
        <p className="detail-kicker">User roles</p>
        <h2>Three roles, three levels of access</h2>
        <p>
          Rather than a single admin/customer split, the platform separates
          platform-level oversight from per-store management, so a shop owner
          only ever touches their own catalog.
        </p>
      </div>
      <div className="blackjack-flow-grid">
        {roles.map(({ title, text, Icon }) => (
          <article className="blackjack-flow-card" key={title}>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Purpose</p>
        <h2>Why the project matters</h2>
      </div>
      <p>
        The platform connects traditional craft products with a simple online
        buying experience, structured around admin, shop owner, and customer
        roles instead of a flat single-store model. It also demonstrates
        full-stack fundamentals: a multi-shop database schema, a PayPal-style
        checkout backed by IPN payment records, and role-scoped dashboards for
        keeping storefront data current.
      </p>
    </AnimatedSection>
  </main>
);

export default CaneHandicraftDetail;
