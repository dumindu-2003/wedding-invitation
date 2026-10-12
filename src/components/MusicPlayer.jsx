import { useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import weddingConfig from "../data/weddingConfig";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const { music } = weddingConfig;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio || unavailable) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      audio.volume = 0.4;
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const label = unavailable
    ? "Music file missing. Add a file in public/audio and update the invitation settings."
    : playing
      ? `Pause ${music.label}`
      : `Play ${music.label}`;

  return (
    <>
      <audio
        ref={audioRef}
        src={music.src}
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onError={() => {
          setPlaying(false);
          setUnavailable(true);
        }}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={label}
        title={label}
        disabled={unavailable}
        className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-floral bg-ivory text-romantic shadow-[0_8px_24px_rgba(168,50,74,0.15)] disabled:opacity-50"
      >
        {playing ? <Pause className="h-4 w-4" strokeWidth={1.5} /> : <Music className="h-4 w-4" strokeWidth={1.5} />}
      </button>
    </>
  );
}
