import React from "react";
import Sliders from "./Sliders";
import Main from "./Main";
import Footer from "../Footer";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Sliders />
      <Main />
      <Footer isHomePage={true} />
    </div>
  );
};

export default Home;
