import weddingConfig from "../data/weddingConfig";
import { FloralDivider } from "./Florals";
import Photo from "./Photo";
import Reveal from "./Reveal";

export default function OurStory() {
  const { story } = weddingConfig;

  return (
    <section id="story" className="wash-peach px-5 py-16 text-ink sm:px-8 sm:py-20">
      <div className="mx-auto max-w-lg">
        <Reveal className="text-center">
          <p className="font-sans text-[0.72rem] tracking-[0.24em] text-rose uppercase">{story.eyebrow}</p>
          <h2 className="script-title mt-3 font-script text-5xl sm:text-6xl">{story.heading}</h2>
          <p className="mt-4 font-serif text-xl text-muted italic">{story.intro}</p>
          <FloralDivider className="mt-6" />
        </Reveal>

        <div className="mt-12 space-y-12">
          {story.chapters.map((chapter, index) => (
            <Reveal key={chapter.title} className="text-center" delay={index * 0.04}>
              <div className="mx-auto mb-5 w-40 overflow-hidden rounded-full border-2 border-champagne shadow-[0_10px_28px_rgba(194,24,91,0.18)] ring-2 ring-rose/30">
                <Photo src={chapter.image} alt={chapter.alt} className="aspect-square w-full object-cover" />
              </div>
              <h3 className="script-title font-script text-4xl">{chapter.title}</h3>
              <p className="mt-3 font-sans text-[0.98rem] leading-relaxed font-light text-ink">{chapter.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
