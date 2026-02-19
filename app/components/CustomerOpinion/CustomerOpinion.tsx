import React from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
    <div style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        O que nossos clientes dizem
      </h2>

      <Splide
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 3,
          gap: "20px", 
          pagination: false,
          arrows: false,
          autoScroll: {
            speed: 1,
            pauseOnHover: true, 
          },
        }}

        extensions={{ AutoScroll }}
      >
        {depoimentos.map((cliente) => (
          <SplideSlide key={cliente.id}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
                height: "100%",
              }}
            >
              <img
                src={cliente.foto}
                alt={`Foto de ${cliente.nome}`}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginBottom: "15px",
                }}
              />
              <p style={{ fontStyle: "italic", color: "#555" }}>
                {cliente.texto}
              </p>
              <h4 style={{ marginTop: "15px", color: "#333" }}>
                {cliente.nome}
              </h4>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
