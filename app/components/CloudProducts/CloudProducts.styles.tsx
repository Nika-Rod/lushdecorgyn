import styled from "styled-components";
import { Splide } from "@splidejs/react-splide";

export const SectionContainer = styled.section`
  width: 100%;
  padding: 8rem 1rem;
  background-color: #f8fafc; 
`;

export const CardItem = styled.div`
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

  &:hover {
    transform: translateY(-8px);
    box-shadow: 20px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const ProductImage = styled.img`
  width: 280px; 
  height: 280px;
  object-fit: contain;
  margin-top: -100px; 
  margin-bottom: 1.5rem;
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
  font-family: 'Neucha', cursive; 
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