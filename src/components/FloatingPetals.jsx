import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const petals = [
  { left: "8%", delay: "0s", duration: "16s", size: 12, rot: "-12deg", drift: "10px", color: "#e24b73" },
  { left: "22%", delay: "4s", duration: "18s", size: 10, rot: "16deg", drift: "-8px", color: "#e2b04a" },
  { left: "48%", delay: "2s", duration: "15s", size: 13, rot: "6deg", drift: "14px", color: "#ff7a59" },
  { left: "70%", delay: "6s", duration: "17s", size: 11, rot: "-20deg", drift: "-10px", color: "#f06292" },
  { left: "86%", delay: "1s", duration: "19s", size: 10, rot: "10deg", drift: "8px", color: "#d4a017" },
];

export default function FloatingPetals({ className = "" }) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.left}
          className="animate-petal absolute top-0"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.4,
            color: petal.color,
            opacity: 0.8,
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
