import { motion as Motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheck,
  FaUserShield,
  FaClipboardList,
  FaCalendarAlt,
  FaKey,
  FaProjectDiagram,
  FaLayerGroup,
} from "react-icons/fa";
import { fadeUp } from "../animations";
import loginShot from "../assets/projects/project-management/login.jpg";
import forgotPasswordShot from "../assets/projects/project-management/forgot-password.jpg";
import siteDetailsShot from "../assets/projects/project-management/site-details.jpg";
import profileShot from "../assets/projects/project-management/profile-menu.jpg";

const screens = [
  {
    src: loginShot,
    alt: "Project Management System login screen with a construction-themed illustration",
    step: "Screen 01",
    kicker: "Login",
    title: "A branded entry point for field and office roles",
    text: "A construction-themed illustration sets the tone before the form: email and password, masked-password toggle, and a direct path to password recovery.",
  },
  {
    src: forgotPasswordShot,
    alt: "Project Management System forgot password screen with a three-step Email, Verify, Reset flow",
    step: "Screen 02",
    kicker: "Forgot Password",
    title: "A guided three-step reset instead of a dead end",
    text: "Email, Verify, and Reset are shown as an explicit progress tracker, so a user who forgets their password always knows which step they're on.",
  },
  {
    src: siteDetailsShot,
    alt: "Project Management System site details screen with monthly plans and a Prepared, Checked, Approved workflow",
    step: "Screen 03",
    kicker: "Site Details",
    title: "Monthly plans tracked through a real approval pipeline",
    text: "Each site carries an ID, a localized name, and a start/end date, with monthly plans moving through Prepared, Checked, and Approved — each stage attributed to the engineer who signed off.",
  },
  {
    src: profileShot,
    alt: "Project Management System profile screen showing an Engineer role badge and account navigation",
    step: "Screen 04",
    kicker: "Profile",
    title: "Role-aware navigation from a single account panel",
    text: "The signed-in user's role — Engineer, in this case — drives what shows up next: Projects, Work Categories, and Master Schedules, plus account actions like changing a password or logging out.",
  },
];

const systemFeatures = [
  {
    title: "Role-based access",
    text: "Site engineers, checkers, and approvers see the same records through a role tied to their account, so the mobile client and the Laravel API agree on what a given user can do.",
  },
  {
    title: "Prepared / checked / approved workflow",
    text: "Monthly site plans move through a fixed pipeline, with the responsible engineer recorded at each stage instead of a single unattributed status flag.",
  },
  {
    title: "Structured site records",
    text: "Every site carries a short code, a localized name, and a project date range, keeping records identifiable even across many concurrent construction sites.",
  },
  {
    title: "Laravel REST API backend",
    text: "The mobile client talks to a Laravel API for authentication, password recovery, site data, and task/category management, keeping business logic off the device.",
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

const ProjectManagementDetail = ({ onNavigate }) => (
  <main className="detail-page pms-detail-page">
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

      <h1>Project Management System</h1>
      <p>
        An internal construction site management app: a role-based mobile
        client for site engineers, backed by a Laravel API that handles
        authentication, site records, and a prepared-checked-approved
        monthly plan workflow.
      </p>

      <div className="detail-tags" aria-label="Technologies used">
        <span>Laravel</span>
        <span>REST API</span>
        <span>Mobile</span>
      </div>

      <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
        <p className="detail-kicker">Field operations</p>
        <h2>Built for engineers who work between sites, not a desk</h2>
        <p>
          The client is a mobile app first: a construction site engineer signs
          in, checks a specific site's monthly plans, and sees exactly who
          prepared, checked, or approved each stage — without needing the
          office-only tools a desktop dashboard would assume.
        </p>
        <div className="login-points">
          {[
            "Role-scoped login for site engineers and approvers",
            "Self-serve password recovery via a three-step OTP flow",
            "Per-site monthly plans with named accountability at each stage",
            "Quick access to projects, work categories, and master schedules",
          ].map((item) => (
            <span key={item}>
              <FaCheck aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>

    {screens.map((shot, index) => (
      <AnimatedSection
        className={`detail-section mobile-shot-section${index % 2 === 1 ? " flip" : ""}`}
        key={shot.kicker}
      >
        <div className="phone-shot-preview">
          <div className="phone-shot-frame">
            <div className="phone-speaker" />
            <div className="phone-shot-screen">
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </div>
          </div>
        </div>
        <div className="screen-section-copy">
          <p className="detail-kicker">{shot.step} · {shot.kicker}</p>
          <h2>{shot.title}</h2>
          <p>{shot.text}</p>
        </div>
      </AnimatedSection>
    ))}

    <AnimatedSection className="detail-section">
      <div>
        <p className="detail-kicker">System</p>
        <h2>What the app and API handle together</h2>
      </div>
      <div className="detail-grid">
        {systemFeatures.map((item) => (
          <article className="detail-card" key={item.title}>
            {item.title.includes("Role") ? <FaUserShield aria-hidden="true" /> : null}
            {item.title.includes("workflow") ? <FaClipboardList aria-hidden="true" /> : null}
            {item.title.includes("Structured") ? <FaCalendarAlt aria-hidden="true" /> : null}
            {item.title.includes("Laravel") ? <FaKey aria-hidden="true" /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section blackjack-flow-section">
      <div className="screen-section-copy">
        <p className="detail-kicker">Plan lifecycle</p>
        <h2>One pipeline, three named checkpoints</h2>
        <p>
          Rather than a single "done" flag, each monthly plan is tracked
          through distinct stages, and each stage records the engineer who
          moved it forward — turning a status list into an accountable
          approval trail.
        </p>
      </div>
      <div className="blackjack-flow-grid">
        {[
          ["Prepared", "The responsible site engineer drafts the monthly plan."],
          ["Checked", "A second engineer reviews the prepared plan for accuracy."],
          ["Approved", "The plan is signed off and becomes the site's record."],
          ["Tracked", "Task counts and site progress roll up per month."],
        ].map(([title, text]) => (
          <article className="blackjack-flow-card" key={title}>
            {title === "Prepared" ? <FaProjectDiagram aria-hidden="true" /> : null}
            {title === "Tracked" ? <FaLayerGroup aria-hidden="true" /> : null}
            {title !== "Prepared" && title !== "Tracked" ? <FaCheck aria-hidden="true" /> : null}
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>

    <AnimatedSection className="detail-section detail-summary">
      <div>
        <p className="detail-kicker">Purpose</p>
        <h2>Why this goes beyond a CRUD admin panel</h2>
      </div>
      <p>
        The Project Management System demonstrates a mobile client built
        around how site engineers actually work — one site, one monthly
        plan, one accountable approval trail at a time — backed by a Laravel
        API that enforces roles and workflow state instead of trusting the
        client. It pairs practical UI (guided password recovery, role-scoped
        navigation) with backend discipline (structured records, staged
        approvals) rather than optimizing for either alone.
      </p>
    </AnimatedSection>
  </main>
);

export default ProjectManagementDetail;
