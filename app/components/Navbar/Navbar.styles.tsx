import styled from "styled-components";

export const NavBarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 50;
  transition:
    background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out,
    padding 0.3s ease;
  padding: 1.5rem 0;

  &.scrolled {
    background: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
  }
`;
