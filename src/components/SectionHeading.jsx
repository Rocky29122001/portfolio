import { motion as Motion } from "framer-motion";
import { fadeUp } from "../animations";

const headContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

// each word slides up out of an overflow-hidden mask, one after another
const word = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <Motion.div
    className="section-head"
    variants={headContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.35 }}
  >
    {eyebrow ? (
      <Motion.span className="section-eyebrow" variants={fadeUp}>
        {eyebrow}
      </Motion.span>
    ) : null}
    <Motion.h2 variants={wordContainer}>
      {title.split(" ").map((w, i) => (
        <span className="word-mask" key={`${w}-${i}`}>
          <Motion.span className="word" variants={word}>
            {w}
          </Motion.span>
        </span>
      ))}
    </Motion.h2>
    {subtitle ? (
      <Motion.p className="section-lead" variants={fadeUp}>
        {subtitle}
      </Motion.p>
    ) : null}
  </Motion.div>
);

export default SectionHeading;
