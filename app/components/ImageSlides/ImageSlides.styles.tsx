import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 90px 0;
  background: linear-gradient(180deg, #bfe3f6 0%, #a9d8ef 100%);
  background-image: url("/images/only-sun.png");
  background-repeat: no-repeat;
  background-size: 12rem;
  background-position:
    5% 70%,
    80% 30%,
    50% 80%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background-image:
      radial-gradient(
        circle at 10% 20%,
        rgba(255, 255, 255, 0.6) 0 3px,
        transparent 4px
      ),
      radial-gradient(
        circle at 60% 30%,
        rgba(255, 255, 255, 0.5) 0 3px,
        transparent 4px
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(255, 255, 255, 0.4) 0 3px,
        transparent 4px
      );

    background-size: 140px 140px;
    opacity: 0.9;
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background:
      radial-gradient(
        circle at 20% 80%,
        rgba(255, 255, 255, 0.3),
        transparent 60%
      ),
      radial-gradient(
        circle at 90% 10%,
        rgba(255, 255, 255, 0.25),
        transparent 60%
      );

    filter: blur(40px);
    opacity: 0.7;
    pointer-events: none;
  }
`;

export const Track = styled.div`
  overflow-x: hidden;
  overflow-y: visible;
  width: 100%;
`;

export const Inner = styled.div<{ $width: number }>`
  position: relative;
  width: ${({ $width }) => $width * 2}px;
  height: 600px;
  padding-top: 60px;
  padding-bottom: 60px;
  will-change: transform;
  pointer-events: none;

  animation: ${({ $width }) => `
    scrollLoop ${$width / 50}s linear infinite
  `};

  @keyframes scrollLoop {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-${({ $width }) => $width}px);
    }
  }
`;

export const Card = styled.div`
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
