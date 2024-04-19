import { PlayerState } from "@/stores/Game.store";

const getRandomStatus = () => Math.random() < 0.5;

export const randomPlayers: PlayerState[] = [
    { playerName: 'Mazaki', status: getRandomStatus() },
    { playerName: 'RED', status: getRandomStatus() },
    { playerName: 'Pierro', status: getRandomStatus() },
    { playerName: 'MB', status: getRandomStatus() },
    { playerName: 'CSTLLI', status: getRandomStatus() },
];

export const mockPlayersResponse = {
    type: "players",
    data: {
        players: randomPlayers
    },
};