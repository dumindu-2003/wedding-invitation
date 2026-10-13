import weddingConfig from "../data/weddingConfig";

export default function CoupleNames({ as: Tag = "p", className = "", id }) {
  const { bride, groom } = weddingConfig.couple;

  return (
    <Tag id={id} className={`text-center ${className}`}>
      <span className="script-title block font-script text-[clamp(2.55rem,10vw,5rem)]">
        {bride.firstName}
      </span>
      <span className="script-title my-1 block font-script text-[clamp(1.8rem,6vw,2.8rem)]" aria-hidden="true">
        &
      </span>
      <span className="sr-only"> and </span>
      <span className="script-title block font-script text-[clamp(2.55rem,10vw,5rem)]">
        {groom.firstName}
      </span>
    </Tag>
  );
}
