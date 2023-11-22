import React from "react";
import PhotoGallery from "../../components/PhotoGallery";
import { wholesaleRetail } from "../../components/PhotoGallery/Gallery/constants";

const StuccoWork = () => {
  return (
    <div>
      <PhotoGallery pageName={"stuccoWorkPage"} imageList={wholesaleRetail} />
    </div>
  );
};

export default StuccoWork;
