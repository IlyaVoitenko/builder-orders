import React from "react";
import PhotoGallery from "../../components/PhotoGallery";
import { wholesaleRetail } from "../../components/PhotoGallery/Gallery/constants";

const WholesaleAndRetailPage = () => {
  return (
    <PhotoGallery
      pageName={"WholesaleAndRetailPage"}
      imageList={wholesaleRetail}
    />
  );
};

export default WholesaleAndRetailPage;
