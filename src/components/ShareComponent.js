import React from "react";

function ShareButton() {
  const shareApp = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Piedra Papel Tijeras",
          text: "Juega Piedra-Papel-Tijeras",
          url: window.location.href,
        })
        .then(() => console.log("Compartido con éxito"))
        .catch((error) => console.error("Error al compartir", error));
    } else {
      // Fallback si la API de Web Share no es compatible
      alert("La función de compartir no está disponible en este navegador.");
    }
  };

  return <button onClick={shareApp}>Compartir</button>;
}

export default ShareButton;
