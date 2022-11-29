import styled from "styled-components";
import {ImageProps} from "./types";

const Image = styled.img<ImageProps>`
  object-fit: cover;
  width: ${(props: any) => props.w};
  height: ${(props: any) => props.h};
  border-radius: ${(props: any) => props.theme.borderRadius[props.borderRadius]};
`

export default Image;