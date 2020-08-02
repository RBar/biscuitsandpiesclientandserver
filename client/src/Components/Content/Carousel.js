import React from "react";
import { Carousel as CarouselAntd } from "antd";
import { Element } from "react-scroll";
import "./carousel.css";
const Carousel = () => {
  return (
    <Element id="carousel" name="carousel">
      <CarouselAntd autoplay>
        <div>
          <img
            src="https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/01/h2-1-rev-img-2.jpg"
            alt=""
            className="img"
          />
        </div>
        <div>
          <img
            src="https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/01/h2-1-rev-img-3.jpg"
            alt=""
            className="img"
          />
        </div>
        <div className="box">
          <img
            src="https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/01/h2-1-rev-img-1.jpg"
            alt=""
            className="img"
          />
          <div className="text">
            <p className="text-6xl text-white">Dulce Rico</p>
          </div>
        </div>
      </CarouselAntd>
    </Element>
  );
};

export default Carousel;
