import React from "react";

import "./style.scss"

import headerIcon from "../assets/headerIcon.svg";
import headerMenuIcon from "../assets/menuIcon.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={headerIcon} alt="header icon" className="headerIcon" />
      <h1 className="headerTitle">Retirada de Material</h1>
      <a href="https://www" className="headerMenu">
        <img
          src={headerMenuIcon}
          alt="menu icon ícone para abrir o menu"
          className="headerMenuIcon"
        />
      </a>
    </header>
  );
}
