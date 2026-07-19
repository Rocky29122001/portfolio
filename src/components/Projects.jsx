import { motion as Motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../animations";
import { workProjects, academicProjects } from "../data/projects";

// accent pair per row, cycled by index — drives the index numeral,
// the visual panel gradient, and the hover glow via CSS custom props
const ACCENTS = [
  ["#38bdf8", "#818cf8"],
  ["#818cf8", "#f472b6"],
  ["#2dd4bf", "#38bdf8"],
  ["#f472b6", "#fb923c"],
];

const monogram = (title) => {
  const words = title.split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return title.slice(0, 2).toUpperCase();
};

const ProjectRow = ({ p, index, group, showDetail, onNavigate }) => {
  const [accent, accent2] = ACCENTS[index % ACCENTS.length];
  const num = String(index + 1).padStart(2, "0");
  const hasCaseStudy = showDetail && p.showDetail !== false && p.link;

  return (
    <Motion.article
      className={`project-row${index % 2 === 1 ? " flip" : ""}`}
      style={{ "--row-accent": accent, "--row-accent-2": accent2 }}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="project-row-info">
        <div className="project-row-meta">
          <span className="project-row-index">{num}</span>
          <span className="project-group-badge">{group}</span>
        </div>
        <h4 className="project-row-title">{p.title}</h4>
        <p className="project-row-desc">{p.desc}</p>
        <div className="project-tags">
          {p.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {hasCaseStudy || p.demoUrl ? (
          <div className="project-actions">
            {hasCaseStudy ? (
              <a
                href={p.link}
                className="btn project-btn"
                aria-label={`View ${p.title}`}
                onClick={(event) => {
                  if (!p.link.startsWith("/")) return;
                  event.preventDefault();
                  onNavigate(p.link);
                }}
              >
                Case Study
              </a>
            ) : null}
            {p.demoUrl && (
              <a
                href={p.demoUrl}
                className="btn project-btn demo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View demo for ${p.title}`}
              >
                Live Demo <FaExternalLinkAlt />
              </a>
            )}
          </div>
        ) : null}
      </div>
      <div className="project-row-visual" aria-hidden="true">
        <span className="project-row-ghost">{num}</span>
        <span className="project-row-monogram">{monogram(p.title)}</span>
      </div>
    </Motion.article>
  );
};

const ProjectGroup = ({ title, items, group, showDetail, onNavigate }) => (
  <div className="projects-group">
    <Motion.div
      className="projects-group-head"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h3 className="projects-group-title">{title}</h3>
      <span className="projects-group-count">
        {String(items.length).padStart(2, "0")} projects
      </span>
    </Motion.div>
    {items.map((p, i) => (
      <ProjectRow
        key={p.title}
        p={p}
        index={i}
        group={group}
        showDetail={showDetail}
        onNavigate={onNavigate}
      />
    ))}
  </div>
);

const Projects = ({ onNavigate }) => (
  <section className="section projects-section" id="projects">
    <SectionHeading
      eyebrow="Portfolio"
      title="Projects that ship."
      subtitle="Selected work and academic builds — with case studies and live demos where available."
    />
    <ProjectGroup
      title="Work"
      items={workProjects}
      group="Work"
      showDetail={false}
      onNavigate={onNavigate}
    />
    <ProjectGroup
      title="Academic"
      items={academicProjects}
      group="Academic"
      showDetail
      onNavigate={onNavigate}
    />
  </section>
);

export default Projects;
