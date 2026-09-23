export function setupInput(changeDirection) {

    const keyMap = {


        // these are (ArrowUp, ArrowDown, etc) keys on the keyboard, and they
        // defined in the keydown event object as event.key
        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT",

        w: "UP",
        s: "DOWN",
        a: "LEFT",
        d: "RIGHT"

    };

    // addEventListener is a method that allows you to listen for events on a specific
    //  element. In this case, we are listening for the "keydown" event on the document 
    // object, which represents the entire HTML document. When a key is pressed down, 
    // the event listener will be triggered and execute the provided callback function.
    document.addEventListener(
        "keydown",
        event => {

            const direction = keyMap[event.key];

            if (direction) {

                changeDirection(
                    direction
                );

            }

        }
    );


    const buttons =
        document.querySelectorAll(
            "[data-direction]"
        );


    buttons.forEach(button => {

        button.addEventListener("click", () => {
            changeDirection(button.dataset.direction );
        }
     );

    });

}
import { Game } from './game.js';
import { setupInput } from './input.js';

const board = document.getElementById('game-board');

let game;
let interval;

const createBoard = () => {
}

const Render = () => {

}

const startGame = () => {
    clearInterval(interval);

    //instance of game
    game = new Game();

    //craete a board
    createBoard();

    //render the snake
    Render();

    // setInterval: is a built-in js funtion that calls a funtion at 
    // specified intervals (in ms). It returns an interval ID that can be used to 
    // clear the interval Later using clearInterval.
    interval = setInterval(() => {
        game.update();
        Render();

        if (!game.running) {

            clearInterval(interval);

        }

    },

        game.speed
    );

    setupInput(direction => {

            game.setDirection(
                direction
            );

        }
    );


}

startGame();