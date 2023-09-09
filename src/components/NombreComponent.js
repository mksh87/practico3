import React, { useState } from "react";
import hands from "../img/hands.gif";

const NombreComponent = ({ onNameSubmit }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name.length > 0 && /^[a-zA-Z0-9]+$/.test(name) && name.length <= 15) {
      onNameSubmit(name);
    } else {
      alert("Por favor, ingrese un nombre válido.");
    }
  };

  return (
    <div className="component">
      <h1>
        Bienvenido a <strong>piedra papel o tijeras</strong>
      </h1>
      <img className="homegif" src={hands}></img>
      <h4>
        Demuestra tu infinita habilidad en una épica batalla contra el
        ordenador.
      </h4>
      <h4>Para comenzar, por favor ingresa tu nombre:</h4>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleSubmit}>Ingresar</button>
    </div>
  );
};

export default NombreComponent;
