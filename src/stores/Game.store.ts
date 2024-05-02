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
	error: string;
	setError: (error: string) => void;
	setGameId: (gameId: string) => void;
	updatePlayers: (players: PlayerState[]) => void;
	nextTurn: () => void;
	resetTurn: () => void;
}

const useGame = create<GameState>((set) => ({
	gameId: '00aa11bb',
	turns: 1,
	players: [],
	error: '',
	setError: (error: string) => set({ error }),
	setGameId: (newGameId: string) => set({ gameId: newGameId }),
	updatePlayers: (newPlayers: PlayerState[]) => set({players: newPlayers}),
	nextTurn: () => set(state => ({turns: state.turns + 1})),
	resetTurn: () => set({ turns: 0})
}));

export default useGame;
