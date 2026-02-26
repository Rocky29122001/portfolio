import { motion as Motion } from "framer-motion";
import { fadeUp } from "../animations";
import {
    FaPhp,
    FaLaravel,
    FaPython,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaDatabase,
    FaMobileAlt
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const Skills = () => {
    const skills = [
        { label: "PHP", Icon: FaPhp, color: "#777bb3" },
        { label: "Laravel", Icon: FaLaravel, color: "#FF2D20" },
        { label: "Python", Icon: FaPython, color: "#3776AB" },
        { label: "Django", Icon: FaPython, color: "#092E20" },
        { label: "Flutter", Icon: FaMobileAlt, color: "#02569B" },
        { label: "C#", Icon: TbBrandCSharp, color: "#9b4993" },
        { label: "HTML", Icon: FaHtml5, color: "#E34F26" },
        { label: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
        { label: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
        { label: "jQuery", Icon: FaJs, color: "#0769AD" },
        { label: "MySQL", Icon: FaDatabase, color: "#00618A" },
        { label: "SQL Server", Icon: FaDatabase, color: "#CC2927" },
        { label: "SQLite", Icon: FaDatabase, color: "#003B57" },
        { label: "Bootstrap", Icon: FaBootstrap, color: "#7952B3" }
    ];
    const loop = [...skills, ...skills];

    return (
        <section className="section dark" id="skills">
            <Motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                Technical Skills
            </Motion.h2>

            <div className="skills-marquee">
                <div className="skills-track">
                    {loop.map((item, idx) => (
                        <Motion.div
                            key={`${item.label}-${idx}`}
                            className="skill-card glass"
                            whileHover={{ scale: 1.08, rotate: 1 }}
                        >
                            <item.Icon className="skill-icon" style={{ color: item.color }} />
                            <span>{item.label}</span>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
