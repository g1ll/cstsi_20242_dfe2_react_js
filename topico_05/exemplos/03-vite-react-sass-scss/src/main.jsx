import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/scss/index.scss'
// import './styles/sass/index.sass'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
