import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";

const Text = styled.p`
  color: ${props => props.theme.colors.black};
  font-weight: 500;
  letter-spacing: 0.010rem;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    display: block;
    width: 100%;
    height: 7px;
    background: ${props => props.theme.colors.aqua};
  }
`

interface LinkProps {
    to: string;
    label: string;
}

const Link = ({to, label}: LinkProps) => {
    return <RouterLink to={to}><Text>{label}</Text></RouterLink>
}

export default Link;