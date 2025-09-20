import React from "react";
import { BsTelephone } from "react-icons/bs";

const Phone = () => {
  return (
    <span className="flex flex-row items-center min-w-[135px] max-lg:mr-1 max-lg:ml-1">
      <BsTelephone />
      <a href="tel:+491639252077" className="ml-1">
        (163)9252077
      </a>
    </span>
  );
};

export default Phone;
