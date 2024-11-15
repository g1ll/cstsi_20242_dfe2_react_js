import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const renderizou = useRef(1);
  if (count) renderizou.current = renderizou.current + 1;
  console.log(renderizou.current);

  return (
    <>
      <h1>Exemplo useRef 3</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} (useState) (renderiz
          {renderizou.current.valueOf() > 1 ? 'ado ' : 'ou '}
          {renderizou.current.valueOf()} vez
          {renderizou.current.valueOf() > 1 ? 'es' : ''})
        </button>
        <p className="read-the-docs">
          Neste exemplo podemos ver no console, e no próprio botão, quantas
          vezes o componente é renderizado através do uso de um contador com o
          useRef.
        </p>
      </div>
      <p className="read-the-docs">
        <a href="https://react.dev/reference/react/useRef" target="_blank">
          Documentação do useRef
        </a>
      </p>
    </>
  );
}

export default App;
