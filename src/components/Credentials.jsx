import { motion as Motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaCertificate, FaGraduationCap, FaMedal, FaUniversity } from "react-icons/fa";

import SectionHeading from "./SectionHeading";

const Credentials = () => {
    const certificates = [
        { title: "A+ Service Technician", year: "2020", focus: "Computer hardware and service fundamentals" },
        { title: "Fundamentals Java", year: "2018", focus: "Core programming concepts and Java syntax" },
        { title: "Network Engineering", year: "2020", focus: "Networking concepts, systems, and infrastructure" },
    ];

    return (
        <section className="section credentials-section" id="credentials">
            <SectionHeading
                eyebrow="Credentials"
                title="Education & certifications"
                subtitle="Formal training that supports my engineering foundation."
            />

            <div className="credentials-container">
                <Motion.article
                    className="education-feature-card glass-card"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55 }}
                    viewport={{ once: true }}
                >
                    <div className="education-card-top">
                        <div className="credential-icon">
                            <FaGraduationCap />
                        </div>
                        <span className="credential-label">Education</span>
                    </div>

                    <div className="credential-content education-content">
                        <span className="degree-badge">
                            <FaMedal />
                            Honors Degree
                        </span>
                        <h3>B.E. (Hons.) Electronics & Communication Engineering</h3>
                        <div className="education-meta-grid">
                            <p className="credential-meta">
                                <FaUniversity />
                                <span>
                                    <strong>Myanmar Institute of Information Technology</strong>
                                    MIIT
                                </span>
                            </p>
                            <p className="credential-meta">
                                <FaCalendarAlt />
                                <span>
                                    <strong>Academic Period</strong>
                                    2017 - 2025
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="education-timeline" aria-hidden="true">
                        <span>2017</span>
                        <div></div>
                        <span>2025</span>
                    </div>

                    <div className="education-footer-note">
                        <span>Engineering Foundation</span>
                        <span>Communication Systems</span>
                        <span>Technical Problem Solving</span>
                    </div>
                </Motion.article>

                <Motion.article
                    className="certificates-panel glass-card"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="certificates-heading">
                        <div className="credential-icon">
                            <FaCertificate />
                        </div>
                        <div>
                            <span className="credential-label">Certificates</span>
                            <h3>Professional Learning</h3>
                        </div>
                    </div>

                    <div className="certificate-list">
                        {certificates.map(certificate => (
                            <div className="certificate-item" key={certificate.title}>
                                <div>
                                    <strong>
                                        <FaAward />
                                        {certificate.title}
                                        <span>{certificate.year}</span>
                                    </strong>
                                    <span>{certificate.focus}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Motion.article>
            </div>
        </section>
    );
};

export default Credentials;
