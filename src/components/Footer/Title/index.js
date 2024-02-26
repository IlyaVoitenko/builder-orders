import React from "react";
import { translateSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";

const Title = () => {
  const translate = useSelector(translateSelector);

  return (
    <samp className="mt-[5%] text-white text-4xl font-bold">
      {translate?.footer?.location}
    </samp>
  );
};

export default Title;
