import styled from "styled-components";

interface FlexProps {
    w?: string;
    h?: string;
}
const Flex = styled.div<FlexProps>`
display: flex;
width: ${(props: any) => props.w};
height: ${(props: any) => props.h};
`

export default Flex;