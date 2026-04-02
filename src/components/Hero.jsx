import { motion as Motion } from "framer-motion";
import { fadeUp } from "../animations";
import Typing from "./Typing";
import FloatingIcons from "./FloatingIcons";
import profile from "../assets/myprofile.png";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <FloatingIcons />
            <Motion.div
                className="hero-image"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <img src={profile} alt="Naing Khant" />
            </Motion.div>

            <Motion.div
                className="hero-content"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <h1 className="glow">
                    Hello, I'm <span style={{ background: "linear-gradient(90deg, #38bdf8, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Naing Khant</span>
                </h1>

                <h3>
                    I am a <Typing />
                </h3>

                <p style={{ opacity: 0.85 }}>
                    Backend-focused software developer passionate about
                    scalable, secure, and real-world systems.
                </p>

                <a href="#contact" className="btn">Hire Me</a>
            </Motion.div>
        </section>
    );
};

export default Hero;
