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
`;

export const LeftPanelAccordionList = styled.ul`
  padding-left: 43px;
  border-bottom: 1px solid ${props => props.};
  li:first-child::after {
    display: none !important;
  }
`


export const LeftPanelAccordionItem = styled.li`
  position: relative;
  font-size: 17px;
  font-weight: 500;
  padding: 6px 0;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors['black-100']};

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    width: 40px;
    height: 31px;
    left: -24px;
    top: -17px;
    border-left: 3px solid ${props => props.theme.colors.primary};
    border-bottom: 3px solid ${props => props.theme.colors.primary};
  }
`

export const LeftPanelAccordionIcon = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.color};
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 4px;
`