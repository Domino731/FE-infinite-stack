import styled from "styled-components";

interface ButtonProps {
    disabled?: boolean;
    widthAuto?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props: any) => props.widthAuto ? 'auto' : '100%'};
  height: 40px;
  background-color: ${(props: any) => props.theme.colors['blue']};
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  border: none;
  border-radius: 4px;
  padding: 0 20px;

  &:hover {
    cursor: pointer;
    background-color: ${(props: any) => !props.disabled && props.theme.colors['blue-600']};
  }

  &:disabled {
    opacity: 0.7;
  }
`