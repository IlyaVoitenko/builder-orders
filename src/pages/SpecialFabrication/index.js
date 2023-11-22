import React from "react";
import PhotoGallery from "../../components/PhotoGallery";
import { specialFabrication } from "../../components/PhotoGallery/Gallery/constants";

const SpecialFabrication = () => {
  return (
    <PhotoGallery
      pageName={"specialFabrication"}
      imageList={specialFabrication}
    />
  );
};

export default SpecialFabrication;
