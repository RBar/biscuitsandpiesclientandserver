import React from "react";
import ProductItem from "./ProductItem";
import { Element } from "react-scroll";
const Products = () => {
  return (
    <Element id="products" name="products">
      <div className="grid grid-cols-12 gap-4  text-center mt-12">
        <span className="font-poiret text-4xl col-start-1 text-left col-span-12 font-bold ">
          Productos
        </span>
        <ProductItem
          img={
            "https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/shop-img-22-600x600.jpg"
          }
          name={"Caramel Explosion"}
          price={"11.00"}
        />
        <ProductItem
          img={
            "https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/shop-img-23-600x600.jpg"
          }
          name={"Choco Cake"}
          price={"29.00"}
        />
        <ProductItem
          img={
            "https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/shop-img-24-600x600.jpg"
          }
          name={"Coconut Star"}
          price={"29.00"}
        />
        <ProductItem
          img={
            "https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/shop-img-25-600x600.jpg"
          }
          name={"Mimosa"}
          price={"24.00"}
        />
        <ProductItem
          img={
            "https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/shop-img-26-600x600.jpg"
          }
          name={"Sweet Suprise"}
          price={"17.00"}
        />
        <ProductItem
          img={
            "https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/shop-img-27-600x600.jpg"
          }
          name={"Pink Cake"}
          price={"22.00"}
        />
        <ProductItem
          img={
            "https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/shop-img-28-600x600.jpg"
          }
          name={"Delightful Lemon"}
          price={"16.00"}
        />
        <ProductItem
          img={
            "https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/shop-img-29-600x600.jpg"
          }
          name={"Choco Passion"}
          price={"32.00"}
        />
      </div>
    </Element>
  );
};

export default Products;
