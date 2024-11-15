import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Ola from './components/Ola/Ola.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <div>Rota Gerencianda no lado do Cliente com React Router!</div>
        }
      />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
