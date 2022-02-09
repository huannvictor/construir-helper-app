import React from "react";

import Button from "../Buttons/Button";

import loginIcon from "../assets/loginIcon.svg";

export default function Login() {
  return (
    <div className="loginArea">
      <img src={loginIcon} alt="login icon" className="loginIcon" />
      <h1>Retirada de Material</h1>
      <input type="text" name="login" id="login" placeholder="login" />
      <input type="text" name="senha" id="senha" placeholder="senha" />
      <Button type="button">acessar</Button>
      <a
        href="https://wa.me/5583999802317?text=Estou%20com%20problema%20com%20o%20login"
        target="_blank"
        rel="noreferrer"
      >
        não consigo acessar
      </a>
    </div>
  );
}
