import { create } from "zustand";
import "react-native-get-random-values";

export interface PlayerState {
	name: string;
	status: boolean;
}

interface GameState {
	gameId: string;
	turns: number;
	players: PlayerState[];
	setGameId: (gameId: string) => void;
	updatePlayers: (players: PlayerState[]) => void;
	nextTurn: () => void;
	resetTurn: () => void;
}

const useGame = create<GameState>((set) => ({
	gameId: '00aa11bb',
	turns: 0,
	players: [],
	setGameId: (newGameId: string) => set({ gameId: newGameId }),
	updatePlayers: (newPlayers: PlayerState[]) => set({players: newPlayers}),
	nextTurn: () => set(state => ({turns: state.turns + 1})),
	resetTurn: () => set({ turns: 0})
}));

export default useGame;
