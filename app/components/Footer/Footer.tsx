import Image from "next/image";
import * as S from "./Footer.styles";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterGrid>
          <S.Brand>
            <Image
              src="/images/logo.jpg"
              alt="Lushdecor Logo"
              width={80}
              height={80}
            />

            <S.FooterText>
              <span>© {currentYear} Lushdecor</span>
              <p>Todos os direitos reservados.</p>
            </S.FooterText>
          </S.Brand>

          <S.Content>
            <S.Nav>
              <a href="#">Início</a>
              <a href="#">Sobre</a>
              <a href="#">Ajuda</a>
              <a href="#" className="cta">
                Contato
              </a>
            </S.Nav>

            <S.Divider />

            <S.Social>
              <a href="#">
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={36}
                  height={36}
                />
              </a>

              <a href="#">
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={36}
                  height={36}
                />
              </a>
            </S.Social>
          </S.Content>
        </S.FooterGrid>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};
