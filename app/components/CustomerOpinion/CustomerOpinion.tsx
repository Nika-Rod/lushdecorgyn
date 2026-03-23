import React from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import * as S from "./CustomerOpinion.styles";

const depoimentos = [
  {
    id: 1,
    nome: "Maria Silva",
    texto: "Produto excelente! Chegou antes do prazo e a qualidade é incrível.",
    foto: "https://i.pravatar.cc/150?u=maria",
  },
  {
    id: 2,
    nome: "João Souza",
    texto: "Atendimento nota 10. Recomendo de olhos fechados!",
    foto: "https://i.pravatar.cc/150?u=joao",
  },
  {
    id: 3,
    nome: "Ana Beatriz",
    texto: "Melhor compra que fiz esse ano. O custo-benefício é ótimo.",
    foto: "https://i.pravatar.cc/150?u=ana",
  },
  {
    id: 4,
    nome: "Carlos Eduardo",
    texto: "Muito fácil de usar. Exatamente como descrito no anúncio.",
    foto: "https://i.pravatar.cc/150?u=carlos",
  },
];

export const CustomerOpinion = () => {
  return (
    <div style={{ padding: "40px", backgroundColor: "#f89071" }}>
      <S.SectionTitle>
        Famílias que já encantam seus pequenos
      </S.SectionTitle>

      <Splide
        options={{
          type: "loop",
          perPage: 3,
          gap: "30px",
          padding: "10px",
          pagination: false,
          arrows: false,
          height: "auto", 
          direction: "ltr",
          clones: 2,
          autoScroll: {
            speed: 0.8,
            pauseOnHover: true,
          },
          heightRatio: 0,
          autoHeight: false,
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        extensions={{ AutoScroll }}
        className="custom-splide"
      >
        {depoimentos.map((cliente) => (
          <SplideSlide key={cliente.id}>
            <S.OpinionCard>
              <S.UserPhoto src={cliente.foto} alt={cliente.nome} />
              <S.TestimonyText>{cliente.texto}</S.TestimonyText>
              <h4
                style={{
                  fontWeight: "900",
                  color: "#1f2a37",
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                  letterSpacing: "1px",
                }}
              >
                {cliente.nome}
              </h4>
            </S.OpinionCard>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
