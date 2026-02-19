import { forwardRef } from "react";
import * as S from "./Navbar.styles";

export const Navbar = forwardRef<HTMLElement>((_, ref) => {
  return (
    <S.NavBarWrapper ref={ref} id="navbar" >
      <nav className="container mx-auto flex items-center justify-between">
        <img src="images/logo.jpg" alt="" className="w-20" />

        <ul className="flex gap-6">
          <li>Quem Somos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </S.NavBarWrapper>
  );
});

Navbar.displayName = "Navbar";
