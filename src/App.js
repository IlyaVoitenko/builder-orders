import React, { lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";

const Home = lazy(() => import("./pages/HomePage"));
const PhotoGallery = lazy(() => import("./pages/PhotoGalleryPage"));
const ProductsCategories = lazy(() => import("./pages/ProductsCategoriesPage"));
const Product = lazy(() => import("./pages/ProductPage"));
const WholesaleAndRetail = lazy(() => import("./pages/WholesaleAndRetailPage"));
const StuccoWork = lazy(() => import("./pages/StuccoWork"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/product" element={<Product />} />
            <Route
              path="/products-categories"
              element={<ProductsCategories />}
            />
            <Route path="/wholesale-retail" element={<WholesaleAndRetail />} />
            <Route path="/stucco-work" element={<StuccoWork />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
