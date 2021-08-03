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
    getDialogType,
  } = useChat();

  useEffect(() => {
    if (messages.length === 0) {
      fetch(
        "https://localhost:44316/api/v1/hotelvalledelvolcan-module/Bot/StartMessage"
      )
        .then((response) => response.json())
        .then((data) => {
          addMessage({ message: data.result, type: "user" });
        });
    }
  }, []);

  const messageButtonClickHandle = (button) => {
    if (button.type === 1) {
      window.location.href = button.data;
      return;
    }

    addMessage({ message: { text: button.name }, type: "self" });

    fetch(
      "https://localhost:44316/api/v1/hotelvalledelvolcan-module/Bot/SendMessage",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: button.value,
          conversationId: getConversationId(),
          entities: getEntities(),
          entityQuestion: getEntityQuestion(),
          dialogType: getDialogType(),
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
          dialogType: getDialogType(),
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
