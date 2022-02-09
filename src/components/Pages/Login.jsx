import React from "react";

import Button from "../Buttons/Button";
import HelpButton from "../Buttons/HelpButton";

import loginIcon from "../assets/loginIcon.svg";

export default function Login() {
  return (
    <div className="loginArea">
      <img src={loginIcon} alt="login icon" className="loginIcon" />
      <h1>Retirada de Material</h1>
      <input type="text" name="login" id="login" placeholder="login" />
      <input type="text" name="senha" id="senha" placeholder="senha" />
      <Button type="button">acessar</Button>
      <HelpButton message="o%20login">estou com problema</HelpButton>

    </div>
  );
}
