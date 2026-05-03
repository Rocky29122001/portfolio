import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaBoxOpen,
  FaChartLine,
  FaCheck,
  FaLeaf,
  FaSearch,
  FaShoppingCart,
  FaStore,
  FaTags,
  FaUserShield,
} from "react-icons/fa";
import { fadeUp } from "../animations";

const storefrontFeatures = [
  {
    title: "Product catalog",
    text: "Customers can browse cane baskets, trays, decor, and handmade household items with clear product information.",
  },
  {
    title: "Cart workflow",
    text: "The shopping cart keeps selected products organized before checkout and helps users review quantities.",
  },
  {
    title: "Category browsing",
    text: "Craft items can be grouped by type so shoppers can move quickly from discovery to purchase intent.",
  },
  {
    title: "Admin dashboard",
    text: "Admins can maintain products, prices, availability, and order-related records from a protected backend area.",
  },
];

const adminFeatures = [
  "Product create, update, and delete flow",
  "Bootstrap layout for fast responsive screens",
  "Django backend for structured database operations",
  "JavaScript interactions for cart and interface behavior",
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
    <AnimatedSection className="detail-page-header">
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
        A Django e-commerce platform for traditional Myanmar cane crafts. The
        project presents handmade products in a browsable storefront, supports a
        cart flow for shoppers, and gives admins a dashboard for maintaining the
        product catalog.
      </p>
      <div className="detail-tags" aria-label="Technologies used">
        <span>Python</span>
        <span>Django</span>
        <span>Bootstrap</span>
        <span>JavaScript</span>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section craft-showcase-section">
      <div className="craft-store-preview" aria-label="Cane handicraft storefront preview">
        <div className="craft-nav">
          <strong><FaLeaf aria-hidden="true" /> CaneCraft</strong>
          <span>Home</span>
          <span>Shop</span>
          <span>Orders</span>
          <button type="button"><FaShoppingCart aria-hidden="true" /> 3</button>
        </div>
        <div className="craft-hero-preview">
          <div>
            <small>Traditional Myanmar Handmade Goods</small>
            <h2>Cane baskets, trays, and home decor</h2>
            <p>Natural materials, clean catalog browsing, and simple shopping flow.</p>
          </div>
          <div className="woven-basket" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="craft-product-grid">
          {["Round Basket", "Serving Tray", "Storage Box"].map((name, index) => (
            <article className="craft-product-card" key={name}>
              <div className={`craft-product-art craft-product-art-${index + 1}`} />
              <strong>{name}</strong>
              <span>{index === 0 ? "MMK 18,000" : index === 1 ? "MMK 22,000" : "MMK 25,000"}</span>
              <button type="button">Add to cart</button>
            </article>
          ))}
        </div>
      </div>
      <div className="login-showcase-copy">
        <p className="detail-kicker">Storefront</p>
        <h2>Product discovery for local craft items</h2>
        <p>
          The storefront focuses on helping customers understand each handmade
          item quickly: product name, category, price, and add-to-cart action are
          visible without adding unnecessary steps.
        </p>
        <div className="login-points">
          {adminFeatures.map((item) => (
            <span key={item}>
              <FaCheck aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">Core modules</p>
        <h2>Customer shopping and admin maintenance</h2>
      </div>
      <div className="detail-grid">
        {storefrontFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("catalog") ? <FaStore aria-hidden="true" /> : null}
            {item.title.includes("Cart") ? <FaShoppingCart aria-hidden="true" /> : null}
            {item.title.includes("Category") ? <FaTags aria-hidden="true" /> : null}
            {item.title.includes("Admin") ? <FaUserShield aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section craft-dashboard-section">
      <div className="screen-section-copy">
        <p className="detail-kicker">Admin dashboard</p>
        <h2>Manage catalog data behind the storefront</h2>
        <p>
          The admin side keeps product operations separate from the shopping
          experience. It supports maintaining cane craft items, checking product
          totals, and keeping the public catalog accurate.
        </p>
      </div>
      <div className="craft-dashboard-preview" aria-label="Cane handicraft admin dashboard preview">
        <div className="craft-dashboard-stat">
          <FaBoxOpen aria-hidden="true" />
          <span>36</span>
          <small>Products</small>
        </div>
        <div className="craft-dashboard-stat">
          <FaShoppingCart aria-hidden="true" />
          <span>14</span>
          <small>Cart items</small>
        </div>
        <div className="craft-dashboard-stat">
          <FaChartLine aria-hidden="true" />
          <span>8</span>
          <small>Categories</small>
        </div>
        <div className="craft-dashboard-table">
          <div>
            <strong>Recent products</strong>
            <span><FaSearch aria-hidden="true" /> Search crafts</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Round Basket</td>
                <td>Basket</td>
                <td>18,000</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Cane Tray</td>
                <td>Kitchen</td>
                <td>22,000</td>
                <td>Available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Purpose</p>
        <h2>Why the project matters</h2>
      </div>
      <p>
        The platform connects traditional craft products with a simple online
        buying experience. It also demonstrates full-stack fundamentals:
        database-backed catalog management, user-facing shopping screens, and an
        admin workflow for keeping storefront data current.
      </p>
    </AnimatedSection>
  </main>
);

export default CaneHandicraftDetail;
