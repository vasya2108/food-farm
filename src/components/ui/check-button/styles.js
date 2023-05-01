import styled from "styled-components";

import V from "/src/assets/V.svg";

export const HiddenCheckBox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Label = styled.label`
  margin: 0;
  padding: 0;
`;

export const LabelComponent = styled.div`
  height: 24px;
  width: 24px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.isChecked ? props.theme.colorOrange : props.theme.colorWhiteDark};
  background-repeat: no-repeat;
  background-position: center;
  ${(props) => (props.isChecked ? `background-image: url(${V});` : null)};
  ${(props) =>
    props.isCurrent ? `box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);` : null};
  cursor: pointer;
`;
