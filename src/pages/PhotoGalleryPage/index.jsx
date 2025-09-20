import React from "react";
import PhotoGallery from "../../components/InfoContentAndGallery";
import { imagesPhotoGallery } from "../../components/InfoContentAndGallery/Gallery/constants";

const PhotoGalleryPage = () => {
  return (
    <PhotoGallery
      pageName={"photoGalleryPage"}
      imageList={imagesPhotoGallery}
    />
  );
};

export default PhotoGalleryPage;
