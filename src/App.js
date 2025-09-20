import { lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";

const Home = lazy(() => import("./pages/HomePage"));
const PhotoGallery = lazy(() => import("./pages/PhotoGalleryPage"));
const ProductsCategories = lazy(() => import("./pages/ProductsCategoriesPage"));
const Product = lazy(() => import("./pages/ProductPage"));
const StuccoWork = lazy(() => import("./pages/StuccoWork"));
const CustomMoulding = lazy(() => import("./pages/CustomMouldingPage"));
const SpecialFabrication = lazy(() => import("./pages/SpecialFabrication"));
const SiteNotice = lazy(() => import("./pages/SiteNoticePage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicyPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/product/:nameProduct" element={<Product />} />
            <Route path="/products-category" element={<ProductsCategories />} />
            <Route path="/stucco-work" element={<StuccoWork />} />
            <Route path="/custom-moulding" element={<CustomMoulding />} />
            <Route
              path="/special-fabrication"
              element={<SpecialFabrication />}
            />
            <Route path="/site-notice" element={<SiteNotice />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
