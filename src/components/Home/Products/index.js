import React from "react";
import { translateSelector } from "../../../store/selectors";
import TitleProducts from "./TitleProducts";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";

import K6 from "../../../assets/images/K-006-300x300.png";
import DS104 from "../../../assets/images/DS-104-2-300x300.png";
import img102 from "../../../assets/images/102-2-300x300 (1).png";
import KO4 from "../../../assets/images/KO-004-300x300.png";
import RG6 from "../../../assets/images/RG006-600x601.png";

import shortid from "shortid";
//ceiling mirror
//Decorative corners
//Ceiling mirror
const categoriesList = [
  {
    id: shortid.generate(),
    src: img102,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
    categorie: "internal",
    subcategorie: "decorativeCorners",
  },
  {
    id: shortid.generate(),
    src: K6,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
    categorie: "internal",
    subcategorie: "cassettes",
  },
  {
    id: shortid.generate(),
    src: DS104,
    title: "EN-123",
    price: "€ 15.00",
    link: "/products-categories",
    categorie: "internal",
    subcategorie: "ceilingmirror",
  },
  {
    id: shortid.generate(),
    src: KO4,
    title: "K-4",
    price: "€ 15.00",
    link: "/products-categories",
    categorie: "internal",
    subcategorie: "consoles",
  },
  {
    id: shortid.generate(),
    src: RG6,
    title: "RG-6",
    price: "€ 15.00",
    link: "/products-categories",
    categorie: "internal",
    subcategorie: "rosettes",
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
