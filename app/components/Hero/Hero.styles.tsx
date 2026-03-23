import styled from "styled-components";

export const HeroContainer = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120dvh;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 150vh;
  }
`;

export const HeroWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
`;

export const Subtitle = styled.p`
  margin-top: 2rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #9c8356;
  font-weight: 500;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const SmokyDetail = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8rem;
  // background: linear-gradient(to top, #38bdf8, transparent);
  z-index: 20;
  pointer-events: none;
`;
