import React from "react";
import PhotoGallery from "../../components/PhotoGallery";
import { imagesPhotoGllery } from "../../components/PhotoGallery/Gallery/constants";

const PhotoGalleryPage = () => {
  return (
    <PhotoGallery pageName={"photoGalleryPage"} imageList={imagesPhotoGllery} />
  );
};

export default PhotoGalleryPage;
