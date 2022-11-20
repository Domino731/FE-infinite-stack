import styled from "styled-components";

export const Introduction = styled.div`
  width: 50%;
  height: 50%;

  h1 {
    font-size: 100px;
    font-weight: 900;
    background-image: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387); /* Chrome 10-25, Safari 5.1-6 */
    background-image: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    padding: 30px 30px;
  }
`