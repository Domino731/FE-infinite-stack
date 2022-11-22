import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.gradients.flare} bottom no-repeat;
  background-size: 100% 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`