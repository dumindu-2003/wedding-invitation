import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const petals = [
  { left: "8%", delay: "0s", duration: "16s", size: 10, rot: "-12deg", drift: "10px" },
  { left: "22%", delay: "4s", duration: "18s", size: 8, rot: "16deg", drift: "-8px" },
  { left: "48%", delay: "2s", duration: "15s", size: 11, rot: "6deg", drift: "14px" },
  { left: "70%", delay: "6s", duration: "17s", size: 9, rot: "-20deg", drift: "-10px" },
  { left: "86%", delay: "1s", duration: "19s", size: 8, rot: "10deg", drift: "8px" },
];

export default function FloatingPetals({ className = "" }) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.left}
          className="animate-petal absolute top-0 text-floral"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.4,
            opacity: 0.55,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            "--petal-rot": petal.rot,
            "--petal-drift": petal.drift,
          }}
        >
          <svg viewBox="0 0 20 28" className="h-full w-full" aria-hidden="true">
            <path d="M10 1C14 7 18 12 10 27C2 12 6 7 10 1Z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );
}
