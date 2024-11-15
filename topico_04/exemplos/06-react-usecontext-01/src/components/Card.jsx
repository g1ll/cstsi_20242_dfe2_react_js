import { useContext } from 'react';
import { ThemeContext } from '../App';

export function Card({ count, setCount }) {
  const theme = useContext(ThemeContext);
  return (
    <div className={`card ${theme}`}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}
