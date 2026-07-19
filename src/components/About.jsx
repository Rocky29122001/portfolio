import { useEffect, useRef, useState } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { FaCode, FaDatabase, FaServer } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

// count-up that starts when the stat scrolls into view
const Counter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let rafId;
        const t0 = performance.now();
        const duration = 1400;
        const tick = (now) => {
            const t = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setN(Math.round(eased * value));
            if (t < 1) rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [inView, value]);

    return (
        <span ref={ref}>
            {n}
            {suffix}
        </span>
    );
};

const highlights = [
    {
        Icon: FaCode,
        title: "Clean Code",
        text: "Maintainable, readable, and efficient code as a baseline — not an afterthought.",
    },
    {
        Icon: FaDatabase,
        title: "Database Design",
        text: "Schemas and queries tuned for high-performance, data-heavy applications.",
    },
    {
        Icon: FaServer,
        title: "Scalable Systems",
        text: "Backends built to absorb growth, traffic spikes, and real-world load.",
    },
];

const stats = [
    { value: 8, suffix: "+", label: "Projects Built" },
    { value: 15, suffix: "+", label: "Technologies" },
    { value: 4, suffix: "", label: "Case Studies" },
];

// cursor-tracking spotlight: feeds --mx/--my to the card's ::after glow
const trackSpot = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const About = () => {
    return (
        <section className="section" id="about">
            <SectionHeading
                eyebrow="About"
                title="Building reliable systems with care."
                subtitle="Backend developer focused on clean architecture, performance, and real-world impact."
            />
            <div className="about-grid">
                <Motion.div
                    className="about-statement"
                    onMouseMove={trackSpot}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="about-big">
                        I turn <span className="grad">complex backend problems</span>{" "}
                        into clean, <span className="grad">scalable systems</span>.
                    </p>
                    <p>
                        I'm a <strong>Backend Developer</strong> with a B.E (Hons.) in
                        Electronics &amp; Communication Engineering, specializing in
                        secure, maintainable systems with{" "}
                        <strong>PHP, Laravel, and modern SQL</strong>.
                    </p>
                    <p>
                        My approach pairs deep technical curiosity with practical
                        delivery — solving hard problems, optimizing performance, and
                        building tools teams actually love to use.
                    </p>
                    <div className="about-stats">
                        {stats.map((s) => (
                            <div className="about-stat" key={s.label}>
                                <span className="about-stat-num">
                                    <Counter value={s.value} suffix={s.suffix} />
                                </span>
                                <span className="about-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </Motion.div>

                <div className="about-cards">
                    {highlights.map((item, i) => (
                        <Motion.div
                            className="hl-card"
                            key={item.title}
                            onMouseMove={trackSpot}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ y: -4 }}
                            transition={{
                                duration: 0.55,
                                delay: 0.12 * i,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <span className="hl-index">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="hl-orb">
                                <item.Icon />
                            </span>
                            <div className="hl-body">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
