import React from "react";
import { useDispatch } from "react-redux";
import { setIsShowMenu } from "../../../../../store/reducer/menu";

const BtnShowMenu = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(setIsShowMenu())}
      className="inline-flex items-center  w-10 h-10 justify-center  lg:hidden  "
    >
      &#9776;
    </button>
  );
};

export default BtnShowMenu;
