import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ImgBanner from "../../../public/images/girl-background.png";
import * as S from "./Hero.styles";

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 400], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const imageY = useTransform(scrollY, [0, 500], [50, -100]);
  const imageOpacity = useTransform(scrollY, [50, 400], [0, 1]);
  const imageScale = useTransform(scrollY, [50, 500], [0.9, 1]);

  return (
    <S.HeroContainer ref={containerRef} id="hero">
      <S.HeroWrapper>
        <motion.h1
          style={{ y: textY, opacity: textOpacity }}
          className="text-6xl md:text-9xl lg:text-[12rem] font-black text-[#9C8356] leading-none absolute z-0 select-none tracking-tighter text-center w-full px-4"
        >
          Lushdecor
        </motion.h1>

        <motion.div
          style={{
            y: imageY,
            opacity: imageOpacity,
            scale: imageScale,
          }}
          className="z-10 relative pt-20 md:pt-32 flex flex-col items-center"
        >
          <Image
            src={ImgBanner}
            alt="Criança brincando com produtos Lushdecor"
            className="max-w-[40vw]  object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          />
          <S.Subtitle>
            Encanto e conforto para os pequenos
          </S.Subtitle>
        </motion.div>
      </S.HeroWrapper>
      <S.SmokyDetail />
    </S.HeroContainer>
  );
};
