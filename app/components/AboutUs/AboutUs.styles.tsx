import styled from "styled-components";

export const AboutUsContainer = styled.section`
  background-color: #c3da95;
  position: relative;
  z-index: 1;
  margin-top: -2px;
  padding-top: 5rem; 

  @media (min-width: 768px) {
    padding-top: 120px;
  }
`;

export const AboutUsWrapper = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-bottom: 100px;
  }
`;

export const TextEndImage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem; 
  align-items: center;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
`;

export const TitleAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;

  @media (min-width: 992px) {
    text-align: left;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #1a1a1a;

  @media (min-width: 768px) {
    font-size: 3.438rem;
    margin-bottom: 1.5rem;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  .column {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .column:nth-child(2) {
    padding-top: 30px;
  }
`;

export const ImageWrapper = styled.div<{ $shape: "type1" | "type2" | "type3" }>`
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #1a1a1a;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  border-radius: ${(props) =>
    props.$shape === "type1"
      ? "40px 10px 40px 10px"
      : props.$shape === "type2"
        ? "15px 45px 15px 45px"
        : "30px 30px 5px 30px"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    aspect-ratio: 4/5; 
  }

  &:hover {
    transform: scale(1.02) rotate(1deg);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
    z-index: 2;
  }
`;