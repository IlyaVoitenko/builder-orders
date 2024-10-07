import React from "react";
import ItemProduct from "../ItemProduct";

const ProductsList = ({ products, page }) => {
  return (
    <nav
      className={`flex  ${
        page === "home"
          ? "justify-between w-[70%] max-sm:w-[90%]  flex-row flex-wrap"
          : "justify-around max-lg:flex-col max-lg:items-center  flex-wrap md:items-start   md:w-full md:flex-row lg:w-[70%] "
      }   mt-5`}
    >
      {products &&
        products.map((item) => <ItemProduct key={item.id} item={item} />)}
    </nav>
  );
};

export default ProductsList;
