import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 100px 90px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  margin-left: -20px;
  padding: 0;
  padding-top: 44px;
  padding-bottom: 64px;
  text-align: center;
`;

export const StyledListItem = styled.li`
  margin-left: 20px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 27px;
  vertical-align: top;
  text-align: left;
  overflow: hidden;
  list-style: none;
  max-width: 540px;
`;
