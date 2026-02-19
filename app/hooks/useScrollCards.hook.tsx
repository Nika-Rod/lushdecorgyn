import { useEffect, useRef } from "react";

type CardData = {
  title: string;
  description: string;
  image: string;
};

export const useScrollCards = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const progressRef = useRef(0);
  const targetRef = useRef(0);

  const SMOOTH = 0.08;

  const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const updateCards = (progress: number) => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const total = cards.length;
    if (!total) return;

    const horizontalSpread = Math.min(window.innerWidth * 0.35, 280);
    const maxLift = 80;
    const baseScale = 0.86;

    cards.forEach((card, i) => {
      const local = clamp(progress * 1.5 - i * 0.15, 0, 1);

      const centerIndex = (total - 1) / 2;
      const centerOffset = i - centerIndex;

      const x = lerp(0, centerOffset * horizontalSpread, local);
      const y = lerp(
        0,
        (-maxLift * Math.abs(centerOffset)) / centerIndex,
        local,
      );

      const rotate = lerp(0, centerOffset * 8, local);
      const scale = lerp(baseScale, 1, local);
      const opacity = lerp(0.55, 1, local);

      card.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`;
      card.style.opacity = `${opacity}`;
      card.style.zIndex = String(Math.round(1000 - Math.abs(centerOffset)));
    });
  };

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);

      targetRef.current = clamp(scrollProgress, 0, 1);
    };

    const step = () => {
      progressRef.current += (targetRef.current - progressRef.current) * SMOOTH;
      updateCards(progressRef.current);

      rafId = requestAnimationFrame(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const dataCards: CardData[] = [
    { title: "Card 1", description: "Description for card 1", image: "/images/card-1.jpg" },
    { title: "Card 2", description: "Description for card 2", image: "/images/card-2.jpg" },
    { title: "Card 3", description: "Description for card 3", image: "/images/card-3.jpg" },
    { title: "Card 4", description: "Description for card 4", image: "/images/card-4.jpg" },
  ];

  return { sectionRef, cardsRef, dataCards };
};
