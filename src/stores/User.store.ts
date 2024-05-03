import { create } from "zustand";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export type RoleState = 'operator' | 'instructor' | '' 

export interface UserState {
    pseudo: string;
    pseudoOperator: string;
    uuid: string;
    isReady: boolean;
    isHost: boolean;
    role: RoleState;
    setIsReady: (isReady: boolean) => void;
    setPseudo: (newPseudo: string) => void;
    setPseudoOperator: (newPseudoOperator: string) => void;
    setIsHost: (isHost: boolean) => void;
    setRole: (role: RoleState) => void;
    initializeUser: () => void;
}

const useUser = create<UserState>((set) => ({
    pseudo: 'CSTLLI',
    pseudoOperator: '',
    role: '',
    isReady: false,
    isHost: false,
    setPseudo: (newPseudo: string) => set({ pseudo: newPseudo}),
    setPseudoOperator: (newPseudoOperator: string) => set({ pseudoOperator: newPseudoOperator}),
    setIsReady: (newIsReady: boolean) => set({isReady: newIsReady}),
    setIsHost: (newIsHost: boolean) => set({isHost: newIsHost}),
    setRole: (newRole: RoleState) => set({role: newRole}),
    initializeUser: () => set({role: '', pseudoOperator: '', isReady: false, isHost: false}),
    uuid: uuidv4(),
}))

export default useUser;