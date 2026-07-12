import { useEffect, useRef } from "react";
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
    FaReact,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const Skills = () => {
    const trackRef = useRef(null);

    // ponytail: direct style mutation in rAF, not React state — avoids a
    // re-render every frame for a purely cosmetic, non-interactive effect.
    useEffect(() => {
        let rafId;
        const tick = () => {
            const track = trackRef.current;
            if (track) {
                const trackRect = track.getBoundingClientRect();
                const centerX = trackRect.left + trackRect.width / 2;
                for (const card of track.children) {
                    const r = card.getBoundingClientRect();
                    const cardCenter = r.left + r.width / 2;
                    const dist = Math.abs(cardCenter - centerX);
                    // falls off to 0 influence past ~320px from center
                    const t = Math.max(0, 1 - dist / 320);
                    const scale = 0.82 + t * 0.33; // 0.82 -> 1.15
                    const opacity = 0.45 + t * 0.55; // 0.45 -> 1
                    card.style.transform = `scale(${scale})`;
                    card.style.opacity = opacity;
                    card.style.zIndex = Math.round(t * 10);
                }
            }
            rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, []);

    const skills = [
        { label: "PHP", Icon: FaPhp, color: "#777bb3" },
        { label: "Laravel", Icon: FaLaravel, color: "#FF2D20" },
        { label: "Python", Icon: FaPython, color: "#3776AB" },
        { label: "Django", Icon: FaPython, color: "#092E20" },
        { label: "HTML", Icon: FaHtml5, color: "#E34F26" },
        { label: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
        { label: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
        { label: "React", Icon: FaReact, color: "#61DAFB" },
        { label: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
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
                <div className="skills-track" ref={trackRef}>
                    {loop.map((item, idx) => (
                        <Motion.div
                            key={`${item.label}-${idx}`}
                            className="skill-card glass"
                            whileHover={{
                                boxShadow: "0 10px 30px -8px rgba(56, 189, 248, 0.5)",
                            }}
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