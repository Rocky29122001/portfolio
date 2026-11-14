import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NkMark from "./NkMark";

const links = [
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Stack" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const sections = links
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean);

        // a section counts as current once it crosses the upper third of the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-35% 0px -60% 0px" }
        );
        sections.forEach((s) => observer.observe(s));

        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
            <a href="#home" className="nav-mark" onClick={() => setOpen(false)} aria-label="Naing Khant home">
                <NkMark size={30} />
                <span>Naing Khant</span>
            </a>

            <nav className={`nav-links${open ? " is-open" : ""}`} aria-label="Primary">
                {links.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={active === id ? "is-active" : ""}
                        aria-current={active === id ? "true" : undefined}
                        onClick={() => setOpen(false)}
                    >
                        {label}
                    </a>
                ))}
            </nav>

            <button
                type="button"
                className="nav-toggle"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
};

export default Navbar;
