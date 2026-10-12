import { AnimatePresence, motion } from "framer-motion";
import useCountdown from "../hooks/useCountdown";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { easeLux } from "../utils/motion";

function Unit({ value, label }) {
  const reduce = usePrefersReducedMotion();
  const display = String(value).padStart(2, "0");

  return (
    <div className="px-2 py-4 text-center">
      <div className="lining-figures relative mx-auto h-[1.15em] overflow-hidden font-serif text-4xl leading-none text-romantic sm:text-5xl">
        {reduce ? (
          <span>{display}</span>
        ) : (
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={display}
              className="block"
              initial={{ y: "40%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-40%", opacity: 0 }}
              transition={{ duration: 0.35, ease: easeLux }}
            >
              {display}
            </motion.span>
          </AnimatePresence>
        )}
      </div>
      <p className="mt-2 font-sans text-[0.62rem] tracking-[0.18em] text-muted uppercase">{label}</p>
    </div>
  );
}

export default function WeddingCountdown({ dateTime, heading, passedMessage }) {
  const { days, hours, minutes, seconds, isComplete, isValid } = useCountdown(dateTime);

  if (!isValid) {
    return <p className="text-center font-serif text-xl">Add a valid date in the invitation settings.</p>;
  }

  if (isComplete) {
    return <p className="text-center font-serif text-2xl text-romantic italic">{passedMessage}</p>;
  }

  return (
    <div>
      <h2 className="text-center font-sans text-[0.78rem] tracking-[0.28em] text-romantic uppercase">{heading}</h2>
      <div
        className="mt-4 grid grid-cols-4 divide-x divide-floral/80"
        aria-label={`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until the wedding`}
      >
        <Unit value={days} label="Days" />
        <Unit value={hours} label="Hours" />
        <Unit value={minutes} label="Minutes" />
        <Unit value={seconds} label="Seconds" />
      </div>
    </div>
  );
}
