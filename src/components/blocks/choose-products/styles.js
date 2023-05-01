import styled from "styled-components";

export const Wrapper = styled.section`
  width: 353px;
  margin: 0;
  padding: 24px 0 12px 0;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const Title = styled.h3`
  margin: 0;
  margin-left: 20px;
  padding: 0;
  line-height: 150%;
  font-size: 18px;
  font-weight: 700;
`;

export const ChooseOptions = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Option = styled.li`
  display: flex;
  margin: 0;
  padding: 15px 20px;
`;

export const OptionText = styled.span`
  margin-right: auto;
`;
