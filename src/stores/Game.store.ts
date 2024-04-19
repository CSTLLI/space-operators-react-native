import { create } from "zustand";
import 'react-native-get-random-values';
import { UserState } from "./User.store";

interface GameState {
    serverId: number
    setServerId: (serverId: number) => void;
    players: UserState[];
    setPlayers: (players: UserState[]) => void;
}

const useGame = create<GameState>((set) => ({
    serverId: 0,
    players: [],
    setServerId: (newServerId: number) => set({serverId: newServerId}),
    setPlayers: (newPlayers: UserState[]) => set({players: newPlayers})
}))

export default useGame;