import React from "react";
import { Link } from "react-router-dom";
import {serviceLinks,productsLinks ,contactsLinks} from './helper'
import DropMenu from "./DropMenu";

const ListLinks = () => {
  return (
    <ul className="flex flex-row items-center justify-between font-bold w-[40%]">
      <li>
        <Link href="/">HOME</Link>
      </li>
      <li>
        <DropMenu arr={serviceLinks} title={"SERVICES"} />
      </li>
      <li>
        <DropMenu arr={productsLinks} title={"PRODUCTS"} />
      </li>
      <li>
        <Link href="/">FOTOGALERY</Link>
      </li>
      <li>
        <Link href="/">LOGIN DETAILS</Link>
      </li>
      <li>
        <DropMenu arr={contactsLinks} title={"CONTACT"} />
      </li>
    </ul>
  );
};

export default ListLinks;
