import React from 'react';

function ScoreBoard({score}) {
  return (
    <div>
       <h2>Player One Score: {score.playerOne}</h2>
       <h2>Player Two Score: {score.playerTwo}</h2>
    </div>
  );
}

export default ScoreBoard;
