function ChatCircleButton({Click}) {
    return (
        <div id="chat-circle" class="btn btn-raised" onClick={e => Click()}>
          <div id="chat-overlay"></div>
          <i class="material-icons">speaker_phone</i>
        </div>
    )
}

export default ChatCircleButton;