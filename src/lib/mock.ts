import { PlayerState } from "@/stores/Game.store";

export const pseudoRandoms = [
    'Mazaki',
    'RED',
    'Pierro',
    'MB',
    'CSTLLI'
]

const getRandomStatus = () => Math.random() < 0.5;

export const randomPlayers: PlayerState[] = [
    { name: 'Mazaki', status: getRandomStatus() },
    { name: 'RED', status: getRandomStatus() },
    { name: 'Pierro', status: getRandomStatus() },
    { name: 'MB', status: getRandomStatus() },
    { name: 'CSTLLI', status: getRandomStatus() },
];

export const mockPlayersResponse = {
    type: "players",
    data: {
        players: randomPlayers
    },
};

export const mockOperationResponseInstructor = {
    type: "operation",
    data: {
        turn: 1,
        role: "instructor",
             
    }
}