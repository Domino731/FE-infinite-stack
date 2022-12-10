import styled from "styled-components";
import {TextareaComponentProps} from "./types";
import {ErrorMessage} from "../styles";

export const TextareaComponent = styled.textarea<TextareaComponentProps>`
  outline: none;
  font-size: 17px;
  padding: 9px 8px;
  border: ${props => props.isInvalid ? 2 : 1}px solid ${props => props.isInvalid ? props.theme.colors.red : '#9ca3af'};
  border-radius: 4px;
  height: ${props => props.height};
  resize: none;
  font-family: Roboto, sans-serif;
  width: 100%;

  &[type=password] {
    font-size: 22px;
    color: ${props => props.theme.colors['grey-700']}
  }

  &:focus {
    border: 2px solid #2563eb;
  }
;
`

export const TextareaErrorMessage = styled(ErrorMessage)`
  position: static;
  display: block;
  padding-top: 0;
`