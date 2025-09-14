import { categoriesList } from "./constants.data";
import { translateSelector } from "../../../store/selectors";
import TitleProducts from "./TitleProducts";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";

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
