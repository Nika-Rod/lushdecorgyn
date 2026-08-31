import { useScrollCards } from "@/app/hooks/useScrollCards.hook";
import * as S from "./ScrollCards.styles";

export default function ScrollCards() {
  const { sectionRef, cardsRef, dataCards } = useScrollCards();
  return (
    <S.CardsSection ref={sectionRef}>
      <S.StickyContainer>
        <S.CardsContainer>
          {dataCards.map((card, index) => (
            <S.Card
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="card"
            >
              <S.CardContent>
                <S.CardImage src={card.image} alt={card.title} />
                <div className="text-wrapper">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </S.CardContent>
            </S.Card>
          ))}
        </S.CardsContainer>
      </S.StickyContainer>
    </S.CardsSection>
  );
}
