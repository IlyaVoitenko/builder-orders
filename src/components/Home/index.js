import React from "react";
import Sliders from "./Sliders";
import Context from "./Context";
import Categories from "./Categories";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Sliders />
      <div className="flex justify-center items-center flex-col">
        <Context />
        <Categories />
        <Products />
      </div>
    </div>
  );
};

export default Home;
