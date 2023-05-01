import styled from "styled-components";

export const StyledSection = styled.section`
  z-index: 5;
  display: flex;
  padding-left: 90px;
  padding-right: 90px;
  width: 1280px;
  margin: 0 auto;
  position: relative;
  height: 80px;
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`;
