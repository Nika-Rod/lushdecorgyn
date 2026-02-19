import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import * as S from "./Hero.styles";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 400], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);
  const imageY = useTransform(scrollY, [0, 500], [0, -150]);
  const imageOpacity = useTransform(scrollY, [100, 400], [0, 1]);
  const imageScale = useTransform(scrollY, [100, 500], [0.8, 1]);

  return (
    <S.HeroWrapper
      ref={containerRef}
      id="hero"
      className="bg-banner min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full container mx-auto flex flex-col items-center justify-center h-full">
        <motion.h1
          style={{ y: textY, opacity: textOpacity }}
          className="text-[12rem] font-black text-[#9C8356] leading-none absolute z-0 select-none tracking-tighter text-center w-full"
        >
          Lushdecor
        </motion.h1>

        <motion.div
          style={{
            y: imageY,
            opacity: imageOpacity,
            scale: imageScale,
          }}
          className="z-10 relative pt-32"
        >
          <img
            src="images/img-banner.png"
            alt="Criança brincando"
            className="max-w-screen-lg object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
    </S.HeroWrapper>
  );
};
