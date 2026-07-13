import { useEffect, useRef, useState } from "react";
import {
  motion as Motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../animations";
import { workProjects, academicProjects } from "../data/projects";

// trionn-style vortex: the spiral is sampled, not solved — keyframes per card
// fed to useTransform. Cards sit in their real grid slot; the transform
// animates FROM a spiral-formation offset TO identity, so the final layout is
// plain CSS grid. Unlike a one-by-one entrance, every card is on screen from
// the start, orbiting the viewport center as one formation; scroll unwinds the
// whole vortex until each card settles into its slot.
const SPIRAL_T = [0, 0.2, 0.4, 0.6, 0.8, 1];
const SPIRAL_SPIN = Math.PI * 1.4; // how far the whole formation rotates while unwinding
const CARD_SPAN = 0.6; // fraction of scroll progress one card animates over
const STAGGER_WINDOW = 0.18; // spread of start times: outer cards land last
const FORMATION_START = 0.04; // beat before the vortex starts unwinding

const ProjectCard = ({ p, index, group, showDetail, onNavigate }) => (
  <article className="project-card">
    <div className="project-card-top">
      <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
      <span className="project-group-badge">{group}</span>
    </div>
    <h4 className="project-header">{p.title}</h4>
    <p className="project-desc">{p.desc}</p>
    <div className="project-tags">
      {p.tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
    {(showDetail && p.showDetail !== false && p.link) || p.demoUrl ? (
      <div className="project-actions">
        {showDetail && p.showDetail !== false && p.link ? (
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
  </article>
);

const SpiralCard = ({ progress, start, end, index, count, radius, children }) => {
  const range = SPIRAL_T.map((t) => start + t * (end - start));

  // evenly spread around the circle, inner-to-outer rings by index
  const baseAngle = (index / count) * Math.PI * 2 - Math.PI / 2;
  const ring = 0.55 + 0.45 * ((index + 1) / count);
  const angleAt = (t) => baseAngle + (1 - t) * SPIRAL_SPIN;
  const radiusAt = (t) => Math.pow(1 - t, 0.85) * radius * ring;

  // card tilt starts tangent to its orbit and unwinds to 0 with the vortex
  const tangentDeg = (((angleAt(0) * 180) / Math.PI + 90 + 180) % 360) - 180;

  const x = useTransform(
    progress,
    range,
    SPIRAL_T.map((t) => radiusAt(t) * Math.cos(angleAt(t)))
  );
  const y = useTransform(
    progress,
    range,
    // 0.62 flattens the orbit into an ellipse so the ring fits the viewport;
    // the extra term drops the whole formation in from slightly above
    SPIRAL_T.map((t) => radiusAt(t) * Math.sin(angleAt(t)) * 0.62 - Math.pow(1 - t, 1.3) * 120)
  );
  const rotate = useTransform(
    progress,
    range,
    SPIRAL_T.map((t) => Math.pow(1 - t, 1.05) * tangentDeg)
  );
  const scale = useTransform(progress, range, [0.45, 0.55, 0.7, 0.86, 1.04, 1]);
  const opacity = useTransform(progress, range, [0, 1, 1, 1, 1, 1]);

  return (
    <Motion.div className="spiral-card" style={{ x, y, rotate, scale, opacity }}>
      {children}
    </Motion.div>
  );
};

const useIsCompact = () => {
  const [compact, setCompact] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 860px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const onChange = (event) => setCompact(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return compact;
};

const StaticGallery = ({ title, items, group, showDetail, onNavigate }) => (
  <div className="spiral-static">
    <h3 className="projects-group-title">{title}</h3>
    <div className="projects-static-grid">
      {items.map((p, i) => (
        <Motion.div
          key={p.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.08 }}
        >
          <ProjectCard p={p} index={i} group={group} showDetail={showDetail} onNavigate={onNavigate} />
        </Motion.div>
      ))}
    </div>
  </div>
);

const SpiralGallery = ({ title, items, group, showDetail, onNavigate }) => {
  const scrollerRef = useRef(null);
  const compact = useIsCompact();
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: scrollerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  if (compact || reduceMotion) {
    return (
      <StaticGallery
        title={title}
        items={items}
        group={group}
        showDetail={showDetail}
        onNavigate={onNavigate}
      />
    );
  }

  const n = items.length;
  const step = n > 1 ? STAGGER_WINDOW / (n - 1) : 0;
  const radius = Math.min(620, (typeof window !== "undefined" ? window.innerWidth : 1200) * 0.5);

  return (
    <div ref={scrollerRef} className="spiral-scroller" style={{ height: `${150 + n * 40}vh` }}>
      <div className="spiral-pin">
        <div className="spiral-head">
          <div className="spiral-head-row">
            <h3 className="projects-group-title">{title}</h3>
            <span className="spiral-count">{String(n).padStart(2, "0")} projects</span>
          </div>
          <div className="spiral-progress">
            <Motion.span style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
        <div className="spiral-gallery">
          {items.map((p, i) => (
            <SpiralCard
              key={p.title}
              progress={progress}
              start={FORMATION_START + i * step}
              end={FORMATION_START + i * step + CARD_SPAN}
              index={i}
              count={n}
              radius={radius}
            >
              <ProjectCard p={p} index={i} group={group} showDetail={showDetail} onNavigate={onNavigate} />
            </SpiralCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = ({ onNavigate }) => (
  <section className="section projects-section" id="projects">
    <SectionHeading
      eyebrow="Portfolio"
      title="Projects that ship."
      subtitle="Keep scrolling — each project spirals down and drops into the gallery."
    />
    <SpiralGallery
      title="Work"
      items={workProjects}
      group="Work"
      showDetail={false}
      onNavigate={onNavigate}
    />
    <SpiralGallery
      title="Academic"
      items={academicProjects}
      group="Academic"
      showDetail
      onNavigate={onNavigate}
    />
  </section>
);

export default Projects;
