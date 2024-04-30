import { create } from "zustand";
import "react-native-get-random-values";

export interface PlayerState {
	name: string;
	status: boolean;
}

interface GameState {
	gameId: string;
	setGameId: (gameId: string) => void;
	players: PlayerState[];
	updatePlayers: (players: PlayerState[]) => void;
}

const useGame = create<GameState>((set) => ({
	gameId: '00aa11bb',
	players: [],
	setGameId: (newGameId: string) => set({ gameId: newGameId }),
	updatePlayers: (newPlayers: PlayerState[]) => set({players: newPlayers}),
}));

export default useGame;
