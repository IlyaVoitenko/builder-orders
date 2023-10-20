import React from "react";
import { translateSelector } from "../../../../store/selectors";
import { changeLanguage } from "../../../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

const ListInfo = () => {
  const translate = useSelector(translateSelector);
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center  justify-center	 w-[27%] max-lg:w-screen lg:w-[50%]">
      <ul className="flex flex-row max-lg:flex-col items-center lg:justify-around  w-full ">
        <li className="max-lg:mt-2">
          <a href="/">{translate?.header.info.SiteNotice}</a>
        </li>
        <li>
          <a href="/">{translate?.header.info.PrivacyPolicy}</a>
        </li>
        <li>
          <a href="/">{translate?.header.info.HowToOrder}</a>
        </li>
        <li>
          <a href="/">{translate?.header.info.Catalog}</a>
        </li>
        <li onClick={() => changeLanguage("de", dispatch)}>DE</li>
        <li onClick={() => changeLanguage("en", dispatch)}>ENG</li>
      </ul>
    </nav>
  );
};

export default ListInfo;
