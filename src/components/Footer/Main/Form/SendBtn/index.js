import React from "react";
import {
  lastnameSelector,
  emailSelector,
  requestUserSelector,
} from "../../../../../store/selectors";
import { useSelector } from "react-redux";
import { validationFornBtn } from "../../../../../utils/helpers";

const SendBtn = ({ isAgree, text }) => {
  const lastname = useSelector(lastnameSelector);
  const email = useSelector(emailSelector);
  const requestUser = useSelector(requestUserSelector);

  return (
    <div className="flex justify-end w-[75%] max-lg:w-[50%]">
      <button
        type="submit"
        disabled={validationFornBtn(isAgree, lastname, email, requestUser)}
        className={`${
          !validationFornBtn(isAgree, lastname, email, requestUser)
            ? "bg-blue-500 hover:bg-blue-700 border-blue-700"
            : "bg-blue-300 hover:bg-blue-300 border-blue-300"
        }  text-white font-bold py-2 px-4 border  rounded`}
      >
        {text}
      </button>
    </div>
  );
};

export default SendBtn;
