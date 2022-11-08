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
}

const Box = styled.div<BoxProps>`
  width: ${(props: any) => props.w};
  height: ${(props: any) => props.h};
  margin: ${(props: any) => props.m};
  padding: ${(props: any) => props.p};
  background-color: ${(props: any) => props.bgColor};
  border-radius: ${(props: any) => props.bR};
  position: ${(props: any) => props.position};
  display: ${(props: any) => props.display};
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
`

export default Box;