import styled from "styled-components";
import { Splide } from "@splidejs/react-splide";

export const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 1rem;
  background-image: url("/images/hand-drawn.jpg");
  background-size: contain;
`;

export const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 2px solid #1a1a1a;
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  padding: 2rem;
  padding-top: 0;
  margin-top: 80px;
  box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.03);
  height: 100%;
  transition: all 0.3s ease-in-out;
  justify-content: space-between;
  padding-bottom: 3rem;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 20px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const ProductImage = styled.img<{ $isKitchen?: boolean }>`
  width: ${({ $isKitchen }) => ($isKitchen ? "470px" : "280px")};
  height: ${({ $isKitchen }) => ($isKitchen ? "470px" : "280px")};
  object-fit: contain;
  margin-top: ${({ $isKitchen }) => ($isKitchen ? "-200px" : "-100px")};
  margin-bottom: ${({ $isKitchen }) => ($isKitchen ? "-66px" : "1.5rem")};
  filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;

  ${CardItem}:hover & {
    transform: scale(1.1) rotate(2deg);
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
    margin-top: -80px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  color: #3e293e;
  margin-bottom: 1rem;
  font-family: "Neucha", cursive;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.6;
  text-align: center;
  max-width: 280px;
`;

export const CustomSplide = styled(Splide)`
  .splide__track {
    overflow: visible;
  }

  .splide__list {
    display: flex;
    align-items: stretch;
  }
`;

const stickerPositions = {
  "top-left": `
    top: 60px;
    left: 15px;
    transform: rotate(-15deg);
  `,
  "top-right": `
    top: 80px;
    right: 15px;
    transform: rotate(15deg);
  `,
  "bottom-left": `
    bottom: 20px;
    left: 20px;
    transform: rotate(-10deg);
  `,
  "bottom-right": `
    bottom: 20px;
    right: 20px;
    transform: rotate(12deg);
  `,
};

export const Sticker = styled.img<{
  $position?: keyof typeof stickerPositions;
  $size?: number;
}>`
  position: absolute;
  width: ${({ $size }) => ($size ? `${$size}px` : "85px")};
  height: auto;
  z-index: 10;
  pointer-events: none;
  filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.1));
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${CardItem}:hover & {
    transform: scale(1.2)
      ${({ $position }) =>
        $position?.includes("left") ? "rotate(-20deg)" : "rotate(20deg)"};
  }

  ${({ $position }) => stickerPositions[$position || "top-left"]}

  @media (max-width: 768px) {
    width: 50px;
  }
`;

export const CTAWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const CTAText = styled.p`
  font-family: "Neucha", cursive;
  font-size: 1.8rem;
  color: #9c8356;
  text-align: center;
  max-width: 600px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0 1rem;
  }
`;

export const CTAButton = styled.a`
  text-decoration: none;
  background-color: #3e293e;
  color: #fff;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  border: 2px solid #1a1a1a;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(-1deg);
    background-color: #9c8356;
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`;
