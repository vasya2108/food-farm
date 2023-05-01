import styled from "styled-components";

export const StyledSection = styled.section`
  position: absolute;
  width: 1280px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  height: 79px;
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-left: 90px;
  padding-right: 90px;
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Copyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;
