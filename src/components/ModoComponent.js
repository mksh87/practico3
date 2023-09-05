import React, { useState } from "react";

const ModoComponent = ({ onModeSelect }) => {
  // eslint-disable-next-line
  const [selectedMode, setSelectedMode] = useState(""); // Estado para almacenar el modo seleccionado

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    onModeSelect(mode); // Llama a la función para notificar la selección del modo
  };

  return (
    <div>
      <h2>Selecciona el modo de juego:</h2>
      <button onClick={() => handleModeSelect("facil")}>Fácil</button>
      <button onClick={() => handleModeSelect("medio")}>Medio</button>
      <button onClick={() => handleModeSelect("dificil")}>Dificil</button>
      <button onClick={() => handleModeSelect("experto")}>Experto</button>
    </div>
  );
};

export default ModoComponent;
