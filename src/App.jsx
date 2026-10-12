import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import weddingConfig from "./data/weddingConfig";
import usePrefersReducedMotion from "./hooks/usePrefersReducedMotion";
import { easeLux } from "./utils/motion";
import CoupleGallery from "./components/CoupleGallery";
import FinalScene from "./components/FinalScene";
import MusicPlayer from "./components/MusicPlayer";
import OpeningScene from "./components/OpeningScene";
import OurStory from "./components/OurStory";
import RSVPSection from "./components/RSVPSection";
import SceneNav from "./components/SceneNav";
import VenueSection from "./components/VenueSection";
import WeddingDetails from "./components/WeddingDetails";
import WeddingInvitation from "./components/WeddingInvitation";
import WeddingTimeline from "./components/WeddingTimeline";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [coverVisible, setCoverVisible] = useState(true);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const { bride, groom } = weddingConfig.couple;
    document.title = `${bride.firstName} & ${groom.firstName} — Eternal Moments`;
  }, []);

  useEffect(() => {
    document.body.style.overflow = coverVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [coverVisible]);

  return (
    <div className="min-h-dvh bg-blush text-ink">
      {opened && (
        <>
          <a
            href="#invitation"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:bg-ivory focus:px-4 focus:py-2 focus:text-romantic"
          >
            Skip to invitation
          </a>
          <SceneNav />
          <MusicPlayer />
          <motion.main
            className="mx-auto min-h-dvh w-full max-w-xl bg-ivory sm:my-6 sm:min-h-[calc(100dvh-3rem)] sm:overflow-hidden sm:rounded-[2rem] sm:shadow-[0_24px_70px_rgba(168,50,74,0.08)]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: easeLux }}
          >
            <WeddingInvitation />
            <OurStory />
            <WeddingDetails />
            <CoupleGallery />
            <WeddingTimeline />
            <VenueSection />
            <RSVPSection />
            <FinalScene />
          </motion.main>
        </>
      )}

      {coverVisible && (
        <OpeningScene leaving={opened} onOpen={() => setOpened(true)} onExited={() => setCoverVisible(false)} />
      )}
    </div>
  );
}
