import Context from "./Context";
import Categories from "../Categories";
import Products from "../Products";
import { Helmet } from "react-helmet-async";
const Main = () => {
  return (
    <main className="flex justify-center items-center flex-col">
      <Helmet>
        <title>Stuckwerkstatt Voitenko | Home page</title>
        <meta
          name="description"
          content="Welcome to Stuckwerkstatt Voitenko website"
        />
        <link rel="canonical" href="https://builder-orders.vercel.app/" />
        <meta property="og:title" content="Home page" />
        <meta
          property="og:description"
          content="Welcome to Stuckwerkstatt Voitenko website"
        />
        <meta property="og:url" content="https://builder-orders.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://builder-orders.vercel.app/logoWeb.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Stuckwerkstatt Voitenko | Home page"
        />
        <meta
          name="twitter:description"
          content="Welcome to Stuckwerkstatt Voitenko website"
        />
        <meta
          name="twitter:image"
          content="https://builder-orders.vercel.app/logoWeb.png"
        />
      </Helmet>
      <Context />
      <Categories />
      <Products />
    </main>
  );
};

export default Main;
