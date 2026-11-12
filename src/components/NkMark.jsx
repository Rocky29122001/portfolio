import { NK_PIECES } from "./nkPieces";

const NkMark = ({ size = 28, className = "" }) => (
  <svg
    viewBox="40 50 210 190"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    {NK_PIECES.map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);

export default NkMark;
