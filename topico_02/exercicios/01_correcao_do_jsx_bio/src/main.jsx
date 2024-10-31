import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'  //JSX com erros
import App from './AppFix.jsx' //Correção
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
