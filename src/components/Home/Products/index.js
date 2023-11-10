import React from "react";
import { translateSelector } from "../../../store/selectors";
import TitleProducts from "./TitleProducts";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";
import ECK01 from "../../../assets/images/ECK-01-300x300.png";
import ECK09 from "../../../assets/images/ECK-09-300x300.png";
import PK35 from "../../../assets/images/PK-35-300x300.png";
import KS40 from "../../../assets/images/KS-40-300x300.png";
import PG35 from "../../../assets/images/PG-35-300x300.png";
import shortid from "shortid";

const categoriesList = [
  {
    id: shortid.generate(),
    src: ECK01,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: shortid.generate(),
    src: ECK09,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: shortid.generate(),
    src: PK35,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: shortid.generate(),
    src: KS40,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
  },
  {
    id: shortid.generate(),
    src: PG35,
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
