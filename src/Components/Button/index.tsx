import styled, {css} from "styled-components";
import {BUTTON_SIZES, ButtonProps} from "./types";
import {prop, ifProp, switchProp} from "styled-tools";

export const Button = styled.button<ButtonProps>`
  width: ${(props: any) => props.widthAuto ? 'auto' : '100%'};
  background-color: ${(props: any) => props.theme.colors['blue']};
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props: any) => !props.disabled && props.theme.colors['blue-600']};
  }

  &:disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }

  ${switchProp("size", {
    [BUTTON_SIZES.LG]: css`
      height: 50px;
      font-size: 19px;
      border-radius: 12px;
      padding: 0 24px;
    `,
    [BUTTON_SIZES.MD]: css`
      height: 40px;
      font-size: 16px;
      border-radius: 11px;
      padding: 0 20px;
    `,
    [BUTTON_SIZES.SM]: css`
      height: 32px;
      font-size: 14px;
      border-radius: 10px;
      padding: 0 18px;
    `,
  })}
`