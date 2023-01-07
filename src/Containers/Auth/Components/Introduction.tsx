import styled from "styled-components";

export const Introduction = styled.div`
  h1 {
    font-size: 100px;
    font-weight: 900;
    background-repeat: repeat;
    text-transform: uppercase;
    padding: 30px 104px;
    color: ${props => props.theme.colors.white};
    text-shadow: 0px 0px 6px ${props => props.theme.colors.black};
  }
`