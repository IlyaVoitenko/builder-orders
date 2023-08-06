import React from "react";
import SendBtn from "../SendBtn";

const PolicyPrivacy = ({ setIsAgree, isAgree }) => {
  const styleLg = ` max-lg:pl-[1.25rem] max-lg:pr-[1.25rem]`;
  return (
    <div
      className={`flex flex-col max-lg:text-xs  justify-center items-center `}
    >
      <span
        className={`text-white text-left w-[75%] max-lg:w-full max-lg:m-auth ${styleLg}`}
      >
        Я прочитал примечание о политике конфиденциальности. Я согласен с тем,
        что мои данные и данные будут собираться и храниться в электронном виде
        для ответа на мой запрос. Примечание. Вы можете в любое время отозвать
        свое согласие на будущее, отправив электронное письмо по адресу
      </span>
      <div className="flex flex-row text-white max-sm:w-[86%]  w-[79%]">
        <div className="flex w-full items-center mt-2 justify-between max-sm:pl-0 pl-4 border-none border-gray-200 rounded dark:border-gray-700">
          <div className="flex flex-row items-center ">
            <input
              id="bordered-checkbox-1"
              type="checkbox"
              checked={isAgree}
              onChange={() => setIsAgree(!isAgree)}
              name="bordered-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-checkbox-1"
              className="w-full py-4 ml-2 text-sm font-medium  dark:text-gray-300"
            >
              I agree
            </label>
          </div>
          <SendBtn isAgree={isAgree} />
        </div>
      </div>
    </div>
  );
};

export default PolicyPrivacy;
