import React, { useState } from "react";
import ppt3 from "../img/ppt3.svg";
import ppt5 from "../img/ppt5.svg";
import ppt7 from "../img/ppt7.svg";
import ppt9 from "../img/ppt9.svg";

function ModoComponent({ userName, onModeSelect }) {
  // eslint-disable-next-line
  const [selectedMode, setSelectedMode] = useState(""); // Estado para almacenar el modo seleccionado

  function handleModeSelect(mode) {
    setSelectedMode(mode);
    onModeSelect(mode); // Llama a la función para notificar la selección del modo
  }

  return (
    <div className="component">
      <h1>¡Bienvenido..... {userName}!</h1>
      <h3>¿Qué tan loco estás?</h3>
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
      <h4>
        Te explico. PPT tiene varias dificultades, cada una permite elegir entre
        distinta cantidad de opciones: desde el clásico PPT de tres hasta la
        versión manija de nueve. Hay de 25 opciones, y hasta existe uno de 101
        opciones!! Pero ya me dio pereza programar tanto.
      </h4>
      <h4>
        Puedes ver la descripción de todas las versiones originales haciendo
        clic{" "}
        <a href="https://www.umop.com/rps.htm" target="_blank">
          AQUI
        </a>
      </h4>
    </div>
  );
}

export default ModoComponent;
