import React from "react";
import MainProducts from "./MainProducts";
import Header from "../Header";
import Footer from "../Footer";

const ProductsCategories = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <MainProducts />
      <Footer />
    </div>
  );
};

export default ProductsCategories;
