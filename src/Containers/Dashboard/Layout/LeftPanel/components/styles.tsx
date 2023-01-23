import styled from "styled-components";
import {LeftPanelListItemProps} from "../types";

export const LeftPanelContainer = styled.section`
  width: 340px;
  height: 100%;
  background: red;
`

export const LeftPanelList = styled.ul`

`

export const LeftPanelListItem = styled.li<LeftPanelListItemProps>`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 4px;

  &:hover {
    div {
      box-shadow: 2px 2px ${(props: any) => props.theme.colors[props.isActive ? 'transparent' : 'primary']} inset, -2px -2px ${(props: any) => props.theme.colors[props.isActive ? 'transparent' : 'primary']} inset !important;
    }
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 4px 3px;

    &:hover p {
      color: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'blue-400']} !important;
    }
  }

  div {
    border-radius: 4px;
    padding: 10px;
    background-color: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'transparent']};
  }

  svg {
    fill: ${(props: any) => props.theme.colors[props.isActive ? 'white' : 'grey-700']};
    stroke: ${(props: any) => props.theme.colors[props.isActive ? 'white' : 'grey-700']};
    width: 1.1em;
    height: 1.1em;
  }

  p {
    padding-left: 0.9em;
    color: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'grey-700']};
    font-weight: 600;
  }
`