import React from "react";
import styled from "styled-components";
import PhoneAndSocial from "./PhoneAndSocial";
import Logo from "./Logo";
import NavBar from "./NavBar";
const HeaderStyled = styled.div.attrs({
  className: "",
})``;

const Header = () => {
  return (
    <HeaderStyled>
      <PhoneAndSocial />
      <Logo />
      <NavBar />
    </HeaderStyled>
  );
};

export default Header;
