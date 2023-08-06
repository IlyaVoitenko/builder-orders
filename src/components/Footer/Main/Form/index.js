import React, { useState } from "react";
import Inputs from "./Inputs";
import PolicyPrivacy from "./PolicyPrivacy";

const Form = () => {
  const [isAgree, setIsAgree] = useState(false);
  return (
    <div className="w-[50%] max-lg:w-full">
      <form className="flex flex-col justify-center items-center">
        <Inputs />
        <PolicyPrivacy setIsAgree={setIsAgree} isAgree={isAgree} />
      </form>
    </div>
  );
};

export default Form;
