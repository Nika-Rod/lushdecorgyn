import BedImg from "../../../public/images/bed.webp";
import TableImg from "../../../public/images/childrens-table.jpg";
import DressingTableImg from "../../../public/images/dressing-table.jpg";
import FactoryImg from "../../../public/images/factory.jpg";
import * as S from "./AboutUs.styles";

export const AboutUs = () => {
  return (
    <S.AboutUsContainer>
      <S.AboutUsWrapper>
        <S.TextEndImage>
          <S.TitleAndText>
            <S.Title>Criando Cenários para Memórias Felizes</S.Title>
            <S.Text>
              A nossa história nasce no coração de uma família. Somos dois
              irmãos, marceneiros por profissão e pais por amor — com três
              filhos cada, sabemos exatamente que um móvel infantil é muito mais
              do que madeira; é o palco onde a imaginação dos nossos pequenos
              ganha vida.
            </S.Text>
            <S.Text>
              Na nossa oficina, cada Kit Cozinha, Penteadeira ou Cama
              Personalizada é tratado com o rigor de quem está produzindo para o
              próprio filho. Unimos o cuidado artesanal com um olhar criterioso
              em cada detalhe, garantindo peças seguras, resistentes e com
              acabamento impecável.
            </S.Text>
            <S.Text>
              Embora tenhamos itens a pronta entrega, nossa especialidade é dar
              cor aos seus sonhos através de encomendas personalizadas. Aqui,
              você escolhe as cores e os detalhes para que cada peça seja única,
              assim como a infância deve ser.
            </S.Text>
          </S.TitleAndText>

          <S.ImageGrid>
            <div className="column">
              <S.ImageWrapper $shape="type1">
                <img src={FactoryImg.src} alt="Oficina Infantil" />
              </S.ImageWrapper>
              <S.ImageWrapper $shape="type2">
                <img src={TableImg.src} alt="Conjunto de Mesa Infantil" />
              </S.ImageWrapper>
            </div>
            <div className="column">
              <S.ImageWrapper $shape="type3">
                <img src={DressingTableImg.src} alt="Penteadeira" />
              </S.ImageWrapper>
              <S.ImageWrapper $shape="type1">
                <img src={BedImg.src} alt="Cama Infantil Personalizada" />
              </S.ImageWrapper>
            </div>
          </S.ImageGrid>
        </S.TextEndImage>
      </S.AboutUsWrapper>
    </S.AboutUsContainer>
  );
};
