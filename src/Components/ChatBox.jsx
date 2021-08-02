import { useEffect } from "react";
import classes from "./ChatBox.module.css";
import ChatInput from "./ChatInput";
import ChatLog from "./ChatLog";
import { useChat } from "../Contexts/ChatContext";

function ChatBox({ Close }) {
  const {
    messages,
    addMessage,
    getConversationId,
    getEntities,
    getEntityQuestion,
  } = useChat();

  useEffect(() => {
    if (messages.length === 0) {
      fetch("https://run.mocky.io/v3/9686b64a-37be-47fd-986b-7498226d3028")
        .then((response) => response.json())
        .then((data) => {
          addMessage({ message: data.result, type: "user" });
        });
    }
  }, []);

  const messageButtonClickHandle = (button) => {
    addMessage({ message: { text: button.name }, type: "self" });

    fetch(
      "https://localhost:44316/api/v1/hotelvalledelvolcan-module/Bot/SendButtonValue",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: button.value,
          conversationId: getConversationId(),
          entities: getEntities(),
          entityQuestion: getEntityQuestion(),
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        addMessage({ message: data.result, type: "user" });
      });
  };

  const newMessageHandle = (messageText) => {
    addMessage({ message: { text: messageText }, type: "self" });

    fetch(
      "https://localhost:44316/api/v1/hotelvalledelvolcan-module/Bot/SendMessage",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: messageText,
          conversationId: getConversationId(),
          entities: getEntities(),
          entityQuestion: getEntityQuestion(),
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        addMessage({ message: data.result, type: "user" });
      });
  };

  return (
    <div className={classes.box}>
      <div className={classes.header}>
        ChatBot
        <span className={classes.toggle} onClick={Close}>
          <i className="material-icons">close</i>
        </span>
      </div>
      <div className={classes.body}>
        <div className={classes.overlay}></div>
        <ChatLog
          messages={messages}
          typing={false}
          buttonClick={messageButtonClickHandle}
        />
      </div>
      <ChatInput SendMessage={newMessageHandle} />
    </div>
  );
}

export default ChatBox;
