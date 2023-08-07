import React from "react";
import { useTranslation } from "react-i18next";
const Title = () => {
  const { t } = useTranslation();
  return (
    <samp className="mt-[5%] text-white text-4xl font-bold">
      {t("footer.location")}
    </samp>
  );
};

export default Title;
