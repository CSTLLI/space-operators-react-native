import { create } from "zustand";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export interface UserState {
    pseudo: string;
    uuid: string;
    isReady: boolean;
    isHost: boolean;
    setIsReady: (isReady: boolean) => void;
    setPseudo: (newPseudo: string) => void;
    setIsHost: (isHost: boolean) => void;
}

const useUser = create<UserState>((set) => ({
    pseudo: 'CSTLLI',
    isReady: false,
    isHost: false,
    setPseudo: (newPseudo: string) => set({ pseudo: newPseudo}),
    setIsReady: (newIsReady: boolean) => set({isReady: newIsReady}),
    setIsHost: (newIsHost: boolean) => set({isHost: newIsHost}),
    uuid: uuidv4()
}))

export default useUser;