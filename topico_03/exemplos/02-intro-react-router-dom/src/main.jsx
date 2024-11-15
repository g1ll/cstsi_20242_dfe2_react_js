import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Ola from './components/Ola/Ola.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Rota Gerencianda no lado do Cliente com React Router!</div>,
  },
  {
    path: 'ola',
    element: <Ola />,
  },
  {
    path: 'ola/:name',
    element: <Ola />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
