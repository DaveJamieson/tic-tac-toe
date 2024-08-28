import React from "react";
import Square from "./square";
function GameBoard () {

    const squareArr = [0,1,2,3,4,5,6,7,8]    




    return (
        <div className="board">
            {squareArr.map((square,i) => {
                return <Square key={i} />
            })}
        </div>
    )
}

export default GameBoard