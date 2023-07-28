import React from "react";

const Inputs = () => {
  return (
    <div>
      <div className=" flex flex-row justify-between mt-1">
        <input
          placeholder="surname"
          className="pt-2 pb-2 pl-2 w-[17rem] mr-"
        ></input>
        <input placeholder="email" className="pt-2 pb-2 pl-2 w-[17rem]"></input>
      </div>
      <textarea rows="4" cols="74" className="pt-2 pb-2 pl-2 mt-5">
        query
      </textarea>
    </div>
  );
};

export default Inputs;
