import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sendMessageHandler }) => (
  <form className="form">
    <input // Use && not ?
      className="input"
      placeholder="Enter your message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) => event.key === "Enter" && sendMessageHandler(event)}
    />
    <button className="sendButton" onClick={(event) => sendMessageHandler(event)}>
      Send
    </button>
  </form>
);

export default Input;
