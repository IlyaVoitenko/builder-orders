import React from "react";
import { useDispatch } from "react-redux";
import { setIsShowMenu } from "../../../../../store/reducer/menu";

const BtnShowMenu = () => {
  const dispatch = useDispatch();
  return (
    <button
      data-collapse-toggle="navbar-dropdown"
      type="button"
      onClick={() => dispatch(setIsShowMenu())}
      className="inline-flex items-center  w-10 h-10 justify-center  text-white rounded-lg lg:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
      aria-controls="navbar-dropdown"
      aria-expanded="false"
    >
      &#9776;
    </button>
  );
};

export default BtnShowMenu;
