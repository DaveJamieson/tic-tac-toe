function Square({ player, setPlayer, id, setXSquares, setOSquares, gameWon, showX, showO }) {

  const handleSquareClick = (e) => {
    if (showX || showO) {
      return;
    } else if (player === "one") {
      setPlayer("two");
      console.log("id = ", e.target.id);
      console.log(showX);
      console.log(id);
      setXSquares((xSquares) => [...xSquares, e.target.id]);
    } else {
        setPlayer("one");
        console.log("id = ", e.target.id);
        console.log(showO);
        console.log(id);
      setOSquares((oSquares) => [...oSquares, e.target.id]);
    }
  };

  return gameWon === true ? (
    <div className="square" id={id}>
      {showX ? "X" : ""}
      {showO ? "O" : ""}
    </div>
  ) : (
    <div className="square" id={id} onClick={(e) => handleSquareClick(e)}>
      {showX ? "X" : ""}
      {showO ? "O" : ""}
    </div>
  );
}

export default Square;
