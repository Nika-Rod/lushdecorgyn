import * as S from "./RollingStripe.styles";

export const RollingStripe = () => {
  return (
    <S.StripeWrapper>
      <div className="stripe">
        <div className="marquee">
          <div className="marquee__content">
            <span>😊 FEITO COM CARINHO</span>
            <span>👶 AMADO PELAS CRIANÇAS</span>
            <span>🍓 BACKED BY SCIENCE</span>
            <span>😊 FEITO COM CARINHO</span>
            <span>👶 AMADO PELAS CRIANÇAS</span>
            <span>🍓 BACKED BY SCIENCE</span>
          </div>
        </div>
      </div>
    </S.StripeWrapper>
  );
};
