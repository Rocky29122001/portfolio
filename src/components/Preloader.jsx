import { useEffect, useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { NK_PIECES } from "./nkPieces";

const BELTS = 8;
const TAG_WORDS = ["BUILD", "SCALE", "SECURE"];
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

const LogoMark = () => (
  <Motion.div
    className="pre-logo-3d"
    initial={{ rotateY: -32, rotateX: 12 }}
    animate={{ rotateY: [-32, 14, -8, 0], rotateX: [12, -6, 3, 0] }}
    transition={{ duration: LOAD_MS / 1000, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 256 256" className="pre-logo" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="pre-mark-fill" x1="48" y1="60" x2="206" y2="202" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fafafa" />
          <stop offset="0.52" stopColor="#d4d4d8" />
          <stop offset="1" stopColor="#a1a1aa" />
        </linearGradient>
        <linearGradient id="pre-mark-edge" x1="54" y1="70" x2="210" y2="192" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#d4d4d8" />
          <stop offset="1" stopColor="#71717a" />
        </linearGradient>
        <radialGradient id="pre-mark-bg" cx="50%" cy="48%" r="70%">
          <stop stopColor="#18181b" />
          <stop offset="0.7" stopColor="#0c0c0e" />
          <stop offset="1" stopColor="#09090b" />
        </radialGradient>
      </defs>

      <Motion.rect
        width="256" height="256" rx="22" fill="url(#pre-mark-bg)"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "128px 128px" }}
      />
      {NK_PIECES.map((d, i) => (
        <Motion.path
          key={d}
          d={d}
          fill="url(#pre-mark-fill)"
          stroke="url(#pre-mark-edge)"
          strokeWidth="4"
          strokeLinejoin="round"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, fillOpacity: 1 }}
          transition={{
            pathLength: { duration: 0.9, delay: 0.4 + i * 0.35, ease: [0.65, 0, 0.35, 1] },
            fillOpacity: { duration: 0.5, delay: 0.9 + i * 0.35 },
          }}
        />
      ))}
    </svg>
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

        <div className="pre-tagline">
          {TAG_WORDS.map((word, i) => (
            <Motion.span
              key={word}
              className="pre-tag-word"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.35, duration: 0.45 }}
            >
              {word}
              {i < TAG_WORDS.length - 1 && <i className="pre-tag-dot">·</i>}
            </Motion.span>
          ))}
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
