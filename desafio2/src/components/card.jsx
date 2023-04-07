import React from "react";

import local from "../images/Path.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image-land">
        <img src={props.item.imagem} alt="image land" className="image--" />
      </div>
      <div className="descriptions">
        <p className="pais">
          <img src={local} className="local" /> {props.item.pais}
        </p>
        <h2>{props.item.nome}</h2>
        <p className="day">{props.item.data}</p>
        <p>{props.item.descricao}</p>
      </div>
    </div>
  );
}
