import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledNav = styled.nav`
  margin: 0;
`;

export const StyledButton = styled(Button)`
  padding: 0;
  width: auto;
  min-width: 0;
  color: ${(props) => props.theme.colorBlack};
  font-weight: 700;
  font-size: 18px;
  background-color: ${(props) => props.theme.colorWhite};

  &:hover,
  &:active {
    text-decoration: underline;
    background-color: ${(props) => props.theme.colorWhite};
    box-shadow: none;
  }
`;
