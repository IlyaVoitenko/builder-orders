import React, { useState } from "react";

const Inputs = () => {
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [news, setNews] = useState("");

  return (
    <div>
      <div className=" flex flex-row justify-between max-sm:justify-center mt-1">
        <input
          onChange={({ target }) => setSurname(target.value)}
          value={surname}
          placeholder="surname"
          className="pt-2 pb-2 pl-2 w-[17rem] max-sm:w-[10rem]"
        ></input>
        <input
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          placeholder="email"
          className="pt-2 pb-2 pl-2 w-[17rem] max-sm:w-[10rem]"
        ></input>
      </div>
      <textarea
        rows="4"
        placeholder="news"
        cols="74"
        value={news}
        onChange={({ target }) => setNews(target.value)}
        className="pt-2 pb-2 pl-2 mt-5"
      ></textarea>
    </div>
  );
};

export default Inputs;
