import React from "react";
import Button from "/src/components/ui/button/button";
import { StyledNav } from "./style";
import { appRoute } from "/src/mocks/url";
import { useLocation } from "react-router-dom";
import { StyledButton } from "./style";

const buttons = [
  {
    to: appRoute.MAIN,
    button: (
      <StyledButton key={appRoute.MAIN} link={appRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: appRoute.BUY,
    button: (
      <Button key={appRoute.BUY} link={appRoute.BUY}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <StyledNav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </StyledNav>
  );
}

export default Nav;
