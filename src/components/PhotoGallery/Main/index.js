import React from "react";
import Title from "./Title";
import Gallery from "../Gallery";

const Main = ({ pageName, imageList }) => {
  return (
    <main className="flex flex-col  items-center justify-center text-left ">
      <Title pageName={pageName} />
      <Gallery imageList={imageList} />
    </main>
  );
};

export default Main;
