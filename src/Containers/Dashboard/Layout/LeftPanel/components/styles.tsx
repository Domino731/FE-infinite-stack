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
  margin-bottom: 20px;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 4px 3px;

    &:hover p {
      color: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'blue-400']} !important;
    }
  }

  svg {
    fill: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'grey-700']};
    stroke: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'grey-700']};
    width: 1.1em;
    height: 1.1em;
  }

  p {
    padding-left: 0.9em;
    color: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'grey-700']};
    font-weight: 600;
  }
`