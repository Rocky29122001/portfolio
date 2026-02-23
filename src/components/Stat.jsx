import { motion as Motion } from "framer-motion";
import { fadeUp } from "../animations";
import { useEffect, useRef } from "react";

const Counter = ({ target }) => {
    const ref = useRef(0);

    useEffect(() => {
        let count = 0;
        const update = () => {
            count += target / 80;
            if (count < target) {
                ref.current.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                ref.current.innerText = target;
            }
        };
        update();
    }, [target]);

    return <h2 ref={ref} className="glow">0</h2>;
};

const Stat = () => (
    <section className="stats">
        {[
            { n: 10, t: "Projects" },
            { n: 8, t: "Technologies" },
            { n: 2, t: "Years Learning" }
        ].map(item => (
            <Motion.div
                key={item.t}
                className="stat-box glass"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
            >
                <Counter target={item.n} />
                <p>{item.t}</p>
            </Motion.div>
        ))}
    </section>
);

export default Stat;
