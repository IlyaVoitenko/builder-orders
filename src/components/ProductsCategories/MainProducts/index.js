import React from "react";
import Categories from "./Categories";
import Pagination from "../../Pagination";
import ProductsList from "../../Home/Products/ProductsList";
import { productsSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";

const MainProducts = () => {
  const itemsPerPage = 6;
  const products = useSelector(productsSelector);
  const renderProductsList = (products, page = "products") => {
    return <ProductsList products={products} page={page} />;
  };

  return (
    <main className="flex max-lg:flex-col-reverse	md:flex-row justify-center ">
      <Categories />
      <Pagination
        itemsPerPage={itemsPerPage}
        data={products}
        renderItem={renderProductsList}
      />
    </main>
  );
};

export default MainProducts;
