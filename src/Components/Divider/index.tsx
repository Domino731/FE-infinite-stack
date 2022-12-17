import styled from "styled-components";
import {DividerProps} from "./types";

const Divider = styled.span<DividerProps>`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${props => !props.hideLine && props.theme.colors["grey-400"]};
  margin: ${props => props.my ? props.my : '30px'} auto;
`

export default Divider;