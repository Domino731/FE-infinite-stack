import styled, {css} from "styled-components";
import {TYPOGRAPHY_TYPE, TypographyProps} from "./types";

export const Typography = styled.p`
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 32px;
  color: ${(props: any) => props.theme.colors.blue};
`

export const Typograhpy2 = styled.p<TypographyProps>`
  ${({type}) => {
    switch (type) {
      case TYPOGRAPHY_TYPE.HEADLINE:
        return css`
          font-size: 30px;
        `
      default:
        return css``
    }
  }
  }
`