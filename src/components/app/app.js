import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper.jsx";
import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import benefitListData from "/src/mocks/benefit-list-data";
import { productsData } from "/src/mocks/product-list-data";
import { appRoute } from "/src/mocks/url";

import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import ScrollToTop from "../ui/scroll-top/scroll-top";

import { Page404 } from "/src/components/pages/page404/page404";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={appRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage benefits={benefitListData} />} />
            <Route
              path={appRoute.BUY}
              element={<BuyPage products={productsData} />}
            />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <PageWrapper benefits={benefitListData} products={productsData} /> */}
    </>
  );
}
