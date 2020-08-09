import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import UsersInRoom from "../UsersInRoom/UsersInRoom";

// TODO: Create the CSS or use bootstrap //

let socket;

const Chat = ({ location }) => {
  const ENDPOINT = "localhost:5000";
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");

  // useEffect for 'join'
  useEffect(() => {
    // Save query string to an object ie {Name: x, Room: y} -> destructure
    const { name, room } = queryString.parse(location.search);

    // Initialize socket listening on 'host:port' endpoint
    socket = io(ENDPOINT);

    // Save name + room from the URL query to state
    setName(name);
    setRoom(room);

    // Send join{name:name, room:room} to the server (index.js)
    socket.emit("join", { name, room }, (error) => {
      //Callback from server if error
      if (error) {
        alert(error);
      }
    });
    // onUnmount - Cleanup for useEffect. Calls disconnect from server
    return () => {
      socket.emit("disconnect");
      // Close socket when used disconnects
      socket.off();
    };
  }, [ENDPOINT, location.search]); //only reload page when theese change

  // useEffect for 'message' and 'roomData' (users in room)
  useEffect(() => {
    socket.on("message", message => {
      // Add message to the messages array
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      // Save users in room to state.
      setUsers(users);
    });

    /* // Cleanup
    return () => {
     
    }; */
  }, []); // [messages, users] ---> Causing rerenders!?

  // Function for sending messages
  const sendMessageHandler = (event) => {
    // Prevent browser from refreshing on 'return'/button click
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  /* RENDERING 2 TIMES !? */
  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages name={name} messages={messages} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessageHandler={sendMessageHandler}
        />
      </div>
      <UsersInRoom users={users} />
    </div>
  );
};

export default Chat;
