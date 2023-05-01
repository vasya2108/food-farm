import React from "react";
import { StyledButton } from "./style";

function Button({ minWidth, children, link, className, onClick, isDisabled }) {
  let $isDisabled = false;

  if (isDisabled === "true") {
    $isDisabled = true;
  }

  return (
    <StyledButton
      $isDisabled={$isDisabled === true ? "true" : "false"}
      disabled={$isDisabled}
      $minWidth={minWidth}
      {...(link ? { to: link } : { as: "button", type: "button" })}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
