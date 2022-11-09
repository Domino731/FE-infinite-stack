import styled from "styled-components";

interface FlexProps {
    w?: string;
    h?: string;
    m?: string;
    p?: string;

    justifyContent?: string;
    alignItems?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  width: ${(props: any) => props.w};
  height: ${(props: any) => props.h};
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
  margin: ${(props: any) => props.m};
  padding: ${(props: any) => props.p};
`

export default Flex;