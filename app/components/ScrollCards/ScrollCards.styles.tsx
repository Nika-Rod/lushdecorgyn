import styled from "styled-components";

export const CardsSection = styled.section`
  position: relative;
  width: 100%;
  height: 350vh;
  background-color: #f89071;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start; 
  justify-content: center;
  padding-top: 120px; 
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
  width: 340px;
  height: 460px;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px 40px 15px 35px / 35px 15px 40px 12px;
  border: 2px solid #1a1a1a;
  box-shadow: 15px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  will-change: transform, opacity;

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #eee;
`;

export const CardContent = styled.div`
  text-align: left;

  h4 {
    font-family: "Neucha", cursive;
    font-size: 1.8rem;
    color: #3e293e;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: #4a5568;
    line-height: 1.4;
  }
`;
