import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stat from "./components/Stat";

function App() {
  const year = new Date().getFullYear();
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stat />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        <div className="footer-content">
          <p>© {year} Naing Khant. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:naingkhantwin29122001@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
