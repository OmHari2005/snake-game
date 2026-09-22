const board = document.querySelector("#game-board");

const createBoard = () => {
  if (!board) {
    console.error("Game board element not found");
    return;
  }

  board.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = String(i);
      cell.dataset.y = String(j);
      board.appendChild(cell);
    }
  }
};

const render = () => {
  console.log("Board Rendered");
};

const startGame = () => {
  createBoard();
  render();
};

startGame();