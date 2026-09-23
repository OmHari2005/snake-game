import { Game } from './game.js';

const board = document.getElementById('game-board');

let game;
let intervalId = null;

const createBoard = () => {
    if (!board || !game) return;

    board.innerHTML = '';

    for (let y = 0; y < game.rows; y++) {
        for (let x = 0; x < game.columns; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            board.appendChild(cell);
        }
    }
};

const render = () => {
    if (!board || !game) return;

    board.querySelectorAll('.cell').forEach((cell) => {
        cell.classList.remove('snake', 'head');
    });

    game.snake.getBody().forEach((segment, index) => {
        const cell = board.querySelector(`[data-x="${segment.x}"][data-y="${segment.y}"]`);

        if (!cell) return;

        cell.classList.add('snake');

        if (index === 0) {
            cell.classList.add('head');
        }
    });
      // Food
    const foodCell = board.querySelector(
        `[data-x="${game.food.x}"][data-y="${game.food.y}"]`
    );

    if (foodCell) {
        foodCell.classList.add('food');
    }
};

const startGame = () => {
    game = new Game();
    createBoard();
    render();

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        game.update();
        render();
    }, game.speed);
};

document.addEventListener('keydown', (event) => {
    const directionMap = {
        ArrowUp: 'UP',
        ArrowDown: 'DOWN',
        ArrowLeft: 'LEFT',
        ArrowRight: 'RIGHT',
        w: 'UP',
        s: 'DOWN',
        a: 'LEFT',
        d: 'RIGHT'
    };

    const direction = directionMap[event.key];

    if (direction && game) {
        game.setDirection(direction);
    }
});

startGame();