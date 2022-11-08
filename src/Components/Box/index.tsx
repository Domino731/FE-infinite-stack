import styled from "styled-components";

interface BoxProps {
    w?: string;
    m?: string;
    p?: string;
    bgColor?: string;
    bR?: string;
}
const Box = styled.div<BoxProps>`
   width: ${(props: any) => props.w};
   margin: ${(props: any) => props.m};
   padding: ${(props: any) => props.p} ;
   background-color: ${(props: any) => props.bgColor};
   border-radius: ${(props: any) => props.bR} ;
`

export default Box;