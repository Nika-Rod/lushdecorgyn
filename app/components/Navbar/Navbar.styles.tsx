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
    padding: 1.2rem 0;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 100%;
    max-width: 1024px; 
    margin: 0 auto;
    padding: 0 1.5rem; 
  }

  .logo {
    width: 5rem;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 60;
    
    span {
      width: 25px;
      height: 3px;
      background-color: #9c8356;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }

    &.open span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    &.open span:nth-child(2) {
      opacity: 0;
    }
    &.open span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    padding: 1.5rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    gap: 1.5rem;
    align-items: center;
    
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;

    li {
      font-size: 1.1rem;
      cursor: pointer;
      color: #333;
      transition: color 0.2s;

      &:hover {
        color: #9c8356;
      }
    }

    &.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    &.scrolled {
      padding: 0.7rem 0;
    }

    .hamburger {
      display: none;
    }

    ul {
      position: static;
      flex-direction: row;
      width: auto;
      background: transparent;
      box-shadow: none;
      padding: 0;
      opacity: 1;
      visibility: visible;
      transform: none;
      gap: 2rem;

      li {
        font-size: 1.3rem;
      }
    }
  }
`;