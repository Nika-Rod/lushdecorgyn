import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 5rem 1rem;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #bfe3f6;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  padding: 2rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  img {
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterText = styled.div`
  font-size: 0.75rem;

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }

  p {
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;

  a {
    text-decoration: none;
    color: #000;
    padding: 0.5rem 0.75rem;
    border-left: 3px solid #bfe3f6;
    transition: all 0.25s ease;
  }

  a:hover {
    border-left-color: #f2bf5e;
    background-color: rgba(191, 227, 246, 0.15);
    border-radius: 0 0.5rem 0.5rem 0;
    color: #f2bf5e;
    scale: 1.05;
  }

  .cta {
    border-left: none;
    background: #bfe3f6;
    color: #fff;
    border-radius: 0.5rem;
    font-weight: bold;
    padding: 0.6rem 1rem;
  }

  .cta:hover {
    background: #f2bf5e;
    color: #fff;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #bfe3f6;
  margin: 1.5rem 0;
  opacity: 0.6;
`;

export const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;

  a {
    display: inline-flex;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  a:hover {
    transform: translateY(-3px) scale(1.05);
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
