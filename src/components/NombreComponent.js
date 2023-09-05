import React, { useState } from "react";

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
    <div>
      <h2>Ingresa tu nombre:</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleSubmit}>Ingresar</button>
    </div>
  );
};

export default NombreComponent;
