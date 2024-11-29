document.addEventListener("DOMContentLoaded", function () {
  // Simulación de un simple juego
  const gameContainer = document.getElementById("game-container");

  const startGameButton = document.createElement("button");
  startGameButton.innerText = "Empezar Juego";
  startGameButton.classList.add("btn", "btn-dark");

  const gameMessage = document.createElement("p");
  gameMessage.innerText = "Haz clic en el botón para empezar.";

  gameContainer.appendChild(startGameButton);
  gameContainer.appendChild(gameMessage);

  startGameButton.addEventListener("click", function () {
    gameMessage.innerText =
      "¡Juego Iniciado! Aquí puedes poner la lógica de tu juego.";

    // Aquí podrías añadir más lógica para tu juego, como temporizadores, puntuaciones, etc.
    startGameButton.disabled = true; // Deshabilitar el botón después de hacer clic
  });
});
