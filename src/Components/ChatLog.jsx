import { useEffect, useState } from 'react';
import classes from './ChatLog.module.css'
import ChatMessage from './ChatMessage';
import ChatTyping from './ChatTyping';

//https://stackoverflow.com/a/41700815/10760567
const ChatLog = ({ messages, typing, buttonClick }) => {

    const [messagesEnd, setMessagesEnd] = useState();

    useEffect(() => {
        messagesEnd?.scrollIntoView({ behavior: "smooth" });
    });

    return (
        <div className={classes.logs}>
            {
                messages?.map((msg, index) => {
                    return (
                        <ChatMessage 
                            message={msg.message} 
                            type={msg.type} 
                            key={index} 
                            showButtons={index == messages.length - 1} 
                            onClick={buttonClick} />
                    )
                })
            }
            {typing && <ChatTyping />}
            <div style={{ float: "left", clear: "both" }}
                ref={(el) => setMessagesEnd(el)}>
            </div>
        </div>
    )
}

export default ChatLog;