/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { DefaultLogo, DefaultStyled, LogoutIcon } from "./layouts.styled";
import appLogo from "../assets/appLogo.svg";
import LogoutLogo from "../components/Logos/LogoutLogo";

export default function Dash() {
  const { token, user, verifyLogin } = useAuthContext();
  const intervalLogin = useRef(null);
  console.log({ token, user });
  const navigate = useNavigate();
  
  useEffect(() => {
    // if (!token) navigate("/login");
    console.log({ user });
    intervalLogin?.current && clearInterval(intervalLogin.current);
    intervalLogin.current = setInterval(async ()=>{
      console.log("Verificando login...");  
       verifyLogin().then( isLogged => !isLogged && navigate("/login"));
    },10000)
    return () => {
      clearInterval(intervalLogin.current);
    }
  }, [token]);

  const onLogout = () => {
    navigate("/logout");
  };

  if (!token) return <Navigate to="/login" />;

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
                <LogoutLogo />
            </a>
          </LogoutIcon>
        </header>
        <main>
          <aside>
            <Link to="/dashboard">Produtos</Link>
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
