import React, { useState, useEffect } from "react";
import Square from "./Square";

function GameBoard() {
  const winningArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const squareArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [xSquares, setXSquares] = useState([]);
  const [oSquares, setOSquares] = useState([]);
  const [player, setPlayer] = useState("");

  useEffect(() => {
    for (let array of winningArrays) {
      if (
        xSquares.includes(array[0].toString()) &&
        xSquares.includes(array[1].toString()) &&
        xSquares.includes(array[2].toString())
      ) {
        console.log("X wins");
      } else if (
        oSquares.includes(array[0].toString()) &&
        oSquares.includes(array[1].toString()) &&
        oSquares.includes(array[2].toString())
      ) {
        console.log("O wins");
      }
    }
  }, [xSquares, oSquares]);

  return (
    <div className="board">
      {squareArr.map((item, i) => {
        return (
          <Square
            key={i}
            player={player}
            setPlayer={setPlayer}
            id={item}
            setOSquares={setOSquares}
            setXSquares={setXSquares}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;
