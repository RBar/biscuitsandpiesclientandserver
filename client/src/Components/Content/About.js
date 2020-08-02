import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
const AboutStyled = styled.div.attrs({
  className: "mt-12",
})`
  & {
    span {
      ${tw`font-poiret text-4xl `}
    }
    p {
      ${tw`text-white font-light`}
    }
  }
`;
function About() {
  return (
    <AboutStyled>
      <span>Amor en cada Bocado</span>
      <p>
        Somos Biscuit and Pies, el inicio de un rico emprendimiento, el cual
        busca ofrecerles productos hechos con los mejores ingredientes,
        percibiendo en cada uno de ellos el sabor casero.
      </p>
      <p>
        Nuestra meta que sientas en cada mordisco el amor con el que preparamos
        cada postre.
      </p>
    </AboutStyled>
  );
}

export default About;
