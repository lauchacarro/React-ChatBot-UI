import React, { useState } from 'react';


const ChatContext = React.createContext([[], () => []]);

const ChatProvider = (props) => {
  const [messages, setMessages] = useState([]);
  return (
    <ChatContext.Provider value={[messages, setMessages]}>
      {props.children}
    </ChatContext.Provider>
  );
}

const useChat = () => {
  const [messages, setMessages] = React.useContext(ChatContext);

  const addMessage = (message) => {

    if (message.type == "self")
      message.message.entityQuestion = getEntityQuestion();
      
    setMessages(array => [...array, message]);
  };

  const getConversationId = () => {
    return messages[0].message.conversationId
  }

  const getEntityQuestion = () => {
    return messages.filter(msg => msg.type == "user")?.pop()?.message.entityQuestion
  }

  const getEntities = () => {
    return messages.filter(msg => msg.type == "user").pop().message.entities
  }

  return { messages, addMessage, getEntities, getConversationId, getEntityQuestion };
};


export { ChatProvider, useChat };