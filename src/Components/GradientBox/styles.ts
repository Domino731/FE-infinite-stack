import styled from "styled-components";

export const GradientBoxWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: ${props => props.theme.colors['white']};
  box-shadow: 10px 10px 40px #c9c9c9, -10px -10px 40px #c9c9c9;
  border-radius: ${props => props.theme.borderRadius[10]};
`
export const GradientBoxContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius[10]};
  padding: ${props => props.theme.spacing[12]};

  &:hover {
    & ~ div {
      transform: rotate(-13deg);
    }
  }
`;

export const GradientBoxShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.gradients.flare};
  border-radius: inherit;
  transform: rotate(-8deg);
  transition: 0.2s;
  z-index: 1;
`