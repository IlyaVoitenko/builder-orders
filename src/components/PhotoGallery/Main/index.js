import React from "react";
import Title from "./Title";
import Gallery from "../Gallery";
import AdditionalСontent from "../AdditionalСontent";
import Content from "../Main/Content";

const Main = ({ pageName, imageList }) => {
  return (
    <main className="flex flex-col  items-center justify-center text-left ">
      <Title pageName={pageName} />
      <Content pageName={pageName} />
      <Gallery imageList={imageList} />
      <AdditionalСontent pageName={pageName} />
    </main>
  );
};

export default Main;
