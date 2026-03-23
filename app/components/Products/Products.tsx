import { SplideSlide } from "@splidejs/react-splide";
import Kitchen from "../../../public/images/children-in-the-kitchen-bg.png";
import DressingTable from "../../../public/images/child-at-the-dressing-table.png";
import Laundry from "../../../public/images/laundry.png";
import DressingTableSticker from "../../../public/images/dressing-table.png";
import PepperAndSalt from "../../../public/images/pepper-and-salt.png";
import PlantPot from "../../../public/images/plant-pot.png";
import "@splidejs/react-splide/css";
import * as S from "./Products.styles";

export const Products = () => {
  return (
    <S.SectionContainer
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <S.CustomSplide
        options={{
          type: "slide",
          perPage: 3,
          gap: "2rem",
          arrows: false,
          pagination: false,
          drag: false,
          breakpoints: {
            1024: {
              perPage: 2,
              drag: true,
              pagination: true,
            },
            768: {
              perPage: 1,
              gap: "1rem",
              drag: true,
              pagination: true,
              arrows: false,
            },
          },
        }}
      >
        <SplideSlide>
          <S.CardItem>
            <S.Sticker
              src={PepperAndSalt.src}
              $position="bottom-left"
              $size={100}
            />
            <S.ProductImage
              src={Kitchen.src}
              alt="Kit Cozinha"
              $isKitchen={true}
            />
            <S.CardTitle>Kit Cozinha</S.CardTitle>
            <S.Description>
              O cantinho perfeito para as brincadeiras de faz de conta. Feito
              com madeira resistente e cantos arredondados.
            </S.Description>
          </S.CardItem>
        </SplideSlide>

        <SplideSlide>
          <S.CardItem>
            <S.Sticker
              src={DressingTableSticker.src}
              $position="bottom-right"
            />
            <S.ProductImage src={DressingTable.src} alt="Penteadeira" />
            <S.CardTitle>Penteadeira</S.CardTitle>
            <S.Description>
              Charme e delicadeza para o quarto. Acompanha banquinho estofado e
              espelho inquebrável para segurança.
            </S.Description>
          </S.CardItem>
        </SplideSlide>

        <SplideSlide>
          <S.CardItem>
            <S.Sticker src={PlantPot.src} $position="top-left" $size={105} />
            <S.ProductImage src={Laundry.src} alt="Lavanderia" />
            <S.CardTitle>Kit Lavanderia</S.CardTitle>
            <S.Description>
              Ideal para atividades, desenhos e lanchinhos. Design ergonômico
              pensado no conforto dos pequenos.
            </S.Description>
          </S.CardItem>
        </SplideSlide>
      </S.CustomSplide>
      <S.CTAWrapper data-aos="fade-up">
        <S.CTAText>
          Móveis que transformam o brincar em memórias mágicas.
        </S.CTAText>
        <S.CTAButton href="https://wa.me/seu-numero" target="_blank">
          Quero encantar meu pequeno
        </S.CTAButton>
      </S.CTAWrapper>
    </S.SectionContainer>
  );
};
