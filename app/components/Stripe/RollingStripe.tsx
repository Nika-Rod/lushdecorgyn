import * as S from "./RollingStripe.styles";

export const RollingStripe = () => {
  return (
    <S.StripeWrapper>
      <S.StripeClip>
        <S.Stripe>
          <S.Marquee>
            <S.MarqueeContent>
              <span>😊 FEITO COM CARINHO</span>
              <span>👶 AMADO PELAS CRIANÇAS</span>
              <span>🍓 BACKED BY SCIENCE</span>
              <span>😊 FEITO COM CARINHO</span>
              <span>👶 AMADO PELAS CRIANÇAS</span>
              <span>🍓 BACKED BY SCIENCE</span>
            </S.MarqueeContent>
          </S.Marquee>
        </S.Stripe>
      </S.StripeClip>
    </S.StripeWrapper>
  );
};
