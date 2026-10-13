import { MapPin } from "lucide-react";
import weddingConfig from "../data/weddingConfig";
import { FloralDivider } from "./Florals";
import Photo from "./Photo";
import Reveal from "./Reveal";

export default function VenueSection() {
  const { venue } = weddingConfig;
  const mapsUrl =
    venue.mapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.mapsQuery)}`;

  return (
    <section id="venue" className="wash-rose px-5 py-16 text-ink sm:px-8 sm:py-20">
      <div className="mx-auto max-w-lg text-center">
        <Reveal>
          <p className="font-sans text-[0.72rem] tracking-[0.24em] text-rose uppercase">The Venue</p>
          <h2 className="script-title mt-3 font-script text-5xl sm:text-6xl">{venue.name}</h2>
          <p className="mt-3 font-serif text-xl text-ink">{venue.address}</p>
          <p className="mt-3 font-sans text-sm leading-relaxed font-light text-muted">{venue.note}</p>
        </Reveal>

        <Reveal className="mt-8">
          <div className="rounded-[1.6rem] border-2 border-champagne bg-gradient-to-br from-[#fff6e8] to-blush p-3 shadow-[0_14px_32px_rgba(194,24,91,0.12)]">
            <Photo src={venue.image} alt={venue.imageAlt} className="aspect-[16/10] w-full rounded-[1.15rem] object-cover" />
          </div>
        </Reveal>

        {venue.mapEmbedUrl ? (
          <Reveal className="mt-5">
            <div className="overflow-hidden rounded-[1.6rem] border-2 border-champagne bg-gradient-to-br from-[#fff6e8] to-blush p-3">
              <iframe
                title={`Map showing ${venue.name}`}
                src={venue.mapEmbedUrl}
                className="aspect-[4/3] w-full rounded-[1.15rem] border-0 sm:aspect-[16/11]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 font-sans text-xs tracking-[0.16em] text-rose uppercase">
              {venue.name}, Avissawella
            </p>
          </Reveal>
        ) : null}

        <FloralDivider className="mt-8" />

        <Reveal className="mt-6">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-festive inline-flex items-center gap-2 px-7 py-3.5 font-sans text-[0.72rem] tracking-[0.2em] uppercase transition"
          >
            <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Get Directions
          </a>
        </Reveal>
      </div>
    </section>
  );
}
