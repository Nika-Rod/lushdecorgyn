import { useEffect, useRef } from "react";
import Kid1 from "../../public/images/kid-1.jpg";
import Kid2 from "../../public/images/kid-2.jpg";
import Kid3 from "../../public/images/kid-3.jpeg";
import Kid4 from "../../public/images/kid-4.jpg";

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

    const horizontalSpread = Math.min(window.innerWidth * 0.4, 350);
    const maxLift = 120;
    const baseScale = 0.7;

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
      const opacity = i === 0 ? 1 : lerp(0, 1, local);

      card.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`;
      card.style.opacity = `${opacity}`;
      card.style.visibility = i !== 0 && local === 0 ? 'hidden' : 'visible';
      card.style.zIndex = String(Math.round(1000 - i));
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
    {
      title: "Segurança em 1º Lugar",
      description:
        "Projetado por pais que sabem que cantos arredondados e travas seguras são essenciais.",
      image: Kid1.src,
    },
    {
      title: "Cores que Encantam",
      description:
        "Personalizamos cada detalhe para que o quarto seja o lugar favorito da casa.",
      image: Kid2.src,
    },
    {
      title: "Feito para Durar",
      description:
        "Madeira real tratada para aguentar toda a energia e criatividade da infância.",
      image: Kid3.src,
    },
    {
      title: "Brincar de Verdade",
      description:
        "Móveis que estimulam a autonomia e o faz de conta longe das telas.",
      image: Kid4.src,
    },
  ];

  return { sectionRef, cardsRef, dataCards };
};
