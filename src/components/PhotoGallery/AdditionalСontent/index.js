import React from "react";
import { useSelector } from "react-redux";
import { translateSelector } from "../../../store/selectors";

const AdditionalСontent = ({ pageName }) => {
  const translate = useSelector(translateSelector);
  const { AdditionalСontent } = translate?.photoGallery[pageName] || {};
  return (
    <div className="w-[71%] max-lg:w-[85%] max-lg:text-sm">
      {AdditionalСontent &&
        AdditionalСontent.map((_, index) => (
          <>
            <p key={index} className="mt-4 mb-4">
              {
                translate.photoGallery[pageName].AdditionalСontent[index][
                  `p-${index}`
                ]
              }
            </p>
          </>
        ))}
    </div>
  );
};

export default AdditionalСontent;
