import React from "react";
import styled from "styled-components";

const PhoneNumberStyled = styled.div.attrs({
  className:
    "text-white bg-yellow-golden px-4 pt-3 font-normal hidden sm:hidden xs:hidden md:block lg:block xl:block ",
})``;
const PhoneNumber = () => {
  return (
    <PhoneNumberStyled>
      <p>LLAMANOS 6263-8028</p>
    </PhoneNumberStyled>
  );
};

export default PhoneNumber;
