import { useState } from "react";
import classes from "./ChatInput.module.css";

const ChatInput = ({ SendMessage }) => {
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    SendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="text"
          className={classes.input}
          placeholder="Hazme una pregunta..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className={classes.submit}>
          <i className="material-icons">send</i>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
