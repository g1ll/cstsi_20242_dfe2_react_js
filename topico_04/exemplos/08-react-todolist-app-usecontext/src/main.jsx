import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { TodosListProvider } from './context/TodosListProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodosListProvider>
      <App />
    </TodosListProvider>
  </StrictMode>
);
