import { translateSelector } from "../../../store/selectors";
import TitleProducts from "./";
import ProductsList from "../Products/ProductsList";
import { useSelector } from "react-redux";

import shortid from "shortid";
export const categoriesList = [
  {
    id: shortid.generate(),
    // src: img102,
    title: "EN-123",
    price: "€ 0.00",
    link: "/products-category",
    category: "internal",
    subcategory: "decorativeCorners",
  },
  {
    id: shortid.generate(),
    // src: K6,
    title: "EN-123",
    price: "€ 0.00",
    link: "/products-category",
    category: "internal",
    subcategory: "cassettes",
  },
  {
    id: shortid.generate(),
    // src: DS104,
    title: "EN-123",
    price: "€ 0.00",
    link: "/products-category",
    category: "internal",
    subcategory: "ceilingMirror",
  },

  {
    id: shortid.generate(),
    // src: RG6,
    title: "RG-6",
    price: "€ 260.00",
    link: "/products-category",
    category: "internal",
    subcategory: "rosettes",
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
