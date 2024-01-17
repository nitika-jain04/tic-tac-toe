import { useState } from "react";

export default function Player({ initialName, playerSymbol, isActive }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleButtonClick() {
    setButtonClicked(!buttonClicked);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={`player ${isActive ? "active" : undefined}`}>
      {buttonClicked ? (
        <input
          type="text"
          required
          value={playerName}
          onChange={handleChange}
        />
      ) : (
        <span className="player-name">{playerName}</span>
      )}
      <span className="player-symbol">{playerSymbol}</span>

      <button onClick={handleButtonClick}>
        {buttonClicked ? "Save" : "Edit"}
      </button>
    </li>
  );
}
