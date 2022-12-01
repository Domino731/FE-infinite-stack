import styled from "styled-components";
import {LeftPanelListItemProps} from "../types";

export const LeftPanelContainer = styled.section`
  width: 340px;
  height: 100%;
  background: red;
`

export const LeftPanelList = styled.ul`
  margin-bottom: 64px;
`

export const LeftPanelListItem = styled.li<LeftPanelListItemProps>`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 22px;

  svg {
    fill: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'grey-700']};
    width: 1.1em;
    height: 1.1em;
  }

  p {
    padding-left: 0.7em;
    color: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'grey-700']};
    font-weight: 600;
  }
`