import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  isShowMenuSelector,
  translateSelector,
} from "../../../../../store/selectors";
import useWindowDimensions from "../../../../useWindowDimensions";
import ListInfo from "../../../Info/ListInfo";
import DropMenu from "../DropMenu";

const styleSm = ``;
const styleMd = `max-md:w-full max-md:mt-1`;
const styleLg = `max-lg:z-30 max-lg:w-screen	max:lg:left-0	 max-lg:flex-col  max-lg:mt-5 lg:flex  lg:w-[60%]`;
const styleXl = `xl:flex`;
const styleXxl = `2xl:flex`;

const serviceLinks = [
  { value: "ОПТОВАЯ И РОЗНИЧНАЯ", link: "" },
  { value: "ЛЕПНЫЕ РАБОТЫ", link: "" },
  { value: "ИНДИВИДУАЛЬНОЕ ПРОИЗВОДСТВО", link: "" },
  { value: "ФОРМОВОЧНАЯ ТЕХНОЛОГИЯ", link: "" },
];

const productsLinks = [
  { value: "ВСТАВКИ", link: "/products-categories" },
  { value: "ФАСАДНАЯ ЛЕПНИЦА", link: "" },
  { value: "КАТАЛОГ  СКАЧАТЬ", link: "" },
  { value: "КАТАЛОГ FASSANDENSTUCK СКАЧАТЬ", link: "" },
];

const contactsLinks = [
  { value: "НАПРАВЛЕНИЯ", link: "" },
  { value: "ДОСТАВКА ОБРАЗЦА", link: "" },
  { value: "Условия", link: "" },
  { value: "ДОСТАВКА И ОПЛАТА", link: "" },
];

const Navigate = () => {
  const isShowMenu = useSelector(isShowMenuSelector);
  const width = useWindowDimensions();
  const translate = useSelector(translateSelector);
  return (
    <ul
      className={`${
        isShowMenu ? "block " : "hidden"
      } flex flex-row items-center bg-white justify-between font-bold  ${styleSm}  ${styleMd} ${styleLg} ${styleXl} ${styleXxl}`}
    >
      <li>
        <nav>
          <Link to="/">{translate?.header.navigate.home}</Link>
        </nav>
      </li>
      <li>
        <DropMenu
          arr={serviceLinks}
          title={translate?.header.navigate.services}
        />
      </li>
      <li>
        <DropMenu
          arr={productsLinks}
          title={translate?.header.navigate.products}
        />
      </li>
      <li>
        <nav>
          <Link to="/photo-gallery">
            {translate?.header.navigate.fotogalery}
          </Link>
        </nav>
      </li>
      <li>
        <nav>
          <Link to="/">{translate?.header.navigate.loginDetails}</Link>
        </nav>
      </li>
      <li>
        <DropMenu
          arr={contactsLinks}
          title={translate?.header.navigate.contact}
        />
      </li>
      <li>{width < 1024 ? <ListInfo /> : null}</li>
    </ul>
  );
};

export default Navigate;
