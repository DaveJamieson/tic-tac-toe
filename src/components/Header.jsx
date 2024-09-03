import React from 'react';

function Header({player, handleReset, handlePlayAgain, gameWon}) {
  return (
    <div className="w-full min-h-40 flex flex-col items-center gap-10 justify-between p-10 relative ">
      <h1 className="text-6xl font-semibold p-2 mb-16">TIC TAC TOE</h1>
      {!gameWon && <h2 className="text-2xl p-2 border-2 border-slate-400 rounded-lg bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 absolute bottom-0 right-44">Player {player} - Your turn!!</h2>}
      {gameWon && (
        <div className="flex gap-10 absolute bottom-0 left-28">
          <span className="text-2xl p-2 border-2 border-slate-400	rounded-lg bg-gradient-to-tl from-purple-400 via-pink-500 to-red-500" onClick={handlePlayAgain}>PLAY AGAIN</span>
          <span className="text-2xl p-2 border-2 border-slate-400	rounded-lg bg-gradient-to-tl from-purple-400 via-pink-500 to-red-500" onClick={handleReset}>RESET</span>
        </div>
      )}
      {gameWon && <h2 className="text-2xl p-2 border-2 border-slate-400 rounded-lg bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 absolute bottom-0 right-48">Player {player === "One" ? "Two" : "One"} Won!!</h2>}
    </div>
  );
}

export default Header;
