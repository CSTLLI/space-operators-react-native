import { create } from "zustand";

export interface ServerState {
    wsUrl: string;
    ws: WebSocket | null;
    setWs: (ws: WebSocket) => void;
}

const useServer = create<ServerState>((set) => ({
    wsUrl: `${process.env.API_URL}`,
    ws: null,
    setWs: (newWS: WebSocket) => set({ws: newWS})
}))

export default useServer;