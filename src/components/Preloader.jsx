import { useEffect, useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import brand from "../assets/nkbrand.png";

const BELTS = 8;
const LOAD_MS = 2400; // counter runtime before the reveal starts

const CornerPlus = ({ pos }) => (
  <span className={`pre-plus ${pos}`} aria-hidden="true">
    <svg viewBox="0 0 12 12">
      <line x1="6" y1="0" x2="6" y2="12" />
      <line x1="0" y1="6" x2="12" y2="6" />
    </svg>
  </span>
);

// slot-machine digit: a strip of 0-9 that slides to the current digit
const SlotDigit = ({ value }) => (
  <span className="pre-slot">
    <Motion.span
      className="pre-slot-strip"
      animate={{ y: `${-value}em` }}
      transition={{ type: "spring", stiffness: 320, damping: 32 }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
        <span key={d}>{d}</span>
      ))}
    </Motion.span>
  </span>
);

// the brand PNG is dark-on-white; CSS inverts it for the dark ground and crops
// the square down to the mark and its wordmark
const LogoMark = () => (
  <Motion.div
    className="pre-logo"
    initial={{ opacity: 0, filter: "blur(8px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
  >
    <img src={brand} alt="" draggable="false" />
  </Motion.div>
);

const Preloader = ({ onFinish }) => {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      onFinish();
      return undefined;
    }

    let raf;
    const started = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - started) / LOAD_MS);
      const eased = 1 - Math.pow(1 - t, 2.4); // rushes early, settles at the end
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        onFinish();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion, onFinish]);

  const digits = String(count).padStart(3, "0").split("").map(Number);

  return (
    <Motion.div className="preloader" aria-hidden="true" exit={{ pointerEvents: "none" }}>
      {/* reveal: the grey ground peels away as staggered horizontal belts */}
      {Array.from({ length: BELTS }, (_, i) => (
        <Motion.span
          key={i}
          className="pre-belt"
          style={{ top: `${(i * 100) / BELTS}%`, height: `${100 / BELTS + 0.5}%` }}
          exit={{ scaleY: 0, transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0.18 + i * 0.05 } }}
        />
      ))}

      <Motion.div className="pre-center" exit={{ opacity: 0, transition: { duration: 0.25 } }}>
        <div className="pre-frame">
          <CornerPlus pos="tl" />
          <CornerPlus pos="tr" />
          <CornerPlus pos="bl" />
          <CornerPlus pos="br" />
          <LogoMark />
        </div>

        <div className="pre-counter">
          <SlotDigit value={digits[0]} />
          <SlotDigit value={digits[1]} />
          <SlotDigit value={digits[2]} />
          <span className="pre-counter-unit">%</span>
        </div>
      </Motion.div>
    </Motion.div>
  );
};

export default Preloader;
