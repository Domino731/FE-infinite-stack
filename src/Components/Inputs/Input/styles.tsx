import styled, {css} from "styled-components";
import {INPUT_SIZES, InputComponentProps} from "./types";
import {switchProp} from "styled-tools";


export const InputComponent = styled.input<InputComponentProps>`
  outline: none;
  font-weight: 500;
  border: ${props => props.isInvalid ? 2 : 1}px solid ${props => props.isInvalid ? props.theme.colors.red : '#9ca3af'};

  &[type=password] {
    font-size: 22px;
    color: ${props => props.theme.colors['grey-700']};
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.primary};
  }

  ${switchProp("size", {
    [INPUT_SIZES.LG]: css`
      height: 50px;
      font-size: 19px;
      border-radius: 10px;
      padding: 0 14px;
    `,
    [INPUT_SIZES.MD]: css`
      height: 40px;
      font-size: 16px;
      border-radius: 8px;
      padding: 0 10px;
    `,
    [INPUT_SIZES.SM]: css`
      height: 32px;
      font-size: 14px;
      border-radius: 7px;
      padding: 0 6px;
    `
  })}
`