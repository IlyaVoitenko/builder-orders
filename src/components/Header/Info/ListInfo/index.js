import React from "react";
import { useTranslation } from "react-i18next";

const ListInfo = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <nav className="flex items-center  justify-center	 w-[27%] max-lg:w-screen lg:w-[50%]">
      <ul className="flex flex-row max-lg:flex-col items-center lg:justify-around  w-full ">
        <li className="max-lg:mt-2">
          <a href="/">{t("header.info.SiteNotice")}</a>
        </li>
        <li>
          <a href="/">{t("header.info.PrivacyPolicy")}</a>
        </li>
        <li>
          <a href="/">{t("header.info.HowToOrder")}</a>
        </li>
        <li>
          <a href="/">{t("header.info.Catalog")}</a>
        </li>
        <li onClick={() => changeLanguage("de")}>DE</li>
        <li onClick={() => changeLanguage("en")}>ENG</li>
      </ul>
    </nav>
  );
};

export default ListInfo;
