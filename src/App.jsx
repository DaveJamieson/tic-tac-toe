import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {

  const [xSquares, setXSquares] = useState([]);
  const [oSquares, setOSquares] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [player, setPlayer] = useState("One");
  const [score, setScore] = useState({
    playerOne: 0,
    playerTwo: 0,
  });

  function handlePlayAgain() {
    setOSquares([]);
    setXSquares([]);
    setGameWon(false);
    setPlayer("One")
  }

  function handleReset() {
    setOSquares([]);
    setXSquares([]);
    setGameWon(false);
    setPlayer("One")
    setScore({
      playerOne: 0,
      playerTwo: 0
    });
  }


  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-400 relative">
      <div>
        <Header 
        player={player}
        handleReset={handleReset}
        handlePlayAgain={handlePlayAgain}
        gameWon={gameWon}
         />
      </div>
      <div className="w-full min-h-60 flex flex-row justify-around items-center fixed bottom-14">
       
        <div className="min-h-full min-w-90 p-10">
          <ScoreBoard score={score} />
        </div>

        <div className="min-h-full min-w-90 px-10">
          <GameBoard
            player={player}
            setPlayer={setPlayer}
            setScore={setScore}
            oSquares={oSquares}
            xSquares={xSquares}
            setOSquares={setOSquares}
            setXSquares={setXSquares}
            gameWon={gameWon}
            setGameWon={setGameWon}
          />

        </div>
      </div>
    </main>
  );
}

export default App;
