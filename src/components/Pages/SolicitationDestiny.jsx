import React from "react";

import Header from "../Header/Header";
import Button from "../Buttons/Button";
import HelpButton from "../Buttons/HelpButton";

import citiesList from "../../data/citiesList.json";

export default function SolicitationDestiny() {
  const optionsCitiesList = citiesList.map(city => {
    let k = Math.random();
    return (
      <option key={k}>
        {city.destination}
      </option>);
  });

  return (
    <main>
      <Header />

      <div className="formContainer">
        <form action="">
          <label htmlFor="destination">
            Destino: <span>(ultima cidade da rota)</span>
          </label>
          <select name="destination" id="destination">
            {optionsCitiesList}
          </select>
          <label htmlFor="date">Data da retirada</label>
          <input type="date" name="date" id="date" />
        </form>

        <div className="buttonHolder">
          <Button>seguir com a solicitação</Button>
          <HelpButton message="a%20seleção%20do%20destino">
            estou com problema
          </HelpButton>
        </div>
      </div>
    </main>
  );
}
