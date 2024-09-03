import React from 'react';

function Header({player, handleReset, handlePlayAgain, gameWon}) {
  return (
    <div className="flex flex-col items-center gap-10 justify-between p-10">
      <h1>TIC TAC TOE</h1>
      {!gameWon && <h2>Player {player} - Your turn!!</h2>}
      {gameWon && (
        <div className="">
          <span onClick={handlePlayAgain}>PLAY AGAIN</span>
          <span onClick={handleReset}>RESET</span>
        </div>
      )}
    
    </div>
  );
}

export default Header;
