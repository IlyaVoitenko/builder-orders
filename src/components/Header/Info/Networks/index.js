import React from "react";
import Instagram from "./Instagram";
import Facebook from "./Facebook";

const Networks = () => {
  return (
    <div className="flex flow-row  w-10 justify-between">
      <Facebook />
      <Instagram />
    </div>
  );
};

export default Networks;
