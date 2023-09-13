import React, { useState, useEffect } from "react";

function GameComponent({ userName, pointsToWin, jugadas, mensajes }) {
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);

  // eslint-disable-next-line
  const [userChoice, setUserChoice] = useState(null);
  // eslint-disable-next-line
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

  function handleUserChoice(choice) {
    const computer = Math.floor(Math.random() * jugadas.length);
    const usuario = jugadas.indexOf(choice);

    // Eliminar el color de fondo de todos los divs
    for (let i = 0; i < jugadas.length; i++) {
      const playerDiv = document.getElementById(`playerDiv${i}`);
      const computerDiv = document.getElementById(`compDiv${i}`);
      if (playerDiv) {
        playerDiv.style.backgroundColor = "";
        playerDiv.textContent = "";
      }
      if (computerDiv) {
        computerDiv.style.backgroundColor = "";
        computerDiv.textContent = "";
      }
    }

    setUserChoice(usuario);
    setComputerChoice(computer);

    // Cambiar el color del div del jugador
    const playerDiv = document.getElementById(`playerDiv${usuario}`);
    playerDiv.style.backgroundColor = "green";

    // Cambiar el color del div de la computadora
    const computerDiv = document.getElementById(`compDiv${computer}`);
    computerDiv.style.backgroundColor = "red";
    computerDiv.innerHTML = "&#128187;";

    if (usuario === computer) {
      setRoundResult(`Empate. Muy poco original copiar a tu rival.`);
      playerDiv.innerHTML = "&#128528;";
    } else {
      for (let r = 1; r < jugadas.length; r += 2) {
        if ((usuario + r) % jugadas.length === computer) {
          setScoreComputer(scoreComputer + 1);
          playerDiv.innerHTML = "&#128530;";
          setRoundResult(
            `${jugadas[computer].toUpperCase()} ${
              mensajes[usuario][computer]
            } ${jugadas[
              usuario
            ].toUpperCase()}. Ha ganado la computadora. Era esperable.`
          );
        } else if ((usuario + 1 + r) % jugadas.length === computer) {
          setScorePlayer(scorePlayer + 1);
          playerDiv.innerHTML = "&#128526;";
          setRoundResult(
            `${jugadas[usuario].toUpperCase()} ${
              mensajes[usuario][computer]
            } ${jugadas[
              computer
            ].toUpperCase()}. ¡Ganaste! Seguramente fue con suerte.`
          );
        }
      }
    }
  }

  return (
    <div className="component">
      <div className="points">
        <div className="user-points">
          {userName} <br /> <span className="point-number">{scorePlayer}</span>
        </div>
        <div className="objetivo-points">
          Objetivo
          <br /> <span className="objetivo-number">{pointsToWin}</span>
        </div>
        <div className="pc-points">
          Computadora
          <br /> <span className="point-number">{scoreComputer}</span>
        </div>
      </div>

      <div className="game-grid">
        {jugadas.map((jugada, index) => (
          <div className="jugada" key={jugada}>
            <div className="casillero1" id={`playerDiv${index}`}></div>
            <button
              className="boton-jugada"
              name="eleccion"
              id={jugada}
              onClick={() => handleUserChoice(jugada)}
              disabled={gameOver} // Deshabilitar los botones si gameOver es true
            >
              {jugada.toUpperCase()}
            </button>
            <div className="casillero2" id={`compDiv${index}`}></div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="ronda">{roundResult}</h3>

        {gameWinner ? (
          <h1 className="ganador">
            {gameWinner === userName ? (
              <span>
                ¡¡{userName}!! ¡¡Has ganado!! ¡Siempre confiamos plenamente en
                tí!
              </span>
            ) : (
              <span>
                Fin de la partida. Ha ganado la computadora. Ya se veía venir.
              </span>
            )}
          </h1>
        ) : (
          <div className="ganador"></div>
        )}
      </div>
    </div>
  );
}

export default GameComponent;
