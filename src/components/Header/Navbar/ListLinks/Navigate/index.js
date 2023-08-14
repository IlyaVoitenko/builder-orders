import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isShowMenuSelector } from "../../../../../store/selectors";
import { serviceLinks, productsLinks, contactsLinks } from "../helper";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../../../../useWindowDimensions";
import ListInfo from "../../../Info/ListInfo";
import DropMenu from "../DropMenu";

const styleSm = ``;
const styleMd = `max-md:w-full max-md:mt-1`;
const styleLg = `max-lg:z-30 max-lg:w-screen	max:lg:left-0	 max-lg:flex-col  max-lg:mt-5 lg:flex  lg:w-[60%]`;
const styleXl = `xl:flex`;
const styleXxl = `2xl:flex`;

const Navigate = () => {
  const { t } = useTranslation();
  const isShowMenu = useSelector(isShowMenuSelector);
  console.log("isShowMenu :", isShowMenu);
  const width = useWindowDimensions();
  return (
    <ul
      className={`${
        isShowMenu ? "block " : "hidden"
      } flex flex-row items-center bg-white justify-between font-bold  ${styleSm}  ${styleMd} ${styleLg} ${styleXl} ${styleXxl}`}
    >
      <li>
        <nav>
          <Link to="/">{t("header.navigate.home")}</Link>
        </nav>
      </li>
      <li>
        <DropMenu arr={serviceLinks} title={"header.navigate.services"} />
      </li>
      <li>
        <DropMenu arr={productsLinks} title={"header.navigate.products"} />
      </li>
      <li>
        <nav>
          <Link to="/photo-gallery">{t("header.navigate.fotogalery")}</Link>
        </nav>
      </li>
      <li>
        <nav>
          <Link to="/">{t("header.navigate.loginDetails")}</Link>
        </nav>
      </li>
      <li>
        <DropMenu arr={contactsLinks} title={"header.navigate.contact"} />
      </li>
      <li>{width < 1024 ? <ListInfo /> : null}</li>
    </ul>
  );
};

export default Navigate;
