/* eslint-disable no-undef */
import { createGlobalStyle } from "styled-components";
import bodyImage from "../assets/imgs/front-end-wallpapers.jpg";

export const GlobalStyle = createGlobalStyle`
  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
  &:hover {
    color: #535bf2;
  }
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  background-image: url(${bodyImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-color:  #242424;

}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  body{
    background-color: #dceded;
  }
  a:hover {
    color: #747bff;
  }
}

@media screen and (min-width:1280px) {
  body{
    background-size: 50%;
    background-repeat: repeat-x;
  }
}
`;
