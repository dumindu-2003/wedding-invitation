import { motion } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const ease = [0.42, 0.02, 0.18, 1];

function Face({ x, y, glance = 0 }) {
  return (
    <g>
      <circle cx={x} cy={y} r="18" fill="#f7d2c6" />
      <ellipse cx={x - 11} cy={y + 5} rx="3.4" ry="1.8" fill="#e9aab5" opacity="0.7" />
      <ellipse cx={x + 11} cy={y + 5} rx="3.4" ry="1.8" fill="#e9aab5" opacity="0.7" />
      <ellipse cx={x - 6 + glance} cy={y - 1} rx="3.4" ry="4" fill="#fff" />
      <ellipse cx={x + 6 + glance} cy={y - 1} rx="3.4" ry="4" fill="#fff" />
      <ellipse cx={x - 6 + glance} cy={y - 0.5} rx="2" ry="2.5" fill="#5b3b43" />
      <ellipse cx={x + 6 + glance} cy={y - 0.5} rx="2" ry="2.5" fill="#5b3b43" />
      <circle cx={x - 5.3 + glance} cy={y - 1.6} r="0.7" fill="#fff" />
      <circle cx={x + 6.7 + glance} cy={y - 1.6} r="0.7" fill="#fff" />
      <path d={`M${x - 4} ${y + 7}q4 4 8 0`} fill="none" stroke="#c87888" strokeWidth="1.1" strokeLinecap="round" />
    </g>
  );
}

export default function AnimeCouple({ className = "" }) {
  const reduce = usePrefersReducedMotion();
  const step = reduce ? { duration: 0 } : { duration: 2.8, times: [0, 0.22, 1], ease };

  return (
    <svg viewBox="0 0 420 230" className={className} role="img" aria-label="Anime bride and groom hugging">
      <ellipse cx="210" cy="210" rx="120" ry="12" fill="#f8e5e7" />

      <motion.g
        style={{ transformOrigin: "268px 208px", transformBox: "view-box" }}
        initial={false}
        animate={reduce ? { x: -24, rotate: -4 } : { x: [86, 86, -24], rotate: [0, 0, -4] }}
        transition={{ ...step, delay: reduce ? 0 : 0.08 }}
      >
        <path d="M214 138c8-40 36-58 62-56 34 2 60 30 52 74 16 14 24 42 8 66-28 8-90 8-116-4-6-22-10-48-6-80z" fill="#fff9f7" stroke="#e9aab5" strokeWidth="1.4" />
        <path d="M246 102h42l-2 32h-38z" fill="#fff9f7" stroke="#e9aab5" strokeWidth="1.2" />
        <path d="M310 130c12 8 18 20 12 32" stroke="#f8e5e7" strokeWidth="7" strokeLinecap="round" />
        <path d="M320 158c2 10-2 18-6 24" stroke="#f7d2c6" strokeWidth="5" strokeLinecap="round" />
        <circle cx="314" cy="176" r="6" fill="#e9aab5" />
        <circle cx="324" cy="170" r="5" fill="#c87888" />
        <path d="M292 64c-4 18 2 40 12 52 4-18 4-32-2-46-2-3-6-6-10-6z" fill="#f3c3cb" opacity="0.95" />

        <motion.g animate={{ opacity: reduce ? 0 : [1, 1, 0] }} transition={reduce ? { duration: 0 } : { duration: 2.8, times: [0, 0.34, 0.5] }}>
          <path d="M244 118c-16 8-30 12-44 12" stroke="#f8e5e7" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M202 128c-4 6-2 12 2 16" stroke="#f7d2c6" strokeWidth="5" strokeLinecap="round" fill="none" />
        </motion.g>

        <motion.g
          style={{ transformOrigin: "268px 92px", transformBox: "view-box" }}
          initial={false}
          animate={reduce ? { rotate: -10 } : { rotate: [0, 0, -12] }}
          transition={step}
        >
          <path d="M250 78c2-28 36-32 42-2-8-12-16-12-22-6-6-8-14-8-20 8z" fill="#4a3038" />
          <Face x={268} y={78} glance={-1} />
          <path d="M252 70c6-8 14-10 18-4" stroke="#4a3038" strokeWidth="3" strokeLinecap="round" fill="none" />
        </motion.g>
      </motion.g>

      <motion.g
        style={{ transformOrigin: "150px 208px", transformBox: "view-box" }}
        initial={false}
        animate={reduce ? { x: 22, rotate: 5 } : { x: [-88, -88, 22], rotate: [0, 0, 5] }}
        transition={step}
      >
        <path d="M126 140c0-3 6-5 9-2v64c0 3-6 4-9 1z" fill="#4a3038" />
        <path d="M142 140c1-3 9-3 10 0v62c-1 3-9 4-10 1z" fill="#5b3b43" />
        <path d="M112 136c2-34 18-50 40-50s36 16 38 50l-4 16H118z" fill="#5b3b43" />
        <path d="M136 96h24l-1 26h-22z" fill="#fff9f7" />
        <path d="M145 100l4 20-4 2-4-2z" fill="#a8324a" />
        <path d="M116 132c-2 12 0 22 4 28" stroke="#5b3b43" strokeWidth="7" strokeLinecap="round" fill="none" />

        <motion.g animate={{ opacity: reduce ? 0 : [1, 1, 0] }} transition={reduce ? { duration: 0 } : { duration: 2.8, times: [0, 0.34, 0.5] }}>
          <path d="M184 118c18 4 34 8 48 8" stroke="#5b3b43" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M228 124c4 6 4 12 0 16" stroke="#f7d2c6" strokeWidth="5" strokeLinecap="round" fill="none" />
        </motion.g>
        <motion.g animate={{ opacity: reduce ? 1 : [0, 0, 1] }} transition={reduce ? { duration: 0 } : { duration: 2.8, times: [0, 0.48, 0.68] }}>
          <path d="M176 114c22 6 46 14 58 24" stroke="#5b3b43" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M230 136c8 4 12 8 12 14" stroke="#f7d2c6" strokeWidth="5" strokeLinecap="round" fill="none" />
        </motion.g>

        <motion.g
          style={{ transformOrigin: "152px 88px", transformBox: "view-box" }}
          initial={false}
          animate={reduce ? { rotate: 10 } : { rotate: [0, 0, 11] }}
          transition={step}
        >
          <path d="M132 72c0-28 18-36 32-28 10-10 28-6 30 10-8-8-16-6-22-2-8-8-24-6-32 4-4 6-8 12-8 16z" fill="#3a2a2e" />
          <Face x={152} y={74} glance={1} />
        </motion.g>
      </motion.g>

      <motion.g
        initial={false}
        animate={reduce ? { x: -24 } : { x: [86, 86, -24] }}
        transition={{ ...step, delay: reduce ? 0 : 0.08 }}
      >
        <motion.g animate={{ opacity: reduce ? 1 : [0, 0, 1] }} transition={reduce ? { duration: 0 } : { duration: 2.8, times: [0, 0.5, 0.7] }}>
          <path d="M248 104c-22-2-48 6-66 16" stroke="#f8e5e7" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M184 118c-6 4-8 10-4 16" stroke="#f7d2c6" strokeWidth="5" strokeLinecap="round" fill="none" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
