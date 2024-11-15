import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const countRefInc = () => {
    countRef.current = countRef.current + 1;
    console.log({ click: countRef.current });
  };
  return (
    <>
      <h1>Exemplo useRef 2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} (useState)
        </button>
        <button onClick={countRefInc}>
          countRef is {countRef.current.valueOf()} (useRef)
        </button>
      </div>
      <p className="read-the-docs">
        Clique no botão e veja no console o valor do coutRef sendo alterado, no
        entanto não estamos gerando renderizações, por isso o valor do botão
        seque o mesmo até uma nova renderização ocorrer, como por exemplo quando
        clicamos no botão do count que usa um useState.
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
