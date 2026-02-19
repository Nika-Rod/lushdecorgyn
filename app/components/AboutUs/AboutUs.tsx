
import Image from "next/image";
import ImageDiv from "../../../public/images/cozinha.png";
import * as S from "./AboutUs.styles";

export const AboutUs = () => {
  return (
    <S.AboutUsContainer>
      <S.AboutUsWrapper>
        <S.TextEndImage>
          <div>
            <S.Title>Sobre Nós</S.Title>
            <p>
              Lorem ipsum dolor sit amet. Qui iure galisum qui totam
              necessitatibus in voluptatem consequuntur hic placeat aperiam et
              praesentium quia est reiciendis explicabo. Et voluptas dicta qui
              enim pariatur est ipsum officia ea error soluta non dolorem
              provident. Et fugiat numquam vel asperiores molestias ut neque
              harum et deserunt distinctio rem Quis corrupti non obcaecati odio
              aut delectus asperiores. Sed rerum alias qui deleniti voluptates
              nam architecto aperiam sed praesentium numquam qui voluptatem
              iusto ea sint esse in ducimus sint. Eum laudantium laborum et
              necessitatibus quas non fugiat voluptates est fuga molestiae? Vel
              alias quos ut placeat voluptatum non explicabo dolorem. Et
              perspiciatis esse rem expedita rerum quo galisum debitis sit enim
              iste ad error error aut autem libero ad excepturi soluta. Eum
              dolorem earum et ipsum sunt et tempore dolores a sint magnam quo
              quasi quasi eos molestias velit.
            </p>
          </div>
          <S.ImageWrapper><Image src={ImageDiv} alt="Cozinha" /></S.ImageWrapper>
        </S.TextEndImage>
      </S.AboutUsWrapper>
    </S.AboutUsContainer>
  );
};
