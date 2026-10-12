import weddingConfig from "../data/weddingConfig";

export default function CoupleNames({ as: Tag = "p", className = "", id }) {
  const { bride, groom } = weddingConfig.couple;

  return (
    <Tag id={id} className={`text-center ${className}`}>
      <span className="block font-script text-[clamp(3rem,12vw,5.6rem)] leading-[1.05] text-romantic">
        {bride.firstName}
      </span>
      <span className="my-1 block font-script text-[clamp(1.8rem,6vw,2.8rem)] leading-none text-rose" aria-hidden="true">
        &
      </span>
      <span className="sr-only"> and </span>
      <span className="block font-script text-[clamp(3rem,12vw,5.6rem)] leading-[1.05] text-romantic">
        {groom.firstName}
      </span>
    </Tag>
  );
}
