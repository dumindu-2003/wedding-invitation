import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import weddingConfig from "../data/weddingConfig";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { easeLux } from "../utils/motion";
import FloatingPetals from "./FloatingPetals";
import { FloralCorners, FloralDivider } from "./Florals";
import RunningCoupleAnimation from "./RunningCoupleAnimation";

const flapEase = [0.62, 0.04, 0.18, 1];
const cardEase = [0.16, 1, 0.3, 1];

export default function OpeningScene({ leaving, onOpen, onExited }) {
  const reduce = usePrefersReducedMotion();
  const { opening, couple, invitation } = weddingConfig;
  const revealed = useRef(false);
  const started = useRef(false);
  const [openingCard, setOpeningCard] = useState(false);

  const triggerOpen = useCallback((event) => {
    event?.preventDefault();
    event?.stopPropagation();
    if (started.current || leaving || revealed.current) return;
    started.current = true;
    if (reduce) {
      revealed.current = true;
      onOpen();
      return;
    }
    setOpeningCard(true);
  }, [leaving, reduce, onOpen]);

  useEffect(() => {
    if (!openingCard) return undefined;
    const timer = window.setTimeout(() => {
      if (revealed.current) return;
      revealed.current = true;
      onOpen();
    }, 1400);
    return () => window.clearTimeout(timer);
  }, [openingCard, onOpen]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent p-0 sm:p-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: reduce ? 0.2 : 0.75, ease: easeLux, delay: leaving && !reduce ? 0.12 : 0 }}
      onAnimationComplete={() => { if (leaving) onExited(); }}
    >
      <div
        className="relative h-full w-full max-w-xl sm:h-[min(920px,100%)]"
        style={{ perspective: "1900px", perspectiveOrigin: "50% 36%", overflowX: "clip" }}
      >
        <section
          className="wash-rose relative h-full w-full shadow-[0_24px_60px_rgba(194,24,91,0.18)] ring-1 ring-champagne/80 sm:rounded-[2rem]"
          aria-label="Wedding invitation cover"
        >
          <motion.article
            data-envelope-card
            className="gold-frame absolute inset-x-5 top-[48%] z-10 origin-bottom rounded-[1.15rem] bg-ivory px-6 py-8 text-center sm:inset-x-8"
            initial={false}
            animate={
              openingCard
                ? { y: -210, rotateX: 0, opacity: leaving ? 0 : 1 }
                : { y: 72, rotateX: 7, opacity: 1 }
            }
            transition={{ duration: 1.35, delay: openingCard ? 0.7 : 0, ease: cardEase }}
            style={{ transformStyle: "preserve-3d", zIndex: openingCard ? 35 : 10 }}
            aria-hidden={!openingCard}
          >
            <p className="script-title font-script text-[clamp(2.35rem,9vw,3.8rem)]">{couple.bride.firstName}</p>
            <p className="script-title my-1 font-script text-3xl" aria-hidden="true">&</p>
            <p className="script-title font-script text-[clamp(2.35rem,9vw,3.8rem)]">{couple.groom.firstName}</p>
            <p className="mt-4 font-sans text-[0.68rem] tracking-[0.26em] text-rose uppercase">{invitation.marriedLine}</p>
            <FloralDivider className="mt-4" />
          </motion.article>

          {/* ── Bottom half: animation only (no photo) ── */}
          <div className="absolute inset-x-0 bottom-0 z-20 h-[60%] overflow-visible bg-gradient-to-b from-ivory to-blush">

            {/* Cartoon couple animation */}
            <div className="absolute inset-x-0 bottom-4 z-10 flex items-end justify-center px-1">
              <RunningCoupleAnimation className="w-full max-w-md" />
            </div>

            {/* Floral corners overlay */}
            <div className="pointer-events-none absolute inset-0 z-20">
              <FloralCorners edges="bottom" size="h-20 w-20 sm:h-28 sm:w-28" />
            </div>
          </div>
        </section>

        {/* Envelope flap (top) */}
        <motion.div
          data-envelope-flap
          className="absolute inset-x-0 top-0 z-30 h-[58%] origin-top"
          initial={false}
          animate={openingCard ? { rotateX: [0, 8, 56] } : { rotateX: 0 }}
          transition={
            openingCard
              ? { duration: 1.25, delay: 0.22, times: [0, 0.22, 1], ease: flapEase }
              : { duration: 0.4 }
          }
          style={{
            transformStyle: openingCard ? "preserve-3d" : "flat",
            transformOrigin: "top center",
          }}
        >
          <div
            className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#fff6ea] via-blush to-[#ffd0e0] sm:rounded-t-[2rem]"
            style={{
              backfaceVisibility: "hidden",
              clipPath: "polygon(0 0, 100% 0, 100% 84%, 50% 100%, 0 84%)",
            }}
          >
            <FloralCorners edges="top" size="h-24 w-24 sm:h-32 sm:w-32" />
            <FloatingPetals />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-8 text-center">
              <p className="font-serif text-2xl text-ink italic sm:text-3xl">{opening.hint}</p>
              <FloralDivider className="mt-5" />
              {/* Skip button — fades in so user can skip animation */}
              <button
                type="button"
                onPointerUp={triggerOpen}
                onClick={triggerOpen}
                disabled={openingCard || leaving}
                className="btn-festive relative z-20 mt-7 min-h-12 cursor-pointer touch-manipulation px-8 py-3.5 font-sans text-[0.72rem] tracking-[0.22em] uppercase transition duration-300 active:scale-[0.98] disabled:opacity-50"
              >
                {opening.button}
              </button>
            </div>
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polyline points="0,84 50,100 100,84" fill="none" stroke="#e2b04a" strokeWidth="0.55" />
            </svg>
          </div>

          <div
            className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-b from-[#ffd6e6] to-[#ffe8c4]"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateX(180deg)",
              clipPath: "polygon(0 0, 100% 0, 100% 84%, 50% 100%, 0 84%)",
            }}
          >
            <div className="absolute inset-4 border border-floral/80 sm:rounded-t-[1.4rem]" />
            <FloralCorners edges="top" size="h-20 w-20" className="text-rose/80" />
            <div className="flex h-full items-center justify-center">
              <p className="font-script text-4xl text-rose/80">
                {couple.bride.firstName.slice(0, 1)}
                <span className="mx-2 text-2xl">&</span>
                {couple.groom.firstName.slice(0, 1)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* PT monogram seal */}
        <motion.div
          className="pointer-events-none absolute top-[58%] left-1/2 z-40 flex h-14 w-14 items-center justify-center rounded-full border-2 border-champagne bg-gradient-to-br from-[#fff6e8] to-blush shadow-[0_8px_16px_rgba(194,24,91,0.2)]"
          aria-hidden="true"
          initial={false}
          animate={
            openingCard
              ? { x: "-50%", y: 36, rotate: 18, scale: 0.7, opacity: 0 }
              : { x: "-50%", y: "-50%", rotate: 0, scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.55, ease: [0.4, 0, 0.8, 0.4] }}
        >
          <span className="font-script text-2xl text-romantic">
            {couple.bride.firstName.slice(0, 1)}
            {couple.groom.firstName.slice(0, 1)}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
