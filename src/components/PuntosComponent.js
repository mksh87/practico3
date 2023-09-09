import React, { useState } from "react";

const PuntosComponent = ({ onPointsSelect }) => {
  const [selectedPoints, setSelectedPoints] = useState(1);

  const handlePointsSelect = (points) => {
    setSelectedPoints(points);
    onPointsSelect(points);
  };

  return (
    <div className="component">
      <h3>
        Selecciona la cantidad de puntos para ganar. Mientras más elijas, más
        probabilidad tendrás de una remontada épica!!
      </h3>
      <button onClick={() => handlePointsSelect(1)}>1 punto</button>
      <button onClick={() => handlePointsSelect(3)}>3 puntos</button>
      <button onClick={() => handlePointsSelect(5)}>5 puntos</button>
    </div>
  );
};

export default PuntosComponent;
