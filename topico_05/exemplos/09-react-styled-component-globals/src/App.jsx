import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cssLogo from "/img/css3.png";
import DevIllustration from "./components/DevIllustration/DevIllustration";
import { Button, CSS3Logo, Logo, Main, ReactLogo, Title } from "./App.styles";

const getTheme = () => {
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
  }, []);

  return (
    <Main>
      <div>
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          target="_blank"
        >
          <CSS3Logo src={cssLogo} $theme={!isThemeLight && 'dark'}/>
        </a>
        <a href="https://vite.dev" target="_blank">
          <Logo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo src={reactLogo} alt="React logo" />
        </a>
      </div>
      <Title>Vite + React</Title>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     <DevIllustration isThemeLight={isThemeLight}/>
    </Main>
  );
}

export default App;
