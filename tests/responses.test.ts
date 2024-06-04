import { test, describe, expect } from "@jest/globals";
import { pseudoRandoms, mockPlayersResponse } from "../src/lib/mock";

describe("Test pseudoRandoms function", () => {

  test("pseudoRandoms returns an array", () => {
    expect(Array.isArray(pseudoRandoms)).toBe(true);
  });

  test("pseudoRandoms array contains strings", () => {
    expect(pseudoRandoms.every(item => typeof item === 'string')).toBe(true);
  });

  test("pseudoRandoms array is not empty", () => {
    expect(pseudoRandoms.length).toBeGreaterThan(0);
  });
});

describe("Test mockPlayersResponse object", () => {

  test("mockPlayersResponse has the correct structure", () => {
    expect(mockPlayersResponse).toHaveProperty("type", "players");
    expect(mockPlayersResponse).toHaveProperty("data");
    expect(mockPlayersResponse.data).toHaveProperty("players");
  });

  test("mockPlayersResponse 'players' array is not empty", () => {
    expect(Array.isArray(mockPlayersResponse.data.players)).toBe(true);
    expect(mockPlayersResponse.data.players.length).toBeGreaterThan(0);
  });

  test("Each player in 'players' array has 'name' and 'status'", () => {
    expect(mockPlayersResponse.data.players.every(player => player.hasOwnProperty('name') && player.hasOwnProperty('status'))).toBe(true);
  });

  test("Player names in 'players' array are strings", () => {
    expect(mockPlayersResponse.data.players.every(player => typeof player.name === 'string')).toBe(true);
  });

  test("Player statuses in 'players' array are booleans", () => {
    expect(mockPlayersResponse.data.players.every(player => typeof player.status === 'boolean')).toBe(true);
  });
});

