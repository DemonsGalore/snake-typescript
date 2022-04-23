import { Coordinate } from './models';

export const GRID_SIZE = 21;

export const getRandomGridPosition = (): Coordinate => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    };
};

export const outsideGrid = (position: Coordinate): boolean => {
    return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
};
