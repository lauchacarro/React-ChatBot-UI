import { useEffect } from 'react';
import classes from './ChatBox.module.css';
import ChatInput from './ChatInput';
import ChatLog from './ChatLog';
import { useChat } from '../Contexts/ChatContext';

function ChatBox({ Close }) {

  const { messages, addMessage } = useChat();

  useEffect(() => {

    if (messages.length === 0) {
      fetch("https://localhost:44316/api/v1/hotelvalledelvolcan-module/Bot/StartMessage")
      .then(response => response.json())
      .then(data => {
        addMessage({ message: data.result, type: "self" })
      })
    }
  }, [])

  const newMessageHandle = messageText => {
    addMessage({ message: { text: messageText }, type: "user" })

    fetch("https://localhost:44316/api/v1/hotelvalledelvolcan-module/Bot", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageText })
    })
      .then(response => response.json())
      .then(data => {
        addMessage({ message: data.result, type: "self" })
      })

  }

  return (

    <div class={classes.box}>
      <div class={classes.header}>
        ChatBot
        <span class={classes.toggle} onClick={Close}><i class="material-icons">close</i></span>
      </div>
      <div class={classes.body}>
        <div class={classes.overlay}>
        </div>
        <ChatLog messages={messages} typing={false} buttonClick={newMessageHandle} />
      </div>
      <ChatInput SendMessage={newMessageHandle} />
    </div>

  )
}

export default ChatBox;