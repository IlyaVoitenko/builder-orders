import React from "react";
import Sliders from "./Sliders";
import Context from "./Context";
import Categories from "./Categories";

const Home = () => {
  return (
    <div>
      <Sliders />
      <div className="flex justify-center items-center flex-col">
        <Context />
        <Categories />
      </div>
    </div>
  );
};

export default Home;
