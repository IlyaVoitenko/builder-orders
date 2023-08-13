import React from "react";
import InfoProduct from "./InfoProduct";
import Categories from "../ProductsCategories/MainProducts/Categories";
import Header from "../Header";
import Footer from "../Footer";

const Product = () => {
  return (
    <>
      <Header />
      <main className="max-lg:flex-col  flex flex-row justify-center ">
        <InfoProduct />
        <Categories isProductsCategoriesPage={true} />
      </main>
      <Footer />
    </>
  );
};

export default Product;
