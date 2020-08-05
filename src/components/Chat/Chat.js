import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";

// TODO: Create the CSS or use bootstrap //

let socket;

const Chat = ({ location }) => {
  const ENDPOINT = "localhost:5000";
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    // Save query string to an object ie {Name: x, Room: y} -> destructure
    const { name, room } = queryString.parse(location.search);

    // Initialize socket listening on 'host:port' endpoint
    socket = io(ENDPOINT);

    // Save name + room from the URL query to state
    setName(name);
    setRoom(room);

    // Send join{name:name, room:room} to the server (index.js)
    socket.emit("join", { name, room }, () => { }); //Callback from server
    
    // onUnmount - Cleanup for useEffect. Calls disconnect from server
    return () => {
      socket.emit('disconnect');

      // Close socket when used disconnects
      socket.off();
    }
  }, [ENDPOINT, location.search]); //only reload page when theese change

  return (
    <div>
      <h1>Chat Page</h1>
      <h3>Welcome {name}!</h3>
    </div>
  );
};

export default Chat;
