import styled from "styled-components";

export const StripeWrapper = styled.section`
  background-color: #d0f252;
  .hero {
    position: relative;
    height: 300px;
    overflow: hidden;
  }

  .stripe {
    position: absolute;
    top: 50%;
    left: -10%;
    width: 120%;
    background: #ffe55c;
    transform: rotate(-6deg);
    padding: 24px 0;
    z-index: 2;
  }

  .marquee {
    overflow: hidden;
    width: 100%;
  }

  .marquee__content {
    display: flex;
    gap: 48px;
    width: max-content;
    animation: marquee 35s linear infinite;
  }

  .marquee__content span {
    font-size: 76px;
    font-weight: 800;
    color: #1f2a37;
    white-space: nowrap;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;
