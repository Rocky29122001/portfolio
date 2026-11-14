// the nk brand mark, redrawn from src/assets/nkbrand.png in that file's
// 1024px coordinates. `weight` thickens the hairlines so the mark holds up at
// icon sizes; 0 matches the source artwork.
const LINES = [
  "M385 424 392 430V562H385Z", // n, left stem
  "M400 419H492L641 562H629L489 427H407Z", // n shoulder running into the k leg
  "M495 446 502 453V562H495Z", // n, right stem
  "M531 347H538V562H531Z", // k stem
  "M572 476 577 483 643 413Z", // k arm
];
const ACCENT = "M574 484 582 485 639 424 628 424Z";

const NkMark = ({ size = 28, weight = 7, className = "" }) => (
  <svg
    viewBox="368 309 292 292"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={weight}
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={ACCENT} fill="#c9a55c" stroke="#c9a55c" />
    {LINES.map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);

export default NkMark;
