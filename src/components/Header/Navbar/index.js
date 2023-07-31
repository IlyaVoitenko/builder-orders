import React from "react";
import ListLinks from "./ListLinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex flex-row  justify-around items-center h-36 relative">
      <Logo />
      <ListLinks />
    </div>
  );
};

export default Navbar;
