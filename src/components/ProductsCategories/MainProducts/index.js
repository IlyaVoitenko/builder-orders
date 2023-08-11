import React from "react";
import Categories from "./Categories";
import Products from "./Products";

const MainProducts = () => {
  return (
    <main className="flex flex-row justify-center items-center">
      <Categories />
      <Products />
    </main>
  );
};

export default MainProducts;
