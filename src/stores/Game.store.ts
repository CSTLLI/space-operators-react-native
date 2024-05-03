import { create } from "zustand";
import "react-native-get-random-values";

export interface PlayerState {
	name: string;
	status: boolean;
}

export type StatusGameState = 'active' | 'pending' | 'destroyed' | 'victory'

interface GameState {
	gameId: string;
	turn: number;
	durationTurn: number;
	integrity: number;
	players: PlayerState[];
	error: string;
	statusGame: StatusGameState;
	setGameId: (gameId: string) => void;
	setTurn: (turn: number) => void;
	resetTurn: () => void;
	setDurationTurn: (duration: number) => void;
	setIntegrity: (integrity: number) => void;
	updatePlayers: (players: PlayerState[]) => void;
	setError: (error: string) => void;
	setStatusGame: (status: StatusGameState) => void;
	initializeGame: () => void;
}

const useGame = create<GameState>((set) => ({
	gameId: '',
	turn: 1,
	integrity: 100,
	players: [],
	error: '',
	statusGame: 'pending',
	durationTurn: 0,
	setIntegrity: (newIntegrity: number) => set({integrity: newIntegrity}),
	setStatusGame: (newStatusGame: StatusGameState) => set({statusGame: newStatusGame}),
	setError: (error: string) => set({ error }),
	setGameId: (newGameId: string) => set({ gameId: newGameId }),
	updatePlayers: (newPlayers: PlayerState[]) => set({players: newPlayers}),
	setTurn: (nextTurn: number) => set({turn: nextTurn}),
	resetTurn: () => set({ turn: 0}),
	setDurationTurn: (durationTurn: number) => set({durationTurn}),
	initializeGame: () => set({turn: 1, integrity: 100, players: [], statusGame: 'pending', durationTurn: 0})
}));

export default useGame;
