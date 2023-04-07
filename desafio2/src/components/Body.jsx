import React from "react";
import Fill from "../images/Fill213.png";
import "../components/body.css";
import Card from "./card";
import dados from "../components/dados";
export default function Body() {
  const cards = dados.map((item) => {
    return <Card item={item} />;
  });

  return (
    <div className="container">
      <div className="retangulo">
        <img src={Fill} alt="fill" className="fill-image" /> www.asteroide.com
      </div>
      {cards}
    </div>
  );
}
