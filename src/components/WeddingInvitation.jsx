import weddingConfig from "../data/weddingConfig";
import CoupleNames from "./CoupleNames";
import { FloralCorners, FloralDivider } from "./Florals";
import GoldenParticles from "./GoldenParticles";
import Photo from "./Photo";
import Reveal from "./Reveal";

export default function WeddingInvitation() {
  const { invitation, couple } = weddingConfig;
  const portrait = weddingConfig.story.chapters[2];

  return (
    <section id="invitation" className="wash-rose relative overflow-hidden px-5 py-16 text-ink sm:px-8 sm:py-20">
      <GoldenParticles density={28} tone="dark" />
      <FloralCorners size="h-24 w-24 sm:h-32 sm:w-32" />

      <Reveal className="relative z-10 mx-auto max-w-lg text-center">
        <CoupleNames as="h1" />
        <p className="mt-6 font-sans text-[0.72rem] tracking-[0.28em] text-rose uppercase">
          {invitation.marriedLine}
        </p>
        <FloralDivider className="mt-6" />
      </Reveal>

      <Reveal className="relative z-10 mx-auto mt-14 max-w-lg text-center" delay={0.08}>
        <div className="rounded-3xl border border-champagne/80 bg-gradient-to-br from-[#fff6e4] via-white to-[#ffe0ec] px-6 py-8 shadow-[0_12px_28px_rgba(194,24,91,0.1)]">
          <p className="font-sans text-[0.72rem] tracking-[0.24em] text-rose uppercase">{invitation.kicker}</p>
          <p className="mt-4 font-serif text-3xl leading-snug text-ink italic sm:text-4xl">{invitation.message}</p>
        </div>
      </Reveal>

      <Reveal className="relative z-10 mx-auto mt-10 max-w-sm" delay={0.05}>
        <div className="rounded-[1.6rem] border-2 border-champagne bg-gradient-to-br from-[#fff6e8] to-blush p-3 shadow-[0_16px_36px_rgba(194,24,91,0.16)]">
          <div className="overflow-hidden rounded-[1.2rem] ring-2 ring-rose/40">
            <Photo src={portrait.image} alt={`${couple.bride.firstName} and ${couple.groom.firstName}`} eager className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
      </Reveal>

      <Reveal className="relative z-10 mx-auto mt-8 max-w-md text-center">
        <p className="font-serif text-xl leading-relaxed text-muted italic">{invitation.note}</p>
      </Reveal>
    </section>
  );
}
