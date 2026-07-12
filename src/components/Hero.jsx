import { useRef } from "react";
import {
    motion as Motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { fadeUp } from "../animations";
import Typing from "./Typing";
import FloatingIcons from "./FloatingIcons";
import profile from "../assets/myprofile.png";

const Hero = () => {
    const heroRef = useRef(null);
    const reduceMotion = useReducedMotion();

    // parallax out: as the hero scrolls off, image and text drift at
    // different speeds and fade, giving depth without extra scroll length.
    // Entrance animations live on inner wrappers because motion values in
    // style would override animate/variants on the same element.
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 260]);
    const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <FloatingIcons />
            <Motion.div
                className="hero-image"
                style={reduceMotion ? undefined : { y: imageY, scale: imageScale, opacity: fadeOut }}
            >
                <Motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={profile} alt="Naing Khant" />
                </Motion.div>
            </Motion.div>

            <Motion.div
                className="hero-content"
                style={reduceMotion ? undefined : { y: contentY, opacity: fadeOut }}
            >
                <Motion.div variants={fadeUp} initial="hidden" animate="show">
                    <div className="hero-badge">
                        <span className="pulse-dot" />
                        Open to opportunities
                    </div>

                    <h1 className="glow">
                        Hello, I'm <span>Naing Khant</span>
                    </h1>

                    <h3>
                        I am a <Typing />
                    </h3>

                    <p>
                        Backend-focused software developer passionate about
                        scalable, secure, and real-world systems.
                    </p>

                    <div className="hero-cta">
                        <a href="#contact" className="btn">Hire Me</a>
                        <a href="#projects" className="btn btn-ghost">View Projects</a>
                    </div>
                </Motion.div>
            </Motion.div>
        </section>
    );
};

export default Hero;
