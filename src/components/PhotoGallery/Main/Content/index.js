import React from "react";
import { useSelector } from "react-redux";
import { translateSelector } from "../../../../store/selectors";

const Content = ({ pageName }) => {
  const translate = useSelector(translateSelector);
  const { context } = translate?.photoGallery[pageName] || {};
  return (
    <div className="w-[71%] max-lg:w-[85%] max-lg:text-sm">
      {context &&
        context.map((_, index) => (
          <>
            <p key={index} className="mt-4 mb-4">
              {translate.photoGallery[pageName].context[index][`p-${index}`]}
            </p>
          </>
        ))}
    </div>
  );
};

export default Content;
