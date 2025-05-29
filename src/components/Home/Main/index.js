import Context from "./Context";
import Categories from "../Categories";
import Products from "../Products";
import { Helmet } from "react-helmet-async";
const Main = () => {
  return (
    <main className="flex justify-center items-center flex-col">
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Welcome to our home page!" />
        <link rel="canonical" href="https://builder-orders.vercel.app/" />
        <meta property="og:title" content="Home page" />
        <meta property="og:description" content="Welcome to our home page!" />
        <meta property="og:url" content="https://builder-orders.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Context />
      <Categories />
      <Products />
    </main>
  );
};

export default Main;
