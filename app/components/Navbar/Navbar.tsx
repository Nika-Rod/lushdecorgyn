import { forwardRef, useState } from "react";
import * as S from "./Navbar.styles";

export const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <S.NavBarWrapper ref={ref} id="navbar">
      <nav>
        <img src="images/logo.jpg" alt="Logo" className="logo" />

        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Lista de Links */}
        <ul className={isOpen ? "open" : ""}>
          <li>Quem Somos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </S.NavBarWrapper>
  );
});

Navbar.displayName = "Navbar";
