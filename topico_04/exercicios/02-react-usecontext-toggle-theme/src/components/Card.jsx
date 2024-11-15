import { useContext } from 'react';
import { ThemeState } from '../App';

export function Card({ count, setCount }) {
  const { theme, toggleTheme } = useContext(ThemeState);
  return (
    <div className={`card ${theme}`}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <br />
      <button onClick={() => toggleTheme()}>Trocar Tema</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}
