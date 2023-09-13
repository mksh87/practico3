import React, { useState } from "react";
import logo from "../img/logo192.png";

function NombreComponent({ onNameSubmit }) {
  const [name, setName] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit() {
    if (name.length > 0 && /^[a-zA-Z0-9]+$/.test(name) && name.length <= 15) {
      onNameSubmit(name);
    } else {
      alert("Por favor, ingrese un nombre válido.");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="component">
      <h1>
        Bienvenido a <strong>piedra papel o tijeras</strong>
      </h1>
      <img
        className="App-logo"
        src={logo}
        alt="logo piedra papel tijeras"
      ></img>
      <h4>
        Demuestra tu infinita habilidad en una épica batalla contra el
        ordenador.
      </h4>
      <h4>Para comenzar, por favor ingresa tu nombre:</h4>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSubmit}>Ingresar</button>
    </div>
  );
}

export default NombreComponent;
