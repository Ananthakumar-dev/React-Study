import React, { useEffect, useState } from "react";
import "./index.css";
// 0 1 2
// 3 4 5
// 6 7 8

function Square({ value, onClick }) {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleSetSquare(value) {
    const fillVal = isXTurn ? "X" : "O";

    const newSquares = [...squares];
    if (newSquares[value] || getWinners(squares)) return false;

    newSquares[value] = fillVal;
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  }

  function getWinners(squares) {
    const winningPattern = [
      [0, 1, 2], //horizontally
      [3, 4, 5], //horizontally
      [6, 7, 8], //horizontally
      [0, 3, 6], //vertically
      [1, 4, 7], //vertically
      [2, 5, 8], //vertically
      [0, 4, 8], //diagonally
      [2, 4, 6], //diagonally
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  }

  useEffect(() => {
    if (!getWinners(squares) && squares.every((el) => el !== "")) {
      setStatus("Match is Draw! Please restart the game");
    } else if (getWinners(squares)) {
      setStatus(`Winner is ${getWinners(squares)}! Please restart the game`);
    } else {
      setStatus(`Next Turn is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <>
      <div className="tic-tac-toe-container">
        <div className="row">
          <Square value={squares[0]} onClick={() => handleSetSquare(0)} />
          <Square value={squares[1]} onClick={() => handleSetSquare(1)} />
          <Square value={squares[2]} onClick={() => handleSetSquare(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => handleSetSquare(3)} />
          <Square value={squares[4]} onClick={() => handleSetSquare(4)} />
          <Square value={squares[5]} onClick={() => handleSetSquare(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => handleSetSquare(6)} />
          <Square value={squares[7]} onClick={() => handleSetSquare(7)} />
          <Square value={squares[8]} onClick={() => handleSetSquare(8)} />
        </div>
      </div>

      <div className="contents">
        <h2>{status}</h2>
        <button type="button" onClick={handleRestart}>
          Restart the Game!
        </button>
      </div>
    </>
  );
}
