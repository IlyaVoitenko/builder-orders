import React, { useEffect } from "react";
import Sliders from "./Sliders";
import Main from "./Main";
import Footer from "../Footer";
import Header from "../Header";

import { setTranslate } from "../../store/thunk";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTranslate());
  }, [dispatch]);

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
