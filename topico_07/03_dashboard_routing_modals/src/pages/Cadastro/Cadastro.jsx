import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../utils/axios-client";

const Cadastro = () => {
  const [disableButton, setDisableButton] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const inputPassword = useRef(null);
  const confirmPassword = useRef(null);
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleName = (event) => {
    handleEnableButton();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    handleEnableButton();
    setEmail(event.target.value);
    setEmailInvalid(!emailPattern.test(event.target.value));
  };

  const handlePassword = (event) => {
    handleEnableButton();
    setPassword(event.target.value);
  };

  const handleEnableButton = () => {
    if (name !== "" && email !== "" && password !== "")
      setDisableButton(
        !(confirmPassword.current.value === inputPassword.current.value)
      );
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log({ name, email, password });
      const payload = {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword.current.value,
      };
      console.log({ payload });
      const response = await axiosClient.post("/users", payload);
      if (response?.status !== 201) throw new Error(response.data);
      console.log(response);
      const { data } = response;
      console.log({ data });
      alert("Usuário criado");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action="" method="get" onSubmit={onSubmit}>
      <h1 className="title">Novo Usuário</h1>
      <input
        type="text"
        placeholder="Nome de Login"
        name="name"
        onChange={handleName}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleEmail}
      />
      {emailInvalid && <pre>{`Campo Email é inválido!!!`}</pre>}
      <input
        type="password"
        placeholder="Senha"
        onChange={handlePassword}
        ref={inputPassword}
        name="password"
      />
      <input
        type="password"
        placeholder="Confirmar a senha"
        name="password_confirm"
        ref={confirmPassword}
        onChange={handleEnableButton}
      />
      <button
        className={disableButton ? "btn-disabled btn-block" : "btn btn-block"}
        disabled={disableButton ? "disabled" : ""}
      >
        Cadastrar
      </button>
      {/* <p className="message">
                Already Registered? <Link to="/login">Sign in</Link>
            </p> */}
    </form>
  );
};

export default Cadastro;
