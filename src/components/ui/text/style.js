import styled from "styled-components";
import { textSize } from "./text";

export const StyledText = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${(props) =>
    textSize[props.$size]
      ? textSize[props.$size].fontSize
      : props.theme.fontSizeDefault};
  font-weight: ${(props) =>
    textSize[props.$size]
      ? textSize[props.$size].fontWeight
      : props.theme.fontWeightDefault};
  line-height: ${(props) =>
    textSize[props.$size]
      ? textSize[props.$size].lineHeight
      : props.theme.lineHeightDefault};
  color: ${(props) => props.theme.colorBlack};
`;
