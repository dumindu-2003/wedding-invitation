import weddingConfig from "../data/weddingConfig";
import CoupleNames from "./CoupleNames";
import FloatingPetals from "./FloatingPetals";
import { FloralCorners, FloralDivider, SmallBouquet } from "./Florals";
import Reveal from "./Reveal";

export default function FinalScene() {
  const { invitation, dateLine } = weddingConfig;

  return (
    <section id="farewell" className="wash-rose relative overflow-hidden px-5 py-20 pb-28 text-center text-ink sm:px-8">
      <FloralCorners size="h-24 w-24" />
      <FloatingPetals />
      <div className="gold-frame relative z-10 mx-auto max-w-lg bg-ivory/85 px-5 py-12">
        <Reveal>
          <SmallBouquet className="mx-auto h-16 w-40 text-floral" />
          <CoupleNames as="p" className="mt-4" />
          <FloralDivider className="mt-5" />
          <p className="mt-6 font-serif text-2xl text-ink italic">{invitation.closing}</p>
          <p className="mt-6 font-sans text-[0.72rem] tracking-[0.22em] text-rose uppercase">{dateLine}</p>
          <p className="mt-6 font-script text-3xl text-romantic">{invitation.thankYou}</p>
        </Reveal>
      </div>
    </section>
  );
}
