import styled, {keyframes} from "styled-components";
// utils
const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const FormColumn = styled.div`
 width: 50%;
 height: 100%;
 background-image: linear-gradient(135deg, #00DBDE 0%, #FC00FF 100%);
 background-size: 400% 400%;
 animation: ${gradient} 15s ease infinite;
`

