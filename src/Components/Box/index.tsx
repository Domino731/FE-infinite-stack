import styled from "styled-components";

interface BoxProps {
    w?: string;
}
const Box = styled.div<BoxProps>`
   width: ${(props: any) => props.w};
`

export default Box;