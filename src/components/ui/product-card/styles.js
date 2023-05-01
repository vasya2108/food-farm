import styled from "styled-components";

export const StyledCard = styled.article`
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
  width: 727px;
  height: 288px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const Title = styled.span`
  margin-bottom: 16px;
  display: block;
  font-size: 24px;
  line-height: 130%;
  font-weight: 700;
`;

export const Image = styled.img`
  display: block;
  width: 248px;
  height: 248px;
  object-fit: cover;
`;

export const StyledDescription = styled.div`
  display: grid;
  height: 148px;
  grid-template-rows: auto 1fr;
  grid-row-gap: 14px;
`;

export const StyledText = styled.div`
  width: 100%;
  padding-right: 20px;
  overflow: overlay;
`;

export const StyledPrice = styled.div`
  padding: 4px 8px;
  justify-self: start;
  font-size: 14px;
  line-height: ${(props) => props.theme.lineHeightnDefault};
  font-weight: 700;
  background-color: ${(props) => props.theme.colorCyan};
`;
