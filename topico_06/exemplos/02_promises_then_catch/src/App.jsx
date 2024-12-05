import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const promessa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Promessa cumprida!!!')
    },10000)
  
    setTimeout(() => {//2 -> 5 segundos depois
      reject('Promessa rejeitada!!!') // lançando um erro
    },5000);
  })

  useEffect(() => {
    const myPromise = promessa
      .then(data=>console.log(data))
      .catch(error=>console.error(error)) //3 -> capturando o erro
      .finally(()=>console.log('Finalizado!!!'))//4 -> settled (fulfilled or rejected)

    console.log("Minha promessa:",myPromise)//1. Promise {<pending>}

  },[])

  return (
    <>
      <div>
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
    </>
  )
}

export default App
