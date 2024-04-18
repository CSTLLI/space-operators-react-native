import { create } from "zustand";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export interface UserState {
    pseudo: string;
    uuid: string;
    isReady: boolean;
    setIsReady: (isReady: boolean) => void;
    setPseudo: (newPseudo: string) => void;

}

const useUser = create<UserState>((set) => ({
    pseudo: 'CSTLLI',
    isReady: false,
    setPseudo: (newPseudo: string) => set({ pseudo: newPseudo}),
    setIsReady: (isReady: boolean) => set({isReady: !isReady}),
    uuid: uuidv4()
}))

export default useUser;