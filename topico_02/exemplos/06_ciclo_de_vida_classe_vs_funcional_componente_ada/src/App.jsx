/* eslint-disable no-unused-vars */
import './App.css';
import AdaClass from './AdaClass.jsx';
import Ada from './Ada';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && <AdaClass />}
      {/* {show && <Ada />} */}
      <a href="#" onClick={() => setShow(!show)}>
        {show ? 'Remover' : 'Mostrar'}
      </a>
    </>
  );
}

export default App;
