import Image from "next/image";
import Instagram from "../../../public/images/instagram.png";
import Whatsapp from "../../../public/images/whatsapp.png";
import * as S from "./SocialMedia.styles";

export const SocialMedia = () => {
  return (
    <S.SocialMediaContainer>
      <S.SocialMediaWrapper>
        <S.Card data-aos="fade-up">
          <Image
            src={Whatsapp}
            alt="Ilustração lúdica do ícone do WhatsApp"
            width={180}
            height={180}
          />
          <S.Text>
            Fale com a gente direto pelo WhatsApp! Tire suas dúvidas rapidamente
            com nossa equipe.
          </S.Text>
          <S.ActionLink
            href="https://w.app/lushdecor"
            target="_blank"
            $isWhatsapp={true}
          >
            Chamar no Whatsapp
          </S.ActionLink>
        </S.Card>

        <S.Card data-aos="fade-down">
          <Image
            src={Instagram}
            alt="Ilustração lúdica do logotipo do Instagram"
            width={180}
            height={180}
          />
          <S.Text>
            Acompanhe nossas novidades, lançamentos e o dia a dia da nossa loja
            no Instagram!
          </S.Text>
          <S.ActionLink
            href="https://www.instagram.com/lushdecor.gyn/"
            target="_blank"
            $isWhatsapp={false}
          >
            Ver Instagram
          </S.ActionLink>
        </S.Card>
      </S.SocialMediaWrapper>
      <S.Attribution>
        <a href="https://br.freepik.com/vetores-gratis/tema-de-formas-organicas-abstratas-para-fundo_6873466.htm#fromView=image_search&page=1&position=2&uuid=a9e35874-597a-4e22-a98d-75c1d62cf807&query=Childhood+doodles">
          Imagem de freepik
        </a>
      </S.Attribution>
    </S.SocialMediaContainer>
  );
};

//  Mom stickers created by DinosoftLabs - Flaticon
//  Whatsapp stickers created by Stickers - Flaticon
//  Instagram stickers created by Stickers - Flaticon
{/* <a href="https://www.flaticon.com/free-stickers/cute" title="cute stickers">Cute stickers created by Reem Alnounou - Flaticon</a> */}