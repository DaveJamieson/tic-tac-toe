import React from "react";

function Header({ player, handleReset, handlePlayAgain, gameWon }) {
  return (
    <div className="w-full min-h-40 flex flex-col items-center justify-center md:p-10">
      <h1 className="text-center text-6xl font-semibold p-2 mb-16 md:mb-8">TIC TAC TOE</h1>
      <div className="flex flex-col md:flex-row gap-10">
        {!gameWon && (
          <h2 className="text-2xl p-2 mb-3 border-2 border-slate-400 rounded-lg bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
            Player {player} - Your turn!!
          </h2>
        )}
        {gameWon && (
          <h2 className="block md:hidden text-2xl p-2 border-2 border-slate-400 rounded-lg bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
            Player {player === "One" ? "Two" : "One"} Won!!
          </h2>
        )}
        {gameWon && (
          <>
            <span
              className="text-2xl p-2 border-2 border-slate-400	rounded-lg bg-gradient-to-tl from-purple-400 via-pink-500 to-red-500"
              onClick={handlePlayAgain}
            >
              PLAY AGAIN
            </span>
            <span
              className="text-2xl p-2 border-2 border-slate-400	rounded-lg bg-gradient-to-tl from-purple-400 via-pink-500 to-red-500"
              onClick={handleReset}
            >
              RESET
            </span>
            </>
        )}
        {gameWon && (
          <h2 className="hidden md:block text-2xl p-2 border-2 border-slate-400 rounded-lg bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500">
            Player {player === "One" ? "Two" : "One"} Won!!
          </h2>
        )}
      </div>
    </div>
  );
}

export default Header;
