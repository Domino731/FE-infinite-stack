import styled from "styled-components";

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 1px;
`

interface InputComponentProps {
    isInvalid?: boolean;
}

export const InputComponent = styled.input<InputComponentProps>`
  outline: none;
  font-size: 17px;
  font-weight: 500;
  padding: 9px 8px;
  border: ${props => props.isInvalid ? 2 : 1}px solid ${props => props.isInvalid ? props.theme.colors.red : '#9ca3af'};
  border-radius: 4px;
  height: 40px;

  &:focus {
    border: 2px solid #2563eb;
  }
;
`

export const ErrorMessage = styled.strong`
  font-size: 13px;
  font-weight: 500;
  padding-top: 2px;
  color: ${props => props.theme.colors.red};
`