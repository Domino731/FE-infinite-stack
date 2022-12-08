import styled from "styled-components";
import uploadIcon from "../../../assets/images/project/upload.png";

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
  border-radius: 6px;
  background: ${(props: any) => props.theme.colors.white};
  border: 2px solid ${(props: any) => props.theme.colors.black}
`

export const DetailsIconInput = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid ${(props: any) => props.theme.colors['grey-input']};
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

    &::after {
      content: "";
      height: 100%;
      width: 100%;
      background-image: url(${uploadIcon});
      background-repeat: no-repeat;
      background-size: 50% 50%;
      top: 50%;
      left: 50%;
      transform: translate(25%, 25%);
      display: none;
    }

    &:hover {
      &::after {
        display: block;
      }
    }
  }
`