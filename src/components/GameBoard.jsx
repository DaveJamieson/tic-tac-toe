import React, { useEffect } from "react";
import Square from "./Square";

function GameBoard({ player, setPlayer, setScore, oSquares, xSquares, setOSquares, setXSquares, gameWon, setGameWon }) {
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


  return (
    <section className=" bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg md:py-10 p-1 mx-1 mb-5">

      {/* <p>{xSquares}</p>
      <p>{oSquares}</p> */}
      <div className="grid grid-cols-3 justify-center items-center gap-3 p-2 md:px-10">
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
    </section>
  );
}

export default GameBoard;
