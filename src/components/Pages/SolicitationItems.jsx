import React from "react";

import Header from "../Header/Header";
import Button from "../Buttons/Button";
import AddButton from "../Buttons/AddButton";
import HelpButton from "../Buttons/HelpButton";

import unitList from "../../data/unitList.json";
import itemList from "../../data/itemsList.json";
import segmentList from "../../data/segmentList.json"

export default function SolicitationItems() {
  const OptionsUnitList = unitList.map(unit => {
    return <option>{unit.unit}</option>;
  });

  const OptionsItemList = itemList.map(item => {
    return <option>{item.item}</option>;
  });

  const OptionsSegmentList = segmentList.map(segment => {
    return <option>{segment.segment}</option>
  })

  return (
    <main>
      <Header />

      <div className="formContainer">
        <form action="">
          <label htmlFor="amount">Quantidade:</label>
          <input type="number" name="amount" id="amount" />

          <label htmlFor="unit">Unidade:</label>
          <select name="unit" id="unit">
            {OptionsUnitList}
          </select>

          <label htmlFor="item">Item:</label>
          <select name="item" id="item">
            {OptionsItemList}
          </select>

          <label htmlFor="segment">Segmento:</label>
          <select name="segment" id="segment">
            {OptionsSegmentList}
          </select>
        </form>

        <div className="buttonHolder">
          <AddButton>adicionar à solicitação</AddButton>
          <HelpButton message="inclusão%20de%20itens">estou com problema</HelpButton>
          <Button>finalizar solicitação</Button>
        </div>
      </div>
    </main>
  );
}
