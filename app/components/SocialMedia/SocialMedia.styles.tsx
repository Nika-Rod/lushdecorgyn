import styled from "styled-components";

export const SocialMediaContainer = styled.section`
  background-image: url('/images/background-abstract-organic.jpg');
  background-size: contain;
  background-position: center;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem; 
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 380px; 
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 50% 20% / 10% 40%;

  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 24px; 
  
  gap: 1.5rem;
  padding: 3rem 2.5rem;
  align-items: center;
  border: 2px solid #3e293e;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Text = styled.p`
  font-family: 'Nunito', sans-serif; 
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
`;

export const ActionLink = styled.a<{$isWhatsapp?: boolean}>`
  align-self: center;
  background-color: ${({ $isWhatsapp }) => ($isWhatsapp ? "#52aea5" : "#b1739a")};
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border: 2px solid #3e293e;
  box-shadow: rgba(0, 0, 0, 0.15) 4px 8px 15px -5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Neucha', cursive;
  font-size: 1.3rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 8px -2px;
    transform: translate3d(0, 2px, 0);
    filter: brightness(1.05); 
  }
`;