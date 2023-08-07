import React from "react";
import { useTranslation } from "react-i18next";

const ListInfo = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <nav className="flex items-center  justify-center	 w-[27%] max-lg:w-screen lg:w-[50%]">
      <ul className="flex flex-row max-lg:flex-col items-center lg:justify-around  w-full ">
        <li className="max-lg:mt-2">
          <a href="/">Site Notice</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">How to order</a>
        </li>
        <li>
          <a href="/">Catalog</a>
        </li>
        <li onClick={() => changeLanguage("de")}>DE</li>
        <li onClick={() => changeLanguage("en")}>ENG</li>
      </ul>
    </nav>
  );
};

export default ListInfo;
