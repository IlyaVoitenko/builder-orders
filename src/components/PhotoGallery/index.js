import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Main from "./Main";

const PhotoGallery = ({ pageName, imageList }) => {
  return (
    <div>
      <Header />
      <Main pageName={pageName} imageList={imageList} />
      <Footer />
    </div>
  );
};

export default PhotoGallery;
