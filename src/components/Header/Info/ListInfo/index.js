import React from "react";

const ListInfo = () => {
  return (
    <nav className="flex items-center  justify-center	 w-[27%] max-lg:w-screen lg:w-[50%]">
      <ul className="flex flex-row max-lg:flex-col items-center lg:justify-around  w-full ">
        <li className="max-lg:mt-2">
          <a href="/">Site Notice</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">How to order</a>
        </li>
        <li>
          <a href="/">Catalog</a>
        </li>
        <li>DE</li>
        <li>ENG</li>
      </ul>
    </nav>
  );
};

export default ListInfo;
