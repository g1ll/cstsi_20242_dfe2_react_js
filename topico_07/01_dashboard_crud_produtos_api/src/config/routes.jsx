import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Guest from "../layouts/Guest";
import Home from "../pages/Home/Home";
import Show from "../pages/Show/Show";
import Dash from "../layouts/Dash";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
// import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Logout from "../pages/Logout/Logout";
import Produtos from "../pages/Dashboard/Produtos/Produtos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Guest />}>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Show />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<Dash />}>
        <Route path="/dashboard" element={<Produtos/>} />
        <Route path="/users" element={<Users />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </>
  )
);

export default router;
