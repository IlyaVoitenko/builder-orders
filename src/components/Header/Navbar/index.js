import React from "react";
import ListLinks from "./ListLinks";
import Logo from "./Logo";
import Navigate from "./ListLinks/Navigate";

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap justify-around items-center h-36 max-md:h-12 max-lg:h-24 relative max-sm:bg-lime-800 md:bg-blue-800 lg:bg-red-800  xl:bg-orange-500 2xl:bg-green-500">
      <Logo />
      <ListLinks />
      <Navigate />
    </div>
  );
};

export default Navbar;
