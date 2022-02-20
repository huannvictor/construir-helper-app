import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./components/Pages/Login/Login";
import SolicitationDestiny from "./components/Pages/SolicitationDestiny";
import SolicitationItems from "./components/Pages/SolicitationItems";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="destino" element={<SolicitationDestiny />} />
      <Route path="itens" element={<SolicitationItems />} />
    </Routes>
  );
}
