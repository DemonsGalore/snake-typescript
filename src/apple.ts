import { getRandomGridPosition } from './grid';
import { Coordinate } from './models';
import { expandSnake, onSnake } from './snake';

const getRandomApplePosition = (): Coordinate => {
    let newApplePosition: Coordinate | null = null;

    while (newApplePosition === null || onSnake(newApplePosition)) {
        newApplePosition = getRandomGridPosition();
    }

    return newApplePosition;
};

let apple = getRandomApplePosition();
const EXPANSION_RATE = 1;

export const update = (): void => {
    if (onSnake(apple)) {
        expandSnake(EXPANSION_RATE);
        apple = getRandomApplePosition();
    }
};

export const draw = (gameBoard: HTMLDivElement): void => {
    const appleElement = document.createElement('div');
    appleElement.style.gridColumnStart = apple.x.toString();
    appleElement.style.gridRowStart = apple.y.toString();
    appleElement.classList.add('apple');
    gameBoard.appendChild(appleElement);
};
