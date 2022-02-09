import React from 'react';

import "./style.scss"

export default function HelpButton(props) {
  return(
    <div className="addButton">
      <a
        href="https://wa.me/5583999802317?text=Estou%20com%20problema%20com%20o%20login"
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    </div>
  )
}