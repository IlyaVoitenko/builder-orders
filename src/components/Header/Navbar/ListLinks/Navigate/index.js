import React from "react";
import { Link } from "react-router-dom";
import { serviceLinks, productsLinks, contactsLinks } from "../helper";
import DropMenu from "../DropMenu";

const styleSm = `max-sm:bg-lime-800`;
const styleMd = `max-md:w-full max-md:bg-blue-800`;
const styleLg = `max-lg:z-50 max-lg:w-screen	max:lg:left-0	 max-lg:flex-col  max-lg:bg-red-800  `;

const Navigate = ({ isShow }) => {
  return (
    <ul
      className={`flex flex-row items-center justify-between font-bold w-[40%] ${styleSm}  ${styleMd} ${styleLg}`}
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
    </ul>
  );
};

export default Navigate;
