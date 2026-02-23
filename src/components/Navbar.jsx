import { useEffect, useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const ids = ["home", "about", "skills", "projects", "contact"];
        const sections = ids
            .map(id => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "0px 0px -40% 0px", threshold: [0.6, 0.8, 1] }
        );

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <header>
            <div className="logo">Naing Khant</div>

            <nav className={open ? "active" : ""} role="navigation" aria-label="Primary">
                <a
                    href="#home"
                    className={active === "home" ? "active" : ""}
                    onClick={() => setOpen(false)}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className={active === "about" ? "active" : ""}
                    onClick={() => setOpen(false)}
                >
                    About
                </a>
                <a
                    href="#skills"
                    className={active === "skills" ? "active" : ""}
                    onClick={() => setOpen(false)}
                >
                    Skills
                </a>
                <a
                    href="#projects"
                    className={active === "projects" ? "active" : ""}
                    onClick={() => setOpen(false)}
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className={active === "contact" ? "active" : ""}
                    onClick={() => setOpen(false)}
                >
                    Contact
                </a>
            </nav>

            <div className="menu-btn" onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    );
};

export default Navbar;
