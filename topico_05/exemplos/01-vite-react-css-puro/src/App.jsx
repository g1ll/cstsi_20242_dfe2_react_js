import { useState } from 'react'
import reactLogo from './assets/react.svg'//relativo ao script (App.jsx)
import viteLogo from '/vite.svg'
import cssLogo from '/img/css3.png'// public/..
import '../public/css/style.css' //relativo (../../)
// import '/css/style.css' //absoluto
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
          <img src={cssLogo} className="logo css_logo" alt="CSS logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='dev'></div>
    </>
  )
}

export default App
