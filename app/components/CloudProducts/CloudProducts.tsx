import * as S from "./CloudProducts.styles";

export const CloudProducts = () => {
  return (
    <S.BackgroundWrapper
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <S.ContentWrapper>
        <h2>Nossos Principais Produtos</h2>

        <S.ProductsCards>
          <S.CardItems>
            <S.CardTitle>Kit Cozinha</S.CardTitle>
            <span>
              Lorem ipsum dolor sit amet. Ut perferendis esse aut molestiae
              voluptate et optio nesciunt sed laudantium sapiente quo incidunt
              perferendis quo incidunt quia ut laudantium minima.{" "}
            </span>
          </S.CardItems>
          <S.CardItems>
            <S.CardTitle>Penteadeira</S.CardTitle>
            <span>
              Lorem ipsum dolor sit amet. Ut perferendis esse aut molestiae
              voluptate et optio nesciunt sed laudantium sapiente quo incidunt
              perferendis quo incidunt quia ut laudantium minima.{" "}
            </span>
          </S.CardItems>
          <S.CardItems>
            <S.CardTitle>Kit Mesinha</S.CardTitle>
            <span>
              Lorem ipsum dolor sit amet. Ut perferendis esse aut molestiae
              voluptate et optio nesciunt sed laudantium sapiente quo incidunt
              perferendis quo incidunt quia ut laudantium minima.{" "}
            </span>
          </S.CardItems>
        </S.ProductsCards>
      </S.ContentWrapper>
    </S.BackgroundWrapper>
  );
};
