import React from "react";
import Title from "./Title";
import Main from "./Main";

const Footer = ({ isHomePage = false }) => {
  return (
    <footer
      className={`flex flex-col ${
        isHomePage ? "mt-[10%]" : "mt-[2%]"
      }  pb-[1%] bg-blue-500`}
    >
      <Title />
      <Main />
    </footer>
  );
};

export default Footer;
