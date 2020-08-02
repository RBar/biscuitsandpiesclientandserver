import React from "react";
import styled from "styled-components";
import PhoneNumber from "./PhoneNumber";
import SocialMedia from "./SocialMedia";
const PhoneAndSocialStyled = styled.div.attrs({
  className: "w-full h-16 flex flex-row justify-between items-start px-8 pt-4",
})``;

const PhoneAndSocial = () => {
  return (
    <PhoneAndSocialStyled>
      <PhoneNumber />
      <SocialMedia />
    </PhoneAndSocialStyled>
  );
};

export default PhoneAndSocial;
