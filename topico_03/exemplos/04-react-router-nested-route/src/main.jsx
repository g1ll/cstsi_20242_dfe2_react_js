import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Ola from './components/Ola/Ola.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        Exemplo de rotas aninhadas!
        <hr />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <a href="/ola">Olá</a>,
      },
      {
        path: '/ola',
        element: <Ola />,
      },
      {
        path: '/ola/:name',
        element: <Ola />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
