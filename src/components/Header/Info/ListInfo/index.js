import React from "react";
import {
  translateSelector,
  currentLanguageSelector,
} from "../../../../store/selectors";
import { changeLanguage } from "../../../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListInfo = () => {
  const translate = useSelector(translateSelector);
  const currentLanguage = useSelector(currentLanguageSelector);
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center  justify-center	 w-[27%] max-lg:w-screen lg:w-[50%]">
      <ul className="flex flex-row max-lg:flex-col items-center lg:justify-around  w-full ">
        <li className="max-lg:mt-2">
          <Link to="/">{translate?.header.info.SiteNotice}</Link>
        </li>
        <li>
          <Link to="/">{translate?.header.info.PrivacyPolicy}</Link>
        </li>
        <li>
          <Link to="/products-categories">
            {translate?.header.info.Catalog}
          </Link>
        </li>
        <li
          className={
            currentLanguage === "de"
              ? "text-gray-950 cursor-pointer"
              : "cursor-pointer"
          }
          onClick={() => changeLanguage("de", dispatch)}
        >
          DE
        </li>
        <li
          className={
            currentLanguage === "en"
              ? "text-gray-950 cursor-pointer"
              : "cursor-pointer"
          }
          onClick={() => changeLanguage("en", dispatch)}
        >
          ENG
        </li>
      </ul>
    </nav>
  );
};

export default ListInfo;
