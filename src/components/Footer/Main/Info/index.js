import React from "react";
import { translateSelector } from "../../../../store/selectors";
import { useSelector } from "react-redux";

const Info = () => {
  const translate = useSelector(translateSelector);

  const styleLg = `max-lg:text-xs   max-lg:w-full lg:h-[23rem] max-lg:pr-[1.25rem] max-lg:pl-[1.25rem]`;
  return (
    <section
      className={`flex  flex-col  w-1/5 text-left text-white  ${styleLg}`}
    >
      <section>{translate?.footer?.info?.consultation}</section>
      <br></br>
      <section className="flex flex-col">
        <a href="tel:+490000000">phone:+33333333</a>
        <a href="mailto:webmaster@example.com">email:temlate@werwe.com</a>
      </section>
      <br></br>
      <section>{translate?.footer?.info?.contactWithUs}</section>
    </section>
  );
};

export default Info;
