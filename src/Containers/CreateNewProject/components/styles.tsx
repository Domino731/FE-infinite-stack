import styled from "styled-components";

export const StatusContainer = styled.div`
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
    height: calc(100% - 20px);
    top: 14px;
    width: 4px;
    background: ${(props: any) => props.theme.colors.white};
  }
`

export const StatusDot = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 3px solid ${(props: any) => props.theme.colors.black}
`