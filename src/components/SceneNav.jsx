import { useEffect, useState } from "react";

const sections = [
  { id: "invitation", label: "Invitation" },
  { id: "story", label: "Our Story" },
  { id: "details", label: "Details" },
  { id: "countdown", label: "Countdown" },
  { id: "gallery", label: "Gallery" },
  { id: "schedule", label: "Schedule" },
  { id: "venue", label: "Venue" },
  { id: "wishes", label: "Best Wishes" },
  { id: "farewell", label: "Thank you" },
];

export default function SceneNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const nodes = sections.map((section) => document.getElementById(section.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.2, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Invitation sections" className="fixed top-1/2 left-5 z-40 hidden -translate-y-1/2 xl:block">
      <ol className="flex flex-col gap-3">
        {sections.map((section) => {
          const selected = active === section.id;
          return (
            <li key={section.id}>
              <a href={`#${section.id}`} aria-label={section.label} aria-current={selected ? "true" : undefined} className="group flex items-center gap-3">
                <span className={`block h-1.5 w-1.5 rounded-full ${selected ? "bg-romantic" : "bg-floral group-hover:bg-rose"}`} />
                <span className="sr-only">{section.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
