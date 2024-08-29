
import GameBoard from "./components/GameBoard";
import Header from "./components/Header"
import React, {useState } from "react"

function App() {

  const [player, setPlayer] = useState("one");
  const [score,setScore]  = useState({
    playerOne: 0,
    playerTwo: 0
  })

  return (
    <>
      <Header 
        player={player}
        score={score}
      />
      
      <main>
      <GameBoard 
        player={player} 
        setPlayer={setPlayer}
        setScore={setScore}
      />
      </main>
    </>
  );
}

export default App;
