import useGame from "@/stores/Game.store";

export const initWebSocket = (
  wsUrl: string,
  setWs: (ws: WebSocket) => void
) => {
  const ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    console.log("WebSocket ouvert");
    setWs(ws);
  };

  ws.onclose = () => {
    console.log("WebSocket fermé, tentative de reconnexion...");
    setTimeout(() => initWebSocket(wsUrl, setWs), 3000);
  };

  ws.onerror = (error) => {
    console.error("Erreur WebSocket:", error);
  };

  return ws;
};

export async function sendRequestSocket(
  ws: WebSocket,
  type: string,
  data?: object
) {
  return new Promise((resolve, reject) => {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      reject(new Error("La connexion WebSocket n'est pas ouverte"));
      return;
    }

    const message = {
      type: type,
      data: data || {},
    };
    console.log(JSON.stringify(message))
    ws.send(JSON.stringify(message));
  });
}
