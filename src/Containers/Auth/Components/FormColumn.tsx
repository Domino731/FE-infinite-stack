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
  background-image: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387); /* Chrome 10-25, Safari 5.1-6 */
  background-image: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  //background-size: 400% 400%;
    // animation: ${gradient} 5s ease infinite;
`

