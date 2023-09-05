import React from "react";
import GameComponent from "./GameComponent";

const MedioComponent = ({ userName, pointsToWin }) => {
  const jugadas = ["piedra", "papel", "tijeras", "spock", "lagarto"];
  const mensajes = [
    ["", "envuelve", "rompe", "vaporiza", "aplasta"],
    ["envuelve", "", "corta", "desautoriza", "come"],
    ["rompe", "corta", "", "vaporiza", "decapita"],
    ["vaporiza", "desautoriza", "vaporiza", "", "envenena"],
    ["aplasta", "come", "decapita", "envenena", ""],
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

export default MedioComponent;
