'use client'

import { useState } from 'react';

export const AccordionProducts = () => {
  const items = [
    { number: 1, title: "Cozinha", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", images: "/images/cozinha-home.png" },
    { number: 2, title: "Penteadeira", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", images: "/images/penteadeira-home.png" },
    { number: 3, title: "Mercado", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", images: "/images/mercadinho-home.png" },
    { number: 4, title: "Kit Mesas", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", images: "/images/mesinha-home.png" },
    { number: 5, title: "Camas", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", images: "/images/logo.jpg" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex p-24">
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative border overflow-hidden transition-all duration-300 flex flex-col items-center ${activeIndex === index ? "w-full h-auto" : "w-[150px] h-auto"
            }`}
        >
          <div
            className={`accordion-text-head cursor-pointer p-4 bg-white flex justify-center items-center ${activeIndex === index ? "active" : ""
              }`}
            onClick={() => toggleAccordion(index)}
          >
            <button className="text-xl uppercase">
              <div className="flex flex-col items-center">
                <span className={`font-bold ${activeIndex === index ? "hidden" : ""}`}>
                  {item.title}
                </span>
              </div>
            </button>
          </div>

          {activeIndex === index && (
            <div
              className={`accordion-container ${activeIndex === index ? "open" : "closed"
                }`}
            >
              <img
                src={item.images}
                alt={`Imagem do ${item.title}`}
                className="w-[40vw] h-auto object-contain items-center"
              />
              <div className="mt-4">
                <span className="text-lg font-semibold">{item.title}</span>
              </div>
              <div className="mt-2">
                <p className="text-content text-sm text-gray-600">
                  {item.label}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
