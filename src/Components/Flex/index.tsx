import styled from "styled-components";

interface FlexProps {
    w?: string;
    h?: string;
    m?: string;
    mb?: string | number;
    p?: string;

    justifyContent?: string;
    alignItems?: string;
    dir?: string;

    border?: string;
    borderRadius?: string;
    bgColor?: string;

    position?: string;

    transform?: string;
    zIndex?: string | number;

    boxShadow?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  width: ${(props: any) => props.w};
  height: ${(props: any) => props.h};
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
  flex-direction: ${(props: any) => props.dir};
  margin: ${(props: any) => props.m};
  margin-bottom: ${(props: any) => props.theme.spacing[props.mb]};
  padding: ${(props: any) => props.theme.spacing[props.p]};
  padding-top: ${(props: any) => props.theme.spacing[props.pt]};
  padding-bottom: ${(props: any) => props.theme.spacing[props.pb]};
  border: ${(props: any) => props.border};
  background: ${(props: any) => props.theme.colors[props.bgColor]};
  position: ${(props: any) => props.position};
  transform: ${(props: any) => props.transform};
  z-index: ${(props: any) => props.zIndex};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => props.borderRadius};;
`

export default Flex;