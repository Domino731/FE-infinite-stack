import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";

const Text = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-weight: 500;
  letter-spacing: 0.010rem;
`

interface LinkProps {
    to: string;
    label: string;
}

const Link = ({to, label}: LinkProps) => {
    return <RouterLink to={to}><Text>{label}</Text></RouterLink>
}

export default Link;