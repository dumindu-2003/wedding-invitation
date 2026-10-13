import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import weddingConfig from "../data/weddingConfig";
import { easeLux } from "../utils/motion";
import Photo from "./Photo";
import Reveal from "./Reveal";

export default function CoupleGallery() {
  const images = weddingConfig.gallery.images;
  const { gallery } = weddingConfig;
  const [active, setActive] = useState(null);
  const triggers = useRef([]);
  const closeRef = useRef(null);
  const pointerStart = useRef(null);
  const lightboxOpen = active !== null;

  const close = () => {
    const index = active;
    setActive(null);
    if (index !== null) triggers.current[index]?.focus();
  };

  const step = (direction) => {
    setActive((current) => {
      if (current === null) return current;
      return (current + direction + images.length) % images.length;
    });
  };

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setActive(null);
        triggers.current[active]?.focus();
      }
      if (event.key === "ArrowRight") {
        setActive((current) => (current === null ? current : (current + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? current : (current - 1 + images.length) % images.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  const current = active === null ? null : images[active];

  return (
    <section id="gallery" className="wash-rose px-5 py-16 text-ink sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="font-sans text-[0.72rem] tracking-[0.24em] text-rose uppercase">{gallery.eyebrow}</p>
          <h2 className="script-title mt-3 font-script text-5xl sm:text-6xl">{gallery.heading}</h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {images.map((image, index) => (
            <li key={image.src} className={image.frame?.includes("col-span-2") ? "sm:col-span-2" : undefined}>
              <button
                type="button"
                ref={(node) => {
                  triggers.current[index] = node;
                }}
                className={`gallery-card block w-full cursor-pointer overflow-hidden rounded-2xl bg-blush ring-2 ring-champagne/80 ${image.frame || "aspect-[4/5]"}`}
                onClick={() => setActive(index)}
                aria-label={`View photograph: ${image.alt}`}
              >
                <Photo src={image.src} alt="" eager={index === 0} className="h-full w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {createPortal(
        <AnimatePresence>
          {current && (
            <motion.div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4"
              role="dialog"
              aria-modal="true"
              aria-label={current.alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            >
              <button
                ref={closeRef}
                type="button"
                className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-romantic"
                aria-label="Close photograph"
                onClick={close}
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 text-romantic"
                aria-label="Previous photograph"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 text-romantic"
                aria-label="Next photograph"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <motion.figure
                key={current.src}
                className="max-w-4xl"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: easeLux }}
                onClick={(event) => event.stopPropagation()}
                onPointerDown={(event) => {
                  pointerStart.current = event.clientX;
                }}
                onPointerUp={(event) => {
                  if (pointerStart.current === null) return;
                  const delta = event.clientX - pointerStart.current;
                  if (delta > 48) step(-1);
                  if (delta < -48) step(1);
                  pointerStart.current = null;
                }}
              >
                <Photo src={current.src} alt={current.alt} eager className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain" />
                <figcaption className="mt-3 text-center font-serif text-lg text-ivory">
                  {current.alt}
                  <span className="mt-1 block font-sans text-[0.65rem] tracking-[0.2em] text-floral uppercase">
                    {active + 1} / {images.length}
                  </span>
                </figcaption>
              </motion.figure>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
