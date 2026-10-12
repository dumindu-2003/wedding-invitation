import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function GoldenParticles({ density = 36, tone = "dark", className = "" }) {
  const canvasRef = useRef(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const color = tone === "light" ? "140, 109, 58" : "231, 213, 177";
    const count = density;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.35 + 0.35,
      speed: Math.random() * 0.12 + 0.04,
      alpha: Math.random() * 0.38 + 0.12,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const flicker = reduce ? 1 : 0.62 + Math.sin(time / 800 + particle.phase) * 0.38;
        context.beginPath();
        context.fillStyle = `rgba(${color}, ${particle.alpha * flicker})`;
        context.arc(particle.x * width, particle.y * height, particle.r, 0, Math.PI * 2);
        context.fill();

        if (!reduce) {
          particle.y -= particle.speed * 0.0032;
          particle.x += Math.sin(time / 2600 + particle.phase) * 0.00022;
          if (particle.y < -0.03) particle.y = 1.03;
          if (particle.x < -0.03) particle.x = 1.03;
          if (particle.x > 1.03) particle.x = -0.03;
        }
      });

      if (!reduce) frame = window.requestAnimationFrame(draw);
    };

    resize();
    frame = window.requestAnimationFrame(draw);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [density, reduce, tone]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
