import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading";

import "../../utils/i18next";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
