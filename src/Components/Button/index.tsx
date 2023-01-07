import styled, {css} from "styled-components";
import {BUTTON_SIZES, BUTTON_VARIANTS, ButtonProps} from "./types";
import {prop, ifProp, switchProp} from "styled-tools";

export const Button = styled.button<ButtonProps>`
  width: ${(props: any) => props.widthAuto ? 'auto' : '100%'};
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  border: none;

  // pseudo-classes
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }

  // button styles by variant (background, hover, border)
  ${switchProp("variant", {
    [BUTTON_VARIANTS.CONTAINED]: css`
      background-color: ${(props: any) => props.theme.colors['blue']};
      color: white;

      &:hover {
        background-color: ${(props: any) => !props.disabled && props.theme.colors['blue-600']};
      }
    `,
    [BUTTON_VARIANTS.OUTLINE]: css`
      border: 1px solid ${(props: any) => props.theme.colors['blue']};
      color: ${(props: any) => props.theme.colors['blue']};

      &:hover {
        color: ${(props: any) => !props.disabled && props.theme.colors['blue-600']};
        border: 1px solid ${(props: any) => props.theme.colors['blue-600']};
      }
    `,

    [BUTTON_VARIANTS.TEXT]: css`
      color: ${(props: any) => props.theme.colors['blue']};

      &:hover {
        color: ${(props: any) => !props.disabled && props.theme.colors['blue-600']};
      }
    `
  })} // button spacing
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