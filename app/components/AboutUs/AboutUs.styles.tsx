import styled from "styled-components";

export const AboutUsContainer = styled.section`
  background-color: #c3da95;
  position: relative;
  z-index: 1;
  margin-top: -2px;
  padding-top: 120px;
`;

export const AboutUsWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  gap: 25px;
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  font-size: 55px;
  font-weight: 700;
  text-align: center;
  line-height: 1;
`;

export const Text = styled.p`
  text-align: center;
`;

export const TitleAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TextEndImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  width: auto;
  height: auto;
  padding: 0 50px;
  align-items: center;
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
  transition: transform 0.3s ease;

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
  }

  &:hover {
    transform: scale(1.02) rotate(1deg);
    z-index: 2;
  }
`;
