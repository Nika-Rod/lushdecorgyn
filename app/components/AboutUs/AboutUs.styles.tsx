import styled from "styled-components";

export const AboutUsContainer = styled.section`
  background-color: #d0f252;
  z-index: 1;
`;

export const AboutUsWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  gap: 25px;
  padding: 100px 0;
`;

export const Title = styled.h2`
  font-size: 55px;
  font-weight: 700;
  text-align: center;
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

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 50% 20% / 10% 40%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
