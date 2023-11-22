import React from "react";
import PhotoGallery from "../../components/PhotoGallery";
import { custom } from "../../components/PhotoGallery/Gallery/constants";

const CustomMouldingPage = () => {
  return <PhotoGallery pageName={"customMouldingPage"} imageList={custom} />;
};

export default CustomMouldingPage;
