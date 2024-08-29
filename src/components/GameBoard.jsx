import React, { useState, useEffect } from "react";
import Square from "./Square";

function GameBoard({ player, setPlayer, setScore }) {
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
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    for (let array of winningArrays) {
      if (
        xSquares.includes(array[0].toString()) &&
        xSquares.includes(array[1].toString()) &&
        xSquares.includes(array[2].toString())
      ) {
        console.log("X wins");
        setGameWon(true);
        setScore((prev) => ({ ...prev, playerOne: prev.playerOne + 1 }));
      } else if (
        oSquares.includes(array[0].toString()) &&
        oSquares.includes(array[1].toString()) &&
        oSquares.includes(array[2].toString())
      ) {
        console.log("O wins");
        setGameWon(true);
        setScore((prev) => ({ ...prev, playerTwo: prev.playerTwo + 1 }));
      }
    }
  }, [xSquares, oSquares]);

  function handlePlayAgain() {
    setOSquares([]);
    setXSquares([]);
    setGameWon(false);
  }

  function handleReset() {
    setOSquares([]);
    setXSquares([]);
    setGameWon(false);
    setScore({
      playerOne: 0,
      playerTwo: 0
    });
  }

  return (
    <main>
      {gameWon && (
        <div className="buttons">
          <span onClick={handlePlayAgain}>PLAY AGAIN</span>
          <span onClick={handleReset}>RESET</span>
        </div>
      )}
      <p>{xSquares}</p>
      <p>{oSquares}</p>
      <div className="board">
        {squareArr.map((item, i) => {
          let showX 
           xSquares.includes(item.toString()) ? showX = true : showX = false;
          let showO 
           oSquares.includes(item.toString()) ? showO = true : showO = false;
          return (
          
            <Square
              key={i}
              showX={showX}
              showO={showO}
              player={player}
              setPlayer={setPlayer}
              id={item}
              setOSquares={setOSquares}
              setXSquares={setXSquares}
              gameWon={gameWon}

            />  
          );
        })}
      </div>
    </main>
  );
}

export default GameBoard;
