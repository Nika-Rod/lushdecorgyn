import styled, { keyframes } from "styled-components";

const AnimationStripe = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export const StripeClip = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 15rem; 
  overflow: hidden;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    height: 35rem; 
  }
`;

export const Stripe = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 125vw; */
  display: flex;
  align-items: center;
  transform: translate(-50%, -50%) rotate(-3deg);
  background: #f2af46;
  padding: 0.625rem 0;
  box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.15);
  border-top: 0.25rem solid #1f2a37;
  border-bottom: 0.25rem solid #1f2a37;
`;

export const Marquee = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const MarqueeContent = styled.div`
  display: flex;
  gap: 3.75rem;
  width: max-content;
  animation: ${AnimationStripe} 30s linear infinite;

  span {
    font-size: 2rem;
    font-weight: 900;
    color: #1f2a37;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
`;

export const StripeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  z-index: 10;
  pointer-events: none; 

  @media (min-width: 768px) {
    margin-top: -2.5rem;
    
    ${Stripe} {
      padding: 1.25rem 0;
      transform: translate(-50%, -50%) rotate(-3deg);
      width: 130vw; 
    }
    
    ${MarqueeContent} span {
      font-size: 3.375rem;
    }
  }
`;