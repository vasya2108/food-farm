import React from "react";
import About from "/src/components/blocks/about/about";
import BenefitList from "/src/components/blocks/benefits-list/benefit-list";

function MainPage({ benefits }) {
  return (
    <>
      <About />
      <BenefitList benefits={benefits} />
    </>
  );
}

export default MainPage;
