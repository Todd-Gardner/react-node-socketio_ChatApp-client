import React from "react";

import "./Input.css";

// Or use div

const Input = ({ message, setMessage, sendMessageHandler }) => (
  <form className="form">
    <input
      className="input"
      placeholder="Enter your message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      /* onChange{({ target: { value } }) => setMessage(value)} */
      onKeyPress={(event) => event.key === "Enter" && sendMessageHandler(event)}
    />
    <button
      className="sendButton"
      onClick={(event) => sendMessageHandler(event)}
    >
      Send
    </button>
  </form>
);

export default Input;
