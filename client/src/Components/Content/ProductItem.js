import React from "react";

const ProductItem = ({ img, name, price }) => {
  return (
    <div className="col-span-12 xs:col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 ">
      <img src={img} alt="" className="mb-2" />
      <span className="text-xl ">{name}</span>
      <p className="text-white mt-1">${price}</p>
    </div>
  );
};

export default ProductItem;
