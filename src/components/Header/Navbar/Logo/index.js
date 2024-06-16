import React from "react";
import { useSelector } from "react-redux";
import { translateSelector } from "../../../../store/selectors";
import logo from "../../../../assets/images/vecteezy_ai-generated-ancient-greek-temple-facade-png_42655125.png";
const Logo = () => {
  const translate = useSelector(translateSelector);
  console.log("translate?.header?", translate?.header);
  return (
    <div className=" flex">
      <figure>
        <img src={logo} className="w-[100px] h-full" alt="logo" />
      </figure>
      <div className="flex flex-col justify-center text-left">
        <span>
          <span className="text-blue-500">S</span>{" "}
          <span className="text-yellow-500">A</span>{" "}
          <span className="text-green-500">D</span>{" "}
          <span className="text-sky-400">I</span>{" "}
        </span>
        <span>{translate?.header?.logoSubtitle}</span>
      </div>
    </div>
  );
};

export default Logo;
