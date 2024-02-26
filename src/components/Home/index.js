import React, { useEffect } from "react";
import Sliders from "./Sliders";
import Main from "./Main";
import Footer from "../Footer";
import Header from "../Header";

import { currentLanguageSelector } from "../../store/selectors";
import { setTranslate } from "../../store/thunk";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(currentLanguageSelector);

  useEffect(() => {
    dispatch(setTranslate(currentLanguage));
  }, [dispatch, currentLanguage]);

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
