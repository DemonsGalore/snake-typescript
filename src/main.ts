import { draw as drawApple, update as updateApple } from './apple';
import { outsideGrid } from './grid';
import { getInput } from './input';
import { draw as drawSnake, getSnakeHead, snakeIntersection, SNAKE_SPEED, update as updateSnake } from './snake';

import './style.css'

const gameBoard = document.querySelector<HTMLDivElement>('#game-board')!;

let lastRenderTime = 0;
let gameOver = false;

const main = (currentTime: number): void => {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            location.reload();
        }

        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    update();
    draw();
};

window.requestAnimationFrame(main);

const update = (): void => {
    const input = getInput();

    updateSnake(input);
    updateApple();
    checkDeath();
};

const draw = (): void => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawApple(gameBoard);
};

const checkDeath = (): void => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};
