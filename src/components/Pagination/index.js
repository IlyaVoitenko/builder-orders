import React from "react";
import usePagination from "../usePagination";
import { useSelector } from "react-redux";
import { productsSelector } from "../../store/selectors";
import ItemProduct from "../Home/Products/ItemProduct";
import PaginationDots from "./PaginationDots";

const Pagination = ({ page = "product" }) => {
  const products = useSelector(productsSelector);
  const productsPagination = [...products]; // Ваш массив products для отображения
  const itemsPerPage = 8; // Количество элементов на одной странице

  const { currentPage, totalPages, handlePageChange, getCurrentPageItems } =
    usePagination(itemsPerPage, productsPagination);

  return (
    <div className="flex flex-col  justify-center items-center">
      <nav
        className={`flex  ${
          page === "home"
            ? "justify-between w-[70%] max-sm:w-[90%]  flex-row flex-wrap"
            : "justify-around max-lg:flex-col max-lg:items-center  flex-wrap md:items-start  h-[90%] md:w-full md:flex-row lg:w-[90%] "
        }   mt-5`}
      >
        {getCurrentPageItems().map((product) => (
          <ItemProduct key={product.id} item={product} />
        ))}
      </nav>
      <PaginationDots
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Pagination;