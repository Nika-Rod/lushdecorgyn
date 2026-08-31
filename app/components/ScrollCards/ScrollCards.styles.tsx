import styled from "styled-components";

export const StickyContainer = styled.div`
  position: static;
  top: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0;
  overflow: visible;
`;

export const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 600px;
  display: block;
`;

export const Card = styled.div`
  position: static;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 320px;
  height: auto;
  transform: none !important;
  opacity: 1 !important;
  visibility: visible !important;
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

export const CardsSection = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  background-color: #f89071;
  padding: 4rem 1rem;

  @media (min-width: 768px) {
    height: 400vh;

    ${StickyContainer} {
      position: sticky;
      top: 0;
      width: 100%;
      height: 100vh;
      padding-top: 25vh;
      overflow: hidden;
    }

    ${Card} {
      position: absolute;
      width: 340px;
      height: 460px;
      transform: translate(-50%, -50%);
      overflow: hidden;
    }

    ${CardImage} {
      }
  }
`;
