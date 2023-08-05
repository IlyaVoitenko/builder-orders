import React, { useRef } from "react";
import useWindowDimensions from "../../useWindowDimensions";
import Phone from "./Phone";
import Email from "./Email";
import Networks from "./Networks";
import ListInfo from "./ListInfo";

const Info = () => {
  const width = useWindowDimensions();
  return (
    <div className="flex flex-row bg-orange-700 justify-around text-white h-8">
      <div className="flex flex-row  justify-between max-lg:justify-center items-center w-1/4 max-lg:w-screen">
        <Phone />
        <Email />
        <Networks />
      </div>
      {width > 1024 ? <ListInfo /> : null}
    </div>
  );
};
export default Info;
