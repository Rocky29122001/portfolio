import { motion as Motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="section dark" id="contact">
            <Motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Get In Touch
            </Motion.h2>
            <div className="contact-container">
                <Motion.div 
                    className="contact-info glass-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                    
                    <div className="contact-item">
                        <div className="icon-box">
                            <FaEnvelope />
                        </div>
                        <div>
                            <span>Email</span>
                            <p>naingkhantwin29122001@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <div className="icon-box">
                            <FaPhone />
                        </div>
                        <div>
                            <span>Phone</span>
                            <p>+95 9 766 653 352</p>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <div className="icon-box">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <span>Location</span>
                            <p>Mandalay, Myanmar</p>
                        </div>
                    </div>
                </Motion.div>
                
                <Motion.form 
                    className="contact-form glass-card" 
                    onSubmit={(e) => e.preventDefault()}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3>Send Message</h3>
                    <div className="form-group">
                        <input type="text" placeholder=" " className="form-input" required id="name" />
                        <label htmlFor="name" className="form-label">Your Name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder=" " className="form-input" required id="email" />
                        <label htmlFor="email" className="form-label">Your Email</label>
                    </div>
                    <div className="form-group">
                        <textarea placeholder=" " className="form-textarea" required id="message"></textarea>
                        <label htmlFor="message" className="form-label">Your Message</label>
                    </div>
                    <button type="submit" className="btn">
                        Send Message <FaPaperPlane style={{ marginLeft: "8px" }} />
                    </button>
                </Motion.form>
            </div>
        </section>
    );
};

export default Contact;
