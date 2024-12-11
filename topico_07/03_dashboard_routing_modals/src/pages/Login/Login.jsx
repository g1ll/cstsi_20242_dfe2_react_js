import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useRef } from "react";
import axiosClient from "../../utils/axios-client";
import { LoginStyled } from "./login.styled";

export default function Login() {
  const { setToken, setUser } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log({ payload });
    try {
      const response = await axiosClient.post("/login", payload);
      if (response?.status !== 200) throw new Error(response.data);
      console.log(response);
      const { data } = response;
      console.log({ data });
      alert("Usuário logado");
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('CURRENT_USER',JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginStyled>
      <div className="form">
        <form action="" method="get" onSubmit={onSubmit}>
          <h1> Administrar Site</h1>
          <input ref={emailRef} type="text" placeholder="Email" name="email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          {/* <p>
            Not Registered? <Link to="/signup">Create an account</Link>
          </p> */}
        </form>
      </div>
    </LoginStyled>
  );
}
