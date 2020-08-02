import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const SocialMediaStyled = styled.div.attrs({
  className:
    "hidden px-4 py-2 w-32 mb-12 justify-around xs:hidden sm:hidden md:flex lg:flex xl:flex",
})``;

const SocialMedia = () => {
  return (
    <SocialMediaStyled>
      <a
        href="https://www.instagram.com/biscuitsandpiespty/"
        target="blank"
        className="text-yellow-golden"
      >
        <FontAwesomeIcon icon={faInstagram} size={"lg"} />
      </a>
      <a
        href="https://wa.me/50762638028"
        target="blank"
        className="text-yellow-golden"
      >
        <FontAwesomeIcon icon={faWhatsapp} size={"lg"} />
      </a>
    </SocialMediaStyled>
  );
};

export default SocialMedia;
