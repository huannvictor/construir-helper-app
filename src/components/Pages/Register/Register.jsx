import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import registerLog from "../../../data/registerLog.json";

import Button from "../../Buttons/Button";
import HelpButton from "../../Buttons/HelpButton";

import loginIcon from "../../assets/loginIcon.svg";

export default function Login() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    passwordConfirmed: "",
  });

  const [register, setRegister] = useState(registerLog);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setRegister(prevRegister => ({
      ...prevRegister.push({
        login: "victor",
        password: "senha",
        passwordConfirmed: "senha",
      }),
    }));
  }

  console.log(register);

  // function handleClick() {}

  return (
    <div className="loginArea">
      <img src={loginIcon} alt="login icon" className="loginIcon" />
      <h1>Cadastro</h1>

      <form action="">
        <input
          type="text"
          name="login"
          id="login"
          placeholder="login de acesso"
          onChange={handleChange}
          value={formData.login}
        />
        <input
          type="text"
          name="password"
          id="senha"
          placeholder="cadastre a senha"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="text"
          name="passwordConfirmed"
          id="senha"
          placeholder="confirmar senha"
          onChange={handleChange}
          value={formData.passwordConfirmed}
        />
        <Link to="/">
          <Button type="button" onSubmit={handleSubmit}>
            Cadastrar
          </Button>
        </Link>
      </form>

      <HelpButton message="o%20cadastro">estou com problema</HelpButton>
    </div>
  );
}
