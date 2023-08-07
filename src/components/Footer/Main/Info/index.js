import React from "react";
import { useTranslation } from "react-i18next";
const Info = () => {
  const { t } = useTranslation();

  const styleLg = `max-lg:text-xs   max-lg:w-full lg:h-[23rem] max-lg:pr-[1.25rem] max-lg:pl-[1.25rem]`;
  return (
    <section
      className={`flex  flex-col  w-1/5 text-left text-white  ${styleLg}`}
    >
      <section>{t("footer.info.consultation")}</section>
      <br></br>
      <section>
        <p>phone:+33333333</p>
        <p>email:temlate@werwe.com</p>
      </section>
      <br></br>
      <section>{t("footer.info.contactWithUs")}</section>
    </section>
  );
};

export default Info;
