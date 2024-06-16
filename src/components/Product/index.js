import React from "react";
import InfoProduct from "./InfoProduct";
import Categories from "../ProductsCategories/MainProducts/Categories";
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading";
import { isLoadingSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
const Product = () => {
  const isLoading = useSelector(isLoadingSelector);
  if (!isLoading) return <Loading />;
  return (
    <>
      <Header />
      <main className="max-lg:flex-col  flex flex-row justify-center w-[99%] ">
        <InfoProduct />
        <Categories isProductsCategoriesPage={true} />
      </main>
      <Footer />
    </>
  );
};

export default Product;
