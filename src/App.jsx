import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion as Motion, useScroll } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BulletinBoardDetail from "./components/BulletinBoardDetail";
import CaneHandicraftDetail from "./components/CaneHandicraftDetail";
import BlackjackDetail from "./components/BlackjackDetail";
import CafemonoDetail from "./components/CafemonoDetail";

const detailPages = {
  "/projects/cafemono": CafemonoDetail,
  "/projects/bulletin-board": BulletinBoardDetail,
  "/projects/cane-handicraft": CaneHandicraftDetail,
  "/projects/blackjack": BlackjackDetail,
};

function App() {
  const year = new Date().getFullYear();
  const { scrollYProgress } = useScroll();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const lenisRef = useRef(null);
  const DetailPage = detailPages[currentPath];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const lenis = new Lenis({ anchors: true });
    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const navigate = (to) => {
    const target = new URL(to, window.location.origin);
    window.history.pushState({}, "", `${target.pathname}${target.hash}`);
    setCurrentPath(target.pathname);

    window.setTimeout(() => {
      const lenis = lenisRef.current;

      if (target.hash) {
        if (lenis) {
          lenis.scrollTo(target.hash);
        } else {
          document.querySelector(target.hash)?.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80);
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (DetailPage) {
      return undefined;
    }

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
  }, [DetailPage]);

  return (
    <MotionConfig reducedMotion="user">
      <Motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <AnimatePresence mode="wait">
        <Motion.div
          key={currentPath}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          {DetailPage ? (
            <DetailPage onNavigate={navigate} />
          ) : (
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects onNavigate={navigate} />
              <Contact />
            </>
          )}
        </Motion.div>
      </AnimatePresence>
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
    </MotionConfig>
  );
}

export default App;
