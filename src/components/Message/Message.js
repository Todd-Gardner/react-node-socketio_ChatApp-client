import React from "react";

import "./Message.css";

//message holds {user, text}
const Message = ({ name, message: {user, text} }) => {
  // Flag for current user/name
  let isSentByCurrentUser = false;

  // Format name (same as the backend server)
  const trimmedName = name.trim().toLowerCase();

  // Check who sent the message - to diplay on left/right side of screen
  if (user === trimmedName) {
    isSentByCurrentUser = true;
    /* Maybe only have one div below and just change className left/rightr here */
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="nameText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{text}</p>
      </div>
      <p className="nameText pl-10">{user}</p>
    </div>
  );
};

export default Message;
