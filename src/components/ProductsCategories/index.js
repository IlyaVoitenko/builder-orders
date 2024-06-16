import React from "react";
import MainProducts from "./MainProducts";
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { isLoadingSelector } from "../../store/selectors";

const ProductsCategories = () => {
  const isLoading = useSelector(isLoadingSelector);
  if (!isLoading) return <Loading />;

  return (
    <div className="flex flex-col">
      <Header />
      <MainProducts />
      <Footer />
    </div>
  );
};

export default ProductsCategories;
