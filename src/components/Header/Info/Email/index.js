import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Email = () => {
  return (
    <span className="flex flex-row items-center max-lg:mr-1 max-lg:ml-1 ">
      <AiOutlineMail /> <span className="ml-1">email@werwer.com</span>
    </span>
  );
};

export default Email;
