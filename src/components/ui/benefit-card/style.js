import styled from "styled-components";
import Text from "../text/text";

export const StyledCard = styled.article`
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
  width: 540px;
  min-height: 197px;
  background-color: ${(props) =>
    props.isBad ? props.theme.colorPink : props.theme.colorGreenLight};
  list-style: none;
`;

export const Header = styled.div`
  position: relative;
  padding-left: 72px;
  min-height: 56px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Icon = styled.div`
  display: block;
  position: absolute;
  top: 2px;
  left: 0;
  content: "";
  width: 52px;
  height: 52px;
`;

export const ProductType = styled.span`
  display: block;
  margin-bottom: 4px;
  padding: 2px 10px;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isBad ? props.theme.colorRed : props.theme.colorGreen};
`;

export { Text };
