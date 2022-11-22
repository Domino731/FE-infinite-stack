import styled from "styled-components";

const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors["grey-400"]};
  margin: 30px auto;
`

export default Divider;