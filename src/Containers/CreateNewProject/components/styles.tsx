import styled from "styled-components";
import {DetailsIconInputProps, StatusContainerProps, StatusDotProps} from "./types";
import {ErrorMessage} from "../../../Components/Inputs/styles";

export const StatusContainer = styled.div<StatusContainerProps>`
  width: 30px;
  height: 648px;
  position: absolute;
  top: 71px;
  left: -64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  &::after {
    content: '';
    position: absolute;
    right: 8px;
    height: calc(${props => props.progressBarPercentage});
    top: 14px;
    width: 4px;
    background: ${(props: any) => props.theme.colors.green};
  }

  &::before {
    content: '';
    position: absolute;
    right: 8px;
    height: calc(100%);
    top: 14px;
    width: 4px;
    background: ${(props: any) => props.theme.colors.white};
  }
`

export const StatusDot = styled.div<StatusDotProps>`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) => props.theme.colors[props.icon ? 'green' : 'white']};
  border: ${props => !props.icon ? '2' : 0}px solid ${(props: any) => props.theme.colors.black};

  svg {
    width: 60%;
    height: 60%;
    fill: ${(props: any) => props.theme.colors.white};
    display: ${props => !props.icon && 'none'};
  }
`

export const DetailsIconInput = styled.div<DetailsIconInputProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid ${(props: any) => props.theme.colors['grey-input']};
  border-radius: ${(props: any) => props.theme.borderRadius.md};
  overflow: hidden;

  input {
    width: 100%;
    height: 100%;
    display: none;
  }

  label {
    display: block;
    padding: 6px 12px;
    cursor: pointer;
    height: 100%;
    transition: 0.2s;
  }

  svg {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);

    svg {
      fill: ${props => props.theme.colors.white};
      display: block;
    }
  }
`

export const FormikImageSelectErrorMessage = styled(ErrorMessage)`
  display: block;
  top: auto;
`