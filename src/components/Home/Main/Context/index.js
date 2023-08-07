import React from "react";
import { useTranslation } from "react-i18next";

const Context = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col  items-center text-left mt-12 max-sm:mt-0 max-sm:text-xs">
      <article className="w-3/5 max-sm:w-[90%]	lg:w-[70%] mt-12">
        <h1 className="text-2xl font-bold text-blue-500">
          {t("home.main.title-1")}
        </h1>
        <br></br>
        <p>{t("home.main.p-1-1")}</p>
        <br></br>
        <br></br>
        <p>{t("home.main.p-1-2")}</p>
      </article>
      <article className="w-3/5	max-sm:w-[90%] lg:w-[70%] flex flex-col">
        <h1 className="mt-5 text-xl  font-bold text-blue-500">
          {t("home.main.title-2")}
        </h1>
        <br></br>
        <p>{t("home.main.p-2-1")}</p>
        <br></br>
        <p>{t("home.main.p-2-2")}</p>
        <br></br>
        <p>{t("home.main.p-2-3")}</p>
      </article>
    </main>
  );
};

export default Context;
