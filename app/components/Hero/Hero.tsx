import Image from "next/image";
import ImgBanner from "../../../public/images/girl-background.png";
import * as S from "./Hero.styles";
import { useScrollHero } from "@/app/hooks/useScrollHero.hook";

export const Hero = () => {
  const { progress, heroRef } = useScrollHero();

  const titleOpacity =
    progress < 0.3 ? 1 : progress < 0.5 ? 1 - (progress - 0.3) / 0.2 : 0;

  let subtitleOpacity = 0;
  if (progress > 0.45 && progress < 0.55) {
    subtitleOpacity = (progress - 0.45) / 0.1; 
  } else if (progress >= 0.55 && progress <= 0.7) {
    subtitleOpacity = 1; 
  } else if (progress > 0.7 && progress <= 0.8) {
    subtitleOpacity = 1 - (progress - 0.7) / 0.1; 
  }

  const imageOpacity = progress < 0.8 ? 0 : Math.min((progress - 0.8) / 0.15, 1);

  const wrapperStyles = {
    "--title-opacity": titleOpacity,
    "--subtitle-opacity": subtitleOpacity,
    "--image-opacity": imageOpacity,
  } as React.CSSProperties;

  return (
    <S.HeroContainer id="hero" ref={heroRef}>
      <S.HeroWrapper style={wrapperStyles}>
        <h1 className="fade-item title-fade visible">
          Lushdecor
        </h1>

        <S.Subtitle className="fade-item subtitle-fade visible">
          Encanto e conforto para os pequenos
        </S.Subtitle>

        <Image
          src={ImgBanner}
          alt="Criança brincando com produtos Lushdecor"
          className="fade-item image-fade visible"
        />
        <S.SmokyDetail />
      </S.HeroWrapper>
    </S.HeroContainer>
  );
};