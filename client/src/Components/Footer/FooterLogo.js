import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/logo.png";
const LogoStyled = styled.div.attrs({
  className: "grid grid-cols-12 mt-12",
})``;

const FooterLogo = () => {
  return (
    <LogoStyled>
      <div
        className="col-span-6 col-start-4 
        md:mb-12 lg:mb-12 xl:mb-12 xs:col-start-4 sm:col-start-4 md:col-start-5 lg:col-start-6 xl:col-start-6
       xs:col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-2 xl:col-span-2"
      >
        <img src={LogoImg} alt="" />
      </div>
    </LogoStyled>
  );
};

export default FooterLogo;
