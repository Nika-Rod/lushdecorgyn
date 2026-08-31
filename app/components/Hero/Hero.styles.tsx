import styled from "styled-components";

export const HeroContainer = styled.main`
  position: relative;
  height: auto;
  min-height: 100vh;

  @media (min-width: 768px) {
    height: 450vh;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 1rem;
  min-height: 110vh;

  h1 {
    font-size: 4rem; 
    font-weight: 900;
    color: #9c8356;
    text-align: center;
  }

  img {
    width: 100% !important;
    max-width: 21.875rem;
    height: auto;
  }

  .fade-item {
    opacity: 1;
  }

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    height: 100vh;
    display: grid;
    place-items: center;
    align-content: center;
    padding: 0;
    margin: 0 auto;
    max-width: 768px;

    h1 {
      font-size: 8rem;
    }

    img {
      width: 31.25rem !important;
    }

    .fade-item {
      grid-area: 1 / 1;
      will-change: opacity;
      transition: opacity 0.1s ease-out; 
    }

    .title-fade {
      opacity: var(--title-opacity);
    }
    
    .subtitle-fade {
      opacity: var(--subtitle-opacity);
    }

    .image-fade {
      opacity: var(--image-opacity);
    }
  }

  @media (min-width: 1024px) {
    max-width: 1024px;

    h1 {
      font-size: 12rem;
    }
  }
`;

export const Subtitle = styled.p`
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
  z-index: 20;
  pointer-events: none;
`;
