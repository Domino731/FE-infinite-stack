import styled from "styled-components";

interface BoxProps {
    w?: string;
    h?: string;
    m?: string;
    p?: string;

    display?: string;
    justifyContent?: string;
    alignItems?: string;

    bgColor?: string;
    bR?: string;

    position?: string;
    bottom?: string | number;
    top?: string | number;

    boxShadow?: string;
    border?: string;
    borderColor?: string;

    bgGradient?: string;
    bgSize?: string;
    bgPosition?: string;
    bgRepeat?: string;

    // pseudo classes 
    _hover?: string;
}

const Box = styled.div<BoxProps>`
    // min-width: ${(props: any) => props.minWidth};
    // max-width: ${(props: any) => props.minWidth};
  width: ${(props: any) => props.w};
  height: ${(props: any) => props.h};

  margin: ${(props: any) => props.m};
  padding: ${(props: any) => props.theme.spacing[props.p] ?? props.p};

  background-color: ${(props: any) => props.theme.colors[props.bgColor]};
  background-image: ${(props: any) => props.theme.gradients[props.bgGradient]};
  background-position: ${(props: any) => props.bgPosition};
  background-size: ${(props: any) => props.bgSize};
  background-repeat: ${(props: any) => props.bgRepeat};

  border: ${(props: any) => props.border};
  border-color: ${(props: any) => props.theme.colors[props.borderColor]};
  border-radius: ${(props: any) => props.theme.borderRadius[props.bR] ?? props.bR};

  position: ${(props: any) => props.position};
  bottom: ${(props: any) => props.bottom};
  top: ${(props: any) => props.top};

  display: ${(props: any) => props.display};
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};

  box-shadow: ${(props: any) => props.boxShadow && props.theme.boxShadow[props.boxShadow]};

  &:hover {
    ${(props: any) => props._hover}
  }
`

export default Box;