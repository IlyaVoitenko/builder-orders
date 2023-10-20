import React from "react";
import { translateSelector } from "../../../store/selectors";
import TitleProducts from "./TitleProducts";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";

import logo from "../../../assets/images/three.jpg";

const categoriesList = [
  {
    id: 1,
    src: logo,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: 2,
    src: logo,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: 3,
    src: logo,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: 4,
    src: logo,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: 5,
    src: logo,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: 6,
    src: logo,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: 7,
    src: logo,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: 8,
    src: logo,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
];

const Products = () => {
  const translate = useSelector(translateSelector);
  return (
    <section className=" flex flex-col  items-center w-full flex-wrap mt-12">
      <TitleProducts translate={translate} />
      <ProductsList products={categoriesList} page={"home"} />
    </section>
  );
};

export default Products;
