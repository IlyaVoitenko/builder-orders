import React from "react";
import ItemProduct from "../ItemProduct";

const ProductsList = ({ products, page }) => {
  return (
    <nav
      className={`flex  ${
        page === "home" ? "justify-between" : "justify-around"
      }  w-[70%] max-sm:w-[90%] flex-row flex-wrap mt-5`}
    >
      {products.map((item) => (
        <ItemProduct key={item.id} item={item} />
      ))}
    </nav>
  );
};

export default ProductsList;
