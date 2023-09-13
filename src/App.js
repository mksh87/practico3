import React, { useState } from "react";
import "./App.css";
import MenuComponent from "./components/MenuComponent";
import ModoComponent from "./components/ModoComponent";
import PuntosComponent from "./components/PuntosComponent";
import NombreComponent from "./components/NombreComponent";
import LevelComponent from "./components/LevelComponent";

function App() {
  const [currentStep, setCurrentStep] = useState(1); // Estado para controlar el paso actual
  const [userName, setUserName] = useState(""); // Estado para almacenar el nombre del usuario
  const [selectedMode, setSelectedMode] = useState(""); // Estado para almacenar el modo seleccionado
  const [selectedPoints, setSelectedPoints] = useState(0); // Estado para almacenar los puntos seleccionados

  // Función para avanzar al siguiente paso
  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  // Función para volver a pantalla de cambio de nombre
  function changeName() {
    setCurrentStep(1);
    setSelectedMode("");
    setSelectedPoints(0);
  }

  // Función para reiniciar y cambiar de modo
  function restartMode() {
    setCurrentStep(2);
    setSelectedMode("");
    setSelectedPoints(0);
  }

  // Función para reiniciar y elegir puntaje
  function restartPoints() {
    setCurrentStep(3);
    setSelectedPoints(0);
  }

  // Función para manejar la selección del modo
  function handleModeSelect(mode) {
    setSelectedMode(mode);
    nextStep(); // Avanza al siguiente paso (PuntosComponent)
  }

  return (
    <div className="main">
      <MenuComponent
        onChangeMode={restartMode}
        onChangeName={changeName}
        onChangePoints={restartPoints}
      />

      {currentStep === 1 && (
        <NombreComponent
          onNameSubmit={(name) => {
            setUserName(name);
            nextStep(); // Avanza al siguiente paso (ModoComponent)
          }}
        />
      )}

      {currentStep === 2 && (
        <ModoComponent userName={userName} onModeSelect={handleModeSelect} />
      )}

      {currentStep === 3 && (
        <PuntosComponent
          onPointsSelect={(points) => {
            setSelectedPoints(points);
            nextStep(); // Avanza al siguiente paso (FacilComponent o MedioComponent)
          }}
        />
      )}

      {currentStep === 4 && (
        <LevelComponent
          userName={userName}
          pointsToWin={selectedPoints}
          onSelectedMode={selectedMode}
        />
      )}
    </div>
  );
}

export default App;
