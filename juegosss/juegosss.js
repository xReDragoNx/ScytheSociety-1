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

    // Mostrar la pantalla de juego y ocultar la pantalla de bienvenida
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("game-board").style.display = "flex";

    // Aquí debes agregar la lógica del juego (como la creación de los enemigos, etc.)
    createAliens();
    createSkull();
    moveAliens();
  });

  // Juego (agregar la lógica del juego aquí)
  const welcomeScreen = document.getElementById("welcome-screen");
  const playButton = document.getElementById("play-button");
  const gameBoard = document.getElementById("game-board");
  const winMessage = document.getElementById("win-message");
  const loseMessage = document.getElementById("lose-message");
  const aliens = [];
  let skullPosition = 0;
  let isMobile = false;
  let touchStartX = 0;

  function createAliens() {
    const skullToAliensDistance = 20;
    const emptySpaceHeight = 200;

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        const alien = document.createElement("div");
        alien.className = "alien";
        alien.style.top = `${row * 60 + skullToAliensDistance}px`;
        alien.style.left = `${col * 60}px`;
        alien.innerHTML = "👹";
        aliens.push(alien);
        gameBoard.appendChild(alien);
      }
    }

    const emptySpace = document.createElement("div");
    emptySpace.style.position = "absolute";
    emptySpace.style.width = "100%";
    emptySpace.style.height = `${emptySpaceHeight}px`;
    emptySpace.style.top = `${skullToAliensDistance + 5 * 60}px`;
    gameBoard.appendChild(emptySpace);
  }

  function createSkull() {
    const skull = document.createElement("div");
    skull.id = "skull";
    skull.innerHTML = "💀";
    gameBoard.appendChild(skull);
    return skull;
  }

  function moveAliens() {
    const alienMoveInterval = setInterval(() => {
      for (const alien of aliens) {
        const alienPosition = alien.offsetTop;
        alien.style.top = `${alienPosition + 2}px`;

        if (alienPosition >= gameBoard.offsetHeight - 50) {
          clearInterval(alienMoveInterval);
          showLoseMessage();
        }
      }
    }, 50);
  }

  function showLoseMessage() {
    loseMessage.style.display = "block";
  }

  function moveSkull(direction) {
    if (direction === "left" && skullPosition > 0) {
      skullPosition -= 10;
    } else if (
      direction === "right" &&
      skullPosition < gameBoard.offsetWidth - 50
    ) {
      skullPosition += 10;
    }

    document.getElementById("skull").style.left = `${skullPosition}px`;
  }

  function shootBullet() {
    const bullet = document.createElement("div");
    bullet.className = "bullet";
    bullet.style.left = `${skullPosition + 15}px`; // Ajusta la posición inicial de la bala
    bullet.style.top = `${gameBoard.offsetHeight - 50}px`;
    bullet.innerHTML = "🦴"; // Agrega el emoji directamente al contenido
    gameBoard.appendChild(bullet);

    const bulletMoveInterval = setInterval(() => {
      const bulletPosition = bullet.offsetTop;
      bullet.style.top = `${bulletPosition - 5}px`;

      if (bulletPosition < 0) {
        clearInterval(bulletMoveInterval);
        gameBoard.removeChild(bullet);
      } else {
        checkCollision(bullet);
      }
    }, 16);
  }

  function checkCollision(bullet) {
    for (const alien of aliens) {
      if (
        bullet.offsetLeft < alien.offsetLeft + alien.offsetWidth &&
        bullet.offsetLeft + bullet.offsetWidth > alien.offsetLeft &&
        bullet.offsetTop < alien.offsetTop + alien.offsetHeight &&
        bullet.offsetTop + bullet.offsetHeight > alien.offsetTop
      ) {
        gameBoard.removeChild(bullet);
        gameBoard.removeChild(alien);
        aliens.splice(aliens.indexOf(alien), 1);

        if (aliens.length === 0) {
          winMessage.style.display = "block";
        }
        return;
      }
    }
  }

  playButton.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
    gameBoard.style.display = "flex";
    createAliens();
    createSkull();
    moveAliens();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A") {
      moveSkull("left");
    } else if (event.key === "d" || event.key === "D") {
      moveSkull("right");
    } else if (
      event.key === " " &&
      !winMessage.style.display &&
      !loseMessage.style.display
    ) {
      shootBullet();
    }
  });

  document.addEventListener("touchstart", (event) => {
    isMobile = true;
    touchStartX = event.touches[0].clientX;
  });

  document.addEventListener("touchmove", (event) => {
    if (isMobile) {
      const touchX = event.touches[0].clientX;
      const deltaX = touchX - touchStartX;
      if (deltaX > 10) {
        moveSkull("right");
      } else if (deltaX < -10) {
        moveSkull("left");
      }
      touchStartX = touchX;
    }
  });

  document.addEventListener("touchend", () => {
    isMobile = false;
  });

  document.addEventListener("touchstart", (event) => {
    if (isMobile && !winMessage.style.display && !loseMessage.style.display) {
      shootBullet();
    }
  });
});
