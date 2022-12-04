import styled from "styled-components";
import {SelectIconWrapperProps} from "./types";

export const SelectIconWrapper = styled.div<SelectIconWrapperProps>`
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 0.8em;
  font-size: 20px;

  svg {
    transition: 0.2s;
    transform: rotate(${(props: any) => props.isActive ? '180' : '0'}deg);
    width: 1.1em;
    height: 1.1em;
    fill: ${(props: any) => props.theme.colors[props.isActive ? 'primary' : 'grey-600']} !important;
  }
`

export const SelectOptionsList = styled.ul`
  li:last-of-type button {
    border-bottom: none !important;
  }
`

export const SelectInputArea = styled.div`
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  width: 100%;
  height: 40px;
  position: absolute;

  &:hover svg {
    fill: ${(props: any) => props.theme.colors.primary} !important;
  }
`

export const OptionButton = styled.button`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props: any) => props.theme.colors['grey-input']};
  font-size: 18px;
  padding: 0.3em 0.8em;
  text-align: left;
  color: ${(props: any) => props.theme.colors['grey-700']}
`