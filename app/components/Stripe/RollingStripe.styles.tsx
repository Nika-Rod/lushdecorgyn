import styled from "styled-components";

export const StripeWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .stripe {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-3deg);
    display: flex;
    align-items: center;
    width: 115vw; 
    left: -7.5vw;
    background: #f2af46;
    padding: 20px 0;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
    border-top: 4px solid #1f2a37;
    border-bottom: 4px solid #1f2a37;
    white-space: nowrap;
  }

  .marquee {
    overflow: hidden;
    width: 100%;
  }

  .marquee__content {
    display: flex;
    gap: 60px;
    width: max-content;
    animation: marquee 30s linear infinite;
  }

  .marquee__content span {
    font-size: 54px;
    font-weight: 900;
    color: #1f2a37;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    margin-top: -40px;
    .stripe {
      padding: 10px 0;
      transform: rotate(-5deg);
    }
    .marquee__content span {
      font-size: 32px;
    }
  }
`;
