import { motion as Motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { fadeUp } from "../animations";

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
        A beautifully crafted cafe website with elegant menu browsing, warm ambiance visuals,
        and a delightful ordering experience. Built with modern frontend tools for a premium feel.
      </p>

      <div className="detail-tags" aria-label="Technologies used">
        <span>Next.js</span>
        <span>React</span>
        <span>Tailwind CSS</span>
        <span>Vercel</span>
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

    <section className="detail-section" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 5% 80px" }}>
      <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
        The project demonstrates modern web development practices including responsive design,
        smooth interactions, and an inviting user experience tailored for a cafe brand.
        The live site showcases the full menu, ambiance, and ordering flow.
      </p>
    </section>
  </main>
);

export default CafemonoDetail;
