import { CalendarDays, Clock, MapPin, Shirt } from "lucide-react";
import weddingConfig from "../data/weddingConfig";
import { FloralCorners, FloralDivider } from "./Florals";
import Reveal from "./Reveal";
import WeddingCountdown from "./WeddingCountdown";

function Row({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-rose" strokeWidth={1.5} aria-hidden="true" />
      <div>
        <p className="font-sans text-[0.65rem] tracking-[0.18em] text-rose uppercase">{label}</p>
        <p className="mt-1 font-serif text-xl text-ink">{value}</p>
      </div>
    </div>
  );
}

export default function WeddingDetails() {
  const { weekday, dateLine, ceremonyTimeShort, reception, venue, dressCode, dateTime, countdown } = weddingConfig;

  return (
    <>
      <section id="details" className="relative overflow-hidden bg-ivory px-5 py-16 text-ink sm:px-8 sm:py-20">
        <div className="relative mx-auto max-w-lg border border-floral px-5 py-10 sm:px-8">
          <FloralCorners size="h-16 w-16" />
          <Reveal className="relative z-10 text-center">
            <p className="font-sans text-[0.72rem] tracking-[0.24em] text-rose uppercase">The Celebration</p>
            <h2 className="mt-3 font-script text-5xl text-romantic">{dateLine}</h2>
            <p className="mt-1 font-serif text-lg text-muted italic">{weekday}</p>
            <FloralDivider className="mt-5" />
          </Reveal>
          <Reveal className="relative z-10 mx-auto mt-4 max-w-sm divide-y divide-floral/70 text-left">
            <Row icon={CalendarDays} label="Date" value={`${weekday}, ${dateLine}`} />
            <Row icon={Clock} label="Ceremony" value={ceremonyTimeShort} />
            <Row icon={Clock} label="Reception" value={reception.timeShort} />
            <Row icon={MapPin} label="Venue" value={`${venue.name}, ${venue.address}`} />
            {dressCode ? <Row icon={Shirt} label="Dress code" value={dressCode} /> : null}
          </Reveal>
        </div>
      </section>

      <section id="countdown" className="bg-blush px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-lg">
          <WeddingCountdown
            dateTime={dateTime}
            heading={countdown.heading}
            passedMessage={countdown.passedMessage}
          />
        </div>
      </section>
    </>
  );
}
