import styled from "styled-components";

export const GradientBoxContent = styled.div`
  position: relative;
  z-index: 2;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius[10]};
  box-shadow: 0 0 16px #877d7d;

  &::after {
    top: 0;
    left: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.gradients.flare};
    border-radius: inherit;
    transform: rotate(-8deg);
    transition: 0.2s;
    z-index: -1;
  }

  &:hover::after {
    transform: rotate(-13deg);
  }
`;
