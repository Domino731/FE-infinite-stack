import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${(props: any) => props.theme.colors['blue']};
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: ${(props: any) => props.theme.colors['blue-600']};
  }
`