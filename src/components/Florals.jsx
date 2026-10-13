const petals = [0, 72, 144, 216, 288];

function Blossom({ x, y, scale = 1, fill = "currentColor" }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {petals.map((angle) => (
        <ellipse
          key={angle}
          cy="-7"
          rx="3.2"
          ry="6"
          transform={`rotate(${angle})`}
          fill={fill}
          opacity="0.9"
        />
      ))}
      <circle r="2.2" fill="#fff9f7" />
    </g>
  );
}

export function CornerSpray({ className = "" }) {
  return (
    <svg viewBox="0 0 220 220" className={className} fill="none" aria-hidden="true">
      <path d="M8 16C48 28 36 78 78 112" stroke="#e24b73" strokeWidth="1.4" />
      <path d="M16 8C58 24 96 30 148 72" stroke="#d4a017" strokeWidth="1.4" />
      <path d="M6 28C24 70 22 118 54 168" stroke="#5f9a6a" strokeWidth="1.4" />
      <ellipse cx="46" cy="48" rx="16" ry="6" transform="rotate(-40 46 48)" fill="#ffe0ea" stroke="#f48aaa" />
      <ellipse cx="62" cy="78" rx="18" ry="6.5" transform="rotate(-12 62 78)" fill="#fff1d0" stroke="#e2b04a" />
      <ellipse cx="34" cy="96" rx="14" ry="5" transform="rotate(30 34 96)" fill="#ffb7c8" fillOpacity="0.7" stroke="#e24b73" />
      <ellipse cx="108" cy="52" rx="15" ry="5.5" transform="rotate(-28 108 52)" fill="#ffe8d6" stroke="#ff7a59" />
      <ellipse cx="48" cy="142" rx="13" ry="5" transform="rotate(24 48 142)" stroke="#5f9a6a" fill="#7dcea0" fillOpacity="0.55" />
      <Blossom x={82} y={112} fill="#f06292" />
      <Blossom x={146} y={70} scale="0.82" fill="#ffb347" />
      <Blossom x={56} y={166} scale="0.62" fill="#e24b73" />
    </svg>
  );
}

const corners = [
  { className: "left-0 top-0" },
  { className: "right-0 top-0", mirror: "scaleX(-1)" },
  { className: "bottom-0 left-0", mirror: "scaleY(-1)" },
  { className: "bottom-0 right-0", mirror: "scale(-1,-1)" },
];

export function FloralCorners({ className = "text-floral", size = "h-24 w-24 sm:h-32 sm:w-32", edges = "all" }) {
  const selected =
    edges === "top" ? corners.slice(0, 2) : edges === "bottom" ? corners.slice(2) : corners;

  return (
    <>
      {selected.map((corner) => (
        <div key={corner.className} className={`pointer-events-none absolute ${corner.className} ${size}`}>
          <div
            className="h-full w-full"
            style={corner.mirror ? { transform: corner.mirror } : undefined}
          >
            <CornerSpray className={`h-full w-full ${className}`} />
          </div>
        </div>
      ))}
    </>
  );
}

export function FloralDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-champagne sm:w-16" />
      <span className="h-2 w-2 rotate-45 bg-gradient-to-br from-rose to-champagne" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-champagne sm:w-16" />
    </div>
  );
}

export function SmallBouquet({ className = "" }) {
  return (
    <svg viewBox="0 0 160 70" className={className} aria-hidden="true">
      <path d="M20 40c30 0 40-16 60-8 20 8 30 8 60 0" stroke="#e2b04a" strokeWidth="1.4" fill="none" />
      <Blossom x={48} y={36} scale="0.7" fill="#f06292" />
      <Blossom x={80} y={28} fill="#ffb347" />
      <Blossom x={112} y={36} scale="0.7" fill="#e24b73" />
      <ellipse cx="64" cy="42" rx="12" ry="4" fill="#5f9a6a" fillOpacity="0.55" transform="rotate(-20 64 42)" />
      <ellipse cx="98" cy="42" rx="12" ry="4" fill="#7dcea0" fillOpacity="0.55" transform="rotate(20 98 42)" />
    </svg>
  );
}
