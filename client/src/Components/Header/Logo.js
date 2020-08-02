import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/logo.png";
const LogoStyled = styled.div.attrs({
  className: "flex justify-center mt-6",
})``;

const Logo = () => {
  return (
    <LogoStyled>
      <img src={LogoImg} alt="" />
    </LogoStyled>
  );
};

export default Logo;
