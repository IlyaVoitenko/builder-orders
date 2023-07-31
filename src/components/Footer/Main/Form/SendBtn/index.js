import React from "react";

const SendBtn = ({isAgree}) => {
  return (
    <div className="flex justify-end w-[75%]">
      <button
        type="submit"
        disabled={!isAgree}
        className={ `${isAgree?'bg-blue-500 hover:bg-blue-700 border-blue-700': 'bg-blue-300 hover:bg-blue-300 border-blue-300'}  text-white font-bold py-2 px-4 border  rounded`} 
      >
        Send
      </button>
    </div>
  );
};

export default SendBtn;
