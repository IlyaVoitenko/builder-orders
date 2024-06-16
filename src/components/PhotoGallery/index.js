import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Main from "./Main";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { isLoadingSelector } from "../../store/selectors";

const PhotoGallery = ({ pageName, imageList }) => {
  const isLoading = useSelector(isLoadingSelector);
  if (!isLoading) return <Loading />;
  return (
    <div>
      <Header />
      <Main pageName={pageName} imageList={imageList} />
      <Footer />
    </div>
  );
};

export default PhotoGallery;
