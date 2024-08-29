import React from 'react';

function Header({player,score}) {
  return (
    <div className="header">
      <h1>TIC TAC TOE</h1>
      <h2>Player {player} - Your turn!!</h2>
      <h2>Player One Score: {score.playerOne}</h2>
      <h2>Player Two Score: {score.playerTwo}</h2>
    </div>
  );
}

export default Header;
