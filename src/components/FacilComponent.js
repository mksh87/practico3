import React from "react";
import GameComponent from "./GameComponent";

const FacilComponent = ({ userName, pointsToWin }) => {
  const jugadas = ["piedra", "papel", "tijeras"];
  const mensajes = [
    ["", "envuelve", "rompe"],
    ["envuelve", "", "corta"],
    ["rompe", "corta", ""],
  ];

  return (
    <GameComponent
      userName={userName}
      pointsToWin={pointsToWin}
      jugadas={jugadas}
      mensajes={mensajes}
    />
  );
};

export default FacilComponent;
