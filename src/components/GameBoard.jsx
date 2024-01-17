export default function GameBoard({ gameBoard, handleMoves }) {
  // const [hasWinner, setWinner] = useState(false);
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // let winner = null;

  // for (const combination of WINNING_COMBINATIONS) {
  //   const firstSquareSymbol =
  //     gameBoard[combination[0].row][combination[0].column];
  //   const secondSquareSymbol =
  //     gameBoard[combination[1].row][combination[1].column];
  //   const thirdSquareSymbol =
  //     gameBoard[combination[2].row][combination[2].column];

  //   if (
  //     firstSquareSymbol &&
  //     firstSquareSymbol === secondSquareSymbol &&
  //     firstSquareSymbol === thirdSquareSymbol
  //   ) {
  //     winner = firstSquareSymbol;
  //     setWinner(true);
  //   }
  // }

  // function handleMoves(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => handleMoves(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
