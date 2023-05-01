import React from "react";
import { StyledTitle } from "./style.js";

function Title({ children, $gapBottom, level = "3" }) {
  return (
    <StyledTitle as={`h${level}`} $level={level} $gapBottom={$gapBottom}>
      {children}
    </StyledTitle>
  );
}

export default Title;
