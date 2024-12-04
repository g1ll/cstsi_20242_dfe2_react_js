/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { DefaultLogo, DefaultStyled, LogoutIcon } from "./layouts.styled";
import appLogo from "../assets/appLogo.svg";
import logoutIcon from "../assets/logout.svg";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";

export default function Default() {
  const { token, user } = useAuthContext();
  const navigate = useNavigate();
  if (!token) return <Navigate to="/login" />;
   
  // if (!token) navigate("/login");

  // useEffect(() => {
  //   if (!token) navigate("/login");
  //   console.log({ user });
  // }, [token]);

  const onLogout = () => {
    navigate("/logout");
  };

  return (
    <DefaultStyled>
        <header>
          <DefaultLogo>
            <Link href="/">
              <img src={appLogo} />
            </Link>
          </DefaultLogo>
          <div>Bem vindo, {user?.name} !</div>
          <LogoutIcon>
            <a href="#" onClick={onLogout} >
                <img src={logoutIcon}/>
            </a>
          </LogoutIcon>
        </header>
        <main>
          <aside>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/users">Users</Link>
            <Link to="/cadastro">Novo User</Link>
          </aside>
          <section>
            <Outlet />
          </section>
        </main>
    </DefaultStyled>
  );
}
