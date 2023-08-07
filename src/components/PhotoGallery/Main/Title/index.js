import React from "react";
import { useTranslation } from "react-i18next";
const Title = () => {
  const { t } = useTranslation();
  return (
    <section className="w-[71%]  max-lg:w-[85%] max-lg:text-sm	">
      <h3 className="text-4xl max-lg:text-2xl text-blue-500">
        {t("photoGallery.title")}
      </h3>
      <br></br>
      <p>{t("photoGallery.context")}</p>
    </section>
  );
};

export default Title;
