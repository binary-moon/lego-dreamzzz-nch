import { useEffect, useRef } from "react";
import { useStore } from "../useStore";

type IframeMessage =
  | { action: "updateGameDifficulty"; gameDifficulty: string }
  | { action: "updatePlayAreaSize"; playAreaSize: string }
  | { action: "exitAR" }
  | { action: "change-settings" };

export function Game() {
  const setAppState = useStore((state) => state.setAppState);
  const setGameState = useStore((state) => state.setGameState);
  const gameDifficulty = useStore((state) => state.gameDifficulty);
  const playAreaSize = useStore((state) => state.playAreaSize);
  const setGameRank = useStore((state) => state.setGameRank);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.action === "exitAR") {
        const userRank = event.data.userRank;
        setGameRank(userRank);
        setGameState("inactive");
        setAppState(4);
      } else if (event.data.action === "change-settings") {
        setGameState("inactive");
        setAppState(2);
      } else if (event.data.action === "loadedAr") {
        sendMessageToIframe({ action: "updateGameDifficulty", gameDifficulty });
        sendMessageToIframe({ action: "updatePlayAreaSize", playAreaSize });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setAppState, setGameState, gameDifficulty, playAreaSize]);

  const sendMessageToIframe = (message: IframeMessage) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(message, "*");
    }
  };

  useEffect(() => {
    sendMessageToIframe({ action: "updateGameDifficulty", gameDifficulty });
  }, [gameDifficulty]);

  useEffect(() => {
    sendMessageToIframe({ action: "updatePlayAreaSize", playAreaSize });
  }, [playAreaSize]);

  return (
    <iframe
      ref={iframeRef}
      className="h-full w-full"
      src={`/game/index.html`}
      frameBorder="0"
      allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
      allowFullScreen
    />
  );
}
