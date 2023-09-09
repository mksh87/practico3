import React, { useState } from "react";
import "./App.css";
import MenuComponent from "./components/MenuComponent";
import ModoComponent from "./components/ModoComponent";
import PuntosComponent from "./components/PuntosComponent";
import NombreComponent from "./components/NombreComponent";
import FacilComponent from "./components/FacilComponent";
import MedioComponent from "./components/MedioComponent";
import DificilComponent from "./components/DificilComponent";
import ExpertoComponent from "./components/ExpertoComponent";

function App() {
  const [currentStep, setCurrentStep] = useState(1); // Estado para controlar el paso actual
  const [userName, setUserName] = useState(""); // Estado para almacenar el nombre del usuario
  const [selectedMode, setSelectedMode] = useState(""); // Estado para almacenar el modo seleccionado
  const [selectedPoints, setSelectedPoints] = useState(0); // Estado para almacenar los puntos seleccionados

  // Función para avanzar al siguiente paso
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Función para volver a pantalla de cambio de nombre
  const changeName = () => {
    setCurrentStep(1);
    setSelectedMode("");
    setSelectedPoints(0);
  };

  // Función para reiniciar y cambiar de modo
  const restartMode = () => {
    setCurrentStep(2);
    setSelectedMode("");
    setSelectedPoints(0);
  };

  // Función para reiniciar y elegir puntaje
  const restartPoints = () => {
    setCurrentStep(3);
    setSelectedPoints(0);
  };

  // Función para manejar la selección del modo
  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    nextStep(); // Avanza al siguiente paso (PuntosComponent)
  };

  return (
    <div>
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

      <>
        {currentStep === 4 && selectedMode === "facil" && (
          <FacilComponent userName={userName} pointsToWin={selectedPoints} />
        )}
        {currentStep === 4 && selectedMode === "medio" && (
          <MedioComponent userName={userName} pointsToWin={selectedPoints} />
        )}
        {currentStep === 4 && selectedMode === "dificil" && (
          <DificilComponent userName={userName} pointsToWin={selectedPoints} />
        )}
        {currentStep === 4 && selectedMode === "experto" && (
          <ExpertoComponent userName={userName} pointsToWin={selectedPoints} />
        )}

        {currentStep === 5 && (
          <button onClick={restartMode}>Reiniciar Juego</button>
        )}
      </>
    </div>
  );
}

export default App;
