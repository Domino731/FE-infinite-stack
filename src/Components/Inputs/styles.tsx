import styled from "styled-components";

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 1px;
`


export const ErrorMessage = styled.strong`
  font-size: 13px;
  font-weight: 500;
  padding-top: 2px;
  color: ${props => props.theme.colors.red};
  position: absolute;
  top: 54px;
`