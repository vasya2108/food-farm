import styled from "styled-components";

export const TitleList = styled.div`
  display: inline-flex;
  gap: 10px;
  overflow: hidden;
`;

export const TitleButton = styled.button`
  display: block;
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 14px;
  line-height: ${(props) => props.theme.lineHeightnDefault};
  color: ${(props) =>
    props.isActive ? props.theme.colorWhite : props.theme.colorBlack};
  background-color: ${(props) =>
    props.isActive ? props.theme.colorGreen : props.theme.colorWhiteDark};
  cursor: pointer;
`;

export const Content = styled.div`
  padding-right: 20px;
  overflow-y: overlay;
  margin-top: 16px;
  font-size: 14px;
  line-height: 150%;
  max-height: 148px;
  & span {
    margin-top: 8px;
    display: block;
    & b {
      font-weight: 700;
    }
  }
`;
