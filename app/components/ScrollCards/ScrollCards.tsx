import { useScrollCards } from "@/app/hooks/useScrollCards.hook";
import * as S from "./ScrollCards.styles";

export default function ScrollCards() {
  const { sectionRef, cardsRef, dataCards } = useScrollCards();
  return (
    <S.CardsSection ref={sectionRef}>
      <h2>Scroll Cards</h2>
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
              <div >
                <h4>{card.title}</h4>
                <p>{card.description}</p>
                <img src={card.image} alt={card.title} />
              </div>
            </S.Card>
          ))}
        </S.CardsContainer>
      </S.StickyContainer>
    </S.CardsSection>
  );
}
