import React from "react";
import { Outlet } from "react-router-dom";

import { Page } from "./Page";
import { Header } from "./Header";

export const PageRoot = () => {
  return (
    <Page>
      <Header />
      <Outlet />
    </Page>
  );
};