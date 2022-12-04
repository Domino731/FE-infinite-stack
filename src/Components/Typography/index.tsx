import styled, {css} from "styled-components";
import {TYPOGRAPHY_TYPE, TypographyProps} from "./types";

export const Typography = styled.p`
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 32px;
  color: ${(props: any) => props.theme.colors.blue};
`

export const Typograhpy2 = styled.p<TypographyProps>`
  font-size: ${(props) => props.theme.typography.fontSize[props.type]};
  text-align: ${props => props.align};
  padding-top: ${(props: any) => props.pt && props.theme.spacing[props.pt]};
  padding-bottom: ${(props: any) => props.pt && props.theme.spacing[props.pb]};
  padding-right: ${(props: any) => props.theme.spacing[props.pr]};
  padding-left: ${(props: any) => props.pt && props.theme.spacing[props.pl]};
  color: ${(props: any) => props.theme.colors[props.color]}
`