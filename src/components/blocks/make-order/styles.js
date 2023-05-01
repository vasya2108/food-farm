import styled from "styled-components";

export const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 353px;
  margin: 0;
  padding: 24px 20px 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
  line-height: 150%;
  font-size: 18px;
  font-weight: 700;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  margin-bottom: 20px;
  padding: 14px 12px;
  width: 100%;
  background-color: ${(props) => props.theme.colorWhiteDark};
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const Text = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const Price = styled.div`
  margin-bottom: 32px;
  font-size: 24px;
  line-height: 130%;
  font-weight: 700;
`;
