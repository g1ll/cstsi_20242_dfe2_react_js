import { useEffect, useState } from "react";
import {ThemeProvider} from "styled-components"
import Home from "./pages/Home";
import theme from "./styles/themes/default";

const getTheme = () => {
  console.log({theme:window.matchMedia("(prefers-color-scheme: light)").matches})
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

const detectThemeChanges = (callback) => {
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", ({ matches }) => callback(matches));
};

function App() {
  const [count, setCount] = useState(0);
  const [isThemeLight, setIsThemeLight] = useState(getTheme);

  useEffect(() => {
    detectThemeChanges(setIsThemeLight);
    console.log(isThemeLight)
  }, []);

  return (
    <ThemeProvider theme={isThemeLight?theme.light:theme.dark}>
        <Home count={count} setCount={setCount} isThemeLight={isThemeLight}/>
    </ThemeProvider>
    
  );
}

export default App;
