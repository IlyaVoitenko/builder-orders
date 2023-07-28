import React from "react";

const SendBtn = () => {
  return (
    <div className="flex justify-end w-[75%]">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default SendBtn;
