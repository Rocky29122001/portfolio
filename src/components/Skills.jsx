import { motion as Motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

const Skills = () => {
    const skills = [
        "PHP", "Laravel", "C#", "SQL Server",
        "MySQL", "HTML", "CSS", "JavaScript", "Git"
    ];

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

            <Motion.div
                className="skills-grid"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {skills.map(skill => (
                    <Motion.div
                        key={skill}
                        className="skill-card glass"
                        variants={fadeUp}
                        whileHover={{ scale: 1.08, rotate: 1 }}
                    >
                        {skill}
                    </Motion.div>
                ))}
            </Motion.div>
        </section>
    );
};

export default Skills;
