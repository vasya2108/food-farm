import React from "react";
import Logo from "/src/components/ui/logo/logo.jsx";
import { StyledSection, Copyright } from "./style";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Создано 2023</Copyright>
    </StyledSection>
  );
}

export default Footer;
