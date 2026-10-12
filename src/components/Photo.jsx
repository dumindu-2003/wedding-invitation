import { useState } from "react";
import weddingConfig from "../data/weddingConfig";

export default function Photo({ src, alt, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  const { bride, groom } = weddingConfig.couple;

  if (failed || !src) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-blush ${className}`} role="img" aria-label={alt}>
        <span className="font-script text-5xl text-romantic">
          {bride.firstName.charAt(0)}
          <span className="text-rose">&</span>
          {groom.firstName.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable="false"
      onError={() => setFailed(true)}
    />
  );
}
