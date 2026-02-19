import { useScrollCards } from "@/app/hooks/useScrollCards.hook";
import * as S from "./ScrollCards.styles";

export default function ScrollCards() {
  const { sectionRef, cardsRef } = useScrollCards();

  return (
    <S.CardsSection ref={sectionRef}>
        <h2>
            Scroll Cards
        </h2>
      <S.StickyContainer>
        <S.CardsContainer>
          {[1, 2, 3, 4].map((num, i) => (
            <S.Card
              key={num}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="card"
            >
              Card {num}
            </S.Card>
          ))}
        </S.CardsContainer>
      </S.StickyContainer>
    </S.CardsSection>
  );
}
