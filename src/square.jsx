import React, { useState } from "react"

function Square ({ key }) {

        const [showX, setShowX] = useState(false)
        const [showO, setShowO] = useState(false)


        const handleSquareClick = () => {
            if(playerOne) {
                setShowX(true)
                setPlayer("One")
            } else if (playerTwo) {
                setShowO(true)
                setPlayer("two")
            }
        }

        return (

            <div className="square" key={key} onClick={handleSquareClick} >
                <h1>{showX ? "X" : ""}{showO? "O" : ""}</h1>
            </div>
        )
}

export default Square