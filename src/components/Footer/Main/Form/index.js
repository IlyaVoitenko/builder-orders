import React from "react";
import Inputs from "./Inputs";
import SendBtn from "./SendBtn";
import PolicyPrivacy from "./PolicyPrivacy";

const Form = () => {
  return (
    <div className="w-[50%]">
      <form className="flex flex-col justify-center items-center">
        <Inputs />
        <PolicyPrivacy />
        <SendBtn />
      </form>
    </div>
  );
};

export default Form;
