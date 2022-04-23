import { Coordinate } from './models';

export const SNAKE_SPEED = 4;
let newSegments = 0;

let snakeBody: Coordinate[] = [
    { x: 11, y: 11 }
];


export const update = (input: Coordinate): void => {
    addSegments();

    const newHead: Coordinate = {
        x: snakeBody[0].x + input.x,
        y: snakeBody[0].y + input.y
    };

    snakeBody.unshift(newHead);
    snakeBody.pop();
};

export const draw = (gameBoard: HTMLDivElement): void => {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x.toString();
        snakeElement.style.gridRowStart = segment.y.toString();
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
};

export const expandSnake = (amount: number): void => {
    newSegments += amount;
};

export const onSnake = (position: Coordinate, { ignoreHead = false } = {}): boolean => {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;

        return isPositionEqual(segment, position);
    });
};

export const isPositionEqual = (pos1: Coordinate, pos2: Coordinate): boolean => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
};

export const addSegments = (): void => {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    newSegments = 0;
};

export const getSnakeHead = (): Coordinate => snakeBody[0];

export const snakeIntersection = (): boolean => {
    return onSnake(snakeBody[0], { ignoreHead: true });
};
