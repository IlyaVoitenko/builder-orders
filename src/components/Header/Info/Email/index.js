import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Email = () => {
  return (
    <span className="flex flex-row items-center max-lg:mr-1 max-lg:ml-1 ">
      <AiOutlineMail />{" "}
      <a className="ml-1" href="mailto:webmaster@example.com">
        email@werwer.com
      </a>
    </span>
  );
};

export default Email;
