import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "react-scroll";

const NavBarStyled = styled.ul.attrs({
  className: "flex justify-around text-white mt-2",
})`
  & {
    li {
      ${tw`mr-6`}
    }
    a {
      ${tw`text-white`}
    }
    p {
      ${tw`text-white`}
    }
  }
`;

const NavBar = () => {
  return (
    <NavBarStyled>
      <li>
        <Link to="carousel" spy={true} smooth={true} duration={500}>
          <p className="text-yellow-golden hover:text-white ">INICIO</p>
        </Link>
      </li>
      <li>
        <Link to="products" spy={true} smooth={true} duration={500}>
          <p className="hover:text-yellow-golden">PRODUCTOS</p>
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <p className="hover:text-yellow-golden">CONTACTO</p>
        </Link>
      </li>
    </NavBarStyled>
  );
};

export default NavBar;
