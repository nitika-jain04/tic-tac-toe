import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";

export default function HeroPage() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}
