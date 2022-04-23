import { Coordinate } from './models';


let inputDirection: Coordinate = { x: 0, y: 0 };

document.addEventListener('keydown', (event: KeyboardEvent) => {
    switch (event.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
            if (inputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            if (inputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 };
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            if (inputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 };
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            if (inputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 };
            break;
        default:
            break;
    }
});

export const getInput = (): Coordinate => {
    return inputDirection;
};
