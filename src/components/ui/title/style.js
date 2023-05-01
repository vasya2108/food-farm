import styled from "styled-components";

const titleSize = {
  1: { size: "44px", lineHeight: "115%" },
  2: { size: "36px", lineHeight: "115%" },
  3: { size: "32px", lineHeight: "115%" },
  4: { size: "24px", lineHeight: "115%" },
  default: { size: "32px", lineHeight: "115%" }
};

export const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: ${(props) => (props.$gapBottom ? props.$gapBottom + "px" : 0)};
  padding: 0;
  font-weight: 700;
  font-size: ${(props) =>
    titleSize[props.$level]
      ? titleSize[props.$level].size
      : titleSize.default.size};
  line-height: ${(props) =>
    titleSize[props.$level]
      ? titleSize[props.$level].lineHeight
      : titleSize.default.lineHeight};};
`;
