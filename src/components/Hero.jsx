import { motion as Motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import GradientASCII from "./reactbits/GradientASCII";

// greys only, so the ASCII field reads as texture behind the type rather than color
const ASCII_COLORS = ["#09090b", "#27272a", "#71717a", "#d4d4d8"];

const rise = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => (
    <section className="hero" id="home">
        <GradientASCII
            className="hero-ascii"
            colors={ASCII_COLORS}
            shape="horizon"
            cellSize={14}
            density={0.7}
            glyphOpacity={0.6}
            glow={0.1}
            gradientOpacity={0.55}
            grain={0.05}
            flicker={0.1}
            speed={0.6}
            clickEffect="none"
            fontFamily='"Geist Mono", ui-monospace, monospace'
        />
        <div className="hero-fade" aria-hidden="true" />

        <div className="hero-inner">
            <Motion.p className="hero-eyebrow" {...rise(0.2)}>
                <span className="status-dot" aria-hidden="true" />
                Available for work · Mandalay, Myanmar
            </Motion.p>

            <Motion.h1 className="hero-title" {...rise(0.3)}>
                Naing Khant
            </Motion.h1>

            <Motion.p className="hero-lead" {...rise(0.45)}>
                Backend-focused software developer building scalable, secure
                systems with Laravel, and the web and mobile apps on top of them.
            </Motion.p>

            <Motion.div className="hero-cta" {...rise(0.6)}>
                <a href="#work" className="btn">
                    View work <FaArrowRight aria-hidden="true" />
                </a>
                <a href="#contact" className="btn btn-ghost">
                    Get in touch
                </a>
            </Motion.div>
        </div>

        <Motion.a
            href="#work"
            className="hero-scroll"
            aria-label="Scroll to selected work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
        >
            <span>Scroll</span>
            <span className="hero-scroll-line" aria-hidden="true" />
        </Motion.a>
    </section>
);

export default Hero;
