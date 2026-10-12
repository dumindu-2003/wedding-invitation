import { motion } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { easeLux, viewportOnce } from "../utils/motion";

export default function Reveal({ children, className = "", delay = 0, y = 26, as = "div" }) {
  const reduce = usePrefersReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, delay, ease: easeLux }}
    >
      {children}
    </MotionTag>
  );
}
