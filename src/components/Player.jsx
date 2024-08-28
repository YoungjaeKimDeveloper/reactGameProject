import React from "react";
import { useState } from "react";
const Player = ({ name, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  const handleUserName = (e) => {
    setPlayerName(e.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {/* Get the user input and change the name */}
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={(e) => handleUserName(e)}
          />
        ) : (
          <span className="player-name ">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
