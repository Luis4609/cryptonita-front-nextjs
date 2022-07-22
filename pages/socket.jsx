import { style } from "@mui/system";
import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import styles from "../styles/Home.module.css";

const WebSocketDemo = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState(
    "wss://ws.coincap.io/prices?assets=bitcoin"
  );
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  // const handleClickChangeSocketUrl = useCallback(
  //   () => setSocketUrl("wss://ws.coincap.io/prices?assets=bitcoin"),
  //   []
  // );

  // const handleClickSendMessage = useCallback(() => sendMessage("Hello"), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  function isCoinEqual(object1, object2) {
    console.log(`%cCheck mayor que: ${object1 >= object2}`, "color: red ;");
    console.log(`%cCheck valor que: ${object1}`, "color: green ;");

    return object1 >= object2;
  }

  return (
    <div>
      {/* <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send 'Hello'
      </button> */}
      <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx, subida) => (
          <span
            key={idx}
            className={
              isCoinEqual(subida[idx].data, subida[idx - 1]?.data)
                ? styles.verde
                : styles.rojo
            }
          >
            {message ? message.data : null}
            {/* {console.log(subida[idx].data)} */}
          </span>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketDemo;
