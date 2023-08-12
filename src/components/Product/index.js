import React from "react";
import InfoProduct from "./InfoProduct";
import Categories from "../ProductsCategories/MainProducts/Categories";

const Product = () => {
  return (
    <main className="flex flex-row justify-center items-center">
      <InfoProduct />
      <Categories />
    </main>
  );
};

export default Product;
