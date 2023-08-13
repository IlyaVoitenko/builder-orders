import React from "react";

const ImageProduct = ({ image, nameProduct }) => {
  return <img src={image} alt={nameProduct} className="w-2/6 max-lg:w-full" />;
};

export default ImageProduct;
