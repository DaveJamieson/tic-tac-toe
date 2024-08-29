import React, { useState, useEffect } from "react"

function Square ({  player, setPlayer, id, setXSquares, setOSquares, handleWin, xSquares, oSquares  }) {

    const [showX, setShowX] = useState(false);
    const [showO, setShowO] = useState(false);

    const handleSquareClick = (e) => {
        
        if(showX || showO) {
            return;
            
        } else if(player === "one"){
            setShowX(true);
            setPlayer("two");
            console.log("id = ", e.target.id)
            setXSquares(xSquares => [...xSquares, e.target.id])
        } else {
            setShowO(true);
            setPlayer("one");
            console.log("id = ", e.target.id)
            setOSquares(oSquares => [...oSquares, (e.target.id)
            ])
        };
         
    };

    

    return (

        <div className="square"  id={id} onClick= {(e) => handleSquareClick(e)}>
            {showX ? "X" : "" }
            {showO ? "O" : ""}   
        </div>
    )
}

export default Square