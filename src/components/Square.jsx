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
    <div className=" bg-blue-600 hover:bg-blue-800  text-slate-50 text-4xl cursor-pointer rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] flex items-center justify-center w-28 h-28" id={id}>
      {showX ? "X" : ""}
      {showO ? "O" : ""}
    </div>
  ) : (
    <div className=" bg-blue-600 hover:bg-blue-800 text-slate-50 text-4xl cursor-pointer rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] flex items-center justify-center w-28 h-28" id={id} onClick={(e) => handleSquareClick(e)}>
      {showX ? "X" : ""}
      {showO ? "O" : ""}
    </div>
  );
}

export default Square;
