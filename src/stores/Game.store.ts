import { create } from "zustand";
import "react-native-get-random-values";

export interface PlayerState {
	name: string;
	status: boolean;
}

export type StatusGameState = 'active' | 'pending' | 'destroyed' | 'victory'

interface GameState {
	gameId: string;
	turns: number;
	integrity: number;
	players: PlayerState[];
	error: string;
	statusGame: StatusGameState;
	setStatusGame: (newStatus: StatusGameState) => void;
	setError: (error: string) => void;
	setGameId: (gameId: string) => void;
	updatePlayers: (players: PlayerState[]) => void;
	setIntegrity: (integrity: number) => void;
	setTurns: (turns: number) => void;
	resetTurn: () => void;
}

const useGame = create<GameState>((set) => ({
	gameId: '',
	turns: 1,
	integrity: 100,
	players: [],
	error: '',
	statusGame: 'pending',
	setIntegrity: (newIntegrity: number) => set({integrity: newIntegrity}),
	setStatusGame: (newStatusGame: StatusGameState) => set({statusGame: newStatusGame}),
	setError: (error: string) => set({ error }),
	setGameId: (newGameId: string) => set({ gameId: newGameId }),
	updatePlayers: (newPlayers: PlayerState[]) => set({players: newPlayers}),
	setTurns: (nextTurn: number) => set({turns: nextTurn}),
	resetTurn: () => set({ turns: 0})
}));

export default useGame;
