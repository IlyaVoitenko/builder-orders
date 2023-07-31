import React, { useState } from "react";
import Inputs from "./Inputs";
import SendBtn from "./SendBtn";
import PolicyPrivacy from "./PolicyPrivacy";

const Form = () => {
  const [isAgree,setIsAgree] = useState(false)
  return (
    <div className="w-[50%]">
      <form className="flex flex-col justify-center items-center">
        <Inputs />
        <PolicyPrivacy setIsAgree={setIsAgree} isAgree={isAgree}/>
        <SendBtn isAgree={isAgree}/>
      </form>
    </div>
  );
};

export default Form;
