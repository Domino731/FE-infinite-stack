import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.gradients.flare} bottom no-repeat;
  background-size: 100% 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const IntroductionIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${(props: any) => props.theme.spacing[20]} 0;
  border-bottom: 1px solid ${(props: any) => props.theme.colors['grey-400']};

  &:hover {
    svg {
      transform: scale(110%);
      fill: ${(props: any) => props.theme.colors.secondary} !important;
    }
  }

  svg {
    fill: ${(props: any) => props.theme.colors['grey-400']} !important;
    width: 120px;
    height: 120px;
    transition: 0.3s;
  }
`

export const IntroductionTitle = styled.h1`
  font-size: 204px;
  padding-bottom: 90px;
  letter-spacing: 3px;
  font-weight: bold;
`

export const IntroductionLinkWrapper = styled.div`
  padding: ${(props: any) => props.theme.spacing[10]};
  width: 260px;

  a {
    color: ${(props: any) => props.theme.colors.black};
  }
`