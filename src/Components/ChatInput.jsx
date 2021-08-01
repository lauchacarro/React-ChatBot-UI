import { useState } from 'react';
import classes from './ChatInput.module.css'

const ChatInput = ({ SendMessage }) => {

    const [message, setMessage] = useState();

    const handleButtonOnClick = () => {
        SendMessage(message);
        setMessage("")
    }

    return (
        <div>
            <input type="text" class={classes.input} placeholder="Send a message..." value={message} onChange={e => setMessage(e.target.value)} />
            <button type="submit" class={classes.submit} onClick={handleButtonOnClick}><i class="material-icons">send</i></button>

        </div>
    )
}


export default ChatInput;