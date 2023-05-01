import React from "react";
import Header from "/src/components/layout/header/header.jsx";
import Footer from "/src/components/layout/footer/footer.jsx";
import { MainPageWrapper } from "./style";
import { Outlet } from "react-router-dom";

function PageWrapper({ ...props }) {
  return (
    <>
      <Header />
      <MainPageWrapper>
        <Outlet />
      </MainPageWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;
