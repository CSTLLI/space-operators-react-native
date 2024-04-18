import { create } from "zustand";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface UserGameState {
    pseudo: string;
    uuid: string;
    setPseudo: (newPseudo: string) => void;
}

const useUserGame = create<UserGameState>((set) => ({
    pseudo: 'CSTLLI',
    setPseudo: (newPseudo: string) => set({ pseudo: newPseudo}),
    uuid: uuidv4()
}))

export default useUserGame;