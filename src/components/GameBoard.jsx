import React, { useState } from "react";
//initalGameBoard
const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onHandleSquare }) => {
  // Inital gameBoard
  // const [gameBoard, setGameBoard] = useState(initalGameBoard);
  // // Main Logic
  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayersSymbol;
  //     return updatedBoard;
  //   });
  //   onHandleSquare();
  // };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={onHandleSquare}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
  index;
};

export default GameBoard;
