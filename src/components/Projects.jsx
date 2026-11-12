import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { workProjects, academicProjects } from "../data/projects";

const ProjectRow = ({ p, index, onNavigate }) => {
  const hasCaseStudy = p.showDetail !== false && p.link;
  const num = String(index + 1).padStart(2, "0");

  const open = (event) => {
    if (!hasCaseStudy) return;
    event.preventDefault();
    onNavigate(p.link);
  };

  const body = (
    <>
      <span className="project-num">{num}</span>
      <span className="project-main">
        <span className="project-name">
          {p.title}
          {p.status ? <span className="project-status">{p.status}</span> : null}
        </span>
        <span className="project-desc">{p.desc}</span>
      </span>
      <span className="project-stack">{p.tags.join(" · ")}</span>
      <span className="project-go" aria-hidden="true">
        {hasCaseStudy ? <FaArrowRight /> : null}
      </span>
    </>
  );

  return (
    <Motion.li
      className={`project-item${hasCaseStudy ? " is-link" : ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {hasCaseStudy ? (
        <a href={p.link} className="project-row" onClick={open} aria-label={`${p.title} case study`}>
          {body}
        </a>
      ) : (
        <div className="project-row">{body}</div>
      )}
      {p.demoUrl ? (
        <a
          href={p.demoUrl}
          className="project-demo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${p.title}`}
        >
          Live demo <FaExternalLinkAlt aria-hidden="true" />
        </a>
      ) : null}
    </Motion.li>
  );
};

const ProjectGroup = ({ title, items, onNavigate }) => (
  <div className="project-group">
    <div className="project-group-head">
      <h3>{title}</h3>
      <span>{String(items.length).padStart(2, "0")}</span>
    </div>
    <ul className="project-list">
      {items.map((p, i) => (
        <ProjectRow key={p.title} p={p} index={i} onNavigate={onNavigate} />
      ))}
    </ul>
  </div>
);

const Projects = ({ onNavigate }) => (
  <section className="section" id="projects">
    <div className="section-intro">
      <p className="section-label">02 — Index</p>
      <h2 className="section-title">All projects.</h2>
      <p className="section-sub">
        Client and team work alongside academic builds. Rows with an arrow open
        a case study.
      </p>
    </div>
    <ProjectGroup title="Work" items={workProjects} onNavigate={onNavigate} />
    <ProjectGroup title="Academic" items={academicProjects} onNavigate={onNavigate} />
  </section>
);

export default Projects;
