import { useEffect, useRef, useState } from "react";

export const useScrollHero = () => {
  const [progress, setProgress] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const total = heroRef.current.offsetHeight - window.innerHeight;
      
      if (total <= 0) {
        setProgress(1);
        ticking = false;
        return;
      }

      const progress = Math.abs(rect.top) / total;
      setProgress(Math.min(Math.max(progress, 0), 1));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    progress,
    heroRef,
  };
};