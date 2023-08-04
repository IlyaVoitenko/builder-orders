import React from "react";
import Logo from "./Logo";
import Navigate from "./ListLinks/Navigate";
import BtnShowMenu from "./ListLinks/BtnShowMenu";

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap justify-around items-center h-36 max-md:h-12 max-lg:h-24 relative max-sm:bg-lime-800 md:bg-blue-800 lg:bg-red-800  xl:bg-orange-500 2xl:bg-green-500">
      <Logo />
      <BtnShowMenu />
      <Navigate />
    </div>
  );
};

export default Navbar;
