import { create } from "zustand";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

type RoleState = 'operator' | 'instructor' | '' 

export interface UserState {
    pseudo: string;
    uuid: string;
    isReady: boolean;
    isHost: boolean;
    role: RoleState;
    setIsReady: (isReady: boolean) => void;
    setPseudo: (newPseudo: string) => void;
    setIsHost: (isHost: boolean) => void;
    setRole: (role: RoleState) => void;
}

const useUser = create<UserState>((set) => ({
    pseudo: 'CSTLLI',
    role: 'instructor',
    isReady: false,
    isHost: false,
    setPseudo: (newPseudo: string) => set({ pseudo: newPseudo}),
    setIsReady: (newIsReady: boolean) => set({isReady: newIsReady}),
    setIsHost: (newIsHost: boolean) => set({isHost: newIsHost}),
    setRole: (newRole: RoleState) => set({role: newRole}),
    uuid: uuidv4()
}))

export default useUser;