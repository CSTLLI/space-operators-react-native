import WebSocket from "ws";
import { test, describe, expect } from "@jest/globals";

describe("WebSocket connection", () => {
  const ws = new WebSocket(process.env.API_URL);

  test("Connection is established", () => {
    ws.on("open", () => {
      expect(ws.readyState).toBe(1);
    });
  });

  test("Connection return pong", () => {
    ws.on("open", () => {
      ws.send("ping");
    });

    ws.on("message", () => {
      if (ws.message === "pong") {
        expect(ws.message).toBe("pong");
      }
    });
  });
});
