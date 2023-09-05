import React, { useState } from "react";
import "./App.css";
import MenuComponent from "./components/MenuComponent";
import ModoComponent from "./components/ModoComponent";
import PuntosComponent from "./components/PuntosComponent";
import NombreComponent from "./components/NombreComponent";
import FacilComponent from "./components/FacilComponent";
import MedioComponent from "./components/MedioComponent";

function App() {
  const [currentStep, setCurrentStep] = useState(1); // Estado para controlar el paso actual
  const [userName, setUserName] = useState(""); // Estado para almacenar el nombre del usuario
  const [selectedMode, setSelectedMode] = useState(""); // Estado para almacenar el modo seleccionado
  const [selectedPoints, setSelectedPoints] = useState(0); // Estado para almacenar los puntos seleccionados

  // Función para avanzar al siguiente paso
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Función para reiniciar el juego
  const restartGame = () => {
    setCurrentStep(1);
    setUserName("");
    setSelectedMode("");
    setSelectedPoints(0);
  };

  // Función para manejar la selección del modo
  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    nextStep(); // Avanza al siguiente paso (PuntosComponent)
  };

  return (
    <div>
      <MenuComponent onRestart={restartGame} />
      {currentStep === 1 && (
        <NombreComponent
          onNameSubmit={(name) => {
            setUserName(name);
            nextStep(); // Avanza al siguiente paso (ModoComponent)
          }}
        />
      )}
      {currentStep === 2 && <ModoComponent onModeSelect={handleModeSelect} />}
      {currentStep === 3 && (
        <PuntosComponent
          onPointsSelect={(points) => {
            setSelectedPoints(points);
            nextStep(); // Avanza al siguiente paso (FacilComponent o MedioComponent)
          }}
        />
      )}
      {currentStep === 4 && selectedMode === "facil" && (
        <FacilComponent userName={userName} pointsToWin={selectedPoints} />
      )}
      {currentStep === 4 && selectedMode === "medio" && (
        <MedioComponent userName={userName} pointsToWin={selectedPoints} />
      )}
      {currentStep === 5 && (
        <button onClick={restartGame}>Reiniciar Juego</button>
      )}
    </div>
  );
}

export default App;
