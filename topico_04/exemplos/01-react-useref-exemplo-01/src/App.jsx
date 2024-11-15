import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log({ render: (countRef.current += 1) });
  return (
    <>
      <h1>Exemplo useRef 1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} (useState)
        </button>
      </div>
      <p className="read-the-docs">
        Clique no botão e veja no console o valor do coutRef contando a
        quantidade de renderizações.
      </p>
      <p className="read-the-docs">
        <a href="https://react.dev/reference/react/useRef" target="_blank">
          Documentação do useRef
        </a>
      </p>
    </>
  );
}

export default App;
