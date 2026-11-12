import { motion as Motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const EMAIL = "naingkhantwin29122001@gmail.com";

const details = [
    { label: "Phone", value: "+95 9 766 653 352", href: "tel:+959766653352" },
    { label: "Location", value: "Mandalay, Myanmar" },
    { label: "Status", value: "Open to full-time and freelance work" },
];

const Contact = () => (
    <section className="section contact-section" id="contact">
        <div className="section-intro">
            <p className="section-label">05 — Contact</p>
        </div>

        <Motion.div
            className="contact-main"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <h2 className="contact-title">Let's build something reliable.</h2>
            <a href={`mailto:${EMAIL}`} className="contact-email">
                {EMAIL} <FaArrowRight aria-hidden="true" />
            </a>
        </Motion.div>

        <dl className="contact-details">
            {details.map((d) => (
                <div key={d.label}>
                    <dt>{d.label}</dt>
                    <dd>{d.href ? <a href={d.href}>{d.value}</a> : d.value}</dd>
                </div>
            ))}
        </dl>
    </section>
);

export default Contact;
