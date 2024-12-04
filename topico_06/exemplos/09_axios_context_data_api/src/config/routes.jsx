import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Guest from '../layouts/Guest'
import Home from '../pages/Home/Home'
import Show from '../pages/Show/Show';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Guest/>}>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Show />} />
      </Route>
    )
  );

  export default router;