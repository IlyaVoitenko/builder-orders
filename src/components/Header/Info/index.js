import React from "react";
import Phone from "./Phone";
import Email from "./Email";
import Networks from "./Networks";
import ListInfo from "./ListInfo";

const Info = () => {
  return (
    <div className="flex flex-row bg-orange-700 justify-around text-white h-8">
      <div className="flex flex-row justify-between items-center w-1/4">
        <Phone />
        <Email />
        <Networks />
      </div>
      <ListInfo />
    </div>
  );
};
export default Info;
