import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Ola from './components/Ola/Ola.jsx';
import './index.css';
import { Home } from './pages/Home.jsx';
import { Guest } from './layouts/Guest.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Guest/>}
    >
      <Route path="/" element={<Home/>} />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </Route>
  )
);
//Configuração Equivalente com objetos
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <div>
//         Exemplo de rotas aninhadas!
//         <hr />
//         <Outlet />
//       </div>
//     ),
//     children: [
//       {
//         path: '/',
//         element: <a href="/ola">Olá</a>,
//       },
//       {
//         path: '/ola',
//         element: <Ola />,
//       },
//       {
//         path: '/ola/:name',
//         element: <Ola />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
