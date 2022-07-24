import { style } from "@mui/system";
import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import RealTimeCard from "../components/RealTimeCoinCard";
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
      // console.log(messageHistory)
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

  function isCoinGoingUp(object1, object2) {
    // console.log(`%cCheck mayor que: ${object1 >= object2}`, "color: red ;");
    // console.log(`%cCheck valor que: ${object1}`, "color: green ;");

    return object1 >= object2;
  }

  // console.log(`Last message: ${messageHistory.at(-1).data}`);

  return (
    <div>
      <span>The WebSocket is currently {connectionStatus}</span>
      {/* {lastMessage ? <span> Last message: {lastMessage.data}</span> : null} */}
      {lastMessage ? (
        <span
          className={
            isCoinGoingUp(
              messageHistory.at(-1)?.data,
              messageHistory.at(-2)?.data
            )
              ? styles.verde
              : styles.rojo
          }
        >
          {" "}
          Bitcoin {messageHistory.at(-1)?.data.slice(12, -2)}
        </span>
      ) : null}
      <RealTimeCard
        name="Bitcoin"
        price={messageHistory.at(-1)?.data.slice(12, -2)}
        diffPercent={
          parseFloat(messageHistory.at(-1)?.data.slice(12, -2)) -
          parseFloat(messageHistory.at(-2)?.data.slice(12, -2))
        }
        actualStyle={
          isCoinGoingUp(
            messageHistory.at(-1)?.data,
            messageHistory.at(-2)?.data
          )
            ? "goingUp.primary"
            : "goingUp.secondary"
        }
      ></RealTimeCard>

      {/* <ul>
        {messageHistory.map((message, idx, subida) => (
          <span
            key={idx}
            className={
              isCoinGoingUp(subida[idx].data, subida[idx - 1]?.data)
                ? styles.verde
                : styles.rojo
            }
          >
            {message ? message.data : null}
          </span>
        ))}
      </ul> */}
    </div>
  );
};

export default WebSocketDemo;
