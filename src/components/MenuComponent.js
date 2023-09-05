import React from "react";

const MenuComponent = ({ onRestart }) => {
  const handleRestart = () => {
    // Lógica para reiniciar el juego
    onRestart();
  };

  return (
    <div>
      <button onClick={handleRestart}>Volver a la selección de modo</button>
    </div>
  );
};

export default MenuComponent;
