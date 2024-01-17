import { useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";
import { WINNING_COMBINATIONS } from "../Winning-Combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function HeroPage() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [hasWinner, setWinner] = useState(false);
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  function handleMoves(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayer;
      return updatedGameBoard;
    });

    handleSelectSquare();
  }

  useEffect(() => {
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];

      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        setWinner(true);
      }
    }
  }, [gameBoard]);

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
        {hasWinner && <p>You won, {activePlayer === "X" ? "O" : "X"}</p>}
        <GameBoard
          gameBoard={gameBoard}
          handleMoves={handleMoves}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}
