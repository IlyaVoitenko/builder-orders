import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isShowMenuSelector } from "../../../../../store/selectors";
import { serviceLinks, productsLinks, contactsLinks } from "../helper";
import useWindowDimensions from "../../../../useWindowDimensions";
import ListInfo from "../../../Info/ListInfo";
import DropMenu from "../DropMenu";

const styleSm = ``;
const styleMd = `max-md:w-full max-md:mt-1`;
const styleLg = `max-lg:z-30 max-lg:w-screen	max:lg:left-0	 max-lg:flex-col  max-lg:mt-5 lg:flex `;
const styleXl = `xl:flex`;
const styleXxl = `2xl:flex`;

const Navigate = () => {
  const isShowMenu = useSelector(isShowMenuSelector);
  const width = useWindowDimensions();
  return (
    <ul
      className={`${
        isShowMenu ? "block " : "hidden"
      } flex flex-row items-center bg-white justify-between font-bold w-[40%] ${styleSm}  ${styleMd} ${styleLg} ${styleXl} ${styleXxl}`}
    >
      <li>
        <nav>
          <Link to="/">HOME</Link>
        </nav>
      </li>
      <li>
        <DropMenu arr={serviceLinks} title={"SERVICES"} />
      </li>
      <li>
        <DropMenu arr={productsLinks} title={"PRODUCTS"} />
      </li>
      <li>
        <nav>
          <Link to="/photo-gallery">FOTOGALERY</Link>
        </nav>
      </li>
      <li>
        <nav>
          <Link to="/">LOGIN DETAILS</Link>
        </nav>
      </li>
      <li>
        <DropMenu arr={contactsLinks} title={"CONTACT"} />
      </li>
      <li>{width < 1024 ? <ListInfo /> : null}</li>
    </ul>
  );
};

export default Navigate;
