import { create } from "zustand";
import { PlayerState } from "./Game.store";

export interface HistoryState {
    players: PlayerState[];
    gameStatus: string;
    turns: number;
}

export interface ServerState {
    histories: HistoryState[];
    wsUrl: string;
    ws: WebSocket | null;
    setWs: (ws: WebSocket) => void;
    addGameHistory: (history: HistoryState) => void;
}

const useServer = create<ServerState>((set) => ({
    histories: [],
    wsUrl: `${process.env.API_URL}`,
    ws: null,
    setWs: (newWS: WebSocket) => set({ws: newWS}),
    addGameHistory: (history: HistoryState) => set((state) => ({ histories: [...state.histories, history]}))
}))

export default useServer;