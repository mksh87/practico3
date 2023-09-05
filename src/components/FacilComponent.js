import React, { useState, useEffect } from "react";

const FacilComponent = ({ userName, pointsToWin }) => {
  const jugadas = ["piedra", "papel", "tijeras"];
  const mensajes = [
    ["", "envuelve", "rompe"],
    ["envuelve", "", "corta"],
    ["rompe", "corta", ""],
  ];

  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);
  const [scoreMax, setScoreMax] = useState(0);

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [roundResult, setRoundResult] = useState("");
  const [gameWinner, setGameWinner] = useState(null); // Agregamos el estado para el ganador de la partida
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // Verificar si alguno de los jugadores ha ganado
    if (scorePlayer >= pointsToWin || scoreComputer >= pointsToWin) {
      // Determinar al ganador
      const winner = scorePlayer > scoreComputer ? userName : "Computadora";
      setGameWinner(winner); // Establecer al ganador de la partida
      setGameOver(true); // Deshabilitar los botones
    }
  }, [scorePlayer, scoreComputer, pointsToWin, userName]);

  const handleUserChoice = (choice) => {
    const computer = Math.floor(Math.random() * jugadas.length);
    const usuario = jugadas.indexOf(choice);

    setUserChoice(usuario);
    setComputerChoice(computer);

    if (usuario === computer) {
      setRoundResult(`Empate. Muy poco original copiar a tu rival.`);
    } else {
      for (let r = 1; r < jugadas.length; r += 2) {
        if ((usuario + r) % jugadas.length === computer) {
          setScoreComputer(scoreComputer + 1);
          setRoundResult(
            `${jugadas[computer]} ${mensajes[usuario][computer]} ${jugadas[usuario]}. Ha ganado la computadora. Era esperable.`
          );
        } else if ((usuario + 1 + r) % jugadas.length === computer) {
          setScorePlayer(scorePlayer + 1);
          setRoundResult(
            `${jugadas[usuario]} ${mensajes[usuario][computer]} ${jugadas[computer]}. ¡Ganaste! Seguramente fue con suerte.`
          );
        }
      }
    }
  };

  return (
    <div>
      <h2>Jugador: {userName}</h2>
      <h2>Puntos para ganar: {pointsToWin}</h2>
      <div className="game-grid">
        {jugadas.map((jugada, index) => (
          <div className="jugada" key={jugada}>
            <div className="casillero" id={`playerDiv${index}`}>
              <span className="icon solid fa-arrow-right"></span>
            </div>
            <button
              className="button fit eleccion"
              name="eleccion"
              id={jugada}
              onClick={() => handleUserChoice(jugada)}
              disabled={gameOver} // Deshabilitar los botones si gameOver es true
            >
              {jugada.toUpperCase()}
            </button>
            <div className="casillero" id={`compDiv${index}`}>
              <span className="icon solid fa-arrow-left"></span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>Resultado de la ronda: {roundResult}</div>
        <div>
          Puntos de {userName}: {scorePlayer}
        </div>
        <div>Puntos de la computadora: {scoreComputer}</div>
        {gameWinner ? (
          <div>Ganador de la partida: {gameWinner}</div>
        ) : (
          <div>Ganador de la partida: {/* Determinar el ganador aquí */}</div>
        )}
      </div>
    </div>
  );
};

export default FacilComponent;
