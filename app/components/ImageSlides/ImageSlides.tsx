import { useMemo } from "react";
import * as S from "./ImageSlides.styles";

export const ImageSlides = () => {
  const baseItems = [
    { id: 1, src: "../images/img-cozinha.jpg", w: 260 },
    { id: 2, src: "../images/espaco-kids.jpg", w: 300 },
    { id: 3, src: "../images/laundry.png", w: 220 },
    { id: 4, src: "../images/factory.jpg", w: 280 },
    { id: 5, src: "../images/img-cozinha.jpg", w: 260 },
    { id: 6, src: "../images/espaco-kids.jpg", w: 300 },
    { id: 7, src: "../images/laundry.png", w: 220 },
    { id: 8, src: "../images/factory.jpg", w: 280 },
    { id: 9, src: "../images/img-cozinha.jpg", w: 260 },
    { id: 10, src: "../images/espaco-kids.jpg", w: 300 },
    { id: 11, src: "../images/laundry.png", w: 220 },
    { id: 12, src: "../images/factory.jpg", w: 280 },
  ];

  const SPACING = 260;

  const items = useMemo(() => {
    return baseItems.map((item, index) => ({
      ...item,
      x: index * SPACING + (Math.random() * 80 - 40),
      y: (index % 2 === 0 ? 40 : 0) + (Math.random() * 60 - 30),
      rotate: Math.random() * 10 - 5,
    }));
  }, []);

  const loopItems = useMemo(() => {
    const first = items;
    const second = items.map((item) => ({
      ...item,
      x: item.x + items.length * SPACING,
    }));

    return [...first, ...second];
  }, [items]);

  const totalWidth = items.length * SPACING;

  return (
    <S.Wrapper>
      <S.Track>
        <S.Inner $width={totalWidth}>
          {loopItems.map((item, index) => (
            <S.Card
              key={index}
              style={{
                width: item.w,
                transform: `
                translate(${item.x}px, ${item.y}px)
                rotate(${item.rotate}deg)
              `,
              }}
            >
              <img src={item.src} alt="" />
            </S.Card>
          ))}
        </S.Inner>
      </S.Track>
    </S.Wrapper>
  );
};
