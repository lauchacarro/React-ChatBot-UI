import classes from "./ChatMessage.module.css"


const ChatMessage = ({ message, type, onClick, showButtons }) => {
    console.log(classes)
    return (

        <div id="cm-msg-5" class={"chat-msg " + type}>
            {
                type === "user" &&
                <span class="msg-avatar">
                    <img src="https://i2.wp.com/cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" />
                </span>
            }

            <div class={"cm-msg-text " + classes.text}>
                {message.text}
            </div>
            {
                showButtons && message.buttons?.map((btn, index) => {
                    return (
                        <div class={"cm-msg-button"} key={index}>
                            <ul>
                                <li class={classes.msgbutton}>
                                    <span class="btn btn-primary chat-btn" onClick={e => onClick(btn)} >{btn.name}</span>
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default ChatMessage;