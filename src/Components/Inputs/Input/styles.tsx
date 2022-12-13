import styled from "styled-components";

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

  &[type=password] {
    font-size: 22px;
    color: ${props => props.theme.colors['grey-700']};
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.primary};
  }
;
`