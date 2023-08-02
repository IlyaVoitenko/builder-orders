import React from "react";
import Context from "./Context";
import Categories from "../Categories";
import Products from "../Products";

const Main = () => {
  return (
    <main className="flex justify-center items-center flex-col">
      <Context />
      <Categories />
      <Products />
    </main>
  );
};

export default Main;
