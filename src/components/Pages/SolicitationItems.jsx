import React from "react";
// import { useState } from "react";

import Header from "../Header/Header";
import Button from "../Buttons/Button";
import AddButton from "../Buttons/AddButton";
import HelpButton from "../Buttons/HelpButton";

import unitList from "../../data/unitList.json";
import itemList from "../../data/itemsList.json";
import segmentList from "../../data/segmentList.json";

export default function SolicitationItems() {
  // const [formData, setFormData] = useState({
  //   amount: 0,
  //   unit: "",
  //   item: "",
  //   segment: "",
  // });

  function handleClick(event) {
    console.log(event.target);
    console.log(OptionsSegmentList);
    // const { name, value, type } = event.target;
  }

  const OptionsUnitList = unitList.map(unit => {
    let k = Math.random();
    return <option key={k}>{unit.unit}</option>;
  });

  const OptionsItemList = itemList.map(item => {
    let k = Math.random();
    return <option key={k}>{item.item}</option>;
  });

  const OptionsSegmentList = segmentList.map(segment => {
    let k = Math.random();
    return <option key={k}>{segment.segment}</option>;
  });

  return (
    <main>
      <Header />

      <div className="formContainer">
        <form action="">
          <label htmlFor="amount">Quantidade:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={handleClick}
          />

          <label htmlFor="unit">Unidade:</label>
          <select name="unit" id="unit" onChange={handleClick}>
            {OptionsUnitList}
          </select>

          <label htmlFor="item">Item:</label>
          <select name="item" id="item" onChange={handleClick}>
            {OptionsItemList}
          </select>

          <label htmlFor="segment">Segmento:</label>
          <select name="segment" id="segment" onChange={handleClick}>
            {OptionsSegmentList}
          </select>
        </form>

        <div className="buttonHolder">
          <AddButton>adicionar à solicitação</AddButton>
          <HelpButton message="inclusão%20de%20itens">
            estou com problema
          </HelpButton>
          <Button>finalizar solicitação</Button>
        </div>
      </div>
    </main>
  );
}
