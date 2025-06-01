import React from "react";
import Logo from "./Logo";
import Navigate from "./ListLinks/Navigate";
import BtnShowMenu from "./ListLinks/BtnShowMenu";
import { isShowMenuSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isShowMenu = useSelector(isShowMenuSelector);

  return (
    <div
      className={`${
        isShowMenu ? "mt-5" : ""
      } flex  flex-row flex-wrap justify-around items-center h-36 max-md:h-full max-lg:h-24 relative `}
    >
      <Logo />
      <BtnShowMenu />
      <Navigate />
    </div>
  );
};

export default Navbar;
