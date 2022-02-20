import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../Buttons/Button";
import HelpButton from "../../Buttons/HelpButton";

import loginIcon from "../../assets/loginIcon.svg";

import "./style.scss";

export default function Login() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  console.log(formData);

  return (
    <div className="loginArea">
      <img src={loginIcon} alt="login icon" className="loginIcon" />
      <h1>Retirada de Material</h1>

      <form action="">
        <input
          type="text"
          name="login"
          id="login"
          placeholder="login"
          onChange={handleChange}
          value={formData.login}
        />
        <input
          type="text"
          name="password"
          id="senha"
          placeholder="senha"
          onChange={handleChange}
          value={formData.password}
        />
        <Link to="/destino">
          <Button type="button" onSubmit={handleSubmit}>
            acessar
          </Button>
        </Link>
      </form>

      <HelpButton message="o%20login">estou com problema</HelpButton>
    </div>
  );
}
