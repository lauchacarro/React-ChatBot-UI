import ChatBox from './ChatBox'
import ChatCircleButton from './ChatCircleButton'
import { ChatProvider } from '../Contexts/ChatContext';
import { useState } from 'react'

const ChatBody = () => {

    const [showBox, setShowBox] = useState(false);

    return (

        <ChatProvider>
            {!showBox && <ChatCircleButton Click={() => setShowBox(true)} />}

            {showBox && <ChatBox Close={() => setShowBox(false)} />}
        </ChatProvider>

    )
}


export default ChatBody;