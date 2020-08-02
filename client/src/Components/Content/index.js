import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";

const Content = () => {
  return (
    <div className="">
      <Carousel />
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default Content;
