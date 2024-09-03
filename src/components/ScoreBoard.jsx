import React from 'react';

function ScoreBoard({score}) {
  return (
    <div className="border-2 border-slate-400	rounded-lg bg-gradient-to-bl from-purple-400 via-pink-500 to-red-500 p-8">
       <h2 className="text-2xl p-2">Player One's Score: {score.playerOne}</h2>
       <h2 className="text-2xl p-2">Player Two's Score: {score.playerTwo}</h2>
    </div>
  );
}

export default ScoreBoard;
