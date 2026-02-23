import { motion as Motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

const projects = [
    {
        title: "Myanmar Cane Handicraft Platform",
        desc: "An e-commerce platform dedicated to promoting traditional Myanmar cane handicrafts. Features include product catalog, cart management, and admin dashboard.",
        tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
        link: "#"
    },
    {
        title: "Bulletin Board System",
        desc: "A community forum for sharing announcements and discussions. Includes user authentication, post creation, and comment threads.",
        tags: ["PHP", "SQL Server", "CSS"],
        link: "#"
    },
    {
        title: "21 Game Android App",
        desc: "A mobile card game application based on the classic Blackjack rules. Built with Java for Android devices.",
        tags: ["Java", "Android Studio", "SQLite"],
        link: "#"
    }
];

const Projects = () => (
    <section className="section" id="projects">
        <Motion.h2 variants={fadeUp} initial="hidden" whileInView="show">
            Projects
        </Motion.h2>

        <Motion.div
            className="project-box"
            variants={stagger}
            initial="hidden"
            whileInView="show"
        >
            {projects.map(p => (
                <Motion.article
                    key={p.title}
                    className="project-card glass"
                    variants={fadeUp}
                    whileHover={{ y: -12 }}
                >
                    <div className="project-header">{p.title}</div>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-tags">
                        {p.tags.map(t => (
                            <span key={t} className="tag">
                                {t}
                            </span>
                        ))}
                    </div>
                    <a href={p.link} className="btn project-btn" aria-label={`View ${p.title}`}>
                        View Project
                    </a>
                </Motion.article>
            ))}
        </Motion.div>
    </section>
);

export default Projects;
