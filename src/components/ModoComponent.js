import React, { useState } from "react";
import ppt3 from "../img/ppt3.svg";
import ppt5 from "../img/ppt5.svg";
import ppt7 from "../img/ppt7.svg";
import ppt9 from "../img/ppt9.svg";

const ModoComponent = ({ onModeSelect }) => {
  // eslint-disable-next-line
  const [selectedMode, setSelectedMode] = useState(""); // Estado para almacenar el modo seleccionado

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    onModeSelect(mode); // Llama a la función para notificar la selección del modo
  };

  return (
    <>
      <h2>Selecciona el modo de juego:</h2>
      <div className="mode-button-container">
        <a
          href="#"
          className="game-mode-link"
          onClick={() => handleModeSelect("facil")}
        >
          <img src={ppt3} alt="Fácil" />
          Fácil
        </a>
        <a
          href="#"
          className="game-mode-link"
          onClick={() => handleModeSelect("medio")}
        >
          <img src={ppt5} alt="Medio" />
          Medio
        </a>
        <a
          href="#"
          className="game-mode-link"
          onClick={() => handleModeSelect("dificil")}
        >
          <img src={ppt7} alt="Difícil" />
          Difícil
        </a>
        <a
          href="#"
          className="game-mode-link"
          onClick={() => handleModeSelect("experto")}
        >
          <img src={ppt9} alt="Experto" />
          Experto
        </a>
      </div>
    </>
  );
};

export default ModoComponent;
