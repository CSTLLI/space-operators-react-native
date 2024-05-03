import { PlayerState } from "@/stores/Game.store";
import { RoleState } from "@/stores/User.store";

export const pseudoRandoms = ["Mazaki", "RED", "Pierro", "MB", "CSTLLI", "Melgirl3"];

export const getRandomStatus = () => Math.random() < 0.5;

export const randomPlayers: PlayerState[] = [
  { name: "Mazaki", status: getRandomStatus() },
  { name: "RED", status: getRandomStatus() },
  { name: "Pierro", status: getRandomStatus() },
  { name: "MB", status: getRandomStatus() },
  { name: "CSTLLI", status: getRandomStatus() },
  { name: "Melgirl3", status: getRandomStatus() }
];

export const mockPlayersResponse = {
  type: "players",
  data: {
    players: randomPlayers,
  },
};

export const mockOperationResponseInstructor: OperationResponseState = {
  type: "operation",
  description: "Activez les nombres pairs",
  elements: [
    { valueType: "number", value: 7, type: "switch", id: 4 },
    { valueType: "number", value: 2, type: "switch", id: 0 },
    { valueType: "number", value: 8, type: "switch", id: 2 },
    { valueType: "number", value: 9, type: "switch", id: 5 },
    { valueType: "number", value: 6, type: "switch", id: 1 },
    { valueType: "number", value: 5, type: "switch", id: 3 },
  ],
  result: { switchs: [0, 1, 2] },
  role: "instructor",
  id: "HN-56",
  duration: 15,
  turn: 4,
};

export interface OperationResponseState {
  type: string;
  description: string;
  elements: {
    valueType: string;
    value: number;
    type: string;
    id: number;
  }[];
  result: {
    [key: string]: number[];
  };
  role: RoleState;
  id: string;
  duration: number;
  turn: number;
}
