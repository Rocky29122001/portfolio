import { motion as Motion } from "framer-motion";
import profile from "../assets/myprofile.png";
import { workProjects, academicProjects } from "../data/projects";

const allProjects = [...workProjects, ...academicProjects];

const stats = [
    { value: allProjects.length, label: "Projects" },
    { value: allProjects.filter((p) => p.showDetail && p.link).length, label: "Case studies" },
    { value: workProjects.length, label: "Work projects" },
];

const principles = [
    {
        title: "Clean code",
        text: "Maintainable, readable code as a baseline, not an afterthought.",
    },
    {
        title: "Data first",
        text: "Schemas and queries designed for the load they will actually see.",
    },
    {
        title: "Built to grow",
        text: "Backends that absorb new features and traffic without a rewrite.",
    },
];

const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const About = () => (
    <section className="section" id="about">
        <div className="section-intro">
            <p className="section-label">04 — About</p>
        </div>

        <div className="about-layout">
            <Motion.figure className="about-photo" {...reveal}>
                <img src={profile} alt="Naing Khant" loading="lazy" />
            </Motion.figure>

            <Motion.div className="about-copy" {...reveal}>
                <p className="about-statement">
                    I turn complex backend problems into clean, scalable systems.
                </p>
                <p>
                    I'm a backend developer with a B.E (Hons.) in Electronics &amp;
                    Communication Engineering, specializing in secure, maintainable
                    systems with PHP, Laravel, and modern SQL.
                </p>
                <p>
                    I pair technical curiosity with practical delivery: solving hard
                    problems, tuning performance, and building tools teams actually
                    like to use.
                </p>

                <dl className="about-stats">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <dt>{s.label}</dt>
                            <dd>{String(s.value).padStart(2, "0")}</dd>
                        </div>
                    ))}
                </dl>
            </Motion.div>
        </div>

        <ul className="principles">
            {principles.map((item, i) => (
                <Motion.li
                    key={item.title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: 0.08 * i }}
                >
                    <span className="principle-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </Motion.li>
            ))}
        </ul>
    </section>
);

export default About;
