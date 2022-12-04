import styled from "styled-components";
import {TextareaComponentProps} from "./types";

export const TextareaComponent = styled.textarea<TextareaComponentProps>`
  outline: none;
  font-size: 17px;
  font-weight: 500;
  padding: 9px 8px;
  border: ${props => props.isInvalid ? 2 : 1}px solid ${props => props.isInvalid ? props.theme.colors.red : '#9ca3af'};
  border-radius: 4px;
  height: 40px;
  resize: none;

  &[type=password] {
    font-size: 22px;
    color: ${props => props.theme.colors['grey-700']}
  }

  &:focus {
    border: 2px solid #2563eb;
  }
;
`