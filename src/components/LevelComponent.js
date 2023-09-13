import React from "react";
import GameComponent from "./GameComponent";

function LevelComponent({ userName, pointsToWin, onSelectedMode }) {
  let jugadas = [];
  let mensajes = [];

  switch (onSelectedMode) {
    case "facil":
      jugadas = ["piedra", "papel", "tijeras"];
      mensajes = [
        ["", "envuelve", "rompe"],
        ["envuelve", "", "corta"],
        ["rompe", "corta", ""],
      ];
      break;
    case "medio":
      jugadas = ["piedra", "papel", "tijeras", "spock", "lagarto"];
      mensajes = [
        ["", "envuelve", "rompe", "vaporiza", "aplasta"],
        ["envuelve", "", "corta", "desautoriza", "come"],
        ["rompe", "corta", "", "vaporiza", "decapita"],
        ["vaporiza", "desautoriza", "vaporiza", "", "envenena"],
        ["aplasta", "come", "decapita", "envenena", ""],
      ];
      break;
    case "dificil":
      jugadas = [
        "piedra",
        "papel",
        "fuego",
        "aire",
        "tijeras",
        "agua",
        "esponja",
      ];
      mensajes = [
        ["", "envuelve", "apaga", "erosiona", "aplasta", "erosiona", "aplasta"],
        ["envuelve", "", "quema", "abanica", "corta", "flota en", "moja"],
        ["apaga", "quema", "", "apaga", "derrite", "extingue", "quema"],
        ["erosiona", "abanica", "apaga", "", "corta", "evapora", "absorbe"],
        ["aplasta", "corta", "derrite", "corta", "", "oxida", "corta"],
        ["erosiona", "flota en", "extingue", "evapora", "oxida", "", "absorbe"],
        ["aplasta", "moja", "quema", "absorbe", "corta", "absorbe", ""],
      ];
      break;
    case "experto":
      jugadas = [
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
      mensajes = [
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
      break;
    default:
      alert("No se ha elegido un modo");
      break;
  }

  return (
    <GameComponent
      userName={userName}
      pointsToWin={pointsToWin}
      jugadas={jugadas}
      mensajes={mensajes}
    />
  );
}

export default LevelComponent;
