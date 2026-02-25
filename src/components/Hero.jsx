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
                transition={{ duration: 0.8 }}
            >
                <img src={profile} alt="Naing Khant" />
            </Motion.div>

            <Motion.div
                className="hero-content"
                variants={fadeUp}
                initial="hidden"
                animate="show"
            >
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

                <a href="#contact" className="btn">Hire Me</a>
            </Motion.div>
        </section>
    );
};

export default Hero;
