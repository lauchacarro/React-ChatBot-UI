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
    setMessages(array =>  [...array, message]);
  };
 
  return { messages, addMessage };
};


export { ChatProvider, useChat };