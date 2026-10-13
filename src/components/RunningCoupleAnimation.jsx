import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/* floating heart */
function FloatHeart({ delay = 0, x = 50 }) {
  return (
    <motion.div
      className="pointer-events-none absolute select-none text-2xl"
      style={{ left: `${x}%`, bottom: "55%" }}
      initial={{ opacity: 0, y: 0, scale: 0.4 }}
      animate={{ opacity: [0, 1, 1, 0], y: -70, scale: [0.4, 1.3, 1, 0.7] }}
      transition={{ duration: 1.8, delay, ease: "easeOut" }}
    >
      ❤️
    </motion.div>
  );
}

/**
 * RunningCoupleAnimation
 * @param {string}   className   - extra classes
 * @param {function} onComplete  - called after hug + hearts → invitation opens
 */
export default function RunningCoupleAnimation({ className = "", onComplete }) {
  const reduce = usePrefersReducedMotion();
  const [phase, setPhase] = useState("running"); // "running" | "hugging"
  const [showHearts, setShowHearts] = useState(false);
  const timerRef = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => {
    if (reduce) {
      setPhase("hugging");
      setShowHearts(true);
      // fire onComplete after short pause even for reduced-motion users
      if (onComplete) {
        timerRef.current = setTimeout(() => {
          if (!completedRef.current) { completedRef.current = true; onComplete(); }
        }, 1200);
      }
      return () => clearTimeout(timerRef.current);
    }

    // Phase 1 → 2: running → hug after 2.6 s
    timerRef.current = setTimeout(() => {
      setPhase("hugging");

      // show hearts 350 ms after hug starts
      setTimeout(() => setShowHearts(true), 350);

      // fire onComplete ~1.6 s after hug (hearts visible)
      if (onComplete) {
        setTimeout(() => {
          if (!completedRef.current) { completedRef.current = true; onComplete(); }
        }, 1800);
      }
    }, 2600);

    return () => clearTimeout(timerRef.current);
  }, [reduce, onComplete]);

  return (
    <div
      className={`relative flex items-end justify-center overflow-visible ${className}`}
      style={{ minHeight: 260 }}
      aria-label="Animated couple running and hugging"
      role="img"
    >
      {/* ground line */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-4/5 rounded-full bg-rose-100 opacity-70" />

      <AnimatePresence mode="wait">
        {phase === "running" ? (
          <motion.div
            key="running"
            className="relative flex w-full items-end justify-between px-0"
            style={{ height: 260 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {/* Groom slides in from left */}
            <motion.div
              style={{ width: "42%", height: 250 }}
              initial={{ x: reduce ? 0 : "-130%" }}
              animate={{ x: 0 }}
              transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/groom-running.png"
                alt="Groom running"
                className="h-full w-full object-contain object-bottom drop-shadow-md"
              />
            </motion.div>

            {/* Bride slides in from right */}
            <motion.div
              style={{ width: "42%", height: 250 }}
              initial={{ x: reduce ? 0 : "130%" }}
              animate={{ x: 0 }}
              transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/bride-running.png"
                alt="Bride running"
                className="h-full w-full object-contain object-bottom drop-shadow-md"
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="hugging"
            className="relative flex items-end justify-center"
            style={{ height: 260, width: "100%" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/couple-hug.png"
              alt="Couple hugging"
              className="h-full object-contain object-bottom drop-shadow-md"
              style={{ maxWidth: "95%" }}
            />

            {showHearts && (
              <>
                <FloatHeart delay={0.0} x={30} />
                <FloatHeart delay={0.25} x={50} />
                <FloatHeart delay={0.5} x={68} />
                <FloatHeart delay={0.75} x={42} />
                <FloatHeart delay={1.0} x={58} />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
