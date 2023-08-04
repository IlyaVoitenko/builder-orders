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
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
      aria-controls="navbar-dropdown"
      aria-expanded="false"
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};

export default BtnShowMenu;
