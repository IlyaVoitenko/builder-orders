import React from "react";
import { BsTelephone } from "react-icons/bs";

const Phone = () => {
  return (
    <span className="flex flex-row items-center max-lg:mr-1 max-lg:ml-1">
      <BsTelephone />
      <a href="tel:+490000000" className="ml-1">
        (123)333 333 33
      </a>
    </span>
  );
};

export default Phone;
