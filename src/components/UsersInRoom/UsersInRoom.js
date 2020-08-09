import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./UsersInRoom.css";

const UsersInRoom = ({ users }) => {
  return (
    <div className="textContainer">
      <div>
        <h1>
          Realtime Chat Application{" "}
          <span role="img" aria-label="chat emoji">
            💬
          </span>
        </h1>
        <h2>
          Created with React, Express, Node and Socket.IO{" "}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
        </h2>
        <h2>
          Try it out right now!{" "}
          <span role="img" aria-label="arrow emoji">
            ⬅️
          </span>
        </h2>
      </div>
      {users && (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name, id }) => (
                <div key={id} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
export default UsersInRoom;
