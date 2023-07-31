import React from "react";
import Sliders from "./Sliders";
import Context from "./Context";
import Categories from "./Categories";
import Products from "./Products";
import Footer from "../Footer";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Sliders />
      <div className="flex justify-center items-center flex-col">
        <Context />
        <Categories />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
