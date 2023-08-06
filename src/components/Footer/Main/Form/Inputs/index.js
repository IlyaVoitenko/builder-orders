import React, { useState } from "react";

const Inputs = () => {
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [news, setNews] = useState("");
  return (
    <div className="max-lg:w-[95%] max-sm:flex max-sm:flex-col max-sm:items-center max-sm: justify-center">
      <div className=" flex flex-row max-sm:flex-col justify-between  max-sm:w-full  max-sm:justify-center max-sm:items-center mt-1 max-lg:mt-3">
        <input
          onChange={({ target }) => setSurname(target.value)}
          value={surname}
          placeholder="surname"
          className="pt-2 pb-2 pl-2 w-[17rem] max-sm:w-[94%] "
        ></input>
        <input
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          placeholder="email"
          className="pt-2 pb-2 pl-2 w-[17rem] max-sm:w-[94%] "
        ></input>
      </div>
      <textarea
        rows="4"
        placeholder="news"
        value={news}
        onChange={({ target }) => setNews(target.value)}
        className="pt-2 pb-2 pl-2 mt-5 resize-y max-lg:w-full w-full max-sm:w-[94%]"
      ></textarea>
    </div>
  );
};

export default Inputs;
