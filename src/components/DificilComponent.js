import React from "react";
import GameComponent from "./GameComponent";

const DificilComponent = ({ userName, pointsToWin }) => {
  const jugadas = [
    "piedra",
    "papel",
    "fuego",
    "aire",
    "tijeras",
    "agua",
    "esponja",
  ];
  const mensajes = [
    ["", "envuelve", "apaga", "erosiona", "aplasta", "erosiona", "aplasta"],
    ["envuelve", "", "quema", "abanica", "corta", "flota en", "moja"],
    ["apaga", "quema", "", "apaga", "derrite", "extingue", "quema"],
    ["erosiona", "abanica", "apaga", "", "corta", "evapora", "absorbe"],
    ["aplasta", "corta", "derrite", "corta", "", "oxida", "corta"],
    ["erosiona", "flota en", "extingue", "evapora", "oxida", "", "absorbe"],
    ["aplasta", "moja", "quema", "absorbe", "corta", "absorbe", ""],
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

export default DificilComponent;
