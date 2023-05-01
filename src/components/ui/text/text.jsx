import React from "react";
import { StyledText } from "./style";

export const textSize = {
  body18: { fontSize: "18px", lineHeight: "150%", fontWeight: 400 },
  body18b: { fontSize: "18px", lineHeight: "150%", fontWeight: 700 },
  body14: { fontSize: "14px", lineHeight: "130%", fontWeight: 400 },
  body14b: { fontSize: "14px", lineHeight: "130%", fontWeight: 700 }
};

function Text({ size = "body14", children, className }) {
  return (
    <StyledText $size={size} className={className}>
      {children}
    </StyledText>
  );
}

export default Text;
