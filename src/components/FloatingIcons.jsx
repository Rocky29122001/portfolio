import { motion as Motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaGithub, FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const icons = [
    { Icon: FaHtml5, color: "#e34f26", top: "15%", left: "10%", delay: 0 },
    { Icon: FaCss3Alt, color: "#264de4", top: "25%", left: "85%", delay: 2 },
    { Icon: FaJs, color: "#f7df1e", top: "65%", left: "15%", delay: 4 },
    { Icon: FaPhp, color: "#777bb4", top: "75%", left: "80%", delay: 1 },
    { Icon: FaLaravel, color: "#ff2d20", top: "10%", left: "70%", delay: 3 },
    { Icon: FaGithub, color: "#ffffff", top: "85%", left: "40%", delay: 5 },
    { Icon: FaPython, color: "#306998", top: "40%", left: "5%", delay: 2.5 },
    { Icon: TbBrandCSharp, color: "#9b4993", top: "50%", left: "90%", delay: 1.5 },
];

const floatAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const FloatingIcons = () => {
    return (
        <div className="floating-icons-container">
            {icons.map((item, i) => (
                <Motion.div
                    key={i}
                    className="floating-icon"
                    style={{
                        top: item.top,
                        left: item.left,
                        color: item.color,
                        position: "absolute",
                        fontSize: "2.5rem",
                        opacity: 0.25,
                        zIndex: 0,
                        pointerEvents: "none"
                    }}
                    animate={floatAnimation}
                    initial={{ y: 0, opacity: 0 }}
                    whileInView={{ opacity: 0.25 }}
                    transition={{ delay: item.delay }}
                >
                    <item.Icon />
                </Motion.div>
            ))}
        </div>
    );
};

export default FloatingIcons;
