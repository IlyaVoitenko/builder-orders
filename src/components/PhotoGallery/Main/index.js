import Title from "./Title";
import Gallery from "../Gallery";
import AdditionalСontent from "../AdditionalСontent";
import Content from "../Main/Content";
import { Helmet } from "react-helmet-async"; // Ensure you have react-helmet-async installed
import { useSelector } from "react-redux";
import { translateSelector } from "../../../store/selectors"; // Adjust the import path as necessary
import { useLocation } from "react-router-dom";
const Main = ({ pageName, imageList }) => {
  const translate = useSelector(translateSelector);
  const { pathname } = useLocation();
  return (
    <main className="flex flex-col  items-center justify-center text-left ">
      <Helmet>
        <title>
          Stuckwerkstatt Voitenko | {translate?.photoGallery[pageName].title}
        </title>
        <meta
          name="description"
          content={translate.photoGallery[pageName].context[0][`p-${0}`]}
        />
        <link
          rel="canonical"
          href={`https://builder-orders.vercel.app${pathname}`}
        />
        <meta
          property="og:title"
          content={`Stuckwerkstatt Voitenko | ${translate?.photoGallery[pageName].title}`}
        />
        <meta
          property="og:description"
          content={translate.photoGallery[pageName].context[0][`p-${0}`]}
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
          content={`Stuckwerkstatt Voitenko | ${translate?.photoGallery[pageName].title}`}
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
      <Title pageName={pageName} />
      <Content pageName={pageName} />
      <Gallery imageList={imageList} />
      <AdditionalСontent pageName={pageName} />
    </main>
  );
};

export default Main;
