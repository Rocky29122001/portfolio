import { motion as Motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import { workProjects, academicProjects } from "../data/projects";

const ProjectGrid = ({ items, showDetail, onNavigate }) => (
  <Motion.div
    className="project-box"
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    {items.map((p) => (
      <Motion.article
        key={p.title}
        className="project-card glass"
        variants={fadeUp}
        whileHover={{ y: -12 }}
      >
        <div className="project-header">{p.title}</div>
        <p className="project-desc">{p.desc}</p>
        <div className="project-tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        {showDetail && p.showDetail !== false && p.link ? (
          <a
            href={p.link}
            className="btn project-btn"
            aria-label={`View ${p.title}`}
            onClick={(event) => {
              if (!p.link.startsWith("/")) {
                return;
              }

              event.preventDefault();
              onNavigate(p.link);
            }}
          >
            View Project
          </a>
        ) : null}
      </Motion.article>
    ))}
  </Motion.div>
);

const Projects = ({ onNavigate }) => (
  <section className="section" id="projects">
    <Motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
      Projects
    </Motion.h2>

    <div className="projects-groups">
      <div className="projects-group">
        <Motion.h3
          className="projects-group-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Work projects
        </Motion.h3>
        <ProjectGrid items={workProjects} showDetail={false} onNavigate={onNavigate} />
      </div>

      <div className="projects-group">
        <Motion.h3
          className="projects-group-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Academic projects
        </Motion.h3>
        <ProjectGrid items={academicProjects} showDetail onNavigate={onNavigate} />
      </div>
    </div>
  </section>
);

export default Projects;
