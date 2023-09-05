import React from "react";
import GameComponent from "./GameComponent";

const ExpertoComponent = ({ userName, pointsToWin }) => {
  const jugadas = [
    "piedra",
    "papel",
    "fuego",
    "aire",
    "tijeras",
    "agua",
    "humano",
    "pistola",
    "esponja",
  ];
  const mensajes = [
    [
      "",
      "envuelve",
      "apaga",
      "erosiona",
      "aplasta",
      "erosiona",
      "aplasta",
      "dispara",
      "aplasta",
    ],
    [
      "envuelve",
      "",
      "quema",
      "abanica",
      "corta",
      "flota en",
      "escribe",
      "desautoriza",
      "moja",
    ],
    [
      "apaga",
      "quema",
      "",
      "apaga",
      "derrite",
      "extingue",
      "quema",
      "dispara",
      "quema",
    ],
    [
      "erosiona",
      "abanica",
      "apaga",
      "",
      "corta",
      "evapora",
      "respira",
      "oxida",
      "absorbe",
    ],
    [
      "aplasta",
      "corta",
      "derrite",
      "corta",
      "",
      "oxida",
      "corta",
      "supera",
      "corta",
    ],
    [
      "erosiona",
      "flota en",
      "extingue",
      "evapora",
      "oxida",
      "",
      "bebe",
      "oxida",
      "absorbe",
    ],
    [
      "aplasta",
      "escribe",
      "quema",
      "respira",
      "corta",
      "bebe",
      "",
      "dispara",
      "limpia con",
    ],
    [
      "dispara",
      "desautoriza",
      "dispara",
      "oxida",
      "supera",
      "oxida",
      "dispara",
      "",
      "limpia",
    ],
    [
      "aplasta",
      "moja",
      "quema",
      "absorbe",
      "corta",
      "absorbe",
      "limpia con",
      "limpia",
      "",
    ],
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

export default ExpertoComponent;
