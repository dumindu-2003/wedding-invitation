import { Camera, Heart, Music2, Users, Utensils } from "lucide-react";
import weddingConfig from "../data/weddingConfig";
import Reveal from "./Reveal";

const icons = [Users, Heart, Camera, Utensils, Music2];

export default function WeddingTimeline() {
  const { schedule } = weddingConfig;

  return (
    <section id="schedule" className="bg-blush/40 px-5 py-16 text-ink sm:px-8 sm:py-20">
      <div className="mx-auto max-w-lg">
        <Reveal className="text-center">
          <p className="font-sans text-[0.72rem] tracking-[0.24em] text-rose uppercase">{schedule.eyebrow}</p>
          <h2 className="mt-3 font-script text-5xl text-romantic">{schedule.heading}</h2>
        </Reveal>

        <ol className="relative mt-10 space-y-8 pl-2">
          <span className="absolute top-2 bottom-2 left-[1.15rem] w-px bg-floral" aria-hidden="true" />
          {schedule.events.map((event, index) => {
            const Icon = icons[index] || Heart;
            return (
              <Reveal as="li" key={event.title} className="relative flex gap-4 pl-10" delay={index * 0.04}>
                <span className="absolute top-0 left-0 flex h-9 w-9 items-center justify-center rounded-full border border-floral bg-ivory text-rose">
                  <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-sans text-[0.68rem] tracking-[0.16em] text-rose uppercase">{event.time}</p>
                  <h3 className="mt-1 font-serif text-2xl text-ink">{event.title}</h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed font-light text-muted">{event.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
