import React from "react";

import "./style.scss";

export default function HelpButton(props) {
  return (
    <div className="redButton">
      <a
        href={`https://wa.me/5583999802317?text=Estou%20com%20problema%20com%20${props.message}`}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    </div>
  );
}
