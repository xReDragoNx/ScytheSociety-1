document.addEventListener("DOMContentLoaded", function () {
  const skull = document.createElement("div");
  skull.id = "skull";
  skull.innerHTML = "💀"; // Representa la calavera
  document.getElementById("game-board").appendChild(skull);

  const gameContainer = document.getElementById("game-container");
  const startButton = document.getElementById("play-button");
  const gameBoard = document.getElementById("game-board");
  const winMessage = document.getElementById("win-message");
  const loseMessage = document.getElementById("lose-message");
  let skullPositionX = 125; // Posición inicial de la calavera en el eje X
  let bullets = [];

  // Mostrar el tablero del juego y ocultar la pantalla de bienvenida
  startButton.addEventListener("click", function () {
    document.getElementById("welcome-screen").style.display = "none";
    gameBoard.style.display = "flex";
  });

  // Mover la calavera con las teclas de flecha
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      skullPositionX = Math.max(0, skullPositionX - 10);
    } else if (event.key === "ArrowRight") {
      skullPositionX = Math.min(250, skullPositionX + 10); // Evitar que se mueva fuera del área del tablero
    } else if (event.key === " ") {
      createBullet();
    }
    skull.style.left = skullPositionX + "px"; // Actualiza la posición de la calavera
  });

  // Crear el hueso (disparo) cuando se presiona la barra espaciadora
  function createBullet() {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.left = skullPositionX + 15 + "px"; // Centrado en la calavera
    bullet.style.bottom = "70px"; // Posición inicial
    bullet.innerHTML = "🦴"; // Hueso
    document.getElementById("game-board").appendChild(bullet);
    moveBullet(bullet);
  }

  // Mover los huesos
  function moveBullet(bullet) {
    let bulletPosition = parseInt(bullet.style.bottom);
    const bulletInterval = setInterval(function () {
      if (bulletPosition < 600) {
        bulletPosition += 5;
        bullet.style.bottom = bulletPosition + "px";
      } else {
        clearInterval(bulletInterval);
        bullet.remove(); // Eliminar el hueso después de que salga de la pantalla
      }
    }, 20);
  }
});
