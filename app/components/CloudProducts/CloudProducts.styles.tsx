import styled from "styled-components";

export const BackgroundWrapper = styled.section`
  width: 90%; 
  max-width: 1200px; 
  margin: 0 auto; 
  aspect-ratio: 2 / 1; 
  background-image: url("/images/cloud-products-bg.png");
  background-repeat: no-repeat;
  background-size: contain; 
  background-position: center;
  filter: drop-shadow(20px 10px 1px rgba(0, 0, 0, 0.15));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  text-align: center;
  max-width: 80%; 
`;

export const ProductsCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  gap: 20px;
`

export const CardItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
  gap: 10px;
`

export const CardTitle = styled.h3`
  font-size: 20px;
`