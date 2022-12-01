import styled from "styled-components";

interface FlexProps {
    w?: string;
    h?: string;
    m?: string;
    p?: string;

    justifyContent?: string;
    alignItems?: string;
    dir?: string;

    border?: string;
    bgColor?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  width: ${(props: any) => props.w};
  height: ${(props: any) => props.h};
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
  flex-direction: ${(props: any) => props.dir};
  margin: ${(props: any) => props.m};
  padding: ${(props: any) => props.theme.spacing[props.p]};
  border: ${(props: any) => props.border};
  background: ${(props: any) => props.theme.colors[props.bgColor]};
`

export default Flex;