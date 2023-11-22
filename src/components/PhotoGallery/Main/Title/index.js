import React from "react";
import { useSelector } from "react-redux";
import { translateSelector } from "../../../../store/selectors";

const Title = ({ pageName }) => {
  const translate = useSelector(translateSelector);
  return (
    <section className="w-[71%]  max-lg:w-[85%] max-lg:text-sm	">
      <h3 className="text-4xl max-lg:text-2xl text-blue-500">
        {translate?.photoGallery[pageName].title}
      </h3>
      <br></br>
      <p>{translate?.photoGallery[pageName].context}</p>
    </section>
  );
};

export default Title;
