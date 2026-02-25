import { motion as Motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer } from "react-icons/fa";

const About = () => {
    return (
        <section className="section" id="about">
            <Motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </Motion.h2>
            <div className="about-container">
                <Motion.div 
                    className="about-text glass-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p>
                        I am a passionate <strong>Backend Developer</strong> with a degree in <strong>B.E (Hons.) Electronics & Communication Engineering</strong>. 
                        My journey in tech is driven by a curiosity to understand how robust systems are built and optimized.
                    </p>
                    <p>
                        Specializing in <strong>C#</strong>, <strong>PHP</strong>, and <strong>SQL Server</strong>, I focus on creating scalable, efficient, and secure backend architectures. 
                        I thrive on solving complex logic puzzles and am constantly expanding my skillset to stay ahead in the evolving tech landscape.
                    </p>
                </Motion.div>
                
                <div className="about-highlights">
                    <Motion.div 
                        className="highlight-box glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FaCode />
                        <h3>Clean Code</h3>
                        <p>Writing maintainable, readable, and efficient code is my priority.</p>
                    </Motion.div>

                    <Motion.div 
                        className="highlight-box glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <FaDatabase />
                        <h3>Database Design</h3>
                        <p>Optimizing schemas and queries for high-performance applications.</p>
                    </Motion.div>

                    <Motion.div 
                        className="highlight-box glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <FaServer />
                        <h3>Scalable Systems</h3>
                        <p>Building backends that can handle growth and heavy loads.</p>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
