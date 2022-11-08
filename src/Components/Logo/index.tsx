import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  font-weight: 700;
  font-size: 57px;
  color: ${props => props.theme.colors.white['50']};
  padding-top: 15px;
  padding-left: 30px;
`;

export const Logo = React.memo(() => <Wrapper>Infinite_Stack</Wrapper>)