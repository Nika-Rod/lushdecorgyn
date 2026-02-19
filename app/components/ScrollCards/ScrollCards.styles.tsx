import styled from "styled-components";

export const CardsSection = styled.section`
  position: relative;
  width: 100%;
  height: 300vh; 
  background-color: #f89071;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px; 
  height: 520px; 
  display: block;
`;

export const Card = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 320px; 
  height: 420px;
  transform: translate(-50%, -50%); 
  background: white;
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
  will-change: transform, opacity;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;
