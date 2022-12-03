import styled from "styled-components";

export const StatusContainer = styled.div`
  width: 3px;
  height: 648px;
  position: absolute;
  background: ${(props: any) => props.theme.colors.white};
  top: 71px;
  left: -64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StatusDot = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  transform: translateX(-9px);
  border: 3px solid ${(props: any) => props.theme.colors.black}
`