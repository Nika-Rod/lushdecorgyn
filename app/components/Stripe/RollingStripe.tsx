import * as S from "./RollingStripe.styles";

export const RollingStripe = () => {
  return (
      <S.StripeWrapper>
        <div className="hero">
          <div className="stripe">
            <div className="marquee">
              <div className="marquee__content">
                <span>👶 LOVED BY KIDS</span>
                <span>😊 MADE BY PARENTS</span>
                <span>🍓 BACKED BY SCIENCE</span>

                <span>👶 LOVED BY KIDS</span>
                <span>😊 MADE BY PARENTS</span>
                <span>🍓 BACKED BY SCIENCE</span>
              </div>
            </div>
          </div>
        </div>
      </S.StripeWrapper>
  );
};
