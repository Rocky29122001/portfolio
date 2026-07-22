import { useState } from "react";
import SectionHeading from "./SectionHeading";
import {
    FaPause,
    FaPlay,
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

// three copies so translateX(-33.333%) loops seamlessly
const loop = [...skills, ...skills, ...skills];

// relative luminance decides whether a tile needs dark or light ink for contrast
const inkFor = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.62 ? "#0f172a" : "#f8fafc";
};

const Skills = () => {
    const [paused, setPaused] = useState(false);

    return (
        <section className="section dark" id="skills">
            <SectionHeading
                eyebrow="Stack"
                title="Technical skills & tools."
                subtitle="The languages, frameworks, and databases I reach for to ship solid backends and polished frontends."
            />
            <div className="skills-ticker-controls">
                <button
                    type="button"
                    className="skills-ticker-toggle"
                    onClick={() => setPaused((p) => !p)}
                    aria-pressed={paused}
                    aria-label={paused ? "Resume skills scroll" : "Pause skills scroll"}
                >
                    {paused ? <FaPlay aria-hidden="true" /> : <FaPause aria-hidden="true" />}
                </button>
            </div>
            <div className={`skills-ticker${paused ? " is-paused" : ""}`}>
                <div className="skills-ticker-track">
                    {loop.map((item, idx) => (
                        <div
                            className="skill-tile"
                            key={`${item.label}-${idx}`}
                            style={{ "--c": item.color, "--ink": inkFor(item.color) }}
                        >
                            <item.Icon className="skill-tile-icon" aria-hidden="true" />
                            <span className="skill-tile-label">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
