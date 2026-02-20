import { SplideSlide } from "@splidejs/react-splide";
import Kitchen from "../../../public/images/children-in-the-kitchen-bg.png";
import DressingTable from "../../../public/images/child-at-the-dressing-table.png";
import Laundry from "../../../public/images/laundry.png";
import "@splidejs/react-splide/css";
import * as S from "./CloudProducts.styles";

export const CloudProducts = () => {
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
            <S.ProductImage src={Kitchen.src} alt="Kit Cozinha" />
            <S.CardTitle>Kit Cozinha</S.CardTitle>
            <S.Description>
              O cantinho perfeito para as brincadeiras de faz de conta. Feito
              com madeira resistente e cantos arredondados.
            </S.Description>
          </S.CardItem>
        </SplideSlide>

        <SplideSlide>
          <S.CardItem>
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
            <S.ProductImage src={Laundry.src} alt="Lavanderia" />
            <S.CardTitle>Kit Lavanderia</S.CardTitle>
            <S.Description>
              Ideal para atividades, desenhos e lanchinhos. Design ergonômico
              pensado no conforto dos pequenos.
            </S.Description>
          </S.CardItem>
        </SplideSlide>
      </S.CustomSplide>
    </S.SectionContainer>
  );
};
