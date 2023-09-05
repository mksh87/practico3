import React, { useState } from "react";

const ModoComponent = ({ onModeSelect }) => {
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
    </div>
  );
};

export default ModoComponent;
