import styled from "styled-components";

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 1px ;
`

export const InputComponent = styled.input`
  outline: none;
  font-size: 17px;
  font-weight: 500;
  padding: 9px 8px;
  border: 1px solid #9ca3af;
  border-radius: 4px;
  height: 40px;
  &:focus {
    border:2px solid #2563eb;
  };
`