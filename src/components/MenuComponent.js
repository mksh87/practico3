import React from "react";
import ShareButton from "./ShareComponent";

const MenuComponent = ({ onChangeMode, onChangeName, onChangePoints }) => {
  const handleChangeMode = () => {
    onChangeMode();
  };
  const handleChangeName = () => {
    onChangeName();
  };
  const handleChangePoints = () => {
    onChangePoints();
  };

  return (
    <div>
      {/* <a href="https://mksh87.github.io/sobre-mi"> &#127968; </a> */}
      <button onClick={handleChangeName}>Cambiar nombre</button>
      <button onClick={handleChangeMode}>Selección de modo</button>
      <button onClick={handleChangePoints}>Reiniciar partida</button>
      <ShareButton />
    </div>
  );
};

export default MenuComponent;
