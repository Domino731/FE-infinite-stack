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

export const IntroductionIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${(props: any) => props.theme.spacing[20]} 0;
  border-bottom: 1px solid ${(props: any) => props.theme.colors['grey-400']};

  svg {
    fill: ${(props: any) => props.theme.colors['grey-400']} !important;
    width: 120px;
    height: 120px;
  }
`