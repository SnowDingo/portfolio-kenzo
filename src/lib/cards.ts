import Matter from "matter-js";
import { Engine, Bodies, Render, Composite, Runner } from 'matter-js';

// File Name Patterns
const cardSuit = ["hearts", "spades", "clubs", "diamonds"];
const cardValue = [
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "J",
    "Q",
    "K",
    "A",
];

type Vector = {
    x: number;
    y: number;
};

const getFileName = (index: number) => {
    return `/cards/PNG/large/card_${cardSuit[index % cardSuit.length]}_${cardValue[index % cardValue.length]}.png`;
}

const DEALER_POSITION: Vector = {
    x: 30,
    y: 30,
};

const PLAYERS_POSITIONS: Vector[] = [
    { x: 100, y: 500 },
    { x: 400, y: 500 },
    { x: 500, y: 300 },
    { x: 600, y: 100 },
];

const getDealerToPlayerVector = (index: number): Vector => {
    return {
        x: PLAYERS_POSITIONS[index].x - DEALER_POSITION.x,
        y: PLAYERS_POSITIONS[index].y - DEALER_POSITION.y,
    }
}

const scaleVector = (vector: Vector, scale: number): Vector => {
    return {
        x: vector.x * scale,
        y: vector.y * scale,
    }
};

export function createOneCard(index: number, engine: Matter.Engine) {

        const cardPath = getFileName(index);

        const card = Bodies.rectangle(DEALER_POSITION.x,DEALER_POSITION.y, 60, 80, {
            render: {
                sprite: {
                    texture: cardPath,
                    xScale: 1,
                    yScale: 1,
                },
            },
        })

        Matter.Body.setAngularVelocity(card, 0.05);
        Matter.Body.setVelocity(card, scaleVector(getDealerToPlayerVector(index % PLAYERS_POSITIONS.length), 0.01));

        Matter.Composite.add(engine.world, card);

    }