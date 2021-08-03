import classes from "./ChatMessage.module.css"


const ChatMessage = ({ message, type, onClick, showButtons }) => {
    console.log(message)
    return (

        <div id="cm-msg-5" class={"chat-msg " + type}>
            {
                type === "user" &&
                <span className="msg-avatar">
                    <img src="https://i2.wp.com/cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" />
                </span>
            }

            <div className={"cm-msg-text " + classes.text}>
                {message.text}
            </div>
            <div className="container-msg-buttons">
                {
                    showButtons && message.buttons?.map((btn, index) => {
                        return (
                            <div className={"cm-msg-button"} key={index}>
                                <ul>
                                    <li className={classes.msgbutton}>
                                        <span className="btn btn-primary chat-btn" onClick={e => onClick(btn)} >{btn.name}</span>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ChatMessage;