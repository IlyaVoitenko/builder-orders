import React, { useEffect } from "react";
import Sliders from "./Sliders";
import Main from "./Main";
import Footer from "../Footer";
import Header from "../Header";
import Loading from "../Loading";

import {
  currentLanguageSelector,
  isLoadingSelector,
} from "../../store/selectors";
import { setTranslate } from "../../store/thunk";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(currentLanguageSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(setTranslate(currentLanguage));
  }, [dispatch, currentLanguage]);

  if (!isLoading) return <Loading />;

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
