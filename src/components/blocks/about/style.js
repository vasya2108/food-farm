import styled from "styled-components";
import man from "/src/assets/bg_man.svg";
import elipse from "/src/assets/bg_elipse.svg";

export const StyledSection = styled.section`
  display: flex;
  position: relative;
  padding-left: 90px;
  padding-top: 159px;
  padding-bottom: 159px;
  padding-right: 603px;
  background-color: #d8ecfe;
  align-items: center;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;

  &::after,
  ::before {
    position: absolute;
    top: 37px;
    right: 100px;
    display: block;
    content: "";
    width: 446px;
    height: 607px;
    margin: auto;
    background-image: url(${man});
    background-repeat: no-repeat;
    background-position-x: center;
    z-index: -1;
  }
  &::before {
    top: 60px;
    right: 100px;
    width: 446px;
    height: 607px;
    margin: auto;
    background-image: url(${elipse});
    z-index: -2;
  }
`;

export const TextWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  width: 530px;
  z-index: 3;
`;
