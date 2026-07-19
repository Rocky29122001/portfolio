import { motion as Motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
    FaPhp,
    FaLaravel,
    FaPython,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaDatabase,
    FaReact,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

// brand colors brightened where the official hue would vanish on a dark bg
const skills = [
    { label: "PHP", Icon: FaPhp, color: "#8993be" },
    { label: "Laravel", Icon: FaLaravel, color: "#ff4d3d" },
    { label: "Python", Icon: FaPython, color: "#4b9fd6" },
    { label: "Django", Icon: FaPython, color: "#44b78b" },
    { label: "HTML", Icon: FaHtml5, color: "#e34f26" },
    { label: "CSS", Icon: FaCss3Alt, color: "#2a8fd8" },
    { label: "JavaScript", Icon: FaJs, color: "#f7df1e" },
    { label: "React", Icon: FaReact, color: "#61dafb" },
    { label: "Flutter", Icon: SiFlutter, color: "#54c5f8" },
    { label: "jQuery", Icon: FaJs, color: "#3b9cd9" },
    { label: "MySQL", Icon: FaDatabase, color: "#4479a1" },
    { label: "SQL Server", Icon: FaDatabase, color: "#e0524a" },
    { label: "SQLite", Icon: FaDatabase, color: "#58a6d6" },
    { label: "Bootstrap", Icon: FaBootstrap, color: "#8f6fd8" },
];

const rowA = skills.slice(0, 7);
const rowB = skills.slice(7);

const StackRow = ({ items, reverse }) => {
    // three copies so translateX(-33.333%) loops seamlessly on short rows
    const loop = [...items, ...items, ...items];
    return (
        <Motion.div
            className={`stack-row${reverse ? " reverse" : ""}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="stack-track">
                {loop.map((item, idx) => (
                    <div
                        className="stack-card"
                        key={`${item.label}-${idx}`}
                        style={{ "--c": item.color }}
                    >
                        <span className="stack-orb">
                            <item.Icon />
                        </span>
                        <span className="stack-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </Motion.div>
    );
};

const Skills = () => {
    return (
        <section className="section dark" id="skills">
            <SectionHeading
                eyebrow="Stack"
                title="Technical skills & tools."
                subtitle="The languages, frameworks, and databases I reach for to ship solid backends and polished frontends."
            />
            <div className="stack-marquee">
                <StackRow items={rowA} />
                <StackRow items={rowB} reverse />
            </div>
        </section>
    );
};

export default Skills;
