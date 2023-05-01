import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { Text, StyledLogo, StyledLogoMainPage } from "./style";
import { appRoute } from "/src/mocks/url";
import { useLocation } from "react-router-dom";

function Logo() {
  const pathname = useLocation().pathname;

  return pathname === appRoute.MAIN ? (
    <StyledLogoMainPage to={appRoute.MAIN}>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={appRoute.MAIN}>
      <LogoImage />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
