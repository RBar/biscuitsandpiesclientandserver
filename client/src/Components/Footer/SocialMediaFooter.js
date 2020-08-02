import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const SocialMediaStyled = styled.div.attrs({
  className:
    "flex px-4 py-2 w-full justify-center xs:flex sm:flex md:hidden lg:hidden xl:hidden mb-12",
})`
  & {
    div {
      ${tw`px-2`}
    }
  }
`;

const SocialMediaFooter = () => {
  return (
    <SocialMediaStyled>
      <div>
        <a
          href="https://www.instagram.com/biscuitsandpiespty/"
          target="blank"
          className="text-yellow-golden"
        >
          <FontAwesomeIcon icon={faInstagram} size={"lg"} />
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/50762638028"
          target="blank"
          className="text-yellow-golden"
        >
          <FontAwesomeIcon icon={faWhatsapp} size={"lg"} />
        </a>
      </div>
    </SocialMediaStyled>
  );
};

export default SocialMediaFooter;
