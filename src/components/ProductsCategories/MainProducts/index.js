import React from "react";
import Categories from "./Categories";
import Pagination from "../../Pagination";
import ProductsList from "../../Home/Products/ProductsList";
import { productsSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
const MainProducts = () => {
  const itemsPerPage = 6;
  const products = useSelector(productsSelector);
  const renderProductsList = (products, page = "products") => {
    return <ProductsList products={products} page={page} />;
  };

  return (
    <main className="flex max-lg:flex-col-reverse	md:flex-row justify-center ">
      <Helmet>
        <title>Categories page</title>
        <meta
          name="description"
          content="You can choose interesting categories including Facade stucco ,Bosses,Corner elements, Windowsills,Window bar,Main cornice,Columns,Internal,Pictures,Ceiling and wall moldings,Ceiling mirror,Decorative corners,Indirect Light Strips,Cassettes,Consoles,Lamps,Ornaments,Pilaster,Frame Moldings,Rosettes, Supraport"
        />
        <link rel="canonical" href="https://builder-orders.vercel.app/" />
        <meta property="og:title" content="Categories page" />
        <meta
          property="og:description"
          content="You can choose interesting categories including Facade stucco ,Bosses,Corner elements, Windowsills,Window bar,Main cornice,Columns,Internal,Pictures,Ceiling and wall moldings,Ceiling mirror,Decorative corners,Indirect Light Strips,Cassettes,Consoles,Lamps,Ornaments,Pilaster,Frame Moldings,Rosettes, Supraport"
        />
        <meta property="og:url" content="https://builder-orders.vercel.app/" />
        <meta
          property="og:image"
          content="https://builder-orders.vercel.app/logoWeb.png"
        />
        <meta property="og:type" content="website" />
      </Helmet>
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
