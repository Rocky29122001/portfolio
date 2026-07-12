import { motion as Motion } from "framer-motion";
import { FaCode, FaDatabase, FaRocket, FaServer } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const About = () => {
    return (
        <section className="section" id="about">
            <SectionHeading
                eyebrow="About"
                title="Building reliable systems with care."
                subtitle="Backend developer focused on clean architecture, performance, and real-world impact."
            />
            <div className="about-container">
                <div className="about-content">
                    <Motion.div
                        className="about-text glass-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I'm a <strong>Backend Developer</strong> with a B.E (Hons.) in Electronics &amp; Communication Engineering.
                            I specialize in crafting scalable, secure, and maintainable systems using <strong>PHP, Laravel, and modern SQL</strong> technologies.
                        </p>
                        <p>
                            My approach combines deep technical curiosity with a focus on practical solutions.
                            I enjoy solving complex problems, optimizing performance, and building tools that teams actually love to use.
                        </p>
                    </Motion.div>

                    <div className="about-highlights">
                        <Motion.div
                            className="highlight-box glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <FaCode />
                            <h3>Clean Code</h3>
                            <p>Writing maintainable, readable, and efficient code is my priority.</p>
                        </Motion.div>

                        <Motion.div
                            className="highlight-box glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <FaDatabase />
                            <h3>Database Design</h3>
                            <p>Optimizing schemas and queries for high-performance applications.</p>
                        </Motion.div>

                        <Motion.div
                            className="highlight-box glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <FaServer />
                            <h3>Scalable Systems</h3>
                            <p>Building backends that can handle growth and heavy loads.</p>
                        </Motion.div>

                        {/* <Motion.div
                            className="highlight-box glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <FaRocket />
                            <h3>Continuous Learning</h3>
                            <p>Always exploring new tools and patterns to deliver better results.</p>
                        </Motion.div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;